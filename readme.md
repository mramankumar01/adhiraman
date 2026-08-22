# mcq.practice

A small MCQ practice-test app: pick a topic, take a timed test, see a
scored results page with charts, review each answer, and track your
history over time. Everything is stored in the browser's `localStorage`
(no backend/database) — same as the reference app ("practice history on
this device").

## Run locally

No build step needed. From this folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy

### Netlify
1. Push this folder to a GitHub repo (or drag-and-drop the folder into
   Netlify's dashboard under "Deploys").
2. Build command: *(leave empty)*
3. Publish directory: `.` (the repo root)

### Vercel
1. Push this folder to a GitHub repo and import it in Vercel.
2. Framework preset: **Other**
3. Build command: *(leave empty)*, Output directory: `.`

Both work because this is a static site — no server, no build.

## Adding more questions / topics

Open `data/questions.js`. Each topic is a key in `QUESTION_BANK`:

```js
const QUESTION_BANK = {
  java: [
    { q: "question text", options: ["a", "b", "c", "d"], correct: 0 },
    ...
  ],
  // add a new topic:
  html: [
    { q: "...", options: ["...", "...", "...", "..."], correct: 2 },
  ],
};

const TOPIC_LABELS = {
  java: "Java",
  html: "HTML",
};
```

`correct` is the zero-based index of the right option.

**You don't need to split large topics by hand.** If a topic array has
more than 60 questions, the app automatically breaks it into separate
60-question sets ("Java (Set 1)", "Java (Set 2)", ...) on the topic
picker page, each a separate timed test.

## Notes on the current Java question bank

The Java topic currently ships with ~48 starter questions so you can see
the full app working end-to-end. Send over your actual Java question
booklet (paste the text or attach the file) and I'll drop the real
questions into `data/questions.js`, chunked into sets of 60 automatically
if there are more than 60.

## How the timer works

Each test gets `60 seconds × number of questions` on the clock
(configurable via `SECONDS_PER_QUESTION` in `app.js`). It counts down
from the moment the test page loads and auto-submits the test when it
hits zero.
