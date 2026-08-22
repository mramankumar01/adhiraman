// ============================================================
// mcq.practice — vanilla JS SPA
// Hash-based routing, localStorage persistence (per-device),
// Chart.js for the results/stats charts.
// ============================================================

const SECONDS_PER_QUESTION = 60; // timer allowance per question
const MAX_SET_SIZE = 60;         // auto-split topics larger than this
const PASS_THRESHOLD = 40;       // % needed to "Pass"

const $app = document.getElementById("app");
const $navbar = document.getElementById("navbar");

// ---------------- storage helpers ----------------
const store = {
  getUser() {
    try { return JSON.parse(localStorage.getItem("mcq_user")); } catch { return null; }
  },
  setUser(name) {
    localStorage.setItem("mcq_user", JSON.stringify({ name }));
  },
  clearUser() {
    localStorage.removeItem("mcq_user");
  },
  getAttempts() {
    try { return JSON.parse(localStorage.getItem("mcq_attempts")) || []; } catch { return []; }
  },
  saveAttempt(attempt) {
    const all = store.getAttempts();
    all.push(attempt);
    localStorage.setItem("mcq_attempts", JSON.stringify(all));
  },
  getAttempt(id) {
    return store.getAttempts().find(a => a.id === id);
  },
  getTheme() {
    return localStorage.getItem("mcq_theme") || "light";
  },
  setTheme(t) {
    localStorage.setItem("mcq_theme", t);
  },
};

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function fmtClock(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function fmtDuration(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.innerText = str;
  return d.innerHTML;
}

// ---------------- topic / set helpers ----------------
function getTopicSets() {
  // Returns a flat list of "startable" sets, one card per set.
  const sets = [];
  Object.keys(QUESTION_BANK).forEach(topicId => {
    const all = QUESTION_BANK[topicId];
    const label = TOPIC_LABELS[topicId] || topicId;
    if (all.length <= MAX_SET_SIZE) {
      sets.push({ topicId, setIndex: 0, label, questions: all, count: all.length });
    } else {
      const numSets = Math.ceil(all.length / MAX_SET_SIZE);
      for (let i = 0; i < numSets; i++) {
        const chunk = all.slice(i * MAX_SET_SIZE, (i + 1) * MAX_SET_SIZE);
        sets.push({
          topicId,
          setIndex: i,
          label: `${label} (Set ${i + 1})`,
          questions: chunk,
          count: chunk.length,
        });
      }
    }
  });
  return sets;
}

function findSet(topicId, setIndex) {
  return getTopicSets().find(s => s.topicId === topicId && s.setIndex === Number(setIndex));
}

// ---------------- router ----------------
let pendingAfterLogin = null; // e.g. "#/test/java/0"
let testState = null;         // in-progress test, kept in memory
let timerHandle = null;

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  return parts;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("data-theme", store.getTheme());
  if (!location.hash) location.hash = "#/topics";
  render();
});

function navigate(hash) {
  if (location.hash === hash) { render(); } else { location.hash = hash; }
}

function render() {
  clearInterval(timerHandle);
  const parts = parseHash();
  renderNavbar();

  if (parts[0] === "login") return renderLogin();
  if (parts[0] === "stats") return renderStats();
  if (parts[0] === "test" && parts[1] !== undefined) return renderTest(parts[1], parts[2] || "0");
  if (parts[0] === "results" && parts[1]) return renderResults(parts[1]);
  return renderTopics();
}

// ---------------- navbar ----------------
function renderNavbar() {
  const user = store.getUser();
  const theme = store.getTheme();
  $navbar.innerHTML = `
    <div class="navbar">
      <a class="brand" onclick="navigate('#/topics')">mcq. practice</a>
      <div class="right">
        <a onclick="navigate('#/stats')">My stats</a>
        ${user
          ? `<span class="username">${escapeHtml(user.name)}</span><span class="link" onclick="doLogout()">Log out</span>`
          : `<span class="link" onclick="navigate('#/login')">Log in</span>`}
        <button class="theme-toggle" title="Toggle theme" onclick="toggleTheme()">${theme === "dark" ? "☀" : "🌙"}</button>
      </div>
    </div>`;
}

function toggleTheme() {
  const next = store.getTheme() === "dark" ? "light" : "dark";
  store.setTheme(next);
  document.documentElement.setAttribute("data-theme", next);
  renderNavbar();
}

function doLogout() {
  store.clearUser();
  navigate("#/topics");
}

// ---------------- login ----------------
function renderLogin() {
  $app.innerHTML = `
    <div class="page-narrow login-box">
      <h1 class="title">Log in</h1>
      <p class="subtitle">Just a name — used to label your local practice history.</p>
      <div class="panel">
        <label class="field-label" for="nameInput">Your name</label>
        <input id="nameInput" class="text-input" placeholder="e.g. Adhir" autofocus />
        <button class="btn btn-primary btn-block" onclick="submitLogin()">Log in</button>
      </div>
    </div>`;
  document.getElementById("nameInput").addEventListener("keydown", e => {
    if (e.key === "Enter") submitLogin();
  });
}

function submitLogin() {
  const val = document.getElementById("nameInput").value.trim();
  if (!val) return;
  store.setUser(val);
  const target = pendingAfterLogin;
  pendingAfterLogin = null;
  navigate(target || "#/topics");
}

// ---------------- topics ----------------
function renderTopics() {
  const sets = getTopicSets();
  $app.innerHTML = `
    <h1 class="title">Practice tests</h1>
    <p class="subtitle">Pick a topic to start a free practice run. You'll need to log in before taking a test so your score gets saved to your history.</p>
    <input class="search-input" id="topicSearch" placeholder="Search topics..." oninput="filterTopics(this.value)" />
    <div class="topic-grid" id="topicGrid"></div>`;
  renderTopicGrid(sets);
}

function renderTopicGrid(sets) {
  const grid = document.getElementById("topicGrid");
  if (sets.length === 0) {
    grid.innerHTML = `<div class="empty-state">No topics match your search.</div>`;
    return;
  }
  grid.innerHTML = sets.map(s => `
    <div class="topic-card">
      <h4>${escapeHtml(s.label)}</h4>
      <div class="count">${s.count} questions</div>
      <button class="btn btn-primary" onclick="startTest('${s.topicId}', ${s.setIndex})">Start test</button>
    </div>`).join("");
}

function filterTopics(q) {
  const query = q.trim().toLowerCase();
  const sets = getTopicSets().filter(s => s.label.toLowerCase().includes(query));
  renderTopicGrid(sets);
}

// ---------------- test taking ----------------
function startTest(topicId, setIndex) {
  if (!store.getUser()) {
    pendingAfterLogin = `#/test/${topicId}/${setIndex}`;
    navigate("#/login");
    return;
  }
  navigate(`#/test/${topicId}/${setIndex}`);
}

function renderTest(topicId, setIndexStr) {
  const setIndex = Number(setIndexStr);
  if (!store.getUser()) {
    pendingAfterLogin = `#/test/${topicId}/${setIndex}`;
    navigate("#/login");
    return;
  }

  // (Re)initialize test state if switching to a different test
  if (!testState || testState.topicId !== topicId || testState.setIndex !== setIndex) {
    const set = findSet(topicId, setIndex);
    if (!set) {
      $app.innerHTML = `<div class="empty-state">That test couldn't be found.</div>`;
      return;
    }
    testState = {
      topicId,
      setIndex,
      label: set.label,
      questions: set.questions,
      answers: new Array(set.questions.length).fill(null),
      visited: new Array(set.questions.length).fill(false),
      currentIndex: 0,
      durationSec: set.questions.length * SECONDS_PER_QUESTION,
      startedAt: Date.now(),
    };
  }

  drawTest();
  timerHandle = setInterval(() => {
    const elapsed = (Date.now() - testState.startedAt) / 1000;
    const remaining = testState.durationSec - elapsed;
    if (remaining <= 0) {
      clearInterval(timerHandle);
      submitTest(true);
      return;
    }
    const el = document.getElementById("timerDisplay");
    if (el) {
      el.textContent = fmtClock(remaining);
      el.classList.toggle("low", remaining < 60);
    }
  }, 1000);
}

function drawTest() {
  const t = testState;
  const total = t.questions.length;
  const idx = t.currentIndex;
  const q = t.questions[idx];
  t.visited[idx] = true;

  const answeredCount = t.answers.filter(a => a !== null).length;
  const unansweredCount = total - answeredCount;
  const elapsed = (Date.now() - t.startedAt) / 1000;
  const remaining = Math.max(0, t.durationSec - elapsed);

  $app.innerHTML = `
    <div class="test-header">
      <div class="progress-track"><div class="progress-fill" style="width:${(answeredCount / total) * 100}%"></div></div>
      <div id="timerDisplay" class="timer ${remaining < 60 ? "low" : ""}">${fmtClock(remaining)}</div>
    </div>
    <div class="test-layout">
      <div>
        <div class="q-meta">Question ${idx + 1} of ${total} · ${answeredCount} answered · ${unansweredCount} unanswered · ${escapeHtml(t.label)}</div>
        <div class="q-text">${escapeHtml(q.q)}${Array.isArray(q.correct) ? ' <span class="multi-hint">(select all that apply)</span>' : ""}</div>
        <div id="optionsWrap">
          ${q.options.map((opt, i) => {
            const isMulti = Array.isArray(q.correct);
            const sel = t.answers[idx];
            const isSelected = isMulti ? (Array.isArray(sel) && sel.includes(i)) : sel === i;
            return `<button class="option ${isSelected ? "selected" : ""}" onclick="selectOption(${i})">${isMulti ? `<span class="checkbox ${isSelected ? "checked" : ""}"></span>` : ""}${escapeHtml(opt)}</button>`;
          }).join("")}
        </div>
        <div class="test-actions">
          <button class="btn btn-outline" ${idx === 0 ? "disabled" : ""} onclick="goPrev()">Previous</button>
          <button class="btn btn-outline" onclick="goSkip()">Skip</button>
          <button class="btn btn-outline" ${idx === total - 1 ? "disabled" : ""} onclick="goNext()">Next</button>
          <div class="spacer"></div>
          <button class="btn btn-primary" onclick="confirmSubmit()">Submit test</button>
        </div>
      </div>
      <div class="qnav">
        <div class="panel">
          <div class="legend" style="margin-bottom:14px;">
            <span><span class="dot" style="background:var(--green)"></span>Answered</span>
            <span><span class="dot" style="background:#d97706"></span>Skipped</span>
            <span><span class="dot" style="background:var(--card);border:1px solid var(--border)"></span>Not visited</span>
          </div>
          <div class="qnav-grid" id="qnavGrid"></div>
        </div>
      </div>
    </div>`;

  const grid = document.getElementById("qnavGrid");
  grid.innerHTML = t.questions.map((_, i) => {
    let cls = "";
    if (t.answers[i] !== null) cls = "answered";
    else if (t.visited[i]) cls = "skipped";
    if (i === idx) cls += " current";
    return `<button class="qnum ${cls}" onclick="goTo(${i})">${i + 1}</button>`;
  }).join("");
}

function selectOption(i) {
  const q = testState.questions[testState.currentIndex];
  const isMulti = Array.isArray(q.correct);
  const cur = testState.answers[testState.currentIndex];
  if (isMulti) {
    const set = Array.isArray(cur) ? cur.slice() : [];
    const at = set.indexOf(i);
    if (at >= 0) set.splice(at, 1); else set.push(i);
    testState.answers[testState.currentIndex] = set.length ? set.sort((a, b) => a - b) : null;
  } else {
    testState.answers[testState.currentIndex] = i;
  }
  drawTest();
}

function goPrev() {
  if (testState.currentIndex > 0) { testState.currentIndex--; drawTest(); }
}
function goNext() {
  if (testState.currentIndex < testState.questions.length - 1) { testState.currentIndex++; drawTest(); }
}
function goSkip() {
  testState.visited[testState.currentIndex] = true;
  if (testState.currentIndex < testState.questions.length - 1) testState.currentIndex++;
  drawTest();
}
function goTo(i) {
  testState.currentIndex = i;
  drawTest();
}

function confirmSubmit() {
  const unanswered = testState.answers.filter(a => a === null).length;
  if (unanswered > 0) {
    const ok = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`);
    if (!ok) return;
  }
  submitTest(false);
}

function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  const sa = [...a].sort((x, y) => x - y);
  const sb = [...b].sort((x, y) => x - y);
  return sa.every((v, i) => v === sb[i]);
}

function isAnswerCorrect(userAns, correct) {
  if (userAns === null || userAns === undefined) return false;
  if (Array.isArray(correct)) return arraysEqual(userAns, correct);
  return userAns === correct;
}

function submitTest(autoSubmitted) {
  clearInterval(timerHandle);
  const t = testState;
  const total = t.questions.length;
  let correct = 0, incorrect = 0, unanswered = 0;
  t.questions.forEach((q, i) => {
    if (t.answers[i] === null) unanswered++;
    else if (isAnswerCorrect(t.answers[i], q.correct)) correct++;
    else incorrect++;
  });
  const elapsed = Math.min(t.durationSec, (Date.now() - t.startedAt) / 1000);
  const accuracy = Math.round((correct / total) * 100);

  const attempt = {
    id: uuid(),
    topicId: t.topicId,
    setIndex: t.setIndex,
    label: t.label,
    questions: t.questions,
    answers: t.answers.slice(),
    total, correct, incorrect, unanswered,
    accuracy,
    timeTakenSec: Math.round(elapsed),
    date: new Date().toISOString(),
    autoSubmitted: !!autoSubmitted,
  };
  store.saveAttempt(attempt);
  testState = null;
  navigate(`#/results/${attempt.id}`);
}

// ---------------- results + review ----------------
function renderResults(id) {
  const a = store.getAttempt(id);
  if (!a) {
    $app.innerHTML = `<div class="empty-state">That result couldn't be found on this device.</div>`;
    return;
  }
  const passed = a.accuracy >= PASS_THRESHOLD;
  const attempted = a.total - a.unanswered;

  $app.innerHTML = `
    <div class="score-hero">
      <div class="big">${a.correct}/${a.total}</div>
      <div class="pct">(${a.accuracy}%) on <strong>${escapeHtml(a.label)}</strong></div>
      <span class="badge ${passed ? "" : "fail"}">${passed ? "Pass" : "Fail"}</span>
      ${a.autoSubmitted ? `<span class="badge fail">Time expired — auto-submitted</span>` : ""}
    </div>

    <div class="stat-grid">
      <div class="stat-card"><div class="num">${a.total}</div><div class="label">Total questions</div></div>
      <div class="stat-card"><div class="num">${attempted}</div><div class="label">Attempted</div></div>
      <div class="stat-card green"><div class="num">${a.correct}</div><div class="label">Correct</div></div>
      <div class="stat-card red"><div class="num">${a.incorrect}</div><div class="label">Incorrect</div></div>
      <div class="stat-card"><div class="num">${a.unanswered}</div><div class="label">Unanswered</div></div>
      <div class="stat-card"><div class="num">${a.accuracy}%</div><div class="label">Accuracy</div></div>
      <div class="stat-card"><div class="num">${fmtClock(a.timeTakenSec)}</div><div class="label">Time taken</div></div>
    </div>

    <div class="chart-row">
      <div class="panel"><h3>Answer breakdown</h3><canvas id="donutChart" height="220"></canvas></div>
      <div class="panel"><h3>Counts</h3><canvas id="barChart" height="220"></canvas></div>
    </div>

    <h2 class="title" style="font-size:22px;">Question review</h2>
    <div id="reviewList"></div>`;

  // Draw the review list first so it always shows even if charts fail
  // for some reason (e.g. Chart.js didn't load) — the two are independent.
  drawReview(a);
  try {
    drawCharts(a);
  } catch (err) {
    console.error("Chart rendering failed:", err);
    ["donutChart", "barChart"].forEach(id => {
      const c = document.getElementById(id);
      if (c) c.replaceWith(Object.assign(document.createElement("div"), {
        className: "empty-state",
        textContent: "Chart could not be rendered.",
      }));
    });
  }
}

function drawCharts(a) {
  const textColor = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
  new Chart(document.getElementById("donutChart"), {
    type: "doughnut",
    data: {
      labels: ["Correct", "Incorrect", "Unanswered"],
      datasets: [{
        data: [a.correct, a.incorrect, a.unanswered],
        backgroundColor: ["#15803d", "#b91c1c", "#c7c7c5"],
        borderWidth: 0,
      }],
    },
    options: {
      plugins: { legend: { position: "bottom", labels: { color: textColor } } },
      cutout: "62%",
    },
  });
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: ["Correct", "Incorrect", "Unanswered"],
      datasets: [{
        data: [a.correct, a.incorrect, a.unanswered],
        backgroundColor: ["#15803d", "#b91c1c", "#c7c7c5"],
      }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0, color: textColor }, grid: { color: "rgba(128,128,128,.15)" } },
        x: { ticks: { color: textColor }, grid: { display: false } },
      },
    },
  });
}

function drawReview(a) {
  const el = document.getElementById("reviewList");
  el.innerHTML = a.questions.map((q, i) => {
    const userIdx = a.answers[i];
    const isMulti = Array.isArray(q.correct);
    const isUnanswered = userIdx === null || userIdx === undefined;
    const isCorrect = !isUnanswered && isAnswerCorrect(userIdx, q.correct);
    const userSet = isUnanswered ? [] : (isMulti ? userIdx : [userIdx]);
    const correctSet = isMulti ? q.correct : [q.correct];
    return `
      <div class="review-card">
        <div class="qm ${isUnanswered ? "" : isCorrect ? "correct-tag" : "incorrect-tag"}">
          Question ${i + 1} · ${isUnanswered ? "Unanswered" : isCorrect ? "Correct" : "Incorrect"}${isMulti ? " · Select all that apply" : ""}
        </div>
        <h4>${escapeHtml(q.q)}</h4>
        ${q.options.map((opt, oi) => {
          const isUser = userSet.includes(oi);
          const isRight = correctSet.includes(oi);
          let cls = "";
          if (isRight) cls = "right-answer";
          if (isUser && !isRight) cls = "your-wrong";
          let suffix = "";
          if (isUser && !isRight) suffix = " (your answer)";
          else if (isUser && isRight) suffix = " (your answer)";
          if (isRight) suffix += " \u2713";
          return `<div class="rev-option ${cls}">${escapeHtml(opt)}${suffix}</div>`;
        }).join("")}
      </div>`;
  }).join("");
}

// ---------------- stats ----------------
function renderStats() {
  const user = store.getUser();
  const attempts = store.getAttempts();

  if (!user) {
    $app.innerHTML = `<div class="empty-state">Log in to see your practice history.<br/><br/>
      <button class="btn btn-primary" onclick="navigate('#/login')">Log in</button></div>`;
    return;
  }
  if (attempts.length === 0) {
    $app.innerHTML = `
      <h1 class="title">Your performance</h1>
      <p class="subtitle">${escapeHtml(user.name)}'s practice history on this device.</p>
      <div class="empty-state">No attempts yet — take a practice test to see your stats here.<br/><br/>
        <button class="btn btn-primary" onclick="navigate('#/topics')">Browse topics</button></div>`;
    return;
  }

  const testsTaken = attempts.length;
  const avgScore = Math.round(attempts.reduce((s, a) => s + a.accuracy, 0) / testsTaken);
  const highScore = Math.max(...attempts.map(a => a.accuracy));
  const lowScore = Math.min(...attempts.map(a => a.accuracy));
  const totalCorrect = attempts.reduce((s, a) => s + a.correct, 0);
  const totalQs = attempts.reduce((s, a) => s + a.total, 0);
  const overallAccuracy = Math.round((totalCorrect / totalQs) * 100);
  const totalTime = attempts.reduce((s, a) => s + a.timeTakenSec, 0);

  // topic-wise (group by base topicId, ignore set number)
  const byTopic = {};
  attempts.forEach(a => {
    const key = a.topicId;
    if (!byTopic[key]) byTopic[key] = { label: TOPIC_LABELS[key] || key, attempts: [] };
    byTopic[key].attempts.push(a);
  });

  const sorted = [...attempts].sort((x, y) => new Date(x.date) - new Date(y.date));
  const recent = [...attempts].sort((x, y) => new Date(y.date) - new Date(x.date));

  $app.innerHTML = `
    <h1 class="title">Your performance</h1>
    <p class="subtitle">${escapeHtml(user.name)}'s practice history on this device.</p>

    <div class="stat-grid">
      <div class="stat-card"><div class="num">${testsTaken}</div><div class="label">Tests taken</div></div>
      <div class="stat-card"><div class="num">${avgScore}%</div><div class="label">Average score</div></div>
      <div class="stat-card green"><div class="num">${highScore}%</div><div class="label">Highest score</div></div>
      <div class="stat-card red"><div class="num">${lowScore}%</div><div class="label">Lowest score</div></div>
      <div class="stat-card"><div class="num">${overallAccuracy}%</div><div class="label">Overall accuracy</div></div>
      <div class="stat-card"><div class="num">${fmtDuration(totalTime)}</div><div class="label">Total practice time</div></div>
    </div>

    <div class="panel" style="margin-bottom:28px;">
      <h3>Score trend over time</h3>
      <canvas id="trendChart" height="90"></canvas>
    </div>

    <div class="panel" style="margin-bottom:28px;">
      <h3>Topic-wise performance</h3>
      <table class="stat-table">
        <thead><tr><th>Topic</th><th>Attempts</th><th>Avg score</th><th>Best score</th></tr></thead>
        <tbody>
          ${Object.values(byTopic).map(t => {
            const avg = Math.round(t.attempts.reduce((s, a) => s + a.accuracy, 0) / t.attempts.length);
            const best = Math.max(...t.attempts.map(a => a.accuracy));
            return `<tr><td>${escapeHtml(t.label)}</td><td>${t.attempts.length}</td><td>${avg}%</td><td>${best}%</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>

    <div class="panel">
      <h3>Recent attempts</h3>
      <table class="stat-table">
        <thead><tr><th>Topic</th><th>Score</th><th>Date</th><th></th></tr></thead>
        <tbody>
          ${recent.map(a => `
            <tr>
              <td>${escapeHtml(a.label)}</td>
              <td class="${a.accuracy >= PASS_THRESHOLD ? "" : ""}" style="color:${a.accuracy >= PASS_THRESHOLD ? "var(--green)" : "var(--red)"}">${a.correct}/${a.total} (${a.accuracy}%)</td>
              <td>${new Date(a.date).toLocaleString()}</td>
              <td><span class="link-btn" onclick="navigate('#/results/${a.id}')">Review</span></td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`;

  try {
    drawTrendChart(sorted);
  } catch (err) {
    console.error("Chart rendering failed:", err);
    const c = document.getElementById("trendChart");
    if (c) c.replaceWith(Object.assign(document.createElement("div"), {
      className: "empty-state",
      textContent: "Chart could not be rendered.",
    }));
  }
}

function drawTrendChart(sorted) {
  const textColor = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
  new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: {
      labels: sorted.map((_, i) => i + 1),
      datasets: [{
        data: sorted.map(a => a.accuracy),
        borderColor: "#0f766e",
        backgroundColor: "rgba(15,118,110,.12)",
        fill: true,
        tension: 0.25,
        pointRadius: 4,
      }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 0, max: 100, ticks: { color: textColor }, grid: { color: "rgba(128,128,128,.15)" } },
        x: { title: { display: true, text: "Attempt #", color: textColor }, ticks: { color: textColor }, grid: { display: false } },
      },
    },
  });
}
