// ============================================================
// QUESTION BANK
// ------------------------------------------------------------
// Each topic is an array of:
//   { q: "question text", options: ["a","b","c","d"], correct: N }
// "correct" is the zero-based index into options for single-answer
// questions, or an array of zero-based indices (e.g. [0, 2]) for
// questions with multiple correct answers ("select all that apply").
//
// If a topic array has more than 60 questions, the app automatically
// splits it into sets of 60 (Set 1, Set 2, ...) on the topic picker
// page — this is handled dynamically in app.js, so it also applies
// automatically to any topic you add or extend later, no matter how
// many questions it ends up with.
//
// This file was generated from the user-provided MCQ booklets.
//
// De-duplication pass: 105 exact-text duplicate questions removed,
// keeping the cleanest version of each.
//
// Structural repair pass (2026-08-26): 135 questions had
// their source-extraction corruption fixed — code snippets, multi-line
// premises, or an entire second question that had leaked into the
// "options" array (shifting answer choices and the correct-answer
// index) were moved back into "q" or regrouped into proper options.
// Two originally-merged questions were split back into two separate
// questions; one orphaned explanation fragment with no real answer
// choices was removed. See conversation history for full detail.
// ============================================================

const QUESTION_BANK = {
  "java": [
    {
      "q": "Which of the following best describes the principle of Encapsulation in Java?",
      "options": [
        "A class can extend multiple parent classes",
        "Binding data (fields) and methods together while restricting direct access to internal state via access modifiers",
        "A subclass can override methods defined in its parent class",
        "Objects of different classes can be treated as the same type"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code?\npublic class Test {\n    static int x = 10;\n    static { x += 5; }\n    public static void main(String[] args) {\n        System.out.println(x);\n        x += 3;\n    }\n    static { x *= 2; }\n}",
      "options": [
        "20",
        "30",
        "28",
        "15"
      ],
      "correct": 1
    },
    {
      "q": "Which statement is TRUE about static members in Java?",
      "options": [
        "Static methods can access instance variables directly",
        "Static blocks execute every time an object is created",
        "Static members belong to the class and are shared across all instances",
        "A static method can be overridden in a subclass"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following code?\npublic class Order {\n    int id;\n    { id = 5; System.out.print(\"IIB \"); }\n    Order() { System.out.print(\"CON \"); }\n    public static void main(String[] args) {\n        new Order();\n        new Order();\n    }\n}",
      "options": [
        "CON CON",
        "IIB CON IIB CON",
        "IIB IIB CON CON",
        "CON IIB CON IIB"
      ],
      "correct": 1
    },
    {
      "q": "What is the result of this expression in Java?\nint result = 010 + 0x10 + 10;",
      "options": [
        "30",
        "36",
        "34",
        "Compilation error"
      ],
      "correct": 2
    },
    {
      "q": "Which primitive data type can store the value 200_000_000_000L?",
      "options": [
        "int",
        "long",
        "double",
        "short"
      ],
      "correct": 1
    },
    {
      "q": "What happens during auto-widening (promotion) in the following code?\nbyte b = 10;\nshort s = 20;\nint result = b + s;",
      "options": [
        "Compilation error: mixed types cannot be added",
        "b and s are automatically promoted to int before addition",
        "result is of type short",
        "Only b is promoted; s remains short"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nInteger a = 127;\nInteger b = 127;\nInteger c = 128;\nInteger d = 128;\nSystem.out.println((a == b) + \" \" + (c == d));",
      "options": [
        "true true",
        "false false",
        "true false",
        "false true"
      ],
      "correct": 2
    },
    {
      "q": "What is Auto-boxing in Java?",
      "options": [
        "Converting a larger primitive type to a smaller one",
        "Automatic conversion of a primitive type to its corresponding Wrapper class object",
        "Casting one object type to another",
        "Packing multiple values into an array automatically"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code?\nint x = 5;\nSystem.out.println(x++ + \" \" + ++x);",
      "options": [
        "5 7",
        "6 7",
        "5 6",
        "6 6"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is the result of 5 >>> 1 in Java (unsigned right shift)?",
      "options": [
        "2",
        "3",
        "10",
        "-3"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of this code?\nint i = 0;\nfor (; i < 3; i++) {\n    if (i == 1) continue;\n    System.out.print(i + \" \");\n}",
      "options": [
        "0 1 2",
        "0 2",
        "1 2",
        "0 1"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the labeled break in the following code?\nouter: for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j == 1) break outer;\n        System.out.print(i + \"\" + j + \" \");\n    }\n}",
      "options": [
        "00 01 10 11 20 21",
        "00",
        "00 10 20",
        "00 01"
      ],
      "correct": 1
    },
    {
      "q": "Which access modifier allows access within the same class only?",
      "options": [
        "protected",
        "default (no modifier)",
        "private",
        "package-private"
      ],
      "correct": 2
    },
    {
      "q": "A class in package com.app has a method with protected access. Which of the following CAN access it?",
      "options": [
        "Any class in any package",
        "Only classes within com.app",
        "Classes within com.app AND subclasses in other packages",
        "Only the class itself and its inner classes"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the 'import' statement in Java?",
      "options": [
        "It copies the source code of the imported class into the current file",
        "It tells the compiler where to find the class files referenced by simple name",
        "It loads the class into JVM memory at compile time",
        "It is mandatory; without it, classes from other packages cannot be used at all"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following inheritance example?\nclass A {\n    String name() { return \"A\"; }\n}\nclass B extends A {\n    String name() { return \"B\"; }\n}\nclass C extends B {}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        System.out.println(obj.name());\n    }\n}",
      "options": [
        "A",
        "B",
        "C",
        "Compilation error"
      ],
      "correct": 1
    },
    {
      "q": "Which keyword prevents a method from being overridden in Java?",
      "options": [
        "static",
        "abstract",
        "final",
        "sealed"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between method overloading and method overriding?",
      "options": [
        "Overloading is resolved at runtime; overriding is resolved at compile time",
        "Overloading allows same method name with different parameters in the same class (compile-time); overriding redefines a parent method in a subclass (runtime)",
        "Overloading requires the same return type; overriding allows different return types",
        "They are the same concept called by different names"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code?\nclass Animal {\n    void speak() { System.out.println(\"Animal\"); }\n}\nclass Dog extends Animal {\n    void speak() { System.out.println(\"Dog\"); }\n    void fetch() { System.out.println(\"Fetch\"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.speak();\n        a.fetch();\n    }\n}",
      "options": [
        "Animal\\nFetch",
        "Dog\\nFetch",
        "Dog\\nCompilation error",
        "Compilation error: a.fetch() is invalid"
      ],
      "correct": 3
    },
    {
      "q": "What is the key difference between an abstract class and an interface in Java 8+?",
      "options": [
        "Abstract classes can have constructors; interfaces cannot have constructors and can have default/static methods",
        "Interfaces support multiple inheritance of type; abstract classes can only be extended once, and both can have concrete methods",
        "Abstract classes cannot have any concrete methods",
        "Interfaces require all methods to be public and abstract"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following will cause a compilation error?\npublic abstract class Shape {\n    abstract double area();\n    void describe() { System.out.println(\"I am a shape\"); }\n}",
      "options": [
        "An abstract class having a concrete method",
        "Instantiating Shape directly: Shape s = new Shape();",
        "A concrete subclass that implements area()",
        "Using Shape as a reference type"
      ],
      "correct": 1
    },
    {
      "q": "What is runtime polymorphism in Java and how is it achieved?",
      "options": [
        "It is achieved by method overloading and resolved at compile time",
        "It is achieved by method overriding and dynamic dispatch — the JVM decides at runtime which overridden method to call based on the actual object type",
        "It is achieved by casting objects between types explicitly",
        "It is achieved using generics and type parameters"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this code?\ntry {\n    int[] arr = new int[5];\n    arr[10] = 1;\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.print(\"Caught \");\n} finally {\n    System.out.print(\"Finally\");\n}",
      "options": [
        "Caught",
        "Finally",
        "Caught Finally",
        "Runtime error with no output"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following statements about checked vs unchecked exceptions is TRUE?",
      "options": [
        "Unchecked exceptions extend Exception directly; checked exceptions extend RuntimeException",
        "Checked exceptions must be declared or handled at compile time; unchecked exceptions (RuntimeException subclasses) do not need to be",
        "Checked exceptions are only thrown by the JVM; unchecked exceptions are thrown by the programmer",
        "Both checked and unchecked exceptions are caught the same way"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\npublic class Test {\n    public static void main(String[] args) {\n        try {\n            return;\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
      "options": [
        "No output",
        "Finally",
        "Compilation error",
        "Runtime error"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'assert' keyword do in Java, and how must it be enabled?",
      "options": [
        "It always throws AssertionError when a condition is false; no special flag needed",
        "It is a debugging tool that throws AssertionError if a boolean condition is false; must be enabled with -ea JVM flag",
        "It validates method parameters and throws IllegalArgumentException",
        "It is equivalent to a runtime check using if/throw"
      ],
      "correct": 1
    },
    {
      "q": "In Java multithreading, what is a race condition?",
      "options": [
        "A condition where two threads execute in a predictable alternating order",
        "A situation where the outcome depends on the non-deterministic ordering of thread execution accessing shared mutable state",
        "A deadlock where two threads wait for each other indefinitely",
        "A situation where one thread runs faster than another"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between synchronized method and synchronized block in Java?",
      "options": [
        "synchronized method locks the class object; synchronized block locks the instance",
        "synchronized method locks on 'this' (or the class for static methods); synchronized block allows locking on any specified object, enabling finer-grained control",
        "synchronized blocks are always more performant and there is no functional difference",
        "synchronized method can only be used in single-threaded programs"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\npublic class Counter {\n    private int count = 0;\n    public synchronized void increment() { count++; }\n    public int getCount() { return count; }\n}\nGiven two threads each call increment() 1000 times, what is the likely final value of count?",
      "options": [
        "Less than 2000 due to race conditions",
        "Exactly 2000 because synchronized ensures atomicity",
        "More than 2000 due to thread scheduling overhead",
        "0 because threads reset the counter"
      ],
      "correct": 1
    },
    {
      "q": "Which Executor Framework class provides a thread pool that reuses a fixed number of threads?",
      "options": [
        "Executors.newCachedThreadPool()",
        "Executors.newSingleThreadExecutor()",
        "Executors.newFixedThreadPool(n)",
        "Executors.newScheduledThreadPool(n)"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between Runnable and Callable in the Executor Framework?",
      "options": [
        "Runnable can throw checked exceptions; Callable cannot",
        "Callable returns a result (Future) and can throw checked exceptions; Runnable returns void and cannot throw checked exceptions",
        "Runnable is used with thread pools; Callable only works with single threads",
        "They are functionally identical; Callable is just a newer version of Runnable"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following correctly describes the Java Garbage Collector?",
      "options": [
        "The programmer triggers GC by calling System.gc() and it runs immediately",
        "GC automatically reclaims memory occupied by objects with no live strong references; System.gc() is only a hint",
        "GC runs at a fixed interval set in the JVM configuration",
        "GC only runs when the JVM throws an OutOfMemoryError"
      ],
      "correct": 1
    },
    {
      "q": "What is a SoftReference in Java and when is it collected?",
      "options": [
        "It is collected immediately after no strong reference exists",
        "It is never collected unless the program explicitly calls clear()",
        "It is collected only when the JVM needs memory (low memory situation), making it suitable for caches",
        "It behaves exactly like a WeakReference"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following inner class code?\npublic class Outer {\n    int x = 10;\n    class Inner {\n        int x = 20;\n        void display() {\n            int x = 30;\n            System.out.println(x + \" \" + this.x + \" \" + Outer.this.x);\n        }\n    }\n    public static void main(String[] args) {\n        new Outer().new Inner().display();\n    }\n}",
      "options": [
        "10 20 30",
        "30 10 20",
        "30 20 10",
        "20 30 10"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is true about a static nested class in Java?",
      "options": [
        "It can access the outer class's non-static members directly",
        "It is instantiated using new Outer().new StaticNested()",
        "It can only access static members of the outer class and is instantiated as new Outer.StaticNested()",
        "It acts as a top-level class and has no relationship to the outer class"
      ],
      "correct": 2
    },
    {
      "q": "What is an anonymous inner class and when would you typically use it?",
      "options": [
        "A class without a name used to create a single-use instance that extends a class or implements an interface, commonly used for event handlers before Java 8 lambdas",
        "A private inner class that has no access to the outer class",
        "A class that is defined inside a method and can only be used within that method",
        "A class that has no constructors or fields"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of the following String operation?\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nString s3 = new String(\"Hello\");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1 == s3);\nSystem.out.println(s1.equals(s3));",
      "options": [
        "true\\nfalse\\ntrue",
        "false\\nfalse\\ntrue",
        "true\\ntrue\\ntrue",
        "false\\nfalse\\nfalse"
      ],
      "correct": 0
    },
    {
      "q": "What is the difference between String, StringBuilder, and StringBuffer?",
      "options": [
        "String is mutable; StringBuilder is immutable and thread-safe; StringBuffer is immutable and not thread-safe",
        "String is immutable; StringBuilder is mutable and not thread-safe; StringBuffer is mutable and thread-safe (synchronized)",
        "String and StringBuffer are immutable; StringBuilder is mutable",
        "They are functionally identical but have different memory footprints"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this code?\nString s = \"Java Programming\";\nSystem.out.println(s.substring(5, 11));",
      "options": [
        "Progra",
        "Progr",
        "Program",
        " Progr"
      ],
      "correct": 0
    },
    {
      "q": "Which method of the String class splits a string by a regex delimiter and returns a String array?",
      "options": [
        "tokenize(String regex)",
        "split(String regex)",
        "divide(String regex)",
        "parse(String regex)"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this IO code (assuming file 'test.txt' exists with content 'Java')?\nFileReader fr = new FileReader(\"test.txt\");\nBufferedReader br = new BufferedReader(fr);\nSystem.out.println(br.readLine());\nbr.close();",
      "options": [
        "J",
        "Java",
        "null",
        "IOException at runtime"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between FileInputStream and FileReader in Java IO?",
      "options": [
        "FileInputStream reads characters; FileReader reads bytes",
        "FileInputStream reads raw bytes (binary data); FileReader reads characters using a character encoding (text data)",
        "They are identical; FileReader is just a convenience wrapper with no functional difference",
        "FileReader is faster because it buffers by default"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of try-with-resources (introduced in Java 7)?",
      "options": [
        "It allows multiple catch blocks to catch different exceptions",
        "It automatically closes resources that implement AutoCloseable at the end of the try block, even if an exception occurs",
        "It provides better performance by reusing resources across multiple try blocks",
        "It prevents resources from being garbage collected prematurely"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following array code?\nint[] arr = {5, 3, 8, 1, 9, 2};\njava.util.Arrays.sort(arr);\nSystem.out.println(java.util.Arrays.binarySearch(arr, 8));",
      "options": [
        "2",
        "4",
        "3",
        "2 (0-indexed position of 8 after sorting)"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between int[] arr1 = new int[5] and int[][] arr2 = new int[3][]?",
      "options": [
        "arr1 is a 1D array of 5 integers; arr2 is a 2D jagged array where each row can have a different length",
        "arr1 is a static array; arr2 is a dynamic array",
        "arr2 is illegal syntax",
        "arr1 allocates memory; arr2 does not allocate memory yet for rows"
      ],
      "correct": 0
    },
    {
      "q": "Which Object class method must be overridden alongside hashCode() to maintain the general contract in Java?",
      "options": [
        "toString()",
        "compareTo()",
        "equals()",
        "clone()"
      ],
      "correct": 2
    },
    {
      "q": "What is the contract between equals() and hashCode() in Java?",
      "options": [
        "If a.equals(b) is true, then a.hashCode() must equal b.hashCode(); if hashCodes are equal, equals() must also return true",
        "If a.equals(b) is true, then a.hashCode() must equal b.hashCode(); but equal hashCodes do not guarantee equals() returns true",
        "hashCode() is only used for sorting; equals() is only used for Collections",
        "There is no contract; they can be implemented independently"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nObject obj = new Object();\nSystem.out.println(obj.toString().startsWith(\"java.lang.Object@\"));",
      "options": [
        "false",
        "true",
        "Compilation error",
        "NullPointerException"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between ArrayList and LinkedList in the Java Collections Framework?",
      "options": [
        "ArrayList uses a doubly-linked list; LinkedList uses a dynamic array",
        "ArrayList uses a dynamic array (fast random access, slow insert/delete at middle); LinkedList uses a doubly-linked list (fast insert/delete, slow random access)",
        "LinkedList allows null values; ArrayList does not",
        "ArrayList is thread-safe; LinkedList is not"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between HashMap and TreeMap?",
      "options": [
        "HashMap maintains insertion order; TreeMap maintains sorted (natural) order of keys",
        "HashMap stores entries in a hash table (O(1) avg access, unordered); TreeMap stores entries in a red-black tree (O(log n) access, sorted by keys)",
        "TreeMap allows null keys; HashMap does not",
        "HashMap is synchronized; TreeMap is not"
      ],
      "correct": 1
    },
    {
      "q": "What will this Collections code output?\nList<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));\nCollections.sort(list);\nSystem.out.println(list.get(0) + \" \" + list.get(list.size()-1));",
      "options": [
        "3 9",
        "1 9",
        "1 5",
        "3 5"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the Comparable and Comparator interfaces in Java?",
      "options": [
        "Comparable defines a natural ordering within the class (compareTo); Comparator defines an external/custom ordering (compare), useful for multiple sort strategies",
        "Comparator defines natural ordering; Comparable defines external ordering",
        "They are only used for sorting arrays, not Collections",
        "Both are identical; Comparator is just a functional interface version of Comparable"
      ],
      "correct": 0
    },
    {
      "q": "What is the difference between HashSet and TreeSet?",
      "options": [
        "HashSet maintains insertion order; TreeSet maintains sorted order",
        "HashSet uses hashing (O(1) ops, no order guarantee); TreeSet uses a red-black tree (O(log n) ops, sorted natural order)",
        "TreeSet allows duplicate elements; HashSet does not",
        "HashSet is thread-safe; TreeSet is not"
      ],
      "correct": 1
    },
    {
      "q": "What does the following generic method signature mean?\npublic <T extends Comparable<T>> T findMax(List<T> list)",
      "options": [
        "T can be any type; Comparable is just a hint for the compiler",
        "T must be a type that implements Comparable<T>, ensuring the elements can be compared to each other",
        "T is bounded to only Number subclasses",
        "The method returns a Comparable object, not necessarily T"
      ],
      "correct": 1
    },
    {
      "q": "What is a wildcard in Java Generics? What does List<?> mean?",
      "options": [
        "List<?> means a List that can hold any type of object, but you can only read from it (not add arbitrary elements) safely",
        "List<?> is the same as List<Object>; you can add any type to it",
        "List<?> means an empty list with no type",
        "Wildcards can only be used in method return types"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of the following Enum code?\npublic enum Season { SPRING, SUMMER, FALL, WINTER; }\nSystem.out.println(Season.FALL.ordinal() + \" \" + Season.FALL.name());",
      "options": [
        "3 FALL",
        "2 FALL",
        "2 fall",
        "3 fall"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a valid Enum feature in Java?",
      "options": [
        "Enums can extend other classes",
        "Enums can implement interfaces and have fields, methods, and constructors",
        "Enum constructors must be public",
        "Enum values can be dynamically added at runtime"
      ],
      "correct": 1
    },
    {
      "q": "What is a lambda expression in Java 8 and what must the target type be?",
      "options": [
        "A lambda is an anonymous function; the target type must be a functional interface (an interface with exactly one abstract method)",
        "A lambda is a method reference; the target type can be any interface",
        "A lambda is a shorthand for an anonymous class; target type can be abstract class or interface",
        "A lambda must always return a value; void lambdas are not supported"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of the following Java 8 Stream code?\nList<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);\nint result = nums.stream()\n    .filter(n -> n % 2 == 0)\n    .mapToInt(n -> n * n)\n    .sum();\nSystem.out.println(result);",
      "options": [
        "4 16",
        "20",
        "6",
        "9"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between map() and flatMap() in Java 8 Streams?",
      "options": [
        "map() transforms elements one-to-one; flatMap() transforms each element to zero or more elements and flattens the result into a single stream",
        "flatMap() applies the function in parallel; map() applies it sequentially",
        "map() only works with numeric streams; flatMap() works with all types",
        "They are identical; flatMap() was introduced to replace map()"
      ],
      "correct": 0
    },
    {
      "q": "What does the Optional class in Java 8 solve?",
      "options": [
        "It improves performance by lazily computing values",
        "It wraps a possibly-null value to force explicit handling of the absence of a value, reducing NullPointerExceptions",
        "It is a container for a fixed list of optional configuration values",
        "It replaces null entirely; you cannot have null in Java 8+"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nOptional<String> opt = Optional.of(\"Java\");\nSystem.out.println(opt.map(String::toUpperCase).orElse(\"Empty\"));",
      "options": [
        "Empty",
        "java",
        "JAVA",
        "Java"
      ],
      "correct": 2
    },
    {
      "q": "What is a default method in a Java 8 interface?",
      "options": [
        "A method with a default access modifier (package-private)",
        "A concrete method defined in an interface using the 'default' keyword, providing a default implementation that implementing classes can optionally override",
        "A method that is automatically generated if the implementing class doesn't provide one",
        "An abstract method with a default return value"
      ],
      "correct": 1
    },
    {
      "q": "What are method references in Java 8? Which of the following is a valid instance method reference?",
      "options": [
        "String::length applied to Stream<String> using map() — it is NOT valid",
        "String::length is a valid instance method reference that can be used as Function<String, Integer>",
        "Method references can only refer to static methods",
        "String::new is an instance method reference"
      ],
      "correct": 1
    },
    {
      "q": "In Java 8 Streams, what is the difference between a terminal and an intermediate operation?",
      "options": [
        "Intermediate operations are lazy and return a Stream; terminal operations trigger processing and produce a result or side-effect",
        "Terminal operations return a Stream; intermediate operations produce a result",
        "Intermediate operations run in parallel; terminal operations run sequentially",
        "They are the same; the distinction is only theoretical"
      ],
      "correct": 0
    },
    {
      "q": "What does the Collectors.groupingBy() method do?",
      "options": [
        "It sorts stream elements by a classifier function",
        "It collects stream elements into a Map, grouping them by the result of a classifier function",
        "It partitions stream elements into exactly two groups",
        "It counts elements by category"
      ],
      "correct": 1
    },
    {
      "q": "What are the key components of JVM Architecture?",
      "options": [
        "Compiler, Linker, Loader, Runtime",
        "Class Loader, Runtime Data Areas (Heap, Stack, Method Area, PC Register, Native Stack), Execution Engine (Interpreter, JIT Compiler)",
        "Source Parser, Bytecode Generator, Native Compiler",
        "Java API, OS Bridge, Memory Manager"
      ],
      "correct": 1
    },
    {
      "q": "What is stored in the JVM Heap vs the JVM Stack?",
      "options": [
        "Heap stores primitive variables; Stack stores object instances",
        "Heap stores object instances and class metadata; Stack stores method call frames, local variables, and references",
        "Stack stores static variables; Heap stores local variables",
        "Both Heap and Stack store the same types of data; the distinction is only about size"
      ],
      "correct": 1
    },
    {
      "q": "What is Just-In-Time (JIT) compilation in the JVM?",
      "options": [
        "The JVM compiles Java source code to bytecode just before deployment",
        "The JVM compiles frequently executed bytecode into native machine code at runtime to improve performance",
        "JIT compiles .class files ahead of time into native executables",
        "JIT is triggered only when the JVM runs out of interpreted bytecode"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the @Override annotation?",
      "options": [
        "It forces the compiler to generate a new version of the method",
        "It is a marker that tells the compiler to verify the method actually overrides a superclass/interface method, catching errors if it does not",
        "It prevents the method from being overridden further down the hierarchy",
        "It generates boilerplate code for the method at compile time"
      ],
      "correct": 1
    },
    {
      "q": "What does @FunctionalInterface annotation do?",
      "options": [
        "It marks an interface as eligible for use in streams only",
        "It enforces at compile time that the interface has exactly one abstract method, making it usable as a lambda target",
        "It generates the abstract method implementation automatically",
        "It allows the interface to have multiple default methods only"
      ],
      "correct": 1
    },
    {
      "q": "What is the @SuppressWarnings annotation used for?",
      "options": [
        "It suppresses runtime exceptions for the annotated element",
        "It tells the compiler to suppress specific compiler warnings for the annotated element (e.g., @SuppressWarnings(\"unchecked\"))",
        "It prevents the annotated method from logging warnings",
        "It disables assertions for the annotated code block"
      ],
      "correct": 1
    },
    {
      "q": "What is a custom annotation in Java and what is the @Retention meta-annotation used for?",
      "options": [
        "@Retention specifies where the annotation is available: SOURCE (discarded after compile), CLASS (retained in bytecode), or RUNTIME (available via reflection)",
        "@Retention sets the memory scope of the annotation; HEAP means it survives GC",
        "@Retention is not a valid meta-annotation; @Target is used for retention",
        "Custom annotations cannot be retained at runtime"
      ],
      "correct": 0
    },
    {
      "q": "In Java's HTTP Client API (Java 11+), what is the correct way to send a synchronous GET request?",
      "options": [
        "HttpClient.get(uri).execute()",
        "HttpClient client = HttpClient.newHttpClient();\nHttpRequest req = HttpRequest.newBuilder().uri(URI.create(url)).GET().build();\nHttpResponse<String> res = client.send(req, HttpResponse.BodyHandlers.ofString());",
        "new URL(url).openStream().read()",
        "HttpConnector.get(url).response()"
      ],
      "correct": 1
    },
    {
      "q": "What feature was introduced in Java 13/14 as a preview for multi-line string literals?",
      "options": [
        "String blocks using triple quotes (\"\"\"...\"\"\")",
        "Raw strings using backticks (`...`)",
        "Heredoc syntax using @\"\"",
        "Multi-line strings were already supported since Java 8"
      ],
      "correct": 0
    },
    {
      "q": "What is the 'switch expression' feature introduced as a standard in Java 14?",
      "options": [
        "It adds a default case to every switch statement automatically",
        "Switch can now be used as an expression returning a value, supports arrow (->) labels, and eliminates fall-through by default",
        "Switch expressions can now match on types like instanceof",
        "It allows switch to work on all object types including custom classes"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code using a switch expression?\nint day = 3;\nString name = switch (day) {\n    case 1 -> \"Monday\";\n    case 2 -> \"Tuesday\";\n    case 3 -> \"Wednesday\";\n    default -> \"Other\";\n};\nSystem.out.println(name);",
      "options": [
        "Other",
        "Tuesday",
        "Wednesday",
        "Compilation error: switch cannot be used as expression"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following code?\nint x = 10;\nObject obj = x;\nSystem.out.println(obj instanceof Integer);",
      "options": [
        "false",
        "true",
        "Compilation error",
        "ClassCastException at runtime"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'volatile' keyword guarantee in Java multithreading?",
      "options": [
        "Mutual exclusion: only one thread can access the variable at a time",
        "Visibility: changes to a volatile variable made by one thread are immediately visible to all other threads; it does NOT guarantee atomicity of compound operations",
        "Atomicity: read-modify-write operations on a volatile variable are atomic",
        "Thread-safety: no synchronization is needed when using volatile"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nString s = \"Hello World\";\nSystem.out.println(s.indexOf(\"World\") + \" \" + s.lastIndexOf('l'));",
      "options": [
        "6 9",
        "5 9",
        "6 8",
        "5 8"
      ],
      "correct": 0
    },
    {
      "q": "What happens when the following code executes?\nList<String> list = new ArrayList<>();\nlist.add(\"A\");\nlist.add(\"B\");\nlist.add(\"C\");\nfor (String s : list) {\n    if (s.equals(\"B\")) list.remove(s);\n}",
      "options": [
        "\"B\" is removed successfully and the loop completes normally",
        "ConcurrentModificationException is thrown",
        "ArrayIndexOutOfBoundsException is thrown",
        "The list remains unchanged"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the Iterator's remove() method compared to calling list.remove() inside a for-each loop?",
      "options": [
        "They are identical in behavior",
        "Iterator.remove() safely removes the current element during iteration without throwing ConcurrentModificationException",
        "Iterator.remove() removes all occurrences of an element",
        "list.remove() is safer inside loops than Iterator.remove()"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between Stack and Deque for stack operations in Java?",
      "options": [
        "Stack is a newer API; Deque is legacy",
        "Stack extends Vector (legacy, synchronized); ArrayDeque implementing Deque is the preferred modern alternative for stack operations",
        "Deque only supports queue operations, not stack operations",
        "They are identical and interchangeable"
      ],
      "correct": 1
    },
    {
      "q": "What does the following code output?\nMap<String, Integer> map = new HashMap<>();\nmap.put(\"a\", 1);\nmap.put(\"b\", 2);\nmap.put(\"a\", 3);\nSystem.out.println(map.size() + \" \" + map.get(\"a\"));",
      "options": [
        "3 3",
        "3 1",
        "2 3",
        "2 1"
      ],
      "correct": 2
    },
    {
      "q": "What does the computeIfAbsent() method do on a Map?",
      "options": [
        "It checks if a key is absent and throws an exception",
        "If the specified key doesn't exist (or maps to null), it computes a new value using the provided function and inserts it",
        "It replaces the existing value only if the key is already present",
        "It merges an existing value with a computed value"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code using String.format()?\nSystem.out.println(String.format(\"%-10s|%5d\", \"Java\", 42));",
      "options": [
        "Java      |   42",
        "    Java  |42",
        "Java|   42",
        "Java      |42   "
      ],
      "correct": 0
    },
    {
      "q": "Which collection maintains insertion order AND allows duplicate elements?",
      "options": [
        "HashSet",
        "LinkedHashSet",
        "ArrayList",
        "TreeMap"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following multithreading code?\nclass MyThread extends Thread {\n    public void run() { System.out.print(\"Thread \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.run();\n        t.start();\n    }\n}",
      "options": [
        "Thread (once, from start())",
        "Thread Thread (both execute in the main thread)",
        "Thread Thread (t.run() executes in main thread; t.start() in a new thread — order may vary)",
        "Compilation error"
      ],
      "correct": 2
    },
    {
      "q": "What happens if you call start() on a thread that has already completed execution?",
      "options": [
        "The thread restarts from the beginning of its run() method",
        "IllegalThreadStateException is thrown",
        "The call is silently ignored",
        "A new thread with the same run() logic is created"
      ],
      "correct": 1
    },
    {
      "q": "Which Java 8 functional interface represents a function that takes two arguments and returns a result?",
      "options": [
        "BiConsumer<T, U>",
        "BiFunction<T, U, R>",
        "BinaryOperator<T>",
        "BiPredicate<T, U>"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following stream operation?\nStream.of(\"a\", \"bb\", \"ccc\", \"dd\")\n    .sorted(Comparator.comparingInt(String::length).reversed())\n    .findFirst()\n    .ifPresent(System.out::println);",
      "options": [
        "a",
        "ccc",
        "dd",
        "bb"
      ],
      "correct": 1
    },
    {
      "q": "Which is NOT a valid way to create a thread in Java?",
      "options": [
        "Extending the Thread class and overriding run()",
        "Implementing the Runnable interface and passing to new Thread()",
        "Implementing the Callable interface and passing to new Thread()",
        "Using an ExecutorService with a Runnable task"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the transient keyword in Java?",
      "options": [
        "It marks a variable as temporary in the JVM stack",
        "It prevents a field from being serialized when the object is written to an ObjectOutputStream",
        "It prevents a field from being garbage collected",
        "It marks a variable as thread-local"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between deep copy and shallow copy of an object in Java?",
      "options": [
        "Shallow copy duplicates all fields including nested object references (new nested objects); deep copy only copies the reference to nested objects",
        "Shallow copy only copies the reference to nested objects (shared); deep copy duplicates the object and all nested objects recursively (independent)",
        "They produce identical results for primitive-only objects",
        "Deep copy is always implemented by the clone() method; shallow copy requires a copy constructor"
      ],
      "correct": 1
    },
    {
      "q": "What does the instanceof pattern matching feature (Java 16 standard) allow?\nif (obj instanceof String s) { ... }",
      "options": [
        "It only checks if obj is a String without any assignment",
        "It checks if obj is a String AND, if so, binds it to variable s within the if block — eliminating the need for an explicit cast",
        "It replaces the cast but still requires manual null checking",
        "Pattern matching is only available in switch statements, not if statements"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code?\nclass Base {\n    Base() { System.out.print(\"Base \"); }\n}\nclass Child extends Base {\n    Child() { System.out.print(\"Child \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
      "options": [
        "Child",
        "Base",
        "Base Child",
        "Child Base"
      ],
      "correct": 2
    },
    {
      "q": "What is a WeakReference in Java and what is its primary use case?",
      "options": [
        "An object that can survive GC even with no strong references",
        "A reference that doesn't prevent the referenced object from being garbage collected; used in WeakHashMap for cache-like structures where entries expire when keys are no longer strongly referenced",
        "A reference used to implement soft-deleted objects",
        "A reference that is collected before SoftReferences"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nint[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nSystem.out.println(a[0]);",
      "options": [
        "1",
        "99",
        "0",
        "ArrayIndexOutOfBoundsException"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is true about Java's ConcurrentHashMap?",
      "options": [
        "It locks the entire map for every read and write operation",
        "It uses segment-level (or bucket-level in Java 8+) locking allowing concurrent reads and limited concurrent writes without locking the entire map",
        "It is identical to a synchronized HashMap",
        "It does not allow null keys or null values and throws NullPointerException for all get() calls with a null key"
      ],
      "correct": 1
    },
    {
      "q": "What does the reduce() terminal operation do in Java Streams?\nOptional<Integer> result = Stream.of(1,2,3,4,5).reduce((a, b) -> a + b);",
      "options": [
        "Returns the minimum value in the stream",
        "Repeatedly applies the binary operator to combine elements into a single result; the above returns Optional[15]",
        "Filters the stream down to a single element",
        "Reduces the stream to a Stream<Integer> with one element"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between throw and throws in Java?",
      "options": [
        "'throw' declares exceptions a method might raise; 'throws' actually raises an exception",
        "'throw' is used to actually throw an exception instance; 'throws' is used in the method signature to declare that the method may throw certain checked exceptions",
        "They are interchangeable keywords",
        "'throw' can only throw RuntimeExceptions; 'throws' handles all Exception types"
      ],
      "correct": 1
    },
    {
      "q": "What is a local class in Java?",
      "options": [
        "A class defined within a package that has package-private access",
        "A class defined within a method body; it can access final or effectively-final local variables and has access to the enclosing class members",
        "A static nested class with private access",
        "An inner class that can only be instantiated locally within the same file"
      ],
      "correct": 1
    },
    {
      "q": "What is printed by the following code?\nString s = \"abcabc\";\nSystem.out.println(s.replace('a', 'X').substring(2, 5));",
      "options": [
        "cXb",
        "caX",
        "Xbc",
        "bcX"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of the following code?\nList<String> list = Arrays.asList(\"c\", \"a\", \"b\");\nlist.stream()\n    .sorted()\n    .forEach(System.out::print);",
      "options": [
        "cab",
        "abc",
        "bac",
        "cba"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'super' keyword in Java?",
      "options": [
        "It creates a new instance of the parent class",
        "It refers to the immediate parent class — used to call parent constructors (super()), access parent fields (super.field), or call overridden parent methods (super.method())",
        "It is used to call static methods of the parent class",
        "It overrides the parent class reference entirely"
      ],
      "correct": 1
    },
    {
      "q": "What is covariant return type in Java?",
      "options": [
        "A return type that can be null or a valid value",
        "When an overriding method declares a return type that is a subtype of the return type declared in the overridden parent method",
        "When a method returns the same type as its parameter",
        "It is a feature only available in generic methods"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the Collectors.toUnmodifiableList() method in Java 10+?",
      "options": [
        "It creates a list that allows nulls but prevents modification",
        "It collects stream elements into an unmodifiable list that throws UnsupportedOperationException on mutation attempts",
        "It is identical to Collectors.toList()",
        "It creates a thread-safe unmodifiable list"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nvar list = new ArrayList<String>();\nlist.add(\"Java\");\nlist.add(\"Streams\");\nvar result = list.stream().count();\nSystem.out.println(result);",
      "options": [
        "Compilation error: 'var' is not allowed with generics",
        "2",
        "0",
        "java.lang.Long@..."
      ],
      "correct": 1
    },
    {
      "q": "What is the text block feature in Java 15 (standard)? What is the output of:\nString json = \"\"\"\n        {\"key\": \"value\"}\n        \"\"\";\nSystem.out.println(json.strip());",
      "options": [
        "{\"key\": \"value\"} (trailing newline stripped)",
        "        {\"key\": \"value\"}         (with leading spaces)",
        "{\"key\": \"value\"}\n (with newline)",
        "Compilation error: text blocks not supported in Java 15"
      ],
      "correct": 0
    },
    {
      "q": "What is the key difference between an interface default method and a method in an abstract class in Java 8?",
      "options": [
        "Default methods in interfaces cannot access state (fields); abstract class methods can access the class's instance fields",
        "They are functionally identical",
        "Abstract class methods can be private; interface default methods cannot",
        "Default interface methods can only be void"
      ],
      "correct": 0
    },
    {
      "q": "Given: int[] arr = {1,2,3,4,5}; what does Arrays.stream(arr).average().getAsDouble() return?",
      "options": [
        "3",
        "3.0",
        "15.0",
        "OptionalDouble.empty()"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is NOT a primitive data type in Java?",
      "options": [
        "int",
        "boolean",
        "String",
        "char"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following code snippet? int x = 5; System.out.println(x++ + ++x);",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 2
    },
    {
      "q": "Which access modifier makes a member accessible only within the same package and by subclasses?",
      "options": [
        "private",
        "public",
        "protected",
        "default (no modifier)"
      ],
      "correct": 2
    },
    {
      "q": "What does the 'final' keyword mean when applied to a method?",
      "options": [
        "The method cannot be overridden",
        "The method cannot be called",
        "The method returns a constant",
        "The method is static"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following correctly declares an abstract method?",
      "options": [
        "public abstract void method();",
        "public void abstract method();",
        "public abstract method();",
        "abstract public void method() {}"
      ],
      "correct": 0
    },
    {
      "q": "What is the size of a 'double' variable in Java?",
      "options": [
        "32 bits",
        "64 bits",
        "16 bits",
        "Depends on the JVM"
      ],
      "correct": 1
    },
    {
      "q": "Which collection class allows null keys and null values and is not synchronized?",
      "options": [
        "Hashtable",
        "HashMap",
        "TreeMap",
        "ConcurrentHashMap"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of: System.out.println(10 + 20 + \"30\");",
      "options": [
        "10 20 30",
        "3030",
        "30 30",
        "1230"
      ],
      "correct": 1
    },
    {
      "q": "Which interface must a class implement to be used in a for-each loop?",
      "options": [
        "Iterator",
        "Iterable",
        "Collection",
        "List"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'volatile' keyword guarantee in Java?",
      "options": [
        "Thread safety for all operations",
        "Visibility of changes to variables across threads",
        "Atomicity of read-modify-write operations",
        "Synchronization of method execution"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a checked exception?",
      "options": [
        "NullPointerException",
        "ArrayIndexOutOfBoundsException",
        "IOException",
        "ArithmeticException"
      ],
      "correct": 2
    },
    {
      "q": "What is the default value of a boolean variable in Java?",
      "options": [
        "true",
        "false",
        "null",
        "0"
      ],
      "correct": 1
    },
    {
      "q": "Which method was traditionally called by the JVM when an object was about to be garbage collected (note: deprecated since Java 9 and removed in Java 18)?",
      "options": [
        "delete()",
        "destroy()",
        "finalize()",
        "cleanup()"
      ],
      "correct": 2
    },
    {
      "q": "Write a code snippet to create a thread by implementing the Runnable interface.",
      "options": [
        "class MyThread implements Runnable { public void run() {} } Thread t = new Thread(new MyThread());",
        "class MyThread implements Runnable { public void start() {} } Thread t = new Thread(new MyThread());",
        "class MyThread extends Runnable { public void run() {} } Thread t = new MyThread();",
        "class MyThread implements Runnable { public void run() {} } Thread t = new MyThread();"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'synchronized' keyword?",
      "options": [
        "To create a copy of an object",
        "To allow only one thread to execute a block of code at a time",
        "To speed up execution of a method",
        "To make a variable immutable"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is true about the 'StringBuilder' class?",
      "options": [
        "It is thread-safe",
        "It is immutable",
        "It is faster than StringBuffer for non-multithreaded scenarios",
        "It extends the String class"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: System.out.println(\"Hello\".substring(1, 3));",
      "options": [
        "el",
        "ell",
        "Hel",
        "Hell"
      ],
      "correct": 0
    },
    {
      "q": "Which design pattern ensures a class has only one instance and provides a global point of access to it?",
      "options": [
        "Factory Pattern",
        "Singleton Pattern",
        "Observer Pattern",
        "Decorator Pattern"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'transient' keyword do in Java?",
      "options": [
        "Makes a variable volatile",
        "Prevents a field from being serialized",
        "Makes a variable temporary",
        "Indicates a method is transitory"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following statements about the 'equals()' method is correct?",
      "options": [
        "It compares object references by default",
        "It must be overridden to compare content",
        "It is defined in the Object class",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Write a lambda expression to sort a List<String> in descending order.",
      "options": [
        "(a, b) -> b.compareTo(a)",
        "(a, b) -> a.compareTo(b)",
        "(a, b) -> { return a > b; }",
        "Collections.sort(list, (a,b) -> a-b)"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'break' statement in a switch case?",
      "options": [
        "To exit the entire program",
        "To terminate the switch block and prevent fall-through",
        "To skip the current iteration of a loop",
        "To return a value from the switch"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a valid declaration of a two-dimensional array?",
      "options": [
        "int[][] arr = new int[5][5];",
        "int[] arr[] = new int[5][5];",
        "int arr[][] = new int[5][5];",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What is the result of: Math.floor(3.9);",
      "options": [
        "3.0",
        "4.0",
        "3.9",
        "3"
      ],
      "correct": 0
    },
    {
      "q": "Which exception is thrown when trying to access an array index that is out of bounds?",
      "options": [
        "IndexOutOfBoundsException",
        "ArrayIndexOutOfBoundsException",
        "IllegalArgumentException",
        "NullPointerException"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'this' keyword in Java?",
      "options": [
        "Refers to the superclass",
        "Refers to the current object instance",
        "Refers to the class itself",
        "Creates a new instance of the class"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is NOT a valid way to create a String in Java?",
      "options": [
        "String s = new String(\"Hello\");",
        "String s = \"Hello\";",
        "String s = String(\"Hello\");",
        "String s = new String(new char[]{'H','e','l','l','o'});"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: System.out.println(1 + 2 + \"3\" + 4 + 5);",
      "options": [
        "3345",
        "12345",
        "33345",
        "1515"
      ],
      "correct": 0
    },
    {
      "q": "Which collection maintains elements in insertion order?",
      "options": [
        "HashSet",
        "TreeSet",
        "LinkedHashSet",
        "ArrayList"
      ],
      "correct": 2
    },
    {
      "q": "Write a try-catch block that handles both ArithmeticException and NullPointerException.",
      "options": [
        "try { } catch (ArithmeticException | NullPointerException e) { }",
        "try { } catch (ArithmeticException e) { } catch (NullPointerException e) { }",
        "Both A and B are valid",
        "try { } catch (Exception e) { }"
      ],
      "correct": 2
    },
    {
      "q": "What does the 'static' keyword mean when applied to a variable?",
      "options": [
        "The variable cannot be changed",
        "The variable belongs to the class rather than any instance",
        "The variable is local to a method",
        "The variable is thread-safe"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to start a thread's execution?",
      "options": [
        "run()",
        "start()",
        "execute()",
        "begin()"
      ],
      "correct": 1
    },
    {
      "q": "What is the default capacity of an ArrayList?",
      "options": [
        "0",
        "10",
        "16",
        "100"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a marker interface?",
      "options": [
        "Runnable",
        "Serializable",
        "Comparable",
        "Iterable"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code? int[] arr = {1,2,3}; System.out.println(arr[3]);",
      "options": [
        "0",
        "null",
        "ArrayIndexOutOfBoundsException",
        "Compilation error"
      ],
      "correct": 2
    },
    {
      "q": "Which operator is used for bitwise AND in Java?",
      "options": [
        "&&",
        "&",
        "|",
        "||"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'instanceof' operator?",
      "options": [
        "To create a new instance of a class",
        "To test whether an object is an instance of a particular class or interface",
        "To compare two objects for equality",
        "To clone an object"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following statements about inheritance is true in Java?",
      "options": [
        "A class can extend multiple classes",
        "An interface can extend multiple interfaces",
        "A class can implement multiple classes",
        "An interface can extend multiple classes"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of: System.out.println(10 % 3);",
      "options": [
        "3",
        "1",
        "0",
        "3.33"
      ],
      "correct": 1
    },
    {
      "q": "Which package contains the Collections framework?",
      "options": [
        "java.util",
        "java.lang",
        "java.collections",
        "java.io"
      ],
      "correct": 0
    },
    {
      "q": "Write a code snippet to create an immutable class with a single field 'name'.",
      "options": [
        "public final class Person { private final String name; public Person(String name) { this.name = name; } public String getName() { return name; } }",
        "public class Person { private String name; public Person(String name) { this.name = name; } public String getName() { return name; } }",
        "public final class Person { private String name; public Person(String name) { this.name = name; } public void setName(String name) { this.name = name; } }",
        "public class Person { public final String name; }"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'continue' statement in loops?",
      "options": [
        "To exit the loop entirely",
        "To skip the current iteration and proceed to the next",
        "To restart the loop from the beginning",
        "To pause the loop execution"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is true about method overloading?",
      "options": [
        "Methods must have the same name and same parameters",
        "Methods must have different return types",
        "Methods must have the same name but different parameter lists",
        "Methods must be in different classes"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: String s1 = \"Java\"; String s2 = \"Java\"; System.out.println(s1 == s2);",
      "options": [
        "true",
        "false",
        "Compilation error",
        "null"
      ],
      "correct": 0
    },
    {
      "q": "Which exception is thrown when a null reference is accessed?",
      "options": [
        "NullReferenceException",
        "NullPointerException",
        "IllegalArgumentException",
        "ClassCastException"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'enum' keyword in Java?",
      "options": [
        "To define a set of named constants",
        "To enumerate elements in a collection",
        "To count the number of objects created",
        "To create an enumeration of methods"
      ],
      "correct": 0
    },
    {
      "q": "Which special member is automatically invoked when an object is created in Java?",
      "options": [
        "init() method",
        "create() method",
        "Constructor",
        "new() method"
      ],
      "correct": 2
    },
    {
      "q": "What is the range of the 'byte' data type in Java?",
      "options": [
        "-128 to 127",
        "0 to 255",
        "-32768 to 32767",
        "-2^31 to 2^31-1"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is a valid functional interface in Java?",
      "options": [
        "Interface with multiple abstract methods",
        "Interface with exactly one abstract method",
        "Interface with no methods",
        "Any interface with the @Functional annotation"
      ],
      "correct": 1
    },
    {
      "q": "Write a code snippet to convert a List<String> to a String[] array.",
      "options": [
        "list.toArray(new String[0]);",
        "(String[]) list.toArray();",
        "list.toArray(String[]::new);",
        "Both A and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "Given the variable List<String> strings, which of the following is valid?",
      "options": [
        "strings.put(\"a\");",
        "List.add(strings, \"a\");",
        "strings[0] = \"a\";",
        "strings.add(\"a\");"
      ],
      "correct": 3
    },
    {
      "q": "When is a method required to include a return statement?",
      "options": [
        "When the method has a non-void return type",
        "When the method contains more than one statement",
        "Never",
        "Always"
      ],
      "correct": 0
    },
    {
      "q": "What is the type of the class literal Foo.class?",
      "options": [
        "Class<Foo>",
        "Class",
        "Class<?>",
        "Class<Class>"
      ],
      "correct": 0
    },
    {
      "q": "How would you declare and instantiate a variable, given the generic class Bag<T>?",
      "options": [
        "Bag bag = new Bag();",
        "Bag<T> bag = new Bag<T>();",
        "Bag bag<T> = new Bag<T>();",
        "Bag<T> bag = new Bag();"
      ],
      "correct": 1
    },
    {
      "q": "What is the keyword used to transfer control to another part of the program?",
      "options": [
        "catch",
        "throw",
        "try",
        "finally"
      ],
      "correct": 1
    },
    {
      "q": "What indicates the end of a Java statement?",
      "options": [
        "Both a semicolon and a newline",
        "A newline",
        "A double-slash ( // )",
        "A semicolon ( ; )"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following will initialize the array myVals to contain two values: 1 and 2",
      "options": [
        "int[] myVals = new int[2] {1, 2};",
        "int[] myVals = {1, 2};",
        "int[2] myVals = {1, 2};",
        "int[] myVals = [1, 2];"
      ],
      "correct": 1
    },
    {
      "q": "Given the following code:float f = 7.0f/2.0f;long l = 7L/2L;Which statement is true?",
      "options": [
        "The values of f and l are equivalent",
        "The attempt to assign l the result of 7L/2L will create an error",
        "The value of f is less than the value of l",
        "The value of f is greater than the value of l"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following can be a valid exception constructor?",
      "options": [
        "Exception(Object cause)",
        "Exception(String message)",
        "Exception(int cause)",
        "Exception(String message, Object cause)"
      ],
      "correct": 1
    },
    {
      "q": "Which of these classes is a checked exception?",
      "options": [
        "ClassNotFoundException",
        "NumberFormatException",
        "ThreadDeath",
        "NoClassDefFoundError"
      ],
      "correct": 0
    },
    {
      "q": "Given the following code:\nString s1 = \"hi\";\nString s2 = \"h\";\ns2 += \"i\";\nboolean b1 = s1 == s2;\nboolean b2 = s1.equals(s2);\nWhich variable(s) is/are assured to be set to true?",
      "options": [
        "Both b1 and b2",
        "b1",
        "Neither b1 or b2",
        "b2"
      ],
      "correct": 3
    },
    {
      "q": "How would you declare a generic factory method that creates a new generic list with a given size?",
      "options": [
        "public static List<T> <T> newList(int size)",
        "<T> public static List<T> newList(int size)",
        "public <T> static List<T> newList(int size)",
        "public static <T> List<T> newList(int size)"
      ],
      "correct": 3
    },
    {
      "q": "Which instances of this class are treated as unchecked exceptions?",
      "options": [
        "Error",
        "Throwable",
        "Exception"
      ],
      "correct": 0
    },
    {
      "q": "In which of the following situations will the compiler generate an error?",
      "options": [
        "Catching an checked exception that is not thrown in a try block",
        "Mixing subclasses and superclasses in a throws clause",
        "Don't having at least one catch block after a try block",
        "Downcasting an instance of Exception to an incorrect type (e.g. RuntimeException re = (RuntimeException)e;)"
      ],
      "correct": 0
    },
    {
      "q": "Which of these keywords cannot be used for a class which has been declared final?",
      "options": [
        "abstract",
        "extends",
        "abstract and extends",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "A team of programmers is involved in reviewing a proposed design for a new utility class.\nAfter some discussion, they realize that the current design allows other classes to access\nmethods in the utility class that should be accessible only to methods within the utility class itself.\nWhat design issue has the team discovered?",
      "options": [
        "Tight coupling",
        "Low cohesion",
        "High cohesion",
        "Loose coupling",
        "Weak encapsulation",
        "Strong encapsulation"
      ],
      "correct": 4
    },
    {
      "q": "class output {\npublic static void main(String args[])\n{\nStringBuffer c = new StringBuffer(\"Hello\");\nStringBuffer c1 = new StringBuffer(\"World\");\nappend(c1);\nSystem.out.println(c);\n}\n}",
      "options": [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      "correct": 3
    },
    {
      "q": "class exception_handling {\npublic static void main(String args[])\n{\ntry {\nSystem.out.print(\"Hello\" + \" \"\n+ 1 / 0);\n}\ncatch(ArithmeticException e) {\nSystem.out.print(\"World\");\n}\n}\n}",
      "options": [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following describes the correct sequence of the steps involved in making a connection with a database.\n1. Loading the driver\n2. Process the results.\n3. Making the connection with the database.\n4. Executing the SQL statements.",
      "options": [
        "(A) 1,2,3,4",
        "(B) 1,3,4,2",
        "(C) 2,1,3,4",
        "(D) 4,1,2,3"
      ],
      "correct": 1
    },
    {
      "q": "import java.io.*;\nclass filesinputoutput {\npublic static void main(String args[]) {\nInputStream obj = new FileInputStream(\"inputoutput.java\");\nSystem.out.print(obj.available());\n}\n}\nNote: inputoutput.java is stored in the disk.",
      "options": [
        "true",
        "false",
        "prints number of bytes in file",
        "prints number of characters in the file"
      ],
      "correct": 2
    },
    {
      "q": "Which of these methods are used to read in from a file?",
      "options": [
        "get()",
        "read()",
        "scan()",
        "readFileInput()"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following are the benefits of using Gradle over Maven? Select all that apply.",
      "options": [
        "Gradle supports more languages than Maven.",
        "Gradle incorporates Maven features as well as additional functionality.",
        "Gradle builds are successful more often than Maven builds.",
        "A Gradle build is 1000 times faster than a Maven build."
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "State whether the statement is true or false.",
      "options": [
        "Adopting Agile is necessary prior to embracing DevOps practices.",
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What is continuous testing?",
      "options": [
        "Testing continuously for 24 hours",
        "Manually testing each build, end-to-end",
        "Automated testing",
        "Automated testing on each continuous deployment"
      ],
      "correct": 3
    },
    {
      "q": "Adopting DevOps requires planning that spans which of the following? Select all that apply.",
      "options": [
        "People",
        "Efforts",
        "Process",
        "Tools/Technology"
      ],
      "correct": [
        0,
        2,
        3
      ]
    },
    {
      "q": "Which DevOps principle focuses on product and service thinking?",
      "options": [
        "Customer-centric action",
        "Continuous improvement",
        "Create with the end in mind",
        "Automate everything you can"
      ],
      "correct": 2
    },
    {
      "q": "Shift-left concept refers to moving everything to the earlier phase in the ________ cycle.",
      "options": [
        "Requirement",
        "Development",
        "Design",
        "Testing"
      ],
      "correct": 1
    },
    {
      "q": "In order to minimize risks to the business within DevOps, what is the main goal of version control?",
      "options": [
        "Ensure the ability to alert when configuration changes from the desired state.",
        "Ensure the ability to re-create the previous state of the test environment.",
        "Ensure the ability to re-create the production environment and build processes.",
        "Ensure the ability to share the source code between different developers teams."
      ],
      "correct": 1
    },
    {
      "q": "What is a continuous build? Select all that apply.",
      "options": [
        "A build that runs non-stop, over and over again.",
        "A build that has not failed in 10 continuous attempts.",
        "A build that is executed every hour/day by a continuous integration server.",
        "A build that is executed on every commit by a continuous integration server."
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "q": "DevOps is primarily about:",
      "options": [
        "Tools and their usage",
        "Processes and adherence",
        "Governance and audit processes",
        "Tools, processes, and culture"
      ],
      "correct": 3
    },
    {
      "q": "Which statement best describes the relationship between DevOps and Continuous Delivery?",
      "options": [
        "DevOps and Continuous Delivery are the same thing.",
        "DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking.",
        "DevOps and Continuous Delivery share common processes.",
        "DevOps and Continuous Delivery are not related and are mutually exclusive."
      ],
      "correct": 1
    },
    {
      "q": "How does a DevOps organization act in principle when it comes to financing its work?",
      "options": [
        "It finances special projects to serve its clients.",
        "It finances products and services to serve its clients.",
        "It finances teams in matrix organizations and these teams are responsible for handling their own budgets.",
        "It finances development and operations teams separately, so they take care of their own business."
      ],
      "correct": 1
    },
    {
      "q": "In Kubernetes, a node is:",
      "options": [
        "A worker machine",
        "A tool for starting a kubernetes cluster on a local machine",
        "A machine that coordinates the scheduling and management of application containers on the cluster",
        "A virtual machine"
      ],
      "correct": 0
    },
    {
      "q": "GIT can be integrated with Jenkins.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "POM in Maven stands for ________.",
      "options": [
        "Project Object Model",
        "Process Object Model",
        "Project Object Method",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "What is a widely used reusable asset to reinforce information security of deliverables from your DevOps team?",
      "options": [
        "Data storage systems",
        "Handling the logging of sensitive client information",
        "Data transfer between clients and software",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "DevOps is NOT a set of ______ steps.",
      "options": [
        "Development",
        "Fixed",
        "Testing",
        "Design"
      ],
      "correct": 1
    },
    {
      "q": "What is the sequence in which Maven looks for the resources?",
      "options": [
        "Local -❯ Remote - Maven Central",
        "Remote-❯ Maven Central - ❯ Local",
        "Remote-❯ Local -❯ Maven Central",
        "Maven Central -❯ Local -❯ Remote"
      ],
      "correct": 0
    },
    {
      "q": "What is the main advantage of practicing continuous delivery?",
      "options": [
        "It is easier to manage for the ops team.",
        "It improves the accuracy of testing, eases the task of deployment of software, and reduces chances of major problems when deploying software into production.",
        "People can fix defects directly in the production environment.",
        "Development environments are cheaper, hence it makes sense to make the production environment similar (and cheaper) to the development environments."
      ],
      "correct": 1
    },
    {
      "q": "DevOps can be implemented in any _________.",
      "options": [
        "Process",
        "Environment",
        "Defects",
        "None of the above"
      ],
      "correct": 1
    },
    {
      "q": "What is continuous deployment? Select all that apply.",
      "options": [
        "Deployment on every code push/commit",
        "Deployment every hour/day",
        "Local deployment on the developer's laptop",
        "Deployment on IBM Cloud"
      ],
      "correct": 0
    },
    {
      "q": "In DevOps, one of the significant ROI areas is:",
      "options": [
        "Zero defects",
        "Faster time to value",
        "Less feedback",
        "Less customer experience"
      ],
      "correct": 1
    },
    {
      "q": "How do you remove local (untracked) files and directories from the current Git working tree?\ni. git clean -f\nii. git delete -f\niii. git remove -f -d\niv. git add --all\nv. git reset --hard HEAD",
      "options": [
        "A : Only i",
        "B : Only ii and iii",
        "C : Only i and iv",
        "D : All of the above."
      ],
      "correct": 0
    },
    {
      "q": "Which event occurs when the user clicks on the HTML element ?",
      "options": [
        "onmouseover",
        "onchange",
        "onmouseclick",
        "onclick"
      ],
      "correct": 3
    },
    {
      "q": "The correct HTML tag to left align the content inside a table cell is :-",
      "options": [
        "<td align = “left”>",
        "<td align = “right”>",
        "<td leftAlign>",
        "<table align=”left”>"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of the Java Code Snippet ?\nStringJoiner astring = new StringJoiner(“-”, ” ( “, ” ) ”);\nastring.add(“A”);\nastring.add(“B”);\nastring.add(“C”);",
      "options": [
        "​   (A-B-C)",
        "​   (A)-(B)-(C)",
        "​   (-A-)(-B-)(-C-)"
      ],
      "correct": 0
    },
    {
      "q": "What are the Different Modes of Autowiring ?",
      "options": [
        "byName,byType,constructor,autodetect.",
        "byName,byType,constructor,autocorrect.",
        "byName,byContent,constructor,autodetect.",
        "byName,byContent,setter,autodetect."
      ],
      "correct": 0
    },
    {
      "q": "Which Annotation is used to refer to Pointcuts.",
      "options": [
        "@PointCut.",
        "@PointCutExecution.",
        "@PointCutBefore."
      ],
      "correct": 0
    },
    {
      "q": "Which of the below API Calls provides you the security information ?",
      "options": [
        "1) HttpServletRequest.isUserinRole()",
        "2) HttpServletRequest.getUserPrincipal()",
        "Only 1",
        "Only 2",
        "Both i and ii"
      ],
      "correct": 2
    },
    {
      "q": "Which element is used to restrict the access to a particular URL within Spring Security ?",
      "options": [
        "i. restrict-url",
        "ii.intercept-url",
        "iii.intercept-restrict."
      ],
      "correct": 1
    },
    {
      "q": "What is used to dispatch requests to the WEB Application ?",
      "options": [
        "i. DispatchherServlet.",
        "Ii. ViewHandler.",
        "iii. ViewResolver."
      ],
      "correct": 0
    },
    {
      "q": "You can only use Hibernate in ORM in Spring Boot Applications.",
      "options": [
        "i. TRUE",
        "II.FALSE"
      ],
      "correct": 1
    },
    {
      "q": "In your Data Access Object (DAO) method , you neither need to surround your code with a try/catch block nor declare",
      "options": [
        "throwing an exception in the method signature.",
        "i. TRUE",
        "ii. FALSE."
      ],
      "correct": 1
    },
    {
      "q": "A logger location where logging information is sent is called",
      "options": [
        "1. appender.",
        "2. logger",
        "3. component."
      ],
      "correct": 0
    },
    {
      "q": "By default, a bean is lazily loaded in Spring.",
      "options": [
        "1. True",
        "2. False"
      ],
      "correct": 1
    },
    {
      "q": "Sharding a MongoDB database across many server instances can be achieved with ____",
      "options": [
        "LAN",
        "SAN.",
        "MAN"
      ],
      "correct": 0
    },
    {
      "q": "In MongoDB , which is the operation that uses an index often , having better performance than those who do NOT use an\nindex ?",
      "options": [
        "SELECT.",
        "UPDATE",
        "DELETE.",
        "SORT."
      ],
      "correct": 3
    },
    {
      "q": "Which one is NOT a spring data MongoDB annotation ?",
      "options": [
        "@Document",
        "@Field",
        "@Entity",
        "@Query."
      ],
      "correct": 2
    },
    {
      "q": "In MongoDB, which of the following methods return one document ?",
      "options": [
        "findOne()",
        "findOne1()",
        "selectOne()"
      ],
      "correct": 0
    },
    {
      "q": "Redux is an exclusive feature of the React store ?",
      "options": [
        "TRUE",
        "FALSE"
      ],
      "correct": 1
    },
    {
      "q": "Identify the correct ES6 statement.\ni. var React = require(‘react’);\nii. import React from react;\niii. module.exports = Component.\niv. export default Component.",
      "options": [
        "Only i and ii",
        "Only iv",
        "Only i,ii and iv",
        "Only ii and iv"
      ],
      "correct": 3
    },
    {
      "q": "You can also use an ES6 class to define a component in React.",
      "options": [
        "True.",
        "False."
      ],
      "correct": 0
    },
    {
      "q": "Which of the below methods are NOT a part of React Component’s lifecycle ?",
      "options": [
        "Initial Rendering.",
        "Render / Re-Render.",
        "unMounting.",
        "Remote URL calls."
      ],
      "correct": 3
    },
    {
      "q": "Identify the incorrect statement on MongoDB.",
      "options": [
        "Secondary indices are not available in MongoDB.",
        "MongoDB supports search by field, range queries, and regular expression searches.",
        "MongoDB can store the business subject in the minimal number of documents."
      ],
      "correct": 0
    },
    {
      "q": "How can we render JSX in the browser ?\ni. Using Babel\nii. Using Typescript.\niii. Using Flux.\niv. Using Redux.",
      "options": [
        "Only i and ii",
        "Only iv",
        "Only i,ii and iv",
        "Only iii and iv."
      ],
      "correct": 0
    },
    {
      "q": "What is the command line tool introduced for the JS engine in Java 8 ?",
      "options": [
        "jjs",
        "jss",
        "jfs",
        "jbd"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is the immutable Java List static factory method ?",
      "options": [
        "List.of",
        "List.immutable.",
        "List.create"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements are true about Java ?\ni. A finally block is executed, only after the catch block is executed.\nii. A finally block is executed whether an exception is thrown or not.\niii. A finally block is NOT Mandatory.\niv. A finally block is executed, only if an exception occurs.",
      "options": [
        "i",
        "iv",
        "i and iv",
        "ii and iii"
      ],
      "correct": 3
    },
    {
      "q": "Which Java Class has natural sorting implemented ?",
      "options": [
        "LinkedHashSet.",
        "TreeSet",
        "HashSet"
      ],
      "correct": 1
    },
    {
      "q": "Load Balancing improves the distribution of workloads across multiple computing resources , such as computers or a",
      "options": [
        "computer cluster.",
        "True.",
        "False."
      ],
      "correct": 0
    },
    {
      "q": "What are the core operations of DevOps with applications development and with infrastructure.",
      "options": [
        "Provisioning, Configuration and Orchestration.",
        "Code Building, Coverage and Unit Testing.",
        "Packaging and Deployment.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "Which CSS property is used to change the font of an element ?",
      "options": [
        "font",
        "font-family",
        "font-style",
        "font-weight"
      ],
      "correct": 1
    },
    {
      "q": "The Bootstrap grid system is based on how many columns ?",
      "options": [
        "12",
        "3",
        "6",
        "9"
      ],
      "correct": 0
    },
    {
      "q": "Choose the correct HTML element to define important text.",
      "options": [
        "<strong>",
        "<important>",
        "<b>",
        "<pre>"
      ],
      "correct": 0
    },
    {
      "q": "Which is the correct CSS Syntax ?",
      "options": [
        "body color-black",
        "{body color-black}",
        "body {color:black;}",
        "{body;color;black}"
      ],
      "correct": 2
    },
    {
      "q": "Which Bootstrap class adds zebra-stripes to a table ?",
      "options": [
        "table-bordered.",
        "table-zebra.",
        "table-stripped",
        "even and odd"
      ],
      "correct": 2
    },
    {
      "q": "How can you detect the client’s browser name in Javascript ?",
      "options": [
        "class.navName",
        "navigator.appName",
        "browser.name",
        "window.browser."
      ],
      "correct": 1
    },
    {
      "q": "Which of the following methods CANNOT be used to add array elements in Javascript ?",
      "options": [
        "push()",
        "splice()",
        "shift()",
        "All can be used."
      ],
      "correct": 3
    },
    {
      "q": "Which of these methods is the ultimate element selection method and a very powerful technique by which client side\nJavascript programs can select the document elements that they are going to manipulate ?",
      "options": [
        "querySelectAll()",
        "querySelector()",
        "querySelect()",
        "querySelectorAll()"
      ],
      "correct": 3
    },
    {
      "q": "To use the Angular HttpClient component, you must import the ____ module.",
      "options": [
        "HttpClientModule.",
        "HttpModule.",
        "Http"
      ],
      "correct": 0
    },
    {
      "q": "In Angular , one can create local HTML reference or HTML tag using variable which starts with character ____",
      "options": [
        "@",
        "#",
        "“",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "Which of these Angular services can be injected in your component to the dynamic mode navigation ?",
      "options": [
        "Routing.",
        "RouterService.",
        "RoutingService",
        "Router"
      ],
      "correct": 3
    },
    {
      "q": "In Angular , which of the following wild card route paths will you use to define a 404 route ?",
      "options": [
        "**",
        "/",
        "##",
        "default"
      ],
      "correct": 0
    },
    {
      "q": "What is the basis for equality state in Java Identity HashMap?",
      "options": [
        "Hash Code and equals",
        "Name",
        "Reference"
      ],
      "correct": 2
    },
    {
      "q": "In Java, which of the following can be marked static?",
      "options": [
        "Methods, Variables, Initialization Blocks, Outer Classes, and Nested Classes",
        "Methods, Variables, Initialization Blocks, and Nested Classes",
        "Methods, Variables, Initialization Blocks, and Outer Classes",
        "Methods, Variables, and Initialization Block"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following Java code snippet?\npublic class home implements Runnable {\npublic void run() {\nSystem.out.printf(\"%d\",3);\n}\npublic static void main(String[] args) throws InterruptedException {\nThread thread = new Thread(new home());\nthread.start();\nSystem.out.printf(\"%d\",1);\nthread.join();\nSystem.out.printf(\"%d\",2);\n}\n}",
      "options": [
        "132",
        "123",
        "213",
        "312"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements is false about Java main method?",
      "options": [
        "We can override main method.",
        "Main method should be declared public and static.",
        "Main method should have only 1 argument of type String array.",
        "We can overload main method."
      ],
      "correct": 0
    },
    {
      "q": "HTTP2 Client API is introduced in Java 9.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Pick the right statement about creating a custom Java annotation.",
      "options": [
        "Annotations are created by using @interface, followed by annotation name.",
        "An annotation can have elements as well. They look like methods. We should not provide implementation for these elements.",
        "All annotations extend java.lang.annotation.Annotation interface. Annotations cannot include any extends clause.",
        "All of the above"
      ],
      "correct": 2
    },
    {
      "q": "What is the max capacity of a Java Blocking Queue?",
      "options": [
        "Integer.INFINITY",
        "Integer.MAX_VALUE",
        "BigDecimal.MAX_VALUE"
      ],
      "correct": 1
    },
    {
      "q": "What is the command line tool introduced for JS engine in Java 8?",
      "options": [
        "jjs",
        "jss",
        "jfs",
        "jbd"
      ],
      "correct": 0
    },
    {
      "q": "Which of these Java code snippets is a correct way of defining generic method?",
      "options": [
        "public <T1, T2, …, Tn> methodName() { }",
        "<T1, T2, …, Tn> methodName(T1, T2, …, Tn) { }",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "In Java 9, private methods are allowed in Interfaces.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Java system properties can be set or modified at runtime.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Identify the Java class used to create a new Process.",
      "options": [
        "ProcessBuilder",
        "ProcessFactory",
        "Process",
        "Thread"
      ],
      "correct": 0
    },
    {
      "q": "Pick the correct Java method reference usages.",
      "options": [
        "object::instanceMethod",
        "Class::staticMethod",
        "Class::new",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which is the correct Java code snippet to be used to create a Functional Interface?",
      "options": [
        "interface MyFunctionalInterface implements Functional {",
        "@FunctionalInterface interface MyFunctionalInterface {",
        "@Functional interface MyFunctionalInterface {"
      ],
      "correct": 1
    },
    {
      "q": "Which one will allow traversing a Java collection in each direction?",
      "options": [
        "ListIterator",
        "Iterator",
        "MapIterator",
        "SetIterator"
      ],
      "correct": 0
    },
    {
      "q": "In Java, which method is used to inform the observer of the change in observed object?",
      "options": [
        "Check",
        "Update",
        "Inform",
        "notify"
      ],
      "correct": 1
    },
    {
      "q": "In Java, it is NOT possible to override default serialization.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Pick the class that is NOT part of Java collection framework.",
      "options": [
        "Map",
        "List",
        "Queue",
        "Struct"
      ],
      "correct": 3
    },
    {
      "q": "Java Functional Interface can be defined as _____.",
      "options": [
        "Simple Abstract Markup",
        "Simple Active Markup",
        "Single Ambivalue Method",
        "Single Abstract Method"
      ],
      "correct": 3
    },
    {
      "q": "Which is the correct API to manage reactive streams in Java?",
      "options": [
        "java.util.concurrent.Flow",
        "java.util.concurrent.Flow.Publisher",
        "java.util.concurrent.Flow.Processor",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "In Java, which of the following data structure classes CANNOT be type parameterized?",
      "options": [
        "List",
        "Set",
        "Array",
        "Map"
      ],
      "correct": 2
    },
    {
      "q": "Which of these OOPS concept is enabled by method overriding in Java?",
      "options": [
        "Polymorphism",
        "Abstraction",
        "Inheritance",
        "Encapsulation"
      ],
      "correct": 0
    },
    {
      "q": "How does one assign system property values to variable using Java class fields?",
      "options": [
        "@Autowire(\"${aProperty}\") private String aSysProp;",
        "@Environment(\"${aProperty}\") private String aSysProp;",
        "@Property(\"${aProperty}\") private String aSysProp;",
        "@Value(\"${aProperty}\") private String aSysProp;"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following types of Java methods CANNOT be Type parameterized?",
      "options": [
        "Final methods",
        "Overriding methods",
        "Overloaded methods"
      ],
      "correct": 1
    },
    {
      "q": "Pick the correct Java Stream API’s?",
      "options": [
        "Stream.allMatch",
        "Stream.noneMatch",
        "Stream.anyMatch",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "Which class is introduced in Java 8 to get the current milliseconds?",
      "options": [
        "Clock",
        "Current Time",
        "Date Time",
        "Time"
      ],
      "correct": 0
    },
    {
      "q": "In Java, which of these class types supports sequential and parallel processing of data?",
      "options": [
        "Queue",
        "Lambda",
        "ExecutorService",
        "Streams"
      ],
      "correct": 3
    },
    {
      "q": "Which Java Set implementation is sorted and synchronized?",
      "options": [
        "TreeSet",
        "LinkedHashSet",
        "HashSet",
        "ConcurrentSkipListSet"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following statements is NOT correct for JVM?\nJVM acts as a translator that translates different Machine code (on the basis of Host",
      "options": [
        "Machine) for a common Byte Code.",
        "JVM is a Virtual Machine that acts as an intermediary between Java Application and Host",
        "Operating System.",
        "JVM reads Byte Code and generates Machine Code.",
        "JVM reads Source Code and generates Byte Code."
      ],
      "correct": 3
    },
    {
      "q": "Is the following a valid Java code snippet?\nOptional<String> aValue = Optional.of(\"Not Empty\");\nif (aValue.ifPresent()) {\nSystem.out.println(\"Got Not Empty\");\n}",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Java Stream does NOT store the elements. It simply performs the aggregate operations",
      "options": [
        "to get the desired stream of data.",
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which Java class is used to apply reduction or aggregate functions on streams?",
      "options": [
        "Filters",
        "Reduction",
        "Collectors"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following statements are true about Java finally block?\ni. A finally block is executed, only after the catch block is executed.\nii. A finally block is executed whether an exception is thrown or not.\niii. A finally block is NOT mandatory.\niv. A finally block is executed, only if an exception occurs.",
      "options": [
        "i",
        "iv",
        "i and iv",
        "ii and iii"
      ],
      "correct": 3
    },
    {
      "q": "Which of these is a standard Java Interface?",
      "options": [
        "Serializable",
        "Long",
        "System",
        "Collections"
      ],
      "correct": 0
    },
    {
      "q": "What is the replacement for PermGen space in Java 8?",
      "options": [
        "FixedGen",
        "Metaspace",
        "MetaGenspace"
      ],
      "correct": 1
    },
    {
      "q": "What is the return type of Java Lambda expressions?",
      "options": [
        "Void",
        "Lambda",
        "Function",
        "Regex"
      ],
      "correct": 2
    },
    {
      "q": "Name the two types of streams in Java.",
      "options": [
        "Sync and async",
        "Sequential and parallel",
        "Random and ordered"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between peek() and dequeue()?",
      "options": [
        "peek() returns the next item in line but dequeue() removes and returns the next item in",
        "line",
        "peek() and dequeue() return the next item in line",
        "peek() and dequeue() remove and return the next item in line"
      ],
      "correct": 0
    },
    {
      "q": "Which one of the following statements on Java String is correct?",
      "options": [
        "replace() method replaces only first occurrences of a character in invoking string with the given character.",
        "replace() method replaces last occurrence of a character in invoking string with the given character.",
        "replace() method replaces all occurrences of one character in invoking string with the given character.",
        "replace() method replaces all the characters in invoking string with the given character."
      ],
      "correct": 1
    },
    {
      "q": "What is the result of the following Java code snippet?\nclass Animal {\npublic String noise() {\nreturn \"peep\";\n}\n}\nclass Dog extends Animal {\npublic String noise() {\nreturn \"bark\";\n}\n}\nclass Cat extends Animal {\npublic String noise() {\nreturn \"meow\";\n}\n}\nAnimal animal = new Dog();\nCat cat = (Cat) animal;\nSystem.out.println(cat.noise());",
      "options": [
        "// Exception in thread \"main\" java.lang.ClassCastException",
        "peep",
        "bark",
        "meow",
        "Compilation fails",
        "An exception is thrown at runtime"
      ],
      "correct": 4
    },
    {
      "q": "Observe the code:\npublic class MyRunnable implements Runnable {\npublic void run() {\n// some code\n}\n}\nWhich of these will create and start this thread?",
      "options": [
        "new MyRunnable().start()",
        "new Thread(new MyRunnable()).run()",
        "new Thread(new MyRunnable()).start()",
        "MyRunnable.startThread()"
      ],
      "correct": 2
    },
    {
      "q": "Observe the code below:\nclass Mammal { }\nclass Raccoon extends Mammal {\nMammal m = new Mammal();\n}\nclass BabyRaccoon extends Mammal { }\nWhich four statements are true? (Choose four)",
      "options": [
        "Raccoon is-a Mammal.",
        "Raccoon has-a Mammal.",
        "BabyRaccoon is-a Mammal.",
        "BabyRaccoon is-a Raccoon.",
        "BabyRaccoon has-a Mammal.",
        "BabyRaccoon is-a BabyRaccoon."
      ],
      "correct": [
        0,
        1,
        2,
        5
      ]
    },
    {
      "q": "Predict the output of the code:\nclass output {\npublic static void main(String args[]) {\nStringBuffer s1 = new StringBuffer(\"Hello World\");\ns1.insert(6, \"Good \");\nSystem.out.println(s1);\n}\n}",
      "options": [
        "HelloGoodWorld",
        "HellGoodoWorld",
        "HellGood oWorld",
        "Hello Good World"
      ],
      "correct": 3
    },
    {
      "q": "Observe the code and predict the output:\nint a[] = new int[]{1, 2, 6, 4, 5};\nint b[] = new int[5];\nb[2] = a[2];\na[2] = 10;\nSystem.out.println(b[2]);",
      "options": [
        "10",
        "6",
        "2",
        "Compilation fails"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this program?\nimport java.util.*;\nclass vector {\npublic static void main(String args[]) {\nVector obj = new Vector(4, 2);\nobj.addElement(new Integer(3));\nobj.addElement(new Integer(2));\nobj.addElement(new Integer(5));\nobj.removeAll(obj);\nSystem.out.println(obj.isEmpty());\n}\n}",
      "options": [
        "0",
        "1",
        "true",
        "false"
      ],
      "correct": 2
    },
    {
      "q": "What is the output?\nimport java.util.*;\nclass Maps {\npublic static void main(String args[]) {\nTreeMap obj = new TreeMap();\nobj.put(\"A\", new Integer(1));\nobj.put(\"B\", new Integer(2));\nobj.put(\"C\", new Integer(3));\nSystem.out.println(obj.entrySet());\n}\n}",
      "options": [
        "[A, B, C]",
        "[1, 2, 3]",
        "{A=1, B=2, C=3}",
        "[A=1, B=2, C=3]"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of the following program?\nimport java.util.*;\nclass Collection_Algos {\npublic static void main(String args[]) {\nLinkedList list = new LinkedList();\nlist.add(new Integer(2));\nlist.add(new Integer(8));\nlist.add(new Integer(5));\nlist.add(new Integer(1));\nIterator i = list.iterator();\nCollections.reverse(list);\nCollections.shuffle(list);\nwhile(i.hasNext())\nSystem.out.print(i.next() + \" \");\n}\n}",
      "options": [
        "2 8 5 1",
        "1 5 8 2",
        "1 2 5 8",
        "Any random order"
      ],
      "correct": 3
    },
    {
      "q": "Which of these methods are used to read in from file?",
      "options": [
        "get()",
        "read()",
        "scan()",
        "readFileInput()"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the code?\npublic class Test8 {\npublic static void main(String args[]) {\nNumber numberRef = new Integer(0);\nDouble doubleRef = (Double)numberRef;\n}\n}",
      "options": [
        "0",
        "0.0",
        "Compilation fails",
        "Throws exception"
      ],
      "correct": 3
    },
    {
      "q": "Which pattern is used in the following code?\nimport java.util.*;\nclass HelloWorld {\npublic static void main(String args[]) {\nList<String> List = new ArrayList<String>();\nList.add(\"cricket\");\nList.add(\"football\");\nList.add(\"hockey\");\nIterator it = List.iterator();\nwhile(it.hasNext()) {\nString s = (String) it.next();\n}\n}\n}",
      "options": [
        "Observer",
        "Singleton",
        "Iterator",
        "Factory"
      ],
      "correct": 2
    },
    {
      "q": "java.util.Enumeration is an example of which pattern?",
      "options": [
        "Observer",
        "Singleton",
        "Iterator",
        "Factory"
      ],
      "correct": 2
    },
    {
      "q": "Assume the following method is properly synchronized and called from a thread A on an\nobject B: wait(2000);\nAfter calling this method, when will thread A become a candidate to get another turn at the\nCPU?",
      "options": [
        "After thread A is notified, or after two seconds.",
        "After the lock on B is released, or after two seconds.",
        "Two seconds after thread A is notified.",
        "Two seconds after lock B is released."
      ],
      "correct": 0
    },
    {
      "q": "The code snippet below is an example of which of the following?\nLong myLong = 21L;",
      "options": [
        "Auto boxing",
        "Auto unboxing",
        "Auto casting",
        "Auto instancing"
      ],
      "correct": 0
    },
    {
      "q": "What is the result?\ninterface TestA {\nString toString();\n}\npublic class Test {\npublic static void main(String[] args) {\nSystem.out.println(new TestA() {\npublic String toString() {\nreturn \"test\";\n}\n});\n}\n}",
      "options": [
        "test",
        "null",
        "An exception is thrown at runtime",
        "Compilation fails because of an error in line 1",
        "Compilation fails because of an error in line 4",
        "Compilation fails because of an error in line 5"
      ],
      "correct": 0
    },
    {
      "q": "Output?\nclass Output {\npublic static void main(String args[]) {\n// Note: The divide method should be outside main in a valid class\n}\npublic void divide(int a, int b) {\ntry {\nint c = a / b;\n}\ncatch(Exception e) {\nSystem.out.println(\"Exception\");\n}\nfinally {\nSystem.out.println(\"finally\");\n}\n}\n}",
      "options": [
        "Only Exception is printed",
        "Only finally is printed",
        "Both Exception and finally are printed if exception occurs",
        "Compilation fails"
      ],
      "correct": 2
    },
    {
      "q": "Insert the appropriate code:\npublic class Sprite {\npublic int fubar(Foo foo) {\nreturn foo.bar();\n}\npublic void testFoo() {\nfubar(\n// insert code here\n);\n}\n}",
      "options": [
        "new Foo()",
        "new Foo() { public int bar() { return 1; } }",
        "new Foo(1)",
        "Foo.bar()"
      ],
      "correct": 1
    },
    {
      "q": ";\n}\n}\npublic static void main(String[] args) {\nMain obj = new Main();\nSystem.out.println(obj.getValue(\"DEMOS\"));\n}\n}",
      "options": [
        "D",
        "DEMOS",
        "EMOS",
        "Empty String"
      ],
      "correct": 2
    },
    {
      "q": "What sort of compilation error you will get? How to fix the compilation error?\nabstract class xyz {\nabstract abc(int a, int b) { }\n}",
      "options": [
        "Missing return type",
        "Method cannot have a body",
        "Syntax error",
        "Give return type void. and remove empty parenthesis."
      ],
      "correct": 1
    },
    {
      "q": "Will this code compile?\ninterface ATOB {\nString s = \"yo\";\npublic void meth();\n}\ninterface BTOC { }\ninterface C extends ATOB, BTOC {\npublic void meth();\npublic void meth(int x);\n}",
      "options": [
        "Yes, this code will compile without any error",
        "No, compilation fails due to multiple inheritance",
        "No, compilation fails because of variable s",
        "No, compilation fails because of method overloading"
      ],
      "correct": 0
    },
    {
      "q": "How can I inherit both the interface and abstract class?\ninterface Data {\npublic void load();\n}\nabstract class Info {\npublic abstract void load();\n}",
      "options": [
        "class Xyz extends Info implements Data { void load() { } }",
        "class Xyz implements Data, Info { void load() { } }",
        "class Xyz extends Info, Data { void load() { } }",
        "Not possible in Java"
      ],
      "correct": 0
    },
    {
      "q": "Which of these handles the exception when no catch is used?",
      "options": [
        "Default handler",
        "Finally",
        "Throw handler",
        "Java run time system"
      ],
      "correct": 0
    },
    {
      "q": "Which implementation of Set would you choose if you want the iterator of Set to give",
      "options": [
        "objects in the order they were inserted?",
        "LinkedHashSet",
        "TreeSet",
        "HashSet"
      ],
      "correct": 0
    },
    {
      "q": "Which Man class properly represents the relationship \"Man has a best friend who is a\nDog\"?",
      "options": [
        "class Man extends Dog { }",
        "class Man implements Dog { }",
        "class Man { private BestFriend dog; }",
        "class Man { private Dog bestFriend; }",
        "class Man { private Dog<bestFriend>; }",
        "class Man { private BestFriend<dog>; }"
      ],
      "correct": 3
    },
    {
      "q": "A company has a business application that provides its users with many different\nreports: receivables reports, payables reports, revenue projects, and so on. The company\nhas just purchased some new, state-of-the-art, wireless printers, and a programmer has\nbeen assigned the task of enhancing all of the reports to use not only the company's old\nprinters, but the new wireless printers as well. When the programmer starts looking into the\napplication, the programmer discovers that because of the design of the application, it is\nnecessary to make changes to each report to support the new printers. Which two design\nconcepts most likely explain this situation? (Choose two.)",
      "options": [
        "Inheritance",
        "Low cohesion",
        "Tight coupling",
        "High cohesion",
        "Loose coupling",
        "Object immutability"
      ],
      "correct": 1
    },
    {
      "q": "A team of programmers is reviewing a proposed API for a new utility class. After some\ndiscussion, they realize that they can reduce the number of methods in the API without\nlosing any functionality. If they implement the new design, which two OO principles will they\nbe promoting?",
      "options": [
        "Looser coupling",
        "Tighter coupling",
        "Lower cohesion",
        "Higher cohesion",
        "Weaker encapsulation",
        "Stronger encapsulation"
      ],
      "correct": 0
    },
    {
      "q": "A team of programmers is involved in reviewing a proposed design for a new utility\nclass. After some discussion, they realize that the current design allows other classes to\naccess methods in the utility class that should be accessible only to methods within the\nutility class itself. What design issue has the team discovered?",
      "options": [
        "Tight coupling",
        "Low cohesion",
        "High cohesion",
        "Loose coupling",
        "Weak encapsulation",
        "Strong encapsulation"
      ],
      "correct": 4
    },
    {
      "q": "Which three are valid on line?\npublic interface Status {\n/* insert code here */ int MY_VALUE = 10;\n}",
      "options": [
        "final",
        "static",
        "native",
        "public",
        "private",
        "abstract",
        "protected"
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "q": "A programmer has an algorithm that requires a java.util.List that provides an efficient\nimplementation of add(0, object), but does NOT need to support quick random access. What\nsupports these requirements?",
      "options": [
        "java.util.Queue",
        "java.util.ArrayList",
        "java.util.LinearList",
        "java.util.LinkedList"
      ],
      "correct": 3
    },
    {
      "q": "Which three are true? (Choose Three)\ninterface Jumper {\npublic void jump();\n}\nclass Animal {}\nclass Dog extends Animal {\nTail tail;\n}\nclass Beagle extends Dog implements Jumper {\npublic void jump() {}\n}\nclass Cat implements Jumper {\npublic void jump() {}\n}",
      "options": [
        "Cat is-a Animal",
        "Cat is-a Jumper",
        "Dog is-a Animal",
        "Dog is-a Jumper",
        "Cat has-a Animal",
        "Beagle has-a Tail",
        "Beagle is-a Jumper"
      ],
      "correct": [
        1,
        2,
        5
      ]
    },
    {
      "q": "Which class correctly uses the Data interface and Info abstract class?\ninterface Data { public void load(); }\nabstract class Info { public abstract void load(); }",
      "options": [
        "public class Employee extends Info implements Data {\npublic void load() { /* do something */ }\n}",
        "public class Employee implements Info extends Data {\npublic void load() { /* do something */ }\n}",
        "public class Employee extends Info implements Data {\npublic void load() { /* do something */ }\npublic void Info.load() { /* do something */ }\n}",
        "public class Employee implements Info extends Data {\npublic void Data.load() { /* do something */ }\npublic void load() { /* do something */ }\n}",
        "public class Employee implements Info extends Data {\npublic void load() { /* do something */ }\npublic void Info.load() { /* do something */ }\n}",
        "public class Employee extends Info implements Data {\npublic void Data.load() { /* do something */ }\npublic void Info.load() { /* do something */ }\n}"
      ],
      "correct": 0
    },
    {
      "q": "What are the ways to create custom Property Editors?",
      "options": [
        "implement PropertyEditor interface",
        "extend PropertyEditorSupport Class",
        "none of the mentioned",
        "all of the mentioned"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "Special compiler used during weaving",
      "options": [
        "jvm B. gcc",
        "ajc",
        "none of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "Which tag is also allowed by static field?",
      "options": [
        "util:constant",
        "list",
        "set",
        "constructor-args"
      ],
      "correct": 0
    },
    {
      "q": "Annotation used to indicate a field has to have a minimum of 2 characters.",
      "options": [
        "@NotNull",
        "@Size",
        "@MaxSize",
        "@size"
      ],
      "correct": 1
    },
    {
      "q": "Views that canít be resolved byInternalResourceViewResolver.",
      "options": [
        "redirect",
        "redirect:prefix",
        "redirect:suffix",
        "all of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "SpEL statements are recognizable.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Alternative way to resolve locales.",
      "options": [
        "AcceptHeaderLocale",
        "AcceptHeader",
        "AcceptHeaderLocaleResolver",
        "SessionLocaleResolver"
      ],
      "correct": 3
    },
    {
      "q": "General-purpose class that allows a response to be rendered using a marshaller.",
      "options": [
        "MarshallingView",
        "Marshalling",
        "View",
        "All of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Annotation which allows the Jaxb2Marshaller marshaller to detect a classís (i.e., objectís) fields.",
      "options": [
        "@XmlRootElement",
        "@XmlRoot",
        "@NotNull",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "To load root application context at the start up.",
      "options": [
        "ContextListener",
        "ContextLoader",
        "ContextLoaderListener",
        "ContextEventListener"
      ],
      "correct": 2
    },
    {
      "q": "Annotation used to declare an introduction",
      "options": [
        "Before",
        "After",
        "@DeclareParents",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "DAO methods require access to the session factory, which can be injected:-",
      "options": [
        "a setter method",
        "constructor argument",
        "none of the mentioned",
        "all of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": "System.out.println(cat.noise());\nWhat is the result?",
      "options": [
        "peep",
        "bark",
        "meow",
        "Compilation fails.",
        "An exception is thrown at runtime."
      ],
      "correct": 4
    },
    {
      "q": "}\nWhat is the result?",
      "options": [
        "B",
        "B, followed by an Exception.",
        "Compilation fails due to an error on line 9.",
        "Compilation fails due to an error on line 15.",
        "An Exception is thrown with no other output"
      ],
      "correct": 3
    },
    {
      "q": "class Mammal { }\nclass Raccoon extends Mammal {\nMammal m = new Mammal();\n}\nclass BabyRaccoon extends Mammal { }\nWhich four statements are true? (Choose four.)",
      "options": [
        "Raccoon is-a Mammal.",
        "Raccoon has-a Mammal.",
        "BabyRaccoon is-a Mammal.",
        "BabyRaccoon is-a Raccoon.",
        "BabyRaccoon has-a Mammal.",
        "BabyRaccoon is-a BabyRaccoon."
      ],
      "correct": [
        0,
        1,
        2,
        5
      ]
    },
    {
      "q": "Which of these keywords cannot be used for a cl\nass which has been declared final?",
      "options": [
        "abstract",
        "extends",
        "abstract and extends",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "A team of programmers is involved in reviewing\na proposed design for a new utility class.\nAfter some discussion, they realize that the curre\nnt design allows other classes to access\nmethods in the utility class that should be access\nible only to methods within the utility class itse\nlf.\nWhat design issue has the team discovered?",
      "options": [
        "Tight coupling",
        "Low cohesion",
        "High cohesion",
        "Loose coupling",
        "Weak encapsulation",
        "Strong encapsulation"
      ],
      "correct": 4
    },
    {
      "q": "Which of these methods are used to read in from\nfile?",
      "options": [
        "get()",
        "read()",
        "scan()",
        "readFileInput()"
      ],
      "correct": 1
    },
    {
      "q": "What is the output?\n\npackage pkg;\nclass output {\n  public static void main(String args[]) {\n    StringBuffer s1 = new StringBuffer(\"Hello\");\n    s1.setCharAt(1, 'x');\n    System.out.println(s1);\n  }\n}",
      "options": [
        "xello",
        "xxxxx",
        "Hxllo",
        "Hexlo"
      ],
      "correct": 2
    },
    {
      "q": "Load Balancing improves the distribution of workloads across multiple computing resources, such as computers or a computer cluster.",
      "options": [
        "True.",
        "False."
      ],
      "correct": 0
    },
    {
      "q": "In Angular , one can create local HTML reference or HTML tag using variable which",
      "options": [
        "starts with character ____",
        "@",
        "#",
        "“",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "Which of these Angular services can be injected in your component to the dynamic\nmode navigation ?",
      "options": [
        "Routing.",
        "RouterService.",
        "RoutingService",
        "Router"
      ],
      "correct": 3
    },
    {
      "q": "In Angular , which of the following wild card route paths will you use to define a 404\nroute ?",
      "options": [
        "**",
        "/",
        "##",
        "default"
      ],
      "correct": 0
    },
    {
      "q": "What are the core operations of DevOps with application development and with\ninfrastructure?",
      "options": [
        "Provisioning, Configuration, and Orchestration",
        "Code building, coverage, and Unit testing",
        "Packaging and Deployment",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "In Java, which of these class types supports sequential and parallel processing of\ndata?",
      "options": [
        "Queue",
        "Lambda",
        "ExecutorService",
        "Streams"
      ],
      "correct": 3
    },
    {
      "q": "Where is the correct place to insert a JavaScript? Both the <head> section and the\n<body> section are correct",
      "options": [
        "The <head> section",
        "Both the <head> section and the <body> section are correct",
        "The <body> section",
        "The <footer> section"
      ],
      "correct": 1
    },
    {
      "q": "In JavaScript, var declares a block-scoped variable.? False",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What is React?",
      "options": [
        "Just a server-side framework",
        "Just a user-interface framework",
        "Both a server-side framework as well as a user-interface framework"
      ],
      "correct": 1
    },
    {
      "q": "What are the limitations of React?",
      "options": [
        "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development.",
        "React uses inline templating and JSX. This can seem awkward to some developers.",
        "The library of React is too large.",
        "All of the above"
      ],
      "correct": 2
    },
    {
      "q": "How can you access the state of a component from inside of a member function in\nReact?",
      "options": [
        "this getState()",
        "this prototype stateValue",
        "this.state",
        "this values"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following API is a MUST for every React component? render",
      "options": [
        "getInitialState",
        "render",
        "renderComponent"
      ],
      "correct": 1
    },
    {
      "q": "What does the \"webpack\" command do?",
      "options": [
        "Transpiles all the Javascript down into one file",
        "Runs react local development server"
      ],
      "correct": 0
    },
    {
      "q": "Output? int x = 5; System.out.println(x++ + ++x);",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "String s1=\"Hello\"; String s2=new String(\"Hello\"); System.out.println(s1==s2);",
      "options": [
        "true",
        "false",
        "Error",
        "null"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "List<Integer> list=new ArrayList<>(); list.add(1); list.add(2); list.remove(Integer.valueOf(1)); System.out.println(list);",
      "options": [
        "[1,2]",
        "[2]",
        "[]",
        "Error"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "static int x=10; Test t=new Test(); t.x=20; System.out.println(Test.x);",
      "options": [
        "10",
        "20",
        "30",
        "Error"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "int[] arr={1,2}; System.out.println(arr[2]); with try-catch.",
      "options": [
        "1",
        "2",
        "Error",
        "null"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Java: What is the purpose of the final keyword?",
      "options": [
        "Prevents method overriding",
        "Allows dynamic binding",
        "Enables garbage collection",
        "Permits multiple inheritance"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Java: Which collection is synchronized by default?",
      "options": [
        "ArrayList",
        "HashMap",
        "Vector",
        "LinkedList"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Java: What is the default access modifier for class members?",
      "options": [
        "public",
        "private",
        "protected",
        "package-private"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Java: What does the transient keyword do?",
      "options": [
        "Prevents serialization",
        "Enables multithreading",
        "Marks a variable as static",
        "Allows method overriding"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Java: Which interface is used for sorting objects?",
      "options": [
        "Comparable",
        "Comparator",
        "Serializable",
        "Cloneable"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What is the keyword used to transfer control to another part of the program (exception)?",
      "options": [
        "catch",
        "throw",
        "try",
        "finally"
      ],
      "correct": 1
    },
    {
      "q": "Which will initialize the array myVals to contain two values: 1 and 2?",
      "options": [
        "int[] myVals = new int[2] {1, 2};",
        "int[] myVals = {1, 2};",
        "int[2] myVals = {1, 2};",
        "int[] myVals = [1, 2];"
      ],
      "correct": 1
    },
    {
      "q": "float f = 7.0f/2.0f; long l = 7L/2L; Which statement is true?",
      "options": [
        "The values of f and l are equivalent",
        "The assignment to l will create an error",
        "The value of f is less than the value of l",
        "The value of f is greater than the value of l"
      ],
      "correct": 3
    },
    {
      "q": "String s1 = \"hi\"; String s2 = \"h\"; s2 += \"i\"; boolean b1 = s1 == s2; boolean b2 = s1.equals(s2); Which variable(s) are assured to be true?",
      "options": [
        "Both b1 and b2",
        "b1",
        "Neither b1 or b2",
        "b2"
      ],
      "correct": 3
    },
    {
      "q": "Given a type parameter T, what would you assign to T[] ts;?",
      "options": [
        "ts = (T[]) new Object[SIZE];",
        "It's impossible.",
        "ts = new T[SIZE];",
        "ts = new Object[SIZE];"
      ],
      "correct": 0
    },
    {
      "q": "class Bike{ void run(){print(\"running\");} } class Splendor extends Bike{ void run(){print(\"running safely with 60km\");} } Bike b = new Splendor(); b.run(); - what kind of polymorphism?",
      "options": [
        "Compile time polymorphism",
        "Encapsulation Runtime",
        "Java Runtime Polymorphism",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "In the running phase of a program, the JVM executes the _______ generated by the compiler.",
      "options": [
        "class code",
        "bytecode",
        "plugin code",
        "Bitcode"
      ],
      "correct": 1
    },
    {
      "q": "What is the premise of equality for IdentityHashMap?",
      "options": [
        "Name equality",
        "Hashcode equality",
        "Length equality",
        "Reference equality"
      ],
      "correct": 3
    },
    {
      "q": "If a class inherits from some other class, it should not ________. Which option is incorrect?",
      "options": [
        "Over-ride or add the minimum to accomplish the derived class' purpose",
        "Override all the methods of its parent class",
        "Make sure the result 'contains' its base class",
        "Make use of the parent class's capabilities"
      ],
      "correct": 1
    },
    {
      "q": "byte x = 127; x++; x++; System.out.print(x); What is the output?",
      "options": [
        "-128",
        "-127",
        "129",
        "2"
      ],
      "correct": 1
    },
    {
      "q": "How many classes of the java.lang package are known as wrapper classes in Java?",
      "options": [
        "6",
        "5",
        "8",
        "3"
      ],
      "correct": 2
    },
    {
      "q": "In which case can the static keyword NOT be applied?",
      "options": [
        "variables",
        "methods",
        "blocks",
        "outer class"
      ],
      "correct": 3
    },
    {
      "q": "What is the main use of the keyword 'this'?",
      "options": [
        "To invoke current class method (implicitly)",
        "To return the current class instance from the method",
        "To refer to the current class instance variable",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "long choice=2; switch(choice) { case 1: print(\"Hello\"); break; case 2: print(\"Java\"); default: print(\"Try Again\"); } What is the output?",
      "options": [
        "JavaTry Again",
        "Try Again",
        "Compilation Error",
        "Java"
      ],
      "correct": 0
    },
    {
      "q": "Student class has a private constructor Student(int i, String n). What happens when Example creates new Student(111,\"Karan\") from another class?",
      "options": [
        "Prints 111 Karan / 222 Aryan",
        "Prints with quotes",
        "Prints on separate lines",
        "Error: constructor has private access in Student"
      ],
      "correct": 3
    },
    {
      "q": "ThreadSample t1, t2 both call run() directly (not start()); then print 'hello'. Which is true?",
      "options": [
        "1234 1234... infinite",
        "'hello' will be printed after run() of both objects completes.",
        "It will give an error from try/catch block",
        "None of the above"
      ],
      "correct": 1
    },
    {
      "q": "Which two classes have high-level streams containing methods for serializing/deserializing objects?",
      "options": [
        "ObjectInputStream and ObjectStream",
        "ObjectInputStream and ObjectOutputStream",
        "InputStream and OutputStream",
        "ObjectStream and OutputStream"
      ],
      "correct": 1
    },
    {
      "q": "StringBuffer s1 = new StringBuffer(\"Hello World\"); s1.insert(6, \"Good \"); System.out.println(s1); What is the output?",
      "options": [
        "HelloGoodWorld",
        "HellGoodoWorld",
        "HellGood oWorld",
        "Hello Good World"
      ],
      "correct": 3
    },
    {
      "q": "A team discovers their utility class design allows other classes to access methods that should be accessible only within the utility class itself. What design issue is this?",
      "options": [
        "Tight coupling",
        "Low cohesion",
        "High cohesion",
        "Loose coupling",
        "Weak encapsulation"
      ],
      "correct": 4
    },
    {
      "q": "Vector obj = new Vector(4,2); obj.addElement(3); obj.addElement(2); obj.addElement(5); obj.removeAll(obj); System.out.println(obj.isEmpty()); Output?",
      "options": [
        "0",
        "1",
        "true",
        "false"
      ],
      "correct": 2
    },
    {
      "q": "int array[] = new int[5]; for(i=5;i>0;i--) array[5-i]=i; Arrays.sort(array); print all. Output?",
      "options": [
        "12345",
        "54321",
        "01234",
        "43210"
      ],
      "correct": 0
    },
    {
      "q": "TreeMap obj with A=1,B=2,C=3; System.out.println(obj.entrySet()); Output?",
      "options": [
        "[A, B, C]",
        "[1, 2, 3]",
        "{A=1, B=2, C=3}",
        "[A=1, B=2, C=3]"
      ],
      "correct": 3
    },
    {
      "q": "BitSet obj = new BitSet(5); set 0-4; obj.clear(2); print(obj); Output?",
      "options": [
        "{0, 1, 3, 4}",
        "{0, 1, 2, 4}",
        "{0, 1, 2, 3, 4}",
        "{0, 0, 0, 3, 4}"
      ],
      "correct": 0
    },
    {
      "q": "int array[5]; fill values 5,4,3,2,1 via loop; Arrays.fill(array,1,4,8); print all. Output?",
      "options": [
        "12885",
        "12845",
        "58881",
        "54881"
      ],
      "correct": 2
    },
    {
      "q": "LinkedList with 2,8,5,1; Collections.reverse(list); Collections.shuffle(list); iterate with iterator obtained before shuffle. Output?",
      "options": [
        "2 8 5 1",
        "1 5 8 2",
        "1 2 5 8",
        "Any random order"
      ],
      "correct": 3
    },
    {
      "q": "LinkedList with 2,8,5,1; Collections.reverse(list); Collections.sort(list); iterate with iterator obtained before sort. Output?",
      "options": [
        "2 8 5 1",
        "1 5 8 2",
        "1 2 5 8",
        "2 1 8 5"
      ],
      "correct": 2
    },
    {
      "q": "StringBuffer c=new StringBuffer(\"Hello\"); StringBuffer c1=new StringBuffer(\"World\"); c.append(c1); print(c); Output?",
      "options": [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      "correct": 2
    },
    {
      "q": "StringBuffer s1 = new StringBuffer(\"Hello\"); s1.setCharAt(1,'x'); print(s1); Output?",
      "options": [
        "xello",
        "xxxxx",
        "Hxllo",
        "Hexlo"
      ],
      "correct": 2
    },
    {
      "q": "String s1 = \"one\"; String s2 = s1 + \" two\"; print(s2); Output?",
      "options": [
        "one",
        "two",
        "one two",
        "compilation error"
      ],
      "correct": 2
    },
    {
      "q": "try { print(\"Hello \" + 1/0); } catch(ArithmeticException e) { print(\"World\"); } Output?",
      "options": [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      "correct": 1
    },
    {
      "q": "Which describes the correct sequence for making a database connection: (1) Loading the driver (2) Process results (3) Making the connection (4) Executing SQL statements?",
      "options": [
        "1,2,3,4",
        "1,3,4,2",
        "2,1,3,4",
        "4,1,2,3"
      ],
      "correct": 1
    },
    {
      "q": "InputStream obj = new FileInputStream(\"inputoutput.java\"); print(obj.available()); What is printed?",
      "options": [
        "true",
        "false",
        "number of bytes in file",
        "number of characters in the file"
      ],
      "correct": 2
    },
    {
      "q": "Which of these methods is used to read in from a file?",
      "options": [
        "get()",
        "read()",
        "scan()",
        "readFileInput()"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following allows non-repeatable read in JDBC Connection?",
      "options": [
        "TRANSACTION_READ_UNCOMMITTED",
        "TRANSACTION_READ_COMMITTED",
        "TRANSACTION_SERIALIZABLE",
        "TRANSACTION_REPEATABLE_READ"
      ],
      "correct": 1
    },
    {
      "q": "Which statements are true about Java exceptions?",
      "options": [
        "A finally block is executed, only after the catch block is executed.",
        "A finally block is executed whether an exception is thrown or not.",
        "A finally block is NOT mandatory, and both statements (ii and iii) apply.",
        "A finally block is executed only if an exception occurs."
      ],
      "correct": 2
    },
    {
      "q": "Optional<String> aValue = Optional.of(\"Not Empty\"); if(aValue.isPresent()) { print(\"Got Not Empty\"); } Is this valid Java code?",
      "options": [
        "True, it's valid code",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Service discovery tools help by reducing the problem of how processes and services in a cluster can find and talk to one another.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "In Java, Optional.ofNullable() returns a non-empty Optional if the given object has a value, otherwise an empty Optional.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements is true about microservices architecture?",
      "options": [
        "Microservices applications must be deployed on the same physical host.",
        "Microservices architecture supports high availability of individual microservices.",
        "Microservices cannot be used if a company is embracing DevOps.",
        "Microservices are designed using a bounded context that can communicate with other bounded contexts (and B is also true)."
      ],
      "correct": 3
    },
    {
      "q": "Load balancing improves the distribution of workloads across multiple computing resources.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "What are the core operations of DevOps with applications development and infrastructure?",
      "options": [
        "Provisioning, Configuration and Orchestration.",
        "Code Building, Coverage and Unit Testing.",
        "Packaging and Deployment.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "StringJoiner astring = new StringJoiner(\"-\", \"( \", \" )\"); astring.add(\"A\"); astring.add(\"B\"); astring.add(\"C\"); What is the output?",
      "options": [
        "(A-B-C)",
        "(A)-(B)-(C)",
        "(-A-)(-B-)(-C-)"
      ],
      "correct": 0
    },
    {
      "q": "Which of the below API calls provide you security information? (1) HttpServletRequest.isUserinRole() (2) HttpServletRequest.getUserPrincipal()",
      "options": [
        "Only 1",
        "Only 2",
        "Both 1 and 2"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation is used to create Primary Key : Foreign Key relation between two tables?",
      "options": [
        "ForeignKey",
        "JoinedKey",
        "JoinColumn"
      ],
      "correct": 2
    },
    {
      "q": "In your DAO method, you neither need to surround your code with a try/catch block nor declare throwing an exception in the method signature.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation is used as a substitute for the initialization method?",
      "options": [
        "@PostConstruct",
        "@PreDestroy",
        "@PreConstruct"
      ],
      "correct": 0
    },
    {
      "q": "Which statements are true about Java? (i) finally executed only after catch (ii) finally executed whether exception thrown or not (iii) finally not mandatory (iv) finally executed only if exception occurs",
      "options": [
        "i only",
        "iv only",
        "i and iv",
        "ii and iii"
      ],
      "correct": 3
    },
    {
      "q": "Optional<String> aValue = Optional.of(\"Not Empty\"); if(aValue.isPresent()) { print(\"Got Not Empty\"); } Is this a valid Java code snippet?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "The __ JavaScript method is like the mathematical \"for all\" quantifier, returning true if and only if the function returns true for all elements in the array.",
      "options": [
        "every()",
        "some()",
        "all()",
        "forall()"
      ],
      "correct": 0
    },
    {
      "q": "In JavaScript, ____ is a comma separated list of colon separated name-value pairs enclosed within curly braces.",
      "options": [
        "An object prototype",
        "A map object",
        "A class",
        "An object literal"
      ],
      "correct": 3
    },
    {
      "q": "In JavaScript, what does 'if (!a[i]) continue;' do? (i) skips undefined elements (ii) skips null elements (iii) skips non-existent elements",
      "options": [
        "i and ii only",
        "ii and iii only",
        "i and iii only",
        "i, ii and iii"
      ],
      "correct": 3
    },
    {
      "q": "Which method is the ultimate element selection method by which client-side JavaScript programs select document elements to manipulate?",
      "options": [
        "querySelectAll()",
        "querySelector()",
        "querySelect()",
        "querySelectorAll()"
      ],
      "correct": 3
    },
    {
      "q": "ArithmeticException and IOException are examples of which kind of exception?",
      "options": [
        "Both checked exceptions",
        "Both unchecked (runtime) exceptions",
        "One is unchecked (ArithmeticException), one is checked (IOException)",
        "Both are Errors, not Exceptions"
      ],
      "correct": 2
    },
    {
      "q": "What is the typical sequence of steps in Java servlet deployment?",
      "options": [
        "Coding, Compiling, Deploying",
        "Deploying, Coding, Compiling",
        "Compiling, Deploying, Coding",
        "Coding, Deploying, Compiling"
      ],
      "correct": 0
    },
    {
      "q": "Which JDBC object is used to submit a query?",
      "options": [
        "Connection",
        "Statement",
        "ResultSet",
        "DriverManager"
      ],
      "correct": 1
    },
    {
      "q": "Which statement about abstract classes/methods is FALSE?",
      "options": [
        "An abstract class can be instantiated directly",
        "An abstract class doesn't need to declare any abstract methods",
        "A class containing an abstract method must itself be declared abstract",
        "An abstract method has no body"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following IS a JSP implicit object?",
      "options": [
        "this",
        "page",
        "applet",
        "module"
      ],
      "correct": 1
    },
    {
      "q": "Which range represents successful (2xx) HTTP status codes?",
      "options": [
        "100–199",
        "200–299",
        "300–399",
        "400–499"
      ],
      "correct": 1
    },
    {
      "q": "The superclass of all classes in Java is:",
      "options": [
        "Object",
        "Class",
        "Void",
        "Super"
      ],
      "correct": 0
    },
    {
      "q": "Which method is used to mark a thread as a background (daemon) thread?",
      "options": [
        "setPriority()",
        "setDaemon(true)",
        "start()",
        "run()"
      ],
      "correct": 1
    },
    {
      "q": "JDBC classes and interfaces belong to which package?",
      "options": [
        "java.util.*",
        "java.sql.*",
        "java.io.*",
        "java.net.*"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is NOT a primitive datatype in Java?",
      "options": [
        "int",
        "char",
        "boolean",
        "String"
      ],
      "correct": 3
    },
    {
      "q": "System.out.println() belongs to which class?",
      "options": [
        "PrintWriter",
        "PrintStream",
        "BufferedWriter",
        "System"
      ],
      "correct": 1
    },
    {
      "q": "A void method does not return a value.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which method reverses the characters of a string?",
      "options": [
        "reverse()",
        "flip()",
        "invert()",
        "swap()"
      ],
      "correct": 0
    },
    {
      "q": "The JSP implicit object 'session' is of which type?",
      "options": [
        "HttpSession",
        "HttpServletRequest",
        "HttpServletResponse",
        "ServletContext"
      ],
      "correct": 0
    },
    {
      "q": "In AWT, what are the default layouts for Frame and Panel respectively?",
      "options": [
        "Frame: BorderLayout, Panel: FlowLayout",
        "Frame: FlowLayout, Panel: BorderLayout",
        "Both use BorderLayout",
        "Both use FlowLayout"
      ],
      "correct": 0
    },
    {
      "q": "Which interface is primarily used to represent a connection to a database in JDBC?",
      "options": [
        "Connection",
        "Statement",
        "ResultSet",
        "Driver"
      ],
      "correct": 0
    },
    {
      "q": "What does File.list() return?",
      "options": [
        "An array of File objects",
        "An array of String filenames",
        "A List<String>",
        "An ArrayList"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a valid method declaration?",
      "options": [
        "public void int A()",
        "public int test2(int o);",
        "public void test int(int i, int j);",
        "None of the above"
      ],
      "correct": 1
    },
    {
      "q": "public class B { static int x; public static void main(String[] a){ System.out.println(B.x); } }\nWhat is printed?",
      "options": [
        "prints 0",
        "Compile error",
        "prints null",
        "Runtime exception"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is NOT a JSP directive?",
      "options": [
        "page",
        "include",
        "taglib",
        "forward"
      ],
      "correct": 3
    },
    {
      "q": "Scriptlet, expression, and directive are all examples of:",
      "options": [
        "JSP scripting elements",
        "JSP actions",
        "JSP implicit objects",
        "JSP beans"
      ],
      "correct": 0
    },
    {
      "q": "<jsp:useBean id=\"name\" class=\"java.lang.String\"/>\n<%= name %>\nWhat is the output?",
      "options": [
        "prints 0",
        "prints null",
        "compile time error",
        "none of the above — prints an empty string"
      ],
      "correct": 3
    },
    {
      "q": "Which call correctly invokes a base (super) class constructor that takes an int argument?",
      "options": [
        "this(10)",
        "super(10)",
        "super()",
        "new Base(10)"
      ],
      "correct": 1
    },
    {
      "q": "How can a session object be explicitly destroyed in a servlet/JSP?",
      "options": [
        "session.invalidate()",
        "session.remove()",
        "session.destroy()",
        "session.close()"
      ],
      "correct": 0
    },
    {
      "q": "What are the default values of uninitialized static int, double, char, long, and short fields respectively?",
      "options": [
        "0, 0.0, '\\u0000', 0L, 0",
        "null for all",
        "Garbage/unpredictable values",
        "Compile error — must be initialized"
      ],
      "correct": 0
    },
    {
      "q": "<%! int i = 8; %>\n<% int i = 10; %>\n<%= i %>\nWhat is printed?",
      "options": [
        "prints 8",
        "prints 10",
        "compile time error",
        "prints 18"
      ],
      "correct": 1
    },
    {
      "q": "Class.forName() throws which checked exception if the class isn't found?",
      "options": [
        "ClassNotFoundException",
        "IOException",
        "SQLException",
        "RuntimeException"
      ],
      "correct": 0
    },
    {
      "q": "Which RandomAccessFile method is used to specify a new file-pointer position?",
      "options": [
        "seek()",
        "skip()",
        "mark()",
        "reset()"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is NOT a valid char declaration in Java?",
      "options": [
        "char c = 'A';",
        "char c = 65;",
        "char c = \"A\";",
        "char c = '\\u0041';"
      ],
      "correct": 2
    },
    {
      "q": "static int i = 012;\npublic static void main(String[] args){ System.out.println(i); }\nWhat is printed?",
      "options": [
        "prints 12",
        "prints 10",
        "Compile error",
        "prints 012"
      ],
      "correct": 1
    },
    {
      "q": "Which array declaration is INVALID in Java?",
      "options": [
        "int[] i = new int[5];",
        "int[] i = new int[]{1,2,3};",
        "int[] i = new int[];",
        "int[][] i = new int[2][3];"
      ],
      "correct": 2
    },
    {
      "q": "boolean a, b, c;  // all default to false\nboolean result = a || (b = true) && (c = true);\nSystem.out.println(a + \",\" + b + \",\" + c);\nWhat is printed?",
      "options": [
        "false,false,false",
        "false,true,true",
        "true,true,true",
        "Compile error"
      ],
      "correct": 1
    },
    {
      "q": "InputStreamReader isr = new InputStreamReader(System.in);\nBufferedReader br = new BufferedReader(isr);\nWhat is br used for?",
      "options": [
        "Reading raw binary data",
        "Efficiently reading buffered character/text input from the console",
        "Writing to a file",
        "Converting bytes into serialized objects"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to create a copy of an existing object?",
      "options": [
        "copy()",
        "duplicate()",
        "clone()",
        "new()"
      ],
      "correct": 2
    },
    {
      "q": "Every Servlet must implement which interface (directly or via GenericServlet/HttpServlet)?",
      "options": [
        "The Servlet interface",
        "The ServletConfig interface",
        "Both Servlet and ServletContext",
        "Only ServletContext"
      ],
      "correct": 0
    },
    {
      "q": "Submitting a SQL query in JDBC is done using a:",
      "options": [
        "Connection object",
        "Statement object",
        "ResultSet object",
        "DriverManager object"
      ],
      "correct": 1
    },
    {
      "q": "Given double x = 4.8, which Math method returns 4 (rounds down / truncates the fractional part)?",
      "options": [
        "Math.ceil(x)",
        "Math.floor(x)",
        "Math.round(x)",
        "Math.abs(x)"
      ],
      "correct": 1
    },
    {
      "q": "Which of these is a core feature of Java?",
      "options": [
        "Object-Oriented Programming",
        "Platform-dependent execution",
        "Manual memory management",
        "Unsafe raw pointers"
      ],
      "correct": 0
    },
    {
      "q": "How does an applet primarily communicate with its browser environment?",
      "options": [
        "Through the AppletContext interface (e.g. getAppletContext(), showDocument())",
        "Via a direct raw socket connection",
        "Through the Servlet API",
        "Through JDBC"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation indicates a field must have a minimum of 2 characters?",
      "options": [
        "@NotNull",
        "@Size",
        "@MaxSize",
        "@size"
      ],
      "correct": 1
    },
    {
      "q": "Which type of view can't be resolved by InternalResourceViewResolver?",
      "options": [
        "redirect: views",
        "redirect:prefix",
        "redirect:suffix",
        "All of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "SpEL statements are recognizable. True or false?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation is added as an input parameter to a handler method to bind a URI template variable?",
      "options": [
        "@PathVariable",
        "@Path",
        "@PathLocale",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which is an alternative way to resolve locales?",
      "options": [
        "AcceptHeaderLocale",
        "AcceptHeader",
        "AcceptHeaderLocaleResolver",
        "SessionLocaleResolver"
      ],
      "correct": 3
    },
    {
      "q": "Which general-purpose class allows a response to be rendered using a marshaller?",
      "options": [
        "MarshallingView",
        "Marshalling",
        "View",
        "All of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation allows the Jaxb2Marshaller to detect a class's fields?",
      "options": [
        "@XmlRootElement",
        "@XmlRoot",
        "@NotNull",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is the easiest signature to unit test?",
      "options": [
        "This one — a plain method taking simple params and a Model",
        "A method taking HttpServletRequest/HttpServletResponse",
        "A method taking HttpServletRequest/HttpSession",
        "A method using @PathVariable instead of @RequestParam changes nothing"
      ],
      "correct": 0
    },
    {
      "q": "Which class loads the root application context at startup?",
      "options": [
        "ContextListener",
        "ContextLoader",
        "ContextLoaderListener",
        "ContextEventListener"
      ],
      "correct": 2
    },
    {
      "q": "DAO methods require access to the session factory, which can be injected via:",
      "options": [
        "A setter method only",
        "A constructor argument only",
        "None of the mentioned",
        "All of the mentioned (setter or constructor)"
      ],
      "correct": 3
    },
    {
      "q": "Which of these keywords cannot be used for a class that has been declared final?",
      "options": [
        "abstract",
        "extends",
        "Both abstract and extends",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "A team reviewing a class design realizes other classes can access methods that should only be accessible within the utility class itself. What design issue is this?",
      "options": [
        "Tight coupling",
        "Low cohesion",
        "High cohesion",
        "Weak encapsulation"
      ],
      "correct": 3
    },
    {
      "q": "Which of these are true? (multiple correct — select the most complete option)",
      "options": [
        "Raccoon is-a Mammal; Raccoon has-a Mammal; BabyRaccoon is-a Mammal; BabyRaccoon is-a BabyRaccoon",
        "Only Raccoon is-a Mammal",
        "BabyRaccoon is-a Raccoon",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "q": "The sendError() method of HttpServletResponse is equivalent to invoking setStatus() with which parameter?",
      "options": [
        "SC_OK",
        "SC_MOVED_TEMPORARILY",
        "SC_NOT_FOUND",
        "SC_INTERNAL_SERVER_ERROR"
      ],
      "correct": 2
    },
    {
      "q": "The sendRedirect() method of HttpServletResponse is equivalent to invoking setStatus() with which parameter (plus a Location header)?",
      "options": [
        "SC_OK",
        "SC_MOVED_TEMPORARILY",
        "SC_NOT_FOUND",
        "SC_INTERNAL_SERVER_ERROR"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this generic-stack program?",
      "options": [
        "Error",
        "Hello",
        "36",
        "Hello 36"
      ],
      "correct": 3
    },
    {
      "q": "Which output pattern is correct (checking indices 0 and 4 due to i += 3)?",
      "options": [
        "'a' is a lower case letter / 'A' is an upper case letter",
        "'b' is a lower case letter / whitespace",
        "'a' is a lower case letter / whitespace character",
        "'a' is a lower case letter / '0' is a digit"
      ],
      "correct": 0
    },
    {
      "q": "What is the correct sequence for making a JDBC database connection?",
      "options": [
        "Load driver → Process results → Make connection → Execute SQL",
        "Load driver → Make connection → Execute SQL → Process results",
        "Process results → Load driver → Make connection → Execute SQL",
        "Execute SQL → Load driver → Process results → Make connection"
      ],
      "correct": 1
    },
    {
      "q": "InputStream obj = new FileInputStream(\"inputoutput.java\"); System.out.print(obj.available()); — what does this print?",
      "options": [
        "true",
        "false",
        "The number of bytes available to read from the file",
        "The number of characters in the file"
      ],
      "correct": 2
    },
    {
      "q": "Which JDBC transaction isolation level allows non-repeatable reads?",
      "options": [
        "TRANSACTION_READ_UNCOMMITTED",
        "TRANSACTION_READ_COMMITTED",
        "TRANSACTION_SERIALIZABLE",
        "TRANSACTION_REPEATABLE_READ"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is NOT a valid HTTP/1.1 method?",
      "options": [
        "CONNECT method",
        "COMPARE method",
        "OPTIONS method",
        "TRACE method"
      ],
      "correct": 1
    },
    {
      "q": "Where are compiled class files located within a WAR file?",
      "options": [
        "/META-INF/classes",
        "/classes",
        "/WEB-INF/classes",
        "/root/classes"
      ],
      "correct": 2
    },
    {
      "q": "What manages assigning pods to nodes depending on resource availability?",
      "options": [
        "The Scheduler",
        "The Kubelet",
        "etcd",
        "The Ingress Controller"
      ],
      "correct": 0
    },
    {
      "q": "A ______ ensures that all (or some) nodes run a copy of a pod.",
      "options": [
        "Deployment",
        "ReplicaSet",
        "DaemonSet",
        "StatefulSet"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of a ReplicaSet?",
      "options": [
        "To ensure a specified number of pod replicas are running at any given time",
        "To store persistent data",
        "To expose a pod externally",
        "To schedule cron jobs"
      ],
      "correct": 0
    },
    {
      "q": "What is the basis for equality state in Java IdentityHashMap?",
      "options": [
        "Hash Code and equals",
        "Name",
        "Reference"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following Java code snippet?\n\npublic class home implements Runnable {\n    public void run() {\n        System.out.printf(\"%d\",3);\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Thread thread = new Thread(new home());\n        thread.start();\n        System.out.printf(\"%d\",1);\n        thread.join();\n        System.out.printf(\"%d\",2);\n    }\n}",
      "options": [
        "132",
        "123",
        "213",
        "312"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements is false about the Java main method?",
      "options": [
        "We can override the main method.",
        "Main method should be declared public and static.",
        "Main method should have only 1 argument of type String array.",
        "We can overload the main method."
      ],
      "correct": 0
    },
    {
      "q": "The HTTP/2 Client API is introduced in Java 9.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "What is the max capacity of a Java BlockingQueue?",
      "options": [
        "Integer.INFINITY",
        "Integer.MAX_VALUE",
        "BigDecimal.MAX_VALUE"
      ],
      "correct": 1
    },
    {
      "q": "Which of these Java code snippets is a correct way of defining a generic method?",
      "options": [
        "public <T1, T2, …, Tn> methodName() { }",
        "<T1, T2, …, Tn> methodName(T1, T2, …, Tn) { }",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "In Java, which method is used to inform the observer of the change in the observed object?",
      "options": [
        "Check",
        "Update",
        "Inform",
        "notify"
      ],
      "correct": 1
    },
    {
      "q": "Pick the class that is NOT part of the Java collection framework.",
      "options": [
        "Map",
        "List",
        "Queue",
        "Struct"
      ],
      "correct": 3
    },
    {
      "q": "Identify the parts of a lambda expression in Java. (i) Name (ii) Parameter list (iii) Body (iv) Return Type",
      "options": [
        "i",
        "iv",
        "i and iv",
        "ii and iii"
      ],
      "correct": 3
    },
    {
      "q": "A Java Functional Interface can be defined as _____.",
      "options": [
        "Simple Abstract Markup",
        "Simple Active Markup",
        "Single Ambivalue Method",
        "Single Abstract Method"
      ],
      "correct": 3
    },
    {
      "q": "Which of these OOP concepts is enabled by method overriding in Java?",
      "options": [
        "Polymorphism",
        "Abstraction",
        "Inheritance",
        "Encapsulation"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of the following Java code snippet?\n\nclass First {\n    public First() { System.out.println(\"F\"); }\n}\nclass Second extends First {\n    public Second() { System.out.println(\"S\"); }\n}\nclass Third extends Second {\n    public Third() { System.out.println(\"T\"); }\n}\npublic class TestClass {\n    public static void main(String[] args) {\n        Third c = new Third();\n    }\n}",
      "options": [
        "TSF",
        "T",
        "F",
        "FST"
      ],
      "correct": 3
    },
    {
      "q": "How does one assign system property values to a variable using Java class fields (Spring style)?",
      "options": [
        "@Autowire(\"${aProperty}\") private String aSysProp;",
        "@Environment(\"${aProperty}\") private String aSysProp;",
        "@Property(\"${aProperty}\") private String aSysProp;",
        "@Value(\"${aProperty}\") private String aSysProp;"
      ],
      "correct": 3
    },
    {
      "q": "Pick the correct Java Stream API methods.",
      "options": [
        "Stream.allMatch",
        "Stream.noneMatch",
        "Stream.anyMatch",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following statements is NOT correct for the JVM?",
      "options": [
        "JVM acts as a translator that translates different Machine code (on the basis of Host Machine) for a common Byte Code.",
        "JVM is a Virtual Machine that acts as an intermediary between a Java Application and the Host Operating System.",
        "JVM reads Byte Code and generates Machine Code.",
        "JVM reads Source Code and generates Byte Code."
      ],
      "correct": 3
    },
    {
      "q": "Is the following a valid Java code snippet?\n\nOptional<String> aValue = Optional.of(\"Not Empty\");\nif (aValue.ifPresent()) {\n    System.out.println(\"Got Not Empty\");\n}",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "A Java Stream does NOT store elements. It simply performs aggregate operations to produce a desired stream of data.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements are true about the Java finally block? (i) A finally block is executed only after the catch block is executed. (ii) A finally block is executed whether an exception is thrown or not. (iii) A finally block is NOT mandatory. (iv) A finally block is executed only if an exception occurs.",
      "options": [
        "i",
        "iv",
        "i and iv",
        "ii and iii"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of the following Java code snippet?\n\nStringJoiner astring = new StringJoiner(\"-\", \"{\", \"}\");\nastring.add(\"A\");\nastring.add(\"B\");\nastring.add(\"C\");",
      "options": [
        "{A-B-C}",
        "{A}-{B}-{C}",
        "{–A–}{–B–}{–C–}"
      ],
      "correct": 0
    },
    {
      "q": "What is the return type of a Java Lambda expression?",
      "options": [
        "Void",
        "Lambda",
        "Function",
        "Regex"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between peek() and dequeue() (poll/remove)?",
      "options": [
        "peek() returns the next item in line but dequeue() removes and returns the next item in line",
        "peek() and dequeue() both return the next item in line",
        "peek() and dequeue() both remove and return the next item in line"
      ],
      "correct": 0
    },
    {
      "q": "Which one of the following statements on the Java String replace() method is correct?",
      "options": [
        "replace() replaces only the first occurrence of a character in the invoking string with the given character.",
        "replace() replaces the last occurrence of a character in the invoking string with the given character.",
        "replace() replaces all occurrences of one character in the invoking string with the given character.",
        "replace() replaces all the characters in the invoking string with the given character."
      ],
      "correct": 2
    },
    {
      "q": "What is the result of the following Java code snippet?\n\nclass Animal {\n    public String noise() { return \"peep\"; }\n}\nclass Dog extends Animal {\n    public String noise() { return \"bark\"; }\n}\nclass Cat extends Animal {\n    public String noise() { return \"meow\"; }\n}\n\nAnimal animal = new Dog();\nCat cat = (Cat) animal;\nSystem.out.println(cat.noise());",
      "options": [
        "peep",
        "bark",
        "meow",
        "Compilation fails",
        "An exception is thrown at runtime"
      ],
      "correct": 4
    },
    {
      "q": "What is the output of the following Java code snippet?\n\nclass A {\n    void foo() throws Exception {           // line 2\n        throw new Exception();\n    }\n}\nclass SubB2 extends A {\n    void foo() {                            // line 7 (does not declare throws)\n        System.out.println(\"B \");\n    }\n}\nclass HelloWorld {\n    public static void main(String[] args) {\n        A a = new SubB2();\n        a.foo(); // line 15 - reference type A declares \"throws Exception\"\n    }\n}",
      "options": [
        "B",
        "B, followed by an Exception.",
        "Compilation fails due to an error on line 9.",
        "Compilation fails due to an error on line 15.",
        "An Exception is thrown with no other output"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of the following Java code snippet?\n\nclass multithreaded_programming {\n    public static void main(String args[]) {\n        Thread t = Thread.currentThread();\n        t.setName(\"new thread\");\n        System.out.println(t);\n    }\n}",
      "options": [
        "Thread[main,5,main]",
        "Thread[new thread,5,main]",
        "Thread[Thread-0,5,main]",
        "Compilation fails"
      ],
      "correct": 1
    },
    {
      "q": "Which of these will create and start the thread below?\n\npublic class MyRunnable implements Runnable {\n    public void run() {\n        // some code\n    }\n}",
      "options": [
        "new MyRunnable().start()",
        "new Thread(new MyRunnable()).run()",
        "new Thread(new MyRunnable()).start()",
        "MyRunnable.startThread()"
      ],
      "correct": 2
    },
    {
      "q": "Which four statements are true? (Choose four)\n\nclass Mammal { }\nclass Raccoon extends Mammal {\n    Mammal m = new Mammal();\n}\nclass BabyRaccoon extends Mammal { }",
      "options": [
        "Raccoon is-a Mammal.",
        "Raccoon has-a Mammal.",
        "BabyRaccoon is-a Mammal.",
        "BabyRaccoon is-a Raccoon.",
        "BabyRaccoon has-a Mammal.",
        "BabyRaccoon is-a BabyRaccoon."
      ],
      "correct": [
        0,
        1,
        2,
        5
      ]
    },
    {
      "q": "What is the output of the following Java code snippet? (obj is 'abc' stored on disk)\n\nimport java.io.*;\npublic class filesinputoutput {\n    public static void main(String[] args) {\n        String obj = \"abc\";\n        byte b[] = obj.getBytes();\n        ByteArrayInputStream obj1 = new ByteArrayInputStream(b);\n        for (int i = 0; i < 2; ++i) {\n            int c;\n            while ((c = obj1.read()) != -1) {\n                if (i == 0) {\n                    System.out.print(Character.toUpperCase((char)c));\n                }\n            }\n        }\n    }\n}",
      "options": [
        "abc",
        "ABC",
        "Abc",
        "Compilation fails"
      ],
      "correct": 1
    },
    {
      "q": "Predict the output of the code:\n\nclass output {\n    public static void main(String args[]) {\n        StringBuffer s1 = new StringBuffer(\"Hello World\");\n        s1.insert(6, \"Good \");\n        System.out.println(s1);\n    }\n}",
      "options": [
        "HelloGoodWorld",
        "HellGoodoWorld",
        "HellGood oWorld",
        "Hello Good World"
      ],
      "correct": 3
    },
    {
      "q": "Predict the output (assume the string literal is \"1\", not the char '1'):\n\nSystem.out.println(\"1\" + new Integer(2) + 3);",
      "options": [
        "6",
        "123",
        "33",
        "Compilation fails"
      ],
      "correct": 1
    },
    {
      "q": "Observe the code and predict the output:\n\nint a[] = new int[]{1, 2, 6, 4, 5};\nint b[] = new int[5];\nb[2] = a[2];\na[2] = 10;\nSystem.out.println(b[2]);",
      "options": [
        "10",
        "6",
        "2",
        "Compilation fails"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this program?\n\nimport java.util.*;\nclass vector {\n    public static void main(String args[]) {\n        Vector obj = new Vector(4, 2);\n        obj.addElement(new Integer(3));\n        obj.addElement(new Integer(2));\n        obj.addElement(new Integer(5));\n        obj.removeAll(obj);\n        System.out.println(obj.isEmpty());\n    }\n}",
      "options": [
        "0",
        "1",
        "true",
        "false"
      ],
      "correct": 2
    },
    {
      "q": "What is the output?\n\nimport java.util.*;\nclass Maps {\n    public static void main(String args[]) {\n        TreeMap obj = new TreeMap();\n        obj.put(\"A\", new Integer(1));\n        obj.put(\"B\", new Integer(2));\n        obj.put(\"C\", new Integer(3));\n        System.out.println(obj.entrySet());\n    }\n}",
      "options": [
        "[A, B, C]",
        "[1, 2, 3]",
        "{A=1, B=2, C=3}",
        "[A=1, B=2, C=3]"
      ],
      "correct": 3
    },
    {
      "q": "What is the output?\n\nimport java.util.*;\nclass Bitset {\n    public static void main(String args[]) {\n        BitSet obj = new BitSet(5);\n        for (int i = 0; i < 5; ++i)\n            obj.set(i);\n        obj.clear(2);\n        System.out.print(obj);\n    }\n}",
      "options": [
        "{0, 1, 3, 4}",
        "{0, 1, 2, 4}",
        "{0, 1, 2, 3, 4}",
        "{0, 0, 0, 3, 4}"
      ],
      "correct": 0
    },
    {
      "q": "What is the output?\n\nimport java.util.*;\nclass Array {\n    public static void main(String args[]) {\n        int array[] = new int[5];\n        for (int i = 5; i > 0; i--)\n            array[5-i] = i;\n        Arrays.fill(array, 1, 4, 8);\n        for (int i = 0; i < 5; i++)\n            System.out.print(array[i]);\n    }\n}",
      "options": [
        "12885",
        "12845",
        "58881",
        "54881"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following program?\n\nimport java.util.*;\nclass Collection_Algos {\n    public static void main(String args[]) {\n        LinkedList list = new LinkedList();\n        list.add(new Integer(2));\n        list.add(new Integer(8));\n        list.add(new Integer(5));\n        list.add(new Integer(1));\n        Iterator i = list.iterator();\n        Collections.reverse(list);\n        Collections.shuffle(list);\n        while(i.hasNext())\n            System.out.print(i.next() + \" \");\n    }\n}",
      "options": [
        "2 8 5 1",
        "1 5 8 2",
        "1 2 5 8",
        "Any random order"
      ],
      "correct": 3
    },
    {
      "q": "What is the output? (same as above but sort() instead of shuffle())\n\nimport java.util.*;\nclass Collection_Algos {\n    public static void main(String args[]) {\n        LinkedList list = new LinkedList();\n        list.add(new Integer(2));\n        list.add(new Integer(8));\n        list.add(new Integer(5));\n        list.add(new Integer(1));\n        Iterator i = list.iterator();\n        Collections.reverse(list);\n        Collections.sort(list);\n        while(i.hasNext())\n            System.out.print(i.next() + \" \");\n    }\n}",
      "options": [
        "2 8 5 1",
        "1 5 8 2",
        "1 2 5 8",
        "2 1 8 5"
      ],
      "correct": 2
    },
    {
      "q": "What is the output?\n\nimport java.util.*;\npublic class genericstack <E> {\n    Stack<E> stk = new Stack<E>();\n    public void push(E obj) { stk.push(obj); }\n    public E pop() { return stk.pop(); }\n}\nclass Output {\n    public static void main(String args[]) {\n        genericstack<String> gs = new genericstack<String>();\n        gs.push(\"Hello\");\n        System.out.print(gs.pop() + \" \");\n        genericstack<Integer> gs = new genericstack<Integer>(); // redeclaring 'gs'\n        gs.push(36);\n        System.out.println(gs.pop());\n    }\n}",
      "options": [
        "Error - gs String and gs Integer use same variable name",
        "Hello",
        "36",
        "Hello 36"
      ],
      "correct": 0
    },
    {
      "q": "What is the output?\n\nclass output {\n    public static void main(String args[]) {\n        StringBuffer c = new StringBuffer(\"Hello\");\n        StringBuffer c1 = new StringBuffer(\" World\");\n        c.append(c1);\n        System.out.println(c);\n    }\n}",
      "options": [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      "correct": 3
    },
    {
      "q": "What is the output?\n\nclass exception_handling {\n    public static void main(String args[]) {\n        try {\n            System.out.print(\"Hello\" + \" \" + 1 / 0);\n        }\n        catch(ArithmeticException e) {\n            System.out.print(\"World\");\n        }\n    }\n}",
      "options": [
        "Hello",
        "World",
        "HelloWorld",
        "Hello World"
      ],
      "correct": 1
    },
    {
      "q": "What is the output?\n\nclass output {\n    public static void main(String args[]) {\n        char c[] = {'a', '1', 'b', ' ', 'A', '0'};\n        for (int i = 0; i < 5; ++i) {\n            if (Character.isDigit(c[i]))\n                System.out.println(c[i] + \" is a digit\");\n            if (Character.isWhitespace(c[i]))\n                System.out.println(c[i] + \" is a Whitespace char\");\n            if (Character.isUpperCase(c[i]))\n                System.out.println(c[i] + \" is an Upper case Letter\");\n            if (Character.isLowerCase(c[i]))\n                System.out.println(c[i] + \" is a lower case Letter\");\n            i = i + 3;\n        }\n    }\n}",
      "options": [
        "a is a lower case Letter, is White space character",
        "b is a lower case Letter, is White space character",
        "a is a lower case Letter, A is an Upper case Letter",
        "a is a lower case Letter, 0 is a digit"
      ],
      "correct": 2
    },
    {
      "q": "What is the output? (inputoutput.java is stored on disk)\n\nimport java.io.*;\nclass filesinputoutput {\n    public static void main(String args[]) throws IOException {\n        InputStream obj = new FileInputStream(\"inputoutput.java\");\n        System.out.print(obj.available());\n    }\n}",
      "options": [
        "true",
        "false",
        "prints number of bytes in file",
        "prints number of characters in the file"
      ],
      "correct": 2
    },
    {
      "q": "Observe the code and predict the output:\n\nimport java.io.*;\npublic class filesinputoutput {\n    public static void main(String[] args) throws IOException {\n        String obj = \"abc\";\n        byte b[] = obj.getBytes();\n        ByteArrayInputStream obj1 = new ByteArrayInputStream(b);\n        ByteArrayOutputStream obj2 = new ByteArrayOutputStream();\n        for (int i = 0; i < 2; ++i) {\n            int c;\n            while ((c = obj1.read()) != -1) {\n                if (i == 0) {\n                    System.out.print(Character.toUpperCase((char)c));\n                    obj2.write(c);\n                }\n            }\n        }\n        System.out.println(\"\\n\" + obj2.toString());\n    }\n}",
      "options": [
        "abc",
        "ABC",
        "ABC abc",
        "Compilation fails"
      ],
      "correct": 2
    },
    {
      "q": "Which of these methods is used to read in from a file (InputStream)?",
      "options": [
        "get()",
        "read()",
        "scan()",
        "readFileInput()"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the code?\n\npublic class Test8 {\n    public static void main(String args[]) {\n        Number numberRef = new Integer(0);\n        Double doubleRef = (Double)numberRef;\n    }\n}",
      "options": [
        "0",
        "0.0",
        "Compilation fails",
        "Throws exception"
      ],
      "correct": 3
    },
    {
      "q": "What is the output?\n\nimport java.io.*;\nclass HelloWorld {\n    public static void main(String[] args) {\n        StringBuffer s1 = new StringBuffer(\"Hello\");\n        StringBuffer s2 = s1.reverse();\n        System.out.println(s2);\n    }\n}",
      "options": [
        "Hello",
        "olleH",
        "HELLO",
        "Compilation fails"
      ],
      "correct": 1
    },
    {
      "q": "Which pattern is used in the following code?\n\nimport java.util.*;\nclass HelloWorld {\n    public static void main(String args[]) {\n        List<String> List = new ArrayList<String>();\n        List.add(\"cricket\");\n        List.add(\"football\");\n        List.add(\"hockey\");\n        Iterator it = List.iterator();\n        while(it.hasNext()) {\n            String s = (String) it.next();\n        }\n    }\n}",
      "options": [
        "Observer",
        "Singleton",
        "Iterator",
        "Factory"
      ],
      "correct": 2
    },
    {
      "q": "Assume the following method is properly synchronized and called from thread A on object B: wait(2000); After calling this method, when will thread A become a candidate to get another turn at the CPU?",
      "options": [
        "After thread A is notified, or after two seconds.",
        "After the lock on B is released, or after two seconds.",
        "Two seconds after thread A is notified.",
        "Two seconds after lock B is released."
      ],
      "correct": 0
    },
    {
      "q": "The code snippet below is an example of which of the following?\n\nLong myLong = 21L;",
      "options": [
        "Auto boxing",
        "Auto unboxing",
        "Auto casting",
        "Auto instancing"
      ],
      "correct": 0
    },
    {
      "q": "What is the result?\n\ninterface TestA {\n    String toString();\n}\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(new TestA() {\n            public String toString() {\n                return \"test\";\n            }\n        });\n    }\n}",
      "options": [
        "test",
        "null",
        "An exception is thrown at runtime",
        "Compilation fails because of an error in line 1",
        "Compilation fails because of an error in line 4",
        "Compilation fails because of an error in line 5"
      ],
      "correct": 0
    },
    {
      "q": "What is the output?\n\nclass Output {\n    public static void main(String args[]) {\n        Object obj = new Object();\n        System.out.print(obj.getClass());\n    }\n}",
      "options": [
        "Object",
        "class Object",
        "class java.lang.Object",
        "java.lang.Object"
      ],
      "correct": 2
    },
    {
      "q": "What is the output?\n\nclass A {\n    int i;\n    int j;\n    A() {\n        i = 1;\n        j = 2;\n    }\n}\nclass Output {\n    public static void main(String args[]) {\n        A obj1 = new A();\n        System.out.println(obj1.toString());\n    }\n}",
      "options": [
        "A",
        "1 2",
        "A string like A@5e265ba4 (hashcode-based)",
        "Compilation fails"
      ],
      "correct": 2
    },
    {
      "q": "What does this method print, whether or not an exception occurs?\n\npublic void divide(int a, int b) {\n    try {\n        int c = a / b;\n    }\n    catch(Exception e) {\n        System.out.println(\"Exception\");\n    }\n    finally {\n        System.out.println(\"finally\");\n    }\n}",
      "options": [
        "Only \"Exception\" is printed",
        "Only \"finally\" is printed",
        "Both \"Exception\" and \"finally\" are printed if an exception occurs",
        "Compilation fails"
      ],
      "correct": 2
    },
    {
      "q": "Insert the appropriate code:\n\npublic class Sprite {\n    public int fubar(Foo foo) {\n        return foo.bar();\n    }\n    public void testFoo() {\n        fubar(\n            // insert code here\n        );\n    }\n}",
      "options": [
        "new Foo()",
        "new Foo() { public int bar() { return 1; } }",
        "new Foo(1)",
        "Foo.bar()"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following code?\n\nclass Main {\n    String getValue(String word) {\n        System.out.println(word);\n        if (word.length() == 1) {\n            return \"\";\n        } else {\n            return getValue(word.substring(0, word.length() - 1)) + word.charAt(word.length() - 1);\n        }\n    }\n    public static void main(String[] args) {\n        Main obj = new Main();\n        System.out.println(obj.getValue(\"DEMOS\"));\n    }\n}",
      "options": [
        "D",
        "DEMOS",
        "EMOS",
        "Empty String"
      ],
      "correct": 2
    },
    {
      "q": "Will this code compile?\n\ninterface ATOB {\n    String s = \"yo\";\n    public void meth();\n}\ninterface BTOC { }\ninterface C extends ATOB, BTOC {\n    public void meth();\n    public void meth(int x);\n}",
      "options": [
        "Yes, this code will compile without any error",
        "No, compilation fails due to multiple inheritance",
        "No, compilation fails because of variable s",
        "No, compilation fails because of method overloading"
      ],
      "correct": 0
    },
    {
      "q": "How can you inherit both the interface and the abstract class below?\n\ninterface Data {\n    public void load();\n}\nabstract class Info {\n    public abstract void load();\n}",
      "options": [
        "class Xyz extends Info implements Data { void load() { } }",
        "class Xyz implements Data, Info { void load() { } }",
        "class Xyz extends Info, Data { void load() { } }",
        "Not possible in Java"
      ],
      "correct": 0
    },
    {
      "q": "Will this code compile?\n\nclass ATOB {\n    static public String str = \"abc\";\n}\nclass BTOC extends ATOB {\n    static public String str = \"bcr\";\n}\nclass Main {\n    public static void main(String[] args) {\n        BTOC obj = new BTOC();\n        System.out.println(obj.str);\n    }\n}",
      "options": [
        "Yes, will compile fine and print \"abc\"",
        "Yes, will compile fine, but str is being hidden/shadowed in the B class.",
        "No, compilation fails",
        "Runtime exception"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the code?\n\nclass Main {\n    static boolean foo(char c) {\n        System.out.print(c);\n        return true;\n    }\n    public static void main(String[] args) {\n        int i = 0;\n        for(foo('A'); foo('B') && (i < 2); foo('C')) {\n            i++;\n            foo('D');\n        }\n    }\n}",
      "options": [
        "ABCD",
        "ABDCBDCB",
        "ABABAB",
        "ADBCC"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the code?\n\nimport java.util.*;\nclass Main {\n    public static void main(String[] args) {\n        TreeSet<Integer> al = new TreeSet<Integer>();\n        al.add(\"7\"); // line 5\n        al.add(9);\n        Iterator<Integer> itr = al.iterator();\n        while(itr.hasNext()) {\n            System.out.println(itr.next());\n        }\n    }\n}",
      "options": [
        "7 9",
        "9 7",
        "error: incompatible types: String cannot be converted to Integer (line 5)",
        "Runtime Exception"
      ],
      "correct": 2
    },
    {
      "q": "Which implementation of Set would you choose if you want the iterator of the Set to give objects in the order they were inserted?",
      "options": [
        "LinkedHashSet",
        "TreeSet",
        "HashSet"
      ],
      "correct": 0
    },
    {
      "q": "What is the output?\n\nimport java.util.*;\nclass TestHashMaps {\n    public static void main(String args[]) {\n        HashMap<Integer, String> hm = new HashMap<Integer, String>();\n        hm.put(100, \"John\");\n        hm.put(101, \"Paul\");\n        hm.put(102, \"George\");\n        hm.put(103, \"Ringo\");\n        for (Map.Entry m : hm.entrySet()) {\n            System.out.println(m.getKey() + \" \" + m.getValue());\n        }\n    }\n}",
      "options": [
        "100 John 101 Paul 102 George 103 Ringo",
        "100 John 101 Paul 102 George",
        "103 Ringo 102 George 101 Paul 100 John",
        "Compilation error"
      ],
      "correct": 0
    },
    {
      "q": "What is the output?\n\nimport java.util.*;\npublic class SortOf {\n    public static void main(String[] args) {\n        ArrayList<Integer> a = new ArrayList<Integer>();\n        a.add(1);\n        a.add(5);\n        a.add(3);\n        Collections.sort(a);\n        a.add(2);\n        Collections.reverse(a);\n        System.out.println(a);\n    }\n}",
      "options": [
        "[1, 2, 3, 5]",
        "[2, 1, 3, 5]",
        "[2, 5, 3, 1]",
        "[5, 3, 2, 1]",
        "[1, 3, 5, 2]",
        "Compilation fails",
        "An exception is thrown at runtime"
      ],
      "correct": 2
    },
    {
      "q": "Which Man class properly represents the relationship \"Man has a best friend who is a Dog\"?",
      "options": [
        "class Man extends Dog { }",
        "class Man implements Dog { }",
        "class Man { private BestFriend dog; }",
        "class Man { private Dog bestFriend; }",
        "class Man { private Dog<bestFriend>; }",
        "class Man { private BestFriend<dog>; }"
      ],
      "correct": 3
    },
    {
      "q": "What is the output?\n\nclass Alpha {\n    public void foo() { System.out.print(\"Afoo \"); }\n}\nclass Beta extends Alpha {\n    public void foo() { System.out.print(\"Bfoo \"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Alpha a = new Beta();\n        Beta b = (Beta)a;\n        a.foo();\n        b.foo();\n    }\n}",
      "options": [
        "Afoo Afoo",
        "Afoo Bfoo",
        "Bfoo Afoo",
        "Bfoo Bfoo",
        "Compilation fails"
      ],
      "correct": 3
    },
    {
      "q": "Which code fragment, inserted before the last line, allows the code to compile?\n\nimport java.util.Date;\nimport java.text.DateFormat;\nDateFormat df;\nDate date = new Date();\n// insert code here\nString s = df.format(date);",
      "options": [
        "df = new DateFormat();",
        "df = Date.getFormat();",
        "df = date.getFormat();",
        "df = DateFormat.getFormat();",
        "df = DateFormat.getInstance();"
      ],
      "correct": 4
    },
    {
      "q": "What is the output?\n\npublic class Base {\n    public static final String FOO = \"foo\";\n    public static void main(String[] args) {\n        Base b = new Base();\n        Sub s = new Sub();\n        System.out.print(Base.FOO);\n        System.out.print(Sub.FOO);\n        System.out.print(b.FOO);\n        System.out.print(s.FOO);\n        System.out.print(((Base)s).FOO);\n    }\n}\nclass Sub extends Base {\n    public static final String FOO = \"bar\";\n}",
      "options": [
        "foofoofoofoofoo",
        "foobarfoobarbar",
        "foobarfoofoofoo",
        "foobarfoobarfoo",
        "barbarbarbarbar",
        "foofoofoobarbar",
        "foofoofoobarfoo"
      ],
      "correct": 3
    },
    {
      "q": "A programmer must modify every report individually to support new wireless printers because of the application's design. Which two design concepts most likely explain this? (Choose two.)",
      "options": [
        "Inheritance",
        "Low cohesion",
        "Tight coupling",
        "High cohesion",
        "Loose coupling",
        "Object immutability"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "q": "A team reduces the number of methods in a utility class API without losing functionality. Which two OO principles are they promoting? (Choose two.)",
      "options": [
        "Looser coupling",
        "Tighter coupling",
        "Lower cohesion",
        "Higher cohesion",
        "Weaker encapsulation",
        "Stronger encapsulation"
      ],
      "correct": [
        0,
        3
      ]
    },
    {
      "q": "A team discovers the current design allows other classes to access methods in a utility class that should only be accessible internally. What design issue is this?",
      "options": [
        "Tight coupling",
        "Low cohesion",
        "High cohesion",
        "Loose coupling",
        "Weak encapsulation",
        "Strong encapsulation"
      ],
      "correct": 4
    },
    {
      "q": "What is the output?\n\npublic class TestString1 {\n    public static void main(String[] args) {\n        String str = \"420\";\n        str += 42;\n        System.out.print(str);\n    }\n}",
      "options": [
        "42",
        "420",
        "462",
        "42042",
        "Compilation fails",
        "An exception is thrown at runtime"
      ],
      "correct": 3
    },
    {
      "q": "Which three modifiers are valid on the marked line? (Choose three)\n\npublic interface Status {\n    /* insert code here */ int MY_VALUE = 10;\n}",
      "options": [
        "final",
        "static",
        "native",
        "public",
        "private",
        "abstract",
        "protected"
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "q": "A programmer needs a java.util.List with an efficient add(0, object) but does NOT need quick random access. What supports this?",
      "options": [
        "java.util.Queue",
        "java.util.ArrayList",
        "java.util.LinearList",
        "java.util.LinkedList"
      ],
      "correct": 3
    },
    {
      "q": "Which three are true? (Choose Three)\n\ninterface Jumper {\n    public void jump();\n}\nclass Animal {}\nclass Dog extends Animal {\n    Tail tail;\n}\nclass Beagle extends Dog implements Jumper {\n    public void jump() {}\n}\nclass Cat implements Jumper {\n    public void jump() {}\n}",
      "options": [
        "Cat is-a Animal",
        "Cat is-a Jumper",
        "Dog is-a Animal",
        "Dog is-a Jumper",
        "Cat has-a Animal",
        "Beagle has-a Tail",
        "Beagle is-a Jumper"
      ],
      "correct": [
        1,
        2,
        5
      ]
    },
    {
      "q": "Which class correctly uses the Data interface and Info abstract class below?\n\ninterface Data { public void load(); }\nabstract class Info { public abstract void load(); }",
      "options": [
        "public class Employee extends Info implements Data { public void load() { /* do something */ } }",
        "public class Employee implements Info extends Data { public void load() { /* do something */ } }",
        "public class Employee extends Info implements Data { public void load() {...} public void Info.load() {...} }",
        "public class Employee implements Info extends Data { public void Data.load() {...} public void load() {...} }",
        "public class Employee implements Info extends Data { public void load() {...} public void Info.load() {...} }",
        "public class Employee extends Info implements Data { public void Data.load() {...} public void Info.load() {...} }"
      ],
      "correct": 0
    },
    {
      "q": "What is the output?\n\nclass TestA {\n    public void start() { System.out.println(\"TestA\"); }\n}\nclass TestB extends TestA {\n    public void start() { System.out.println(\"TestB\"); }\n    public static void main(String[] args) {\n        ((TestA)new TestB()).start();\n    }\n}",
      "options": [
        "TestA",
        "TestB",
        "Compilation fails",
        "An exception is thrown at runtime"
      ],
      "correct": 1
    },
    {
      "q": "Output?\n\nimport java.io.*;\nclass files {\n    public static void main(String args[]) {\n        File obj = new File(\"/java/system\");\n        System.out.print(obj.getName());\n    }\n}",
      "options": [
        "java",
        "system",
        "java/system",
        "/java/system"
      ],
      "correct": 1
    },
    {
      "q": "Output? (file made on C: drive)\n\nimport java.io.*;\nclass files {\n    public static void main(String args[]) {\n        File obj = new File(\"/java/system\");\n        System.out.print(obj.getAbsolutePath());\n    }\n}",
      "options": [
        "java",
        "system",
        "java/system",
        "/java/system"
      ],
      "correct": 3
    },
    {
      "q": "Output? (assume the program is run with no command-line arguments)\n\nimport java.lang.*;\nclass exception_handling {\n    public static void main(String args[]) {\n        try {\n            int a = args.length;\n            int b = 10 / a;\n            System.out.print(a);\n            try {\n                if (a == 1)\n                    a = a / a - a;\n                if (a == 2) {\n                    int[] c = {1};\n                    c[8] = 9;\n                }\n            }\n            catch(ArrayIndexOutOfBoundsException e) {\n                System.out.println(\"TypeA\");\n            }\n        }\n        catch (ArithmeticException e) {\n            System.out.println(\"TypeB\");\n        }\n    }\n}",
      "options": [
        "TypeA",
        "TypeB",
        "0TypeA"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this snippet?\npublic class home implements Runnable {\n  public void run(){ System.out.printf(\"%d\",3); }\n  public static void main(String[]args) throws InterruptedException {\n    Thread thread = new Thread(new home());\n    thread.start();\n    System.out.printf(\"%d\",1);\n    thread.join();\n    System.out.printf(\"%d\",2);\n  }\n}",
      "options": [
        "132",
        "123",
        "213",
        "312"
      ],
      "correct": 0
    },
    {
      "q": "What is the command-line tool introduced for the JS engine (Nashorn) in Java 8?",
      "options": [
        "jjs",
        "jss",
        "jfs",
        "jbd"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are correct Java method reference usages?",
      "options": [
        "object::instanceMethod",
        "Class::staticMethod",
        "Class::new",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which interface allows traversing a Java collection in each direction (forward and backward)?",
      "options": [
        "ListIterator",
        "Iterator",
        "MapIterator",
        "SetIterator"
      ],
      "correct": 0
    },
    {
      "q": "Pick the class that is NOT part of the Java Collections Framework.",
      "options": [
        "Map",
        "List",
        "Queue",
        "Struct"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of this inheritance chain?\nclass First { public First(){ System.out.println(\"F\"); } }\nclass Second extends First { public Second(){ System.out.println(\"S\"); } }\nclass Third extends Second { public Third(){ System.out.println(\"T\"); } }\npublic class TestClass { public static void main(String[] args){ Third c = new Third(); } }",
      "options": [
        "TSF",
        "T",
        "F",
        "FST"
      ],
      "correct": 3
    },
    {
      "q": "Which class is introduced in Java 8 to get the current milliseconds/instant reliably?",
      "options": [
        "Clock",
        "Current Time",
        "Date Time",
        "Time"
      ],
      "correct": 0
    },
    {
      "q": "What is the difference between peek() and dequeue() on a Queue?",
      "options": [
        "peek() returns the next item without removing it; dequeue() removes and returns the next item",
        "Both return the next item without removing it",
        "Both remove and return the next item",
        "peek() removes, dequeue() only views"
      ],
      "correct": 0
    },
    {
      "q": "What is the output? int x = 5; System.out.println(x++ + ++x);",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 2
    },
    {
      "q": "What is the output? String s1=\"Hello\"; String s2=new String(\"Hello\"); System.out.println(s1==s2);",
      "options": [
        "true",
        "false",
        "Compile Error",
        "null"
      ],
      "correct": 1
    },
    {
      "q": "List<Integer> list=new ArrayList<>(); list.add(1); list.add(2); list.remove(Integer.valueOf(1)); System.out.println(list); — what prints?",
      "options": [
        "[1, 2]",
        "[2]",
        "[]",
        "Compile Error"
      ],
      "correct": 1
    },
    {
      "q": "static int x=10; ... t.x=20; System.out.println(Test.x); — what prints?",
      "options": [
        "10",
        "20",
        "30",
        "Compile Error"
      ],
      "correct": 1
    },
    {
      "q": "int[] arr={1,2}; System.out.println(arr[2]); wrapped in try-catch (but not caught here) — what happens?",
      "options": [
        "Prints 1",
        "Prints 2",
        "Throws ArrayIndexOutOfBoundsException",
        "Prints null"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the 'final' keyword when applied to a method?",
      "options": [
        "Prevents method overriding",
        "Allows dynamic binding",
        "Enables garbage collection",
        "Permits multiple inheritance"
      ],
      "correct": 0
    },
    {
      "q": "Which Java collection class is synchronized by default?",
      "options": [
        "ArrayList",
        "HashMap",
        "Vector",
        "LinkedList"
      ],
      "correct": 2
    },
    {
      "q": "What is the default access modifier for class members in Java?",
      "options": [
        "public",
        "private",
        "protected",
        "package-private (default)"
      ],
      "correct": 3
    },
    {
      "q": "Which interface is used for natural-order sorting of objects (compareTo)?",
      "options": [
        "Comparable",
        "Comparator",
        "Serializable",
        "Cloneable"
      ],
      "correct": 0
    },
    {
      "q": "What is the max theoretical capacity of a Java BlockingQueue if unbounded?",
      "options": [
        "Integer.INFINITY (not a real constant)",
        "Integer.MAX_VALUE",
        "BigDecimal.MAX_VALUE",
        "Long.MAX_VALUE"
      ],
      "correct": 1
    },
    {
      "q": "What is the output? StringJoiner astring = new StringJoiner(\"-\", \"{\", \"}\"); astring.add(\"A\"); astring.add(\"B\"); astring.add(\"C\");",
      "options": [
        "{A-B-C}",
        "{A}-{B}-{C}",
        "{-A-}{-B-}{-C-}",
        "A-B-C"
      ],
      "correct": 0
    },
    {
      "q": "Name the two types of streams in Java 8's Stream API.",
      "options": [
        "Sync and async",
        "Sequential and parallel",
        "Random and ordered",
        "Buffered and unbuffered"
      ],
      "correct": 1
    },
    {
      "q": "Which Java Set implementation is both sorted and synchronized?",
      "options": [
        "TreeSet (sorted, but not synchronized)",
        "LinkedHashSet",
        "HashSet",
        "Collections.synchronizedSortedSet(new TreeSet<>()) — no single built-in class is both by default"
      ],
      "correct": 3
    },
    {
      "q": "Which Java class has natural sorting implemented (via a self-balancing tree)?",
      "options": [
        "LinkedHashSet",
        "TreeSet",
        "HashSet",
        "ArraySet"
      ],
      "correct": 1
    },
    {
      "q": "In Java 9, are private methods allowed in interfaces?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "In Java 8, are constructors allowed in interfaces?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Can the main() method be overridden in Java?",
      "options": [
        "Yes, freely",
        "No — it's static, so it can only be redeclared/hidden, not truly overridden",
        "Only in interfaces",
        "Only with a different return type"
      ],
      "correct": 1
    },
    {
      "q": "What is the process of calling one constructor from another constructor in the same or parent class called?",
      "options": [
        "Method overloading",
        "Constructor chaining",
        "Static binding",
        "Late binding"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'finally' block guarantee in Java exception handling?",
      "options": [
        "It only runs if an exception occurred",
        "It runs regardless of whether an exception occurred, and is not mandatory to include",
        "It replaces the catch block",
        "It must always be present"
      ],
      "correct": 1
    },
    {
      "q": "Given a type parameter T, what would assign to T[] ts;?",
      "options": [
        "ts = (T[]) new Object[SIZE];",
        "Its impossible.",
        "ts = new T[SIZE];",
        "ts = new Object[SIZE];"
      ],
      "correct": 0
    }
  ],
  "spring": [
    {
      "q": "What is the Spring IoC (Inversion of Control) container responsible for?",
      "options": [
        "Managing HTTP requests and responses",
        "Creating, configuring, and managing the lifecycle of beans and their dependencies",
        "Handling database transactions automatically",
        "Compiling Java source files at runtime"
      ],
      "correct": 1
    },
    {
      "q": "What is Dependency Injection in the context of Spring Framework?",
      "options": [
        "A design pattern where objects create their own dependencies internally",
        "A technique where the Spring container injects the required dependencies into a bean rather than the bean creating them",
        "A way to inject SQL queries into Spring beans",
        "A method to inject JavaScript into Spring MVC views"
      ],
      "correct": 1
    },
    {
      "q": "Which Spring XML configuration correctly performs setter injection for a 'name' property?",
      "options": [
        "<bean id='emp' class='Employee'><constructor-arg value='John'/></bean>",
        "<bean id='emp' class='Employee'><property name='name' value='John'/></bean>",
        "<bean id='emp' class='Employee'><inject name='name' value='John'/></bean>",
        "<bean id='emp' class='Employee'><set name='name' value='John'/></bean>"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between setter injection and constructor injection in Spring?",
      "options": [
        "Setter injection is mandatory; constructor injection is optional",
        "Constructor injection injects dependencies via the constructor at object creation time; setter injection injects via setter methods after construction",
        "Setter injection is only for primitive types; constructor injection is for objects",
        "They are identical internally; the choice is purely stylistic with no functional difference"
      ],
      "correct": 1
    },
    {
      "q": "Which two Spring bean lifecycle callback methods are called after a bean is initialized and before it is destroyed?",
      "options": [
        "onStart() and onStop()",
        "init-method and destroy-method (or @PostConstruct and @PreDestroy)",
        "afterInit() and beforeDestroy()",
        "setup() and teardown()"
      ],
      "correct": 1
    },
    {
      "q": "What is the default bean scope in Spring?",
      "options": [
        "prototype",
        "request",
        "singleton",
        "session"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between 'singleton' and 'prototype' bean scopes in Spring?",
      "options": [
        "Singleton creates one instance per class; prototype creates one instance per method call",
        "Singleton creates a single shared instance per Spring container; prototype creates a new instance every time the bean is requested",
        "Prototype is the default scope; singleton must be explicitly declared",
        "Singleton beans are thread-safe by default; prototype beans are not"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'dependency-check' attribute in a Spring bean definition do?",
      "options": [
        "It validates that all dependencies are in the classpath at compile time",
        "It ensures that all properties of the bean are set during initialization, throwing an exception if any are unsatisfied",
        "It checks for circular dependencies and resolves them automatically",
        "It verifies that all dependencies are available in the Maven repository"
      ],
      "correct": 1
    },
    {
      "q": "What is an 'inner bean' in Spring XML configuration?",
      "options": [
        "A bean defined inside a Java inner class",
        "A bean defined inline within another bean's property or constructor-arg element, not accessible from outside",
        "A bean with a prototype scope nested inside a singleton bean",
        "A private bean accessible only within the same XML configuration file"
      ],
      "correct": 1
    },
    {
      "q": "Which Spring XML element is used to inject a list of values into a bean property?",
      "options": [
        "<array>",
        "<collection>",
        "<list>",
        "<items>"
      ],
      "correct": 2
    },
    {
      "q": "What does the 'autowire' attribute in a Spring bean definition do?",
      "options": [
        "It automatically generates setter methods for the bean",
        "It tells the Spring container to automatically resolve and inject collaborating beans without explicit configuration",
        "It validates that all wired beans are of the correct type at startup",
        "It enables AOP proxying for the bean automatically"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between autowire='byName' and autowire='byType' in Spring?",
      "options": [
        "byName matches beans by their Java class name; byType matches by their XML id",
        "byName injects by matching the property name to a bean id; byType injects by matching the property's type to a bean type in the container",
        "byType is the default; byName must be explicitly enabled",
        "They are identical; both match by bean id"
      ],
      "correct": 1
    },
    {
      "q": "Which annotation is used to mark a class as a Spring-managed component for component scanning?",
      "options": [
        "@Bean",
        "@Component",
        "@Inject",
        "@Managed"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between @Component, @Service, @Repository, and @Controller in Spring?",
      "options": [
        "They have entirely different behaviors and cannot be used interchangeably",
        "All are specializations of @Component; @Service, @Repository, and @Controller add semantic meaning and may enable additional framework features like exception translation",
        "@Service is for REST endpoints; @Repository is for SOAP services",
        "@Controller is for console applications; @Component is for web apps only"
      ],
      "correct": 1
    },
    {
      "q": "What does @Autowired do when applied to a field or constructor in Spring?",
      "options": [
        "It creates a new instance of the field's class",
        "It tells Spring to automatically inject a matching bean into that field or constructor parameter",
        "It makes the field publicly accessible from other beans",
        "It marks the field as a primary bean qualifier"
      ],
      "correct": 1
    },
    {
      "q": "What happens if Spring finds multiple beans of the same type when using @Autowired?",
      "options": [
        "Spring picks the first one alphabetically",
        "Spring throws a NoUniqueBeanDefinitionException; this can be resolved using @Qualifier or @Primary",
        "Spring injects all matching beans as a list automatically",
        "Spring picks the most recently defined bean"
      ],
      "correct": 1
    },
    {
      "q": "In Spring JDBC, what is the purpose of JdbcTemplate?",
      "options": [
        "To generate SQL queries automatically from entity classes",
        "To simplify JDBC operations by handling connection management, exception translation, and resource cleanup",
        "To provide an ORM layer over JDBC",
        "To cache all SQL results in memory automatically"
      ],
      "correct": 1
    },
    {
      "q": "What does the JdbcTemplate.query() method return and what interface is typically used to map rows?",
      "options": [
        "A ResultSet object mapped using ResultSetExtractor only",
        "A List mapped using RowMapper, which maps each row of a ResultSet to a Java object",
        "A Map<String, Object> for each row automatically",
        "A Stream of SQL row data"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of Spring ORM in integrating Hibernate with Spring?",
      "options": [
        "Spring ORM replaces Hibernate with its own ORM implementation",
        "Spring ORM provides integration support for ORM frameworks like Hibernate, managing SessionFactory, transactions, and exception translation",
        "Spring ORM automatically generates database schemas from Java classes",
        "Spring ORM is only for JPA and does not support Hibernate directly"
      ],
      "correct": 1
    },
    {
      "q": "In Spring MVC, what is the role of the DispatcherServlet?",
      "options": [
        "It serves static files like CSS and JavaScript",
        "It acts as the front controller, receiving all HTTP requests and delegating them to the appropriate handler (controller)",
        "It is responsible for rendering JSP views directly",
        "It manages the database connection pool for all requests"
      ],
      "correct": 1
    },
    {
      "q": "What does the @RequestMapping annotation do in a Spring MVC controller?",
      "options": [
        "It injects the HTTP request object into the method",
        "It maps HTTP requests to specific handler methods or classes based on URL and HTTP method",
        "It configures the view resolver for the controller",
        "It validates request parameters automatically"
      ],
      "correct": 1
    },
    {
      "q": "How does a Spring MVC controller send data to a UI view using the Model object?",
      "options": [
        "By returning the data directly as a String from the handler method",
        "By adding attributes to the Model object, which are then accessible in the view template as variables",
        "By storing data in the HttpSession explicitly",
        "By writing directly to the HttpServletResponse output stream"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of @RequestParam in a Spring MVC controller method?",
      "options": [
        "To map a path variable from the URL",
        "To extract a query parameter or form field value from the HTTP request and bind it to a method parameter",
        "To inject the entire request body as a Java object",
        "To validate that a request parameter is not null"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between @RequestParam and @PathVariable in Spring MVC?",
      "options": [
        "They are identical; both extract values from the URL",
        "@RequestParam extracts query string parameters (e.g., ?name=John); @PathVariable extracts template variables from the URI path (e.g., /users/{id})",
        "@PathVariable is for POST requests; @RequestParam is for GET requests",
        "@RequestParam requires the parameter to be mandatory; @PathVariable allows optional parameters"
      ],
      "correct": 1
    },
    {
      "q": "What is ModelMap in Spring MVC and how does it differ from Model?",
      "options": [
        "ModelMap is for REST APIs; Model is for MVC views",
        "ModelMap extends LinkedHashMap and is an implementation of Model; both serve the same purpose of passing data to views, but ModelMap provides additional Map operations",
        "Model is used in Spring Boot; ModelMap is only for Spring MVC",
        "ModelMap automatically serializes data to JSON; Model does not"
      ],
      "correct": 1
    },
    {
      "q": "In Spring MVC with ORM, what annotation is used to demarcate a transactional method?",
      "options": [
        "@Commit",
        "@Transactional",
        "@Rollback",
        "@Atomic"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring AOP (Aspect-Oriented Programming) used for?",
      "options": [
        "Building asynchronous APIs",
        "Modularizing cross-cutting concerns like logging, security, and transaction management by defining them in a separate aspect rather than scattering them across the codebase",
        "Replacing Spring MVC's controller layer",
        "Automatically generating REST endpoints from service classes"
      ],
      "correct": 1
    },
    {
      "q": "In Spring AOP, what is a 'pointcut'?",
      "options": [
        "The actual code that runs when an aspect is triggered",
        "An expression that defines which join points (method executions) an advice should be applied to",
        "The object returned after an aspect intercepts a method",
        "A Spring bean that manages all aspect configurations"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between @Before, @After, and @Around advice in Spring AOP?",
      "options": [
        "@Before runs before and after; @After only runs after; @Around is for exceptions",
        "@Before runs before the method; @After runs after (regardless of outcome); @Around wraps the method execution, allowing control before, after, and around the join point",
        "@Around is the only one that can prevent method execution; the others are informational only",
        "They are identical and can be used interchangeably"
      ],
      "correct": 1
    },
    {
      "q": "What is Java-based Spring configuration and how is it enabled?",
      "options": [
        "Using @SpringConfig on the main class",
        "Using @Configuration on a class to define beans with @Bean methods, replacing XML configuration",
        "Using properties files to configure bean definitions",
        "Enabling a flag in pom.xml to use Java instead of XML"
      ],
      "correct": 1
    },
    {
      "q": "What does @ComponentScan do in a Java-based Spring configuration class?",
      "options": [
        "It scans for available Spring Boot starters in the classpath",
        "It tells Spring to scan the specified packages for @Component-annotated classes and register them as beans",
        "It validates all components for proper annotations",
        "It generates component documentation automatically"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring Boot's auto-configuration and what annotation enables it?",
      "options": [
        "Spring Boot reads your code and writes configuration for you, enabled by @AutoConfig",
        "Spring Boot automatically configures beans based on the classpath, properties, and existing beans, enabled by @EnableAutoConfiguration (included in @SpringBootApplication)",
        "Auto-configuration is enabled by including spring-boot-starter in pom.xml only",
        "It is always active and cannot be disabled"
      ],
      "correct": 1
    },
    {
      "q": "What does the @SpringBootApplication annotation combine?",
      "options": [
        "@Component, @Service, and @Repository",
        "@Configuration, @EnableAutoConfiguration, and @ComponentScan",
        "@SpringConfig, @AutoWire, and @Scan",
        "@RestController, @RequestMapping, and @EnableWebMvc"
      ],
      "correct": 1
    },
    {
      "q": "What is an embedded server in Spring Boot and what is the default?",
      "options": [
        "A virtual machine bundled with the application; default is JBoss",
        "A servlet container packaged within the application JAR so no external server installation is needed; default is Tomcat",
        "A mock server used for testing; default is MockMvc",
        "A cloud server provisioned automatically; default is AWS"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of 'application.properties' or 'application.yml' in a Spring Boot project?",
      "options": [
        "To define the database schema for the application",
        "To externalize configuration properties like server port, database URL, and logging levels",
        "To list all Spring Boot starter dependencies",
        "To configure the build tool (Maven/Gradle)"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring Data JPA and what problem does it solve?",
      "options": [
        "A Spring module for raw JDBC operations with type-safe queries",
        "A Spring module that reduces boilerplate data access code by providing repository interfaces with built-in CRUD operations and query generation",
        "A replacement for Hibernate that uses SQL instead of JPQL",
        "A caching layer that stores JPA entities in memory"
      ],
      "correct": 1
    },
    {
      "q": "What does extending JpaRepository<T, ID> give you in Spring Data JPA?",
      "options": [
        "Only the save() and findById() methods",
        "Full CRUD operations, pagination, sorting, and the ability to define custom query methods",
        "A direct connection to the database without Hibernate",
        "Automatic REST endpoint generation"
      ],
      "correct": 1
    },
    {
      "q": "How does Spring Data JPA derive a query from a method named 'findByLastNameAndEmail'?",
      "options": [
        "It throws an error because custom method names are not supported",
        "Spring parses the method name and automatically generates a JPQL query based on the naming convention (findBy + field names + conditions)",
        "It requires a corresponding @Query annotation to work",
        "It executes a full table scan and filters in Java"
      ],
      "correct": 1
    },
    {
      "q": "What annotation is used to define a custom JPQL or native SQL query on a Spring Data JPA repository method?",
      "options": [
        "@SQL",
        "@Query",
        "@HQL",
        "@NativeQuery"
      ],
      "correct": 1
    },
    {
      "q": "In a Spring Boot REST API, what does @RestController do?",
      "options": [
        "It combines @Controller and @ResponseBody, making every method return data serialized directly to the HTTP response body",
        "It restricts the controller to only handle REST requests",
        "It is the same as @Controller but only for GET requests",
        "It automatically generates Swagger documentation for the controller"
      ],
      "correct": 0
    },
    {
      "q": "What is the correct Spring Boot REST controller method to handle a POST request for creating a new resource?",
      "options": [
        "@GetMapping('/users') public User createUser(@RequestBody User user)",
        "@PostMapping('/users') public ResponseEntity<User> createUser(@RequestBody User user)",
        "@PutMapping('/users') public User createUser(@RequestParam User user)",
        "@CreateMapping('/users') public User createUser(@RequestBody User user)"
      ],
      "correct": 1
    },
    {
      "q": "What does @RequestBody do in a Spring Boot REST controller method?",
      "options": [
        "It extracts a single field from the request body",
        "It deserializes the HTTP request body (typically JSON) into a Java object",
        "It validates that the request body is not empty",
        "It maps request headers to a Java object"
      ],
      "correct": 1
    },
    {
      "q": "What is ResponseEntity in Spring Boot and why is it used?",
      "options": [
        "A special DTO class that wraps response data",
        "A Spring class that represents the full HTTP response including status code, headers, and body, giving fine-grained control over the response",
        "An interface that must be implemented by all REST controllers",
        "A utility for converting Java objects to JSON"
      ],
      "correct": 1
    },
    {
      "q": "How do you create a REST client in Spring Boot to call an external API?",
      "options": [
        "Using HttpClient from java.net only",
        "Using RestTemplate or the newer WebClient (from Spring WebFlux) to make HTTP requests to external services",
        "Using @FeignClient only, which is mandatory for REST clients",
        "REST clients cannot be created inside Spring Boot applications"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Spring Boot Profiles?",
      "options": [
        "To define user profiles for authentication",
        "To allow different configurations (e.g., database URLs, logging levels) to be active for different environments like dev, test, and prod",
        "To configure CPU and memory profiles for the JVM",
        "To define multiple main classes for different entry points"
      ],
      "correct": 1
    },
    {
      "q": "How do you activate a specific Spring Boot profile named 'prod'?",
      "options": [
        "By naming the config file application.properties only",
        "By setting spring.profiles.active=prod in application.properties or via the command line as --spring.profiles.active=prod",
        "By annotating the main class with @ActiveProfile('prod')",
        "Profiles are activated automatically based on the OS environment"
      ],
      "correct": 1
    },
    {
      "q": "What logging framework does Spring Boot use by default, and how do you set the log level for a package?",
      "options": [
        "Log4j by default; set via log4j.properties",
        "SLF4J with Logback by default; set via logging.level.com.example=DEBUG in application.properties",
        "Java Util Logging by default; set via logging.config=logback.xml",
        "Log4j2 by default; set via @LogLevel annotation"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring Boot Actuator used for?",
      "options": [
        "To automate deployment of Spring Boot applications",
        "To provide production-ready features like health checks, metrics, environment info, and monitoring endpoints",
        "To generate REST API documentation automatically",
        "To manage database migrations at startup"
      ],
      "correct": 1
    },
    {
      "q": "What endpoint does Spring Boot Actuator expose to check the application's health status?",
      "options": [
        "/actuator/status",
        "/actuator/health",
        "/actuator/ping",
        "/actuator/alive"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring Security and what does it provide out of the box?",
      "options": [
        "A library for encrypting database passwords only",
        "A comprehensive security framework providing authentication, authorization, CSRF protection, session management, and more",
        "A firewall configuration tool for Spring applications",
        "A security scanner that detects vulnerabilities in Spring code"
      ],
      "correct": 1
    },
    {
      "q": "What happens when you add spring-boot-starter-security to a Spring Boot project without any additional configuration?",
      "options": [
        "Nothing; security must be manually configured to take effect",
        "All endpoints are secured and Spring generates a default password printed to the console, requiring HTTP Basic authentication",
        "Only the /admin endpoint is secured by default",
        "The application fails to start until a SecurityConfig class is provided"
      ],
      "correct": 1
    },
    {
      "q": "What is Thymeleaf in Spring Boot?",
      "options": [
        "A database migration tool for Spring Boot",
        "A server-side Java template engine that renders HTML views and integrates naturally with Spring MVC",
        "A JavaScript framework bundled with Spring Boot",
        "A REST API testing tool for Spring Boot applications"
      ],
      "correct": 1
    },
    {
      "q": "What is database caching in Spring Boot and which annotation enables method-level caching?",
      "options": [
        "Database caching stores query results in a file; enabled by @FileCacheable",
        "Caching stores the result of expensive method calls in memory; method-level caching is enabled with @Cacheable",
        "Spring Boot caches all database results automatically without configuration",
        "Database caching is only available with Redis and requires @RedisCache"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring Batch used for?",
      "options": [
        "Running multiple Spring Boot applications simultaneously",
        "Processing large volumes of records in batch jobs with support for reading, processing, writing, retry, and skip logic",
        "Batching multiple REST API calls into one HTTP request",
        "Managing bulk inserts into MongoDB"
      ],
      "correct": 1
    },
    {
      "q": "In Spring Boot testing with MockMvc, what does the following code test?\n\nmockMvc.perform(get('/api/users'))\n  .andExpect(status().isOk())\n  .andExpect(jsonPath('$[0].name').value('Alice'));",
      "options": [
        "It sends an actual HTTP GET request to a live server",
        "It performs a mock HTTP GET to /api/users and asserts the response status is 200 and the first element's name is 'Alice'",
        "It tests the database query for the users table",
        "It validates the request body of a POST request"
      ],
      "correct": 1
    },
    {
      "q": "What annotation is used to configure a Spring Boot test that loads only the web layer (controllers) without the full application context?",
      "options": [
        "@SpringBootTest",
        "@WebMvcTest",
        "@ContextConfiguration",
        "@MockMvcTest"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring JMS and what is it used for?",
      "options": [
        "A Spring module for JSON marshalling and serialisation",
        "A Spring module that simplifies working with Java Message Service (JMS) for asynchronous messaging between applications",
        "A module for managing JavaScript modules in Spring MVC",
        "A module for sending HTTP messages between microservices"
      ],
      "correct": 1
    },
    {
      "q": "What annotation is used to mark a Spring method as a JMS message listener?",
      "options": [
        "@JmsConsumer",
        "@MessageHandler",
        "@JmsListener",
        "@QueueListener"
      ],
      "correct": 2
    },
    {
      "q": "What is Swagger (Springdoc/SpringFox) used for in a Spring Boot REST API?",
      "options": [
        "To automatically test all REST endpoints",
        "To automatically generate interactive API documentation from your REST controller code",
        "To secure REST endpoints with OAuth2",
        "To validate request and response JSON schemas"
      ],
      "correct": 1
    },
    {
      "q": "What annotation is used in Spring Boot to validate that a request field is not blank?",
      "options": [
        "@Required",
        "@NotEmpty",
        "@NotBlank",
        "@NonNull"
      ],
      "correct": 2
    },
    {
      "q": "How do you trigger Bean Validation in a Spring Boot REST controller for an incoming request body?",
      "options": [
        "Validation happens automatically without any annotation",
        "By adding @Valid or @Validated before the @RequestBody parameter in the controller method",
        "By calling validate() on the object manually inside the method",
        "By configuring a validation.xml file"
      ],
      "correct": 1
    },
    {
      "q": "What is Spring Data REST and what does it do automatically?",
      "options": [
        "A Spring module for writing raw REST API controllers",
        "A Spring module that automatically exposes Spring Data repositories as HATEOAS-compliant REST endpoints with no controller code needed",
        "A testing framework for REST APIs in Spring Boot",
        "A library that converts Spring MVC controllers to RESTful endpoints"
      ],
      "correct": 1
    },
    {
      "q": "What does HATEOAS stand for and what does it mean in a REST API context?",
      "options": [
        "Hypermedia As The Engine Of Application State; API responses include links to related actions/resources, allowing clients to navigate the API dynamically",
        "HTTP And Type-Encoded Object Access Standard; it defines the JSON format for REST responses",
        "High Availability Technology Enabling Online API Services; it ensures uptime",
        "Hypermedia Annotation Technology for Encoding Object And State; it is a Spring-specific standard"
      ],
      "correct": 0
    },
    {
      "q": "What dependency is added to a Spring Boot project to enable Spring Data REST?",
      "options": [
        "spring-boot-starter-web",
        "spring-boot-starter-data-rest",
        "spring-data-rest-webmvc",
        "spring-boot-starter-rest"
      ],
      "correct": 1
    },
    {
      "q": "By default, what HTTP endpoints does Spring Data REST expose for a repository named 'CustomerRepository' managing 'Customer' entities?",
      "options": [
        "Only /customers (GET and POST)",
        "/customers (GET, POST), /customers/{id} (GET, PUT, PATCH, DELETE)",
        "/api/customer only",
        "Spring Data REST does not expose DELETE by default"
      ],
      "correct": 1
    },
    {
      "q": "How do you change the base path for all Spring Data REST endpoints?",
      "options": [
        "By annotating the repository with @BasePath('/api')",
        "By setting spring.data.rest.base-path=/api in application.properties",
        "By overriding the DispatcherServlet mapping",
        "The base path cannot be changed in Spring Data REST"
      ],
      "correct": 1
    },
    {
      "q": "What annotation is used to customize the path of a Spring Data REST repository endpoint?",
      "options": [
        "@RequestMapping",
        "@RepositoryRestResource(path='...')",
        "@RestResource(path='...')",
        "@EndpointPath"
      ],
      "correct": 1
    },
    {
      "q": "How do you hide a specific Spring Data REST repository method from being exposed as a REST endpoint?",
      "options": [
        "By making the method private",
        "By annotating the method with @RestResource(exported = false)",
        "By removing the method from the repository interface",
        "By adding @Hidden to the repository class"
      ],
      "correct": 1
    },
    {
      "q": "How does Spring Data REST support pagination in list endpoints?",
      "options": [
        "Pagination must be manually implemented in a custom controller",
        "By extending PagingAndSortingRepository, Spring Data REST automatically supports ?page and ?size query parameters",
        "Pagination is not supported by Spring Data REST",
        "By configuring a @Pageable annotation on the repository interface"
      ],
      "correct": 1
    },
    {
      "q": "What query parameter is used to sort results in a Spring Data REST endpoint?",
      "options": [
        "?orderBy=fieldName",
        "?sortBy=fieldName",
        "?sort=fieldName,asc",
        "?order=fieldName&direction=asc"
      ],
      "correct": 2
    },
    {
      "q": "How do you customize JSON serialization in Spring Data REST, for example to rename a JSON field?",
      "options": [
        "By modifying the Spring Data REST source code",
        "By using Jackson annotations such as @JsonProperty on entity fields to control JSON output",
        "By configuring a custom serializer in application.properties",
        "JSON field names always match Java field names and cannot be changed"
      ],
      "correct": 1
    },
    {
      "q": "What does @JsonIgnore do when applied to an entity field in a Spring Data REST API?",
      "options": [
        "It marks the field as required in the JSON input",
        "It excludes the field from both JSON serialization (output) and deserialization (input)",
        "It converts the field value to null in the JSON output",
        "It only hides the field from GET responses but includes it in POST"
      ],
      "correct": 1
    },
    {
      "q": "How do you define a custom finder method in a Spring Data REST repository?\n\nList<Customer> findByLastName(@Param('name') String lastName);",
      "options": [
        "It cannot be done; Spring Data REST only supports findAll and findById",
        "Spring Data REST automatically exposes this as a search endpoint at /customers/search/findByLastName?name=Smith",
        "The method requires a custom @Controller to be exposed as a REST endpoint",
        "The method must be annotated with @GetMapping to work"
      ],
      "correct": 1
    },
    {
      "q": "What annotation is used to expose a custom controller method as part of a Spring Data REST endpoint?",
      "options": [
        "@RepositoryRestController",
        "@RestDataController",
        "@DataRestEndpoint",
        "@SpringDataController"
      ],
      "correct": 0
    },
    {
      "q": "How do you secure a specific Spring Data REST endpoint in a Spring Security configuration?",
      "options": [
        "By annotating the repository with @Secured",
        "By configuring HttpSecurity in a SecurityFilterChain to require authentication for specific URL patterns like /api/customers/**",
        "Spring Data REST endpoints cannot be secured individually",
        "By setting spring.data.rest.secure=true in application.properties"
      ],
      "correct": 1
    },
    {
      "q": "What is a microservice architecture and how does Spring Boot support it?",
      "options": [
        "A single large application; Spring Boot provides tools to compress it",
        "An architecture where an application is composed of small, independently deployable services; Spring Boot supports it with embedded servers, Spring Cloud integration, and easy REST API creation",
        "A database-centric architecture; Spring Boot supports it through Spring Data",
        "An architecture only for mobile apps; Spring Boot provides REST endpoints for them"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of @Entity and @Table annotations in a Spring Boot JPA entity class?",
      "options": [
        "@Entity marks a class as a managed Spring bean; @Table defines its REST endpoint",
        "@Entity marks a Java class as a JPA entity mapped to a database table; @Table specifies the table name when it differs from the class name",
        "@Table creates the database table at startup; @Entity defines validation rules",
        "They are only used with Spring Data REST and not with regular Spring Data JPA"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Spring Boot JPA configuration property do?\n\nspring.jpa.hibernate.ddl-auto=update",
      "options": [
        "It drops and recreates the database schema on every startup",
        "It automatically updates the database schema to reflect entity changes without dropping existing data",
        "It disables automatic schema management",
        "It validates the schema against entities but makes no changes"
      ],
      "correct": 1
    },
    {
      "q": "What is the N+1 query problem in JPA and how can it be avoided?",
      "options": [
        "When a query returns N+1 more rows than expected; fixed by adding LIMIT clauses",
        "When fetching N entities results in N additional queries to load their associations; avoided by using JOIN FETCH in JPQL or setting FetchType.EAGER thoughtfully",
        "When N+1 database connections are opened simultaneously; fixed by connection pooling",
        "A problem unique to Spring Data REST pagination; fixed by changing the page size"
      ],
      "correct": 1
    },
    {
      "q": "What does @OneToMany(mappedBy = 'customer') signify in a JPA entity?",
      "options": [
        "The current entity has one record for every many customers",
        "The current entity has a one-to-many relationship with another entity, and 'customer' is the field in the other entity that owns the foreign key",
        "It creates a new table called 'customer' in the database",
        "It restricts the relationship to a maximum of one record"
      ],
      "correct": 1
    },
    {
      "q": "In Spring Boot, what does @MockBean do in a unit test class?",
      "options": [
        "It creates a real instance of the bean in the test context",
        "It adds a Mockito mock for the specified bean into the Spring application context, replacing any existing bean of that type",
        "It creates a mock HTTP server for testing REST endpoints",
        "It is equivalent to @Mock from Mockito and only works outside Spring context"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of @Transactional on a test method in Spring Boot?",
      "options": [
        "It makes the test run faster by batching database operations",
        "It wraps the test in a transaction that is automatically rolled back after the test completes, keeping the database clean",
        "It commits all changes made during the test to the real database",
        "It is required for all tests that access the database"
      ],
      "correct": 1
    },
    {
      "q": "Which HTTP status code should a Spring Boot REST API return when a requested resource is not found?",
      "options": [
        "400 Bad Request",
        "403 Forbidden",
        "404 Not Found",
        "500 Internal Server Error"
      ],
      "correct": 2
    },
    {
      "q": "How do you handle exceptions globally in a Spring Boot REST API?",
      "options": [
        "By wrapping every controller method in a try-catch block",
        "By using @ControllerAdvice with @ExceptionHandler methods that intercept exceptions thrown from any controller",
        "By configuring a global exception handler in application.properties",
        "Spring Boot automatically handles all exceptions with appropriate HTTP status codes"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Spring Boot code accomplish?\n\n@ExceptionHandler(ResourceNotFoundException.class)\npublic ResponseEntity<String> handleNotFound(ResourceNotFoundException ex) {\n    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());\n}",
      "options": [
        "It logs the exception to a file",
        "It intercepts ResourceNotFoundException anywhere in the application and returns a 404 HTTP response with the exception message",
        "It rethrows the exception after logging it",
        "It only handles the exception for the controller it is defined in"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of @Column(nullable = false, unique = true) on a JPA entity field?",
      "options": [
        "It applies validation at the Java layer only",
        "It maps the field to a database column with NOT NULL and UNIQUE constraints at the schema level",
        "It makes the field required in JSON input for REST APIs",
        "It prevents the field from being serialized to JSON"
      ],
      "correct": 1
    },
    {
      "q": "In Spring Data JPA, what is the difference between save() and saveAndFlush()?",
      "options": [
        "save() persists only new entities; saveAndFlush() also updates existing ones",
        "save() schedules the changes in the persistence context; saveAndFlush() immediately synchronizes changes to the database",
        "saveAndFlush() is deprecated; save() should always be used",
        "They are identical in behaviour"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Spring AOP expression match?\n\n@Pointcut('execution(* com.example.service.*.*(..))')",
      "options": [
        "All methods in the com.example package only",
        "All methods in all classes within the com.example.service package, with any return type and any arguments",
        "Only public methods in com.example.service classes",
        "All constructors in com.example.service classes"
      ],
      "correct": 1
    },
    {
      "q": "What is the @Value annotation used for in Spring?",
      "options": [
        "To define the default value for a database column",
        "To inject a value from application.properties, a system property, or a Spring Expression directly into a field",
        "To mark a method as a computed property",
        "To assign a value to a bean at definition time in XML"
      ],
      "correct": 1
    },
    {
      "q": "What does @ConfigurationProperties(prefix = 'app.mail') do in Spring Boot?",
      "options": [
        "It reads only the app.mail entry from application.properties",
        "It binds all properties with the prefix 'app.mail' from application.properties to the fields of the annotated class",
        "It configures the mail server for the application automatically",
        "It creates a new properties file for mail configuration"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of the PlatformTransactionManager in Spring?",
      "options": [
        "It manages concurrent HTTP requests on the platform",
        "It is the central abstraction for transaction management, used by @Transactional to begin, commit, and rollback transactions",
        "It manages the lifecycle of all Spring beans",
        "It handles database connection pooling"
      ],
      "correct": 1
    },
    {
      "q": "What is lazy loading vs. eager loading in JPA, and what are the defaults for @ManyToOne and @OneToMany?",
      "options": [
        "Both default to LAZY loading",
        "Lazy loading fetches associations only when accessed; eager loads immediately. @ManyToOne defaults to EAGER; @OneToMany defaults to LAZY",
        "Both default to EAGER loading",
        "Lazy vs eager only matters for Spring Data REST, not regular JPA"
      ],
      "correct": 1
    },
    {
      "q": "In Spring Boot, what does the following test annotation combination do?\n\n@SpringBootTest\n@AutoConfigureMockMvc",
      "options": [
        "Loads only the web layer without starting a server",
        "Loads the full application context and auto-configures a MockMvc instance for integration testing the web layer",
        "Creates a real HTTP server on a random port for testing",
        "Loads only the service and repository layers without the web layer"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the @Param annotation in a Spring Data JPA @Query method?\n\n@Query('SELECT u FROM User u WHERE u.email = :email')\nUser findByEmail(@Param('email') String email);",
      "options": [
        "It marks the parameter as required at runtime",
        "It binds the method parameter to the named parameter :email in the JPQL query",
        "It validates that the email parameter is a valid email format",
        "It is only needed for native SQL queries, not JPQL"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between PUT and PATCH in a RESTful API built with Spring Boot?",
      "options": [
        "PUT is for creating resources; PATCH is for deleting them",
        "PUT replaces the entire resource; PATCH applies a partial update to specific fields only",
        "They are interchangeable; the choice is purely stylistic",
        "PATCH is not supported natively in Spring Boot"
      ],
      "correct": 1
    },
    {
      "q": "In a Spring Boot project, what does the following property do?\n\nspring.jpa.show-sql=true",
      "options": [
        "It enables the H2 console for viewing the database",
        "It logs all SQL statements generated by Hibernate to the console",
        "It validates all SQL queries at startup",
        "It shows slow SQL queries only"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct way to inject a property value with a default fallback in Spring Boot using @Value?",
      "options": [
        "@Value('${app.timeout}') private int timeout;",
        "@Value('${app.timeout:30}') private int timeout;",
        "@Value('${app.timeout || 30}') private int timeout;",
        "@Value('${app.timeout} default 30') private int timeout;"
      ],
      "correct": 1
    },
    {
      "q": "What does Spring Data REST return in the response body when you POST to create a new entity?",
      "options": [
        "Only the HTTP 201 status with no body",
        "The created entity as JSON with its generated ID and HATEOAS links",
        "A plain string confirmation message",
        "The entire list of entities after creation"
      ],
      "correct": 1
    },
    {
      "q": "What does @GeneratedValue(strategy = GenerationType.IDENTITY) on a JPA entity's @Id field do?",
      "options": [
        "It generates a UUID for the ID field",
        "It delegates ID generation to the database's auto-increment column",
        "It generates IDs using a sequence table managed by Hibernate",
        "It requires the application to set the ID before saving"
      ],
      "correct": 1
    },
    {
      "q": "In Spring Security, what is the role of a UserDetailsService?",
      "options": [
        "To store user data in session memory",
        "To load user-specific data (such as username, password, and roles) during authentication",
        "To generate JWT tokens for authenticated users",
        "To configure URL security rules"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Spring Security configuration snippet accomplish?\n\nhttp.authorizeHttpRequests()\n  .requestMatchers('/api/public/**').permitAll()\n  .anyRequest().authenticated();",
      "options": [
        "It blocks all requests to /api/public/** and allows everything else",
        "It allows unauthenticated access to /api/public/** endpoints and requires authentication for all other requests",
        "It applies HTTPS to all /api/public/** endpoints",
        "It logs all requests to /api/public/** for auditing"
      ],
      "correct": 1
    },
    {
      "q": "What is advice?",
      "options": [
        "A concern that cuts across multiple classes",
        "The process of linking aspects with other application types",
        "Action taken by an aspect at a particular join point",
        "A method to implement transaction management"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation represents an advice to be executed after the method\nexecution only if method exits by throwing an exception?",
      "options": [
        "@Before",
        "@After",
        "@Around",
        "@AfterThrowing"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following terminologies are typically used with regards to",
      "options": [
        "A, B, and D",
        "A, C, and D",
        "A, B, and C",
        "B, C, and D"
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "q": "What attribute is added in the bean.xml to reduce or eliminate the need\nof<property> and<constructor-arg>?",
      "options": [
        "Autodiscovery",
        "Autowire",
        "Scope",
        "Auto-detect"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following examples summarizes Program to an interface\nrather than an implementation?",
      "options": [
        "Map m = new HashMap();",
        "ArrayList list = new ArrayList();",
        "ArrayList<Integer> = new ArrayList<Integer>();",
        "Strings = \"HelloWorld\";"
      ],
      "correct": 2
    },
    {
      "q": "If any of the beans implements the BeanPostProcessor interface, Spring\nwill call which of these methods?",
      "options": [
        "processBeforeInitialization()",
        "BeanPostProcessor()",
        "postProcessInterface()",
        "postProcessBeforeInitialization()"
      ],
      "correct": 3
    },
    {
      "q": "Which Collections elements does Spring support?",
      "options": [
        "List, hashmap, arraylist, andset",
        "List, props, hashmaps, and arraylist",
        "List, set, map, and props",
        "Hashmaps, arraylist, list, and treemap"
      ],
      "correct": 2
    },
    {
      "q": "What will be the result if you use Web-aware Spring Application Context\nscopes in a regular Spring IoC container?",
      "options": [
        "It will return nothing.",
        "It will return a NullPointer Exception",
        "It will return a IllegalStateException",
        "It will work correctly."
      ],
      "correct": 0
    },
    {
      "q": "Which Bean scopes are valid only in the context of a web-aware Spring\nApplication Context?",
      "options": [
        "Singleton and Prototype",
        "Session, Global Session, and Request",
        "Singleton, Prototype, Request, and Session",
        "Session, Singleton, and Global Session"
      ],
      "correct": 1
    },
    {
      "q": "To use java.util.List, what is the Spring Collections element that you\nneed?",
      "options": [
        "<list>",
        "<List>",
        "<lists>",
        "util:list"
      ],
      "correct": 0
    },
    {
      "q": "Which of the below are benefits of using DI?",
      "options": [
        "Tight coupling",
        "Loose coupling",
        "Easy testing",
        "Removing run time error"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between ClassPathXMLApplicationContext and\nFilePathXMLApplicationContext?",
      "options": [
        "First one reads from application class path and second one reads from absolute file path.",
        "First one reads from application class path and second one reads from relative file path.",
        "First one reads from relative application class path and second one reads from absolute file path.",
        "None of the above."
      ],
      "correct": 1
    },
    {
      "q": "The Dependency Look up is a methodology where we get the resource",
      "options": [
        "after demand. There can be various ways to get the resource. Types of",
        "Dependency Look up include:",
        "Factory Method",
        "JNDI Method",
        "Key Word Method",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "When do you use Dependency Injection?\nA. DI is very useful for decoupling your system.\nB. DI is most useful when you are aiming for code reuse.\nC. DI helps in designing tightly coupled code.\nD. DI does NOT help in unit testing the code.",
      "options": [
        "A and C",
        "B and C",
        "A and B",
        "A and D"
      ],
      "correct": 2
    },
    {
      "q": "For Java-based configuration, which is the class that sets the Spring\nContext?",
      "options": [
        "Annotationconfig",
        "ComponentScan",
        "AnnotationConfigApplicationContext",
        "AnnotationConfigApplication"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is an example of java-based configuration?",
      "options": [
        "context:annotation-config/",
        "@Configuration public class HelloWorldConfig{..}",
        "@Autowired",
        "ApplicationContext context=new",
        "ClassPathXmlApplicationContext(\"Beans.xml\");"
      ],
      "correct": 1
    },
    {
      "q": "Which is the main component in Spring Web MVC?",
      "options": [
        "Faces Servlet",
        "Action Servlet",
        "View Renderer Servlet",
        "Dispatcher Servlet"
      ],
      "correct": 3
    },
    {
      "q": "Which element has to be used in order to configure Spring MVC?",
      "options": [
        "<mvc:annotation-driven/>",
        "<aop:aspect/>",
        "<tx:advice/>",
        "<oxm:jaxb2-marshaller/>"
      ],
      "correct": 0
    },
    {
      "q": "What annotation wiring element is added to scan packages to find and\nregister beans with in the Application Context?",
      "options": [
        "<context:annotation-config/>",
        "<context:annotation-scan/>",
        "<context:component-config/>",
        "<context:component-scan>"
      ],
      "correct": 3
    },
    {
      "q": "In the following example, what type of autowire will be used?\n@Autowired(required=false)\npublic Employee AutowiredByConstructorService(@Qualifier(\"employee\") Employee emp) {\nthis.employee=emp;\n}",
      "options": [
        "ByName",
        "ById",
        "@Autowired",
        "Constructor"
      ],
      "correct": 3
    },
    {
      "q": "What are different valid types of Spring bean autowiring?",
      "options": [
        "byName, byId, and constructor",
        "byName, byType, constructor, @Autowired, and @Qualifier annotations",
        "by Scope, by Constructor, and @Autowired",
        "ById, byNameScope, constructor, and @Autowire"
      ],
      "correct": 1
    },
    {
      "q": "Spring handles object creation in order to be non-invasive. Can you\nidentify which definition creates a spring-managed object?",
      "options": [
        "String myObj;",
        "@Autowired private String myObj;",
        "private String myObj = new String(\"spring\");",
        "@Spring String myObj=null;"
      ],
      "correct": 2
    },
    {
      "q": "How many types of autowiring modes are supported in Spring?",
      "options": [
        "Three",
        "Five",
        "Six",
        "Four"
      ],
      "correct": 1
    },
    {
      "q": "The use of Autodiscovery and Autowire will reduce the amount of",
      "options": [
        "___________.",
        "Java code generated",
        "Methods generated",
        "XML Spring configurations",
        "<bean> elements"
      ],
      "correct": 3
    },
    {
      "q": "Dependency Injection (DI) or Inversion of Control (IOC) is based on which\nHollywood principle ?",
      "options": [
        "Do not call us. We will call you.",
        "Understand the problem first.",
        "The customer is always right.",
        "What you see is what you get."
      ],
      "correct": 0
    },
    {
      "q": "From where does the Spring container gets its instructions?",
      "options": [
        "Properties File",
        "Spring JARS",
        "XML File",
        "Annotations"
      ],
      "correct": [
        0,
        2,
        3
      ]
    },
    {
      "q": "The use of the prototype scope is recommended for ______________ type of",
      "options": [
        "beans.",
        "Stateless",
        "Stateful",
        "Restless",
        "Restful"
      ],
      "correct": 1
    },
    {
      "q": "Which is the alternative to create, load, and manage beans in a Spring\nApplication?",
      "options": [
        "Application Factory",
        "Context Factory",
        "Bean Factory",
        "Spring Bean Factory"
      ],
      "correct": 2
    },
    {
      "q": "Java- based configuration allows bean definition and Spring",
      "options": [
        "configuration to move out of _________.",
        "XML files",
        "Java code",
        "Property files",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "Which one of these statements about XML declaration of transaction\nmanager bean is NOT true?",
      "options": [
        "The tx namespace provides JTA transaction manager declaration",
        "shortcut syntax.",
        "The Id of the bean has to be transactionManager.",
        "Depending on the application persistence technology, the",
        "HibernateTransactionManager or the DataSourceTranasctionManager",
        "could be used as bean class.",
        "A default transaction timeout could be given."
      ],
      "correct": 1
    },
    {
      "q": "Which one of the following is one of the challenge of Traditional\nTransaction Management?",
      "options": [
        "Transaction Management at Database Connection Level",
        "Programmatic Management of Transactions",
        "Error-Prone Connection Management",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What does the JDBC Template users to connect to the database?",
      "options": [
        "A simple java bean with connection properties",
        "A data source bean configuration",
        "An XML with DB connection parameters",
        "A JDBC connection object"
      ],
      "correct": 1
    },
    {
      "q": "What is the use of Autodiscovery?",
      "options": [
        "Eliminate the use of the <Property> element",
        "Reduce the use of the <Constructor-arg> element",
        "Eliminate the use of the <Props> element",
        "Reduce the use of the <bean> element"
      ],
      "correct": 3
    },
    {
      "q": "The -------- packages are the basis of spring Framework’s IOC container",
      "options": [
        "org.springframework.beans and org.springframework.Application",
        "org.springframework.properties and org.springframework.context",
        "org.springframework.beans and org.springframework.properties",
        "org.springframework.beans and org.springframework.context"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following attributes are valid in a Spring bean definition?",
      "options": [
        "ID",
        "Map",
        "Set",
        "Class"
      ],
      "correct": 0
    },
    {
      "q": "What Spring Collection can be used to inject a collection of name-value\npairs, where name and value can be of any type?",
      "options": [
        "<set>",
        "<List>",
        "<map>",
        "<props>"
      ],
      "correct": 2
    },
    {
      "q": "Which attributes are applicable for an inner bean?",
      "options": [
        "Context, Parent",
        "Id, Class",
        "Class, Inner",
        "Interface, Id"
      ],
      "correct": 2
    },
    {
      "q": "To use bean definition template, you should add what attribute in the\nbean?",
      "options": [
        "abstract=\"true\"",
        "interface=\"true\"",
        "class =\"com.example.helloworld\"",
        "public =\"true\""
      ],
      "correct": 0
    },
    {
      "q": "A collection value of the type java.util.Properties is defined by what\nelement?",
      "options": [
        "<props>",
        "<prop>",
        "<properties>",
        "<property>"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is an annotation for Spring Java-based\nconfiguration?",
      "options": [
        "@Component",
        "@SpringConfiguration",
        "@SpringXml",
        "@Configuration"
      ],
      "correct": 3
    },
    {
      "q": "What does the JDBC Template uses to connect to the database?",
      "options": [
        "A simple java bean with connection properties",
        "A data source bean configuration",
        "An XML with DB connection parameters",
        "A JDBC connection object"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following tasks are performed by a JDBCTemplate?",
      "options": [
        "Execute SQL query.",
        "Execute Update statements.",
        "Execute a Java program.",
        "Execute stored procedure calls."
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "q": "Does Spring provide programmatic transaction management?",
      "options": [
        "Yes, with the TransactionTemplate class",
        "Yes, with the TransactionService class",
        "Yes, using the @Transactional bean post processor",
        "No, Spring does not provide transactional management"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are MVC – Specific annotations:",
      "options": [
        "@Controller",
        "@RequestMapping",
        "@PathVariable",
        "@Autowired"
      ],
      "correct": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "q": "To annotate all your Data Access Object (DAO) classes, use the --------",
      "options": [
        "@Service",
        "@Classes",
        "@Repository",
        "@Component"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following statement is false?\na. The Core package is the most fundamental part of the framework and provides the IoC and Dependency Injection feature.\nb. The DAO package provides a JDBC-abstraction layer that removes the need to do tedious JDBC coding and parsing of database-vendor specific error codes.\nc. The ORM package provides integration layers for popular object-relational mapping APIs, including JPA, JDO, Hibernate, iBatis.\nd. AOP takes out the direct dependency of crosscutting tasks from classes, which we cannot achieve through normal object oriented programming model — for example, method-interceptors and pointcuts cleanly decouple code implementing functionality that should be separated.\ne. Spring’s Web package provides basic web-oriented integration features, such as multipart file-upload functionality.\nf. Spring’s MVC package provides a Model-View-Controller implementation for web-application.",
      "options": [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "None of these"
      ],
      "correct": 6
    },
    {
      "q": "Which of the following is false?\na. A BeanFactory pretty much just instantiates and configures beans.\nb. An ApplicationContext also instantiates beans, and it provides the supporting infrastructure to enable lots of enterprise-specific features such as transactions and AOP, message resource handling (for use in internationalization), event propagation.\nc. Application-layer specific contexts such as the WebApplicationContext are for use in web applications.",
      "options": [
        "a",
        "b",
        "c",
        "none of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following is actual representation of the Spring loc\ncontainer?",
      "options": [
        "Application Context",
        "Xml Bean Factory",
        "Bean Factory",
        "Web Application Context"
      ],
      "correct": 2
    },
    {
      "q": "A bean is simply an object that is instantiated, assembled and otherwise",
      "options": [
        "managed by a Spring loc container.",
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "How container load configuration metadata from a variety of external\nresources such as the local file system from the Java CLASSPATH?",
      "options": [
        "Application Context constructor",
        "Init()",
        "Context Contructor",
        "XmlClassPath Contructor"
      ],
      "correct": 1
    },
    {
      "q": "Which of following is correct way to load bean definitions from another\nfile?",
      "options": [
        "<bean id=\"bean1\" class=\"...\" import=\"something.xml\"/>",
        "<resources name=\"something.xml\" import=\"true\"/>",
        "<import resource=\"something.xml\"/>",
        "all the above"
      ],
      "correct": 0
    },
    {
      "q": "What is the correct way to write constructor injection?\npackage com.bullraider;\npublic class TestBean {\nprivate int year;\nprivate String happy;\npublic TestBean(String happy,int year) {\nthis.year=year;\nthis.happy = happy;\n}\n}",
      "options": [
        "<bean name=\"testClass\" class=\"com.bullraider.TestBean\">\n<constructor-arg type=\"java.lang.String\" value=\"Happy new year\"/>\n<constructor-arg type=\"int\" value=\"2015\"/>\n</bean>",
        "<bean name=\"testClass\" class=\"com.bullraider.TestBean\">\n<constructor-arg index=\"0\" value=\"Happy new year\"/>\n<constructor-arg index=\"1\" value=\"2015\"/>\n</bean>",
        "<bean name=\"testClass\" class=\"com.bullraider.TestBean\">\n<constructor-arg index=\"1\" value=\"Happy new year\"/>\n<constructor-arg index=\"0\" value=\"2015\"/>\n</bean>",
        "<bean name=\"testClass\" class=\"com.bullraider.TestBean\">\n<constructor-arg type=\"int\" value=\"2015\"/>\n<constructor-arg type=\"java.lang.String\" value=\"Happy new year\"/>\n</bean>",
        "All of the above"
      ],
      "correct": 4
    },
    {
      "q": "Which of the following are correct statements?",
      "options": [
        "Form Controllers handle form interaction",
        "Multipart resolver to handle file uploads",
        "Dynamic binding of data to domain model",
        "Interaction with velocity.jsp, thymeleaf,pdf, Excel",
        "Sending email remote accessing via Soap, Burlap"
      ],
      "correct": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    {
      "q": "What do you mean by 'bean'?",
      "options": [
        "component",
        "object",
        "class",
        "container",
        "xml file"
      ],
      "correct": 0
    },
    {
      "q": "What are responsibilities included for bean factory do ?",
      "options": [
        "Instantiating Instantiating or sourcing application objects",
        "configuring such objects",
        "Assembling the dependencies between these objects",
        "Manage lifecycle of spring"
      ],
      "correct": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "q": "What are the responsibilities of XmlBeanFactory included ?",
      "options": [
        "This implementation allows you to express the objects that compose",
        "your application",
        "Resolve inter-dependencies between such objects, in terms of XML",
        "The XmlBeanFactory takes this XML configuration metadata and uses it",
        "to create a fully configured system or application",
        "None of this above"
      ],
      "correct": [
        0,
        1,
        2,
        4,
        5
      ]
    },
    {
      "q": "What are the correct ways to instantiate bean?",
      "options": [
        "Using default (empty) constructor",
        "Instantiation using a static factory method",
        "Instantiation using an instance factor method",
        "Using the container",
        "All these above are true"
      ],
      "correct": 4
    },
    {
      "q": "What is Bean Factory?",
      "options": [
        "Resource definition1 = new FileSystemResource(\"beans-def.xml\");",
        "BeanFactory factory = new XmlBeanFactory(definition1)"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "Which statements are true about DI (Dependency Injection)?\nA. DI says your components and services should be tightly coupled in code.\nB. DI says that you don’t need to create your objects but describe how they should be created.\nC. We should not directly connect your components and services together in code, but describe which services are needed by which components in a configuration file.\nD. Inversion of control relies on dependency injection.",
      "options": [
        "A",
        "B",
        "C",
        "D",
        "B and C",
        "C and D"
      ],
      "correct": 4
    },
    {
      "q": "What are the benefits of Inversion of Control?",
      "options": [
        "Decoupling of the execution of a certain task from implementation.",
        "Each module can focus on what it is designed for.",
        "Replacing modules should not affect to other modules.",
        "All the above"
      ],
      "correct": [
        0,
        1,
        2
      ]
    },
    {
      "q": "Which of the following are basic techniques to implement inversion of\ncontrol?",
      "options": [
        "using a factory pattern",
        "using a service locator pattern",
        "a constructor injection",
        "a setter injection",
        "an interface injection",
        "all the above"
      ],
      "correct": 5
    },
    {
      "q": "Which of the following statements are false?\nA. Constructor-based DI is effected by invoking a constructor with a number of arguments, each representing a dependency.\nB. We can also use the @Autowired annotation on a constructor for constructor-based autowiring.\nC. Constructor-based DI is accomplished when the container invokes a setter method, each representing a dependency.",
      "options": [
        "A",
        "B",
        "C",
        "A and B"
      ],
      "correct": 2
    },
    {
      "q": "What are the correct ways to define constructor injection?",
      "options": [
        "<bean id=\"salute\" class=\"com.bullraider.app.beans.Salutation\">\n<constructor-arg>\n<value>Salute</value>\n</constructor-arg>\n</bean>",
        "<bean id=\"salute\" class=\"com.bullraider.app.beans.Salutation\">\n<constructor-arg value=\"Salute\">\n</constructor-arg>\n</bean>",
        "<bean id=\"salute\" class=\"com.bullraider.app.beans.Salutation\">\n<constructor-arg value=\"Salute\"/>\n</bean>",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Spring Web MVC (and in Spring in general) is the \"Open for extension,",
      "options": [
        "closed for modification\" principle. The reason that this principle is being",
        "mentioned here is because a number of methods in the core classes in",
        "Spring Web MVC are marked final.",
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Which of the among is not a special bean in WebApplicationContext?",
      "options": [
        "Locale resolver",
        "Theme resolver",
        "multipart file resolver",
        "Handler exception resolver",
        "Handler mappings",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "All Spring’s various controller inherit from AbstractController?",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "You can write your own controller by using",
      "options": [
        "handleRequestInternal(HttpServletRequest, HttpServletResponse)",
        "method from abstract controller and a ModelAndView object.",
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following controller inspects the URL and retrieves the filename of the file request and uses that as a viewname? For example, the filename of http://www.springframework.org/welcome.html request is welcome.",
      "options": [
        "UrlFilenameViewController",
        "MultiActionMultiActionController",
        "CommandController",
        "AbstractController"
      ],
      "correct": 0
    },
    {
      "q": "Which statements are true about DispatcherServlet?\nA. DispatcherServlet is an expression of the \"Front Controller\" design pattern.\nB. The DispatcherServlet is the actual Servlet.\nC. DispatcherServlet is declared in the web.xml of your web application.\nD. The Spring DispatcherServlet has a couple of special beans it uses in order to be able to process requests and render the appropriate views. These beans can be configured in WebApplicationContext.",
      "options": [
        "A",
        "B",
        "C",
        "D",
        "All of the above"
      ],
      "correct": 4
    },
    {
      "q": "Which statements are true about WebApplicationContext?\nA. The WebApplicationContext is an extension of the plain ApplicationContext.\nB. The WebApplicationContext is bound in the ServletContext, and by using static methods on the RequestContextUtils class you can always look up the actual WebApplicationContext.\nC. WebApplicationContext differs from a normal ApplicationContext in that it is capable of resolving themes.\nD. We can get a WebApplicationContext reference by using ApplicationContext.",
      "options": [
        "A",
        "B",
        "C",
        "D",
        "All the above"
      ],
      "correct": 4
    },
    {
      "q": "Which of the following is not a view resolver?",
      "options": [
        "BeanNameViewResolver",
        "VelocityViewResolver",
        "JasperReportsViewResolver",
        "UrlBasedViewResolver",
        "Resour Resource BundleViewResolver",
        "None of above"
      ],
      "correct": 2
    },
    {
      "q": "Spring-WS provides various abstract endpoint classes for you to process the request.",
      "options": [
        "org.springframework.ws.server.endpoint",
        "org.springframework.ws.server",
        "org.springframework.*",
        "none of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which method is used to gracefully shutdown all the bean processes after closing the spring container?",
      "options": [
        "shutdownHook",
        "destory method",
        "none of the mentioned",
        "all of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which one is the default scope of the beans?",
      "options": [
        "Prototype",
        "Session",
        "Request",
        "Singleton"
      ],
      "correct": 3
    },
    {
      "q": "Declaring bean form object properties can be done using:-",
      "options": [
        "PropertyPathFactoryBean",
        "util:constant",
        "None of the mentioned",
        "All of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Spring Web MVC (and in Spring in general) is the \"Open for extension, closed for modification\"",
      "options": [
        "principle.The reason that this principle is being mentioned here is because a number of methods in the core",
        "classes in Spring Web MVC are marked final.",
        "true",
        "false"
      ],
      "correct": 2
    },
    {
      "q": "How the Spring DispatcherServlet supports for returning the last-modification-date, as specified by the\nServlet API ?",
      "options": [
        "By implementing the LastModified interface",
        "By implementing the LastSessionModified interface",
        "By implementing the LastDateModified interface",
        "By implementing the LastModifiedDate interface"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is advice supported by Aspect Annotation?",
      "options": [
        "@Before B. @After C. @AfterReturning",
        "All of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "Which advice is executed only when joint point returns or throws an exception?",
      "options": [
        "@Before",
        "@After",
        "@AfterReturning",
        "@AfterThrowing"
      ],
      "correct": 2
    },
    {
      "q": "How to inject Spring bean into domain objcts",
      "options": [
        "AOP",
        "XML C. AspectJ",
        "Java Based"
      ],
      "correct": 2
    },
    {
      "q": "Method used to process bean before initialization callback",
      "options": [
        "scope",
        "postProcessAfterInitialization()",
        "postProcessBeforeInitialization()",
        "itís own constructor"
      ],
      "correct": 2
    },
    {
      "q": "Which attribute is used to set the scope of the bean?",
      "options": [
        "setScope",
        "scope",
        "getScope",
        "none of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "Which attribute is used to specify classname of the bean?",
      "options": [
        "name",
        "id",
        "class",
        "constructor-args"
      ],
      "correct": 2
    },
    {
      "q": "Class used to have full access to the Spring contextís life cycle machinery and dependency injection.",
      "options": [
        "DelegatingFilterProxy",
        "WebApplicationContextUtils.getRequiredWeb()",
        "WebApplicationUtils.getRequiredWebApplicationContext()",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Element used to specify access attributes for beanís methods.",
      "options": [
        "security:protect",
        "security:intercept",
        "security:intercept-security",
        "none of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Stated related to Spring Web flows",
      "options": [
        "view",
        "action",
        "decision",
        "all of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": "To enable Spring security for web flows.",
      "options": [
        "SecurityFlowExecutionListener",
        "SecurityFlowExecution",
        "FlowSecurity",
        "SecurityFlowListener"
      ],
      "correct": 0
    },
    {
      "q": "How could you externalize constants from a Spring configuration file or a Spring annotation into a",
      "options": [
        ".properties file? Select one or more",
        "By using the <context:property-placeholder /> tag",
        "By using the <util:constant /> tag",
        "By declaring the ConstantPlaceholderConfigurer bean post processor",
        "By using the c: namespace"
      ],
      "correct": 0
    },
    {
      "q": "To validate Java beans in a web application using annotations.",
      "options": [
        "XML",
        "Java Based",
        "JAR-303 standard",
        "All of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": "Spring MVC supports generating Excel files using which of the following libraries.",
      "options": [
        "Apache POI library",
        "JExcelAPI library",
        "All of the mentioned",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Interface for Dispatcher Servlet to auto detect view resolver beans.",
      "options": [
        "localeResolver",
        "tiles",
        "ViewResolver",
        "none of the mentioned."
      ],
      "correct": 2
    },
    {
      "q": "By default, XmlViewResolver loads view beans from /WEB-INF/views.xml which is final.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Annotation which allows a controllerís field to be assigned using Spring Expression Language(SpEL)",
      "options": [
        "@Value",
        "@After",
        "@Default",
        "@None"
      ],
      "correct": 0
    },
    {
      "q": "To publish a REST service with Spring.",
      "options": [
        "publishing an applications data as a REST service",
        "accessing data from third-party REST services",
        "none of the mentioned",
        "all of the mentioned"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "Publishing an applicationís data as a REST service requires.",
      "options": [
        "@RequestMapping",
        "@PathVariable",
        "All of the mentioned",
        "None of the mentioned"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "Annotation added as an input parameter to the handler method.",
      "options": [
        "@PathVariable",
        "@Path",
        "@PathLocale",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements is true regarding the @ResponseStatus annotation?\n@ResponseStatus is detected on nested exceptions",
      "options": [
        "The ExceptionHandlerExceptionResolver uses the @ResponseStatus annotation to map exception to HTTP",
        "status code",
        "A controller handler is annotated with the @ResponseStatus, the response status set by RedirectView takes",
        "precedence over the annotation value.",
        "The @ResponseStatus annotation can go on a @RequestMapping method or a @RestController class or a",
        "business exception class."
      ],
      "correct": 0
    },
    {
      "q": "Default localeResolver used by Spring.",
      "options": [
        "AcceptHeaderLocale",
        "AcceptHeader",
        "AcceptHeaderLocaleResolver",
        "AcceptLocaleResolver"
      ],
      "correct": 2
    },
    {
      "q": "How to auto-inject into a field a Spring bean by its name? Select one or more answer choices.",
      "options": [
        "By using both the @Autowired and the @Qualifier Spring annotations",
        "By using the @Autowired annotation and naming the field with the bean name",
        "With the name attribute of the @Autowired annoton",
        "By using the single @Qualifier annotation"
      ],
      "correct": 0
    },
    {
      "q": "Considering 2 classes AccountServiceImpl and ClientServiceImpl. Any of these 2 classes inherits from each\nother. What is the result of the following pointcut expression?",
      "options": [
        "execution(* *..AccountServiceImpl.update(..))",
        "&& execution(* *..ClientServiceImpl.update(..))",
        "No joint point is defined",
        "Matches public update methods of the 2 classes, whatever the arguments",
        "Matches any update methods of the 2 classes, whatever the arguments and method visibility",
        "Matches any update methods of the 2 classes, with one more arguments and whatever method visibility"
      ],
      "correct": 0
    },
    {
      "q": "Select the right statement about referring a Spring configuration file inside the package\ncom.example.myapp in the below example?",
      "options": [
        "ApplicationContext context = new",
        "ClassPathXmlApplicationContext(\"classpath:/com.example.myapp.config.xml\");",
        "all of the above",
        "The classpath: prefix could be omitted",
        "Package name using the dot character is not well formatted",
        "The slash character preceding com.example could be omit"
      ],
      "correct": 0
    },
    {
      "q": "Using the Spring AOP framework, what is the visibility of the method matches by the following join point?\n@Pointcut(\"execution(* *(..))\")\nprivate void anyOperation() {};\nPublic methods",
      "options": [
        "All methods, whereas their visibility",
        "All methods, except private method",
        "Protected and public methods"
      ],
      "correct": 0
    },
    {
      "q": "What the name of the bean defined in the following configuration class? Select a single answer.\n@Configuration\npublic class ApplicationConfig {\n@Autowired\nprivate DataSource dataSource;\n@Bean\nClientRepository clientRepository() {\nClientRepository accountRepository = new JpaClientRepository();\naccountRepository.setDataSource(dataSource);\nreturn accountRepository;\n}\n}",
      "options": [
        "clientRepository",
        "JpaClientRepository",
        "jpaClientRepository",
        "Two beans are defined: a data souce and a repository"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is true regarding the below Spring controller?\n@RestController\npublic class OwnerController {\n@RequestMapping(value = \"/owner/{ownerId}\", method = RequestMethod.POST)\n@ResponseBody\npublic Owner findOwner(@PathVariable(\"ownerId\") int ownerId) {\nreturn new Owner();\n}\n}",
      "options": [
        "RequestMethod.GET method is more accurate than POST",
        "@ResponseBody could be removed",
        "@PathVariable should be replaced with the @PathParam annotation",
        "Returning the 201 HTTP status code is better"
      ],
      "correct": 0
    },
    {
      "q": "What is an advice? Select a unique answer.",
      "options": [
        "An action taken by an aspect at a particular join point",
        "A point during the execution of a program",
        "An aspect and a pointcut",
        "A predicate that matches join points"
      ],
      "correct": 0
    },
    {
      "q": "What is the easiest method to write a unit test?",
      "options": [
        "@RequestMapping(\"/displayAccount\")\nString displayAccount(@RequestParam(\"accountId\") int id, Model model)",
        "void displayAccount(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException",
        "void displayAccount(HttpServletRequest req, HttpSession Session) throws ServletException, IOException",
        "@RequestMapping(\"/displayAccount\")\nString displayAccount(@PathVariable(\"accountId\") int id, Model model)"
      ],
      "correct": 0
    },
    {
      "q": "Select methodís signatures that match with the following pointcut:",
      "options": [
        "execution(* com.test.service..*.*(*))",
        "void com.test.service.MyServiceImpl#transfert(Money amount)",
        "void com.test.service.account.MyServiceImpl#transfert(Money amount)",
        "void com.test.service.MyServiceImpl#transfert(Account account, Money amount)",
        "void com.test.service.account.MyServiceImpl#transfert(Account account, Money amount)",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "q": "Given the Spring configuration file, which are the correct statements?\n<bean class=\"com.spring.service.BankServiceImpl\"\np:bankName=\"NationalBank\">\n</bean>",
      "options": [
        "The p namespace has to be declared",
        "NationalBank is a scalar value",
        "Bean id is bankServiceImpl",
        "The BankServiceImpl references a NationalBank bean"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "Given the following configuration class, what are the correct affirmations? Select one or more answers.\npublic class ApplicationConfig {\nprivate DataSource dataSource;\n@Autowired\npublic ApplicationConfig(DataSource dataSource) {\nthis.dataSource = dataSource;\n}\n@Bean(name=\"clientRepository\")\nClientRepository jpaClientRepository() {\nreturn new JpaClientRepository();\n}\n}",
      "options": [
        "Configuration annotation is missing",
        "Default or no-arg constructor is missing",
        "@Bean name is ambiguous",
        "@Bean scope is prototype"
      ],
      "correct": 0
    },
    {
      "q": "Using JdbcTemplate, what is the Spring provided class you will use for result set parsing and merging",
      "options": [
        "rows into a single object? Select a unique answer.",
        "ResultSetExtractor",
        "RowMapper",
        "RowCallbackHandler",
        "ResultSetMapper"
      ],
      "correct": 0
    },
    {
      "q": "ActionSupport class provides a method to access springís application context.",
      "options": [
        "getWebApplicationContext()",
        "getWebApplication()",
        "getApplicationContext()",
        "contextEventListener()"
      ],
      "correct": 0
    },
    {
      "q": "XML element to specify the property values for scripting bean",
      "options": [
        "lang:property",
        "bean:property",
        "script:property",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Is the following pointcut expression correct?",
      "options": [
        "execution(* ArithmeticCalculator.*(..))",
        "Yes",
        "No",
        "If every target class is in same package",
        "Depends where target class is located"
      ],
      "correct": 2
    },
    {
      "q": "What are the different types of AutoProxying?",
      "options": [
        "BeanNameAutoProxyCreator",
        "DefaultAdvisorAutoProxyCreator",
        "Metadata autoproxying",
        "All of the above",
        "none of the above"
      ],
      "correct": 3
    },
    {
      "q": "What are the various editors used in spring work?",
      "options": [
        "PropertyEditor ,URLEditor",
        "ClassEditor, CustomDateEditor, StringTrimmerEditor",
        "FileEditor, LocaleEditor, StringArrayPropertyEditor",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "1. How to use <ref> in spring framework?",
      "options": [
        "<ref> is used with bean id.",
        "<ref> is used with string values."
      ],
      "correct": 0
    },
    {
      "q": "How to define Inner bean in spring?",
      "options": [
        "Use <property/> only",
        "Use <property/> or <constructor-arg/>."
      ],
      "correct": 1
    },
    {
      "q": "By default a bean is eagerly initialized in spring?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "By default a bean is not autowired?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What is the scope of statefull bean in spring?",
      "options": [
        "Singleton scope",
        "Prototype scope"
      ],
      "correct": 1
    },
    {
      "q": "In which spring scope is a single bean instance created per IoC container?",
      "options": [
        "Singleton scope",
        "Request scope"
      ],
      "correct": 0
    },
    {
      "q": "In which spring scope can any number of instances of bean be created?",
      "options": [
        "Request scope",
        "Prototype scope"
      ],
      "correct": 1
    },
    {
      "q": "When a bean has scope limited to only HTTP request, that is called",
      "options": [
        "Request scope",
        "Session scope"
      ],
      "correct": 0
    },
    {
      "q": "When a bean has scope limited to HTTP session, that is called",
      "options": [
        "Request scope",
        "Session scope"
      ],
      "correct": 1
    },
    {
      "q": "Thread scope bean has been introduced in spring from the version",
      "options": [
        "Spring 2.5",
        "Spring 3.0"
      ],
      "correct": 1
    },
    {
      "q": "InitializingBean and DisposableBean is used to customize the nature of bean in spring.",
      "options": [
        "Yes",
        "No"
      ],
      "correct": 0
    },
    {
      "q": "How to shutdown the Spring IoC container gracefully in non-web applications?",
      "options": [
        "Using shutdownNow()",
        "registerShutdownHook()"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is correct about dependency injection?",
      "options": [
        "A - It helps in decoupling application objects from each other.",
        "B - It helps in deciding the dependencies of objects.",
        "C - It stores objects states in database.",
        "D - It stores object states in file system."
      ],
      "correct": 0
    },
    {
      "q": "Which are the correct implementation classes of ApplicationContext?",
      "options": [
        "A - FileSystemXmlApplicationContext, ClassPathXmlApplicationContext, WebXmlApplicationContext",
        "B - FileSystemApplicationContext, ClassPathApplicationContext, WebApplicationContext",
        "C - AdvancedApplicationContext, FileApplicationContext",
        "D - FileSystemApplicationContext, ClassPathApplicationContext"
      ],
      "correct": 0
    },
    {
      "q": "What is Spring MVC framework?",
      "options": [
        "Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",
        "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",
        "Spring MVC framework is used for Transaction management for Web Applications.",
        "Spring MVC framework is used for AOP for Web Applications."
      ],
      "correct": 1
    },
    {
      "q": "How to reload my changes on Spring Boot without having to restart server?",
      "options": [
        "<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-devtools</artifactId>\n<optional>true</optional>\n</dependency>",
        "<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-test</artifactId>\n<optional>true</optional>\n</dependency>",
        "<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-web</artifactId>\n<optional>true</optional>\n</dependency>",
        "<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-jasper</artifactId>\n<optional>true</optional>\n</dependency>"
      ],
      "correct": 0
    },
    {
      "q": "Annotation to add security to your spring boot app?",
      "options": [
        "@EnableWebSecurity",
        "@EnableSecurity",
        "@EnableSpringSecurity"
      ],
      "correct": 0
    },
    {
      "q": "What are the different implementations of Spring AOP ?",
      "options": [
        "AspectJ",
        "Spring AOP",
        "JBoss AOP",
        "All",
        "None"
      ],
      "correct": 3
    },
    {
      "q": "How Spring Batch works?",
      "options": [
        "step, ItemReader, ItemProcessor, ItemStreamWriter",
        "step, ItemProcessor, ItemStreamWriter",
        "step, ItemReader, ItemStreamWriter"
      ],
      "correct": 0
    },
    {
      "q": "LoggerInterceptor which implements the HandlerInterceptor.The LoggerInterceptor will override the\nwhich following methods",
      "options": [
        "preHandlerBean(), postHandlerBean(), afterCompletion()",
        "PreProcessHandler(), PostProcessHandler(), afterCompletion()",
        "PreHandler(), PostHandler(), afterCompletion()",
        "none"
      ],
      "correct": 2
    },
    {
      "q": "LoggerInterceptor which implements the HandlerInterceptor.The LoggerInterceptor\nwill override the which following methods",
      "options": [
        "preHandlerBean(), postHandlerBean(), afterCompletion()",
        "PreProcessHandler(), PostProcessHandler(), afterCompletion()",
        "PreHandler(), PostHandler(), afterCompletion()",
        "none"
      ],
      "correct": 2
    },
    {
      "q": "Which Annotation is used to refer to Pointcuts",
      "options": [
        "@PointCut.",
        "@PointCutExecution.",
        "@PointCutBefore."
      ],
      "correct": 0
    },
    {
      "q": "Which element is used to restrict the access to a particular URL within Spring",
      "options": [
        "restrict-url",
        "intercept-url",
        "intercept-restrict."
      ],
      "correct": 1
    },
    {
      "q": "Which annotation is used to create Primary KEY :",
      "options": [
        "ForeignKey.",
        "ii. JoinedKey.",
        "iii. JoinColumn.",
        "ANS: C"
      ],
      "correct": 2
    },
    {
      "q": "You can only use Hibernate in ORM in Spring Boot Applications.",
      "options": [
        "TRUE",
        "FALSE"
      ],
      "correct": 1
    },
    {
      "q": "What is default scope of bean in Spring framework?",
      "options": [
        "singleton",
        "prototype",
        "request",
        "session"
      ],
      "correct": 0
    },
    {
      "q": "Which endpoints are provided by Spring Boot to monitor metrics of individual",
      "options": [
        "microservices? /actuator /health",
        "/actuator",
        "/rest",
        "/logger",
        "/health"
      ],
      "correct": 0
    },
    {
      "q": "REST service endpoint comprises of which address? Starts with http:// and may end",
      "options": [
        "with?",
        "Starts with http:// and may end with?",
        "No certain URL is specified",
        "Depends upon the platform used"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following stands true for Spring beans?",
      "options": [
        "Spring beans are managed by the Spring IoC container.",
        "Spring beans are instantiated, assembled, and otherwise managed by a Spring",
        "Spring beans are simple POJOs."
      ],
      "correct": [
        0,
        1,
        2
      ],
      "note": "answer was 'All of the above' -> marked all options correct"
    },
    {
      "q": "The __ attribute of a React form is called when the main action button inside the",
      "options": [
        "form is pressed.",
        "onSubmit",
        "onChange",
        "onComplete"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Using JdbcTemplate, what is the Spring provided class you will use for result set parsing and merging rows into a single object?",
      "options": [
        "ResultSetExtractor",
        "RowMapper",
        "RowCallbackHandler",
        "ResultSetMapper"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which of the following classes can be used to call Stored Procedures in spring?",
      "options": [
        "A - SPHelper",
        "B - JdbcTemplateCall",
        "C - JdbcTemplate",
        "D - SimpleJdbcCall"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "What are the advices in Aop?",
      "options": [
        "After",
        "before",
        "AfterReturning",
        "ALL of the above"
      ],
      "correct": 3
    },
    {
      "q": "Changing Text size in CSS?",
      "options": [
        "font-size",
        "font-style",
        "text-style",
        "text-format"
      ],
      "correct": 0
    },
    {
      "q": "Below compilation option create smaller in size and faster in performance angular distributed package",
      "options": [
        "JIT",
        "AOT"
      ],
      "correct": 1
    },
    {
      "q": "Which of the below API Calls provides you the security information ? 1) HttpServletRequest.isUserinRole() 2) HttpServletRequest.getUserPrincipal()",
      "options": [
        "Only 1",
        "Only 2",
        "Both i and ii"
      ],
      "correct": 2
    },
    {
      "q": "Spring Boot: What does @SpringBootApplication include?",
      "options": [
        "@Configuration, @EnableAutoConfiguration, @ComponentScan",
        "@RestController, @EnableWebMvc",
        "@Repository, @Transactional",
        "@Autowired, @Qualifier"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Spring Boot: Which dependency enables REST APIs?",
      "options": [
        "spring-boot-starter-web",
        "spring-boot-starter-data-jpa",
        "spring-boot-starter-security",
        "spring-boot-starter-test"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Spring: What is Dependency Injection?",
      "options": [
        "Creating objects manually",
        "Injecting dependencies into objects",
        "Managing database connections",
        "Handling HTTP requests"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Spring Boot: How do you externalize configuration?",
      "options": [
        "Using application.properties",
        "Using @Configuration",
        "Using @Bean",
        "Using @Autowired"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Spring: Which annotation maps HTTP GET requests?",
      "options": [
        "@PostMapping",
        "@GetMapping",
        "@RequestMapping",
        "@PutMapping"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Spring Boot: What is the default embedded server?",
      "options": [
        "Jetty",
        "Tomcat",
        "Undertow",
        "Netty"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Spring: What does @Transactional do?",
      "options": [
        "Manages database transactions",
        "Configures REST endpoints",
        "Injects dependencies",
        "Scans components"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Which element is used to restrict the access to a particular URL within Spring Security ?",
      "options": [
        "restrict-url",
        "intercept-url",
        "intercept-restrict."
      ],
      "correct": 1
    },
    {
      "q": "REST service endpoint comprises of which address? Starts with http:// and may end with?",
      "options": [
        "Starts with http:// and may end with?",
        "No certain URL is specified",
        "Depends upon the platform used"
      ],
      "correct": 0
    },
    {
      "q": "Spring Web MVC (and in Spring in general) is the \"Open for extension, closed for modification\" principle.The reason that this principle is being mentioned here is because a number of methods in the core classes in Spring Web MVC are marked final.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Shutdown of IOC containers - Using registerShutDownHook 2. <list> - wiring values and allows duplicates 3. Log4J parlance each package name - logger 4. Hibernate uses HibernateException and Jpa uses Persistence Exception - True 5. Unit test is used to validate single domain class - True 6. Lifecycle of JPA - all of the above 7. Bean pattern names is used only in XML based where as it is not used in AspectJ based - True 8. call stored procedures - simpleJDBCCall 9. You indicate a class selector with",
      "options": [
        "the hash (#) symboL",
        "the dot (.)",
        "the tag"
      ],
      "correct": 1
    },
    {
      "q": "What is advice? Select a unique answer.",
      "options": [
        "An action taken by an aspect at a particular join point",
        "A point during the execution of a program",
        "An aspect and a pointcut",
        "A predicate that matches join points"
      ],
      "correct": 0
    },
    {
      "q": ") ----- is an HTML specification used to add more information to HTML tags.",
      "options": [
        "Macrodata",
        "Microdata",
        "Minidata",
        "Modifydata"
      ],
      "correct": 1
    },
    {
      "q": "Using JdbcTemplate, what is the Spring provided class you will use for result set parsing and merging rows",
      "options": [
        "into a single object? Select a unique answer.",
        "ResultSetExtractor",
        "RowMapper",
        "RowCallbackHandler",
        "ResultSetMapper"
      ],
      "correct": 1
    },
    {
      "q": "Expression Language is part of the Core Container in Spring Framework.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "AOP is part of the Core Container in Spring Framework.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "In which Spring version has Spring Expression Language been supported?",
      "options": [
        "Spring 2.0",
        "Spring 3.0",
        "Spring 4.0",
        "Spring 1.0"
      ],
      "correct": 1
    },
    {
      "q": "Which class represents the IoC container?",
      "options": [
        "BeanFactory",
        "ApplicationContext",
        "IoCContainer",
        "ServletContext"
      ],
      "correct": 1
    },
    {
      "q": "How to get the object of DAO in Spring framework?",
      "options": [
        "Using new keyword",
        "Using Spring Dependency Injection",
        "Using static factory",
        "Using reflection"
      ],
      "correct": 1
    },
    {
      "q": "Which is correct for Spring Framework?",
      "options": [
        "Spring framework is a heavy-weight solution.",
        "Spring framework is a light-weight solution.",
        "Spring only supports XML config.",
        "Spring cannot integrate with other frameworks."
      ],
      "correct": 1
    },
    {
      "q": "In which Spring version were Java 5 features introduced?",
      "options": [
        "Spring 2.0",
        "Spring 3.0",
        "Spring 2.5",
        "Spring 4.0"
      ],
      "correct": 0
    },
    {
      "q": "Can we integrate Spring with Struts?",
      "options": [
        "Yes",
        "No"
      ],
      "correct": 0
    },
    {
      "q": "How to use idref in Spring framework?",
      "options": [
        "With setter method only",
        "With constructor argument only",
        "With setter method and constructor argument both",
        "Cannot be used"
      ],
      "correct": 2
    },
    {
      "q": "Which is part of the Data Access layer in Spring Framework?",
      "options": [
        "JMS",
        "MVC",
        "AOP",
        "Core"
      ],
      "correct": 0
    },
    {
      "q": "How could you externalize constants from a Spring configuration file or annotation into a .properties file?",
      "options": [
        "By using the <context:property-placeholder /> tag",
        "By using the <util:constant /> tag",
        "By declaring the ConstantPlaceholderConfigurer bean post processor",
        "By using the c: namespace"
      ],
      "correct": 0
    },
    {
      "q": "To validate Java beans in a web application using annotations, which standard is used?",
      "options": [
        "XML",
        "Java Based",
        "JSR-303 standard",
        "All of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation is used to indicate a field has to have a minimum of 2 characters?",
      "options": [
        "@NotNull",
        "@Size",
        "@MaxSize",
        "@size"
      ],
      "correct": 1
    },
    {
      "q": "Interface for DispatcherServlet to auto detect view resolver beans:",
      "options": [
        "localeResolver",
        "tiles",
        "ViewResolver",
        "none of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Which views cannot be resolved by InternalResourceViewResolver?",
      "options": [
        "redirect",
        "redirect:prefix",
        "redirect:suffix",
        "all of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "Which annotation allows a controller's field to be assigned using Spring Expression Language (SpEL)?",
      "options": [
        "@Value",
        "@After",
        "@Default",
        "@None"
      ],
      "correct": 0
    },
    {
      "q": "SpEL statements are recognizable by a notation in the form:",
      "options": [
        "\"{ SpEL }\"",
        "\"#{ SpEL statement }\"",
        "\"${ SpEL }\"",
        "\"@{ SpEL }\""
      ],
      "correct": 1
    },
    {
      "q": "Publishing an application's data as a REST service with Spring requires:",
      "options": [
        "@RequestMapping",
        "@PathVariable",
        "All of the mentioned",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation is added as an input parameter to the handler method to bind a URL path segment?",
      "options": [
        "@PathVariable",
        "@Path",
        "@PathLocale",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "What is the default localeResolver used by Spring?",
      "options": [
        "AcceptHeaderLocale",
        "AcceptHeader",
        "AcceptHeaderLocaleResolver",
        "AcceptLocaleResolver"
      ],
      "correct": 2
    },
    {
      "q": "Which is an alternative way to resolve locales?",
      "options": [
        "AcceptHeaderLocale",
        "AcceptHeader",
        "AcceptHeaderLocaleResolver",
        "SessionLocaleResolver"
      ],
      "correct": 3
    },
    {
      "q": "General-purpose class that allows a response to be rendered using a marshaller:",
      "options": [
        "MarshallingView",
        "Marshaling",
        "View",
        "All of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation allows the Jaxb2Marshaller marshaller to detect a class's fields?",
      "options": [
        "@XmlRootElement",
        "@XmlRoot",
        "@NotNull",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "How to auto-inject into a field a Spring bean by its name?",
      "options": [
        "By using both the @Autowired and the @Qualifier Spring annotations",
        "By using the @Autowired annotation and naming the field with the bean name",
        "With the name attribute of the @Autowired annotation",
        "By using the single @Qualifier annotation"
      ],
      "correct": 0
    },
    {
      "q": "What is advice (in AOP)?",
      "options": [
        "An action taken by an aspect at a particular join point",
        "A point during the execution of a program",
        "An aspect and a pointcut",
        "A predicate that matches join points"
      ],
      "correct": 0
    },
    {
      "q": "What is the easiest method to write a unit test for a controller handler?",
      "options": [
        "@RequestMapping(\"/displayAccount\") String displayAccount(@RequestParam(\"accountId\") int id, Model model)",
        "void displayAccount(HttpServletRequest req, HttpServletResponse resp)",
        "void displayAccount(HttpServletRequest req, HttpSession Session)",
        "@RequestMapping(\"/displayAccount\") String displayAccount(@PathVariable(\"accountId\") int id, Model model)"
      ],
      "correct": 0
    },
    {
      "q": "Using JdbcTemplate, which Spring provided class is used for result set parsing and merging rows into a single object?",
      "options": [
        "ResultSetExtractor",
        "RowMapper",
        "RowCallbackHandler",
        "ResultSetMapper"
      ],
      "correct": 0
    },
    {
      "q": "What is true about <set> collection configuration elements?",
      "options": [
        "This helps in wiring a list of values, allowing duplicates.",
        "This helps in wiring a list of values but without any duplicates.",
        "This can inject a collection of name-value pairs of any type.",
        "This can inject a collection of name-value pairs where name and value are both Strings."
      ],
      "correct": 1
    },
    {
      "q": "What is the constructor mode of autowiring?",
      "options": [
        "Autowiring by property name.",
        "Constructor first, if not works then byType.",
        "Autowiring by property type.",
        "Similar to byType, but applies to constructor arguments; fatal error if not exactly one bean matches."
      ],
      "correct": 3
    },
    {
      "q": "What is true about @Autowired annotation?",
      "options": [
        "Can be used on the setter method.",
        "Provides more fine-grained control over where and how autowiring should be accomplished.",
        "Can be used on methods with arbitrary names and/or multiple arguments.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "What are the different points where weaving can be applied?",
      "options": [
        "Compile time, load time",
        "Compile time, run time",
        "Run time",
        "Compile time, load time, run time"
      ],
      "correct": 3
    },
    {
      "q": "By default a bean is lazily loaded.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What is the scope of a bean in portlet context (unique to portlets)?",
      "options": [
        "session",
        "global-session",
        "prototype",
        "request"
      ],
      "correct": 1
    },
    {
      "q": "Which class can be used to call Stored Procedures in Spring?",
      "options": [
        "SPHelper",
        "JdbcTemplateCall",
        "JdbcTemplate",
        "SimpleJdbcCall"
      ],
      "correct": 3
    },
    {
      "q": "What is a ContextRefreshedEvent event?",
      "options": [
        "Published when the Servlet Context is initialized or refreshed.",
        "Published when the HTTP Request is received.",
        "Published when the HTTP Response is returned.",
        "Published when the ApplicationContext is initialized or refreshed."
      ],
      "correct": 3
    },
    {
      "q": "What is a ContextStartedEvent event?",
      "options": [
        "Published when the Servlet Context is initialized or refreshed.",
        "Published when the HTTP Request is received.",
        "Published when the ApplicationContext is started using the start method on ConfigurableApplicationContext.",
        "Published when the HTTP Response is returned."
      ],
      "correct": 2
    },
    {
      "q": "What is a ContextStoppedEvent event?",
      "options": [
        "Published when the Servlet Context is initialized or refreshed.",
        "Published when the ApplicationContext is stopped using the stop method on ConfigurableApplicationContext.",
        "Published when the HTTP Request is received.",
        "Published when the HTTP Response is returned."
      ],
      "correct": 1
    },
    {
      "q": "What is a ContextClosedEvent event?",
      "options": [
        "Published when the Servlet Context is initialized or refreshed.",
        "Published when the HTTP Request is received.",
        "Published when the HTTP Response is returned.",
        "Published when the ApplicationContext is closed using the close method on ConfigurableApplicationContext."
      ],
      "correct": 3
    },
    {
      "q": "What is an Introduction (in AOP)?",
      "options": [
        "A point where you can plug-in the AOP aspect.",
        "Used to inject values in objects.",
        "Not invoked during program execution by Spring AOP framework.",
        "Allows you to add new methods or attributes to existing classes."
      ],
      "correct": 3
    },
    {
      "q": "What is the @Controller annotation?",
      "options": [
        "Indicates that a particular class serves the role of a controller.",
        "Indicates how to control transaction management.",
        "Indicates how to control dependency injection.",
        "Indicates how to control aspect programming."
      ],
      "correct": 0
    },
    {
      "q": "What is the prototype scope?",
      "options": [
        "Scopes a single bean definition to have any number of object instances.",
        "Single instance per HTTP Request.",
        "Single instance per HTTP Session.",
        "Single instance per HTTP Application/Global session."
      ],
      "correct": 0
    },
    {
      "q": "What is true about <props> collection configuration elements?",
      "options": [
        "Wiring a list of values, allowing duplicates.",
        "Wiring a list of values without duplicates.",
        "Injects a collection of name-value pairs of any type.",
        "Injects a collection of name-value pairs where name and value are both Strings."
      ],
      "correct": 3
    },
    {
      "q": "How to handle shut down of IoC containers?",
      "options": [
        "Using shutdownHook()",
        "Using shutdownHandler()",
        "Using registerHook()",
        "Using registerShutdownHook()"
      ],
      "correct": 3
    },
    {
      "q": "By default a bean is eagerly loaded.",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "q": "What is true about BeanPostProcessor?",
      "options": [
        "It is a concrete class.",
        "It is an interface.",
        "It is an abstract class.",
        "None of the above."
      ],
      "correct": 1
    },
    {
      "q": "How can you inject a Java Collection in Spring?",
      "options": [
        "Using list, set, map or props tag.",
        "Using list, set, map or collection tag.",
        "Using list, set, props or collection tag.",
        "Using list, collection, map or props tag."
      ],
      "correct": 0
    },
    {
      "q": "Which class is used to map a database row to a Java object in Spring?",
      "options": [
        "ResultSet",
        "RowMapper",
        "RowSetMapper",
        "ResultSetMapper"
      ],
      "correct": 1
    },
    {
      "q": "How can the bean life cycle be controlled?",
      "options": [
        "Using init() only",
        "Using InitializingBean class only",
        "Using DisposableBean class only",
        "Using all of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which ORM does Spring support?",
      "options": [
        "Hibernate",
        "iBatis",
        "JPA",
        "All of the above",
        "None of the above"
      ],
      "correct": 3
    },
    {
      "q": "What is true about <map> collection configuration elements?",
      "options": [
        "Wiring a list of values, allowing duplicates.",
        "Wiring a list of values without duplicates.",
        "Can be used to inject a collection of name-value pairs where name and value can be of any type.",
        "This tag is not supported."
      ],
      "correct": 2
    },
    {
      "q": "Core container has AOP as one of its modules.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Can you inject null and empty string values in Spring?",
      "options": [
        "Yes",
        "No"
      ],
      "correct": 0
    },
    {
      "q": "What stands true for the Spring framework?",
      "options": [
        "Spring framework is a lightweight framework.",
        "Spring framework is a heavyweight framework."
      ],
      "correct": 0
    },
    {
      "q": "Which class acts as IoC Container?",
      "options": [
        "ServletContext",
        "DispatcherServlet",
        "ApplicationContext",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "What is the scope of a stateless bean?",
      "options": [
        "global-session",
        "singleton",
        "prototype",
        "request"
      ],
      "correct": 1
    },
    {
      "q": "Annotations work as metadata for classes and Spring uses annotations as an alternative to XML for declarative configuration. True or false?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which layer is the @Controller annotation used in?",
      "options": [
        "Service layer",
        "Presentation layer",
        "Session layer",
        "Business layer",
        "None of these"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following statements is true?",
      "options": [
        "ApplicationContext extends BeanFactory.",
        "None of these.",
        "ApplicationContext implements BeanFactory.",
        "BeanFactory extends ApplicationContext.",
        "BeanFactory implements ApplicationContext"
      ],
      "correct": 0
    },
    {
      "q": "What is singleton scope?",
      "options": [
        "Scopes the bean definition to a single instance per Spring IoC container.",
        "Single instance per HTTP Request.",
        "Single instance per HTTP Session.",
        "Single instance per HTTP Application/Global session."
      ],
      "correct": 0
    },
    {
      "q": "What is request scope?",
      "options": [
        "Scopes a bean definition to an HTTP request.",
        "Scopes the bean definition to Spring IoC container.",
        "Scopes the bean definition to HTTP Session.",
        "Scopes the bean definition to HTTP Application/Global session."
      ],
      "correct": 0
    },
    {
      "q": "What is session scope?",
      "options": [
        "Scopes a bean definition to an HTTP session.",
        "Scopes the bean definition to Spring IoC container.",
        "Scopes the bean definition to HTTP request.",
        "Scopes the bean definition to HTTP Application/Global session."
      ],
      "correct": 0
    },
    {
      "q": "What is global-session scope?",
      "options": [
        "Scopes a bean definition to an HTTP Application/Global session.",
        "Scopes the bean definition to Spring IoC container.",
        "Scopes the bean definition to HTTP request.",
        "Scopes the bean definition to HTTP Session."
      ],
      "correct": 0
    },
    {
      "q": "What is the Join point (AOP)?",
      "options": [
        "A point that joins two objects.",
        "A point in your object where you join values.",
        "A point in your object where you join injected values.",
        "A point in your application where you can plug-in the AOP aspect."
      ],
      "correct": 3
    },
    {
      "q": "What is a Pointcut?",
      "options": [
        "A point in your application where you can plug-in the AOP aspect.",
        "A set of one or more join points where an advice should be executed.",
        "Used to inject values in objects.",
        "Invoked during program execution by Spring AOP framework."
      ],
      "correct": 1
    },
    {
      "q": "What is the Target object (AOP)?",
      "options": [
        "An object in your application where you can plug-in AOP aspect.",
        "The object being advised by one or more aspects; always a proxy object, also referred to as the advised object.",
        "Used to inject values in objects.",
        "Not invoked during program execution by Spring AOP framework."
      ],
      "correct": 1
    },
    {
      "q": "What is Weaving?",
      "options": [
        "The process of injecting values in objects to create an advised object.",
        "The process of linking aspects with other application types or objects to create an advised object.",
        "Used to inject values in objects.",
        "Used to check object dependencies."
      ],
      "correct": 1
    },
    {
      "q": "Which aspect implementations does Spring support?",
      "options": [
        "XML Schema based aspect implementation",
        "@AspectJ based aspect implementation",
        "Both of the above.",
        "None of the above."
      ],
      "correct": 2
    },
    {
      "q": "What types of transaction management does Spring support?",
      "options": [
        "Programmatic transaction management",
        "Declarative transaction management",
        "Both of the above.",
        "None of the above."
      ],
      "correct": 2
    },
    {
      "q": "What is a DispatcherServlet?",
      "options": [
        "Used for transaction management.",
        "Used for AOP.",
        "Handles all the HTTP requests and responses.",
        "Used for Dependency injection."
      ],
      "correct": 2
    },
    {
      "q": "What is ACID in transactional management?",
      "options": [
        "Accurate, Controlled, Isolation, Durability",
        "Atomicity, Consistency, Independent, Done",
        "Atomicity, Consistency, Isolation, Durability",
        "Accurate, Controlled, Independent, Done"
      ],
      "correct": 2
    },
    {
      "q": "Where do you define DispatcherServlet?",
      "options": [
        "In Beans configuration file.",
        "Web.xml file",
        "Meta-inf/dispatcher.xml",
        "Web-inf/dispatcher.xml"
      ],
      "correct": 1
    },
    {
      "q": "What does BeanPostProcessor do?",
      "options": [
        "Processes beans once a bean is initialized.",
        "Defines callback methods you can implement to provide your own instantiation logic, dependency-resolution logic etc.",
        "Processes beans once a bean is loaded.",
        "Processes beans once a bean exits."
      ],
      "correct": 1
    },
    {
      "q": "Can a bean be configured to have an inner bean?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Can we inject value and ref both together in a bean?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which class can be extended to create custom events in Spring?",
      "options": [
        "SpringEvent",
        "Event",
        "ApplicationEvent",
        "None of above"
      ],
      "correct": 2
    },
    {
      "q": "Which is the correct assertion about Spring?",
      "options": [
        "Enables developers to develop enterprise-class applications using POJOs.",
        "Is organized in a modular fashion.",
        "Testing is simple because environment-dependent code is moved into the framework.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "What does AOP stand for?",
      "options": [
        "Aspect Oriented Programming",
        "Any Object Programming",
        "Asset Oriented Programming",
        "Asset Oriented Protocol"
      ],
      "correct": 0
    },
    {
      "q": "What is true about cross-cutting concerns?",
      "options": [
        "Functions that span multiple points of an application.",
        "Conceptually separate from the application's business logic.",
        "Logging is an example.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "Which are the modules of the core container?",
      "options": [
        "Beans, Core, Context, SpEL",
        "Core, Context, ORM, Web",
        "Core, Context, Aspects, Test",
        "Bean, Core, Context, Test"
      ],
      "correct": 0
    },
    {
      "q": "Which are the modules of the Data Access/Integration layer?",
      "options": [
        "JDBC, ORM, OXM, JMS, Transactions",
        "JDBC, ORM, OXM, JMS",
        "JDBC, ORM, Web, Beans",
        "JDBC, ORM, OXM, JMS (dup)"
      ],
      "correct": 0
    },
    {
      "q": "Which are the modules of the Web layer?",
      "options": [
        "WebSocket, Servlet, Web, Portlet",
        "WebSocket, Servlet, Web-MVC, Web",
        "HTML, JSP, Web, Portlet",
        "HTML, Servlet, Web, Portlet"
      ],
      "correct": 0
    },
    {
      "q": "What types of Dependency Injection does Spring support?",
      "options": [
        "Constructor based, Setter based",
        "Constructor based, Setter based, Getter Based",
        "Setter based, Getter based, Properties based",
        "Constructor based, Setter based, Properties based"
      ],
      "correct": 0
    },
    {
      "q": "Which are the IoC containers in Spring?",
      "options": [
        "BeanFactory, ApplicationContext",
        "BeanFactory, ApplicationContext, IocContextFactory",
        "BeanFactory, BeanContext, IocContextFactory",
        "BeanFactory, ApplicationContext, BeanContext"
      ],
      "correct": 0
    },
    {
      "q": "Which is the way to provide configuration metadata to Spring?",
      "options": [
        "XML Based configuration file.",
        "Annotation based configuration.",
        "Java based configuration.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "What is bean scope?",
      "options": [
        "Forces Spring to produce a new bean instance as per the scope defined.",
        "Defines the accessibility of bean in a Java class.",
        "Defines the accessibility of bean in a Java package.",
        "Defines the accessibility of bean in a web application."
      ],
      "correct": 0
    },
    {
      "q": "What is 'no' mode of autowiring?",
      "options": [
        "Default setting: no autowiring, use explicit bean reference.",
        "Autowiring by property name.",
        "Constructor first, then byType.",
        "Similar to byType but applies to constructor arguments."
      ],
      "correct": 0
    },
    {
      "q": "What is byName mode of autowiring?",
      "options": [
        "Default: no autowiring.",
        "Autowiring by property name.",
        "Constructor first, then byType.",
        "Similar to byType, applies to constructor arguments."
      ],
      "correct": 1
    },
    {
      "q": "What is byType mode of autowiring?",
      "options": [
        "Default: no autowiring.",
        "Autowiring by property name.",
        "Constructor first, then byType.",
        "Autowiring by property type - matches exactly one bean by type."
      ],
      "correct": 3
    },
    {
      "q": "What is autodetect mode of autowiring?",
      "options": [
        "Similar to byType applied to constructor arguments, fatal error if not exactly one match.",
        "Autowiring by property name.",
        "Spring first tries constructor, if not works then byType.",
        "Autowiring by property type."
      ],
      "correct": 2
    },
    {
      "q": "Which is the correct implementation class of BeanFactory?",
      "options": [
        "XmlBeanFactory",
        "ClassPathBeanFactory",
        "FileSystemBeanFactory",
        "AdvancedBeanFactory"
      ],
      "correct": 0
    },
    {
      "q": "What does the @Required annotation mean?",
      "options": [
        "Bean property must be populated by the user.",
        "Bean property is required while saving to the database.",
        "The affected bean property must be populated at configuration time, through explicit value or autowiring.",
        "Required while serializing the bean."
      ],
      "correct": 2
    },
    {
      "q": "What is the aspect (AOP)?",
      "options": [
        "A way to do dependency injection.",
        "A module which has a set of APIs providing cross-cutting requirements.",
        "Used to log information about applications.",
        "Represents properties of a Spring based application."
      ],
      "correct": 1
    },
    {
      "q": "Which of these operations instructs the IoC container to create a bean instance?",
      "options": [
        "The initialization method",
        "The destruction method",
        "The lazy-initialization mode",
        "The auto-wiring mode",
        "None of the above"
      ],
      "correct": 4
    },
    {
      "q": "Which interface in Spring MVC ensures that implementation is detected?",
      "options": [
        "WebApplicationInitializer",
        "WebInitializer",
        "XmlWebApplicationContext",
        "AbstractAnnotationConfigDispatcherServletInitializer",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "q": "The getModelMap() method of ModelAndView returns a(n) __________ instance.",
      "options": [
        "Empty",
        "Http",
        "ModelMap",
        "Map"
      ],
      "correct": 2
    },
    {
      "q": "What is an after-returning advice?",
      "options": [
        "Advice executed after a join point completes without throwing an exception",
        "Advice executed before a join point",
        "Advice executed regardless of exception",
        "Advice executed only on exception"
      ],
      "correct": 0
    },
    {
      "q": "Using Spring AOP, what is the visibility of the method matched by @Pointcut(\"execution(* *(..))\") private void anyOperation(){}?",
      "options": [
        "Public methods",
        "All methods, whatever their visibility",
        "All methods except private",
        "Protected and public methods"
      ],
      "correct": 0
    },
    {
      "q": "Which statement about AOP proxy is correct?",
      "options": [
        "AOP proxies are created by Spring in order to implement the aspect contracts.",
        "AOP proxy is created manually by the developer.",
        "AOP proxies cannot use CGLIB.",
        "AOP proxies are only used for final classes."
      ],
      "correct": 0
    },
    {
      "q": "How does before advice work?",
      "options": [
        "Run advice before a class loads.",
        "Run advice before a method execution.",
        "Run advice before http response is returned.",
        "Run advice before http request is processed."
      ],
      "correct": 1
    },
    {
      "q": "How does after-returning advice work?",
      "options": [
        "Run advice after a class loads if it loads successfully.",
        "Run advice after a method execution only if the method completes successfully.",
        "Run advice after http response is returned only if success.",
        "Run advice after http request is processed with no exception."
      ],
      "correct": 1
    },
    {
      "q": "How does after-throwing advice work?",
      "options": [
        "Run advice after a method execution only if the method exits by throwing an exception.",
        "Run advice after a class loads only if it throws an exception during load time.",
        "Run advice after http response is returned with error status.",
        "Run advice after http request is processed and an exception occurred."
      ],
      "correct": 0
    },
    {
      "q": "How does around advice work?",
      "options": [
        "Run advice before and after the advised method is invoked.",
        "Run advice before and after a class is loaded.",
        "Run advice before and after http response is returned.",
        "Run advice before and after http request is processed."
      ],
      "correct": 0
    },
    {
      "q": "How many types of Dynamic proxy are available in Spring?",
      "options": [
        "one",
        "two",
        "three",
        "four"
      ],
      "correct": 1
    },
    {
      "q": "What is the Type of Proxy in Spring Framework?",
      "options": [
        "one",
        "two",
        "three",
        "four"
      ],
      "correct": 1
    },
    {
      "q": "How many types of injection methods are there in Spring?",
      "options": [
        "one",
        "two",
        "three",
        "four"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is not a valid difference between @Inject and @Autowired annotations?",
      "options": [
        "There is no difference and both can be used interchangeably.",
        "@Autowired is a legacy annotation whereas @Inject is its latest version.",
        "@Inject is part of Java EE's CDI framework while @Autowired is Spring's own implementation.",
        "None of these."
      ],
      "correct": 1
    },
    {
      "q": "What is the role of ApplicationContextAware in Spring?",
      "options": [
        "Make a bean aware of the container.",
        "Enable transaction management.",
        "Enable AOP.",
        "Enable dependency injection."
      ],
      "correct": 0
    },
    {
      "q": "Can the class which the Spring container makes a subclass of, be final?",
      "options": [
        "Yes",
        "No"
      ],
      "correct": 1
    },
    {
      "q": "What are the ways to access Hibernate by using Spring?",
      "options": [
        "Inversion of Control with a Hibernate Template and Callback.",
        "Extending HibernateDAOSupport and applying an AOP Interceptor.",
        "Both of the above.",
        "None of the above."
      ],
      "correct": 2
    },
    {
      "q": "Which of the following database is not supported using jdbcTemplate?",
      "options": [
        "MySql",
        "PostgresSql",
        "NoSql",
        "Oracle"
      ],
      "correct": 2
    },
    {
      "q": "Expression Language / SpEL was introduced in which version of Spring framework?",
      "options": [
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      "correct": 2
    },
    {
      "q": "If a bean can be created any number of times, scope is",
      "options": [
        "session",
        "global-session",
        "prototype",
        "request"
      ],
      "correct": 2
    },
    {
      "q": "What is the scope of stateful beans?",
      "options": [
        "session",
        "global-session",
        "prototype",
        "request"
      ],
      "correct": 2
    },
    {
      "q": "If a bean is scoped to HTTP session, scope is",
      "options": [
        "global-session",
        "session",
        "prototype",
        "request"
      ],
      "correct": 1
    },
    {
      "q": "Which annotation is used to add security to your Spring Boot app?",
      "options": [
        "@EnableWebSecurity",
        "@EnableSecurity",
        "@EnableSpringSecurity"
      ],
      "correct": 0
    },
    {
      "q": "Which element is used to specify access attributes for a bean's methods?",
      "options": [
        "security:protect",
        "security:intercept",
        "security:intercept-security",
        "none of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "How to reload changes on Spring Boot without having to restart the server?",
      "options": [
        "spring-boot-devtools",
        "spring-boot-test",
        "spring-boot-web",
        "spring-boot-jasper"
      ],
      "correct": 0
    },
    {
      "q": "LoggerInterceptor which implements HandlerInterceptor will override which of the following methods?",
      "options": [
        "preHandlerBean(), postHandlerBean(), afterCompletion()",
        "PreProcessHandler(), PostProcessHandler(), afterCompletion()",
        "PreHandler(), PostHandler(), afterCompletion()",
        "none"
      ],
      "correct": 3
    },
    {
      "q": "How does Spring Batch work?",
      "options": [
        "step, ItemReader, ItemProcessor, ItemStreamWriter",
        "step, ItemProcessor, ItemStreamWriter",
        "step, ItemReader, ItemStreamWriter"
      ],
      "correct": 0
    },
    {
      "q": "What are the different modes of autowiring?",
      "options": [
        "byName, byType, constructor, autodetect",
        "byName, byType, constructor, autocorrect",
        "byName, byContent, constructor, autodetect",
        "byName, byContent, setter, autodetect"
      ],
      "correct": 0
    },
    {
      "q": "Which element is used to restrict access to a particular URL within Spring Security?",
      "options": [
        "restrict-url",
        "intercept-url",
        "intercept-restrict"
      ],
      "correct": 1
    },
    {
      "q": "What is used to dispatch requests to the Web Application?",
      "options": [
        "DispatcherServlet",
        "ViewHandler",
        "ViewResolver"
      ],
      "correct": 0
    },
    {
      "q": "You can only use Hibernate for ORM in Spring Boot Applications.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "By default, a bean is lazily loaded in Spring.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Spring-WS provides various abstract endpoint classes for you to process the request. Which package?",
      "options": [
        "org.springframework.ws.server.endpoint",
        "org.springframework.ws.server",
        "org.springframework.*",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "What are the ways to create custom Property Editors?",
      "options": [
        "Implement the PropertyEditor interface only",
        "Extend PropertyEditorSupport class only",
        "None of the mentioned",
        "Both: implement PropertyEditor interface and extend PropertyEditorSupport class"
      ],
      "correct": 3
    },
    {
      "q": "Spring Web MVC follows the 'Open for extension, closed for modification' principle — a number of core classes have methods marked final. True or false?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is NOT a special bean in WebApplicationContext?",
      "options": [
        "Locale resolver",
        "Theme resolver",
        "Handler exception resolver",
        "None of the above — all listed are special beans"
      ],
      "correct": 3
    },
    {
      "q": "How does the Spring DispatcherServlet support returning the last-modification-date, as specified by the Servlet API?",
      "options": [
        "By implementing the LastModified interface",
        "By implementing the LastSessionModified interface",
        "By implementing the LastDateModified interface",
        "By implementing the LastModifiedDate interface"
      ],
      "correct": 0
    },
    {
      "q": "@RequestMapping annotation is used to map an HTTP request method (GET or POST) to a specific class or method in the controller. True or false?",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "q": "Which exception class is related to all the exceptions thrown in Spring applications?",
      "options": [
        "DataAccessException",
        "ArrayIndexOutOfBoundsException",
        "NullPointerException",
        "SpringException"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is true for Controllers in Spring?",
      "options": [
        "An abstract class",
        "An interface",
        "A concrete class",
        "A final class"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following specify the points where weaving can be applied?",
      "options": [
        "Compile Time, Classload Time, load time",
        "Compile Time, Classload Time, Runtime",
        "Compile Time and Runtime",
        "Compile Time and Classload Time"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following correctly lists the Autowire types?",
      "options": [
        "byName, byMethod, constructor and autodetect",
        "byName, byType, destructor and autodetect",
        "byName, byType, constructor and autodetect",
        "byName, byType, constructor and autocorrect"
      ],
      "correct": 2
    },
    {
      "q": "Which advice types are supported by the @Aspect annotation?",
      "options": [
        "@Before only",
        "@After only",
        "@AfterReturning only",
        "All of the mentioned (@Before, @After, @AfterReturning, etc.)"
      ],
      "correct": 3
    },
    {
      "q": "Which advice is executed only when the join point returns or throws an exception?",
      "options": [
        "@Before",
        "@After",
        "@AfterReturning",
        "@AfterThrowing"
      ],
      "correct": 1
    },
    {
      "q": "What is the special compiler used during weaving (in AspectJ)?",
      "options": [
        "jvm",
        "gcc",
        "ajc",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "How do you inject a Spring bean into domain objects?",
      "options": [
        "AOP",
        "XML",
        "AspectJ",
        "Java-Based configuration"
      ],
      "correct": 2
    },
    {
      "q": "Which method is used to process a bean before its initialization callback?",
      "options": [
        "scope",
        "postProcessAfterInitialization()",
        "postProcessBeforeInitialization()",
        "its own constructor"
      ],
      "correct": 2
    },
    {
      "q": "Which attribute is used to set the scope of a bean?",
      "options": [
        "setScope",
        "scope",
        "getScope",
        "None of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "Which attribute is used to specify the class name of a bean?",
      "options": [
        "name",
        "id",
        "class",
        "constructor-args"
      ],
      "correct": 2
    },
    {
      "q": "Which tag is also allowed for a static field?",
      "options": [
        "util:constant",
        "list",
        "set",
        "constructor-args"
      ],
      "correct": 0
    },
    {
      "q": "Which class has full access to the Spring context's lifecycle machinery and dependency injection?",
      "options": [
        "DelegatingFilterProxy",
        "WebApplicationContextUtils.getRequiredWeb()",
        "WebApplicationUtils.getRequiredWebApplicationContext()",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which element is used to specify access attributes for a bean's methods (Spring Security)?",
      "options": [
        "security:protect",
        "security:intercept",
        "security:intercept-security",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following relate to Spring Web Flows?",
      "options": [
        "view",
        "action",
        "decision",
        "All of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": "Which class enables Spring Security for web flows?",
      "options": [
        "SecurityFlowExecutionListener",
        "SecurityFlowExecution",
        "FlowSecurity",
        "SecurityFlowListener"
      ],
      "correct": 0
    },
    {
      "q": "How do you validate Java beans in a web application using annotations?",
      "options": [
        "XML only",
        "Java-Based only",
        "JSR-303 standard only",
        "All of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": "Spring MVC supports generating Excel files using which library?",
      "options": [
        "Apache POI library",
        "JExcelAPI library",
        "All of the mentioned",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Which interface allows the DispatcherServlet to auto-detect view resolver beans?",
      "options": [
        "localeResolver",
        "tiles",
        "ViewResolver",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "By default, XmlViewResolver loads view beans from /WEB-INF/views.xml, which is final. True or false?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "To publish a REST service with Spring, you can:",
      "options": [
        "Publish an application's data as a REST service only",
        "Access data from third-party REST services only",
        "None of the mentioned",
        "Both: publish your own data AND access third-party REST services"
      ],
      "correct": 3
    },
    {
      "q": "Publishing an application's data as a REST service typically requires which annotations?",
      "options": [
        "@RequestMapping only",
        "@PathVariable only",
        "Both @RequestMapping and @PathVariable",
        "Neither of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Which statement is true regarding @ResponseStatus?",
      "options": [
        "@ResponseStatus is detected on nested exceptions",
        "It is only for @RequestMapping methods, never exception classes",
        "RedirectView status always overrides it",
        "It cannot be applied to a business exception class"
      ],
      "correct": 0
    },
    {
      "q": "How can you auto-inject a Spring bean into a field by its name?",
      "options": [
        "By using both @Autowired and @Qualifier together",
        "By naming the field with the bean name alone (no annotation)",
        "With a name attribute on @Autowired",
        "By using @Qualifier alone with no @Autowired"
      ],
      "correct": 0
    },
    {
      "q": "Two unrelated classes AccountServiceImpl and ClientServiceImpl. What does this pointcut match? execution(* *..AccountServiceImpl.update(..)) && execution(* *..ClientServiceImpl.update(..))",
      "options": [
        "No join point is defined",
        "Matches public update methods of both classes",
        "Matches any update methods of both classes regardless of visibility",
        "Matches update methods with one extra argument"
      ],
      "correct": 0
    },
    {
      "q": "ApplicationContext context = new ClassPathXmlApplicationContext(\"classpath:/com.example.myapp.config.xml\"); — which statement is correct?",
      "options": [
        "All of the listed statements are true",
        "The classpath: prefix could be omitted",
        "The dotted package name is not well formatted",
        "The leading slash could be omitted"
      ],
      "correct": 0
    },
    {
      "q": "Using Spring AOP, what is the visibility of methods matched by this join point?",
      "options": [
        "Public methods",
        "All methods regardless of visibility",
        "All methods except private methods",
        "Protected and public methods only"
      ],
      "correct": 0
    },
    {
      "q": "What is the name of the bean defined in this configuration class?",
      "options": [
        "clientRepository",
        "JpaClientRepository",
        "jpaClientRepository",
        "Two beans are defined: a DataSource and a repository"
      ],
      "correct": 0
    },
    {
      "q": "Which statement is true regarding this Spring controller?",
      "options": [
        "RequestMethod.GET would be more accurate than POST here",
        "@ResponseBody could be removed with no effect",
        "@PathVariable should be @PathParam instead",
        "Returning HTTP 201 would be better"
      ],
      "correct": 0
    },
    {
      "q": "What is an 'advice' in AOP?",
      "options": [
        "An action taken by an aspect at a particular join point",
        "A point during the execution of a program",
        "An aspect and a pointcut combined",
        "A predicate that matches join points"
      ],
      "correct": 0
    },
    {
      "q": "Which method signature matches the pointcut execution(* com.test.service..*.*(*))?",
      "options": [
        "void com.test.service.MyServiceImpl#transfert(Money amount)",
        "void com.test.service.account.MyServiceImpl#transfert(Money amount)",
        "void com.test.service.MyServiceImpl#transfert(Account account, Money amount)",
        "void com.test.service.account.MyServiceImpl#transfert(Account account, Money amount)"
      ],
      "correct": 0
    },
    {
      "q": "Which statement about this configuration is correct?",
      "options": [
        "The p namespace has to be declared for p:bankName to work",
        "NationalBank is a bean reference, not a scalar value",
        "The bean id is bankServiceImpl",
        "BankServiceImpl references a NationalBank bean"
      ],
      "correct": 0
    },
    {
      "q": "What is missing/wrong with this configuration class?",
      "options": [
        "The @Configuration annotation is missing",
        "A default/no-arg constructor is missing",
        "The @Bean name is ambiguous",
        "The @Bean scope is prototype by mistake"
      ],
      "correct": 0
    },
    {
      "q": "Using JdbcTemplate, which Spring-provided class is used for result set parsing, merging rows into a single object?",
      "options": [
        "ResultSetExtractor",
        "RowMapper",
        "RowCallbackHandler",
        "ResultSetMapper"
      ],
      "correct": 0
    },
    {
      "q": "Which ActionSupport method is used to access Spring's application context?",
      "options": [
        "getWebApplicationContext()",
        "getWebApplication()",
        "getApplicationContext()",
        "contextEventListener()"
      ],
      "correct": 0
    },
    {
      "q": "Which XML element specifies property values for a scripting bean?",
      "options": [
        "lang:property",
        "bean:property",
        "script:property",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation is used to declare an introduction in AOP?",
      "options": [
        "@Before",
        "@After",
        "@DeclareParents",
        "None of the mentioned"
      ],
      "correct": 2
    },
    {
      "q": "Is this pointcut expression correct on its own? execution(* ArithmeticCalculator.*(..))",
      "options": [
        "Yes, always",
        "No, never",
        "Only if every target class is in the same (default) package",
        "Depends on where the target class is located, regardless of package"
      ],
      "correct": 2
    },
    {
      "q": "What are the different types of AutoProxying in Spring?",
      "options": [
        "BeanNameAutoProxyCreator only",
        "DefaultAdvisorAutoProxyCreator only",
        "Metadata autoproxying only",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What are the various property editors used in Spring?",
      "options": [
        "PropertyEditor, URLEditor only",
        "ClassEditor, CustomDateEditor, StringTrimmerEditor only",
        "FileEditor, LocaleEditor, StringArrayPropertyEditor only",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "How is <ref> used in the Spring framework?",
      "options": [
        "<ref> is used with a bean id",
        "<ref> is used with string values",
        "Both of the above",
        "Neither of the above"
      ],
      "correct": 0
    },
    {
      "q": "How do you define an inner bean in Spring?",
      "options": [
        "Use <property/> only",
        "Use <property/> or <constructor-arg/>",
        "Use <constructor-arg/> only",
        "Inner beans aren't supported"
      ],
      "correct": 1
    },
    {
      "q": "Which element is replaced by the c-namespace in Spring?",
      "options": [
        "<property/>",
        "<constructor-arg>",
        "<bean/>",
        "<ref/>"
      ],
      "correct": 1
    },
    {
      "q": "By default, is a bean eagerly initialized in Spring?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "By default, is a bean NOT autowired in Spring?",
      "options": [
        "True — autowiring is off by default",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What is the scope of a stateful bean in Spring?",
      "options": [
        "Singleton scope",
        "Prototype scope"
      ],
      "correct": 1
    },
    {
      "q": "In which Spring scope can any number of instances of a bean be created?",
      "options": [
        "Request scope",
        "Prototype scope"
      ],
      "correct": 1
    },
    {
      "q": "When a bean's scope is limited to only one HTTP request, that is called:",
      "options": [
        "Request scope",
        "Session scope"
      ],
      "correct": 0
    },
    {
      "q": "When a bean's scope is limited to an HTTP session, that is called:",
      "options": [
        "Request scope",
        "Session scope"
      ],
      "correct": 1
    },
    {
      "q": "Thread scope for beans was introduced in Spring from which version?",
      "options": [
        "Spring 2.5",
        "Spring 3.0"
      ],
      "correct": 1
    },
    {
      "q": "InitializingBean and DisposableBean are used to customize the lifecycle nature of a bean in Spring. True or false?",
      "options": [
        "Yes",
        "No"
      ],
      "correct": 0
    },
    {
      "q": "Which is correct about dependency injection?",
      "options": [
        "It helps decouple application objects from each other",
        "It helps decide the dependencies of objects",
        "It stores object states in a database",
        "It stores object states in the file system"
      ],
      "correct": 0
    },
    {
      "q": "What is the Spring MVC framework?",
      "options": [
        "A Model-Value-Class architecture used to bind model data with values",
        "Provides model-view-controller architecture with ready components for flexible, loosely coupled web apps",
        "Used for transaction management for web applications",
        "Used for AOP for web applications"
      ],
      "correct": 1
    },
    {
      "q": "How can you reload your changes on Spring Boot without restarting the server?",
      "options": [
        "Add the spring-boot-devtools dependency",
        "Add the spring-boot-test dependency",
        "Add the spring-boot-web dependency",
        "Add the spring-boot-jasper dependency"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation adds security to your Spring Boot app?",
      "options": [
        "@EnableWebSecurity",
        "@EnableSecurity",
        "@EnableSpringSecurity"
      ],
      "correct": 0
    },
    {
      "q": "How does Spring Batch work (core components)?",
      "options": [
        "step, ItemReader, ItemProcessor, ItemStreamWriter",
        "step, ItemProcessor, ItemStreamWriter",
        "step, ItemReader, ItemStreamWriter"
      ],
      "correct": 0
    },
    {
      "q": "A LoggerInterceptor implementing HandlerInterceptor overrides which methods?",
      "options": [
        "preHandlerBean(), postHandlerBean(), afterCompletion()",
        "PreProcessHandler(), PostProcessHandler(), afterCompletion()",
        "preHandle(), postHandle(), afterCompletion()",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation represents advice executed after the method exits by throwing an exception?",
      "options": [
        "@Before",
        "@After",
        "@Around",
        "@AfterThrowing"
      ],
      "correct": 3
    },
    {
      "q": "Which terminologies are typically used with regard to AOP: A.Concerns B.Advice C.Float D.Pointcut?",
      "options": [
        "A, B, and D",
        "A, C, and D",
        "A, B, and C",
        "B, C, and D"
      ],
      "correct": 0
    },
    {
      "q": "What attribute is added in bean.xml to reduce/eliminate the need of <property> and <constructor-arg>?",
      "options": [
        "Autodiscovery",
        "Autowire",
        "Scope",
        "Auto-detect"
      ],
      "correct": 1
    },
    {
      "q": "Which example summarizes 'Program to an interface rather than an implementation'?",
      "options": [
        "Map m = new HashMap();",
        "ArrayList list = new ArrayList();",
        "ArrayList<Integer> = new ArrayList<Integer>();",
        "String s = \"HelloWorld\";"
      ],
      "correct": 0
    },
    {
      "q": "If a bean implements BeanPostProcessor, Spring will call which method?",
      "options": [
        "processBeforeInitialization()",
        "BeanPostProcessor()",
        "postProcessInterface()",
        "postProcessBeforeInitialization()"
      ],
      "correct": 3
    },
    {
      "q": "Which Collection elements does Spring support?",
      "options": [
        "List, hashmap, arraylist, andset",
        "List, props, hashmaps, and arraylist",
        "List, set, map, and props",
        "Hashmaps, arraylist, list, and treemap"
      ],
      "correct": 2
    },
    {
      "q": "What happens if you use web-aware scopes (session/request) in a regular (non-web) Spring IoC container?",
      "options": [
        "It will return nothing.",
        "It will throw a NullPointerException.",
        "It will throw an IllegalStateException.",
        "It will work correctly."
      ],
      "correct": 2
    },
    {
      "q": "Which bean scopes are valid only in a web-aware Spring Application Context?",
      "options": [
        "Singleton and Prototype",
        "Session, Global Session, and Request",
        "Singleton, Prototype, Request, and Session",
        "Session, Singleton, and Global Session"
      ],
      "correct": 1
    },
    {
      "q": "To use java.util.List, what Spring Collections element do you need?",
      "options": [
        "list",
        "List",
        "lists",
        "util:list"
      ],
      "correct": 0
    },
    {
      "q": "Difference between ClassPathXmlApplicationContext and FilePathXmlApplicationContext (a.k.a. FileSystemXmlApplicationContext)?",
      "options": [
        "First reads from application classpath, second from absolute file path.",
        "First reads from application classpath, second from relative file path.",
        "First reads from relative application classpath, second from absolute file path.",
        "None of the above."
      ],
      "correct": 0
    },
    {
      "q": "Types of Dependency Look Up include:",
      "options": [
        "Factory Method",
        "JNDI Method",
        "Key Word Method",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which combination of inner-bean declarations (A/B/C/D XML blocks shown) is correct? In A and D inner bean inside property, In B and C inner bean directly inside bean ",
      "options": [
        "A and B",
        "B and C",
        "B and D",
        "A and D"
      ],
      "correct": 3
    },
    {
      "q": "When do you use Dependency Injection? (A: decouples system, B: aids code reuse, C: helps tight coupling, D: does NOT help unit testing)",
      "options": [
        "A and C",
        "B and C",
        "A and B",
        "A and D"
      ],
      "correct": 2
    },
    {
      "q": "For Java-based configuration, which class sets the Spring Context?",
      "options": [
        "Annotationconfig",
        "ComponentScan",
        "AnnotationConfigApplicationContext",
        "AnnotationConfigApplication"
      ],
      "correct": 2
    },
    {
      "q": "Which element must be used to configure Spring MVC? all inside < >",
      "options": [
        "mvc:annotation-driven",
        "aop:aspect",
        "tx:advice",
        "oxm:jaxb2-marshaller"
      ],
      "correct": 0
    },
    {
      "q": "What annotation wiring element is added to scan packages and register beans in the Application Context?",
      "options": [
        "context:annotation-config",
        "context:annotation-scan",
        "context:component-config",
        "context:component-scan"
      ],
      "correct": 3
    },
    {
      "q": "In \"@Autowired(required=false) public Employee AutowiredByConstructorService(@Qualifier(...)...)\", what type of autowire is used?",
      "options": [
        "ByName",
        "ById",
        "@Autowired",
        "Constructor"
      ],
      "correct": 3
    },
    {
      "q": "What are the valid types of Spring bean autowiring (per the given choices)?",
      "options": [
        "byName, byId, and constructor",
        "byName, byType, constructor, @Autowired, and @Qualifier annotations",
        "by Scope, by Constructor, and @Autowired",
        "ById, byNameScope, constructor, and @Autowire"
      ],
      "correct": 1
    },
    {
      "q": "Which definition creates a Spring-managed object?",
      "options": [
        "String myObj;",
        "@Autowired private String myObj;",
        "private String myObj = new String(\"spring\");",
        "@Spring String myObj=null;"
      ],
      "correct": 1
    },
    {
      "q": "DI / IoC is based on which Hollywood principle?",
      "options": [
        "Do not call us. We will call you.",
        "Understand the problem first.",
        "The customer is always right.",
        "What you see is what you get."
      ],
      "correct": 0
    },
    {
      "q": "From where does the Spring container get its instructions?",
      "options": [
        "Properties File only",
        "Spring JARS only",
        "XML File and Annotations",
        "XML File only"
      ],
      "correct": 2
    },
    {
      "q": "The prototype scope is recommended for ___ type of beans.",
      "options": [
        "Stateless",
        "Stateful",
        "Restless",
        "Restful"
      ],
      "correct": 1
    },
    {
      "q": "Which is the alternative to create, load, and manage beans in a Spring application?",
      "options": [
        "Application Factory",
        "Context Factory",
        "Bean Factory",
        "Spring Bean Factory"
      ],
      "correct": 2
    },
    {
      "q": "Java-based configuration allows bean definition and Spring configuration to move out of ___.",
      "options": [
        "XML files",
        "Java code",
        "Property files",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "Which statement about XML declaration of the transaction manager bean is NOT true?",
      "options": [
        "The tx namespace provides JTA transaction manager declaration shortcut syntax.",
        "The Id of the bean has to be transactionManager.",
        "HibernateTransactionManager or DataSourceTransactionManager could be used as bean class.",
        "A default transaction timeout could be given."
      ],
      "correct": 1
    },
    {
      "q": "Which is a challenge of Traditional Transaction Management?",
      "options": [
        "Transaction Management at Database Connection Level",
        "Programmatic Management of Transactions",
        "Error-Prone Connection Management",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What does the JDBC Template use to connect to the database?",
      "options": [
        "A simple java bean with connection properties",
        "A data source bean configuration",
        "An XML with DB connection parameters",
        "A JDBC connection object"
      ],
      "correct": 1
    },
    {
      "q": "Which attributes are valid in a Spring bean definition? (A.ID B.Map C.Set D.Class)",
      "options": [
        "ID and Map",
        "ID and Class",
        "Map and Set",
        "Set and Class"
      ],
      "correct": 1
    },
    {
      "q": "Which Spring Collection injects name-value pairs where name/value can be any type?",
      "options": [
        "set",
        "List",
        "map",
        "props"
      ],
      "correct": 2
    },
    {
      "q": "To use a bean definition template, what attribute should you add to the bean?",
      "options": [
        "abstract=\"true\"",
        "interface=\"true\"",
        "class=\"com.example.helloworld\"",
        "public=\"true\""
      ],
      "correct": 0
    },
    {
      "q": "A collection value of type java.util.Properties is defined by what element?",
      "options": [
        "props",
        "prop",
        "properties",
        "property"
      ],
      "correct": 0
    },
    {
      "q": "Which is the annotation for Spring Java-based configuration?",
      "options": [
        "@Component",
        "@SpringConfiguration",
        "@SpringXml",
        "@Configuration"
      ],
      "correct": 3
    },
    {
      "q": "What does the JDBC Template use to connect to the database? (repeat)",
      "options": [
        "A simple java bean with connection properties",
        "A data source bean configuration",
        "An XML with DB connection parameters",
        "A JDBC connection object"
      ],
      "correct": 1
    },
    {
      "q": "Which tasks are performed by a JdbcTemplate?",
      "options": [
        "Execute SQL query only",
        "Execute SQL queries, update statements, and stored-procedure calls",
        "Execute a Java program",
        "Execute update statements only"
      ],
      "correct": 1
    },
    {
      "q": "To annotate all your DAO classes, use the ___.",
      "options": [
        "@Service",
        "@Classes",
        "@Repository",
        "@Component"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following statements is FALSE? (a–f describe Core/DAO/ORM/AOP/Web/MVC packages)",
      "options": [
        "Core package provides the IoC/DI feature",
        "DAO package provides a JDBC-abstraction layer",
        "ORM package integrates JPA/JDO/Hibernate/iBatis",
        "AOP decouples crosscutting tasks via method-interceptors/pointcuts",
        "Web package provides multipart file-upload support",
        "MVC package provides a Model-View-Controller implementation",
        "None of these — all statements above are true"
      ],
      "correct": 6
    },
    {
      "q": "Which is the actual representation of the Spring IoC container?",
      "options": [
        "Application Context",
        "Xml Bean Factory",
        "Bean Factory",
        "Web Application Context"
      ],
      "correct": 0
    },
    {
      "q": "A bean is simply an object that is instantiated, assembled, and otherwise managed by a Spring IoC container.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "How does the container load configuration metadata from external resources such as the local file system or Java CLASSPATH?",
      "options": [
        "Application Context constructor",
        "Init()",
        "Context Constructor",
        "XmlClassPath Constructor"
      ],
      "correct": 0
    },
    {
      "q": "Which is the correct way to load bean definitions from another file?",
      "options": [
        "bean id=\"bean1\" class=\"...\" import=\"something.xml\"",
        "resources name=\"something.xml\" import=\"true\"",
        "import resource=\"something.xml\"",
        "All of the above"
      ],
      "correct": 2
    },
    {
      "q": "What is the correct way to write constructor injection for TestBean(String happy, int year)?",
      "options": [
        "Only the type-based constructor-arg type=... example",
        "Only the index-based constructor-arg index=... example",
        "Type-based AND index-based examples (both well-formed)",
        "All four listed examples, including the garbled/malformed ones"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following are correct statements about Spring MVC?",
      "options": [
        "Only 'Form Controllers handle form interaction'",
        "Only 'Dynamic binding of data to domain model'",
        "Form controllers, multipart resolver, dynamic binding, template interaction, and remote access are ALL correct",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "What responsibilities does the bean factory include?",
      "options": [
        "Instantiating/sourcing, configuring, and assembling dependencies between objects",
        "Only instantiating objects",
        "Managing the full lifecycle of Spring",
        "All of the above including full lifecycle management"
      ],
      "correct": 0
    },
    {
      "q": "What are the responsibilities of XmlBeanFactory?",
      "options": [
        "Expressing composed objects, resolving XML inter-dependencies, and creating a fully configured system",
        "Only expressing composed objects",
        "None of the above",
        "All including unrelated tasks"
      ],
      "correct": 0
    },
    {
      "q": "Which are correct ways to instantiate a Spring IoC container?",
      "options": [
        "Only via ApplicationContext",
        "Only via XmlBeanFactory",
        "Only via BeanFactory + ClassPathXmlApplicationContext",
        "All of the above are valid ways"
      ],
      "correct": 3
    },
    {
      "q": "What are the correct ways to instantiate a bean?",
      "options": [
        "Default (empty) constructor only",
        "Static factory method only",
        "Instance factory method only",
        "All of the above, including via the container"
      ],
      "correct": 3
    },
    {
      "q": "What is a BeanFactory?",
      "options": [
        "It maintains a registry of beans/dependencies, lets you read bean definitions, and can build from XML resources",
        "Only a registry of beans",
        "Only usable to get ApplicationContext/WebApplicationContext references",
        "All of the above equally"
      ],
      "correct": 0
    },
    {
      "q": "Which statements are true about Dependency Injection?",
      "options": [
        "DI describes how objects should be created (not hard-wired); IoC relies on DI; components/services shouldn't be directly connected in code",
        "Only 'DI relies on tight coupling'",
        "Only 'services must be hard-wired in code'",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "q": "Which statements are true about Inversion of Control (IoC)?",
      "options": [
        "Decouples task execution from implementation; each module focuses on its purpose; replacing a module shouldn't affect others",
        "Only 'decoupling of task execution'",
        "Modules should observe what other systems do (this is false)",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "q": "What do you mean by 'inner bean'?",
      "options": [
        "A bean nested inside another bean directly",
        "A bean nested only inside property",
        "A bean nested only inside constructor-arg",
        "A bean nested inside a property OR constructor-arg element"
      ],
      "correct": 3
    },
    {
      "q": "Which are basic techniques to implement Inversion of Control?",
      "options": [
        "Only the factory pattern",
        "Only setter injection",
        "Constructor and setter injection only",
        "All: factory pattern, service locator, constructor/setter/interface injection"
      ],
      "correct": 3
    },
    {
      "q": "Which statement about constructor-based vs setter-based DI is FALSE?",
      "options": [
        "Constructor-based DI invokes a constructor with several args, each a dependency",
        "@Autowired can be used on a constructor for constructor-based autowiring",
        "Constructor-based DI happens when the container invokes the class constructor with arguments",
        "Constructor-based DI is effected by invoking Setter Injection (this wrongly describes setter injection as constructor injection)"
      ],
      "correct": 3
    },
    {
      "q": "Which are correct ways to define constructor injection (Salutation bean example)?",
      "options": [
        "Only the option with garbled 'prime prime' type attributes",
        "Only the option with the typo 'Ie=' instead of 'index='",
        "The well-formed <constructor-arg value=\"Slute\"/> example",
        "All of the above, including the malformed ones"
      ],
      "correct": 2
    },
    {
      "q": "Spring Web MVC follows \"Open for extension, closed for modification\" because core MVC classes have many methods marked final.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "How does Spring's DispatcherServlet support returning the last-modification-date per the Servlet API?",
      "options": [
        "By implementing the LastModified interface",
        "By implementing the LastSessionModified interface",
        "By implementing the LastDateModified interface",
        "By implementing the LastModifiedDate interface"
      ],
      "correct": 0
    },
    {
      "q": "WebApplicationContext adds scopes like request, session, globalSession to the standard ApplicationContext (which only has Singleton/Prototype).",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Do all of Spring's various controllers inherit from AbstractController?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "You can write your own controller using handleRequestInternal(HttpServletRequest, HttpServletResponse) from AbstractController plus a ModelAndView object.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which controller inspects the URL and uses the filename as the view name (e.g. welcome.html → 'welcome')?",
      "options": [
        "UrlFilenameViewController",
        "MultiActionController",
        "CommandController",
        "AbstractController"
      ],
      "correct": 0
    },
    {
      "q": "Which controller combines multiple request-handling methods into one controller?",
      "options": [
        "UrlFilenameViewController",
        "MultiActionController",
        "CommandController",
        "MultiRequestController"
      ],
      "correct": 1
    },
    {
      "q": "'/testing.view' invokes testing(HttpServletRequest, HttpServletResponse). Which view resolver does this?",
      "options": [
        "ParameterMethodNameResolver",
        "PropertiesMethodNameResolver",
        "InternalViewResolver",
        "InternalPathMethodNameResolver"
      ],
      "correct": 3
    },
    {
      "q": "'/index/welcome.html=doIt' (mapped via a properties file) invokes doIt(...). Which view resolver does this?",
      "options": [
        "InternalPathMethodNameResolver",
        "ParameterMethodNameResolver",
        "PropertiesMethodNameResolver"
      ],
      "correct": 2
    },
    {
      "q": "Which controller lets you interact with data objects and dynamically bind HttpServletRequest parameters to them?",
      "options": [
        "MultiActionController",
        "AbstractController",
        "FormActionController",
        "CommandController"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following is NOT a real view resolver?",
      "options": [
        "BeanNameViewResolver",
        "VelocityViewResolver",
        "JasperReportsViewResolver",
        "UrlBasedViewResolver",
        "ResourceBundleViewResolver"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation conditionally wires a bean based on an environment/property value?",
      "options": [
        "@ConditionalOnValue",
        "@ConditionalOnProperty",
        "@ConditionalOnSystemProperty",
        "@ConditionalOnEnvironmentVariable"
      ],
      "correct": 1
    },
    {
      "q": "How do you configure Spring Boot to source external properties from a file?",
      "options": [
        "Load a .properties file manually with java.util.Properties",
        "Use my.properties + @PropertySource(\"my.properties\") on the main class",
        "Create application.properties in src/main/resources — loaded automatically",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "A method annotated @Transactional only reads data. What optimization helps the provider process it more efficiently?",
      "options": [
        "Add readOnly to @Transactional — hints the provider to optimize for read-only",
        "Add a timeout to @Transactional",
        "readOnly prevents any write operations",
        "Set a custom transactionManager option"
      ],
      "correct": 0
    },
    {
      "q": "How do you configure a Spring Boot app to run as a command-line application?",
      "options": [
        "Implement CommandLineRunner and publish it to the application context",
        "Call SpringApplication#setHeadless(true)",
        "Annotate a config class with @CommandLineApplication",
        "Use SpringConsoleApplication.run instead of SpringApplication.run"
      ],
      "correct": 0
    },
    {
      "q": "A JSP error-page controller isn't handling errors. How do you fix it?",
      "options": [
        "Add <error-page><location>/errors</location></error-page> to web.xml",
        "Store the error page in an 'errors' folder",
        "Add an InternalResourceViewResolver bean with prefix /WEB-INF/errors/",
        "Annotate the controller with @ExceptionHandler(\"errorPage\")"
      ],
      "correct": 2
    },
    {
      "q": "How do you configure default Spring Boot configuration/dependencies in Maven?",
      "options": [
        "Add spring-boot-starter-parent as the POM's <parent>",
        "Add spring-boot-dependencies as <parent> with a relativePath",
        "Add spring-boot-starter-parent as a <dependency>",
        "Add spring-boot-starter as a <dependency>"
      ],
      "correct": 0
    },
    {
      "q": "A test using ApplicationEvents isn't recording events. What's the fix?",
      "options": [
        "Extend the @ContextConfiguration for integration testing",
        "Add @EventListener(EmployeeCreationEvent.class) to the creation method",
        "Add @RecordApplicationEvents to the top of the test class",
        "Register a bean of type ApplicationEvents"
      ],
      "correct": 2
    },
    {
      "q": "Which Spring class provides a special environment with custom properties for testing?",
      "options": [
        "ConfigurableEnvironment",
        "PropertySource",
        "TestEnv",
        "MockEnvironment"
      ],
      "correct": 3
    },
    {
      "q": "A test class should only run on macOS. Which built-in annotation achieves this?",
      "options": [
        "@SpringJUnitWebConfig(system = \"mac\")",
        "@EnabledOnMac",
        "@EnabledIf(\"#{systemProperties['os.name'].toLowerCase().contains('mac')}\")",
        "@DetectOS(category = \"mac\")"
      ],
      "correct": 2
    },
    {
      "q": "What Maven command builds your app into a native image (Maven + Docker already configured)?",
      "options": [
        "mvn compile",
        "mvn -Pnative spring-boot:build-image",
        "mvn spring-boot:build-native-image",
        "mvn package"
      ],
      "correct": 1
    },
    {
      "q": "How do you fix the code so allNames() ends up with 4 names in its model list?",
      "options": [
        "Change getNames() to accept a Model parameter",
        "Change getNames() to accept Model and @ModelAttribute(\"names\") List<String>",
        "Change allNames() to (Model model, @ModelAttribute(\"names\") List<String> names)",
        "Change allNames() to (@ModelAttribute(\"names\") List<String> names, Model model)"
      ],
      "correct": 2
    },
    {
      "q": "Which statement about TestTransaction is true?",
      "options": [
        "Its static methods interact with the current transaction of the test method",
        "It only works with @EnableTestTransaction + @Transactional",
        "You must implement the abstract TestTransaction class yourself",
        "You must autowire TestTransaction and call instance methods"
      ],
      "correct": 0
    },
    {
      "q": "An @AutoConfiguration class with @ConditionalOnMissingBean isn't loading even though it's on the classpath. What's missing?",
      "options": [
        "Reference it in each app's @SpringBootConfiguration",
        "Add the @Configuration annotation",
        "List it in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports",
        "List its name in application.properties under spring.autoconfigure.imports"
      ],
      "correct": 2
    },
    {
      "q": "Which XML correctly maps a NullPointerException to a page called 'npe'?",
      "options": [
        "SimpleMappingExceptionResolver bean with prop key=\"java.lang.NullPointerException\" npe prop",
        "Same but wrapped in an exceptionHandler tag instead of bean",
        "Same as A but with view/key attributes reversed",
        "Same as B but with view/key attributes reversed"
      ],
      "correct": 0
    },
    {
      "q": "How do you build a jar from a Maven-based Spring Boot app via command line?",
      "options": [
        "mvn install followed by jar cvf build/classes",
        "mvn spring-boot:jar",
        "mvn package",
        "mvn compile"
      ],
      "correct": 2
    },
    {
      "q": "Why should you remove @ExtendWith(SpringExtension.class) alongside @SpringBootTest?",
      "options": [
        "@SpringBootTest already implies @ExtendWith(SpringExtension.class)",
        "Only JUnit 4 tests recognize @ExtendWith",
        "@SpringBootTest contradicts @ExtendWith(SpringExtension.class)",
        "@ExtendWith(SpringExtension.class) overrides @SpringBootTest"
      ],
      "correct": 0
    },
    {
      "q": "What is the default behavior of Spring's TestContext for database persistence?",
      "options": [
        "It wraps each test in a transaction and auto-rolls it back — DB is unchanged after the test",
        "It configures a brand-new database per test",
        "It commits changes, affecting subsequent tests unless @NoCommit is used",
        "Tests must be marked @Transactional with a custom rollback exception"
      ],
      "correct": 0
    },
    {
      "q": "Which class meets the conditions for having @ModelAttribute-annotated methods?",
      "options": [
        "A class annotated @Repository",
        "A class annotated @Controller",
        "A class annotated @Model",
        "A class annotated @Attributed"
      ],
      "correct": 1
    },
    {
      "q": "How can you disable an auto-configuration class in Spring Boot?",
      "options": [
        "Add @ContextConfiguration with classes = the auto-config class",
        "Add @Conditional with value = the auto-config class",
        "Add @EnableAutoConfiguration with exclude = the auto-config class",
        "Add the auto-config class to the exclude property on @SpringBootApplication"
      ],
      "correct": 3
    },
    {
      "q": "@Autowired is simply a legacy version of @Inject, and both are otherwise identical — true or false?",
      "options": [
        "True, they're identical in origin and behavior",
        "False — @Inject is part of Java EE/CDI while @Autowired is Spring's own, and there are subtle differences",
        "They can never be used interchangeably",
        "@Inject is Spring-specific"
      ],
      "correct": 1
    },
    {
      "q": "What are the ways to access Hibernate using Spring?",
      "options": [
        "Inversion of Control with HibernateTemplate/Callback",
        "Extending HibernateDAOSupport with an AOP Interceptor",
        "Both of the above",
        "Neither of the above"
      ],
      "correct": 2
    },
    {
      "q": "Which ORM(s) does Spring support?",
      "options": [
        "Hibernate",
        "iBatis",
        "JPA",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following databases is NOT supported using jdbcTemplate?",
      "options": [
        "MySQL",
        "PostgreSQL",
        "NoSQL databases",
        "Oracle"
      ],
      "correct": 2
    },
    {
      "q": "Can we integrate Struts with Spring?",
      "options": [
        "Yes",
        "No"
      ],
      "correct": 0
    },
    {
      "q": "By default, is a Spring bean lazily loaded?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What is the default scope of stateless beans in Spring?",
      "options": [
        "global-session",
        "singleton",
        "prototype",
        "request"
      ],
      "correct": 1
    },
    {
      "q": "Which annotation adds security to a Spring Boot app?",
      "options": [
        "@EnableWebSecurity",
        "@EnableSecurity",
        "@EnableSpringSecurity",
        "@Secured"
      ],
      "correct": 0
    },
    {
      "q": "HandlerInterceptor defines which methods for a LoggerInterceptor-style class?",
      "options": [
        "preHandlerBean(), postHandlerBean(), afterCompletion()",
        "PreProcessHandler(), PostProcessHandler(), afterCompletion()",
        "preHandle(), postHandle(), afterCompletion()",
        "None of the above"
      ],
      "correct": 2
    },
    {
      "q": "Which annotation is used to create a foreign-key relation between two tables in JPA/Hibernate?",
      "options": [
        "@ForeignKey",
        "@JoinedKey",
        "@JoinColumn",
        "@ManyToOne only"
      ],
      "correct": 2
    },
    {
      "q": "Can you use only Hibernate for ORM in Spring Boot applications (i.e. is it the only option)?",
      "options": [
        "True",
        "False — Spring Boot also supports JPA directly, MyBatis, jOOQ, etc."
      ],
      "correct": 1
    },
    {
      "q": "A logger location where logging information is sent is called an",
      "options": [
        "appender",
        "logger",
        "component",
        "adapter"
      ],
      "correct": 0
    },
    {
      "q": "What is the default scope of a bean in the Spring framework?",
      "options": [
        "singleton",
        "prototype",
        "request",
        "session"
      ],
      "correct": 0
    },
    {
      "q": "Which Spring Boot Actuator endpoint is used to monitor the health of a microservice?",
      "options": [
        "/actuator/health",
        "/actuator",
        "/rest",
        "/logger"
      ],
      "correct": 0
    },
    {
      "q": "MongoDB can be accessed using Spring Data.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "How do you handle shutdown of the Spring IoC container?",
      "options": [
        "Using shutdownHook()",
        "Using shutdownHandler()",
        "Using registerHook()",
        "Using registerShutdownHook()"
      ],
      "correct": 3
    },
    {
      "q": "What is true about <list> collection configuration elements in Spring XML config?",
      "options": [
        "Wiring a list of values, allowing duplicates",
        "Wiring only unique values",
        "Only usable for primitive types",
        "Cannot contain references to other beans"
      ],
      "correct": 0
    },
    {
      "q": "A REST service endpoint's address typically starts with what and may end with what?",
      "options": [
        "Starts with http:// and may end with a query string (?)",
        "No certain URL is specified",
        "Depends entirely on the platform used",
        "Must always end in .json"
      ],
      "correct": 0
    },
    {
      "q": "What are the different types of autowiring in Spring?",
      "options": [
        "byType, byName, constructor, autodetect",
        "byField only",
        "byValue, byRef",
        "manual, automatic"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation is used to declare a class as a MongoDB document in Spring Data?",
      "options": [
        "@Document",
        "@Entity",
        "@Collection",
        "@Table"
      ],
      "correct": 0
    },
    {
      "q": "Can Spring properties be changed at runtime?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which view prefix cannot be resolved by InternalResourceViewResolver directly (it's handled specially)?",
      "options": [
        "redirect:",
        "forward:",
        "jsp:",
        "none of the above"
      ],
      "correct": 0
    },
    {
      "q": "Which is an alternative way to resolve locales in Spring MVC?",
      "options": [
        "AcceptHeaderLocaleResolver",
        "SessionLocaleResolver",
        "Both of the above are valid resolvers",
        "CookieLocaleResolver only"
      ],
      "correct": 2
    },
    {
      "q": "Which general-purpose Spring class renders a response using a marshaller?",
      "options": [
        "MarshallingView",
        "Marshaling",
        "View",
        "XmlView"
      ],
      "correct": 0
    },
    {
      "q": "Using JdbcTemplate, which Spring class parses a result set and merges rows into a single object?",
      "options": [
        "ResultSetExtractor",
        "RowMapper",
        "RowCallbackHandler",
        "ResultSetMapper"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation is used in Spring MVC to return data directly in the HTTP response body?",
      "options": [
        "@ResponseBody",
        "@RequestBody",
        "@ResponseEntity",
        "@Body"
      ],
      "correct": 0
    },
    {
      "q": "Which class is used in Spring to load the root application context?",
      "options": [
        "ContextLoaderListener",
        "DispatcherServlet",
        "ApplicationContextAware",
        "RootContextLoader"
      ],
      "correct": 0
    },
    {
      "q": "In Spring WebFlux, which reactive type represents 0 to many asynchronous elements?",
      "options": [
        "Mono",
        "Flux",
        "Publisher",
        "Observable"
      ],
      "correct": 1
    },
    {
      "q": "What are the advice types in Spring AOP?",
      "options": [
        "Before",
        "After / AfterReturning",
        "Around",
        "All of the above (Before, After, AfterReturning, Around, AfterThrowing)"
      ],
      "correct": 3
    },
    {
      "q": "What does @SpringBootApplication include?",
      "options": [
        "@Configuration, @EnableAutoConfiguration, @ComponentScan",
        "@RestController, @EnableWebMvc",
        "@Repository, @Transactional",
        "@Autowired, @Qualifier"
      ],
      "correct": 0
    },
    {
      "q": "Which starter dependency enables building REST APIs in Spring Boot?",
      "options": [
        "spring-boot-starter-web",
        "spring-boot-starter-data-jpa",
        "spring-boot-starter-security",
        "spring-boot-starter-test"
      ],
      "correct": 0
    },
    {
      "q": "What is Dependency Injection?",
      "options": [
        "Creating objects manually",
        "Injecting dependencies into objects rather than having them create their own",
        "Managing database connections",
        "Handling HTTP requests"
      ],
      "correct": 1
    },
    {
      "q": "How do you externalize configuration in Spring Boot?",
      "options": [
        "Using application.properties/application.yml",
        "Using @Configuration only",
        "Using @Bean only",
        "Using @Autowired"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation maps HTTP GET requests in Spring MVC?",
      "options": [
        "@PostMapping",
        "@GetMapping",
        "@RequestMapping (only)",
        "@PutMapping"
      ],
      "correct": 1
    },
    {
      "q": "What is the default embedded server in Spring Boot?",
      "options": [
        "Jetty",
        "Tomcat",
        "Undertow",
        "Netty"
      ],
      "correct": 1
    },
    {
      "q": "What does @Transactional do in Spring?",
      "options": [
        "Manages database transactions",
        "Configures REST endpoints",
        "Injects dependencies",
        "Scans components"
      ],
      "correct": 0
    },
    {
      "q": "Which starter dependency connects a Spring Boot app to MongoDB?",
      "options": [
        "spring-boot-starter-data-mongodb",
        "spring-boot-starter-data-jpa",
        "spring-boot-starter-web",
        "spring-boot-starter-security"
      ],
      "correct": 0
    },
    {
      "q": "Which annotation is used to indicate a field must have a minimum of 2 characters (Bean Validation)?",
      "options": [
        "@NotNull",
        "@Size",
        "@MaxSize",
        "@Length"
      ],
      "correct": 1
    },
    {
      "q": "Publishing an application's data as a REST service typically requires which annotation(s)?",
      "options": [
        "@RequestMapping",
        "@PathVariable",
        "Both @RequestMapping and @PathVariable are commonly used",
        "Neither is required"
      ],
      "correct": 2
    },
    {
      "q": "Do you need to manually surround Spring DAO code with try/catch for SQL exceptions?",
      "options": [
        "No — Spring translates checked SQLExceptions into unchecked DataAccessExceptions",
        "Yes, it's always required",
        "Only for MongoDB",
        "Only for stored procedures"
      ],
      "correct": 0
    }
  ],
  "mongodb": [
    {
      "q": "Which of the following correctly describes the structure of a document in MongoDB?",
      "options": [
        "Tabular format with rows and columns",
        "JSON-like format with key-value pairs",
        "XML format with nested tags",
        "Key-value store with no schema"
      ],
      "correct": 1
    },
    {
      "q": "What is the default port on which MongoDB runs?",
      "options": [
        "27017",
        "3306",
        "5432",
        "8080"
      ],
      "correct": 0
    },
    {
      "q": "Which command is used to switch to a specific database in MongoDB shell?",
      "options": [
        "switch db_name",
        "change db_name",
        "use db_name",
        "select db_name"
      ],
      "correct": 2
    },
    {
      "q": "Given a collection 'users', write a query to find all documents where the 'age' field is greater than 25.",
      "options": [
        "db.users.find({ age: { $gt: 25 } })",
        "db.users.find({ age > 25 })",
        "db.users.find({ age: { >: 25 } })",
        "db.users.find({ $gt: { age: 25 } })"
      ],
      "correct": 0
    },
    {
      "q": "Which operator is used to update a field by incrementing its value in MongoDB?",
      "options": [
        "$inc",
        "$add",
        "$increment",
        "$sum"
      ],
      "correct": 0
    },
    {
      "q": "What does the '_id' field represent in a MongoDB document?",
      "options": [
        "An optional user-defined identifier",
        "A unique primary key automatically generated if omitted",
        "A foreign key reference to another collection",
        "A timestamp of document creation"
      ],
      "correct": 1
    },
    {
      "q": "Write a MongoDB query to delete all documents from the 'orders' collection where the 'status' field equals 'cancelled'.",
      "options": [
        "db.orders.deleteMany({ status: 'cancelled' })",
        "db.orders.delete({ status: 'cancelled' })",
        "db.orders.remove({ status: 1 })",
        "db.orders.drop({ status: 'cancelled' })"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is NOT a valid MongoDB data type?",
      "options": [
        "ObjectId",
        "Date",
        "Array",
        "Tuple"
      ],
      "correct": 3
    },
    {
      "q": "What is the purpose of indexing in MongoDB?",
      "options": [
        "To encrypt data for security",
        "To improve query performance",
        "To enforce data types",
        "To automatically shard data"
      ],
      "correct": 1
    },
    {
      "q": "Which aggregation stage is used to filter documents in an aggregation pipeline?",
      "options": [
        "$filter",
        "$where",
        "$match",
        "$search"
      ],
      "correct": 2
    },
    {
      "q": "Given a collection 'products', write a query to sort all documents by 'price' in descending order.",
      "options": [
        "db.products.sort({ price: -1 })",
        "db.products.find().sort({ price: -1 })",
        "db.products.find().orderBy({ price: 'desc' })",
        "db.products.find().sort({ price: 'desc' })"
      ],
      "correct": 1
    },
    {
      "q": "What does the $group aggregation stage do?",
      "options": [
        "Groups documents by a specified key and performs accumulations",
        "Removes duplicate documents from the result set",
        "Joins documents from multiple collections",
        "Sorts documents within groups"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is true about MongoDB transactions?",
      "options": [
        "Transactions are only available in the Enterprise edition",
        "Transactions support multi-document ACID compliance across replica sets",
        "Transactions cannot span multiple operations",
        "Transactions automatically shard data"
      ],
      "correct": 1
    },
    {
      "q": "Write a query to create an ascending index on the 'email' field in the 'users' collection.",
      "options": [
        "db.users.createIndex({ email: 1 })",
        "db.users.addIndex({ email: 'asc' })",
        "db.users.index({ email: 1 })",
        "db.users.createIndex({ email: 'ascending' })"
      ],
      "correct": 0
    },
    {
      "q": "What is a covered query in MongoDB?",
      "options": [
        "A query that uses encryption",
        "A query answered entirely from an index without examining documents",
        "A query that returns all fields",
        "A query that hides sensitive data"
      ],
      "correct": 1
    },
    {
      "q": "Which operator is used to perform a logical OR in MongoDB queries?",
      "options": [
        "$or",
        "||",
        "$logical_or",
        "$any"
      ],
      "correct": 0
    },
    {
      "q": "Given a collection 'employees', write an update query to set the 'salary' field to 50000 for all documents where 'department' is 'Engineering'.",
      "options": [
        "db.employees.updateMany({ department: 'Engineering' }, { $set: { salary: 50000 } })",
        "db.employees.update({ department: 'Engineering' }, { salary: 50000 })",
        "db.employees.setMany({ department: 'Engineering' }, { salary: 50000 })",
        "db.employees.modify({ department: 'Engineering' }, { $set: { salary: 50000 } })"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of sharding in MongoDB?",
      "options": [
        "To replicate data across multiple servers for high availability",
        "To horizontally partition data across multiple servers for scalability",
        "To compress data for storage efficiency",
        "To encrypt data at rest"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following correctly creates a capped collection named 'logs' with a maximum size of 1 megabyte?",
      "options": [
        "db.createCollection('logs', { capped: true, size: 1048576 })",
        "db.createCappedCollection('logs', { size: '1MB' })",
        "db.logs.createCapped({ size: 1048576 })",
        "db.create('logs', { capped: true, maxSize: 1048576 })"
      ],
      "correct": 0
    },
    {
      "q": "What does the $lookup stage do in MongoDB aggregation?",
      "options": [
        "Performs a self-join on the same collection",
        "Performs a left outer join with another collection",
        "Looks up environmental variables",
        "Caches query results for faster access"
      ],
      "correct": 1
    },
    {
      "q": "Write a query to find all documents in 'products' where the 'tags' array contains the value 'electronics'.",
      "options": [
        "db.products.find({ tags: 'electronics' })",
        "db.products.find({ tags: { $contains: 'electronics' } })",
        "db.products.find({ tags: { $in: ['electronics'] } })",
        "db.products.find({ $arrayContains: { tags: 'electronics' } })"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "q": "What is the role of a primary node in a MongoDB replica set?",
      "options": [
        "It only serves read queries",
        "It accepts all write operations and is the source for replication",
        "It acts as a backup and never accepts writes",
        "It distributes queries to secondary nodes"
      ],
      "correct": 1
    },
    {
      "q": "Which aggregation operator is used to concatenate strings?",
      "options": [
        "$concat",
        "$merge",
        "$join",
        "$addStrings"
      ],
      "correct": 0
    },
    {
      "q": "Given a collection 'sales' with documents containing 'amount' and 'date' fields, write an aggregation pipeline to calculate the total sales amount per month.",
      "options": [
        "db.sales.aggregate([ { $group: { _id: { $month: '$date' }, total: { $sum: '$amount' } } } ])",
        "db.sales.aggregate([ { $project: { month: '$date', total: '$amount' } }, { $group: { _id: '$month', total: { $sum: '$total' } } } ])",
        "db.sales.aggregate([ { $group: { _id: { month: { $month: '$date' } }, total: { $sum: '$amount' } } } ])",
        "Both A and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "What does the 'explain()' method do in MongoDB?",
      "options": [
        "Provides execution statistics and query plan details",
        "Exports data to a JSON file",
        "Explains the schema of a collection",
        "Lists all indexes on a collection"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is a valid way to perform a text search in MongoDB?",
      "options": [
        "db.articles.find({ $text: { $search: 'mongodb' } })",
        "db.articles.find({ content: /mongodb/ })",
        "Both A and B are valid",
        "db.articles.textSearch('mongodb')"
      ],
      "correct": 0
    },
    {
      "q": "Write a query to delete the 'users' collection completely from the current database.",
      "options": [
        "db.users.drop()",
        "db.users.delete()",
        "db.dropCollection('users')",
        "db.users.remove({})"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the $unwind stage in aggregation?",
      "options": [
        "Deconstructs an array field into multiple documents",
        "Removes null values from arrays",
        "Sorts array elements in ascending order",
        "Flattens nested objects"
      ],
      "correct": 0
    },
    {
      "q": "Which read concern level in MongoDB provides the highest consistency guarantee?",
      "options": [
        "local",
        "available",
        "majority",
        "linearizable"
      ],
      "correct": 3
    },
    {
      "q": "Given a collection 'students', write a query to find all documents where the 'scores' array has at least 5 elements.",
      "options": [
        "db.students.find({ 'scores.4': { $exists: true } })",
        "db.students.find({ scores: { $size: { $gte: 5 } } })",
        "db.students.find({ $where: 'this.scores.length >= 5' })",
        "db.students.find({ scores: { $gte: 5 } })"
      ],
      "correct": 0
    },
    {
      "q": "What is the difference between $push and $addToSet update operators?",
      "options": [
        "$push adds an item to an array; $addToSet adds an item only if not already present",
        "$push adds to the beginning; $addToSet adds to the end",
        "$push works on strings; $addToSet works on numbers",
        "There is no difference; they are aliases"
      ],
      "correct": 0
    },
    {
      "q": "Which command is used to check the status of a replica set?",
      "options": [
        "rs.status()",
        "replica.status()",
        "db.replicaSetStatus()",
        "sh.status()"
      ],
      "correct": 0
    },
    {
      "q": "Write a query to find the second highest 'salary' from the 'employees' collection.",
      "options": [
        "db.employees.find().sort({ salary: -1 }).skip(1).limit(1)",
        "db.employees.aggregate([ { $sort: { salary: -1 } }, { $skip: 1 }, { $limit: 1 } ])",
        "db.employees.find().sort({ salary: 1 }).limit(1)",
        "db.employees.find().sort({ salary: -1 }).limit(1)"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "q": "What does the 'ttl' index do in MongoDB?",
      "options": [
        "Sets a time-to-live for documents, automatically deleting them after a specified duration",
        "Limits the number of documents in a collection",
        "Encrypts documents after a certain time",
        "Caches documents temporarily"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following correctly performs a bulk write operation in MongoDB?",
      "options": [
        "db.collection.bulkWrite([ { insertOne: { document: { name: 'A' } } }, { updateOne: { filter: { name: 'B' }, update: { $set: { name: 'C' } } } } ])",
        "db.collection.insertMany([{ name: 'A' }, { name: 'B' }])",
        "db.collection.bulkInsert([{ name: 'A' }, { name: 'B' }])",
        "db.collection.multiWrite([{ name: 'A' }, { name: 'B' }])"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'mongod' process?",
      "options": [
        "The MongoDB shell client",
        "The primary daemon process for MongoDB database",
        "A backup utility for MongoDB",
        "A monitoring tool for MongoDB performance"
      ],
      "correct": 1
    },
    {
      "q": "Given a nested document structure { 'address': { 'city': 'New York', 'zip': 10001 } }, write a query to find all users living in New York.",
      "options": [
        "db.users.find({ 'address.city': 'New York' })",
        "db.users.find({ address: { city: 'New York' } })",
        "db.users.find({ address: { city: 'New York', zip: { $exists: true } } })",
        "db.users.find({ 'address': { $elemMatch: { city: 'New York' } } })"
      ],
      "correct": 0
    },
    {
      "q": "What does the $regex operator do?",
      "options": [
        "Performs regular expression pattern matching on string fields",
        "Registers a new expression in the aggregation pipeline",
        "Replaces text in a string",
        "Validates email formats automatically"
      ],
      "correct": 0
    },
    {
      "q": "Write an aggregation pipeline to get the distinct values of the 'category' field from the 'products' collection.",
      "options": [
        "db.products.aggregate([ { $group: { _id: '$category' } } ])",
        "db.products.aggregate([ { $sort: { category: 1 } } ])",
        "db.products.aggregate([ { $project: { category: 1 } } ])",
        "db.products.aggregate([ { $match: { category: { $exists: true } } } ])"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'writeConcern' in MongoDB?",
      "options": [
        "Specifies the level of acknowledgment requested for write operations",
        "Encrypts write operations",
        "Compresses data before writing",
        "Validates schema before writing"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is true about ObjectId in MongoDB?",
      "options": [
        "It is a 12-byte identifier typically containing timestamp, machine ID, process ID, and counter",
        "It is a string that must be manually generated",
        "It can only be used for the _id field",
        "It is encrypted by default"
      ],
      "correct": 0
    },
    {
      "q": "Given a collection 'events' with a 'timestamp' field, write a query to find all events from the last 7 days.",
      "options": [
        "db.events.find({ timestamp: { $gte: new Date(new Date() - 7*24*60*60*1000) } })",
        "db.events.find({ timestamp: { $gt: ISODate('2023-01-01') } })",
        "db.events.find({ timestamp: { $lastDays: 7 } })",
        "db.events.find({ $where: 'this.timestamp > new Date() - 7*24*60*60*1000' })"
      ],
      "correct": 0
    },
    {
      "q": "What does the '$out' stage do in an aggregation pipeline?",
      "options": [
        "Outputs the results to a specified collection, overwriting if it exists",
        "Sends output to a file system",
        "Prints output to the console",
        "Exports results to a CSV file"
      ],
      "correct": 0
    },
    {
      "q": "Which command creates a backup of a MongoDB database?",
      "options": [
        "mongodump",
        "mongobackup",
        "db.backup()",
        "mongosave"
      ],
      "correct": 0
    },
    {
      "q": "Write a query to add a new field 'bonus' with value 1000 to all documents in 'employees' where 'experience' > 5.",
      "options": [
        "db.employees.updateMany({ experience: { $gt: 5 } }, { $set: { bonus: 1000 } })",
        "db.employees.update({ experience: { $gt: 5 } }, { $addField: { bonus: 1000 } })",
        "db.employees.updateMany({ experience: { $gt: 5 } }, { $add: { bonus: 1000 } })",
        "db.employees.addField({ experience: { $gt: 5 } }, { bonus: 1000 })"
      ],
      "correct": 0
    },
    {
      "q": "What is a 'sparse index' in MongoDB?",
      "options": [
        "An index that only contains entries for documents that have the indexed field",
        "An index that compresses data to save space",
        "An index that is stored on a separate disk",
        "An index that expires after a certain time"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following aggregation stages is used for reshaping documents by including/excluding fields?",
      "options": [
        "$project",
        "$reshape",
        "$select",
        "$fields"
      ],
      "correct": 0
    },
    {
      "q": "Given a collection 'logs' with field 'message', write a query to find documents where 'message' contains the word 'error' (case-insensitive).",
      "options": [
        "db.logs.find({ message: /error/i })",
        "db.logs.find({ message: { $regex: 'error', $options: 'i' } })",
        "db.logs.find({ $text: { $search: 'error' } })",
        "Both A and B are correct"
      ],
      "correct": 3
    },
    {
      "q": "What does MongoDB's find() method return when a query matches multiple documents?",
      "options": [
        "A cursor that can be iterated over the matching documents",
        "Only the first matching document",
        "A JSON array of all matching documents loaded into memory",
        "It throws an error if results exceed a certain count"
      ],
      "correct": 0
    },
    {
      "q": "Write a query to rename the field 'oldName' to 'newName' in all documents of the 'data' collection.",
      "options": [
        "db.data.updateMany({}, { $rename: { 'oldName': 'newName' } })",
        "db.data.renameField({ oldName: 'newName' })",
        "db.data.update({}, { $rename: { 'oldName': 'newName' } }, { multi: true })",
        "Both A and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "In MongoDB, what is the equivalent of SQL term row?",
      "options": [
        "Primary Key",
        "Index",
        "Field",
        "Document"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following code will give an error on the MongoDB command shell?",
      "options": [
        "use databasename",
        "show dbs",
        "USE databasename",
        "Db"
      ],
      "correct": 2
    },
    {
      "q": "What theorem or principal MongoDB follows?",
      "options": [
        "APAC",
        "Always-Sync",
        "ASCII",
        "CAP"
      ],
      "correct": 3
    },
    {
      "q": "What method is used to remove a single item from a MongoDB collection?",
      "options": [
        "db.collection.deleteOne()",
        "db.collection.delete()",
        "db.collection.removeOne()",
        "db.collection.remove()"
      ],
      "correct": 0
    },
    {
      "q": "Identify the incorrect statement on MongoDB ?",
      "options": [
        "Secondary Indices are not available in MongoDB.",
        "MongoDB supports search by field, range queries and regular expression matches.",
        "C .MongoDB can store the business subject in the minimal number of documents."
      ],
      "correct": 0
    },
    {
      "q": "MongoDB database can be accessed using Spring Data.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Where in an HTML document is the correct place to refer to an external style sheet?",
      "options": [
        "In the <head> section",
        "In the <body> section",
        "In the <head> section",
        "At the end of the document",
        "At the start of the document"
      ],
      "correct": 1
    },
    {
      "q": "Point out the correct statement.",
      "options": [
        "MongoDB is classified as a NoSQL database",
        "MongoDB favours XML format more than JSON",
        "MongoDB is column oriented database store",
        "All of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "__________ is a part of the standard MongoDB distribution and provides a full JavaScript environment.",
      "options": [
        "mongod",
        "mongodb",
        "mongo"
      ],
      "correct": 2
    },
    {
      "q": "When you query a collection, MongoDB returns a ________ object that contains the results of the query.",
      "options": [
        "row",
        "cursor",
        "columns",
        "none of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "Primary key in MongoDB document?",
      "options": [
        "_id",
        "id",
        "key",
        "index"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Find users where age > 25?",
      "options": [
        "db.users.find({ age: { $gt: 25 } })",
        "db.users.find({ age: { $gte: 25 } })",
        "db.users.find({ age: { $lt: 25 } })",
        "db.users.find({ age: 25 })"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What does $push do?",
      "options": [
        "Replace field",
        "Add element to array",
        "Remove element",
        "Update field"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Spring Boot: How do you connect to MongoDB?",
      "options": [
        "spring-boot-starter-data-mongodb",
        "spring-boot-starter-data-jpa",
        "spring-boot-starter-web",
        "spring-boot-starter-security"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Sharding a MongoDB database across many server instances can be achieved with ____",
      "options": [
        "LAN",
        "SAN.",
        "MAN"
      ],
      "correct": 0
    },
    {
      "q": "Which one is NOT a spring data MongoDB annotation ?",
      "options": [
        "@Document",
        "@Field",
        "@Entity",
        "@Query."
      ],
      "correct": 2
    },
    {
      "q": "How would you limit the results of a find to 10 items?",
      "options": [
        "adb.collection.find({},{limit:10})",
        "db.collection.find().limit(10)",
        "db.collection.limit(query, 10)",
        "This is not possible in the node.js driver"
      ],
      "correct": 1
    },
    {
      "q": "In MongoDB, what is the equivalent of the SQL term 'row'?",
      "options": [
        "Primary Key",
        "Index",
        "Field",
        "Document"
      ],
      "correct": 3
    },
    {
      "q": "What is the equivalent of: UPDATE user SET email = 'NA' WHERE age < 18 ?",
      "options": [
        "db.user.updateMany({ gt: { $age: 18 } },{ $set: {email: \"NA\"} })",
        "db.user.updateMany({ age: { $lt: 18 } },{ $set: {email: \"NA\"} })",
        "db.user.updateMany({ gt: { $age: 18 } },{ $set: {email: \"NA\"} })",
        "db.user.updateMany({ age: { $gt: 18 } },{ $set: {email: \"NA\"} })"
      ],
      "correct": 1
    },
    {
      "q": "What theorem/principal does MongoDB follow?",
      "options": [
        "APAC",
        "Always-Sync",
        "ASCII",
        "CAP"
      ],
      "correct": 3
    },
    {
      "q": "What is NoSQL?",
      "options": [
        "No Object SQL",
        "No SQL Server",
        "Not Only SQL",
        "No Relational Database"
      ],
      "correct": 2
    },
    {
      "q": "When there is no matching document in the collection, what does upsert: true do?",
      "options": [
        "Delete",
        "Nothing",
        "Insert",
        "Update"
      ],
      "correct": 2
    },
    {
      "q": "db.collection.find( { qty: { $gt: 6 } }, { name: 1, _id: 0 } ) - which fields are returned?",
      "options": [
        "_id",
        "name",
        "_id, name",
        "name, _id"
      ],
      "correct": 1
    },
    {
      "q": "db.collection.find( { qty: { $gt: 6 } }, { name: 1, wins: 1 } ) - what does the second parameter represent?",
      "options": [
        "Read Concern",
        "Projection",
        "Write Concern",
        "Query"
      ],
      "correct": 1
    },
    {
      "q": "In MongoDB, which operation often uses an index for better performance vs those without one?",
      "options": [
        "SELECT",
        "UPDATE",
        "DELETE",
        "SORT"
      ],
      "correct": 3
    },
    {
      "q": "What type of management do 'Capped Collections' provide for inserted documents in MongoDB?",
      "options": [
        "FIFO",
        "LIFO",
        "LRU",
        "MRU"
      ],
      "correct": 0
    },
    {
      "q": "In MongoDB, which of the following methods returns one document?",
      "options": [
        "findOne()",
        "findOne1()",
        "selectOne()",
        "find()"
      ],
      "correct": 0
    },
    {
      "q": "In MongoDB, which operation uses an index often, having better performance than those that don't use an index?",
      "options": [
        "SELECT",
        "UPDATE",
        "DELETE",
        "SORT"
      ],
      "correct": 3
    },
    {
      "q": "Identify the incorrect statement on MongoDB (secondary indices).",
      "options": [
        "Secondary Indices are not available in MongoDB.",
        "MongoDB supports search by field, range queries and regular expression matches.",
        "MongoDB can store the business subject in the minimal number of documents."
      ],
      "correct": 0
    },
    {
      "q": "Identify the correct statement in MongoDB.",
      "options": [
        "Queries specify criteria/conditions which identify documents MongoDB returns to clients.",
        "Write Operations retrieve data stored in the database.",
        "The selection increases the amount of data returned over the network."
      ],
      "correct": 0
    },
    {
      "q": "What theorem/principle does MongoDB follow?",
      "options": [
        "APAC",
        "Always-Sync",
        "ASCII",
        "CAP"
      ],
      "correct": 3
    },
    {
      "q": "Upon running: db.collection.find( { qty: { $gt: 6 } }, { name: 1, _id: 0 } ) — which field(s) will be returned?",
      "options": [
        "_id",
        "name",
        "_id, name",
        "name1, _id0"
      ],
      "correct": 1
    },
    {
      "q": "In db.collection.find( { qty: { $gt: 6 } }, { name: 1, wins: 1 } ), what does the second parameter represent?",
      "options": [
        "Read Concern",
        "Projection",
        "Write Concern",
        "Query"
      ],
      "correct": 1
    },
    {
      "q": "Which Java Collection types can you inject in a Spring application?",
      "options": [
        "Using lit, set, map or collection tag",
        "Using list, set, props or collection tag",
        "Using list, set, map or props tag",
        "Using list, collection, map or props tag"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following will give an error on the MongoDB shell?",
      "options": [
        "use databasename",
        "show dbs",
        "USE databasename",
        "db"
      ],
      "correct": 2
    },
    {
      "q": "What theorem or principle does MongoDB follow?",
      "options": [
        "APAC",
        "Always-Sync",
        "ASCII",
        "CAP"
      ],
      "correct": 3
    },
    {
      "q": "What language is MongoDB primarily written in?",
      "options": [
        "C++",
        "JavaScript",
        "C",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements is INCORRECT about MongoDB?",
      "options": [
        "MongoDB supports search by field, range queries, and regex",
        "MongoDB can store business subjects in a minimal number of documents",
        "Secondary indices are NOT available in MongoDB",
        "MongoDB documents are stored in BSON"
      ],
      "correct": 2
    },
    {
      "q": "Identify the correct statement about MongoDB queries.",
      "options": [
        "Queries specify criteria/conditions that identify the documents MongoDB returns to clients",
        "Write operations retrieve data stored in the database",
        "Selection has no effect on data returned over the network",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "q": "The mongo shell provides a full JavaScript environment and is part of the standard MongoDB distribution — what is it called?",
      "options": [
        "mongod",
        "mongodb",
        "mongo",
        "mongosh only"
      ],
      "correct": 2
    },
    {
      "q": "When you query a collection, MongoDB returns which kind of object containing the results?",
      "options": [
        "row",
        "cursor",
        "columns",
        "none of the above"
      ],
      "correct": 1
    },
    {
      "q": "What does the $push update operator do?",
      "options": [
        "Replace a field",
        "Add an element to an array",
        "Remove an element",
        "Update a field's type"
      ],
      "correct": 1
    },
    {
      "q": "Which query finds users where age > 25?",
      "options": [
        "db.users.find({ age: { $gt: 25 } })",
        "db.users.find({ age: { $gte: 25 } })",
        "db.users.find({ age: { $lt: 25 } })",
        "db.users.find({ age: 25 })"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following can improve MongoDB query performance?",
      "options": [
        "Compound index",
        "Text index",
        "Unique index",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What is the primary key field called in a MongoDB document?",
      "options": [
        "_id",
        "id",
        "key",
        "index"
      ],
      "correct": 0
    },
    {
      "q": "MongoDB is classified as what kind of database?",
      "options": [
        "A NoSQL database",
        "A column-oriented database",
        "MongoDB favors XML over JSON",
        "A relational database"
      ],
      "correct": 0
    },
    {
      "q": "MongoDB is best described as a ______ oriented database.",
      "options": [
        "Key/value",
        "Column",
        "Document",
        "Graph"
      ],
      "correct": 2
    },
    {
      "q": "What storage format does MongoDB use internally for documents?",
      "options": [
        "JSON",
        "BSON",
        "XML",
        "YAML"
      ],
      "correct": 1
    },
    {
      "q": "Which annotation is NOT a Spring Data MongoDB annotation?",
      "options": [
        "@Document",
        "@Field",
        "@Entity",
        "@Query"
      ],
      "correct": 2
    },
    {
      "q": "How do you convert a MongoDB ObjectId to a string in JavaScript?",
      "options": [
        "toString()",
        "String.valueOf()",
        "parseObject()",
        "objectToString()"
      ],
      "correct": 0
    },
    {
      "q": "Which method returns exactly one document from a MongoDB collection?",
      "options": [
        "findOne()",
        "findOne1()",
        "selectOne()",
        "getOne()"
      ],
      "correct": 0
    },
    {
      "q": "MongoDB documents can contain nested documents and arrays of key-value pairs.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "NoSQL databases like MongoDB are mainly used for handling large volumes of ______ data.",
      "options": [
        "unstructured",
        "structured",
        "semi-structured only",
        "all of the above equally"
      ],
      "correct": 0
    },
    {
      "q": "Which classes are commonly used to work with MongoDB in a Spring application?",
      "options": [
        "MongoTemplate",
        "MongoRepository",
        "MongoClient",
        "All of the above"
      ],
      "correct": 3
    }
  ],
  "nodejs": [
    {
      "q": "What is Node.js?",
      "options": [
        "A front-end JavaScript framework",
        "A JavaScript runtime built on Chrome's V8 engine for server-side execution",
        "A database management system",
        "A CSS preprocessor"
      ],
      "correct": 1
    },
    {
      "q": "Which command checks the installed version of Node.js?",
      "options": [
        "node --version",
        "npm version",
        "node -check",
        "nodejs --v"
      ],
      "correct": 0
    },
    {
      "q": "What is npm?",
      "options": [
        "Node Process Manager",
        "Node Package Manager used to install and manage dependencies",
        "A built-in Node.js module",
        "A JavaScript testing framework"
      ],
      "correct": 1
    },
    {
      "q": "What does the REPL stand for in Node.js?",
      "options": [
        "Run Execute Print Loop",
        "Read Evaluate Print Loop",
        "Render Event Process Loop",
        "Read Error Print Log"
      ],
      "correct": 1
    },
    {
      "q": "Which global object provides information about the current Node.js process?",
      "options": [
        "global",
        "window",
        "process",
        "runtime"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between Node.js and browser JavaScript?",
      "options": [
        "Node.js uses a different version of JavaScript syntax",
        "Node.js has no access to the DOM but has access to OS-level APIs like the file system",
        "Browser JavaScript is faster than Node.js",
        "Node.js cannot use callbacks"
      ],
      "correct": 1
    },
    {
      "q": "What is the CommonJS module system keyword used to import a module in Node.js?",
      "options": [
        "import",
        "fetch",
        "require",
        "include"
      ],
      "correct": 2
    },
    {
      "q": "How do you export a function named 'greet' from a Node.js module?",
      "options": [
        "export.greet = greet",
        "module.exports.greet = greet",
        "exports default greet",
        "global.greet = greet"
      ],
      "correct": 1
    },
    {
      "q": "What does require('./utils') look for first when resolving the path?",
      "options": [
        "A file named utils in node_modules",
        "A file named utils.js in the current directory",
        "A global module named utils",
        "An environment variable named utils"
      ],
      "correct": 1
    },
    {
      "q": "Which built-in Node.js module provides utilities for working with file and directory paths?",
      "options": [
        "fs",
        "os",
        "path",
        "url"
      ],
      "correct": 2
    },
    {
      "q": "What does path.join() do?",
      "options": [
        "Combines URL segments for HTTP requests",
        "Joins multiple path segments into a single normalized path",
        "Merges two JSON objects",
        "Concatenates file contents"
      ],
      "correct": 1
    },
    {
      "q": "What does __dirname refer to in a Node.js module?",
      "options": [
        "The root directory of the project",
        "The absolute path of the directory containing the current file",
        "The name of the current working directory",
        "The home directory of the OS user"
      ],
      "correct": 1
    },
    {
      "q": "Which npm command initializes a new project and creates a package.json file?",
      "options": [
        "npm start",
        "npm create",
        "npm init",
        "npm setup"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the node_modules directory?",
      "options": [
        "It stores compiled Node.js binaries",
        "It contains all installed npm dependencies for the project",
        "It caches HTTP responses",
        "It holds environment variable definitions"
      ],
      "correct": 1
    },
    {
      "q": "Which built-in Node.js module is used to read and write files?",
      "options": [
        "http",
        "path",
        "fs",
        "stream"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between fs.readFileSync() and fs.readFile()?",
      "options": [
        "readFileSync reads binary files; readFile reads text files",
        "readFileSync blocks execution until complete; readFile is non-blocking and uses a callback",
        "readFile is deprecated; readFileSync is the modern approach",
        "There is no difference"
      ],
      "correct": 1
    },
    {
      "q": "What encoding string should you pass to fs.readFileSync() to get a string result instead of a Buffer?",
      "options": [
        "binary",
        "raw",
        "utf8",
        "ascii-only"
      ],
      "correct": 2
    },
    {
      "q": "Which method would you use to write data to a JSON file, creating or overwriting it?",
      "options": [
        "fs.appendFile()",
        "fs.createFile()",
        "fs.writeFileSync()",
        "fs.saveFile()"
      ],
      "correct": 2
    },
    {
      "q": "How do you access command line arguments passed to a Node.js script?",
      "options": [
        "process.argv",
        "process.args",
        "global.argv",
        "command.args"
      ],
      "correct": 0
    },
    {
      "q": "In process.argv, what is stored at index 0 and index 1?",
      "options": [
        "The script name and the first argument",
        "The path to node and the path to the script being executed",
        "The OS name and Node version",
        "The first and second user-provided arguments"
      ],
      "correct": 1
    },
    {
      "q": "Which npm package is commonly used to parse named command line arguments like --name=John?",
      "options": [
        "commander",
        "yargs",
        "minimist",
        "args-parser"
      ],
      "correct": 1
    },
    {
      "q": "What does JSON.stringify() do when saving data to a file?",
      "options": [
        "Converts a JavaScript object to a JSON-formatted string",
        "Parses a JSON string into a JavaScript object",
        "Encrypts JavaScript objects",
        "Validates JSON structure"
      ],
      "correct": 0
    },
    {
      "q": "What happens if you call JSON.parse() on invalid JSON?",
      "options": [
        "It returns null",
        "It returns undefined",
        "It throws a SyntaxError",
        "It silently fails and returns an empty object"
      ],
      "correct": 2
    },
    {
      "q": "Which Node.js built-in module allows you to debug using the V8 inspector?",
      "options": [
        "debug",
        "inspector",
        "v8",
        "trace"
      ],
      "correct": 1
    },
    {
      "q": "What flag do you add to the node command to enable the built-in debugger?",
      "options": [
        "--debug",
        "--inspect",
        "--breakpoint",
        "--trace"
      ],
      "correct": 1
    },
    {
      "q": "What does the debugger statement do in Node.js code?",
      "options": [
        "Logs the current state to a file",
        "Sets a breakpoint when running with --inspect flag",
        "Throws a debug error",
        "Pauses the event loop permanently"
      ],
      "correct": 1
    },
    {
      "q": "Which tool can be used to restart a Node.js app automatically when files change during development?",
      "options": [
        "pm2",
        "nodemon",
        "forever",
        "watchman"
      ],
      "correct": 1
    },
    {
      "q": "What is the Node.js Event Loop?",
      "options": [
        "A loop that repeatedly re-renders the UI",
        "A mechanism that allows Node.js to perform non-blocking I/O by offloading operations to the system kernel",
        "A loop inside the V8 engine for garbage collection",
        "A polling loop that checks for new HTTP connections"
      ],
      "correct": 1
    },
    {
      "q": "What is a callback function in the context of asynchronous Node.js?",
      "options": [
        "A function that runs before the async operation starts",
        "A function passed as an argument to be executed after an async operation completes",
        "A function used only with Promises",
        "A function that cancels an async operation"
      ],
      "correct": 1
    },
    {
      "q": "What is 'callback hell'?",
      "options": [
        "An error thrown when too many callbacks are registered",
        "Deeply nested callbacks that become difficult to read and maintain",
        "A situation where callbacks run in the wrong order",
        "A memory leak caused by unresolved callbacks"
      ],
      "correct": 1
    },
    {
      "q": "What are the three states of a JavaScript Promise?",
      "options": [
        "Created, Running, Stopped",
        "Pending, Fulfilled, Rejected",
        "Waiting, Complete, Failed",
        "Open, Resolved, Closed"
      ],
      "correct": 1
    },
    {
      "q": "Which method on a Promise handles the rejected state?",
      "options": [
        ".then()",
        ".finally()",
        ".catch()",
        ".error()"
      ],
      "correct": 2
    },
    {
      "q": "What does async/await do in Node.js?",
      "options": [
        "Converts synchronous code to asynchronous",
        "Provides syntactic sugar over Promises making async code look synchronous",
        "Replaces the event loop with a thread pool",
        "Makes all I/O operations blocking"
      ],
      "correct": 1
    },
    {
      "q": "How do you handle errors with async/await?",
      "options": [
        "Using .catch() after the await statement",
        "Using a try/catch block wrapping the await expression",
        "Using process.on('error')",
        "Errors are automatically handled with async/await"
      ],
      "correct": 1
    },
    {
      "q": "Which npm package is commonly used to make HTTP requests from a Node.js backend?",
      "options": [
        "request (deprecated) or node-fetch / axios",
        "xmlhttprequest",
        "browser-fetch",
        "http-client"
      ],
      "correct": 0
    },
    {
      "q": "What does Promise.all() do?",
      "options": [
        "Runs promises sequentially one after another",
        "Resolves when the first promise resolves",
        "Waits for all promises to resolve and returns an array of results",
        "Ignores rejected promises"
      ],
      "correct": 2
    },
    {
      "q": "Which built-in module is used to create an HTTP server in Node.js?",
      "options": [
        "net",
        "express",
        "http",
        "server"
      ],
      "correct": 2
    },
    {
      "q": "What is Express.js?",
      "options": [
        "A built-in Node.js HTTP module",
        "A minimal and flexible Node.js web application framework",
        "A database ORM for Node.js",
        "A front-end rendering engine"
      ],
      "correct": 1
    },
    {
      "q": "Which method on an Express app defines a route that handles GET requests?",
      "options": [
        "app.route('GET', '/path', handler)",
        "app.get('/path', handler)",
        "app.handle('/path', 'GET', handler)",
        "app.request('GET', '/path', handler)"
      ],
      "correct": 1
    },
    {
      "q": "What is Express middleware?",
      "options": [
        "A database connection layer",
        "Functions that have access to request, response, and the next middleware function",
        "Built-in security modules",
        "Route definitions inside a separate file"
      ],
      "correct": 1
    },
    {
      "q": "What does res.send() do in Express?",
      "options": [
        "Redirects the client to another URL",
        "Sends the HTTP response with the provided body",
        "Sets a response header",
        "Closes the server connection"
      ],
      "correct": 1
    },
    {
      "q": "Which Express method serves static files such as HTML, CSS, and images?",
      "options": [
        "express.static()",
        "app.serve()",
        "express.public()",
        "app.assets()"
      ],
      "correct": 0
    },
    {
      "q": "What is Handlebars in the context of a Node.js web server?",
      "options": [
        "A database query builder",
        "A templating engine for rendering dynamic HTML on the server",
        "A middleware for parsing request bodies",
        "A tool for managing environment variables"
      ],
      "correct": 1
    },
    {
      "q": "What does res.render() do in Express with a templating engine?",
      "options": [
        "Sends a JSON response",
        "Renders a view template and sends the resulting HTML to the client",
        "Redirects to a new route",
        "Compiles JavaScript files"
      ],
      "correct": 1
    },
    {
      "q": "How do you access query string parameters (e.g., ?city=London) in Express?",
      "options": [
        "req.params.city",
        "req.body.city",
        "req.query.city",
        "req.headers.city"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the dotenv package in Node.js?",
      "options": [
        "To minify environment files",
        "To load environment variables from a .env file into process.env",
        "To validate production environment settings",
        "To create Docker environment configs"
      ],
      "correct": 1
    },
    {
      "q": "Why should API keys never be hardcoded in source code?",
      "options": [
        "They slow down the application",
        "They can be exposed publicly if the code is shared or committed to version control",
        "Node.js does not support string literals for API keys",
        "Hardcoded values cause memory leaks"
      ],
      "correct": 1
    },
    {
      "q": "Which platform is commonly used to deploy Node.js applications with minimal configuration?",
      "options": [
        "GitHub Pages",
        "Heroku or Render",
        "Firebase Hosting",
        "Netlify"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a Procfile in a Heroku deployment?",
      "options": [
        "It lists npm dependencies",
        "It specifies the command to run the application on startup",
        "It configures SSL certificates",
        "It defines database migration steps"
      ],
      "correct": 1
    },
    {
      "q": "What does the PORT environment variable typically control in a deployed Node.js app?",
      "options": [
        "The database connection port",
        "The port the web server listens on, assigned dynamically by the hosting platform",
        "The SSH port for deployments",
        "The port for WebSocket connections only"
      ],
      "correct": 1
    },
    {
      "q": "What type of database is MongoDB?",
      "options": [
        "A relational SQL database",
        "A document-oriented NoSQL database",
        "A key-value store",
        "A graph database"
      ],
      "correct": 1
    },
    {
      "q": "What is a MongoDB document?",
      "options": [
        "A row in a SQL table",
        "A JSON-like data record stored in a collection",
        "A schema definition file",
        "A MongoDB configuration file"
      ],
      "correct": 1
    },
    {
      "q": "What is Mongoose in Node.js development?",
      "options": [
        "A built-in MongoDB driver",
        "An ODM (Object Data Modeling) library that provides schema-based modeling for MongoDB",
        "A REST API testing tool",
        "A query language for MongoDB"
      ],
      "correct": 1
    },
    {
      "q": "What is a Mongoose Schema?",
      "options": [
        "A database index",
        "A definition of the structure, types, and validation rules for a MongoDB document",
        "A MongoDB connection string",
        "A migration file for updating documents"
      ],
      "correct": 1
    },
    {
      "q": "Which Mongoose method saves a new document to the database?",
      "options": [
        "Model.create() or instance.save()",
        "Model.insert()",
        "Model.push()",
        "Model.write()"
      ],
      "correct": 0
    },
    {
      "q": "What does Model.findById(id) return in Mongoose?",
      "options": [
        "All documents matching the id field",
        "A single document with the matching _id, or null if not found",
        "An array of matching documents",
        "The count of documents with that id"
      ],
      "correct": 1
    },
    {
      "q": "Which Mongoose method is used to delete a single document by its ID?",
      "options": [
        "Model.remove(id)",
        "Model.findByIdAndDelete(id)",
        "Model.deleteOne({ _id: id })",
        "Both B and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "What does the REST in REST API stand for?",
      "options": [
        "Rendered Endpoint State Transfer",
        "Representational State Transfer",
        "Remote Execution Service Technology",
        "Reliable Endpoint Secure Transfer"
      ],
      "correct": 1
    },
    {
      "q": "Which HTTP method is used to partially update an existing resource in a REST API?",
      "options": [
        "PUT",
        "POST",
        "PATCH",
        "UPDATE"
      ],
      "correct": 2
    },
    {
      "q": "What HTTP status code indicates a resource was successfully created?",
      "options": [
        "200",
        "204",
        "201",
        "301"
      ],
      "correct": 2
    },
    {
      "q": "What HTTP status code is returned when a resource is not found?",
      "options": [
        "400",
        "403",
        "500",
        "404"
      ],
      "correct": 3
    },
    {
      "q": "How do you access URL parameters (e.g., /users/:id) in Express?",
      "options": [
        "req.query.id",
        "req.body.id",
        "req.params.id",
        "req.headers.id"
      ],
      "correct": 2
    },
    {
      "q": "Which middleware is needed to parse JSON request bodies in Express?",
      "options": [
        "express.urlencoded()",
        "express.text()",
        "express.json()",
        "body-parser only"
      ],
      "correct": 2
    },
    {
      "q": "What is JWT used for in Node.js API authentication?",
      "options": [
        "Encrypting the database connection string",
        "Generating stateless authentication tokens for verifying user identity",
        "Hashing passwords before storage",
        "Managing session cookies"
      ],
      "correct": 1
    },
    {
      "q": "Which npm package is widely used for hashing passwords in Node.js?",
      "options": [
        "crypto",
        "md5",
        "bcryptjs",
        "sha256"
      ],
      "correct": 2
    },
    {
      "q": "What is a salt in password hashing?",
      "options": [
        "The output of the hash function",
        "A random value added to a password before hashing to prevent rainbow table attacks",
        "The number of hash iterations",
        "An encryption key stored in the database"
      ],
      "correct": 1
    },
    {
      "q": "Where is a JWT typically sent in subsequent API requests after login?",
      "options": [
        "In the request body",
        "In the URL as a query parameter",
        "In the Authorization header as a Bearer token",
        "In a cookie only"
      ],
      "correct": 2
    },
    {
      "q": "What is Express middleware used for in API authentication?",
      "options": [
        "To render HTML templates",
        "To verify the token and attach the user to the request before the route handler runs",
        "To hash passwords automatically",
        "To connect to the database"
      ],
      "correct": 1
    },
    {
      "q": "In Mongoose, how do you define a relationship where a Task belongs to a User?",
      "options": [
        "By embedding the full User document in each Task",
        "By storing the User's _id as a reference field with type: mongoose.Schema.Types.ObjectId",
        "By using a JOIN query in MongoDB",
        "By duplicating the user's data in every task document"
      ],
      "correct": 1
    },
    {
      "q": "What does Mongoose's populate() method do?",
      "options": [
        "Fills a collection with seed data",
        "Replaces a reference ObjectId field with the actual referenced document data",
        "Validates all documents in a collection",
        "Creates indexes on a collection"
      ],
      "correct": 1
    },
    {
      "q": "How do you implement pagination in a Mongoose query for a REST API?",
      "options": [
        "Using Model.page() and Model.limit()",
        "Using .skip() and .limit() on the query",
        "Using Model.paginate() built-in method",
        "Using an offset query parameter that Mongoose handles automatically"
      ],
      "correct": 1
    },
    {
      "q": "How do you sort query results in Mongoose?",
      "options": [
        "Model.find().orderBy({ field: 1 })",
        "Model.find().sort({ field: 1 })",
        "Model.find().arrange('field', 'asc')",
        "Model.find({ sort: 'field' })"
      ],
      "correct": 1
    },
    {
      "q": "What does the value 1 and -1 mean in Mongoose sort options?",
      "options": [
        "1 means primary sort, -1 means secondary sort",
        "1 means ascending, -1 means descending",
        "1 means include field, -1 means exclude field",
        "1 means case-sensitive, -1 means case-insensitive"
      ],
      "correct": 1
    },
    {
      "q": "What query operator would you use in Mongoose to filter tasks that are completed?",
      "options": [
        "Model.find({ completed: $eq: true })",
        "Model.find({ completed: true })",
        "Model.filter({ completed: true })",
        "Model.where('completed').equals(true)"
      ],
      "correct": 1
    },
    {
      "q": "Which npm package is commonly used for handling file uploads in Node.js/Express?",
      "options": [
        "formidable",
        "multer",
        "busboy",
        "multiparty"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of multer's fileFilter option?",
      "options": [
        "To set the file upload size limit",
        "To validate uploaded files and reject those that don't meet criteria",
        "To rename files after upload",
        "To compress uploaded files"
      ],
      "correct": 1
    },
    {
      "q": "What is the Sharp npm library used for in file upload workflows?",
      "options": [
        "File encryption",
        "Image processing such as resizing and format conversion",
        "Virus scanning uploaded files",
        "Streaming large file uploads"
      ],
      "correct": 1
    },
    {
      "q": "What does req.file contain after multer processes an upload?",
      "options": [
        "The file path on a remote server",
        "Information about the uploaded file including the buffer, mimetype, and original name",
        "The file content as a string",
        "The number of files uploaded"
      ],
      "correct": 1
    },
    {
      "q": "Which npm package is commonly used to send transactional emails from Node.js?",
      "options": [
        "nodemailer or SendGrid's @sendgrid/mail",
        "emailjs",
        "mail-node",
        "smtp-client"
      ],
      "correct": 0
    },
    {
      "q": "What information is required to send an email using SendGrid from Node.js?",
      "options": [
        "A database connection string",
        "An API key, sender email, recipient email, subject, and body",
        "An SMTP username and password only",
        "An OAuth 2.0 token from Google"
      ],
      "correct": 1
    },
    {
      "q": "What is the primary testing framework used in the Node.js Task App examples?",
      "options": [
        "Mocha",
        "Jasmine",
        "Jest",
        "AVA"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the supertest package in Node.js testing?",
      "options": [
        "To mock the MongoDB database",
        "To make HTTP assertions against an Express app without starting a real server",
        "To spy on function calls",
        "To generate test data"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of beforeEach() in Jest?",
      "options": [
        "To run a function once before all tests in a file",
        "To run setup code before each individual test case",
        "To clean up after all tests have run",
        "To skip the next test conditionally"
      ],
      "correct": 1
    },
    {
      "q": "What does jest.fn() create?",
      "options": [
        "A real implementation of a function for integration testing",
        "A mock function that tracks calls, arguments, and return values",
        "A test suite with auto-generated tests",
        "A spy that wraps an existing function"
      ],
      "correct": 1
    },
    {
      "q": "Why is it important to use a separate test database in Node.js testing?",
      "options": [
        "The test database is faster than the production database",
        "To prevent tests from modifying or corrupting production data",
        "Jest requires a separate database connection",
        "MongoDB does not allow concurrent connections"
      ],
      "correct": 1
    },
    {
      "q": "What is Socket.io used for in Node.js applications?",
      "options": [
        "Server-side rendering of HTML templates",
        "Enabling real-time, bidirectional, event-driven communication between client and server",
        "Connecting Node.js to SQL databases",
        "Handling file streaming"
      ],
      "correct": 1
    },
    {
      "q": "What underlying protocol does Socket.io primarily use for real-time communication?",
      "options": [
        "HTTP/2",
        "WebSockets (falling back to HTTP long-polling)",
        "UDP sockets",
        "gRPC"
      ],
      "correct": 1
    },
    {
      "q": "How do you emit an event to all connected clients in Socket.io?",
      "options": [
        "io.to('all').emit('event', data)",
        "socket.sendAll('event', data)",
        "io.emit('event', data)",
        "io.broadcast('event', data)"
      ],
      "correct": 2
    },
    {
      "q": "How do you emit an event to all clients except the sender in Socket.io?",
      "options": [
        "io.except(socket).emit('event', data)",
        "socket.broadcast.emit('event', data)",
        "io.others.emit('event', data)",
        "socket.emit.all('event', data)"
      ],
      "correct": 1
    },
    {
      "q": "What event is automatically triggered on the server when a client connects to a Socket.io server?",
      "options": [
        "'open'",
        "'connect'",
        "'connection'",
        "'ready'"
      ],
      "correct": 2
    },
    {
      "q": "What are Socket.io rooms used for?",
      "options": [
        "Storing persistent data between connections",
        "Grouping sockets so you can emit events to a subset of clients",
        "Authenticating WebSocket connections",
        "Creating separate server instances"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to join a Socket.io room?",
      "options": [
        "socket.joinRoom(roomName)",
        "socket.join(roomName)",
        "io.room(roomName).add(socket)",
        "socket.connect(roomName)"
      ],
      "correct": 1
    },
    {
      "q": "In the Chat App, what is the typical Socket.io event emitted when a user sends a message?",
      "options": [
        "'message-send'",
        "'chat-message' or 'sendMessage'",
        "'new-data'",
        "'post-message'"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'disconnect' event in Socket.io?",
      "options": [
        "It fires when the server shuts down",
        "It fires on the server when a particular client disconnects",
        "It fires when an emit fails",
        "It fires when authentication expires"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following correctly chains Mongoose validation in a schema field?",
      "options": [
        "name: { type: String, required: true, trim: true }",
        "name: String.required().trim()",
        "name: { String, required, trim }",
        "name: Schema.required('String').trim()"
      ],
      "correct": 0
    },
    {
      "q": "What does the trim option do in a Mongoose schema string field?",
      "options": [
        "Limits the string to a maximum length",
        "Removes leading and trailing whitespace before saving",
        "Converts the string to lowercase",
        "Validates that the string contains no spaces"
      ],
      "correct": 1
    },
    {
      "q": "What does the following code do? app.use((err, req, res, next) => { res.status(500).send({ error: err.message }) })",
      "options": [
        "Defines a standard route handler",
        "Defines an Express error-handling middleware (4 parameters)",
        "Sets a default response for all routes",
        "Creates a custom HTTP method"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'next' function in Express middleware?",
      "options": [
        "To send the response to the client",
        "To pass control to the next middleware or route handler in the stack",
        "To restart the request cycle",
        "To log the request"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Express route do? app.delete('/tasks/:id', async (req, res) => { ... })",
      "options": [
        "Retrieves all tasks and deletes the database",
        "Handles DELETE requests to remove a task identified by its id URL parameter",
        "Permanently drops the tasks collection",
        "Creates a new task with the given id"
      ],
      "correct": 1
    },
    {
      "q": "What is the event emitter pattern in Node.js?",
      "options": [
        "A pattern for server-sent events only",
        "A built-in observer pattern where objects emit named events and listeners respond",
        "A design pattern exclusive to Socket.io",
        "A way to trigger DOM events on the server"
      ],
      "correct": 1
    },
    {
      "q": "Which class do you extend to create a custom Event Emitter in Node.js?",
      "options": [
        "require('events').EventEmitter",
        "require('stream').Emitter",
        "process.EventEmitter",
        "global.EventEmitter"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the package-lock.json file in a Node.js project?",
      "options": [
        "To lock the Node.js version used in the project",
        "To record the exact version of every installed dependency for reproducible installs",
        "To prevent npm from installing new packages",
        "To define scripts that cannot be overridden"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between dependencies and devDependencies in package.json?",
      "options": [
        "There is no practical difference",
        "dependencies are needed in production; devDependencies are only needed during development",
        "devDependencies are installed globally; dependencies are local",
        "dependencies are for the front-end; devDependencies are for the back-end"
      ],
      "correct": 1
    },
    {
      "q": "What does npm install --save-dev package-name do?",
      "options": [
        "Installs the package and adds it to dependencies",
        "Installs the package globally",
        "Installs the package and adds it to devDependencies",
        "Installs the package without updating package.json"
      ],
      "correct": 2
    },
    {
      "q": "In the context of Node.js streams, what is a readable stream?",
      "options": [
        "A stream that only writes data",
        "A stream from which data can be consumed",
        "A stream that transforms data",
        "A stream connected to a WebSocket"
      ],
      "correct": 1
    },
    {
      "q": "What does the MongoDB $match stage do in an aggregation pipeline?",
      "options": [
        "Groups documents by a field",
        "Filters documents to pass only matching documents to the next stage",
        "Sorts documents in a collection",
        "Projects specific fields from documents"
      ],
      "correct": 1
    },
    {
      "q": "What does CORS stand for and why is it relevant to Node.js APIs?",
      "options": [
        "Cross-Origin Resource Sharing — it controls which domains can access your API from a browser",
        "Client-Oriented Request System — it manages API rate limiting",
        "Cached Object Response Strategy — it improves API performance",
        "Cross-Origin Response Security — it encrypts API responses"
      ],
      "correct": 0
    },
    {
      "q": "Which npm package is typically used to enable CORS in an Express application?",
      "options": [
        "express-cors",
        "cors",
        "allow-origin",
        "helmet"
      ],
      "correct": 1
    },
    {
      "q": "What is the command used to create a new item when using mongoose?",
      "options": [
        "Book.Save()",
        "Book.New()",
        "Book.Create()"
      ],
      "correct": 0
    },
    {
      "q": "What is the HTTP verb used to update a resource in REST?",
      "options": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "correct": 3
    },
    {
      "q": "Google's V8 Engine, also used in Chrome, provides what capability to node.js?",
      "options": [
        "JavaScript support",
        "3rd party module repository",
        "Support for HTML rendering and DOM manipulation",
        "Asynchronous File and Network access"
      ],
      "correct": 0
    },
    {
      "q": "What is the package you use to connect to MongoDB?",
      "options": [
        "Mongod",
        "MongoConnect",
        "Schema",
        "Mongoose"
      ],
      "correct": 3
    },
    {
      "q": "Assigning a value to \"module.exports\" in a node.js JavaScript file",
      "options": [
        "allows that value to be imported into other JavaScript files in your project.",
        "publishes the exported value to npm, node's package repository.",
        "persists that value to disk, allowing you to retrieve it later."
      ],
      "correct": 0
    },
    {
      "q": "Running \"npm init\" will...",
      "options": [
        "initialize your project, creating a project.json file.",
        "initialize the npm cli on your system.",
        "download and add the \"init\" module to your node.js project."
      ],
      "correct": 0
    },
    {
      "q": "What is the module for Node that allows you to run a web server?",
      "options": [
        "Sublime",
        "REST",
        "FS",
        "HTTP"
      ],
      "correct": 3
    },
    {
      "q": "What is the mongoose command used to delete an item?",
      "options": [
        "delete()",
        "trash()",
        "remove()"
      ],
      "correct": 2
    },
    {
      "q": "What verb do you use to do a partial update on an item?",
      "options": [
        "Post",
        "Patch",
        "Put"
      ],
      "correct": 1
    },
    {
      "q": "What is the object that you use to pull query string params?",
      "options": [
        "res.query",
        "res.params",
        "req.query",
        "req.params"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following are automation tools?",
      "options": [
        "Gulp",
        "JSX",
        "Express"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Data bindings are applied as . . . . . . . . or as special sequences of characters in strings.",
      "options": [
        "expressions",
        "attributes on HTML elements",
        "elements itself",
        "none of above"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "A data binding has these four parts:",
      "options": [
        "host element, curly brackets, target, expression",
        "host element, square brackets, target, evaluation",
        "host element, square brackets, target, expression",
        "host element, parentheses, target, expression"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "What is the return type of Java lambda expressions?",
      "options": [
        "void",
        "Lambda",
        "Function",
        "Regex"
      ],
      "correct": 2
    },
    {
      "q": "What is the HTTP verb used to update a resource in REST (full replace)?",
      "options": [
        "DELETE",
        "GET",
        "POST",
        "PUT"
      ],
      "correct": 3
    },
    {
      "q": "Assigning a value to \"module.exports\" in a node.js file",
      "options": [
        "Allows that value to be imported into other JavaScript files in your project.",
        "Publishes the exported value to npm.",
        "Persists that value to disk."
      ],
      "correct": 0
    },
    {
      "q": "EventEmitter's simple interface basically encompasses two methods, which can be used to trigger custom events and listen to events, both synchronously or asynchronously:",
      "options": [
        "exit()",
        "superscript()",
        "subscribe()",
        "emit() (paired with .on())"
      ],
      "correct": 3
    }
  ],
  "javascript": [
    {
      "q": "Which of the following is the correct way to declare a variable in JavaScript that cannot be reassigned?",
      "options": [
        "let x = 10;",
        "var x = 10;",
        "const x = 10;",
        "static x = 10;"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: console.log(typeof null);",
      "options": [
        "\"null\"",
        "\"object\"",
        "\"undefined\"",
        "\"number\""
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is NOT a JavaScript data type?",
      "options": [
        "Symbol",
        "BigInt",
        "Float",
        "Undefined"
      ],
      "correct": 2
    },
    {
      "q": "What will the following code output? for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }",
      "options": [
        "0 1 2",
        "3 3 3",
        "0 0 0",
        "1 2 3"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to add an element to the end of an array?",
      "options": [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'this' keyword in JavaScript?",
      "options": [
        "Refers to the current function",
        "Refers to the global object by default in non-strict mode",
        "Refers to the parent object of the current execution context",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Write a function that returns the sum of all numbers in an array using reduce.",
      "options": [
        "arr.reduce((acc, val) => acc + val, 0)",
        "arr.reduce((acc, val) => acc + val)",
        "arr.reduce((acc, val) => { return acc + val; }, 0)",
        "All of the above are correct"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following correctly creates a shallow copy of an object?",
      "options": [
        "Object.assign({}, obj)",
        "{ ...obj }",
        "JSON.parse(JSON.stringify(obj))",
        "Both A and B are correct"
      ],
      "correct": 3
    },
    {
      "q": "What is a closure in JavaScript?",
      "options": [
        "A function that is immediately invoked",
        "A function that has access to variables from its outer scope even after the outer function has returned",
        "A function that is defined inside an object",
        "A function that takes another function as an argument"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of: console.log(0.1 + 0.2 === 0.3);",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "correct": 1
    },
    {
      "q": "Which array method creates a new array with all elements that pass a test?",
      "options": [
        "map()",
        "filter()",
        "reduce()",
        "forEach()"
      ],
      "correct": 1
    },
    {
      "q": "What does the '=== ' operator do?",
      "options": [
        "Compares only values, not types",
        "Compares both values and types without type coercion",
        "Assigns a value to a variable",
        "Compares references only"
      ],
      "correct": 1
    },
    {
      "q": "Write a promise that resolves after 1 second.",
      "options": [
        "new Promise((resolve) => setTimeout(resolve, 1000))",
        "Promise.delay(1000)",
        "setTimeout(() => Promise.resolve(), 1000)",
        "Promise.resolve().setTimeout(1000)"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of: console.log([] + []);",
      "options": [
        "[]",
        "\"\"",
        "undefined",
        "TypeError"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is NOT a valid way to define a function in JavaScript?",
      "options": [
        "function foo() {}",
        "const foo = function() {};",
        "const foo = () => {};",
        "def foo(): {}"
      ],
      "correct": 3
    },
    {
      "q": "What is event delegation in JavaScript?",
      "options": [
        "Attaching an event listener to a parent element to handle events on child elements",
        "Delegating events to a web worker",
        "Passing event objects between functions",
        "Automatically triggering events"
      ],
      "correct": 0
    },
    {
      "q": "What will the following code output? console.log(1 + '2' + 3);",
      "options": [
        "6",
        "123",
        "15",
        "33"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to remove the last element from an array and return it?",
      "options": [
        "pop()",
        "push()",
        "shift()",
        "slice()"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the 'async/await' syntax?",
      "options": [
        "To write asynchronous code in a synchronous style",
        "To make functions run faster",
        "To create web workers",
        "To handle errors more easily"
      ],
      "correct": 0
    },
    {
      "q": "Write a function that uses destructuring to extract the 'name' and 'age' properties from an object.",
      "options": [
        "const { name, age } = person;",
        "const name = person.name; const age = person.age;",
        "const [name, age] = person;",
        "Both A and B are correct but A is destructuring"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of: console.log(typeof NaN);",
      "options": [
        "\"NaN\"",
        "\"number\"",
        "\"undefined\"",
        "\"object\""
      ],
      "correct": 1
    },
    {
      "q": "Which of the following statements about the 'map()' method is true?",
      "options": [
        "It modifies the original array",
        "It returns a new array of the same length",
        "It returns a new array with only elements that pass a test",
        "It executes a function for each array element but returns undefined"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'bind()' method?",
      "options": [
        "To create a new function with a fixed 'this' value",
        "To combine two functions",
        "To attach an event listener",
        "To bind a variable to a scope"
      ],
      "correct": 0
    },
    {
      "q": "What will the following code output? console.log([] == false);",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is a way to prevent default behavior of an event?",
      "options": [
        "event.stopPropagation()",
        "event.preventDefault()",
        "return false",
        "Both B and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of: console.log(!!\"false\");",
      "options": [
        "false",
        "true",
        "undefined",
        "\"false\""
      ],
      "correct": 1
    },
    {
      "q": "Write a function that returns a new array containing only unique values from the input array.",
      "options": [
        "[...new Set(arr)]",
        "arr.filter((v, i, a) => a.indexOf(v) === i)",
        "Both A and B are correct",
        "arr.unique()"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between 'let' and 'var'?",
      "options": [
        "let is block-scoped, var is function-scoped",
        "let cannot be redeclared in the same scope",
        "let is not hoisted in the same way as var",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What will the following code output? const obj = { a: 1, b: 2 }; const { a, c } = obj; console.log(c);",
      "options": [
        "2",
        "undefined",
        "null",
        "ReferenceError"
      ],
      "correct": 1
    },
    {
      "q": "Which method converts a JSON string into a JavaScript object?",
      "options": [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.toObject()",
        "JSON.decode()"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'Set' object in JavaScript?",
      "options": [
        "To store unique values of any type",
        "To store key-value pairs",
        "To store ordered lists",
        "To store binary data"
      ],
      "correct": 0
    },
    {
      "q": "Write a function that delays execution using setTimeout and returns a promise.",
      "options": [
        "function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }",
        "function delay(ms) { setTimeout(() => {}, ms); }",
        "function delay(ms) { return Promise.setTimeout(ms); }",
        "function delay(ms) { return new Promise((resolve, reject) => { setTimeout(reject, ms); }); }"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of: console.log(3 > 2 > 1);",
      "options": [
        "true",
        "false",
        "undefined",
        "TypeError"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a valid way to create a class in ES6?",
      "options": [
        "class MyClass { constructor() {} }",
        "const MyClass = class { constructor() {} }",
        "Both A and B are valid",
        "function MyClass() { this.constructor = function() {}; }"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of the 'Symbol' data type?",
      "options": [
        "To create unique identifiers",
        "To represent mathematical symbols",
        "To create private properties",
        "Both A and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "Which method is used to flatten an array to a specified depth?",
      "options": [
        "flat()",
        "flatten()",
        "reduce()",
        "concat()"
      ],
      "correct": 0
    },
    {
      "q": "What is a 'callback hell' in JavaScript?",
      "options": [
        "An infinite loop of callbacks",
        "Nested callbacks that become hard to read and maintain",
        "A debugging tool for callbacks",
        "A design pattern for error handling"
      ],
      "correct": 1
    },
    {
      "q": "Write a function that checks if a variable is an array.",
      "options": [
        "Array.isArray(variable)",
        "variable instanceof Array",
        "Both A and B are correct",
        "typeof variable === 'array'"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: console.log('5' - 3);",
      "options": [
        "2",
        "53",
        "NaN",
        "TypeError"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements about arrow functions is true?",
      "options": [
        "They have their own 'this' context",
        "They cannot be used as constructors",
        "They cannot use the 'arguments' object",
        "Both B and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "What is the purpose of the 'spread' operator (...) in JavaScript?",
      "options": [
        "To spread elements of an iterable into individual elements",
        "To create a shallow copy of an array or object",
        "To pass array elements as arguments to a function",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What will the following code output? console.log(!![]);",
      "options": [
        "true",
        "false",
        "[]",
        "undefined"
      ],
      "correct": 0
    },
    {
      "q": "Which method is used to combine two or more arrays?",
      "options": [
        "concat()",
        "merge()",
        "join()",
        "combine()"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of: console.log(typeof (function() {}));",
      "options": [
        "\"function\"",
        "\"object\"",
        "\"undefined\"",
        "\"array\""
      ],
      "correct": 0
    },
    {
      "q": "Write a function that throttles another function to execute at most once every specified milliseconds.",
      "options": [
        "function throttle(func, limit) { let inThrottle; return function() { if (!inThrottle) { func.apply(this, arguments); inThrottle = true; setTimeout(() => inThrottle = false, limit); } } }",
        "function throttle(func, limit) { return function() { setTimeout(() => func.apply(this, arguments), limit); } }",
        "function throttle(func, limit) { let lastCall = 0; return function() { const now = Date.now(); if (now - lastCall >= limit) { lastCall = now; func.apply(this, arguments); } } }",
        "Both A and C are valid throttle implementations"
      ],
      "correct": 3
    },
    {
      "q": "What is the purpose of the 'WeakMap' object?",
      "options": [
        "A Map with weak references to keys, allowing garbage collection",
        "A Map that only stores weak values",
        "A Map that is not enumerable",
        "Both A and C are correct"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following is a valid way to create a deep clone of an object (excluding special cases like Date, RegExp)?",
      "options": [
        "JSON.parse(JSON.stringify(obj))",
        "structuredClone(obj)",
        "_.cloneDeep(obj) (Lodash)",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of: console.log(Number(\"123abc\"));",
      "options": [
        "123",
        "NaN",
        "undefined",
        "0"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following correctly explains the difference between 'var', 'let', and 'const' in JavaScript?",
      "options": [
        "'var' is block-scoped; 'let' and 'const' are function-scoped",
        "'var' is function-scoped and hoisted; 'let' and 'const' are block-scoped and not initialized during hoisting",
        "'const' variables can be reassigned; 'let' variables cannot",
        "'let' and 'var' behave identically; only 'const' differs"
      ],
      "correct": 1
    },
    {
      "q": "What does the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);",
      "options": [
        "true",
        "false",
        "undefined",
        "NaN"
      ],
      "correct": 1
    },
    {
      "q": "Which operator returns the data type of a variable as a string?",
      "options": [
        "instanceof",
        "typeof",
        "datatype()",
        "type"
      ],
      "correct": 1
    },
    {
      "q": "What is the result of: console.log(5 == '5') and console.log(5 === '5') respectively?",
      "options": [
        "false, false",
        "true, true",
        "true, false",
        "false, true"
      ],
      "correct": 2
    },
    {
      "q": "What will this code output?\n\nlet x = 10;\nif (x > 5) {\n  let x = 20;\n  console.log(x);\n}\nconsole.log(x);",
      "options": [
        "20, 20",
        "10, 10",
        "20, 10",
        "10, 20"
      ],
      "correct": 2
    },
    {
      "q": "What does the nullish coalescing operator (??) do?",
      "options": [
        "Returns the left operand if it is falsy, otherwise the right",
        "Returns the right operand only if the left is null or undefined",
        "Acts as a shorthand for the ternary operator in all cases",
        "Converts null to 0 and undefined to empty string"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this code?\n\nconsole.log(1 + '2' + 3);",
      "options": [
        "6",
        "123",
        "'123'",
        "15"
      ],
      "correct": 1
    },
    {
      "q": "Which control flow statement is used to exit a switch case block and prevent fall-through?",
      "options": [
        "exit",
        "return",
        "break",
        "continue"
      ],
      "correct": 2
    },
    {
      "q": "What will this loop print?\n\nfor (let i = 0; i < 3; i++) {\n  if (i === 1) continue;\n  console.log(i);\n}",
      "options": [
        "0, 1, 2",
        "0, 2",
        "1",
        "0, 1"
      ],
      "correct": 1
    },
    {
      "q": "What is the result of the following code?\n\nconst obj = { a: 1, b: 2 };\nconst { a, c = 5 } = obj;\nconsole.log(a, c);",
      "options": [
        "1 undefined",
        "1 5",
        "undefined 5",
        "Error"
      ],
      "correct": 1
    },
    {
      "q": "Which method creates a new object with the specified prototype object?",
      "options": [
        "Object.assign()",
        "Object.create()",
        "Object.new()",
        "Object.prototype()"
      ],
      "correct": 1
    },
    {
      "q": "What does Object.freeze() do to an object?",
      "options": [
        "Creates a deep clone of the object",
        "Prevents new properties from being added and existing properties from being modified or deleted",
        "Prevents only deletion of properties, but allows modification",
        "Converts the object to a read-only string"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this code?\n\nconst arr = [1, 2, 3];\nconst [first, ...rest] = arr;\nconsole.log(rest);",
      "options": [
        "[1]",
        "[2, 3]",
        "[1, 2]",
        "[3]"
      ],
      "correct": 1
    },
    {
      "q": "Which Array method returns a new array with only the elements that pass a test?",
      "options": [
        "map()",
        "reduce()",
        "filter()",
        "find()"
      ],
      "correct": 2
    },
    {
      "q": "What does the following code return?\n\n[1, 2, 3].reduce((acc, val) => acc + val, 0);",
      "options": [
        "[1, 2, 3]",
        "6",
        "0",
        "undefined"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between Array.prototype.map() and Array.prototype.forEach()?",
      "options": [
        "forEach modifies the original array; map does not",
        "map returns a new array; forEach returns undefined",
        "map can only be used with numbers; forEach works with any type",
        "They are functionally identical"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this code?\n\nconsole.log([1, 2, 3].map(x => x * 2).filter(x => x > 4));",
      "options": [
        "[2, 4, 6]",
        "[6]",
        "[4, 6]",
        "[5, 6]"
      ],
      "correct": 1
    },
    {
      "q": "What will the following code output?\n\nfunction outer() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst inc = outer();\nconsole.log(inc());\nconsole.log(inc());",
      "options": [
        "1, 1",
        "0, 1",
        "1, 2",
        "undefined, undefined"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between function declarations and function expressions in terms of hoisting?",
      "options": [
        "Both are fully hoisted",
        "Neither is hoisted",
        "Function declarations are fully hoisted; function expressions are not initialized until runtime",
        "Function expressions are fully hoisted; function declarations are not"
      ],
      "correct": 2
    },
    {
      "q": "What does the 'this' keyword refer to inside an arrow function?",
      "options": [
        "The arrow function itself",
        "The global object always",
        "The lexically enclosing context where the arrow function was defined",
        "undefined in strict mode, global in non-strict mode"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of this code?\n\nconst greet = (name = 'World') => `Hello, ${name}!`;\nconsole.log(greet());",
      "options": [
        "Hello, undefined!",
        "Hello, !",
        "Hello, World!",
        "Error"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is the correct way to call a function with a specific 'this' value and pass arguments one by one?",
      "options": [
        "fn.bind(thisArg, arg1, arg2)",
        "fn.call(thisArg, arg1, arg2)",
        "fn.apply(thisArg, arg1, arg2)",
        "fn.run(thisArg, arg1, arg2)"
      ],
      "correct": 1
    },
    {
      "q": "What is a pure function?",
      "options": [
        "A function written in strict mode only",
        "A function that returns a value and has no side effects, always producing the same output for the same inputs",
        "A function that only accepts primitive types",
        "A function declared with the 'pure' keyword"
      ],
      "correct": 1
    },
    {
      "q": "In Node.js, what is the purpose of the 'process.argv' array?",
      "options": [
        "It lists all currently running processes",
        "It contains the command-line arguments passed when the Node.js process was launched",
        "It stores environment variables for the current process",
        "It represents the arguments of the last function call"
      ],
      "correct": 1
    },
    {
      "q": "What is the Node.js module system's primary mechanism for sharing code between files?",
      "options": [
        "Using the global window object",
        "Using 'import' and 'export' with script tags",
        "Using 'require()' to import and 'module.exports' to export",
        "Using the 'include()' function"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between the CommonJS 'require' system and ES Modules 'import' in Node.js?",
      "options": [
        "require is synchronous; ES module imports are asynchronous and statically analyzed",
        "require is only for built-in modules; import is for npm packages",
        "They are identical; 'import' is just newer syntax",
        "require works only on Windows; import works on all platforms"
      ],
      "correct": 0
    },
    {
      "q": "When reading a file using Node.js's 'fs' module, what is the key difference between fs.readFile() and fs.readFileSync()?",
      "options": [
        "readFile reads the entire file; readFileSync reads line by line",
        "readFile is asynchronous and non-blocking; readFileSync is synchronous and blocks the event loop",
        "readFileSync is faster for large files; readFile is faster for small files",
        "readFile returns a Buffer; readFileSync returns a string"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Node.js code do?\n\nconst fs = require('fs');\nfs.appendFile('log.txt', 'New entry\\n', (err) => {\n  if (err) throw err;\n});",
      "options": [
        "Creates a new file called log.txt and overwrites it",
        "Appends 'New entry\\n' to log.txt, creating it if it doesn't exist",
        "Reads the contents of log.txt and logs them",
        "Deletes log.txt and recreates it"
      ],
      "correct": 1
    },
    {
      "q": "Which Node.js built-in module is used to work with file and directory paths in a cross-platform way?",
      "options": [
        "fs",
        "os",
        "path",
        "url"
      ],
      "correct": 2
    },
    {
      "q": "In Node.js debugging with the '--inspect' flag, which tool is commonly used to connect to the debugger?",
      "options": [
        "Node's built-in debug console only",
        "Chrome DevTools via chrome://inspect",
        "The npm debug package exclusively",
        "Postman"
      ],
      "correct": 1
    },
    {
      "q": "What is the Event Loop in Node.js?",
      "options": [
        "A for loop that processes all network requests",
        "A mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel and processing callbacks when complete",
        "The main thread that handles all CPU-intensive tasks",
        "A Node.js-specific implementation of the while loop"
      ],
      "correct": 1
    },
    {
      "q": "What is 'callback hell' and what is the primary way to avoid it in modern Node.js?",
      "options": [
        "Using too many callbacks in one file; avoided by reducing function count",
        "Deeply nested callbacks that are hard to read; avoided by using Promises or async/await",
        "Callbacks that are never called; avoided by using try-catch",
        "Synchronous callbacks; avoided by using setTimeout"
      ],
      "correct": 1
    },
    {
      "q": "What does 'async/await' in Node.js ultimately rely on under the hood?",
      "options": [
        "Callbacks",
        "Generators",
        "Promises",
        "Event emitters"
      ],
      "correct": 2
    },
    {
      "q": "What will the following code log?\n\nasync function fetchData() {\n  return 42;\n}\nconsole.log(fetchData());",
      "options": [
        "42",
        "undefined",
        "Promise { 42 }",
        "Error: fetchData is not a Promise"
      ],
      "correct": 2
    },
    {
      "q": "Which npm package is commonly used in Node.js to make HTTP requests to external APIs?",
      "options": [
        "fs",
        "http",
        "node-fetch or axios",
        "express"
      ],
      "correct": 2
    },
    {
      "q": "In an Express.js web server, what does the following code create?\n\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Hello');\n});",
      "options": [
        "A POST route at the root URL",
        "A GET route at '/' that responds with 'Hello'",
        "A middleware function for all routes",
        "A database connection"
      ],
      "correct": 1
    },
    {
      "q": "In Node.js, what is the 'http' module used for?",
      "options": [
        "Sending emails via HTTP",
        "Creating HTTP servers and making HTTP requests natively without external packages",
        "Parsing HTTP headers only",
        "Managing HTTPS certificates"
      ],
      "correct": 1
    },
    {
      "q": "What does the following code accomplish in a Node.js weather app context?\n\nconst url = `https://api.weather.com/v1?q=${encodeURIComponent(city)}&appid=${apiKey}`;",
      "options": [
        "Creates a URL with a raw city string and hardcoded key",
        "Encodes the city name to be URL-safe and embeds it with an API key in the query string",
        "Only works if the city has no special characters",
        "Sends a GET request immediately"
      ],
      "correct": 1
    },
    {
      "q": "When deploying a Node.js app to Heroku, what file tells Heroku how to start the application?",
      "options": [
        "package.json (main field)",
        "Procfile",
        "server.config.js",
        ".env"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'PORT' environment variable when deploying a Node.js app?",
      "options": [
        "To set the MongoDB port",
        "To allow the hosting platform to assign a dynamic port, which the app should listen on",
        "To define the SSH port for deployment",
        "To specify which npm registry to use"
      ],
      "correct": 1
    },
    {
      "q": "What does 'process.env' provide in a Node.js application?",
      "options": [
        "A list of all running Node.js processes",
        "Access to environment variables set in the operating system or .env file",
        "The current working directory of the process",
        "Metadata about the installed Node.js version"
      ],
      "correct": 1
    },
    {
      "q": "In Mongoose, what is the purpose of defining a Schema?",
      "options": [
        "To create the MongoDB database itself",
        "To define the structure, types, and validation rules for documents in a collection",
        "To write raw SQL queries",
        "To configure the MongoDB connection string"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Mongoose code do?\n\nconst User = mongoose.model('User', userSchema);\nconst user = new User({ name: 'Alice' });\nuser.save();",
      "options": [
        "Updates an existing user named Alice",
        "Creates a new User document in MongoDB and saves it",
        "Deletes a user named Alice from the database",
        "Queries for a user named Alice"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a Promise's .then() and async/await syntax for handling asynchronous operations?",
      "options": [
        ".then() is synchronous; async/await is asynchronous",
        "async/await is syntactic sugar over Promises, making asynchronous code look and behave like synchronous code",
        ".then() can only handle one Promise; async/await handles multiple",
        "They are not interchangeable"
      ],
      "correct": 1
    },
    {
      "q": "In a REST API built with Express and Mongoose, what HTTP method and status code should be used when successfully creating a new resource?",
      "options": [
        "GET with 200",
        "POST with 201",
        "PUT with 200",
        "POST with 200"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of middleware in Express.js?",
      "options": [
        "Functions that serve static HTML files",
        "Functions that have access to req, res, and next, and can execute code, modify req/res, or end the request-response cycle",
        "The layer between MongoDB and the Express router",
        "A built-in Express function for JWT authentication"
      ],
      "correct": 1
    },
    {
      "q": "What does app.use(express.json()) do in an Express application?",
      "options": [
        "Enables JSON responses for all routes",
        "Parses incoming requests with JSON payloads and makes data available in req.body",
        "Converts all route handler return values to JSON",
        "Validates that all incoming data is valid JSON"
      ],
      "correct": 1
    },
    {
      "q": "How is authentication typically implemented in a Node.js REST API to protect routes?",
      "options": [
        "Using sessions only with express-session",
        "By checking a password on every request in the route handler",
        "Using JSON Web Tokens (JWT) where a token is verified via middleware before reaching protected routes",
        "Node.js has built-in authentication that is enabled via a flag"
      ],
      "correct": 2
    },
    {
      "q": "In a Mongoose Task model for a multi-user app, what would the following schema field accomplish?\n\nowner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }",
      "options": [
        "Stores the user's email as a reference",
        "Creates a foreign key-like reference to a User document by its MongoDB ObjectId",
        "Automatically populates the user's data whenever a task is retrieved",
        "Limits one task per user"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Mongoose's .populate() method?",
      "options": [
        "To add default values to a schema",
        "To replace a referenced ObjectId with the actual document data from the referenced collection",
        "To insert multiple documents at once",
        "To validate all fields in a document before saving"
      ],
      "correct": 1
    },
    {
      "q": "In Express.js, how do you implement pagination for a GET /tasks endpoint using query parameters?",
      "options": [
        "Using req.body.page and req.body.limit",
        "Using req.params.page and req.params.limit",
        "Using req.query.page and req.query.limit with Mongoose's .skip() and .limit()",
        "Pagination is handled automatically by Mongoose"
      ],
      "correct": 2
    },
    {
      "q": "What npm package is commonly used to hash passwords securely before storing them in a database?",
      "options": [
        "crypto",
        "md5",
        "bcryptjs",
        "jsonwebtoken"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of 'multer' in a Node.js application?",
      "options": [
        "To handle multipart/form-data, primarily used for file uploads",
        "To multiply values in a MongoDB query",
        "To manage multiple MongoDB connections",
        "To compress response bodies"
      ],
      "correct": 0
    },
    {
      "q": "What does the following Mongoose middleware do?\n\nuserSchema.pre('save', async function(next) {\n  if (this.isModified('password')) {\n    this.password = await bcrypt.hash(this.password, 8);\n  }\n  next();\n});",
      "options": [
        "Hashes the password after every save",
        "Automatically hashes the password only when it has been modified, before saving to the database",
        "Validates the password format before saving",
        "Sends a hashed password in the response"
      ],
      "correct": 1
    },
    {
      "q": "Which package is commonly used to send transactional emails from a Node.js application?",
      "options": [
        "nodemailer or SendGrid",
        "mailparser",
        "emailjs",
        "smtp-handler"
      ],
      "correct": 0
    },
    {
      "q": "In the context of Node.js testing with Jest, what does the describe() block do?",
      "options": [
        "Executes an asynchronous test",
        "Groups related tests together for organization",
        "Defines a test assertion",
        "Mocks a module"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of jest.fn() when testing Node.js code?",
      "options": [
        "To run tests in a separate process",
        "To create a mock function that can track calls, arguments, and return values",
        "To assert that a function throws an error",
        "To import the Jest testing framework"
      ],
      "correct": 1
    },
    {
      "q": "What npm package is commonly used alongside Jest to test Express HTTP endpoints without starting a live server?",
      "options": [
        "axios",
        "supertest",
        "http-mock",
        "nock"
      ],
      "correct": 1
    },
    {
      "q": "What is the core difference between unit tests and integration tests in a Node.js context?",
      "options": [
        "Unit tests test the entire application; integration tests test individual functions",
        "Unit tests test individual functions in isolation; integration tests test how multiple parts of the system work together",
        "Integration tests are faster than unit tests",
        "Unit tests require a running server; integration tests do not"
      ],
      "correct": 1
    },
    {
      "q": "In Socket.io, what is the difference between socket.emit() and io.emit()?",
      "options": [
        "socket.emit sends to all clients; io.emit sends to one",
        "socket.emit sends a message to that specific client only; io.emit broadcasts to all connected clients",
        "io.emit is used on the client side; socket.emit on the server side",
        "They are identical"
      ],
      "correct": 1
    },
    {
      "q": "What event does Socket.io fire when a new client connects to the server?",
      "options": [
        "'message'",
        "'connect'",
        "'connection'",
        "'open'"
      ],
      "correct": 2
    },
    {
      "q": "In a Socket.io chat app, what does socket.to(room).emit('event', data) do?",
      "options": [
        "Sends the event to all clients including the sender in the specified room",
        "Sends the event to all clients in the specified room except the sender",
        "Sends the event only to the sender",
        "Broadcasts globally to all rooms"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Express Router in a large Node.js application?",
      "options": [
        "To manage database connections",
        "To modularize route definitions, grouping related routes into separate files",
        "To replace the need for middleware",
        "To automatically generate API documentation"
      ],
      "correct": 1
    },
    {
      "q": "What does app.use('/api/users', userRouter) do in Express?",
      "options": [
        "Creates a new user automatically at the /api/users endpoint",
        "Mounts the userRouter middleware at the /api/users path prefix",
        "Restricts all routes to the /api/users path",
        "Proxies all requests to an external users API"
      ],
      "correct": 1
    },
    {
      "q": "In the Express generator, what is the default template engine used?",
      "options": [
        "EJS",
        "Handlebars",
        "Jade/Pug",
        "Mustache"
      ],
      "correct": 2
    },
    {
      "q": "What is req.params used for in an Express route defined as GET /users/:id?",
      "options": [
        "To access query string parameters like ?sort=asc",
        "To access the named route segments, e.g. req.params.id would contain the user's id",
        "To access data sent in the request body",
        "To access HTTP request headers"
      ],
      "correct": 1
    },
    {
      "q": "What is the Passport.js library used for in an Express application?",
      "options": [
        "Database schema validation",
        "Authentication middleware that supports various strategies like local, OAuth, and JWT",
        "Password hashing and salting",
        "Session management only"
      ],
      "correct": 1
    },
    {
      "q": "In a MongoDB-connected Express app, what is the recommended way to handle a failed database connection?",
      "options": [
        "Ignore the error and let the app run without a database",
        "Log the error and exit the process or implement retry logic",
        "Restart the server automatically with process.restart()",
        "Switch to a local file-based storage automatically"
      ],
      "correct": 1
    },
    {
      "q": "What does the following JavaScript code output?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => { throw new Error('err') })\n  .catch(err => console.log('caught'));",
      "options": [
        "2, then throws uncaught error",
        "caught",
        "1",
        "Error: err"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this code?\n\nconst arr = [1, [2, [3, [4]]]];\nconsole.log(arr.flat(Infinity));",
      "options": [
        "[1, [2, [3, [4]]]]",
        "[1, 2, [3, [4]]]",
        "[1, 2, 3, 4]",
        "Error: flat() does not accept Infinity"
      ],
      "correct": 2
    },
    {
      "q": "What does the optional chaining operator (?.) do in JavaScript?",
      "options": [
        "Returns the default value if the left side is false",
        "Safely accesses nested properties, returning undefined if any intermediate value is null or undefined instead of throwing an error",
        "Chains multiple Promises together",
        "Checks if a variable is defined"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\n\nconst a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a.length);",
      "options": [
        "3",
        "4",
        "undefined",
        "Error"
      ],
      "correct": 1
    },
    {
      "q": "What does JSON.parse(JSON.stringify(obj)) accomplish?",
      "options": [
        "A shallow clone of the object",
        "A deep clone of the object, but it fails with functions, undefined, and circular references",
        "Converts the object to a string permanently",
        "Validates that an object is valid JSON"
      ],
      "correct": 1
    },
    {
      "q": "What is the result of this code?\n\nconsole.log(typeof NaN);",
      "options": [
        "NaN",
        "undefined",
        "number",
        "string"
      ],
      "correct": 2
    },
    {
      "q": "In JavaScript, what is the purpose of Symbol()?",
      "options": [
        "To create a special numeric type",
        "To create a unique and immutable primitive value, often used as object property keys to avoid naming collisions",
        "To define private class methods",
        "To create a reference to a DOM element"
      ],
      "correct": 1
    },
    {
      "q": "What does this code log?\n\nconst obj = { a: 1 };\nObject.defineProperty(obj, 'b', { value: 2, writable: false, enumerable: false });\nconsole.log(Object.keys(obj));",
      "options": [
        "['a', 'b']",
        "['a']",
        "['b']",
        "[]"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'yargs' package in a Node.js CLI application?",
      "options": [
        "To parse and handle command-line arguments in a structured way",
        "To compress files from the command line",
        "To execute shell commands from Node.js",
        "To manage environment variables in .env files"
      ],
      "correct": 0
    },
    {
      "q": "What does the EventEmitter class in Node.js allow you to do?",
      "options": [
        "Send HTTP events to the browser",
        "Create objects that can emit named events and register listeners that are called when those events occur",
        "Emit browser DOM events from Node.js",
        "Create WebSocket connections"
      ],
      "correct": 1
    },
    {
      "q": "In Node.js, what is a stream and why is it beneficial for reading large files?",
      "options": [
        "A stream is a synchronous file reader; it's faster because it avoids callbacks",
        "A stream allows reading data in chunks, so the entire file doesn't need to be loaded into memory at once",
        "A stream is a network connection protocol built into Node.js",
        "Streams are only useful for video data"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of package-lock.json in a Node.js project?",
      "options": [
        "To lock the Node.js version for the project",
        "To record the exact versions of all installed dependencies, ensuring reproducible installs across environments",
        "To prevent other developers from installing new packages",
        "To store private API keys securely"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Express code do?\n\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});",
      "options": [
        "Creates a standard route handler for all GET requests",
        "Defines a global error-handling middleware (identified by 4 parameters) that catches errors passed to next(err)",
        "Handles 404 not found errors",
        "Validates request bodies for all routes"
      ],
      "correct": 1
    },
    {
      "q": "In Mongoose, what is the difference between .find() and .findOne()?",
      "options": [
        ".find() returns the first match; .findOne() returns all matches",
        ".findOne() returns the first matching document or null; .find() returns an array of all matching documents",
        "They are identical",
        ".findOne() is for SQL databases; .find() is for MongoDB"
      ],
      "correct": 1
    },
    {
      "q": "What is the HTTP method used to partially update a resource in a RESTful API?",
      "options": [
        "PUT",
        "POST",
        "PATCH",
        "UPDATE"
      ],
      "correct": 2
    },
    {
      "q": "In Mongoose, how would you query for all tasks where 'completed' is true, sorted by 'createdAt' descending?",
      "options": [
        "Task.find({ completed: true }).sort('-createdAt')",
        "Task.get({ completed: true }).orderBy('createdAt', 'desc')",
        "Task.filter({ completed: true }).sort({ createdAt: -1 })",
        "Task.query({ completed: true, sort: '-createdAt' })"
      ],
      "correct": 0
    },
    {
      "q": "What does the following Node.js code accomplish?\n\nconst path = require('path');\nconst publicPath = path.join(__dirname, '../public');\napp.use(express.static(publicPath));",
      "options": [
        "Serves files from the 'public' folder as static assets",
        "Creates a new directory called 'public'",
        "Compiles static assets at build time",
        "Restricts access to files in the public directory"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of CORS (Cross-Origin Resource Sharing) in an Express API?",
      "options": [
        "To compress API responses",
        "To control which origins are allowed to make requests to the API, preventing unauthorized cross-origin access",
        "To enable HTTPS on the Express server",
        "To manage database connections across multiple origins"
      ],
      "correct": 1
    },
    {
      "q": "In a Node.js Task app with authentication, what is the purpose of storing user-specific tokens in a 'tokens' array on the User model?",
      "options": [
        "To allow a user to be logged in on multiple devices simultaneously",
        "To store the user's password history",
        "To limit the number of tasks a user can create",
        "To cache API responses for the user"
      ],
      "correct": 0
    },
    {
      "q": "What does the following code output?\n\nconst p = new Promise((resolve, reject) => {\n  reject('error');\n  resolve('success');\n});\np.catch(e => console.log(e));",
      "options": [
        "success",
        "error",
        "Both 'error' and 'success'",
        "undefined"
      ],
      "correct": 1
    },
    {
      "q": "In Express.js, what happens when you call next() inside a middleware function?",
      "options": [
        "The response is sent back to the client",
        "The next matching route handler or middleware in the stack is called",
        "The server moves to the next HTTP request",
        "The current middleware is re-executed"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this JavaScript code?\n\nconst map = new Map();\nmap.set('a', 1);\nmap.set('b', 2);\nconsole.log(map.size);",
      "options": [
        "undefined",
        "2",
        "1",
        "{ a: 1, b: 2 }"
      ],
      "correct": 1
    },
    {
      "q": "What does Promise.all() do when one of the Promises rejects?",
      "options": [
        "It ignores the rejection and waits for all others to settle",
        "It immediately rejects with the reason of the first rejection",
        "It resolves with an array containing the error for the failed promise",
        "It retries the failed promise up to 3 times"
      ],
      "correct": 1
    },
    {
      "q": "In Node.js, what is the purpose of the 'dotenv' package?",
      "options": [
        "To create .dot files for Git configuration",
        "To load environment variables from a .env file into process.env during development",
        "To validate environment variables at startup",
        "To encrypt sensitive configuration values"
      ],
      "correct": 1
    },
    {
      "q": "What is middleware order significance in Express.js?",
      "options": [
        "Order does not matter; Express automatically determines the correct sequence",
        "Middleware is executed in the order it is defined; incorrect ordering can cause routes to be unreachable or middleware to be skipped",
        "Only error-handling middleware is order-sensitive",
        "Middleware order matters only for authentication"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between MongoDB's insertOne() and Mongoose's .save() method?",
      "options": [
        "They are identical",
        "insertOne() is a raw MongoDB driver method; .save() is a Mongoose method that also runs schema validations and middleware hooks",
        ".save() only updates existing documents; insertOne() only creates new ones",
        "insertOne() runs middleware; .save() does not"
      ],
      "correct": 1
    },
    {
      "q": "What does this JavaScript code log?\n\nfunction foo() {\n  console.log(this);\n}\nconst bar = foo.bind({ name: 'Test' });\nbar();",
      "options": [
        "undefined",
        "{ name: 'Test' }",
        "The global object",
        "foo function object"
      ],
      "correct": 1
    },
    {
      "q": "In Node.js, what is the difference between require('module') and require('./module')?",
      "options": [
        "They are identical",
        "require('module') looks for a built-in or npm package in node_modules; require('./module') loads a local file relative to the current file",
        "require('./module') is asynchronous; require('module') is synchronous",
        "require('module') only works for built-in modules; npm packages use import"
      ],
      "correct": 1
    },
    {
      "q": "What will this Node.js code output, assuming it runs successfully?\n\nsetTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('sync');",
      "options": [
        "timeout, promise, sync",
        "sync, timeout, promise",
        "sync, promise, timeout",
        "promise, sync, timeout"
      ],
      "correct": 2
    },
    {
      "q": "In Express, what does res.json() do differently from res.send() when passed an object?",
      "options": [
        "res.json() sets the Content-Type to application/json and stringifies the object; res.send() may not set the correct Content-Type",
        "They behave identically for objects",
        "res.send() is faster; res.json() is for large payloads",
        "res.json() compresses the response; res.send() does not"
      ],
      "correct": 0
    },
    {
      "q": "What is a race condition in the context of async Node.js code?",
      "options": [
        "When two setTimeout calls fire at the same time",
        "When the outcome of a program depends on the unpredictable timing of multiple asynchronous operations",
        "When a Promise rejects before it resolves",
        "When Node.js runs out of memory processing concurrent requests"
      ],
      "correct": 1
    },
    {
      "q": "In an Express app using Passport.js local strategy, what is the role of the 'verify callback'?",
      "options": [
        "To hash the user's password before login",
        "To find the user in the database and verify credentials, then call done() with the user or false",
        "To serialize the user into the session",
        "To define which routes require authentication"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct way to handle async errors in an Express route so they reach the error-handling middleware?",
      "options": [
        "Wrap the logic in a try-catch and call next(err) in the catch block",
        "Throw the error directly inside the async function",
        "Use process.on('uncaughtException') inside the route",
        "Express automatically catches async errors in route handlers"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following codes will not throw an error?",
      "options": [
        "JSON.parse(”);",
        "JSON.parse(null);",
        "JSON.parse();",
        "JSON.parse({});"
      ],
      "correct": 1
    },
    {
      "q": "What does JSONP stand for?",
      "options": [
        "JSON Procedures",
        "JSON Parsing",
        "JSON with padding",
        "JSON Programming"
      ],
      "correct": 2
    },
    {
      "q": "What is the value of json in the following code?\nvar obj = { fruit: ‘apple’, toJSON: function () { return ‘orange’; } }; var json = JSON.stringify({x: obj});",
      "options": [
        "{“x”:”orange”}",
        "{“fruit”:”apple”}",
        "{“x”:”apple”}",
        "{“fruit”:”orange”}"
      ],
      "correct": 0
    },
    {
      "q": "What is the MIME type of JSON?",
      "options": [
        "application/x-json",
        "text/json",
        "application/json",
        "application/javascript"
      ],
      "correct": 2
    },
    {
      "q": "What function will convert a JavaScript object to a JSON string?",
      "options": [
        "JSON.text()",
        "JSON.serialize()",
        "JSON.toString()",
        "JSON.stringify()"
      ],
      "correct": 3
    },
    {
      "q": "In the below notation, Student is of type { “Student”: [ “Amy”, “Bob”, “John” ] }",
      "options": [
        "Not a valid JSON string",
        "Array",
        "Class",
        "Object"
      ],
      "correct": 1
    },
    {
      "q": "JSON-RPC is a remote procedure call protocol",
      "options": [
        "38) To use observables, Angular uses a third-party library called . . . . . . .",
        "ng2-bootstrap",
        "angular-cli",
        "numeral",
        "Reactive Extensions (RxJS)"
      ],
      "correct": 3
    },
    {
      "q": "We subscribe to the observable ourselves using the actual . . . . . . method. The downside is that you have to manage the",
      "options": [
        "subscription yourself.",
        "subscribe()",
        "subs()",
        "subscribed()",
        "None of above"
      ],
      "correct": 0
    },
    {
      "q": "The . . . . . . . filter waits for a promise and returns the most recent value received. It then updates the view.",
      "options": [
        "sync",
        "async",
        "promise",
        "custom"
      ],
      "correct": 1
    },
    {
      "q": "If you chain multiple pipes together, they are executed . . . . .",
      "options": [
        "in parallel",
        "LIFO order",
        "in the order in which you specify them",
        "none of above"
      ],
      "correct": 3
    },
    {
      "q": "Observables help you manage . . . . . . . . data.",
      "options": [
        "synchronous",
        "asynchronous",
        "Both asynchronous & synchronous",
        "None of above"
      ],
      "correct": 1
    },
    {
      "q": ". Promises are more advanced than Observables.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": ". Which class is used to create a black navigation bar?",
      "options": [
        ".navbar-default",
        ".navbar-black",
        ".navbar-dark",
        ".navbar-inverse"
      ],
      "correct": 3
    },
    {
      "q": ". The .container-fluid class provides",
      "options": [
        "Fixed width container",
        "Table format",
        "To create a Form",
        "Full width container"
      ],
      "correct": 3
    },
    {
      "q": "What keywords are reserved in JSON and cannot be used as keys?",
      "options": [
        "Value",
        "Object",
        "There are none.",
        "Key"
      ],
      "correct": 2
    },
    {
      "q": ") How to get information about browsers?",
      "options": [
        "Browser",
        "version",
        "navigator"
      ],
      "correct": 2
    },
    {
      "q": ") ----- is an HTML specification used to add more information to HTML tags.",
      "options": [
        "Macrodata",
        "Microdata",
        "Minidata",
        "Modifydata"
      ],
      "correct": 1
    },
    {
      "q": ") What is the purpose of the mimeTypes property of a plug-in entry?",
      "options": [
        "Contains MIME properties",
        "Contains MIME sizes",
        "Contains MIME types",
        "Contains MIME methods"
      ],
      "correct": 2
    },
    {
      "q": ") Which of the following can be implemented using animation?",
      "options": [
        "Fireworks",
        "fade Effect",
        "Roll-in or Roll-out",
        "All of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": ") Which is the property that represents the content displayed in the window?",
      "options": [
        "document",
        "content",
        "window",
        "frame"
      ],
      "correct": 0
    },
    {
      "q": ") How can we make methods available on all objects?",
      "options": [
        "Object.add(methods)",
        "Object.methods(add)",
        "Object.add.methods(...)",
        "Object.prototype"
      ],
      "correct": 3
    },
    {
      "q": ") The four kinds of class members are______",
      "options": [
        "Instance methods, Instance fields, Static method, Dynamic method",
        "Instance fields,Instance methods, Class fields, class methods",
        "Instance fields, non-Instance fields, Dynamic methods, Global methods",
        "Global methods, Local methods, Dynamic methods, Static methods"
      ],
      "correct": 1
    },
    {
      "q": ")Which field is required in <input>",
      "options": [
        "required",
        "minlength",
        "Both"
      ],
      "correct": 0
    },
    {
      "q": ") How can we add/ delete in an array and return the removed item.",
      "options": [
        "slice",
        "shift",
        "reverse",
        "splice"
      ],
      "correct": 3
    },
    {
      "q": ") How to get information about browser",
      "options": [
        "Browser",
        "Version",
        "navigator"
      ],
      "correct": 2
    },
    {
      "q": "In MongoDB, what is the equivalent of SQL term row?",
      "options": [
        "Primary Key",
        "Index",
        "Field",
        "Document"
      ],
      "correct": 3
    },
    {
      "q": "What is the equivalent of the following SQL command in MongoDB?\nUPDATE user\nSET email = ‘NA’\nWHERE age < 18",
      "options": [
        "db.user.updateMany({ gt: { $age= 18 } },{ $set: {email = \"NA\" } })",
        "db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })",
        "db.user.updateMany({ gt: { $age: 18 } },{ $set: {email : \"NA\" } })",
        "db.user.updateMany({ age: { $gt: 18 } },{ $set: {email : \"NA\" } })"
      ],
      "correct": 1
    },
    {
      "q": "How would you limit the results of a find to 10 items?",
      "options": [
        "adb.collection.find({},{limit:10})",
        "db.collection.find().limit(10)",
        "db.collection.limit(query, 10)",
        "This is not possible in the node.js driver"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following code will give an error on the MongoDB command shell?",
      "options": [
        "use databasename",
        "show dbs",
        "USE databasename",
        "Db"
      ],
      "correct": 2
    },
    {
      "q": "What theorem or principal MongoDB follows?",
      "options": [
        "APAC",
        "Always-Sync",
        "ASCII",
        "CAP"
      ],
      "correct": 3
    },
    {
      "q": "What is NoSQL?",
      "options": [
        "No Object SQL",
        "No SQL Server",
        "Not Only SQL",
        "No Relational Database"
      ],
      "correct": 2
    },
    {
      "q": "When there is no match of the document in the collection what do upsert: true do?",
      "options": [
        "Delete",
        "Nothing",
        "Insert",
        "Update"
      ],
      "correct": 2
    },
    {
      "q": "Upon running the following command, what all the fields will be returned in the output?",
      "options": [
        "db.collection.find( { qty: { $gt: 6 } }, { name: 1, _id: 0 } )",
        "_id",
        "name",
        "_id, name",
        "name1, _id0"
      ],
      "correct": 1
    },
    {
      "q": "What method is used to remove a single item from a MongoDB collection?",
      "options": [
        "db.collection.deleteOne()",
        "db.collection.delete()",
        "db.collection.removeOne()",
        "db.collection.remove()"
      ],
      "correct": 0
    },
    {
      "q": "In the following command, what does the second parameter represent?",
      "options": [
        "db.collection.find( { qty: { $gt: 6 } }, { name: 1, wins: 1 } )",
        "Read Concern",
        "Projection",
        "Write Concern",
        "Query"
      ],
      "correct": 1
    },
    {
      "q": "True or false : The only thing that can change the data inside a store is the store itself.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "The best way to detect when a user has completed a form is",
      "options": [
        "to handle the onClick event on the form's submit element",
        "to handle the onBlur event of the last form element",
        "to handle the form's onSubmit event",
        "to accumulate the onChange events for each form element"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Which of the following best defines a \"class\"?",
      "options": [
        "Objects with no implementation details",
        "Object with no properties or methods",
        "JSON objects with methods",
        "Collection of private, reusable functions",
        "Template for creating objects"
      ],
      "correct": 4,
      "note": null
    },
    {
      "q": "What is async/await?",
      "options": [
        "New syntax to write JavaScript promises",
        "New syntax to consume JavaScript promises",
        "New syntax to consume asynchronous callbacks"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which of the following is an attribute css selector?",
      "options": [
        "[selector]",
        ".selector",
        "#selector"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "The promise becomes . . . . . . after resolving or rejecting.",
      "options": [
        "mutable",
        "ignored",
        "immutable",
        "recurring"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "What will be output of : var a:string=47;       console.log(“Value of a=\"+a);",
      "options": [
        "Value of a=47",
        "Value of a=0",
        "Value of a=",
        "None of the above"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which of the following are array methods",
      "options": [
        "Unshift()",
        "Sort()",
        "Pop()",
        "All the above"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which of the following are true",
      "options": [
        "var a=new String(hii)",
        "var b=new array[1]",
        "var a:String=hii;",
        "All the above"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "A promise represents the final result of an . . . . . . . operation.",
      "options": [
        "asynchronous",
        "synchronous"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Attribute binding is similar to property binding but is tied to the . . . . . . . . rather than the DOM property.",
      "options": [
        "Page attribute",
        "DOM attribute",
        "Root attribute",
        "HTML attribute"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Using the . . . . . . animation function, the parent animation can allow the child animation to run at the exact",
      "options": [
        "correct time.",
        "animateChild",
        "childAnimate",
        "animateInner",
        "innerChild"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Animations are fired using animation property bindings which are prefixed with an . . . . symbol.",
      "options": [
        "&",
        "#",
        "$",
        "@"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "It's always possible to make use of animation input parameters by setting even more data via the . . . . .",
      "options": [
        "property.",
        "options.param",
        "option.params",
        "option.param",
        "options.params"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which class indicates a dropdown menu?",
      "options": [
        ".dropdown-list",
        ".select",
        ".dropdown"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Which of the following class makes round corner image for automatically adjust to fit the size of the screen?",
      "options": [
        ".img-res-image",
        ".img-responsive-image      * img-fluid (for full width responsible)",
        ".img-responsive",
        ".img-res"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Which class should be used to indicate a button group?",
      "options": [
        "btn-group-buttons",
        "btn-group",
        "btn-grp",
        "btn-buttons"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which of the following code will not throw an error?",
      "options": [
        "JSON.parse(”);",
        "JSON.parse(null);",
        "JSON.parse();",
        "JSON.parse({});"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": ") Which of the following can be impplemented using animation?",
      "options": [
        "Fireworks",
        "fade Effect",
        "Roll-in or Roll-out",
        "All of the mentioned"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": ")Which field is requried in <input>",
      "options": [
        "required",
        "minlength",
        "Both"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": ") Which keyword we can't use in JSON?",
      "options": [
        "Object",
        "key",
        "value",
        "None"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": ") How can we add/ delete in array and returns the removed item.",
      "options": [
        "slice",
        "shift",
        "reverse",
        "splice"
      ],
      "correct": 3,
      "note": "fuzzy-matched answer text 'D.splice' -> option 'splice'"
    },
    {
      "q": ") There are three timing properties you can tune for every animated transition: the duration, the delay, and the",
      "options": [
        "easing function. They are all combined into a single transition timing string.",
        "Q. JSON.parse() function was developed as a safer alternative to",
        "Go function()",
        "eval()",
        "Function() eval",
        "call function()"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Scope act as glue between controller and view.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Model available in $rootScope can be overridden by its all child scopes.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Using service method, we define a service and then assign method to it.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Templates can be a single file (like index.html) or multiple views in one page.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "$rootScope is the parent of all of the scope variables.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "What built-in functions allows you to convert a string into an integer?",
      "options": [
        "toInt()",
        "parseInt()",
        "toInteger()",
        "parseString()"
      ],
      "correct": 1
    },
    {
      "q": "What is a function in JavaScript?",
      "options": [
        "An instance of a class",
        "A statement that evaluates an expression",
        "A block of organized, reusable code that performs a single action",
        "Code that allows us to write loops"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of the following?\ngreet = function(...months){ months.forEach(month => console.log('Month: ' +\nmonth));}greet([ 'Jan', 'Feb']);",
      "options": [
        "Jan Feb",
        "ReferenceError",
        "Month: Jan,Feb",
        "Month: Jan E. Month: Feb"
      ],
      "correct": 2
    },
    {
      "q": "What is the console output of the following code block:function printName() { name",
      "options": [
        "= \"Mary\"; name = \"John\"; console.log(name);}",
        "Empty",
        "None",
        "John",
        "Mary"
      ],
      "correct": 2
    },
    {
      "q": "Let has block scope?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What is used to dispatch requests to the WEB Application?",
      "options": [
        "DispatchherServlet.",
        "ViewHandler.",
        "ViewResolver."
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Service discovery tools help by reducing the problem of how processes and services in a cluster can find and talk to one another.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "note": "fuzzy-matched answer text 'A -> True' -> option 'True'"
    },
    {
      "q": "Which of the following rules allows users to import style rules from other style sheets?",
      "options": [
        "@media",
        "@important",
        "@import",
        "@style"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "What is the relationship between JavaScript and ECMAScript?",
      "options": [
        "ECMAScript is a standard that JavaScript implements.",
        "They are different terms for the same thing.",
        "JavaScript is a standard that ECMAScript implements.",
        "JavaScript is an old term for what is now called ECMAScript."
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Annotation used to indicate a field has to have a minimum of 2 characters.",
      "options": [
        "@NotNull",
        "@Size",
        "@MaxSize",
        "@size"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Views that cannot be resolved by InternalResourceViewResolver.",
      "options": [
        "redirect",
        "redirect:prefix",
        "redirect:suffix",
        "all of the mentioned"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Alternative way to resolve locales.",
      "options": [
        "AcceptHeaderLocale",
        "AcceptHeader",
        "AcceptHeaderLocaleResolver",
        "SessionLocaleResolver"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "General-purpose class that allows a response to be rendered using a marshaller.",
      "options": [
        "MarshallingView",
        "Marshaling",
        "View",
        "All of the mentioned"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "A linkage of series of prototype objects is called as ________",
      "options": [
        "prototype stack",
        "prototype chain",
        "prototype class",
        "prototypes"
      ],
      "correct": 1
    },
    {
      "q": "Element used to restrict access to a particular URL.",
      "options": [
        "restrict-url",
        "intercept-url",
        "intercept-restrict",
        "none of the mentioned"
      ],
      "correct": 1
    },
    {
      "q": "NoSQL databases is used mainly for handling large volumes of ______________ data.",
      "options": [
        "unstructured",
        "structured",
        "semi-structured",
        "all of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "An object’s ……………………….. is a reference to another object from which properties are inherited.",
      "options": [
        "Characteristics",
        "Prototype",
        "Class",
        "Extensible flag"
      ],
      "correct": 1
    },
    {
      "q": "Which method allows the same event handler function to be registered more than once? When an event of the specified type occurs, the registered function will be invoked as many times as it was registered.",
      "options": [
        "addEvent()",
        "addMultipltEvent()",
        "attachEvent()",
        "reattachEvent()"
      ],
      "correct": 2
    },
    {
      "q": "The constructor prototype refers to the correct prototype for ………………………… but does not usually do so for objects created with Object.Create( ).",
      "options": [
        "object prototype",
        "object literal",
        "object class",
        "associative arrays"
      ],
      "correct": 1
    },
    {
      "q": "Which routing guard is used to check whether routing can take place or not",
      "options": [
        "CanActivate",
        "Resolve",
        "CanLoad",
        "CanDeactive"
      ],
      "correct": 0
    },
    {
      "q": "What is the command line tool introduced for the JS engine in Java 8 ?",
      "options": [
        "jjs",
        "jss",
        "jfs",
        "jbd"
      ],
      "correct": 0
    },
    {
      "q": "In your Data Access Object (DAO) method , you neither need to surround your code with a",
      "options": [
        "TRUE",
        "FALSE."
      ],
      "correct": 1
    },
    {
      "q": "Which Java Class has natural sorting implemented?",
      "options": [
        "LinkedHashSet.",
        "TreeSet",
        "HashSet"
      ],
      "correct": 1
    },
    {
      "q": "How can you detect the client's browser name in JavaScript?",
      "options": [
        "client.navName",
        "navigator.appName",
        "browser.name",
        "window.browser"
      ],
      "correct": 1
    },
    {
      "q": "Pick the correct Java method reference usages.",
      "options": [
        "object::instanceMethod",
        "Class::staticMethod",
        "Class::new",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Pick the correct Java Stream API’s?",
      "options": [
        "Stream.allMatch",
        "Stream.noneMatch",
        "Stream.anyMatch",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "____________ contains the navigation menu, or other navigation functionality for the page",
      "options": [
        "section",
        "header",
        "nav",
        "aside"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is the immutable Java List static factory method ?",
      "options": [
        "List.of",
        "List.immutable.",
        "List.create"
      ],
      "correct": 0
    },
    {
      "q": "Which implementation of Set would you choose if you want the iterator of Set to give objects in the order they were inserted?",
      "options": [
        "LinkedHashSet",
        "TreeSet",
        "HashSet"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is the correct syntax for two-way binding?",
      "options": [
        "([ngModel])='listFilter'",
        "[(ngModel)]='listFilter'",
        "{{listFilter}}",
        "ngModel='listFilter'"
      ],
      "correct": 1
    },
    {
      "q": "In Java, which of the following can be marked static?",
      "options": [
        "Methods, Variables, Initialization Blocks, Outer Classes, and Nested Classes",
        "Methods, Variables, Initialization Blocks, and Nested Classes",
        "Methods, Variables, Initialization Blocks, and Outer Classes",
        "Methods, Variables, and Initialization Block"
      ],
      "correct": 1
    },
    {
      "q": "What is the max capacity of a Java Blocking Queue?",
      "options": [
        "Integer.INFINITY",
        "Integer.MAX_VALUE",
        "BigDecimal.MAX_VALUE"
      ],
      "correct": 1
    },
    {
      "q": "Which Java Set implementation is sorted and synchronized?",
      "options": [
        "TreeSet",
        "LinkedHashSet",
        "HashSet",
        "ConcurrentSkipListSet"
      ],
      "correct": 3
    },
    {
      "q": "Which one of the following statements on Java String is correct?",
      "options": [
        "replace() method replaces only first occurrences of a character in invoking string with the",
        "given character.",
        "replace() method replaces last occurrence of a character in invoking string with the given",
        "character.",
        "replace() method replaces all occurrences of one character in invoking string with the",
        "given character.",
        "replace() method replaces all the characters in invoking string with the given character."
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is NOT a valid keyword in JavaScript?",
      "options": [
        "use strict",
        "debugger",
        "with",
        "if"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following statements are true about Java ?",
      "options": [
        "A finally block is executed, only after the catch block is executed.",
        "A finally block is executed whether an exception is thrown or not.",
        "A finally block is NOT Mandatory.",
        "A finally block is executed, only if an exception occurs."
      ],
      "correct": 3
    },
    {
      "q": "Which of the following methods CANNOT be used to add array elements in Javascript ?",
      "options": [
        "push()",
        "splice()",
        "shift()",
        "All can be used."
      ],
      "correct": 3
    },
    {
      "q": "Annotation added as an input parameter to the handler method.",
      "options": [
        "@PathVariable",
        "@Path",
        "@PathLocale",
        "None of the mentioned"
      ],
      "correct": 0
    },
    {
      "q": "What built-in function allows you to convert a string into an integer?",
      "options": [
        "toInt()",
        "parseInt()",
        "toInteger()",
        "parseString()"
      ],
      "correct": 1
    },
    {
      "q": "What is the catch method for a promise?",
      "options": [
        "To compose two promises",
        "To listen to the result of a promise",
        "To listen only for a rejected promise",
        "There is no catch method on a promise"
      ],
      "correct": 2
    },
    {
      "q": "What is the effect of using await?",
      "options": [
        "The awaited function runs in parallel",
        "A promise is returned from a function instead of a value",
        "A value is returned from a function instead of a promise"
      ],
      "correct": 2
    },
    {
      "q": "What does an async function return?",
      "options": [
        "A promise in a promise",
        "The value returned from the function",
        "A promise"
      ],
      "correct": 2
    },
    {
      "q": "What is dependency injection?",
      "options": [
        "A coding technique in which all dependencies are defined with import statements",
        "A coding technique for registering services",
        "A coding pattern in which a class receives the instances of objects it needs from an external source"
      ],
      "correct": 2
    },
    {
      "q": "Which is the proper syntax to make sessionTemplate available by name from a JavaScript module?",
      "options": [
        "export function sessionTemplate(sessions) {...}",
        "export default function sessionTemplate(sessions) {...}",
        "module.exports = function sessionTemplate(sessions) {...}",
        "require function sessionTemplate(sessions) {...}"
      ],
      "correct": 0
    },
    {
      "q": "What is a callback?",
      "options": [
        "A function that is called when a parallel operation is done",
        "A boolean that is set to true when a parallel operation is done",
        "A function that can be used with the 'await' keyword"
      ],
      "correct": 0
    },
    {
      "q": "There is no catch method on a promise.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "var blog = { name: 'Ski Utah'}; var updatedBlog = blog; updatedBlog.name = 'Rocky Mountain Skiing'; What is blog.name?",
      "options": [
        "Ski Utah",
        "undefined",
        "blog",
        "Rocky Mountain Skiing"
      ],
      "correct": 3
    },
    {
      "q": "greet = function(...months){ months.forEach(month => console.log('Month: ' + month)); }; greet(['Jan','Feb']); What is the output?",
      "options": [
        "Jan Feb",
        "Month: Jan,Feb",
        "Month: Jan\\nMonth: Feb",
        "Month: Jan",
        "Month: Feb"
      ],
      "correct": 1
    },
    {
      "q": "var value = \"no value\"; console.log(!!value); What shows in the console?",
      "options": [
        "false",
        "(an empty string)",
        "true",
        "no value"
      ],
      "correct": 2
    },
    {
      "q": "function display(num1, num2) { console.log(num1, num2); } let nums = \"12345\"; display(...nums); What is the output?",
      "options": [
        "1 2",
        "2 1",
        "1 2 3 4 5",
        "4 5"
      ],
      "correct": 0
    },
    {
      "q": "function printName() { name = \"Mary\"; name = \"John\"; console.log(name); } What is the console output?",
      "options": [
        "Empty",
        "None",
        "John",
        "Mary"
      ],
      "correct": 2
    },
    {
      "q": "Where is the correct place to insert JavaScript?",
      "options": [
        "The <head> section",
        "Both the <head> and the <body> section are correct",
        "The <body> section",
        "The <footer> section"
      ],
      "correct": 1
    },
    {
      "q": "What syntax allows for a variable number of arguments to a function where the arguments are passed as an array?",
      "options": [
        "function([]numbers) { }",
        "function(*numbers) { }",
        "function(...numbers) { }",
        "function(numbers[]) { }"
      ],
      "correct": 2
    },
    {
      "q": "What statement will load a module from a script named employee.js?",
      "options": [
        "reference \"employee\";",
        "import \"employee\";",
        "import \"employee.js\";",
        "reference \"employee.js\";"
      ],
      "correct": 2
    },
    {
      "q": "Which flags are required to run node with ES6?",
      "options": [
        "harmony and strict-mode",
        "experimental and strict-mode",
        "harmony and block-binding",
        "harmony and experimental"
      ],
      "correct": 2
    },
    {
      "q": "What contextual keyword is used in a class definition to identify a function containing initialization logic for an object?",
      "options": [
        "ctor",
        "new",
        "constructor",
        "class"
      ],
      "correct": 2
    },
    {
      "q": "What syntax will create the array [1, 2, 3, 4, 5, 6]?",
      "options": [
        "[1, 2, [3, 4]..., 5, 6];",
        "[1, 2, ...[3, 4], 5, 6];",
        "[1, 2, [3, 4], 5, 6];",
        "[1, 2, {3, 4}, 5, 6];"
      ],
      "correct": 1
    },
    {
      "q": "What symbol identifies a generator function?",
      "options": [
        "&",
        "@",
        "$",
        "*"
      ],
      "correct": 3
    },
    {
      "q": "By default, if you load a module that's not a JavaScript file, what will SystemJS do?",
      "options": [
        "Raise an error when loading the module.",
        "Attempt to load the module as if it were a JavaScript file.",
        "Look for a plugin with the name of the file extension to load the file."
      ],
      "correct": 2
    },
    {
      "q": "Babel compiles the JavaScript code you write into",
      "options": [
        "ECMAScript 5",
        "ECMAScript 7",
        "ECMAScript 3",
        "ECMAScript 6"
      ],
      "correct": 0
    },
    {
      "q": "Which of these phrases describes Babel?",
      "options": [
        "JavaScript compiler",
        "Requires a runtime",
        "A programming language",
        "Experimental"
      ],
      "correct": 0
    },
    {
      "q": "var obj = { fruit: 'apple', toJSON: function () { return 'orange'; } }; var json = JSON.stringify({x: obj}); What is the value of json?",
      "options": [
        "{\"x\":\"orange\"}",
        "{\"fruit\":\"apple\"}",
        "{\"x\":\"apple\"}",
        "{\"fruit\":\"orange\"}"
      ],
      "correct": 0
    },
    {
      "q": "{ \"Student\": [ \"Amy\", \"Bob\", \"John\" ] } - Student is of type:",
      "options": [
        "Not a valid JSON string",
        "Array",
        "Class",
        "Object"
      ],
      "correct": 1
    },
    {
      "q": "console.log(x); var x = 5; What is logged?",
      "options": [
        "5",
        "undefined",
        "ReferenceError",
        "null"
      ],
      "correct": 1
    },
    {
      "q": "Which class is used to create a black navigation bar in Bootstrap?",
      "options": [
        ".navbar-default",
        ".navbar-black",
        ".navbar-dark",
        ".navbar-inverse"
      ],
      "correct": 3
    },
    {
      "q": "How to get information about the browser?",
      "options": [
        "Browser",
        "version",
        "navigator",
        "cookie"
      ],
      "correct": 2
    },
    {
      "q": "Which event will trigger if a button loses focus?",
      "options": [
        "onblur",
        "onfocus",
        "onchange",
        "onclick"
      ],
      "correct": 0
    },
    {
      "q": "Which of these are valid CSS display property values?",
      "options": [
        "None",
        "inline",
        "inline-block",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Shorthand method to represent the background of an element (common)",
      "options": [
        "backgroundStyle",
        "background",
        "bg",
        "bgColor"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following can be implemented using CSS/JS animation?",
      "options": [
        "Fireworks",
        "Fade Effect",
        "Roll-in or Roll-out",
        "All of the mentioned"
      ],
      "correct": 3
    },
    {
      "q": "How can we add/delete elements in an array and return the removed item?",
      "options": [
        "slice",
        "shift",
        "reverse",
        "splice"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following will NOT throw an error?",
      "options": [
        "JSON.parse('')",
        "JSON.parse(null)",
        "JSON.parse()",
        "JSON.parse({})"
      ],
      "correct": 1
    },
    {
      "q": "What is the value of json below?<br><code>var obj = { fruit: 'apple', toJSON: function () { return 'orange'; } };<br>var json = JSON.stringify({x: obj});</code>",
      "options": [
        "{\"x\":\"orange\"}",
        "{\"fruit\":\"apple\"}",
        "{\"x\":\"apple\"}",
        "{\"fruit\":\"orange\"}"
      ],
      "correct": 0
    },
    {
      "q": "What function converts a JavaScript object to a JSON string?",
      "options": [
        "JSON.text()",
        "JSON.serialize()",
        "JSON.toString()",
        "JSON.stringify()"
      ],
      "correct": 3
    },
    {
      "q": "Given <code>{ \"Student\": [ \"Amy\", \"Bob\", \"John\" ] }</code>, the value of \"Student\" is a(n):",
      "options": [
        "invalid JSON value",
        "Array",
        "Class",
        "Object"
      ],
      "correct": 1
    },
    {
      "q": "What is the result of: <code>1 + 2 + \"3\"</code>?",
      "options": [
        "The number 33",
        "The string \"33\"",
        "The string \"123\"",
        "NaN"
      ],
      "correct": 1
    },
    {
      "q": "What does the Array method pop() do?",
      "options": [
        "Removes and returns the last element of the array",
        "Removes and returns the first element of the array",
        "Adds an element to the end of the array",
        "Decrements every element by 1"
      ],
      "correct": 0
    },
    {
      "q": "Which array method can add/remove elements at any position and returns the removed items?",
      "options": [
        "slice()",
        "shift()",
        "reverse()",
        "splice()"
      ],
      "correct": 3
    },
    {
      "q": "How do you get information about the user's browser in JavaScript?",
      "options": [
        "Browser object",
        "version property",
        "navigator object",
        "BrowserInfo API"
      ],
      "correct": 2
    },
    {
      "q": "Which event fires when an element (like a button) loses focus?",
      "options": [
        "onblur",
        "onfocusout-only",
        "onchange",
        "onleave"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of a browser plug-in's mimeTypes property?",
      "options": [
        "Contains MIME properties",
        "Contains MIME sizes",
        "Contains MIME types",
        "Contains MIME methods"
      ],
      "correct": 2
    },
    {
      "q": "Which property represents the content displayed in the browser window?",
      "options": [
        "document",
        "content",
        "window",
        "frame"
      ],
      "correct": 0
    },
    {
      "q": "How can you make a method available on all JavaScript objects?",
      "options": [
        "Object.add(methods)",
        "Object.methods(add)",
        "Object.add.methods(...)",
        "Object.prototype"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of:<br><code>console.log(x);<br>var x = 5;</code>",
      "options": [
        "5",
        "undefined",
        "ReferenceError: x is not defined",
        "null"
      ],
      "correct": 1
    },
    {
      "q": "JSON.parse() was developed as a safer alternative to which function?",
      "options": [
        "eval()",
        "Function()",
        "call()",
        "new Function()"
      ],
      "correct": 0
    },
    {
      "q": "What is the output of: greet = function(...months){ months.forEach(month => console.log('Month: ' + month)); }; greet(['Jan','Feb']);",
      "options": [
        "A single line: Jan Feb",
        "ReferenceError",
        "Two separate lines: 'Month: Jan' then 'Month: Feb'",
        "'Month: Jan,Feb' on one line"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of: function display(num1, num2) { console.log(num1, num2); } let nums = \"12345\"; display(...nums);",
      "options": [
        "1 2",
        "2 1",
        "12345",
        "4 5"
      ],
      "correct": 0
    },
    {
      "q": "What is the console output of: function printName() { name = \"Mary\"; name = \"John\"; console.log(name); }",
      "options": [
        "Empty",
        "None",
        "John",
        "Mary"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: console.log(5 + \"5\");",
      "options": [
        "10",
        "\"55\"",
        "25",
        "Error"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to add an event listener?",
      "options": [
        "addEvent()",
        "attachEvent()",
        "addEventListener()",
        "onEvent()"
      ],
      "correct": 2
    },
    {
      "q": "In JavaScript, does 'var' declare a block-scoped variable?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Does 'let' have block scope?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "In JavaScript, does 'const' declare a block-scoped variable?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "What does typeof null return in JavaScript?",
      "options": [
        "\"null\"",
        "\"object\"",
        "\"undefined\"",
        "\"boolean\""
      ],
      "correct": 1
    },
    {
      "q": "What is the result of the JavaScript expression \"5\" < 2?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "How can you clear all elements of an array in JavaScript? (let a = [1,2,3];)",
      "options": [
        "a.clear()",
        "a.length = 0",
        "delete a",
        "a.reset()"
      ],
      "correct": 1
    },
    {
      "q": "Which function in JS is used to convert an array to a string?",
      "options": [
        "splice",
        "slice",
        "join",
        "concat"
      ],
      "correct": 2
    },
    {
      "q": "The __ JavaScript method is like the mathematical \"for all\" quantifier.",
      "options": [
        "every()",
        "some()",
        "all()",
        "forall()"
      ],
      "correct": 0
    },
    {
      "q": "Which JS method returns true if at least one array element passes a test?",
      "options": [
        "every()",
        "some()",
        "all()",
        "any()"
      ],
      "correct": 1
    },
    {
      "q": "Which method is used to add/remove items from a JavaScript array?",
      "options": [
        "push() only",
        "splice()",
        "concat()",
        "slice()"
      ],
      "correct": 1
    },
    {
      "q": "What syntax allows a variable number of arguments to a function, passed as an array?",
      "options": [
        "function([]numbers) { }",
        "function(*numbers) { }",
        "function(...numbers) { }",
        "function(numbers[]) { }"
      ],
      "correct": 2
    },
    {
      "q": "What allows the same event handler function to be registered more than once, so it's invoked once per registration?",
      "options": [
        "addEvent()",
        "addMultipleEvent()",
        "attachEvent() / addEventListener()",
        "reattachEvent()"
      ],
      "correct": 2
    },
    {
      "q": "A linkage of a series of prototype objects is called a",
      "options": [
        "prototype stack",
        "prototype chain",
        "prototype class",
        "prototypes"
      ],
      "correct": 1
    },
    {
      "q": "How do you create a new object using a prototype in JavaScript?",
      "options": [
        "Object.create()",
        "Object.new()",
        "new Object.prototype()",
        "Object.build()"
      ],
      "correct": 0
    },
    {
      "q": "What is the correct place to insert a JavaScript in an HTML page?",
      "options": [
        "Only the <head>",
        "Only the <body>",
        "Both <head> and <body> are valid",
        "Neither"
      ],
      "correct": 2
    }
  ],
  "angular": [
    {
      "q": "Which command is used to create a new Angular project using the CLI?",
      "options": [
        "ng init my-app",
        "ng new my-app",
        "ng create my-app",
        "ng start my-app"
      ],
      "correct": 1
    },
    {
      "q": "What is the root module of a standard Angular application?",
      "options": [
        "AppComponent",
        "BrowserModule",
        "AppModule",
        "CoreModule"
      ],
      "correct": 2
    },
    {
      "q": "Which file bootstraps the Angular application in the browser?",
      "options": [
        "app.module.ts",
        "app.component.ts",
        "main.ts",
        "index.html"
      ],
      "correct": 2
    },
    {
      "q": "What decorator is used to define an Angular component?",
      "options": [
        "@NgModule",
        "@Injectable",
        "@Component",
        "@Directive"
      ],
      "correct": 2
    },
    {
      "q": "Which property in @Component specifies the HTML template inline?",
      "options": [
        "templateUrl",
        "template",
        "html",
        "view"
      ],
      "correct": 1
    },
    {
      "q": "What does the selector property in @Component define?",
      "options": [
        "The CSS file to apply",
        "The HTML tag used to insert the component",
        "The module the component belongs to",
        "The route path for the component"
      ],
      "correct": 1
    },
    {
      "q": "Which type of data binding is used in this syntax: {{ title }}?",
      "options": [
        "Property binding",
        "Event binding",
        "Two-way binding",
        "String interpolation"
      ],
      "correct": 3
    },
    {
      "q": "What does property binding look like in Angular?",
      "options": [
        "(src)=\"imageUrl\"",
        "{{src}}",
        "[src]=\"imageUrl\"",
        "[(src)]=\"imageUrl\""
      ],
      "correct": 2
    },
    {
      "q": "Which syntax is used for event binding in Angular?",
      "options": [
        "[click]=\"onClick()\"",
        "{{click}}=\"onClick()\"",
        "(click)=\"onClick()\"",
        "[(click)]=\"onClick()\""
      ],
      "correct": 2
    },
    {
      "q": "Which directive enables two-way data binding in Angular?",
      "options": [
        "ngModel",
        "ngBind",
        "ngForm",
        "ngSync"
      ],
      "correct": 0
    },
    {
      "q": "What module must be imported to use ngModel in Angular?",
      "options": [
        "HttpClientModule",
        "ReactiveFormsModule",
        "FormsModule",
        "CommonModule"
      ],
      "correct": 2
    },
    {
      "q": "Which decorator is used to pass data from a parent to a child component?",
      "options": [
        "@Output",
        "@Input",
        "@Inject",
        "@Param"
      ],
      "correct": 1
    },
    {
      "q": "Which decorator is used to emit events from a child to a parent component?",
      "options": [
        "@Input",
        "@Emit",
        "@Output",
        "@EventEmit"
      ],
      "correct": 2
    },
    {
      "q": "What class is used with @Output to emit custom events?",
      "options": [
        "EventEmitter",
        "Subject",
        "Observable",
        "BehaviorSubject"
      ],
      "correct": 0
    },
    {
      "q": "What does the following code do? @Input() title: string;",
      "options": [
        "Emits a title event to the parent",
        "Declares a local variable named title",
        "Allows the parent component to pass a title value into the component",
        "Binds the title to the template"
      ],
      "correct": 2
    },
    {
      "q": "How do you open Chrome DevTools to debug an Angular app?",
      "options": [
        "ng debug",
        "Press F12 in the browser",
        "ng serve --debug",
        "angular.json debug:true"
      ],
      "correct": 1
    },
    {
      "q": "What Angular-specific browser extension helps with debugging component trees?",
      "options": [
        "Angular Inspector",
        "Augury / Angular DevTools",
        "NgDebugger",
        "Zone.js Debugger"
      ],
      "correct": 1
    },
    {
      "q": "Which keyword in TypeScript is used to pause execution at a specific line in DevTools?",
      "options": [
        "breakpoint",
        "pause",
        "debugger",
        "stop"
      ],
      "correct": 2
    },
    {
      "q": "What does the ng serve --source-map flag help with?",
      "options": [
        "Minifying the output",
        "Mapping compiled JS back to TypeScript for debugging",
        "Serving the app on HTTPS",
        "Generating a sitemap"
      ],
      "correct": 1
    },
    {
      "q": "What is View Encapsulation in Angular?",
      "options": [
        "A way to hide the component from the router",
        "A mechanism that scopes CSS styles to a specific component",
        "A method to encapsulate HTTP calls",
        "A lifecycle hook for view initialization"
      ],
      "correct": 1
    },
    {
      "q": "Which ViewEncapsulation mode disables style scoping entirely?",
      "options": [
        "Emulated",
        "ShadowDom",
        "None",
        "Native"
      ],
      "correct": 2
    },
    {
      "q": "What lifecycle hook is called once when the component is initialized?",
      "options": [
        "ngOnChanges",
        "ngAfterViewInit",
        "ngOnInit",
        "ngDoCheck"
      ],
      "correct": 2
    },
    {
      "q": "Which lifecycle hook is triggered whenever an @Input property changes?",
      "options": [
        "ngOnInit",
        "ngOnChanges",
        "ngAfterContentInit",
        "ngDoCheck"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of ngOnDestroy?",
      "options": [
        "To destroy the app module",
        "To clean up resources before the component is removed",
        "To delete component files",
        "To reset component state on navigation"
      ],
      "correct": 1
    },
    {
      "q": "What does @ViewChild allow you to do?",
      "options": [
        "Pass data to a child component",
        "Access a child component or DOM element from the parent",
        "Emit events to the parent",
        "Share services between components"
      ],
      "correct": 1
    },
    {
      "q": "What is ng-content used for in Angular?",
      "options": [
        "To define routing outlets",
        "To project content from a parent into a child component",
        "To lazy load modules",
        "To create dynamic components"
      ],
      "correct": 1
    },
    {
      "q": "Which structural directive conditionally renders an element?",
      "options": [
        "*ngFor",
        "*ngSwitch",
        "*ngIf",
        "*ngShow"
      ],
      "correct": 2
    },
    {
      "q": "Which structural directive iterates over a list?",
      "options": [
        "*ngIf",
        "*ngFor",
        "*ngRepeat",
        "*ngLoop"
      ],
      "correct": 1
    },
    {
      "q": "What variable is exported by *ngFor to track the current index?",
      "options": [
        "let i = iterator",
        "let i = count",
        "let i = index",
        "let i = position"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between structural and attribute directives?",
      "options": [
        "Structural directives change the DOM layout; attribute directives change element appearance or behavior",
        "Attribute directives add/remove elements; structural directives change styles",
        "Both do the same thing",
        "Structural directives only work on forms"
      ],
      "correct": 0
    },
    {
      "q": "Which directive is used to apply CSS classes conditionally?",
      "options": [
        "[ngStyle]",
        "[ngClass]",
        "[ngClassIf]",
        "[conditionalClass]"
      ],
      "correct": 1
    },
    {
      "q": "Which directive dynamically applies inline styles?",
      "options": [
        "[ngClass]",
        "[ngStyle]",
        "[ngCSS]",
        "[styleBinding]"
      ],
      "correct": 1
    },
    {
      "q": "How do you create a custom attribute directive in Angular?",
      "options": [
        "Using @Component with a class selector",
        "Using @Directive with a selector",
        "Using @Pipe with a name",
        "Using @Injectable with providedIn"
      ],
      "correct": 1
    },
    {
      "q": "Which class can be injected into a directive to access the host element?",
      "options": [
        "Renderer2",
        "ElementRef",
        "ViewContainerRef",
        "ComponentRef"
      ],
      "correct": 1
    },
    {
      "q": "What is the recommended way to manipulate the DOM in Angular directives?",
      "options": [
        "Directly via ElementRef.nativeElement",
        "Using document.querySelector",
        "Using Renderer2 methods",
        "Using jQuery"
      ],
      "correct": 2
    },
    {
      "q": "What is the primary role of an Angular service?",
      "options": [
        "To define component templates",
        "To provide reusable business logic and shared data across components",
        "To define routing rules",
        "To declare HTML directives"
      ],
      "correct": 1
    },
    {
      "q": "Which decorator marks a class as injectable in Angular?",
      "options": [
        "@Component",
        "@Service",
        "@Injectable",
        "@Provide"
      ],
      "correct": 2
    },
    {
      "q": "What does providedIn: 'root' mean in @Injectable?",
      "options": [
        "The service is only available in the root component",
        "The service is provided as a singleton across the entire application",
        "The service resets on each component instantiation",
        "The service is lazy loaded"
      ],
      "correct": 1
    },
    {
      "q": "What is Dependency Injection in Angular?",
      "options": [
        "A way to inject HTML into templates",
        "A design pattern where dependencies are provided to a class rather than created inside it",
        "A method to inject CSS styles dynamically",
        "A technique to merge two modules"
      ],
      "correct": 1
    },
    {
      "q": "Where should a service be provided to limit its scope to a specific feature module?",
      "options": [
        "In AppModule providers array",
        "In the component's providers array or the feature module's providers array",
        "In main.ts",
        "In the environment file"
      ],
      "correct": 1
    },
    {
      "q": "Which Angular module is required to set up routing?",
      "options": [
        "FormsModule",
        "RouterModule",
        "HttpClientModule",
        "BrowserModule"
      ],
      "correct": 1
    },
    {
      "q": "What directive renders the matched route component in the template?",
      "options": [
        "<ng-template>",
        "<router-link>",
        "<router-outlet>",
        "<route-view>"
      ],
      "correct": 2
    },
    {
      "q": "Which directive is used for navigation links in Angular?",
      "options": [
        "href",
        "routerLink",
        "navLink",
        "ngRoute"
      ],
      "correct": 1
    },
    {
      "q": "How do you navigate programmatically in Angular?",
      "options": [
        "window.location.href = '/path'",
        "this.router.navigateByUrl('/path') or this.router.navigate(['/path'])",
        "location.go('/path')",
        "this.route.navigate('/path')"
      ],
      "correct": 1
    },
    {
      "q": "Which service is used to access route parameters in a component?",
      "options": [
        "Router",
        "ActivatedRoute",
        "RouteParams",
        "NavigationExtras"
      ],
      "correct": 1
    },
    {
      "q": "What property of ActivatedRoute provides an Observable for route parameters?",
      "options": [
        "params",
        "snapshot",
        "queryParams",
        "data"
      ],
      "correct": 0
    },
    {
      "q": "What is a Route Guard in Angular?",
      "options": [
        "A directive that protects form inputs",
        "A service that controls access to routes based on logic",
        "An interceptor for HTTP requests",
        "A pipe that validates route data"
      ],
      "correct": 1
    },
    {
      "q": "Which interface is implemented by a guard that prevents navigation to a route?",
      "options": [
        "CanActivate",
        "CanLoad",
        "CanDeactivate",
        "Resolve"
      ],
      "correct": 0
    },
    {
      "q": "What is a wildcard route in Angular used for?",
      "options": [
        "To match all routes with query parameters",
        "To redirect any unmatched URL, typically to a 404 page",
        "To define lazy-loaded routes",
        "To group child routes"
      ],
      "correct": 1
    },
    {
      "q": "What is the path for a wildcard route in Angular?",
      "options": [
        "path: '*'",
        "path: 'default'",
        "path: '**'",
        "path: 'notfound'"
      ],
      "correct": 2
    },
    {
      "q": "What is an Observable in Angular?",
      "options": [
        "A static data structure",
        "A stream of data that can be subscribed to over time",
        "A one-time Promise replacement",
        "A directive for dynamic rendering"
      ],
      "correct": 1
    },
    {
      "q": "Which library provides Observables used in Angular?",
      "options": [
        "Zone.js",
        "RxJS",
        "NgRx",
        "Lodash"
      ],
      "correct": 1
    },
    {
      "q": "How do you subscribe to an Observable in Angular?",
      "options": [
        "observable.listen(callback)",
        "observable.then(callback)",
        "observable.subscribe(callback)",
        "observable.on(callback)"
      ],
      "correct": 2
    },
    {
      "q": "What should you do to prevent memory leaks when subscribing to Observables?",
      "options": [
        "Call observable.destroy()",
        "Use ngOnChanges to clean up",
        "Unsubscribe in ngOnDestroy or use the async pipe",
        "Use setTimeout to delay subscription"
      ],
      "correct": 2
    },
    {
      "q": "Which RxJS operator transforms emitted values from an Observable?",
      "options": [
        "filter",
        "tap",
        "map",
        "switchMap"
      ],
      "correct": 2
    },
    {
      "q": "What does the RxJS filter operator do?",
      "options": [
        "Transforms each emitted value",
        "Emits only values that pass a given condition",
        "Merges two observables",
        "Delays the emission of values"
      ],
      "correct": 1
    },
    {
      "q": "What is the async pipe used for in Angular templates?",
      "options": [
        "To handle async/await syntax in templates",
        "To automatically subscribe and unsubscribe from Observables or Promises",
        "To delay rendering of the component",
        "To debounce HTTP requests"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between Subject and BehaviorSubject in RxJS?",
      "options": [
        "They are identical",
        "BehaviorSubject requires an initial value and emits it to new subscribers immediately",
        "Subject emits to all past and future subscribers",
        "BehaviorSubject only works with HTTP calls"
      ],
      "correct": 1
    },
    {
      "q": "Which approach to forms in Angular uses a template-driven strategy?",
      "options": [
        "FormBuilder",
        "AbstractControl",
        "NgForm with ngModel directives in the template",
        "FormGroup defined in the class"
      ],
      "correct": 2
    },
    {
      "q": "Which approach to forms in Angular defines the form structure in the component class?",
      "options": [
        "Template-driven forms",
        "Reactive forms",
        "Hybrid forms",
        "Schema-driven forms"
      ],
      "correct": 1
    },
    {
      "q": "Which module must be imported to use Reactive Forms?",
      "options": [
        "FormsModule",
        "ReactiveFormsModule",
        "CommonModule",
        "HttpClientModule"
      ],
      "correct": 1
    },
    {
      "q": "What class is used to create a reactive form group?",
      "options": [
        "NgForm",
        "AbstractControl",
        "FormGroup",
        "FormArray"
      ],
      "correct": 2
    },
    {
      "q": "How do you add built-in validation to a reactive form control?",
      "options": [
        "Add required attribute in HTML",
        "Pass Validators from the Validators class as the second argument to FormControl",
        "Use ngModel directive",
        "Add validators in @Component metadata"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS class does Angular add to an invalid, touched form control?",
      "options": [
        "ng-error",
        "ng-touched ng-invalid",
        "ng-dirty ng-broken",
        "form-invalid"
      ],
      "correct": 1
    },
    {
      "q": "What does FormArray represent in reactive forms?",
      "options": [
        "An array of form groups within a module",
        "A dynamic list of form controls or groups",
        "An array of validators",
        "A collection of submitted form values"
      ],
      "correct": 1
    },
    {
      "q": "What is an Angular Pipe used for?",
      "options": [
        "Transforming data before it is displayed in the template",
        "Handling HTTP requests",
        "Routing between pages",
        "Injecting services into components"
      ],
      "correct": 0
    },
    {
      "q": "Which pipe converts a string to uppercase in Angular?",
      "options": [
        "upper",
        "toUpperCase",
        "uppercase",
        "capitalize"
      ],
      "correct": 2
    },
    {
      "q": "How do you pass parameters to a pipe in Angular templates?",
      "options": [
        "pipeName(param)",
        "pipeName | param",
        "pipeName:param",
        "pipeName[param]"
      ],
      "correct": 2
    },
    {
      "q": "How do you create a custom pipe in Angular?",
      "options": [
        "Using @Directive with a transform method",
        "Using @Pipe decorator with a transform method",
        "Using @Component with a pipes array",
        "Using @Injectable with a name property"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the pure property in the @Pipe decorator?",
      "options": [
        "It marks the pipe as synchronous",
        "It controls whether Angular re-evaluates the pipe only on pure change detection",
        "It prevents the pipe from being used in other modules",
        "It removes the pipe from the component tree"
      ],
      "correct": 1
    },
    {
      "q": "Which pipe formats a date value in Angular?",
      "options": [
        "dateFormat",
        "formatDate",
        "date",
        "datetime"
      ],
      "correct": 2
    },
    {
      "q": "Which Angular module is required to make HTTP requests?",
      "options": [
        "FormsModule",
        "BrowserModule",
        "HttpClientModule",
        "RouterModule"
      ],
      "correct": 2
    },
    {
      "q": "Which service is used to send HTTP requests in Angular?",
      "options": [
        "HttpService",
        "HttpClient",
        "RequestService",
        "FetchService"
      ],
      "correct": 1
    },
    {
      "q": "What does HttpClient.get() return?",
      "options": [
        "A Promise",
        "A plain object",
        "An Observable",
        "A callback function"
      ],
      "correct": 2
    },
    {
      "q": "What is an HTTP Interceptor in Angular?",
      "options": [
        "A service that cancels all outgoing requests",
        "A class that intercepts outgoing requests or incoming responses to transform or handle them",
        "A route guard for HTTP routes",
        "A pipe that formats HTTP responses"
      ],
      "correct": 1
    },
    {
      "q": "Which interface must be implemented to create an HTTP Interceptor?",
      "options": [
        "HttpHandler",
        "HttpInterceptor",
        "HttpMiddleware",
        "HttpFilter"
      ],
      "correct": 1
    },
    {
      "q": "What method in the HttpInterceptor interface must be implemented?",
      "options": [
        "handle()",
        "transform()",
        "intercept()",
        "process()"
      ],
      "correct": 2
    },
    {
      "q": "How do you add headers to an HTTP request using HttpClient?",
      "options": [
        "httpClient.get(url, {header: 'Authorization'})",
        "httpClient.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer token'}) })",
        "httpClient.addHeader('Authorization', 'token')",
        "httpClient.get(url).setHeaders()"
      ],
      "correct": 1
    },
    {
      "q": "What is JWT used for in Angular authentication?",
      "options": [
        "Styling the login page",
        "Encoding form data before submission",
        "Representing authentication credentials in a compact, self-contained token format",
        "Hashing passwords on the client side"
      ],
      "correct": 2
    },
    {
      "q": "Where is a JWT token typically stored in an Angular app for session persistence?",
      "options": [
        "Angular service state only",
        "LocalStorage or SessionStorage",
        "A cookie file on the server",
        "The Angular router state"
      ],
      "correct": 1
    },
    {
      "q": "Which route guard interface is used to protect routes from unauthenticated users?",
      "options": [
        "CanLoad",
        "Resolve",
        "CanActivate",
        "CanDeactivate"
      ],
      "correct": 2
    },
    {
      "q": "What should an HTTP Interceptor typically do when an authentication token exists?",
      "options": [
        "Delete the token and re-authenticate",
        "Clone the request and attach the Authorization header",
        "Cancel the request and redirect to login",
        "Log the request only"
      ],
      "correct": 1
    },
    {
      "q": "What is a Dynamic Component in Angular?",
      "options": [
        "A component that changes its template at compile time",
        "A component that is created and inserted into the view programmatically at runtime",
        "A component that uses dynamic CSS",
        "A component loaded by the router"
      ],
      "correct": 1
    },
    {
      "q": "Which class is used to get a reference to a location in the DOM where a dynamic component can be inserted?",
      "options": [
        "ComponentRef",
        "ElementRef",
        "ViewContainerRef",
        "TemplateRef"
      ],
      "correct": 2
    },
    {
      "q": "Which method of ViewContainerRef is used to create a dynamic component?",
      "options": [
        "insertComponent()",
        "createComponent()",
        "addComponent()",
        "renderComponent()"
      ],
      "correct": 1
    },
    {
      "q": "What is an NgModule in Angular?",
      "options": [
        "A TypeScript class decorator for services",
        "A container that groups related components, directives, pipes, and services",
        "A built-in directive for conditionally showing modules",
        "A utility for managing HTTP calls"
      ],
      "correct": 1
    },
    {
      "q": "Which array in @NgModule makes components, directives, and pipes available to other modules?",
      "options": [
        "declarations",
        "imports",
        "providers",
        "exports"
      ],
      "correct": 3
    },
    {
      "q": "What is Lazy Loading in Angular routing?",
      "options": [
        "Loading all modules at app startup",
        "Loading feature modules only when their route is accessed",
        "Deferring all service initialization",
        "Loading components after a delay"
      ],
      "correct": 1
    },
    {
      "q": "Which property in a route definition enables lazy loading of a module?",
      "options": [
        "component",
        "children",
        "loadChildren",
        "lazyLoad"
      ],
      "correct": 2
    },
    {
      "q": "What is the Ahead-of-Time (AOT) compilation in Angular?",
      "options": [
        "Compiling Angular templates in the browser at runtime",
        "Compiling Angular templates during the build process before the browser runs the app",
        "A way to preload lazy modules",
        "A method to compile TypeScript into JavaScript"
      ],
      "correct": 1
    },
    {
      "q": "Which Angular CLI command builds the app for production with optimizations?",
      "options": [
        "ng build",
        "ng build --prod",
        "ng compile --production",
        "ng deploy"
      ],
      "correct": 1
    },
    {
      "q": "What is tree shaking in the context of Angular builds?",
      "options": [
        "Removing unused CSS",
        "Eliminating dead code not referenced in the application to reduce bundle size",
        "Shaking the component tree to re-render",
        "Deleting unused route definitions"
      ],
      "correct": 1
    },
    {
      "q": "Which file would you modify to configure environment-specific variables in Angular?",
      "options": [
        "app.module.ts",
        "angular.json",
        "environment.ts / environment.prod.ts",
        "tsconfig.json"
      ],
      "correct": 2
    },
    {
      "q": "What command is used to deploy an Angular app to GitHub Pages using the CLI?",
      "options": [
        "ng deploy --target=github",
        "ng publish",
        "ng add angular-cli-ghpages then ng deploy",
        "ng build && git push"
      ],
      "correct": 2
    },
    {
      "q": "Which testing framework does Angular use by default for unit tests?",
      "options": [
        "Mocha",
        "Jest",
        "Jasmine",
        "Chai"
      ],
      "correct": 2
    },
    {
      "q": "We need to tell AngularJS what part of our HTML page contains the AngularJS app. You do so by adding the",
      "options": [
        ". . . . attribute to the root HTML element of the AngularJS app.",
        "ng-app",
        "ag-app",
        "js-app",
        "aj-app"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS can show or hide HTML depending on the state of data in the model. You do so using a set of",
      "options": [
        "AngularJS directives such as . . . . . . which are created specifically for that purpose.",
        "ng-shown, ng-hidden",
        "ng-show, ng-hide",
        "nt-show, nt-hide",
        "ng-shows, ng-hides"
      ],
      "correct": 1
    },
    {
      "q": "EventEmitter class’s simple interface, which basically encompass two methods . . . . . . . . . can therefore be used to trigger",
      "options": [
        "custom events and listen to events as well, both synchronously or asynchronously.",
        "exit()",
        "superscript()",
        "subscribe()",
        "emit()"
      ],
      "correct": 2
    },
    {
      "q": "The . . . . . . . . . directive substitutes the normal href property and makes it easier to work with route links in",
      "options": [
        "Angular 2. Moreover if we want to navigate between routes, we use the . . . . . . . . . . . directive.",
        "RouterLinks",
        "RouterLinking",
        "RouterLink",
        "RouterLinq"
      ],
      "correct": 2
    },
    {
      "q": "Three main components of Routing are . . . . . . . . . . .",
      "options": [
        "RouteObject",
        "RouterOutlet",
        "RouterState",
        "RouterLink"
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "q": "Route . . . . . . . . . . allow us to pass values in our url to our component so we can dynamically change our view content.",
      "options": [
        "pipes",
        "modules",
        "variables",
        "parameters"
      ],
      "correct": 3
    },
    {
      "q": "To use observables, Angular uses a third-party library called . . . . . . .",
      "options": [
        "ng2-bootstrap",
        "angular-cli",
        "numeral",
        "Reactive Extensions (RxJS)"
      ],
      "correct": 3
    },
    {
      "q": "Observables help you manage . . . . . . . . data.",
      "options": [
        "synchronous",
        "asynchronous",
        "Both asynchronous & synchronous",
        "None of above"
      ],
      "correct": 1
    },
    {
      "q": "We subscribe to the observable ourselves using the actual . . . . . . method. The downside is that you have to manage the",
      "options": [
        "subscription yourself.",
        "subscribe()",
        "subs()",
        "subscribed()",
        "None of above"
      ],
      "correct": 0
    },
    {
      "q": "A promise represents the final result of an . . . . . . . operation.",
      "options": [
        "asynchronous",
        "synchronous"
      ],
      "correct": 0
    },
    {
      "q": "The promise becomes . . . . . . after resolving or rejecting.",
      "options": [
        "mutable",
        "ignored",
        "immutable",
        "recurring"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is not built-in pipe in Angular",
      "options": [
        "DatePipe",
        "CurrencyPipe",
        "DataPipe",
        "PercentPipe"
      ],
      "correct": 2
    },
    {
      "q": "If you chain multiple pipes together, they are executed . . . . .",
      "options": [
        "in parallel",
        "LIFO order",
        "in the order in which you specify them",
        "none of above"
      ],
      "correct": 2
    },
    {
      "q": "The . . . . . . . filter waits for a promise and returns the most recent value received. It then updates the view.",
      "options": [
        "sync",
        "async",
        "promise",
        "custom"
      ],
      "correct": 1
    },
    {
      "q": "The . . . . . decorator allows us to define the pipe name that is globally available for use in any template in the across",
      "options": [
        "application.",
        "@pipeName",
        "@pipeDeco",
        "$Pipe",
        "@Pipe"
      ],
      "correct": 3
    },
    {
      "q": "Data bindings are applied as . . . . . . . . or as special sequences of characters in strings.",
      "options": [
        "expressions",
        "attributes on HTML elements",
        "elements itself",
        "none of above"
      ],
      "correct": 1
    },
    {
      "q": "A data binding has these four parts:",
      "options": [
        "host element, curly brackets, target, expression",
        "host element, square brackets, target, evaluation",
        "host element, square brackets, target, expression",
        "host element, parentheses, target, expression"
      ],
      "correct": 2
    },
    {
      "q": "Attribute binding is similar to property binding but is tied to the . . . . . . . . rather than the DOM property.",
      "options": [
        "Page attribute",
        "DOM attribute",
        "Root attribute",
        "HTML attribute"
      ],
      "correct": 3
    },
    {
      "q": "To make your applications ready for animations, you must include the AngularJS Animate library and then you must refer to",
      "options": [
        "the . . . . . module in your application.",
        "ng-repeat",
        "ngAnimation",
        "ngAnimate",
        "None of above"
      ],
      "correct": 2
    },
    {
      "q": "Using the . . . . . . animation function, the parent animation can allow the child animation to run at the exact",
      "options": [
        "correct time.",
        "animateChild",
        "childAnimate",
        "animateInner",
        "innerChild"
      ],
      "correct": 0
    },
    {
      "q": "Animations are fired using animation property bindings which are prefixed with an . . . . symbol.",
      "options": [
        "&",
        "#",
        "$",
        "@"
      ],
      "correct": 3
    },
    {
      "q": ". . . . . . . is an animation-specific function that is designed to be used inside of Angular's animation DSL",
      "options": [
        "language. It is used to kick off a reusable animation that is created using animation().",
        "useAnimation",
        "reuseAnimation",
        "in-useAnimation",
        "All of above"
      ],
      "correct": 0
    },
    {
      "q": "It's always possible to make use of animation input parameters by setting even more data via the . . . . .property.",
      "options": [
        "options.param",
        "option.params",
        "option.param",
        "options.params"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following bootstrap styles are used to create a vertical pills navigation?",
      "options": [
        ".nav, .nav-tabs",
        ".nav, .nav-pills",
        ".nav, .nav-pills, .nav-stacked",
        ".nav, .nav-tabs, .nav-justified"
      ],
      "correct": 2
    },
    {
      "q": ". Which of the following bootstrap styles are used to create a justified tabs navigation?",
      "options": [
        "nav, .nav-tabs",
        "nav, .nav-pills",
        "nav, .nav-pills, .nav-stacked",
        "nav, .nav-tabs, .nav-justified"
      ],
      "correct": 3
    },
    {
      "q": "Which class indicates a dropdown menu?",
      "options": [
        ".dropdown-list",
        ".select",
        ".dropdown"
      ],
      "correct": 2
    },
    {
      "q": "Ques. Bootstrap’s grid system allows up to",
      "options": [
        "6 columns across the page",
        "12 columns across the page",
        "columns across the page",
        "columns across the page"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following classes makes a round corner image automatically adjust to fit the size of the screen?",
      "options": [
        ".img-res-image",
        ".img-responsive-image * img-fluid (for full width responsible)",
        ".img-responsive",
        ".img-res"
      ],
      "correct": 2
    },
    {
      "q": "Which class should be used to indicate a button group?",
      "options": [
        "btn-group-buttons",
        "btn-group",
        "btn-grp",
        "btn-buttons"
      ],
      "correct": 1
    },
    {
      "q": "On the opposite side of event bindings (()) lie Angular's square-bracket syntax ([]) which signify a . . . . .",
      "options": [
        "property binding",
        "class binding",
        "style binding",
        "both A & B"
      ],
      "correct": 0
    },
    {
      "q": "The purpose of the @Output decorator in a nested component is to:",
      "options": [
        "Expose an output channel for logging",
        "Expose an event property that a container can listen for using event binding",
        "Expose a property that a container can set using property binding"
      ],
      "correct": 1
    },
    {
      "q": "A function that adds metadata to a class, its members, or its method arguments is a(n):",
      "options": [
        "Attribute",
        "Directive",
        "Annotation",
        "Decorator"
      ],
      "correct": 3
    },
    {
      "q": "What is the current recommended way to register a service with the root Angular injector?",
      "options": [
        "By setting the providedIn property of the Injectable decorator for the service.",
        "By setting the providedIn property of the Component decorator for the component that needs it",
        "By declaring the service in an Angular module",
        "By setting the providedIn property of the Component decorator for the App component."
      ],
      "correct": 0
    },
    {
      "q": "What does the Angular CLI do when you execute npm start/ng serve?",
      "options": [
        "It builds the application for production and starts the deployment process",
        "It compiles the application and starts a web server to serve the application to the browser",
        "It starts the default editor for the application so you can make changes",
        "It installs the packages defined in the package.json file"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the *ngIf directive?",
      "options": [
        "To use style classes to hide or show elements based on an expression",
        "To repeat a set of elements based on an expression",
        "To optionally navigate to another view based on an expression",
        "To add or remove elements from the DOM based on an expression"
      ],
      "correct": 3
    },
    {
      "q": "Route definitions are configured in an array passed to:",
      "options": [
        "A method of the AppModule",
        "A method of the routed component",
        "A method of the AppComponent",
        "D .A method of the RouterModule"
      ],
      "correct": 3
    },
    {
      "q": "What is the purpose of the subscribe method on an observable?",
      "options": [
        "To map observable responses to alternate formats",
        "To transform the Observable stream",
        "To request logging of observable actions",
        "To request notifications and data from the observable"
      ],
      "correct": 3
    },
    {
      "q": "What is the purpose of the Angular CLI?",
      "options": [
        "Installing and running Angular applications.",
        "Building, executing, testing, and deploying Angular applications",
        "Testing and deploying Angular applications",
        "Executing, testing, and debugging Angular applications."
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a feature module?",
      "options": [
        "To define all the logic for your application all in one place",
        "To separate out the responsibilities for a specific feature set into its own Angular module",
        "To consolidate Angular system modules, such as BrowserModule and FormsModule, into a logical group",
        "To provide services specifically for one set of application features"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is the correct syntax for two-way binding?",
      "options": [
        "([ngModel])='listFilter'",
        "[(ngModel)]='listFilter'",
        "{{listFilter}}",
        "ngModel='listFilter'"
      ],
      "correct": 1
    },
    {
      "q": "In Angular / RxJs , when should you unsubscribe from a Subscription ?",
      "options": [
        "There is no need to unsubscribe . Angular routing handles it.",
        "Unsubscribe them in ngOnDestroy."
      ],
      "correct": 1
    },
    {
      "q": "In Angular, how can you set a header in every http request ?",
      "options": [
        "Use HttpClientInterceptor.",
        "Extend HttpClient class.",
        "Set as a request header parameter."
      ],
      "correct": 0
    },
    {
      "q": "Which method of Angular RouterModule should be called for providing all routes in AppModule?",
      "options": [
        "RouteModule.forChild",
        "RouteModule.forRoot",
        "RouterModule",
        "RouterModule.all"
      ],
      "correct": 1
    },
    {
      "q": "Where should you sort and filter data?",
      "options": [
        "In a directive",
        "In a pipe",
        "In your component",
        "In a filter"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "When bootstrapping an Angular app, how do you specify the main, top-level app component to be used?",
      "options": [
        "You add the component as a package in your SystemJs config.",
        "You load the component directly in your index.html file.",
        "You add the component to the bootstrap array in your main app module.",
        "You load the component directly from your main SystemJs package (e.g. main.ts)."
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "EventEmitter class’s simple interface, which basically encompass two methods . . . . . . . . . can therefore be used to trigger custom events and listen to events as well, both synchronously or asynchronously.",
      "options": [
        "exit()",
        "superscript()",
        "subscribe()",
        "emit()"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "EventEmitter class’s simple interface, which basically encompass two methods . . . . . . . . . can therefore be",
      "options": [
        "used to trigger custom events and listen to events as well, both synchronously or asynchronously.",
        "exit()",
        "superscript()",
        "subscribe()",
        "emit()"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "We subscribe to the observable ourselves using the actual . . . . . . method. The downside is that you have to",
      "options": [
        "manage the subscription yourself.",
        "subscribe()",
        "subs()",
        "subscribed()",
        "None of above"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "The . . . . . decorator allows us to define the pipe name that is globally available for use in any template in the",
      "options": [
        "across application.",
        "@pipeName",
        "@pipeDeco",
        "$Pipe",
        "@Pipe"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "To make your applications ready for animations, you must include the AngularJS Animate library and then",
      "options": [
        "you must refer to the . . . . . module in your application.",
        "ng-repeat",
        "ngAnimation",
        "ngAnimate",
        "None of above"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": ". Promises are more advanced than Observables.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "We can use $dirty and $invalid flags to do the form validations.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS expressions behave in same way as ng-bind directives.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1
    },
    {
      "q": "AngularJS Expressions are written inside double braces like {{ expression}}.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is true about AngularJS expressions?",
      "options": [
        "Expressions are used to bind application data to html.",
        "Expressions are written inside double braces like {{ expression}}.",
        "Expressions behave in same way as ng-bind directives.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "Which of the following is true about AngularJS?",
      "options": [
        "AngularJS is a framework to build large scale and high performance web appliation while keeping them as easy-to-maintain.",
        "AngularJS provides developers options to write client side application (using JavaScript) in a clean MVC (Model View Controller) way.",
        "AngularJS is a powerful JavaScript based development framework to create RICH Internet Application(RIA).",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Are application written using AngularJS cross browser compliant?",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS uses two way data binding.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is true about AngularJS service?",
      "options": [
        "Services are JavaScript functions.",
        "Services are responsible to do specific tasks only",
        "Inbuilt services are always prefixed with $ symbol.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "What happens when page containing AngularJS based Application loads.",
      "options": [
        "HTML document is loaded into the browser, and evaluated by the browser.",
        "AngularJS JavaScript file is loaded; the angular global object is created.",
        "JavaScript which registers controller functions is executed.",
        "All of the above."
      ],
      "correct": 3
    },
    {
      "q": "In controllers, model data is accessed via $scope object.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS Expressions are used to bind application data to html.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS expressions are written using.",
      "options": [
        "double braces like {{ expression}}",
        "single braces like {expression}",
        "small bracket like (expression)",
        "capital bracket like [expression]"
      ],
      "correct": 0
    },
    {
      "q": "lowercase filter is applied to an expression using pipe character.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1
    },
    {
      "q": "AngularJS applications can run on all major browsers and smart phones including Android and iOS based phones/tablets.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "currency filter is applied to an expression using pipe character.",
      "options": [
        "true",
        "false"
      ],
      "correct": 0
    },
    {
      "q": "Event Emitter class’s simple interface, which basically encompass two methods . . . .",
      "options": [
        ". . . . . can therefore be used to trigger custom events and listen to events as well, both",
        "synchronously or asynchronously.",
        "exit()",
        "superscript()",
        "subscribe()",
        "emit()"
      ],
      "correct": 2
    },
    {
      "q": "The . . . . . . . . . directive substitutes the normal href property and makes it easier to",
      "options": [
        "work with route links in Angular 2. Moreover if we want to navigate between routes, we",
        "use the . . . . . . . . . . . directive.",
        "RouterLinks",
        "RouterLinking",
        "RouterLink",
        "RouterLinq"
      ],
      "correct": 2
    },
    {
      "q": "Route . . . . . . . . . . allow us to pass values in our url to our component so we can",
      "options": [
        "dynamically change our view content.",
        "pipes",
        "modules",
        "variables",
        "parameters"
      ],
      "correct": 3
    },
    {
      "q": "The . . . . . decorator allows us to define the pipe name that is globally available for",
      "options": [
        "use in any template in the across application.",
        "@pipeName",
        "@pipeDeco",
        "$Pipe",
        "@Pipe"
      ],
      "correct": 3
    },
    {
      "q": "Attribute binding is similar to property binding but is tied to the . . . . . . . . rather than",
      "options": [
        "the DOM property.",
        "Page attribute",
        "DOM attribute",
        "Root attribute",
        "HTML attribute"
      ],
      "correct": 3
    },
    {
      "q": "It's always possible to make use of animation input parameters by setting even more",
      "options": [
        "data via the . . . . .property.",
        "options.param",
        "option.params",
        "option.param",
        "options.params"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following classes makes a round corner image automatically adjust to\nfit the size of the screen?",
      "options": [
        ".img-res-image",
        ".img-responsive-image * img-fluid (for full width responsible)",
        ".img-responsive",
        ".img-res"
      ],
      "correct": 2
    },
    {
      "q": "What are the types of access modifiers supported by TypeScript?",
      "options": [
        "Public",
        "Private",
        "Protected",
        "All of these"
      ],
      "correct": 3
    },
    {
      "q": "In Angular , one can create a local HTML reference of an HTML tag using a variable ,\nwhich starts with character ___ .",
      "options": [
        "@",
        "#",
        "*",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "In Angular routing , which of these tags is used to show the selected route\ncomponent dynamically ?",
      "options": [
        "<router></router>",
        "<router-output></router-output>",
        "<router-outlet></router-outlet>",
        "<router-input></router-input>"
      ],
      "correct": 2
    },
    {
      "q": "In Angular, one can create local HTML reference or HTML tag using variable\nwhich starts with character ____",
      "options": [
        "@",
        "#",
        "“",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "In Angular application there can be atmost one <router-outlet> can be used for routing",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Select type of pipe Angular executes during every change detection cycle of component",
      "options": [
        "Pure Pipe",
        "Impure Pipe"
      ],
      "correct": 1
    },
    {
      "q": "There can be more than one <router-outlet> element in angular application",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "When you apply ‘pipe’, it changes the value of the underlying component’s member variable as well.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What’s the best way to inject one service into another in Angular?",
      "options": [
        "A service cannot be injected in another service.",
        "Through constructor of depending service.",
        "By instantiating using a new operator."
      ],
      "correct": 1
    },
    {
      "q": "Which of these Angular services can be injected in your component to the dynamic mode navigation ?",
      "options": [
        "Routing.",
        "RouterService.",
        "RoutingService",
        "Router"
      ],
      "correct": 3
    },
    {
      "q": "To use the Angular HttpClient component, you must import the ____ module.",
      "options": [
        "HttpClientModule.",
        "HttpModule.",
        "Http"
      ],
      "correct": 0
    },
    {
      "q": "Purpose of *ngFor?",
      "options": [
        "Conditional display",
        "Iterate list",
        "Data binding",
        "Form submission"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Decorator defining component?",
      "options": [
        "@Component",
        "@Directive",
        "@NgModule",
        "@Injectable"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Output: <div *ngIf=\"false\">Hello</div>",
      "options": [
        "Hello",
        "Nothing",
        "Error",
        "false"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Module for HTTP requests?",
      "options": [
        "HttpClientModule",
        "FormsModule",
        "RouterModule",
        "CommonModule"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Spring: Which annotation defines a Spring bean?",
      "options": [
        "@Bean",
        "@Component",
        "@Service",
        "All of the above"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Spring: What is the output of this code? @Component public class MyBean { public String getName() { return \"Hello\"; } } @Autowired MyBean bean; System.out.println(bean.getName());",
      "options": [
        "Hello",
        "null",
        "Error",
        "MyBean"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "In Angular routing , which of these tags is used to show the selected route component dynamically ?",
      "options": [
        "<router></router>",
        "<router-output></router-output>",
        "<router-outlet></router-outlet>",
        "<router-input></router-input>"
      ],
      "correct": 2
    },
    {
      "q": "In Angular , one can create local HTML reference or HTML tag using variable which starts with character ____",
      "options": [
        "@",
        "#",
        "“",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "We need to tell AngularJS what part of our HTML page contains the AngularJS app. You do so by adding the ____ attribute to the root HTML element.",
      "options": [
        "ng-app",
        "ag-app",
        "js-app",
        "aj-app"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS can show or hide HTML depending on the state of data in the model, using a set of directives such as ____.",
      "options": [
        "ng-shown, ng-hidden",
        "ng-show, ng-hide",
        "nt-show, nt-hide",
        "ng-shows, ng-hides"
      ],
      "correct": 1
    },
    {
      "q": "EventEmitter class's simple interface, encompassing two methods amit() and ____ , can be used to trigger custom events and listen to events.",
      "options": [
        "exit()",
        "superscript()",
        "subscribe()",
        "emit()"
      ],
      "correct": 2
    },
    {
      "q": "The ____ directive substitutes the normal href property and makes it easier to work with route links in Angular 2.",
      "options": [
        "RouterLinks",
        "RouterLinking",
        "RouterLink",
        "RouterLinq"
      ],
      "correct": 2
    },
    {
      "q": "Three main components of Routing are ____. (Choose which is not)",
      "options": [
        "RouteObject",
        "RouterOutlet",
        "RouterState",
        "RouterLink"
      ],
      "correct": 2
    },
    {
      "q": "We subscribe to the observable ourselves using the actual ____ method.",
      "options": [
        "subscribe()",
        "subs()",
        "subscribed()",
        "None of above"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is not a built-in pipe in Angular?",
      "options": [
        "DatePipe",
        "CurrencyPipe",
        "DataPipe",
        "PercentPipe"
      ],
      "correct": 2
    },
    {
      "q": "The ____ filter waits for a promise and returns the most recent value received, then updates the view.",
      "options": [
        "sync",
        "async",
        "promise",
        "custom"
      ],
      "correct": 1
    },
    {
      "q": "The ____ decorator allows us to define the pipe name that is globally available for use in any template.",
      "options": [
        "@pipeName",
        "@pipeDeco",
        "$Pipe",
        "@Pipe"
      ],
      "correct": 3
    },
    {
      "q": "To make your applications ready for animations, you must include the AngularJS Animate library and refer to the ____ module.",
      "options": [
        "ng-repeat",
        "ngAnimation",
        "ngAnimate",
        "None of above"
      ],
      "correct": 2
    },
    {
      "q": "Using the ____ animation function, the parent animation can allow the child animation to run at the exact correct time.",
      "options": [
        "animateChild",
        "childAnimate",
        "animateInner",
        "innerChild"
      ],
      "correct": 0
    },
    {
      "q": "____ is an animation-specific function designed to be used inside Angular's animation DSL language, used to kick off a reusable animation created using animation().",
      "options": [
        "useAnimation",
        "reuseAnimation",
        "in-useAnimation",
        "All of above"
      ],
      "correct": 0
    },
    {
      "q": "Bootstrap's grid system allows up to",
      "options": [
        "6 columns across the page",
        "12 columns across the page",
        "24 columns across the page",
        "3 columns across the page"
      ],
      "correct": 1
    },
    {
      "q": "When you apply an Angular 'pipe', it changes the value of the underlying component's member variable as well.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "In Angular, you can pass data from parent component to child component using ____.",
      "options": [
        "@Output()",
        "@Input()",
        "Input",
        "Output"
      ],
      "correct": 1
    },
    {
      "q": "In Angular, you can pass data from child component to parent component using ____.",
      "options": [
        "@Output",
        "@Input",
        "Input",
        "Output"
      ],
      "correct": 0
    },
    {
      "q": "In Angular, one can create a local HTML reference of an HTML tag using a variable, which starts with character ____.",
      "options": [
        "@",
        "#",
        "*",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "If you provide a service in two Angular components, in the \"providers\" section of @Component decorator, how many instances of the service get created?",
      "options": [
        "4",
        "2",
        "3"
      ],
      "correct": 1
    },
    {
      "q": "Which of these Angular services can be injected into your component for dynamic navigation?",
      "options": [
        "Routing",
        "RouterService",
        "RoutingService",
        "Router"
      ],
      "correct": 3
    },
    {
      "q": "In Angular, which wildcard route path will you use to define a 404 route?",
      "options": [
        "**",
        "/",
        "##",
        "default"
      ],
      "correct": 0
    },
    {
      "q": "We need to tell AngularJS what part of an HTML page contains the AngularJS app. You add the ____ attribute to the root HTML element.",
      "options": [
        "ng-app",
        "ag-app",
        "js-app",
        "aj-app"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS can show or hide HTML depending on the state of data in the model, using the directives ____.",
      "options": [
        "ng-shown, ng-hidden",
        "ng-show, ng-hide",
        "nt-show, nt-hide",
        "ng-shows, ng-hides"
      ],
      "correct": 1
    },
    {
      "q": "EventEmitter's simple interface basically encompasses two methods that trigger custom events and listen to events, synchronously or asynchronously. Which two?",
      "options": [
        "exit()",
        "subscribe()",
        "superscript()",
        "emit()"
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "q": "The ____ directive substitutes the normal href property to work with route links, and is also used to navigate between routes.",
      "options": [
        "RouterLinks",
        "RouterLinking",
        "RouterLink",
        "RouterLinq"
      ],
      "correct": 2
    },
    {
      "q": "Route ____ allow you to pass values in the URL to a component so you can dynamically change view content.",
      "options": [
        "pipes",
        "modules",
        "variables",
        "parameters"
      ],
      "correct": 3
    },
    {
      "q": "You subscribe to an observable yourself using the actual ____ method (you then have to manage the subscription yourself).",
      "options": [
        "subscribe()",
        "subs()",
        "subscribed()",
        "none of the above"
      ],
      "correct": 0
    },
    {
      "q": "A promise represents the final result of a(n) ____ operation.",
      "options": [
        "asynchronous",
        "synchronous"
      ],
      "correct": 0
    },
    {
      "q": "A promise becomes ____ after resolving or rejecting.",
      "options": [
        "mutable",
        "ignored",
        "immutable",
        "recurring"
      ],
      "correct": 2
    },
    {
      "q": "The ____ pipe waits for a promise (or observable) and returns the most recent value received, updating the view.",
      "options": [
        "sync",
        "async",
        "promise",
        "custom"
      ],
      "correct": 1
    },
    {
      "q": "The ____ decorator lets you define a pipe name that's globally available for use in any template across the application.",
      "options": [
        "@pipeName",
        "@pipeDeco",
        "$Pipe",
        "@Pipe"
      ],
      "correct": 3
    },
    {
      "q": "To make animations work, you include the Animate library and refer to the ____ module in your application.",
      "options": [
        "ng-repeat",
        "ngAnimation",
        "ngAnimate",
        "none of the above"
      ],
      "correct": 2
    },
    {
      "q": "Using the ____ animation function, a parent animation can let the child animation run at the exact correct time.",
      "options": [
        "animateChild",
        "childAnimate",
        "animateInner",
        "innerChild"
      ],
      "correct": 0
    },
    {
      "q": "Animations are fired using animation property bindings prefixed with which symbol?",
      "options": [
        "&",
        "#",
        "$",
        "@"
      ],
      "correct": 3
    },
    {
      "q": "____ is an animation-specific function used inside Angular's animation DSL to kick off a reusable animation created with animation().",
      "options": [
        "useAnimation",
        "reuseAnimation",
        "in-useAnimation",
        "all of the above"
      ],
      "correct": 0
    },
    {
      "q": "You can pass extra animation input parameters by setting more data via the ____ property.",
      "options": [
        "options.param",
        "option.params",
        "option.param",
        "options.params"
      ],
      "correct": 3
    },
    {
      "q": "On the opposite side of event bindings (( )) lie Angular's square-bracket syntax ([ ]), which signifies a:",
      "options": [
        "property binding",
        "class binding",
        "style binding",
        "both A & B"
      ],
      "correct": 0
    },
    {
      "q": "True or False: Promises are more advanced than Observables.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What does the Angular CLI stand for?",
      "options": [
        "Command-Line Interface",
        "Component Loading Interface",
        "Core Library Import",
        "Class-Level Injection"
      ],
      "correct": 0
    },
    {
      "q": "What are the 4 main types of data binding in Angular?",
      "options": [
        "Property [ ], Interpolation {{ }}, Event ( ), Two-way [( )]",
        "Property {{ }}, Interpolation [ ], Event ( ), Two-way ( )[ ]",
        "Only property and event binding exist",
        "Interpolation, animation, routing, and pipes"
      ],
      "correct": 0
    },
    {
      "q": "Where should you sort and filter data in an Angular app?",
      "options": [
        "In a directive",
        "In a pipe",
        "In your component",
        "In a filter"
      ],
      "correct": 2
    },
    {
      "q": "When bootstrapping an app, how do you specify the main, top-level app component?",
      "options": [
        "Add the component as a package in your SystemJS config",
        "Load the component directly in your index.html file",
        "Add the component to the bootstrap array in your main app module",
        "Load the component directly from your main SystemJS package (e.g. main.ts)"
      ],
      "correct": 2
    },
    {
      "q": "The three main building blocks of Angular's Router are:",
      "options": [
        "RouteObject",
        "RouterOutlet",
        "RouterState",
        "RouterLink"
      ],
      "correct": [
        0,
        1,
        3
      ]
    },
    {
      "q": "Scope acts as glue between controller and view.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "We can use $dirty and $invalid flags to do form validations.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "AngularJS expressions behave in the same way as ng-bind directives.",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "q": "A model available on $rootScope can be overridden by all of its child scopes.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Are applications written using AngularJS cross-browser compliant?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Using the .service() method, we define a service and then assign methods to it.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Templates can be a single file (like index.html) or multiple views combined into one page.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is true about AngularJS services?",
      "options": [
        "Services are JavaScript functions/objects",
        "Services are responsible for specific tasks only",
        "Built-in services are always prefixed with $",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "$rootScope is the parent of all scope variables.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "What happens when a page containing an AngularJS app loads?",
      "options": [
        "The HTML document is loaded and evaluated by the browser",
        "The AngularJS script loads and the angular global object is created",
        "JavaScript registering controller functions is executed",
        "All of the above, in that order"
      ],
      "correct": 3
    },
    {
      "q": "In controllers, model data is accessed via the $scope object.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "A lowercase filter is applied to an expression using the pipe character.",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "q": "AngularJS applications can run on all major browsers and smartphones, including Android and iOS.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "A currency filter is applied to an expression using the pipe character.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "EventEmitter's simple interface is mainly used through which method to trigger custom events (and subscribe() to listen)?",
      "options": [
        "exit()",
        "superscript()",
        "subscribe()",
        "emit()"
      ],
      "correct": 3
    },
    {
      "q": "Which directive substitutes the normal href and is used to navigate between routes in Angular?",
      "options": [
        "RouterLinks",
        "RouterLinking",
        "RouterLink",
        "RouterLinq"
      ],
      "correct": 2
    },
    {
      "q": "Route ______ allow us to pass values in our URL to a component to dynamically change view content.",
      "options": [
        "pipes",
        "modules",
        "variables",
        "parameters"
      ],
      "correct": 3
    },
    {
      "q": "The ______ decorator allows us to define a pipe's name for use across an application.",
      "options": [
        "@pipeName",
        "@pipeDeco",
        "$Pipe",
        "@Pipe"
      ],
      "correct": 3
    },
    {
      "q": "Attribute binding is tied to the ______ rather than the DOM property.",
      "options": [
        "Page attribute",
        "DOM attribute",
        "Root attribute",
        "HTML attribute"
      ],
      "correct": 3
    },
    {
      "q": "It's possible to control more animation input parameters via the ______ property.",
      "options": [
        "options.param",
        "option.params",
        "option.param",
        "options.params"
      ],
      "correct": 3
    },
    {
      "q": "In Angular, one can create a local HTML reference of a tag using a variable that starts with character ___.",
      "options": [
        "@",
        "#",
        "*",
        "&"
      ],
      "correct": 1
    },
    {
      "q": "Which tag is used to show the selected route component dynamically?",
      "options": [
        "<router></router>",
        "<router-output></router-output>",
        "<router-outlet></router-outlet>",
        "<router-input></router-input>"
      ],
      "correct": 2
    },
    {
      "q": "What is the syntax for two-way data binding in Angular?",
      "options": [
        "{{ngModel}}",
        "[(ngModel)]",
        "(ngModel)",
        "[ngModel]"
      ],
      "correct": 1
    },
    {
      "q": "Which of these Angular services can be injected to enable dynamic navigation?",
      "options": [
        "Routing",
        "RouterService",
        "RoutingService",
        "Router"
      ],
      "correct": 3
    },
    {
      "q": "Which method of Angular's RouterModule is used to provide all routes at the AppModule (root) level?",
      "options": [
        "RouteModule.forChild",
        "RouterModule.forRoot",
        "RouterModule (bare)",
        "RouterModule.all"
      ],
      "correct": 1
    },
    {
      "q": "To use the Angular HttpClient, which module must you import?",
      "options": [
        "HttpClientModule",
        "HttpModule",
        "Http",
        "HttpService"
      ],
      "correct": 0
    },
    {
      "q": "What does FormBuilder simplify in Angular?",
      "options": [
        "HTTP requests",
        "Reactive forms creation",
        "Template rendering",
        "Dependency injection"
      ],
      "correct": 1
    },
    {
      "q": "Which decorator is used to define a component in Angular?",
      "options": [
        "@Component",
        "@Directive",
        "@NgModule",
        "@Injectable"
      ],
      "correct": 0
    },
    {
      "q": "What is rendered by: <div *ngIf=\"false\">Hello</div>?",
      "options": [
        "Hello",
        "Nothing",
        "Error",
        "The literal text false"
      ],
      "correct": 1
    },
    {
      "q": "How do you inject a service into an Angular component?",
      "options": [
        "Using @Inject only",
        "Via the component's constructor",
        "Using @Service",
        "In the template"
      ],
      "correct": 1
    },
    {
      "q": "Which wildcard route path is used to define a 404/undefined route in Angular?",
      "options": [
        "**",
        "/",
        "##",
        "default"
      ],
      "correct": 0
    },
    {
      "q": "Which routing guard checks whether routing can take place at all?",
      "options": [
        "CanActivate",
        "Resolve",
        "CanLoad",
        "CanDeactivate"
      ],
      "correct": 0
    },
    {
      "q": "Can an Angular application have more than one <router-outlet> element?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which type of pipe does Angular execute on every change-detection cycle?",
      "options": [
        "Pure Pipe",
        "Impure Pipe"
      ],
      "correct": 1
    },
    {
      "q": "If component data changes frequently, which pipe type should you use so the view updates correctly?",
      "options": [
        "Pure Pipe",
        "Impure Pipe"
      ],
      "correct": 1
    },
    {
      "q": "Which compilation option produces a smaller, faster-performing distributed Angular package?",
      "options": [
        "JIT (Just-in-Time)",
        "AOT (Ahead-of-Time)"
      ],
      "correct": 1
    },
    {
      "q": "Does applying a pipe change the underlying value of the component's member variable?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Which Angular decorator marks a class as available for dependency injection?",
      "options": [
        "@Injectable",
        "@Inject",
        "@Service",
        "@Component"
      ],
      "correct": 0
    },
    {
      "q": "Which RxJS operator waits for all observables to complete and returns their last emitted values?",
      "options": [
        "mergeMap",
        "merge",
        "forkJoin",
        "combineLatest"
      ],
      "correct": 2
    },
    {
      "q": "Which RxJS operator maps each value to an observable and merges the results?",
      "options": [
        "forkJoin",
        "mergeMap",
        "merge",
        "switchMap"
      ],
      "correct": 1
    },
    {
      "q": "Which RxJS operator combines multiple observables into a single observable stream?",
      "options": [
        "forkJoin",
        "mergeMap",
        "merge",
        "zip"
      ],
      "correct": 2
    },
    {
      "q": "Which decorator lets a component listen to events on the host element (or a target like window/document)?",
      "options": [
        "@HostListener",
        "@TargetListener",
        "@Listen",
        "@EventBinding"
      ],
      "correct": 0
    }
  ],
  "typescript": [
    {
      "q": "What is the primary purpose of TypeScript over plain JavaScript?",
      "options": [
        "TypeScript runs faster than JavaScript at runtime",
        "TypeScript adds static type checking, enabling errors to be caught at compile time rather than runtime",
        "TypeScript replaces JavaScript entirely in modern browsers",
        "TypeScript is required for Node.js applications"
      ],
      "correct": 1
    },
    {
      "q": "What does the TypeScript compiler (tsc) produce as output?",
      "options": [
        "Bytecode that runs directly in the browser",
        "A binary executable",
        "Plain JavaScript files",
        "A TypeScript declaration file (.d.ts) only"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between 'interface' and 'type' in TypeScript?",
      "options": [
        "They are completely identical and interchangeable in all cases",
        "Interfaces can be extended and merged (declaration merging); type aliases are more flexible and can represent unions, intersections, and primitives",
        "Type aliases can only represent primitive types",
        "Interfaces are used at runtime; type aliases are erased before compilation"
      ],
      "correct": 1
    },
    {
      "q": "What will TypeScript infer as the type of 'result' in the following code?\n\nconst result = [1, 2, 3].map(x => x.toString());",
      "options": [
        "number[]",
        "any[]",
        "string[]",
        "Array<number | string>"
      ],
      "correct": 2
    },
    {
      "q": "What is a 'union type' in TypeScript?",
      "options": [
        "A type that combines two interfaces into one",
        "A type that allows a value to be one of several specified types",
        "A type used exclusively with class inheritance",
        "A type that enforces all properties to be optional"
      ],
      "correct": 1
    },
    {
      "q": "What does the following TypeScript code do?\n\nfunction padLeft(value: string, padding: string | number): string {\n  if (typeof padding === 'number') {\n    return ' '.repeat(padding) + value;\n  }\n  return padding + value;\n}",
      "options": [
        "It causes a compile error because union types cannot be used in if statements",
        "It uses a type guard (typeof) to narrow the type of 'padding' within each branch",
        "It converts 'padding' to a string in both branches",
        "It is invalid TypeScript because the return type is ambiguous"
      ],
      "correct": 1
    },
    {
      "q": "What is the 'any' type in TypeScript and why should it generally be avoided?",
      "options": [
        "'any' means the variable must accept all primitive types only",
        "'any' opts out of type checking entirely, removing all compile-time safety and defeating the purpose of TypeScript",
        "'any' is the default type for all variables in TypeScript",
        "'any' slows down compilation significantly"
      ],
      "correct": 1
    },
    {
      "q": "What is the 'unknown' type in TypeScript, and how does it differ from 'any'?",
      "options": [
        "They are identical; 'unknown' is just a newer alias for 'any'",
        "'unknown' is a type-safe counterpart to 'any'; you cannot perform operations on an 'unknown' value without first narrowing its type",
        "'unknown' can only be used as a function return type",
        "'unknown' automatically converts to 'string' when used in expressions"
      ],
      "correct": 1
    },
    {
      "q": "What is the output type inferred by TypeScript for this function?\n\nfunction throwError(message: string): never {\n  throw new Error(message);\n}",
      "options": [
        "void",
        "undefined",
        "never",
        "any"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between 'void' and 'never' return types in TypeScript?",
      "options": [
        "They are the same; both mean the function returns nothing",
        "'void' means the function returns no useful value (may return undefined); 'never' means the function never returns at all (throws or runs forever)",
        "'never' means the function returns null; 'void' means it returns undefined",
        "'never' is used for async functions; 'void' for synchronous ones"
      ],
      "correct": 1
    },
    {
      "q": "What does the '?' symbol mean when used in a TypeScript interface property, as in: name?: string?",
      "options": [
        "The property must be either a string or undefined, but is required",
        "The property is optional and may be absent from the object",
        "The property is nullable (string | null)",
        "The property is read-only"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'readonly' modifier do in a TypeScript interface or class?",
      "options": [
        "Makes the property accessible only from within the class",
        "Prevents the property from being modified after it is initially set",
        "Makes the property enumerable in for...in loops",
        "Marks the property as deprecated"
      ],
      "correct": 1
    },
    {
      "q": "What will the following TypeScript code produce?\n\ninterface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }\n\nconst myDog: Dog = { name: 'Rex', breed: 'Labrador' };\nconsole.log(myDog.name);",
      "options": [
        "Compile error: Dog cannot extend Animal",
        "Rex",
        "undefined",
        "Labrador"
      ],
      "correct": 1
    },
    {
      "q": "What is a TypeScript 'generic' and what problem does it solve?",
      "options": [
        "A generic is a class that can only be instantiated once",
        "A generic allows you to write reusable, type-safe code that works with any type without sacrificing type information",
        "A generic is TypeScript's version of JavaScript's 'any' type",
        "A generic auto-infers types from function arguments only"
      ],
      "correct": 1
    },
    {
      "q": "What is the type of 'output' in the following code?\n\nfunction identity<T>(arg: T): T {\n  return arg;\n}\nconst output = identity('hello');",
      "options": [
        "any",
        "T",
        "string",
        "unknown"
      ],
      "correct": 2
    },
    {
      "q": "What does the following TypeScript generic constraint do?\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }",
      "options": [
        "It restricts T to only plain objects",
        "It ensures K must be a valid key of T, making the key lookup type-safe",
        "It causes a compile error because generics cannot use 'extends'",
        "It creates a new type that combines T and K"
      ],
      "correct": 1
    },
    {
      "q": "What is a TypeScript 'enum' and what does the following code output at runtime?\n\nenum Direction { Up = 1, Down, Left, Right }\nconsole.log(Direction.Left);",
      "options": [
        "2",
        "3",
        "'Left'",
        "undefined"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a 'const enum' and a regular 'enum' in TypeScript?",
      "options": [
        "const enums support string values; regular enums only support numbers",
        "const enums are inlined at compile time (no runtime object is generated); regular enums produce a JavaScript object at runtime",
        "const enums cannot be used in switch statements",
        "They are identical; 'const' is just a style convention"
      ],
      "correct": 1
    },
    {
      "q": "What is an 'intersection type' in TypeScript and how is it written?",
      "options": [
        "A type that can be either type A or type B, written as A | B",
        "A type that combines multiple types into one, requiring all properties from each, written as A & B",
        "A type shared between two interfaces, written as A && B",
        "A type that removes overlapping properties between A and B"
      ],
      "correct": 1
    },
    {
      "q": "What does the TypeScript 'as' keyword do in this code?\n\nconst input = document.getElementById('name') as HTMLInputElement;",
      "options": [
        "It casts the element to HTMLInputElement at runtime, changing its type",
        "It is a type assertion that tells TypeScript to treat the value as HTMLInputElement at compile time, with no runtime effect",
        "It throws an error if the element is not an HTMLInputElement",
        "It converts the element to a different type"
      ],
      "correct": 1
    },
    {
      "q": "What is a 'discriminated union' (tagged union) in TypeScript?",
      "options": [
        "A union where TypeScript automatically removes invalid types",
        "A pattern where each union member has a common literal type property (discriminant) used for type narrowing in switch/if statements",
        "A union type that only allows primitive types",
        "A union that is resolved at compile time and removed from output"
      ],
      "correct": 1
    },
    {
      "q": "What does the following TypeScript code demonstrate?\n\ntype Shape =\n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; side: number };\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle': return Math.PI * shape.radius ** 2;\n    case 'square': return shape.side ** 2;\n  }\n}",
      "options": [
        "A generic function with constrained types",
        "A discriminated union with exhaustive type narrowing via a switch statement",
        "An interface with two optional properties",
        "A type alias that requires both circle and square properties"
      ],
      "correct": 1
    },
    {
      "q": "What is the TypeScript 'Partial<T>' utility type?",
      "options": [
        "A type that makes all properties of T required",
        "A type that makes all properties of T optional",
        "A type that picks only the first half of T's properties",
        "A type that makes all properties of T readonly"
      ],
      "correct": 1
    },
    {
      "q": "What does 'Required<T>' do, and how does it relate to 'Partial<T>'?",
      "options": [
        "Required<T> is identical to Partial<T>",
        "Required<T> makes all optional properties of T mandatory; it is the inverse of Partial<T>",
        "Required<T> adds new required properties to T",
        "Required<T> removes all optional properties from T entirely"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'Pick<T, K>' utility type do?",
      "options": [
        "Removes the properties K from type T",
        "Creates a new type by selecting only the specified properties K from type T",
        "Picks the first K properties alphabetically from T",
        "Makes only properties K optional in T"
      ],
      "correct": 1
    },
    {
      "q": "What is the result of the following TypeScript type?\n\ntype UserPreview = Pick<{ id: number; name: string; email: string; age: number }, 'id' | 'name'>;",
      "options": [
        "{ id: number; name: string; email: string; age: number }",
        "{ id: number; name: string }",
        "{ email: string; age: number }",
        "Compile error: Pick requires all keys"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'Omit<T, K>' utility type do?",
      "options": [
        "Creates a type with only the properties K from T",
        "Creates a type with all properties of T except those specified in K",
        "Makes properties K required in T",
        "Omit is not a valid TypeScript utility type"
      ],
      "correct": 1
    },
    {
      "q": "What is the 'Record<K, V>' utility type used for?",
      "options": [
        "To record all type errors at compile time",
        "To create a type with keys of type K and values of type V",
        "To merge two records together",
        "To create a read-only dictionary"
      ],
      "correct": 1
    },
    {
      "q": "What is a 'type guard' in TypeScript and what is an example of one?",
      "options": [
        "A special syntax to bypass type checking in specific blocks",
        "A runtime check that narrows the type within a conditional block, e.g. typeof x === 'string' or x instanceof Date",
        "A compiler option to enforce stricter type rules",
        "A function decorator that validates types at runtime"
      ],
      "correct": 1
    },
    {
      "q": "What does a user-defined type guard function with the return type 'arg is Type' do?\n\nfunction isString(arg: unknown): arg is string {\n  return typeof arg === 'string';\n}",
      "options": [
        "It throws an error if arg is not a string",
        "It narrows the type of arg to string in any code block where the function returns true",
        "It converts arg to a string if it is not already",
        "It is a compile-time-only assertion with no runtime behavior"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of 'declaration files' (.d.ts) in TypeScript?",
      "options": [
        "To declare variables globally across all TypeScript files",
        "To provide type information for JavaScript libraries that don't have TypeScript source, enabling type checking when using them",
        "To declare all enums and interfaces in one place",
        "To replace tsconfig.json for configuration"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of the 'tsconfig.json' file in a TypeScript project?",
      "options": [
        "To define npm scripts for the project",
        "To configure the TypeScript compiler options such as target ECMAScript version, module system, strictness, and output directory",
        "To list all TypeScript files manually for compilation",
        "To store type declarations for third-party libraries"
      ],
      "correct": 1
    },
    {
      "q": "What does enabling 'strict: true' in tsconfig.json do?",
      "options": [
        "It enables only the 'noImplicitAny' check",
        "It activates a set of strict type-checking options including noImplicitAny, strictNullChecks, strictFunctionTypes, and others",
        "It prevents any JavaScript files from being included in the project",
        "It makes all TypeScript errors into warnings instead"
      ],
      "correct": 1
    },
    {
      "q": "What does 'strictNullChecks' enforce in TypeScript?",
      "options": [
        "That null and undefined are not allowed anywhere in the code",
        "That null and undefined are not assignable to other types unless explicitly included in the type, preventing null reference errors",
        "That all functions must explicitly return null",
        "That all variables must be initialized with a non-null value"
      ],
      "correct": 1
    },
    {
      "q": "What is the non-null assertion operator (!) in TypeScript and when should it be used with caution?\n\nconst el = document.getElementById('app')!;",
      "options": [
        "It converts the value to a boolean",
        "It tells TypeScript the value is definitely not null or undefined, bypassing null checks — it should be used sparingly since it removes safety guarantees",
        "It throws a runtime error if the value is null",
        "It is shorthand for the nullish coalescing operator"
      ],
      "correct": 1
    },
    {
      "q": "What is a 'mapped type' in TypeScript? What does the following produce?\n\ntype Readonly<T> = { readonly [K in keyof T]: T[K] };",
      "options": [
        "It maps over an array of type T at runtime",
        "It creates a new type where every property of T is made readonly by iterating over T's keys",
        "It creates a read-only array from T",
        "It converts all T's values to string"
      ],
      "correct": 1
    },
    {
      "q": "What is a 'conditional type' in TypeScript?\n\ntype IsString<T> = T extends string ? 'yes' : 'no';",
      "options": [
        "A type that changes based on runtime conditions",
        "A type that evaluates at compile time based on a condition, resolving to one type or another depending on whether T satisfies the constraint",
        "A type that is optional if a condition is false",
        "An if-else statement inside a type alias"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'infer' keyword do inside a conditional type?",
      "options": [
        "It tells TypeScript to infer the generic parameter from usage",
        "It allows TypeScript to extract and capture a type within a conditional type expression",
        "It forces TypeScript to infer the return type of a function",
        "It is used to declare a type variable in a regular type alias"
      ],
      "correct": 1
    },
    {
      "q": "What is the 'ReturnType<T>' utility type?\n\nfunction greet(name: string): string { return `Hello ${name}`; }\ntype R = ReturnType<typeof greet>;",
      "options": [
        "R is string",
        "R is (name: string) => string",
        "R is any",
        "R is void"
      ],
      "correct": 0
    },
    {
      "q": "What are TypeScript decorators and where are they commonly used?",
      "options": [
        "Decorators are a CSS-in-JS feature for TypeScript components",
        "Decorators are special syntax (@expression) that can be applied to classes, methods, properties, or parameters to add metadata or modify behavior — commonly used in frameworks like Angular and NestJS",
        "Decorators are TypeScript's version of Python's list comprehensions",
        "Decorators are compile-time macros that expand to multiple lines of code"
      ],
      "correct": 1
    },
    {
      "q": "What does TypeScript's 'access modifiers' (public, private, protected) do in a class?",
      "options": [
        "They control network access permissions for class methods",
        "They control the visibility of class members: public is accessible anywhere, private only within the class, protected within the class and subclasses",
        "They only affect TypeScript compilation and are enforced at runtime in JavaScript",
        "They are optional hints with no compile-time enforcement"
      ],
      "correct": 1
    },
    {
      "q": "What is the TypeScript 'abstract' class and what distinguishes it from a regular class?",
      "options": [
        "An abstract class can be instantiated directly; a regular class cannot",
        "An abstract class cannot be instantiated directly and may contain abstract methods that must be implemented by derived classes",
        "An abstract class is a class with all optional properties",
        "Abstract classes are the same as interfaces"
      ],
      "correct": 1
    },
    {
      "q": "What does the following TypeScript code demonstrate and will it compile?\n\nclass Animal {\n  constructor(private name: string) {}\n  speak(): string { return `${this.name} makes a noise.`; }\n}\nconst a = new Animal('Dog');\nconsole.log(a.name);",
      "options": [
        "It compiles and outputs 'Dog'",
        "It causes a compile error because 'name' is private and cannot be accessed outside the class",
        "It outputs undefined because private fields are deleted at runtime",
        "It compiles but throws a runtime error"
      ],
      "correct": 1
    },
    {
      "q": "What is 'declaration merging' in TypeScript and which construct supports it?",
      "options": [
        "Combining two .ts files into one during compilation",
        "The ability to define the same interface multiple times and have TypeScript merge them into a single definition — supported by interfaces, not type aliases",
        "Merging two type aliases together using the & operator",
        "Overloading a function with different signatures"
      ],
      "correct": 1
    },
    {
      "q": "What does the following code output and why?\n\ntype Flatten<T> = T extends Array<infer Item> ? Item : T;\ntype Str = Flatten<string[]>;\ntype Num = Flatten<number>;",
      "options": [
        "Str is string[], Num is never",
        "Str is string, Num is number",
        "Str is any, Num is any",
        "Compile error: infer cannot be used with built-in types"
      ],
      "correct": 1
    },
    {
      "q": "What is the 'keyof' operator in TypeScript?",
      "options": [
        "A function that returns all keys of an object at runtime",
        "A type operator that produces a union of the string literal types of an object type's keys",
        "A method on the Object prototype available in TypeScript",
        "A way to define allowed keys for a Record type"
      ],
      "correct": 1
    },
    {
      "q": "What type does 'keyof { name: string; age: number }' produce?",
      "options": [
        "string",
        "string | number",
        "'name' | 'age'",
        "{ name: string; age: number }"
      ],
      "correct": 2
    },
    {
      "q": "What is 'module augmentation' in TypeScript?",
      "options": [
        "Adding new files to an existing npm package",
        "Extending an existing module's types from outside, commonly used to add properties to third-party library types (e.g. adding fields to Express's Request interface)",
        "Augmenting a class with new methods using decorators",
        "Merging two npm packages at compile time"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'satisfies' operator (introduced in TypeScript 4.9) do?\n\nconst palette = {\n  red: [255, 0, 0],\n  green: '#00ff00',\n} satisfies Record<string, string | number[]>;",
      "options": [
        "It casts 'palette' to Record<string, string | number[]>, losing specific property types",
        "It validates that 'palette' conforms to the type while preserving the more specific inferred types of each property",
        "It is identical to using 'as' for type assertions",
        "It throws a runtime error if palette does not match the type"
      ],
      "correct": 1
    },
    {
      "q": "What is the TypeScript 'Exclude<T, U>' utility type?\n\ntype T = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;",
      "options": [
        "T is 'a' | 'b'",
        "T is 'a' | 'b' | 'c'",
        "T is 'c'",
        "T is never"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is not a type keyword in TypeScript?",
      "options": [
        "float",
        "bool",
        "all are valid types in TypeScript",
        "number",
        "string"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Interfaces defined in TypeScript are included in the JavaScript that is generated?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "How do you extend an interface in TypeScript?",
      "options": [
        "interface ITruckOptions extends IAutoOptions",
        "interface ITruckOptions => IAutoOptions",
        "interface ITruckOptions : IAutoOptions",
        "interface ITruckOptions implements IAutoOptions"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Benefits offered by TypeScript include:",
      "options": [
        "Code encapsulation",
        "All of these",
        "More maintainable code",
        "Strongly-typed code"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "How do you automatically generate fields in a TypeScript class?",
      "options": [
        "Add the public keyword to a constructor parameter",
        "None of these",
        "Use the auto keyword",
        "TypeScript doesn't support automatically generated fields"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Which TypeScript function will accept 2 parameters that must be numbers and return their product?\nvar func = (x: number, y: number) => x * y;\nvar func = (x, y) => x * y;",
      "options": [
        "None of these",
        "var func = function(x, y) => x * y;",
        "All of these"
      ],
      "correct": 0
    },
    {
      "q": "Which statement will allow your code to reference an internal module in a file named shapes.ts using TypeScript?",
      "options": [
        "/// <reference=\"shapes.ts\" />",
        "/// <reference path=\"shapes.ts\" />",
        "import \"shapes\"",
        "/// shapes.ts"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Which TypeScript statement will import an external module in a file named viewmodels.ts that is in the same folder as your code?",
      "options": [
        "import vm = module(viewmodels);",
        "import vm = module('../viewmodels');",
        "import module('viewmodels');",
        "import vm = module('viewmodels');"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which TypeScript compiler parameter will emit JavaScript that is AMD compliant?",
      "options": [
        "--AMD",
        "--module AMD",
        "Neither of these"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What value will be output at the end of the following code block?\nenum Color { Red = 5, Green = 10, Blue = 15 };\nconsole.log(Color.Green);",
      "options": [
        "2",
        "Color.Green",
        "1",
        "Green",
        "10"
      ],
      "correct": 4
    },
    {
      "q": "What term describes the concept of treating an object as if it were a particular type, even if it weren't declared as that type?",
      "options": [
        "Extension Typing",
        "Duck Typing",
        "Interface Typing",
        "Generic Typing",
        "Ruby Typing"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What access modifier limits the accessiblity of a class member to its own class and subclasses?",
      "options": [
        "export",
        "internal",
        "protected",
        "private",
        "sensitive"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "What is the primary difference between a generic class and a non-generic class?",
      "options": [
        "Generic classes do not accept constructor parameters.",
        "Generic classes are always declared abstract.",
        "Generic class may not implement interfaces.",
        "Generic classes accept a type parameter.",
        "Generic classes must inherit from a base class."
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which TypeScript compiler options lets you specify the location of the tsconfig.json file to be used for the compilation?",
      "options": [
        "--project",
        "--json",
        "--outDir",
        "--input",
        "--source"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Which of the following symbols is used to denote that a function parameter is a rest parameter?",
      "options": [
        "<>",
        ">>>",
        "!!",
        "...",
        "||"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which of the following will correctly import the items exported by this export statement?",
      "options": [
        "export { GetUser as GetLibraryUser, GetBook as GetLibraryBook };",
        "import TypeScript from './library';",
        "import namespace from './library';",
        "import { GetLibraryUser, GetLibraryBook } from './library';",
        "import { GetUser, GetBook } from './library';",
        "import all from './library';"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Internal Modules are known as namespaces in Typescript.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "function fun1(...params) {\nconsole.log(params.length);\n}\nfun1();\nfun1(5);\nfun1(5, 6, 7);",
      "options": [
        "Which concept resemble the above program",
        "String Interpolation",
        "Tagged Templates",
        "Spread Operator/Rest Parameters",
        "Object Destructuring"
      ],
      "correct": 2
    },
    {
      "q": "Which are the different Data Types supported by Typescript?",
      "options": [
        "Boolean var bValue: boolean = false",
        "Number var age: number = 16",
        "String var name: string = \"jon\"",
        "All of the above mentioned"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "What are the variable scopes available in TypeScript?",
      "options": [
        "Global Scope",
        "Class Scope",
        "Local Scope",
        "All of the above"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "For a variable,Without Specifying any datatype is",
      "options": [
        "InferredTyping",
        "TypeOperator",
        "TypeAssertion"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Which of the following is valid command to compile typescript file?",
      "options": [
        "ts abc.ts",
        "t abc.ts",
        "tsc abc.ts",
        "tst abc.ts"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Typescript is",
      "options": [
        "Language",
        "set of tools",
        "Both",
        "None"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Select user defined datatypes in typescript",
      "options": [
        "arrays",
        "String",
        "Boolean",
        "Void"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": ") Typescript uses which datatype?",
      "options": [
        "boolean",
        "string",
        "Number",
        "void",
        "All the above"
      ],
      "correct": 4,
      "note": null
    },
    {
      "q": ") How to declear variable in Typescript?",
      "options": [
        "Var",
        "Let",
        "Both"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": ") Default access modifier typescript?",
      "options": [
        "public",
        "private",
        "protected"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": ")How to implements inheritence in typescript?",
      "options": [
        "implements",
        "extends"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": ") Typescript is co...........",
      "options": [
        "It supports overloading",
        "partial",
        "No"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "TypeScript: What is the purpose of interface in TypeScript?",
      "options": [
        "Define class behavior",
        "Specify object structure",
        "Create modules",
        "Handle exceptions"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "TypeScript: What is the type of let x: any;?",
      "options": [
        "number",
        "string",
        "any",
        "void"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "TypeScript: What does this code do? function greet(name: string): string { return `Hello, ${name}`; }",
      "options": [
        "Throws a type error",
        "Returns a string",
        "Returns void",
        "Returns any"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "TypeScript: Which keyword extends a class?",
      "options": [
        "implements",
        "extends",
        "super",
        "interface"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "TypeScript: How do you define an optional property?",
      "options": [
        "name: string?",
        "name?: string",
        "name: string | null",
        "name: string = null"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which features does TypeScript support natively?",
      "options": [
        "Support for standard JavaScript code",
        "Classes and modules",
        "Static typing, interfaces, constructors",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which statement will allow your code to reference an internal module in a file named shapes.ts?",
      "options": [
        "/// <reference=\"shapes.ts\" />",
        "/// <reference path=\"shapes.ts\" />",
        "import \"shapes\"",
        "/// shapes.ts"
      ],
      "correct": 1
    },
    {
      "q": "Which TypeScript statement will import an external module in a file named viewmodels.ts in the same folder?",
      "options": [
        "import vm = module(viewmodels);",
        "import vm = module('../viewmodels');",
        "import module('viewmodels');",
        "import vm = module('viewmodels');"
      ],
      "correct": 3
    },
    {
      "q": "What keyword is used to apply all of the properties on one interface to another interface?",
      "options": [
        "implements",
        "extends",
        "class",
        "furthers",
        "references"
      ],
      "correct": 1
    },
    {
      "q": "enum Color { Red = 5, Green = 10, Blue = 15 }; What value will be output by console.log(Color.Green)?",
      "options": [
        "2",
        "Color.Green",
        "1",
        "Green",
        "10"
      ],
      "correct": 4
    },
    {
      "q": "Which of the following best defines a \"class\"?",
      "options": [
        "Objects with no implementation details",
        "Object with no properties or methods",
        "JSON objects with methods",
        "Collection of private, reusable functions",
        "Template for creating objects"
      ],
      "correct": 4
    },
    {
      "q": "What term describes treating an object as if it were a particular type, even if it wasn't declared as that type?",
      "options": [
        "Extension Typing",
        "Duck Typing",
        "Interface Typing",
        "Generic Typing",
        "Ruby Typing"
      ],
      "correct": 1
    },
    {
      "q": "What access modifier limits the accessibility of a class member to its own class and subclasses?",
      "options": [
        "export",
        "internal",
        "protected",
        "private",
        "sensitive"
      ],
      "correct": 2
    },
    {
      "q": "Which TypeScript compiler option lets you specify the location of the tsconfig.json file to be used for compilation?",
      "options": [
        "--project",
        "--json",
        "--outDir",
        "--input",
        "--source"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following symbols denotes that a function parameter is a rest parameter?",
      "options": [
        "<>",
        ">>>",
        "!!",
        "...",
        "||"
      ],
      "correct": 3
    },
    {
      "q": "export { GetUser as GetLibraryUser, GetBook as GetLibraryBook }; Which will correctly import these?",
      "options": [
        "import TypeScript from './library';",
        "import namespace from './library';",
        "import { GetLibraryUser, GetLibraryBook } from './library';",
        "import { GetUser, GetBook } from './library';",
        "import all from './library';"
      ],
      "correct": 2
    },
    {
      "q": "In TypeScript, it calls JavaScript internally and then performs validations.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "To change the datatype from one type to another, we require",
      "options": [
        "TypeOperator",
        "TypeAssertion",
        "InferredTyping"
      ],
      "correct": 1
    },
    {
      "q": "For a variable, without specifying any data type, is",
      "options": [
        "InferredTyping",
        "TypeOperator",
        "TypeAssertion"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is a valid command to compile a TypeScript file?",
      "options": [
        "ts abc.ts",
        "t abc.ts",
        "tsc abc.ts",
        "tst abc.ts"
      ],
      "correct": 2
    },
    {
      "q": "What will be the output of: var a:string=47; console.log(\"Value of a=\"+a);",
      "options": [
        "Value of a=47",
        "Value of a=0",
        "Value of a=",
        "None of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following arrow functions are true?",
      "options": [
        "var reflect = value => value;",
        "var sum = (num1, num2) => num1 + num2;",
        "var getName = () => \"Nicholas\";",
        "var sum = (num1, num2) => { return num1 + num2; };",
        "All"
      ],
      "correct": 4
    },
    {
      "q": "function fun1(...params){ console.log(params.length); } fun1(); fun1(5); fun1(5,6,7); Which concept does this resemble?",
      "options": [
        "String Interpolation",
        "Tagged Templates",
        "Spread Operator/Rest Parameters",
        "Object Destructuring"
      ],
      "correct": 2
    },
    {
      "q": "Select user defined data types in TypeScript",
      "options": [
        "arrays",
        "String",
        "Boolean",
        "Void"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are true?",
      "options": [
        "We can use printf in TypeScript",
        "We can use console.log in TypeScript"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following are array methods?",
      "options": [
        "Unshift()",
        "Sort()",
        "Pop()",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "What are the components of TypeScript?",
      "options": [
        "TypeScript Language",
        "TypeScript Compiler",
        "TypeScript Language Service",
        "All of these"
      ],
      "correct": 3
    },
    {
      "q": "How to declare variables in TypeScript?",
      "options": [
        "Var",
        "Let",
        "Both"
      ],
      "correct": 2
    },
    {
      "q": "TypeScript uses which data type?",
      "options": [
        "String",
        "Number",
        "Boolean",
        "All above"
      ],
      "correct": 3
    },
    {
      "q": "Default access modifier in TypeScript?",
      "options": [
        "public",
        "private",
        "protected"
      ],
      "correct": 0
    },
    {
      "q": "What is async/await?",
      "options": [
        "New syntax to write JavaScript promises",
        "New syntax to consume JavaScript promises",
        "New syntax to consume asynchronous callbacks"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is an attribute CSS selector?",
      "options": [
        "[selector]",
        ".selector",
        "#selector"
      ],
      "correct": 0
    },
    {
      "q": "When is it recommended to pass this.setState a function instead of an object?",
      "options": [
        "When the new state should completely replace the old state.",
        "When the new state does not depend on the old state.",
        "When the new state depends on the old state."
      ],
      "correct": 2
    },
    {
      "q": "A promise represents what?",
      "options": [
        "A single value in the future",
        "Multiple values in the present",
        "Multiple values in the future",
        "A single value in the present"
      ],
      "correct": 0
    },
    {
      "q": "Can a component be styled with a global style sheet?",
      "options": [
        "Only function components can be styled",
        "Only if the component returns HTML elements",
        "Yes",
        "No"
      ],
      "correct": 2
    },
    {
      "q": "When binding to data in templates, how do you avoid issues with binding to properties of null or undefined objects?",
      "options": [
        "You don't need to worry, Angular handles it gracefully.",
        "Use the * operator on any object that could be null.",
        "Use the ? operator on any object that could be null.",
        "In the component, ensure the objects are never null."
      ],
      "correct": 2
    },
    {
      "q": "Where should you sort and filter data?",
      "options": [
        "In a directive",
        "In a pipe",
        "In your component",
        "In a filter"
      ],
      "correct": 2
    },
    {
      "q": "What's the right syntax to assign the function doSomething as the handler of a click event?",
      "options": [
        "onClick={doSomething}",
        "onClick={() => doSomething}",
        "onClick={doSomething()}"
      ],
      "correct": 0
    },
    {
      "q": "var person: string; TypeScript will alert an error if you enter which additional code?",
      "options": [
        "person = { name: 'Colleen', age: 25 };",
        "person = 0",
        "person = ['Colleen', 'John'];",
        "all of the above"
      ],
      "correct": 3
    },
    {
      "q": "When bootstrapping an Angular app, how do you specify the main, top-level app component to be used?",
      "options": [
        "Add the component as a package in your SystemJs config.",
        "Load the component directly in your index.html file.",
        "Add the component to the bootstrap array in your main app module.",
        "Load the component directly from your main SystemJs package."
      ],
      "correct": 2
    },
    {
      "q": "What is the format of the data returned by the JSON Server API?",
      "options": [
        "YAML",
        "XML",
        "JSON"
      ],
      "correct": 2
    },
    {
      "q": "What syntax do you use to render the App component into an HTML element with id \"root\"?",
      "options": [
        "ReactDOM.render(App, document.getElementById(\"root\"));",
        "React.render(App, document.getElementById(\"root\"));",
        "ReactDOM.mountNode(<App />, document.getElementById(\"root\"));",
        "ReactDOM.render(<App />, document.getElementById(\"root\"));"
      ],
      "correct": 3
    },
    {
      "q": "What function can be used to change the state of a React component?",
      "options": [
        "this.state = {}",
        "this.setState",
        "this.changeState"
      ],
      "correct": 1
    },
    {
      "q": "What can we do if components A and B are siblings and require access to the same state element?",
      "options": [
        "Restructure the application",
        "Place the state in either A or B",
        "Place the state in a third sibling component C",
        "Place the state in the parent component of A and B"
      ],
      "correct": 3
    },
    {
      "q": "What is the name of the file that manages TypeScript projects?",
      "options": [
        "tsproj.config",
        "tsmeta.json",
        "tsconfig.json",
        "package.json"
      ],
      "correct": 2
    },
    {
      "q": "When dealing with asynchronous functions, what type of generic must your return type be?",
      "options": [
        "Async",
        "Promise",
        "Array",
        "AsyncAwait"
      ],
      "correct": 1
    },
    {
      "q": "What tool installs type declaration files?",
      "options": [
        "Duck",
        "npm",
        "Ruby",
        "NuGet",
        "Async"
      ],
      "correct": 1
    },
    {
      "q": "What should appear to the left of the arrow in an arrow function?",
      "options": [
        "Function name",
        "Function parameters",
        "Curly braces",
        "Function return value",
        "Number of function parameters"
      ],
      "correct": 1
    },
    {
      "q": "What character separates a variable from its type annotation in a declaration?",
      "options": [
        "#",
        "$",
        "%",
        ":"
      ],
      "correct": 3
    },
    {
      "q": "How would you define a string type variable with the value bar in TypeScript?",
      "options": [
        "let string: foo = 'bar';",
        "let foo:string = 'bar';",
        "let string foo = 'bar';",
        "let foo (string) = 'bar';"
      ],
      "correct": 1
    },
    {
      "q": "What keyword requires a variable to be declared before it's used?",
      "options": [
        "let",
        "dim",
        "declare",
        "set"
      ],
      "correct": 0
    },
    {
      "q": "What keyword declares a class member in the class rather than an instance of the class?",
      "options": [
        "enum",
        "static",
        "intersection",
        "function",
        "async"
      ],
      "correct": 1
    },
    {
      "q": "Within which function scope would a variable declared using var cover?",
      "options": [
        "Within the entire function scope",
        "Within an if statement scope",
        "Within a for loop scope",
        "Within a while loop scope"
      ],
      "correct": 0
    },
    {
      "q": "What keyword lets you derive a subclass from a superclass?",
      "options": [
        "stretches",
        "extends",
        "sub",
        "follows",
        "buildsUpon"
      ],
      "correct": 1
    },
    {
      "q": "Which object-oriented terms are supported by TypeScript?",
      "options": [
        "Modules",
        "Classes",
        "Interfaces",
        "All of these"
      ],
      "correct": 3
    },
    {
      "q": "What access modifiers are supported by TypeScript?",
      "options": [
        "Public",
        "Private",
        "Protected",
        "All of these"
      ],
      "correct": 3
    },
    {
      "q": "What datatypes does TypeScript support?",
      "options": [
        "boolean",
        "string",
        "Number",
        "void",
        "All of the above"
      ],
      "correct": 4
    },
    {
      "q": "Does TypeScript support function overloading?",
      "options": [
        "Yes, TypeScript supports it",
        "No, TypeScript never allows it"
      ],
      "correct": 0
    },
    {
      "q": "What is the default access modifier in TypeScript?",
      "options": [
        "public",
        "private",
        "protected"
      ],
      "correct": 0
    },
    {
      "q": "How do you implement inheritance in TypeScript?",
      "options": [
        "implements",
        "extends"
      ],
      "correct": 1
    },
    {
      "q": "How do you declare a variable in TypeScript?",
      "options": [
        "var",
        "let",
        "both var and let"
      ],
      "correct": 2
    },
    {
      "q": "What does calling super() do in a TypeScript subclass?",
      "options": [
        "Calls the superclass's constructor",
        "Deletes the parent class",
        "Creates a new interface",
        "Nothing, it's unused"
      ],
      "correct": 0
    },
    {
      "q": "How do you automatically generate fields in a TypeScript class from constructor parameters?",
      "options": [
        "Add the public/private/readonly keyword to a constructor parameter",
        "None of these",
        "Use the auto keyword",
        "TypeScript doesn't support automatically generated fields"
      ],
      "correct": 0
    },
    {
      "q": "For a variable, without specifying any data type, TypeScript uses:",
      "options": [
        "InferredTyping",
        "TypeOperator",
        "TypeAssertion"
      ],
      "correct": 0
    },
    {
      "q": "What is the result of:\nvar a: string = 47;\nconsole.log(\"Value of a=\" + a);",
      "options": [
        "Value of a=47",
        "Value of a=0",
        "Value of a=",
        "None of the above — it's a compile-time error"
      ],
      "correct": 3
    },
    {
      "q": "In TypeScript, code is compiled — it internally becomes JavaScript, and type validations happen at compile time.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following arrow function forms are valid?",
      "options": [
        "var reflect = value => value;",
        "var sum = (num1, num2) => num1 + num2;",
        "var getName = () => \"Nicholas\";",
        "var sum = (num1, num2) => { return num1 + num2; };",
        "All of the above"
      ],
      "correct": 4
    },
    {
      "q": "TypeScript is a:",
      "options": [
        "Strongly typed language",
        "Object-oriented language",
        "Compiled language",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "TypeScript is:",
      "options": [
        "A language",
        "A set of tools",
        "Both a language and a set of tools",
        "None of these"
      ],
      "correct": 2
    },
    {
      "q": "Select user-defined / composite datatypes in TypeScript:",
      "options": [
        "Arrays",
        "String",
        "Boolean",
        "Void"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are true in TypeScript?",
      "options": [
        "We can use printf() in TypeScript",
        "We can use console.log() in TypeScript"
      ],
      "correct": 1
    },
    {
      "q": "Supertype of all datatypes in TypeScript:",
      "options": [
        "number",
        "Enum",
        "void",
        "any"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following are valid TypeScript statements?",
      "options": [
        "var a = new String(\"hii\");",
        "var b = new Array(1);",
        "var c: string = \"hii\";",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "List some features of TypeScript:",
      "options": [
        "Compiles to all major versions of JavaScript (ES3, ES5, ES6, ES7)",
        "Usable for cross-browser development and is open source",
        "A superset of JavaScript that adds static typing",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which TypeScript compiler option lets you specify the location of the tsconfig.json file to be used for the compilation?",
      "options": [
        "--project",
        "--json",
        "--outDir",
        "--input",
        "--source"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of an interface in TypeScript?",
      "options": [
        "Define class behavior only",
        "Specify an object's structure/shape",
        "Create modules",
        "Handle exceptions"
      ],
      "correct": 1
    },
    {
      "q": "What is the type of: let x: any;",
      "options": [
        "number",
        "string",
        "any",
        "void"
      ],
      "correct": 2
    },
    {
      "q": "What does this do? function greet(name: string): string { return `Hello, ${name}`; }",
      "options": [
        "Throws a type error",
        "Returns a string",
        "Returns void",
        "Returns any"
      ],
      "correct": 1
    },
    {
      "q": "Which keyword is used to extend a class in TypeScript?",
      "options": [
        "implements",
        "extends",
        "super",
        "interface"
      ],
      "correct": 1
    },
    {
      "q": "How do you define an optional property in a TypeScript interface?",
      "options": [
        "name: string?",
        "name?: string",
        "name: string | null",
        "name: string = null"
      ],
      "correct": 1
    }
  ],
  "react": [
    {
      "q": "What command is used to create a new React application using Create React App?",
      "options": [
        "npm init react-app my-app",
        "npx create-react-app my-app",
        "npm install react my-app",
        "react new my-app"
      ],
      "correct": 1
    },
    {
      "q": "What is the entry point file rendered into the DOM in a default Create React App setup?",
      "options": [
        "App.js",
        "index.html",
        "index.js",
        "main.js"
      ],
      "correct": 2
    },
    {
      "q": "Which method mounts the React application to the DOM in React 18?",
      "options": [
        "ReactDOM.render()",
        "ReactDOM.mount()",
        "ReactDOM.createRoot().render()",
        "React.createElement()"
      ],
      "correct": 2
    },
    {
      "q": "What does the 'export default' statement do in a JavaScript module?",
      "options": [
        "Exports multiple named values",
        "Makes a single value the default export of the module",
        "Declares a global variable",
        "Imports a default module"
      ],
      "correct": 1
    },
    {
      "q": "Which ES6 feature allows you to extract values from arrays or objects into variables?",
      "options": [
        "Spread operator",
        "Destructuring",
        "Template literals",
        "Arrow functions"
      ],
      "correct": 1
    },
    {
      "q": "What does the spread operator (...) do when used with an array?",
      "options": [
        "Merges two objects",
        "Creates a deep copy of an object",
        "Expands the elements of the array",
        "Converts array to string"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of: const double = x => x * 2; console.log(double(5));",
      "options": [
        "25",
        "10",
        "undefined",
        "NaN"
      ],
      "correct": 1
    },
    {
      "q": "Which ES6 method creates a new array with the results of calling a function on every element?",
      "options": [
        "filter()",
        "reduce()",
        "map()",
        "forEach()"
      ],
      "correct": 2
    },
    {
      "q": "What is JSX in React?",
      "options": [
        "A JavaScript runtime environment",
        "A syntax extension that allows writing HTML-like code in JavaScript",
        "A CSS preprocessor for React",
        "A state management library"
      ],
      "correct": 1
    },
    {
      "q": "What must every React component's render/return output have?",
      "options": [
        "Multiple root elements",
        "A single root element or Fragment",
        "A class declaration",
        "A constructor method"
      ],
      "correct": 1
    },
    {
      "q": "How do you pass a dynamic value into JSX?",
      "options": [
        "Using double quotes {{ value }}",
        "Using curly braces { value }",
        "Using square brackets [ value ]",
        "Using the @ symbol @value"
      ],
      "correct": 1
    },
    {
      "q": "What are props in React?",
      "options": [
        "Internal state of a component",
        "Inputs passed from parent to child components",
        "CSS properties applied to components",
        "Lifecycle methods"
      ],
      "correct": 1
    },
    {
      "q": "Which hook is used to manage local state in a functional component?",
      "options": [
        "useEffect",
        "useContext",
        "useState",
        "useReducer"
      ],
      "correct": 2
    },
    {
      "q": "What does useState return?",
      "options": [
        "Only the current state value",
        "The state value and a function to update it",
        "A reference to the DOM element",
        "A promise that resolves with the state"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct way to handle a click event in JSX?",
      "options": [
        "<button onclick={handleClick}>",
        "<button onClick={handleClick()}>",
        "<button onClick={handleClick}>",
        "<button on-click={handleClick}>"
      ],
      "correct": 2
    },
    {
      "q": "Which method is used to render a list of items in React?",
      "options": [
        "forEach()",
        "filter()",
        "map()",
        "reduce()"
      ],
      "correct": 2
    },
    {
      "q": "Why is the 'key' prop important when rendering lists in React?",
      "options": [
        "It applies CSS styles to each element",
        "It helps React identify which items have changed, been added, or removed",
        "It triggers a re-render of the entire list",
        "It is used to access the element via refs"
      ],
      "correct": 1
    },
    {
      "q": "What is wrong with using array index as a key in a dynamic list?",
      "options": [
        "Index keys are too long",
        "It can cause rendering bugs when the list order changes",
        "React does not support index as key",
        "It prevents the component from re-rendering"
      ],
      "correct": 1
    },
    {
      "q": "How do you conditionally render a component in React using the ternary operator?",
      "options": [
        "{ if(condition) <Component /> }",
        "{ condition ? <Component /> : null }",
        "{ condition && <Component /> || null }",
        "{ condition => <Component /> }"
      ],
      "correct": 1
    },
    {
      "q": "What does the && operator do in JSX conditional rendering?",
      "options": [
        "Renders both sides of the expression",
        "Renders the right side only if the left side is truthy",
        "Always renders null",
        "Creates a logical OR condition"
      ],
      "correct": 1
    },
    {
      "q": "How do you apply inline styles in React JSX?",
      "options": [
        "style=\"color: red\"",
        "style={{ color: 'red' }}",
        "style={color: 'red'}",
        "css={{ color: 'red' }}"
      ],
      "correct": 1
    },
    {
      "q": "Which library allows you to write scoped CSS styles that are unique to each component?",
      "options": [
        "Styled JSX",
        "CSS Modules",
        "Bootstrap",
        "Sass"
      ],
      "correct": 1
    },
    {
      "q": "How do you dynamically add a CSS class in React?",
      "options": [
        "class={isActive ? 'active' : ''}",
        "className={isActive ? 'active' : ''}",
        "style={isActive ? 'active' : ''}",
        "classList={isActive ? 'active' : ''}"
      ],
      "correct": 1
    },
    {
      "q": "What is the primary tool used to debug React component trees?",
      "options": [
        "Chrome DevTools Console",
        "React Developer Tools browser extension",
        "Redux DevTools",
        "Node.js Debugger"
      ],
      "correct": 1
    },
    {
      "q": "What does an Error Boundary in React do?",
      "options": [
        "Catches errors in asynchronous code",
        "Catches JavaScript errors in child components and displays a fallback UI",
        "Prevents all runtime errors in the application",
        "Handles network request failures"
      ],
      "correct": 1
    },
    {
      "q": "Which lifecycle method is used to implement an Error Boundary?",
      "options": [
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "shouldComponentUpdate"
      ],
      "correct": 2
    },
    {
      "q": "What is the Virtual DOM in React?",
      "options": [
        "A direct reference to the real browser DOM",
        "A lightweight in-memory representation of the real DOM",
        "A separate DOM used for server-side rendering",
        "A DOM that only updates on user events"
      ],
      "correct": 1
    },
    {
      "q": "What is reconciliation in React?",
      "options": [
        "The process of syncing state between parent and child",
        "The algorithm React uses to diff the virtual DOM and update the real DOM efficiently",
        "The method to merge two components",
        "The process of hydrating server-rendered HTML"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of React.memo()?",
      "options": [
        "It memoizes the result of an expensive calculation",
        "It prevents a functional component from re-rendering if its props have not changed",
        "It caches API responses",
        "It saves component state between renders"
      ],
      "correct": 1
    },
    {
      "q": "Which hook is the functional component equivalent of componentDidMount and componentDidUpdate?",
      "options": [
        "useState",
        "useCallback",
        "useEffect",
        "useLayoutEffect"
      ],
      "correct": 2
    },
    {
      "q": "What does the dependency array in useEffect control?",
      "options": [
        "The initial state of the component",
        "When the effect runs — it re-runs only when listed dependencies change",
        "The order of CSS class application",
        "The number of times a component can re-render"
      ],
      "correct": 1
    },
    {
      "q": "What does returning a function inside useEffect do?",
      "options": [
        "It runs the function before the effect executes",
        "It acts as a cleanup function, run when the component unmounts or before the next effect",
        "It provides the initial state value",
        "It replaces the componentDidUpdate lifecycle"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the useRef hook?",
      "options": [
        "To share state between sibling components",
        "To persist a mutable value across renders without triggering a re-render",
        "To subscribe to context changes",
        "To create a new component instance"
      ],
      "correct": 1
    },
    {
      "q": "In the Burger Builder project, what HTTP method would you use to save a new order to a server?",
      "options": [
        "GET",
        "DELETE",
        "POST",
        "PATCH"
      ],
      "correct": 2
    },
    {
      "q": "Which library is commonly used in React apps to make HTTP requests?",
      "options": [
        "lodash",
        "axios",
        "moment",
        "classnames"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct way to handle a POST request response with axios?",
      "options": [
        "axios.post(url).then(res => res.json())",
        "axios.post(url, data).then(response => console.log(response.data))",
        "axios.get(url, data).then(response => response.data)",
        "fetch(url).then(res => res.post())"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of interceptors in axios?",
      "options": [
        "To cancel pending requests",
        "To globally intercept requests or responses before they are handled",
        "To encrypt API payloads",
        "To cache repeated API responses"
      ],
      "correct": 1
    },
    {
      "q": "What does React Router's <BrowserRouter> component do?",
      "options": [
        "Renders a browser-native navigation bar",
        "Provides routing context using the HTML5 history API",
        "Creates a new browser tab for each route",
        "Handles server-side rendering"
      ],
      "correct": 1
    },
    {
      "q": "Which React Router component renders the first <Route> that matches the current URL?",
      "options": [
        "<Router>",
        "<Link>",
        "<Switch> / <Routes>",
        "<Redirect>"
      ],
      "correct": 2
    },
    {
      "q": "How do you define a URL parameter in React Router v5?",
      "options": [
        "<Route path='/user?id' />",
        "<Route path='/user/:id' />",
        "<Route path='/user[id]' />",
        "<Route path='/user/id' />"
      ],
      "correct": 1
    },
    {
      "q": "Which hook is used to access URL parameters in React Router v6?",
      "options": [
        "useLocation",
        "useHistory",
        "useParams",
        "useRouteMatch"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between <Link> and <a> in React Router?",
      "options": [
        "There is no difference",
        "<Link> prevents full page reload and navigates within the SPA",
        "<a> is faster than <Link>",
        "<Link> requires a server to function"
      ],
      "correct": 1
    },
    {
      "q": "How do you programmatically navigate to a route in React Router v6?",
      "options": [
        "useHistory().push('/path')",
        "useNavigate()('/path')",
        "const navigate = useNavigate(); navigate('/path')",
        "Router.push('/path')"
      ],
      "correct": 2
    },
    {
      "q": "What is a controlled component in React forms?",
      "options": [
        "A component managed by a third-party form library",
        "A form element whose value is controlled by React state",
        "A component with restricted user access",
        "A form element that validates itself"
      ],
      "correct": 1
    },
    {
      "q": "What event is used to handle changes in a controlled input field?",
      "options": [
        "onInput",
        "onChange",
        "onKeyPress",
        "onUpdate"
      ],
      "correct": 1
    },
    {
      "q": "Which approach allows you to read form values without managing state for every input?",
      "options": [
        "Controlled components",
        "Uncontrolled components using refs",
        "Redux Form",
        "Context API"
      ],
      "correct": 1
    },
    {
      "q": "What does form validation 'touched' state typically represent?",
      "options": [
        "Whether the form has been submitted",
        "Whether the user has interacted with a particular field",
        "Whether the input field is currently focused",
        "Whether the field value is empty"
      ],
      "correct": 1
    },
    {
      "q": "What is Redux?",
      "options": [
        "A React-specific state management tool built into the library",
        "A predictable state container for JavaScript applications",
        "A server-side rendering framework",
        "A CSS-in-JS solution"
      ],
      "correct": 1
    },
    {
      "q": "What are the three core principles of Redux?",
      "options": [
        "Encapsulation, Inheritance, Polymorphism",
        "Single source of truth, State is read-only, Changes via pure functions",
        "Actions, Reducers, Sagas",
        "Immutability, Reactivity, Asynchrony"
      ],
      "correct": 1
    },
    {
      "q": "What is a Redux reducer?",
      "options": [
        "A function that dispatches actions to the store",
        "A pure function that takes the current state and an action and returns a new state",
        "A middleware that handles async operations",
        "A component that subscribes to the Redux store"
      ],
      "correct": 1
    },
    {
      "q": "What must a Redux reducer never do?",
      "options": [
        "Return the current state",
        "Handle default cases",
        "Mutate the existing state directly",
        "Accept an action object"
      ],
      "correct": 2
    },
    {
      "q": "Which hook is used to read data from the Redux store in a React component?",
      "options": [
        "useDispatch",
        "useStore",
        "useSelector",
        "useReducer"
      ],
      "correct": 2
    },
    {
      "q": "Which hook is used to dispatch actions to the Redux store?",
      "options": [
        "useSelector",
        "useAction",
        "useDispatch",
        "useSend"
      ],
      "correct": 2
    },
    {
      "q": "What is a Redux action creator?",
      "options": [
        "A component that creates the store",
        "A function that returns an action object",
        "A middleware for handling effects",
        "A selector that maps state to props"
      ],
      "correct": 1
    },
    {
      "q": "What is Redux Thunk used for?",
      "options": [
        "Synchronous state updates",
        "Writing reducers with switch statements",
        "Handling asynchronous logic such as API calls in Redux",
        "Connecting Redux to the React Context API"
      ],
      "correct": 2
    },
    {
      "q": "What does combineReducers() do in Redux?",
      "options": [
        "Merges two Redux stores",
        "Combines multiple reducer functions into a single root reducer",
        "Dispatches multiple actions at once",
        "Creates middleware from reducers"
      ],
      "correct": 1
    },
    {
      "q": "In the Burger Builder with Redux, what is the typical action dispatched when a user adds an ingredient?",
      "options": [
        "REMOVE_INGREDIENT",
        "UPDATE_BURGER",
        "ADD_INGREDIENT",
        "SET_INGREDIENT"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of JSON Web Tokens (JWT) in React authentication?",
      "options": [
        "To style components dynamically",
        "To store user preferences in localStorage",
        "To securely transmit user identity information between client and server",
        "To manage component state globally"
      ],
      "correct": 2
    },
    {
      "q": "Where is an authentication token commonly stored in a React app?",
      "options": [
        "In the React component's state only",
        "In localStorage or sessionStorage",
        "Directly in JSX",
        "In a CSS variable"
      ],
      "correct": 1
    },
    {
      "q": "How would you protect a route so only authenticated users can access it in React Router?",
      "options": [
        "Use the 'protected' prop on <Route>",
        "Wrap the component in a custom PrivateRoute that checks authentication state",
        "Add auth middleware to React Router",
        "Use <SecureRoute> from React Router"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of React.lazy()?",
      "options": [
        "To delay state updates",
        "To enable code splitting by lazily loading components",
        "To batch multiple setState calls",
        "To skip rendering of hidden components"
      ],
      "correct": 1
    },
    {
      "q": "Which component must wrap a lazy-loaded component?",
      "options": [
        "React.Fragment",
        "React.StrictMode",
        "React.Suspense",
        "React.ErrorBoundary"
      ],
      "correct": 2
    },
    {
      "q": "What is the purpose of useMemo()?",
      "options": [
        "To memoize a callback function",
        "To cache a computed value and recompute only when dependencies change",
        "To store component state between unmounts",
        "To prevent prop drilling"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of useCallback()?",
      "options": [
        "To call a function after rendering",
        "To return a memoized version of a callback that only changes if dependencies change",
        "To replace useEffect for event handlers",
        "To defer expensive computations"
      ],
      "correct": 1
    },
    {
      "q": "What type of test checks individual functions or components in isolation?",
      "options": [
        "Integration test",
        "End-to-end test",
        "Unit test",
        "Snapshot test"
      ],
      "correct": 2
    },
    {
      "q": "Which testing library is the recommended way to test React components by simulating user behavior?",
      "options": [
        "Enzyme",
        "Jasmine",
        "React Testing Library",
        "Mocha"
      ],
      "correct": 2
    },
    {
      "q": "What does a Jest snapshot test do?",
      "options": [
        "Tests the performance of a component",
        "Renders a component and saves its output to compare against future renders",
        "Checks network requests made by the component",
        "Tests Redux actions only"
      ],
      "correct": 1
    },
    {
      "q": "Which function from React Testing Library renders a component into the test environment?",
      "options": [
        "mount()",
        "shallow()",
        "render()",
        "create()"
      ],
      "correct": 2
    },
    {
      "q": "What is the best practice for deploying a React app to a static hosting service?",
      "options": [
        "Upload the /src folder directly",
        "Run npm start and capture the output",
        "Run npm run build and deploy the /build folder",
        "Run npm run eject and upload all files"
      ],
      "correct": 2
    },
    {
      "q": "Why do you need to configure your server to redirect all routes to index.html when deploying an SPA?",
      "options": [
        "To enable server-side rendering",
        "Because React Router handles routing client-side, and all paths must serve index.html",
        "To improve page load speed",
        "To prevent CSS from breaking on refresh"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of Webpack in a React project?",
      "options": [
        "It renders React components server-side",
        "It bundles JavaScript modules and assets into optimized output files",
        "It manages React component state",
        "It provides a testing environment for React"
      ],
      "correct": 1
    },
    {
      "q": "What is a Webpack loader?",
      "options": [
        "A plugin that minifies CSS",
        "A module that teaches Webpack how to process non-JS files like CSS or images",
        "A tool that loads environment variables",
        "A service worker for caching assets"
      ],
      "correct": 1
    },
    {
      "q": "What is the main advantage of Next.js over a standard Create React App?",
      "options": [
        "Next.js supports TypeScript while CRA does not",
        "Next.js provides server-side rendering and static site generation out of the box",
        "Next.js has better CSS support",
        "Next.js has a built-in Redux store"
      ],
      "correct": 1
    },
    {
      "q": "In Next.js, how is file-based routing defined?",
      "options": [
        "By configuring routes in a routes.js file",
        "By creating files inside the /pages directory",
        "By using <Route> components like React Router",
        "By exporting a routing config from next.config.js"
      ],
      "correct": 1
    },
    {
      "q": "What does getStaticProps() do in Next.js?",
      "options": [
        "Fetches data on every client request",
        "Fetches data at build time to pre-render a page",
        "Fetches data only after the user interacts with the page",
        "Handles API route responses"
      ],
      "correct": 1
    },
    {
      "q": "Which React library or API is used to animate components entering and leaving the DOM?",
      "options": [
        "React Spring",
        "React Transition Group",
        "Framer Motion only",
        "CSS Modules"
      ],
      "correct": 1
    },
    {
      "q": "What does the <Transition> component from React Transition Group primarily manage?",
      "options": [
        "Route transitions in React Router",
        "The mounting and unmounting states of a component for animation purposes",
        "Async data loading transitions",
        "CSS Grid layout transitions"
      ],
      "correct": 1
    },
    {
      "q": "What is Redux Saga?",
      "options": [
        "A testing library for Redux reducers",
        "A middleware that uses generator functions to handle side effects in Redux",
        "A replacement for Redux reducers",
        "A tool for combining multiple Redux stores"
      ],
      "correct": 1
    },
    {
      "q": "Which keyword makes a function a generator function in JavaScript?",
      "options": [
        "async",
        "await",
        "yield",
        "function*"
      ],
      "correct": 3
    },
    {
      "q": "What does the takeEvery() effect in Redux Saga do?",
      "options": [
        "Dispatches multiple actions at once",
        "Forks a new saga for every dispatched action of a given type",
        "Cancels any running saga when a new action is dispatched",
        "Waits for all effects to complete"
      ],
      "correct": 1
    },
    {
      "q": "What is a custom React hook?",
      "options": [
        "A built-in hook with custom configuration",
        "A function that starts with 'use' and can call other hooks to share stateful logic",
        "A lifecycle method for functional components",
        "A component that wraps other components with additional logic"
      ],
      "correct": 1
    },
    {
      "q": "Which rule of hooks states that hooks must not be called inside loops or conditions?",
      "options": [
        "Only Call Hooks from Class Components",
        "Only Call Hooks at the Top Level",
        "Only Call Hooks in Async Functions",
        "Only Call Hooks Once Per Component"
      ],
      "correct": 1
    },
    {
      "q": "What problem does the useContext hook solve?",
      "options": [
        "Prop drilling — passing data through many component layers",
        "Managing complex state transitions",
        "Handling asynchronous operations",
        "Optimizing render performance"
      ],
      "correct": 0
    },
    {
      "q": "What is the useReducer hook best suited for?",
      "options": [
        "Simple boolean toggle states",
        "Complex state logic with multiple sub-values or next state depending on previous",
        "Fetching data from APIs",
        "Accessing the DOM directly"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a valid signature for useReducer?",
      "options": [
        "const [state] = useReducer(initialState)",
        "const [state, dispatch] = useReducer(reducer, initialState)",
        "const [state, action] = useReducer(initialState, reducer)",
        "const state = useReducer(reducer)"
      ],
      "correct": 1
    },
    {
      "q": "In the Burger Builder with hooks, which hook would replace the connect() HOC for accessing Redux store state?",
      "options": [
        "useContext",
        "useStore",
        "useSelector",
        "useGlobalState"
      ],
      "correct": 2
    },
    {
      "q": "What is the children prop in React?",
      "options": [
        "An array of sub-components defined in the component file",
        "The content passed between the opening and closing tags of a component",
        "A special lifecycle method",
        "A reference to child DOM nodes"
      ],
      "correct": 1
    },
    {
      "q": "What does React.Fragment allow you to do?",
      "options": [
        "Split a component into multiple files",
        "Group multiple elements without adding an extra DOM node",
        "Create reusable template fragments",
        "Import external HTML fragments"
      ],
      "correct": 1
    },
    {
      "q": "What is a Higher-Order Component (HOC)?",
      "options": [
        "A component with more than 100 lines of code",
        "A function that takes a component and returns a new enhanced component",
        "A component that contains other components",
        "A class component that extends PureComponent"
      ],
      "correct": 1
    },
    {
      "q": "Given: const [count, setCount] = useState(0); what does setCount(count + 1) do?",
      "options": [
        "Decrements count by 1",
        "Sets count to 1 permanently",
        "Updates count to its current value plus 1 and triggers a re-render",
        "Resets count to 0"
      ],
      "correct": 2
    },
    {
      "q": "What does the following code do? useEffect(() => { fetchData(); }, []);",
      "options": [
        "Runs fetchData on every render",
        "Runs fetchData only once after the initial render",
        "Runs fetchData before every render",
        "Never runs fetchData"
      ],
      "correct": 1
    },
    {
      "q": "Which statement correctly updates a nested object in React state without mutation?",
      "options": [
        "state.user.name = 'Alice'; setState(state)",
        "setState({ ...state, user: { ...state.user, name: 'Alice' } })",
        "setState(state.user.name = 'Alice')",
        "Object.assign(state.user, { name: 'Alice' }); setState(state)"
      ],
      "correct": 1
    },
    {
      "q": "What is a side effect in the context of React hooks?",
      "options": [
        "A bug caused by improper state management",
        "Any operation that interacts with the outside world, like data fetching or DOM manipulation",
        "A performance issue caused by too many re-renders",
        "An error thrown during rendering"
      ],
      "correct": 1
    },
    {
      "q": "What is prop drilling?",
      "options": [
        "Using too many props in one component",
        "Passing props through intermediate components that don't use them",
        "Destructuring deeply nested prop objects",
        "Validating props with PropTypes"
      ],
      "correct": 1
    },
    {
      "q": "How does the Context API solve prop drilling?",
      "options": [
        "It compresses prop data before passing it",
        "It allows data to be shared across the component tree without passing props at every level",
        "It automatically detects which components need props",
        "It converts all props into global variables"
      ],
      "correct": 1
    },
    {
      "q": "Which library allows the use of the \"require\" keyword in front-end code?",
      "options": [
        "guid",
        "Browserify",
        "React",
        "jQuery"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "The ______ attribute of a React form is called when the main action button inside the form is pressed.",
      "options": [
        "onSubmit",
        "onChange",
        "onComplete"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Which of the following is not a method of a dispatcher?",
      "options": [
        "register",
        "vector",
        "dispatch"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What React function is used to define a new element tag?",
      "options": [
        "renderComponent",
        "createClass",
        "setInnerHTML"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Isomorphic means to focus exclusively on an app's back-end.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "React's abstraction of the document object model is often called...",
      "options": [
        "Virtual DOM",
        "Meta DOM",
        "Virtualized Model"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "React is",
      "options": [
        "A A library that represents asynchronous data streams with observables",
        "B A comprehensive client-side application framework",
        "C An optimizing compiler for JavaScript",
        "D A client-side library providing rendering and event handling"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Routing can be added to a React application by",
      "options": [
        "adding an HTML5 or hash fragment based routing library",
        "rendering the application on the server using react-page",
        "handling the window.onLocationChanged event",
        "using the React.route function"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Behavior is shared between components using",
      "options": [
        "propTypes",
        "state",
        "mixins",
        "props"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "An advantage of React is",
      "options": [
        "jQuery syntax",
        "static type checking",
        "speed",
        "easy integration with other JavaScript libraries"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "The JSX pre-processor is packaged as a",
      "options": [
        "dynamic link library",
        "Nuget package",
        "Gem",
        "npm module"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "The just-in-time JSX transformer is good for",
      "options": [
        "integrating with JavaScript tools",
        "simple development workflow",
        "reusing behavior",
        "performance"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "The function that creates React components is",
      "options": [
        "React.component.extend",
        "React.createComponent",
        "React.renderComponent",
        "React.createClass"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "How does React Router make URL params accessible to components?",
      "options": [
        "parseUrlParams",
        "State",
        "getUrlParams",
        "Props"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Why is the Link component useful?",
      "options": [
        "It allows you to hyperlink to routes by name",
        "It enhances page load performance",
        "It removes invalid characters from the URL",
        "It provides faster navigation than hyperlinks"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "How do Flux stores find out about Flux actions?",
      "options": [
        "They query the server via AJAX",
        "They poll HTML5 localstorage",
        "They register a callback with the dispatcher.",
        "They call action creators directly"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Where should mutable data for React components be stored?",
      "options": [
        "props",
        "reactData",
        "state",
        "React.cookie"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "What mechanism is recommended for passing data down to child components in React?",
      "options": [
        "props",
        "sendChildData",
        "getDefaultProps",
        "state"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What is JSX?",
      "options": [
        "A language that looks like JavaScript that compiles to HTML.",
        "A styling language that compiles down to CSS.",
        "A language for querying RESTful web services.",
        "A language that looks like HTML that compiles down to JavaScript."
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "What function should all your JSX be placed in?",
      "options": [
        "render",
        "compile",
        "jsx",
        "emit"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What syntax do you use to render the App component into an HTML element with id \"root\"?",
      "options": [
        "ReactDOM.render(App, document.getElementById(\"root\"));",
        "React.render(App, document.getElementById(\"root\"));",
        "ReactDOM.mountNode(<App />, document.getElementById(\"root\"));",
        "ReactDOM.render(<App />, document.getElementById(\"root\"));"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Three main components of Routing are . . . . . . . . . . .",
      "options": [
        "RouteObject",
        "RouterOutlet",
        "RouterState",
        "RouterLink"
      ],
      "correct": [
        0,
        1,
        3
      ],
      "note": null
    },
    {
      "q": "What are the components of TypeScript?",
      "options": [
        "TypeScript Language",
        "TypeScript Compiler",
        "TypeScript Language Service",
        "All of these"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Route . . . . . . . . . . allow us to pass values in our url to our component so we can dynamically change our view",
      "options": [
        "content.",
        "pipes",
        "modules",
        "variables",
        "parameters"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": ". Route . . . . . . . . . . allow us to pass values in our url to our component so we can dynamically change our",
      "options": [
        "view content.",
        "pipes",
        "modules",
        "variables",
        "parameters"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "The string \"api/route\" in Express is an example of a...",
      "options": [
        "Middleware",
        "B .Route",
        "Error Handler"
      ],
      "correct": 1
    },
    {
      "q": "The ______ attribute of a React form is called when the main action button inside the",
      "options": [
        "form is pressed.",
        "onSubmit",
        "onChange",
        "onComplete"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are automation tools?",
      "options": [
        "Gulp",
        "JSX",
        "Express"
      ],
      "correct": 0
    },
    {
      "q": "True or false : The only thing that can change the data inside a store is the store itself.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1
    },
    {
      "q": "The Gulp task which takes a stream and outputs a file is...",
      "options": [
        "src",
        "task",
        "dest"
      ],
      "correct": 2
    },
    {
      "q": "The best way to detect when a user has completed a form is",
      "options": [
        "to handle the onClick event on the form's submit element",
        "to handle the onBlur event of the last form element",
        "to handle the form's onSubmit event",
        "to accumulate the onChange events for each form element"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following API is a MUST for every React Component ?",
      "options": [
        "getInitialState.",
        "render",
        "renderComponent."
      ],
      "correct": 2
    },
    {
      "q": "What are the advantages of using React?",
      "options": [
        "React can be used on client as well as server side.",
        "Using React increases readability and makes maintainability easier. Component and Data patterns improve readability and thus make it easier for maintaining larger props.",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is just a View Layer.",
        "All of the above."
      ],
      "correct": 2
    },
    {
      "q": "What is React?",
      "options": [
        "Just a server-side framework",
        "Just a user-interface framework",
        "Both a server-side framework as well as a user-interface framework"
      ],
      "correct": 2
    },
    {
      "q": "In which directory React Components are saved?",
      "options": [
        "Inside js/components/",
        "Inside external/components/",
        "Inside vendor/components/",
        "Inside vendor/"
      ],
      "correct": 0
    },
    {
      "q": "What is a react.js in MVC?",
      "options": [
        "Middleware",
        "Controller",
        "Model"
      ],
      "correct": 1
    },
    {
      "q": "Flux components",
      "options": [
        "● Dispatcher",
        "● Stores",
        "● Views (React components)",
        "● Action"
      ],
      "correct": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "q": "What are the two ways that data gets handled in React?",
      "options": [
        "state & props",
        "services & components"
      ],
      "correct": 0
    },
    {
      "q": ". What does the “webpack” command do ?",
      "options": [
        "Runs React Local Development Server.",
        "Transpiles all the Javascript down into one file.",
        "Both A and B."
      ],
      "correct": 2
    },
    {
      "q": "You can also use an ES6 class to define a component in React.",
      "options": [
        "True.",
        "False."
      ],
      "correct": 0
    },
    {
      "q": "does react support two way binding?(No) 2)How can you access the state of a component from inside of a member function in React?",
      "options": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correct": 2
    },
    {
      "q": "How does React handle the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standard?",
      "options": [
        "aria-* HTML attributes are fully supported in JSX where most DOM properties and attributes in React are camelCased, these attributes should be lowercase.",
        "React processes aria-* attributes separately and updates the DOM for accessibility if the user requires it.",
        "aria-* attributes should be converted to camelCase like other attributes. For example: className, onChange, and so on",
        "React is yet to support the WAI-ARIA standard."
      ],
      "correct": 3
    },
    {
      "q": "What is the purpose of the useState hook?",
      "options": [
        "Fetch data from API",
        "Manage state in functional components",
        "Handle side effects",
        "Create context"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which hook performs side effects?",
      "options": [
        "useEffect",
        "useReducer",
        "useContext",
        "useCallback"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "How do you pass data from parent to child?",
      "options": [
        "Using state",
        "Using props",
        "Using context",
        "Using hooks"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Correct way to update state? const [user, setUser] = useState({ name:\"John\", age:30 });",
      "options": [
        "setUser({ name:\"Jane\" })",
        "setUser({ ...user, name:\"Jane\" })",
        "user.name=\"Jane\"",
        "setUser(user.name=\"Jane\")"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Lifecycle method replaced by useEffect?",
      "options": [
        "componentDidMount",
        "render",
        "constructor",
        "setState"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What does JSX stand for?",
      "options": [
        "JavaScript XML",
        "JavaScript Extension",
        "JSON XML",
        "Java Syntax"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "How to create a ref in functional component?",
      "options": [
        "const ref = useRef();",
        "const ref = createRef();",
        "const ref = useState();",
        "const ref = useEffect();"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "If count = 0, output? useEffect(() => { setCount(count + 1); }, []);",
      "options": [
        "0",
        "1",
        "2",
        "Infinite loop"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What does FormBuilder simplify?",
      "options": [
        "HTTP requests",
        "Reactive forms creation",
        "Template rendering",
        "Dependency injection"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which of the following API is a MUST for every React component? render",
      "options": [
        "getInitialState",
        "render",
        "renderComponent"
      ],
      "correct": 1
    },
    {
      "q": "What are the limitations of React?",
      "options": [
        "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development.",
        "React uses inline templating and JSX. This can seem awkward to some developers.",
        "The library of React is too large.",
        "All of the above"
      ],
      "correct": 2
    },
    {
      "q": "How can we render JSX in the browser ?",
      "options": [
        "Using Babel",
        "Using Typescript.",
        "Using Flux.",
        "Using Redux."
      ],
      "correct": 0
    },
    {
      "q": "appender. 2. logger 3. component.",
      "options": [
        "Using Babel",
        "Using Typescript.",
        "Using Flux.",
        "Using Redux."
      ],
      "correct": 1
    },
    {
      "q": "How can you access the state of a component from inside of a member function in React?",
      "options": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following APIs is a MUST for every React Component?",
      "options": [
        "getInitialState",
        "render",
        "renderComponent"
      ],
      "correct": 1
    },
    {
      "q": "How does React handle the WAI-ARIA standard?",
      "options": [
        "aria-* attributes are fully supported in JSX, lowercase.",
        "React processes aria-* attributes separately for accessibility.",
        "aria-* attributes should be converted to camelCase like other attributes.",
        "React is yet to support the WAI-ARIA standard."
      ],
      "correct": 0
    },
    {
      "q": "What is React in MVC?",
      "options": [
        "Controller",
        "Middleware",
        "Model",
        "Router"
      ],
      "correct": 0
    },
    {
      "q": "How can you access the state of a component from inside a member function in React?",
      "options": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correct": 2
    },
    {
      "q": "At the highest level, React components have lifecycle events that fall into _______.",
      "options": [
        "Initialization",
        "State/Property updates",
        "Destruction",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "How can you access the state of a component from inside a member function (2)?",
      "options": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correct": 2
    },
    {
      "q": "Redux is an exclusive feature of the React store.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Identify the correct ES6 statement(s): (i) var React = require('react'); (ii) import React from react; (iii) module.exports = Component; (iv) export default Component;",
      "options": [
        "Only i and ii",
        "Only iv",
        "Only i, ii and iv",
        "Only ii and iv"
      ],
      "correct": 3
    },
    {
      "q": "Which of the below methods are NOT a part of React Component's lifecycle?",
      "options": [
        "Initial Rendering",
        "Render/Re-Render",
        "unMounting",
        "Remote URL calls"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following is not a callback method of React?",
      "options": [
        "render()",
        "componentDidMount()",
        "componentFailedToMount()",
        "componentWillUnmount()"
      ],
      "correct": 2
    },
    {
      "q": "How can we render JSX in the browser? (i) Using Babel (ii) Using TypeScript (iii) Using Flux (iv) Using Redux",
      "options": [
        "Only i and ii",
        "Only iv",
        "Only i, ii and iv",
        "Only iii and iv"
      ],
      "correct": 0
    },
    {
      "q": "When is it recommended to pass this.setState a function instead of an object?",
      "options": [
        "When the new state should completely replace the old state",
        "When the new state does not depend on the old state",
        "When the new state depends on the old state"
      ],
      "correct": 2
    },
    {
      "q": "Which is NOT a valid value for the <dispatcher> element of a filter-mapping in web.xml?",
      "options": [
        "FORWARD",
        "RESPONSE",
        "INCLUDE",
        "ERROR"
      ],
      "correct": 1
    },
    {
      "q": "In classic React, which function is used to define a new component class?",
      "options": [
        "renderComponent",
        "createClass",
        "setInnerHTML",
        "defineComponent"
      ],
      "correct": 1
    },
    {
      "q": "True or false: The only thing that can change the data inside a Flux/Redux store is the store itself.",
      "options": [
        "False",
        "True"
      ],
      "correct": 1
    },
    {
      "q": "Behavior is shared between (legacy) React components using",
      "options": [
        "propTypes",
        "state",
        "mixins",
        "props"
      ],
      "correct": 2
    },
    {
      "q": "What is React in the MVC pattern?",
      "options": [
        "Model",
        "View",
        "Controller",
        "Router"
      ],
      "correct": 1
    },
    {
      "q": "Which of these are lifecycle-related React functions?",
      "options": [
        "componentDidMount",
        "componentDidUnmount",
        "render",
        "componentFailToMount"
      ],
      "correct": [
        0,
        2
      ]
    },
    {
      "q": "What does this render? return <h1>{undefined}</h1>;",
      "options": [
        "Nothing (renders empty)",
        "\"undefined\" as text",
        "Throws an Error",
        "null as text"
      ],
      "correct": 0
    },
    {
      "q": "How do you pass data from a parent component to a child component?",
      "options": [
        "Using state",
        "Using props",
        "Using context only",
        "Using hooks only"
      ],
      "correct": 1
    },
    {
      "q": "Given const [user, setUser] = useState({ name:'John', age:30 }); what is the correct way to update just the name?",
      "options": [
        "setUser({ name:'Jane' })",
        "setUser({ ...user, name:'Jane' })",
        "user.name = 'Jane'",
        "setUser(user.name = 'Jane')"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the key prop in a list?",
      "options": [
        "Styling",
        "Identifying unique elements for efficient rendering",
        "Handling events",
        "Managing state"
      ],
      "correct": 1
    },
    {
      "q": "Which class lifecycle method is most closely replaced by useEffect?",
      "options": [
        "componentDidMount",
        "render",
        "constructor",
        "setState"
      ],
      "correct": 0
    },
    {
      "q": "How do you create a ref in a functional component?",
      "options": [
        "const ref = useRef();",
        "const ref = createRef();",
        "const ref = useState();",
        "const ref = useEffect();"
      ],
      "correct": 0
    },
    {
      "q": "Given useEffect(() => { setCount(count + 1); }, []); starting with count = 0, what does count become?",
      "options": [
        "0",
        "1",
        "2",
        "Infinite loop"
      ],
      "correct": 1
    },
    {
      "q": "How can you access the state of a component from inside a member function?",
      "options": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correct": 2
    },
    {
      "q": "What does React cover in the MVC-like breakdown of an app?",
      "options": [
        "Only the model layer",
        "Only the view layer",
        "The full stack",
        "Routing only"
      ],
      "correct": 1
    },
    {
      "q": "What is the default port for the React development server?",
      "options": [
        "3000",
        "8080",
        "3306",
        "8809"
      ],
      "correct": 0
    },
    {
      "q": "Everything in React is built using:",
      "options": [
        "Templates",
        "Components",
        "Directives",
        "Modules"
      ],
      "correct": 1
    },
    {
      "q": "Which two data-handling concepts are core to React components?",
      "options": [
        "Services and Components",
        "State and Props",
        "Actions and Reducers",
        "Models and Views"
      ],
      "correct": 1
    },
    {
      "q": "Does React support native two-way data binding out of the box?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "What are the three major parts of a Flux application?",
      "options": [
        "Dispatcher, Stores, Views",
        "Controller, Model, View",
        "Reducer, Store, Action",
        "Component, State, Props"
      ],
      "correct": 0
    },
    {
      "q": "What are the components of the Flux pattern?",
      "options": [
        "Dispatcher",
        "Stores",
        "Views (React components) and Actions",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Does Redux use a single store?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Is Flux data flow multidirectional?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "How does React handle the WAI-ARIA accessibility standard?",
      "options": [
        "aria-* attributes should be camelCased like other DOM props",
        "React does not support WAI-ARIA",
        "aria-* HTML attributes are supported as-is (lowercase, hyphenated) in JSX",
        "Only role attributes are supported"
      ],
      "correct": 2
    },
    {
      "q": "You can use an ES6 class to define a component in React.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which is a valid way to import/export a React component (ES module style)?",
      "options": [
        "var React = require('react');",
        "import React from 'react';",
        "module.exports = Component;",
        "Both 'import React from react' and 'export default Component'"
      ],
      "correct": 3
    },
    {
      "q": "In which directory are React components conventionally saved?",
      "options": [
        "Inside js/components/",
        "Inside vendor/components/",
        "Inside external/components/",
        "Inside vendor/"
      ],
      "correct": 0
    },
    {
      "q": "What does the 'webpack' command primarily do?",
      "options": [
        "Transpiles/bundles JavaScript down into one (or few) files",
        "Runs the React local development server",
        "Only lints code",
        "Only minifies CSS"
      ],
      "correct": 0
    }
  ],
  "devops": [
    {
      "q": "What is the difference between 'git fetch' and 'git pull'?",
      "options": [
        "They are identical commands with different names",
        "git fetch downloads remote changes without merging; git pull downloads AND merges remote changes into the current branch",
        "git pull downloads changes without merging; git fetch downloads and merges automatically",
        "git fetch only works with tags; git pull works with branches"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Git command do?\ngit reset --hard HEAD~2",
      "options": [
        "Moves HEAD back 2 commits, keeping staged and working directory changes intact",
        "Moves HEAD back 2 commits and discards all changes in staging area and working directory",
        "Creates a new commit that undoes the last 2 commits",
        "Deletes the last 2 commits from the remote repository"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between 'git reset' and 'git revert'?",
      "options": [
        "git revert modifies history; git reset creates a new commit",
        "git reset modifies commit history (moves HEAD); git revert creates a new commit that undoes a previous commit, preserving history — safer for shared branches",
        "git reset is for staged files only; git revert is for committed files",
        "They are identical in behavior"
      ],
      "correct": 1
    },
    {
      "q": "What does 'git stash pop' do compared to 'git stash apply'?",
      "options": [
        "git stash pop applies the most recent stash and removes it from the stash list; git stash apply applies it but keeps it in the stash list",
        "git stash apply removes the stash; git stash pop keeps it",
        "They are identical",
        "git stash pop only works on the latest stash; git stash apply works on any stash by index"
      ],
      "correct": 0
    },
    {
      "q": "What does the following command do?\ngit log --oneline --graph --all",
      "options": [
        "Shows the commit history of the current branch only in full detail",
        "Displays a condensed, ASCII graph of all branches and their commit history in one line per commit",
        "Merges all branches into a linear graph",
        "Lists all tags and branches with their last commit"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of 'git cherry-pick <commit-hash>'?",
      "options": [
        "It merges an entire branch into the current branch",
        "It applies the changes introduced by a specific commit onto the current branch without merging the full branch",
        "It selects the best commit from a merge conflict",
        "It picks a commit and moves it to a different repository"
      ],
      "correct": 1
    },
    {
      "q": "What is a 'detached HEAD' state in Git?",
      "options": [
        "HEAD points to a deleted branch",
        "HEAD points directly to a specific commit rather than a branch; commits made here are not on any branch and may be lost",
        "HEAD is corrupted and cannot be used",
        "HEAD points to a remote tracking branch"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a merge commit and a rebase in Git?",
      "options": [
        "Merge creates a new merge commit preserving branch history; rebase replays commits from one branch onto another, creating a linear history",
        "Rebase creates a merge commit; merge creates a linear history",
        "They produce identical results in all scenarios",
        "Rebase is only used for resolving conflicts; merge is for integrating features"
      ],
      "correct": 0
    },
    {
      "q": "In GitHub, what is a Pull Request (PR)?",
      "options": [
        "A command to pull code from a remote repository",
        "A request to merge changes from one branch (or fork) into another, enabling code review and discussion before merging",
        "A way to pull Docker images from GitHub Container Registry",
        "A request sent to collaborators to pull the latest code"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a '.gitignore' file?",
      "options": [
        "It lists files that Git should delete from the repository",
        "It specifies intentionally untracked files and patterns that Git should ignore and not include in version control",
        "It configures global Git settings for the repository",
        "It prevents specific branches from being pushed to remote"
      ],
      "correct": 1
    },
    {
      "q": "What happens when you run 'git commit --amend'?",
      "options": [
        "Creates a new separate commit on top of the last one",
        "Modifies the most recent commit by replacing it with a new commit that includes staged changes and/or an updated commit message",
        "Reverts the last commit and stages all changes",
        "Amends the remote repository's last commit directly"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between 'git merge --ff' and 'git merge --no-ff'?",
      "options": [
        "--ff creates a merge commit; --no-ff performs a fast-forward and skips the merge commit",
        "--ff (fast-forward) moves the branch pointer without a merge commit when possible; --no-ff always creates a merge commit, preserving branch history",
        "--no-ff is faster because it skips history checks",
        "They are identical in all scenarios"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between 'forking' a repository and 'cloning' it on GitHub?",
      "options": [
        "Forking creates a server-side copy under your GitHub account; cloning creates a local copy on your machine",
        "Cloning creates a server-side copy; forking creates a local copy",
        "They are identical; forking is just GitHub's name for cloning",
        "Forking only works for private repositories; cloning works for public ones"
      ],
      "correct": 0
    },
    {
      "q": "What does 'git rebase -i HEAD~3' allow you to do?",
      "options": [
        "Rebase the current branch onto a remote branch interactively",
        "Interactively rewrite the last 3 commits — squashing, editing messages, reordering, or dropping commits",
        "Create 3 new branches from the last 3 commits",
        "Merge the last 3 commits into a new branch"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of 'git tag -a v1.0 -m \"Release 1.0\"'?",
      "options": [
        "Creates a lightweight tag (no metadata) on the current commit",
        "Creates an annotated tag with a message, stored as a full Git object with tagger info and date",
        "Tags a specific branch for deployment",
        "Creates a release branch named v1.0"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a Dockerfile?",
      "options": [
        "A configuration file that manages running Docker containers",
        "A text file containing instructions to build a Docker image layer by layer",
        "A file that defines Docker network and volume configurations",
        "A YAML file for orchestrating multiple Docker containers"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between the CMD and ENTRYPOINT instructions in a Dockerfile?",
      "options": [
        "CMD sets the image name; ENTRYPOINT sets the container name",
        "ENTRYPOINT defines the main executable that always runs; CMD provides default arguments that can be overridden at runtime",
        "CMD defines the main executable; ENTRYPOINT provides overridable defaults",
        "They are identical; ENTRYPOINT is the newer syntax for CMD"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Dockerfile instruction do?\nCOPY . /app\nWORKDIR /app\nRUN npm install",
      "options": [
        "Copies files, sets working directory to /app, and runs npm install inside the container during image build",
        "Copies the /app directory to the host during container startup",
        "Sets environment variables and installs npm globally",
        "Mounts the current directory as a volume at /app"
      ],
      "correct": 0
    },
    {
      "q": "What is the difference between 'docker run' and 'docker exec'?",
      "options": [
        "docker run executes a command in a running container; docker exec creates a new container",
        "docker run creates and starts a new container from an image; docker exec runs a command inside an already-running container",
        "docker exec creates a new container; docker run restarts an existing one",
        "They are identical commands"
      ],
      "correct": 1
    },
    {
      "q": "What does 'docker run -d -p 8080:80 nginx' do?",
      "options": [
        "Runs nginx in the foreground and maps host port 80 to container port 8080",
        "Runs nginx in detached (background) mode and maps host port 8080 to container port 80",
        "Pulls and builds an nginx image from Docker Hub and deploys to port 8080",
        "Runs nginx and creates a volume at port 8080"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Docker volumes?",
      "options": [
        "To increase container CPU allocation",
        "To persist data generated by and used by Docker containers beyond the container's lifecycle",
        "To share network interfaces between containers",
        "To store Docker images locally"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a Docker image and a Docker container?",
      "options": [
        "A container is a read-only template; an image is a running instance",
        "An image is a read-only template with layers; a container is a running (or stopped) instance of an image with a writable layer",
        "They are the same thing at different lifecycle stages",
        "An image contains data; a container contains the application code"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Docker command do?\ndocker build -t myapp:1.0 -f Dockerfile.prod .",
      "options": [
        "Pulls myapp version 1.0 from Docker Hub",
        "Builds a Docker image tagged as myapp:1.0 using Dockerfile.prod in the current directory as the build context",
        "Runs myapp:1.0 container using a production configuration file",
        "Tags an existing image myapp with version 1.0"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a multi-stage build in Docker?",
      "options": [
        "To build multiple images simultaneously",
        "To reduce final image size by using intermediate build stages (e.g., compiling in one stage, copying only artifacts to a smaller runtime image)",
        "To run multiple services in a single container",
        "To build images for multiple platforms at once"
      ],
      "correct": 1
    },
    {
      "q": "What does the following docker-compose.yml snippet configure?\nservices:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"\n  db:\n    image: postgres\n    environment:\n      POSTGRES_PASSWORD: secret",
      "options": [
        "Defines one service (web) with nginx and links it to a postgres instance",
        "Defines two services: nginx mapped on port 80 and postgres with a password environment variable; both start together with docker-compose up",
        "Creates two Docker networks and connects web and db to each",
        "Builds custom images for nginx and postgres from local Dockerfiles"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between 'docker-compose up' and 'docker-compose up --build'?",
      "options": [
        "They are identical",
        "docker-compose up starts services using cached images; docker-compose up --build forces a rebuild of images before starting",
        "docker-compose up --build pulls images from registry; docker-compose up uses local images only",
        "docker-compose up builds and starts; docker-compose up --build only builds without starting"
      ],
      "correct": 1
    },
    {
      "q": "What is a Docker Registry and how is it different from Docker Hub?",
      "options": [
        "A Docker Registry is a local cache; Docker Hub is the global cache",
        "A Docker Registry is the server-side storage system for Docker images; Docker Hub is Docker's public cloud-hosted registry (one implementation of a registry)",
        "Docker Hub is open-source; a Docker Registry is always proprietary",
        "They are identical terms used interchangeably"
      ],
      "correct": 1
    },
    {
      "q": "What does 'docker network create --driver bridge my-network' do?",
      "options": [
        "Creates a host-mode network named my-network",
        "Creates a user-defined bridge network named my-network that allows containers to communicate by name",
        "Creates a network that spans multiple Docker hosts",
        "Connects an existing container to a bridge network"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between the 'bridge', 'host', and 'none' Docker network modes?",
      "options": [
        "bridge: shares host network; host: isolated network; none: default",
        "bridge: isolated network with NAT (default); host: container shares host's network stack directly; none: no networking",
        "host: isolated with port mapping; bridge: shares host network; none: uses overlay",
        "They are all identical in behavior but differ in performance"
      ],
      "correct": 1
    },
    {
      "q": "What is Docker Swarm and how does it relate to Kubernetes?",
      "options": [
        "Docker Swarm is a logging tool; Kubernetes is a monitoring tool",
        "Both are container orchestration platforms; Docker Swarm is Docker's native, simpler orchestrator; Kubernetes is a more feature-rich, widely-adopted orchestrator",
        "Docker Swarm is for single-node deployments; Kubernetes is for multi-cloud only",
        "Kubernetes replaced Docker Swarm in Docker Desktop version 2+"
      ],
      "correct": 1
    },
    {
      "q": "What does the following command do in Docker Swarm?\ndocker service create --replicas 3 --name web nginx",
      "options": [
        "Creates 3 Docker containers named web locally",
        "Creates a Swarm service named web with 3 replicated nginx containers distributed across the swarm nodes",
        "Builds a nginx image with 3 layers",
        "Starts 3 Docker Compose stacks"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of the Kubernetes Control Plane?",
      "options": [
        "It runs the application containers and workloads",
        "It manages the cluster state, scheduling, and cluster-level decisions — components include API Server, etcd, Scheduler, and Controller Manager",
        "It provides networking between pods",
        "It stores container images for the cluster"
      ],
      "correct": 1
    },
    {
      "q": "What is a Kubernetes Pod?",
      "options": [
        "A virtual machine that runs on Kubernetes nodes",
        "The smallest deployable unit in Kubernetes that can contain one or more containers sharing the same network namespace and storage",
        "A grouping of multiple nodes in a cluster",
        "A Kubernetes service endpoint"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a Kubernetes ReplicaSet?",
      "options": [
        "To manage rolling updates and rollbacks of Deployments",
        "To ensure a specified number of pod replicas are running at all times, replacing pods that fail or are deleted",
        "To define resource limits for containers",
        "To expose pods to external traffic"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct YAML to create a Kubernetes Pod running nginx?\nWhich field defines the container image?",
      "options": [
        "spec.containers.dockerfile",
        "spec.containers[].image",
        "metadata.image",
        "spec.image"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a Kubernetes Deployment and a ReplicaSet?",
      "options": [
        "A Deployment manages a ReplicaSet and adds capabilities like rolling updates, rollbacks, and update strategies; ReplicaSet only ensures pod count",
        "ReplicaSet manages Deployments; Deployment only manages individual Pods",
        "They are identical; Deployment is just a newer name for ReplicaSet",
        "Deployments are for stateful apps; ReplicaSets are for stateless apps"
      ],
      "correct": 0
    },
    {
      "q": "What does 'kubectl rollout undo deployment/myapp' do?",
      "options": [
        "Deletes the myapp deployment",
        "Rolls back the myapp deployment to its previous revision",
        "Pauses the current rollout",
        "Scales the deployment to zero replicas"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a Kubernetes Service?",
      "options": [
        "To schedule pods onto specific nodes",
        "To provide a stable network endpoint (IP and DNS) for accessing a dynamic set of pods, enabling load balancing and service discovery",
        "To define persistent storage for pods",
        "To manage secrets and configuration"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between ClusterIP, NodePort, and LoadBalancer service types in Kubernetes?",
      "options": [
        "ClusterIP: exposes externally; NodePort: internal only; LoadBalancer: for databases",
        "ClusterIP: internal cluster access only; NodePort: exposes on each node's IP at a static port; LoadBalancer: provisions an external cloud load balancer",
        "LoadBalancer: internal cluster access; NodePort: external cloud LB; ClusterIP: static port on each node",
        "They are all identical; the distinction is only in the YAML syntax"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Kubernetes YAML section define?\nresources:\n  requests:\n    memory: \"64Mi\"\n    cpu: \"250m\"\n  limits:\n    memory: \"128Mi\"\n    cpu: \"500m\"",
      "options": [
        "Node capacity limits for the entire cluster",
        "Resource requests (guaranteed minimum) and limits (maximum allowed) for a container, used by the scheduler and enforced by the kubelet",
        "Autoscaling thresholds for the HorizontalPodAutoscaler",
        "Volume storage size and IOPS limits"
      ],
      "correct": 1
    },
    {
      "q": "What is etcd in a Kubernetes cluster?",
      "options": [
        "A container runtime used by Kubernetes",
        "A distributed key-value store that serves as Kubernetes' backing store for all cluster state and configuration data",
        "A monitoring tool for Kubernetes nodes",
        "A Kubernetes plugin for DNS resolution"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a Kubernetes Namespace?",
      "options": [
        "A way to define DNS names for services",
        "A virtual cluster within a physical cluster used to isolate resources, organize workloads, and apply access controls to different teams or environments",
        "A group of nodes with similar hardware",
        "A storage partition for persistent volumes"
      ],
      "correct": 1
    },
    {
      "q": "What does 'kubectl apply -f deployment.yaml' do compared to 'kubectl create -f deployment.yaml'?",
      "options": [
        "They are identical",
        "kubectl apply creates or updates the resource (idempotent — safe to rerun); kubectl create fails if the resource already exists",
        "kubectl create is idempotent; kubectl apply fails if the resource already exists",
        "kubectl apply only works with Deployments; kubectl create works with all resource types"
      ],
      "correct": 1
    },
    {
      "q": "What is a Kubernetes ConfigMap used for?",
      "options": [
        "Storing sensitive data like passwords and API keys",
        "Storing non-sensitive configuration data as key-value pairs that can be injected into pods as environment variables or mounted as files",
        "Mapping container ports to node ports",
        "Configuring the Kubernetes network plugin"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a Kubernetes Secret and a ConfigMap?",
      "options": [
        "Secrets are stored in etcd encrypted by default; ConfigMaps store any data; they are functionally identical",
        "Secrets are intended for sensitive data (stored base64-encoded in etcd, can be encrypted at rest); ConfigMaps are for non-sensitive configuration data",
        "ConfigMaps allow larger data; Secrets have a 1KB limit",
        "Secrets are only available to cluster admins; ConfigMaps are available to all users"
      ],
      "correct": 1
    },
    {
      "q": "What does 'kubectl describe pod mypod' show that 'kubectl get pod mypod' does not?",
      "options": [
        "They show identical information",
        "kubectl describe shows detailed info including events, conditions, container statuses, resource limits, and recent logs; kubectl get shows a summary status",
        "kubectl get shows events; kubectl describe shows only metadata",
        "kubectl describe is only for debugging crashed pods"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of the kube-scheduler in Kubernetes?",
      "options": [
        "It manages the lifecycle of etcd data",
        "It watches for newly created pods with no assigned node and selects the best node based on resource requirements, constraints, and policies",
        "It enforces network policies between pods",
        "It handles rolling updates for Deployments"
      ],
      "correct": 1
    },
    {
      "q": "What is a DaemonSet in Kubernetes?",
      "options": [
        "A set of privileged pods that manage cluster secrets",
        "A controller that ensures exactly one pod runs on every (or selected) node — commonly used for log collectors, monitoring agents, and network plugins",
        "A type of deployment that runs background batch jobs",
        "A service that load-balances traffic across daemon processes"
      ],
      "correct": 1
    },
    {
      "q": "What does the following kubectl command output?\nkubectl get pods -n production -o wide",
      "options": [
        "Lists all pods across all namespaces in wide format",
        "Lists all pods in the 'production' namespace with extra info like node name and pod IP",
        "Lists production deployments in wide format",
        "Gets all production namespaces with extended labels"
      ],
      "correct": 1
    },
    {
      "q": "What is a Kubernetes Ingress resource?",
      "options": [
        "A type of pod that handles incoming cluster traffic",
        "An API object that manages external HTTP/HTTPS access to services, providing routing rules, SSL termination, and name-based virtual hosting",
        "A firewall rule for blocking external traffic",
        "A load balancer service type that only works on-premises"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the kubelet on a Kubernetes worker node?",
      "options": [
        "It runs the Kubernetes API server on worker nodes",
        "It is the node agent that ensures containers described in PodSpecs are running and healthy, communicating with the control plane",
        "It manages the cluster's DNS resolution",
        "It provides a container runtime interface for scheduling"
      ],
      "correct": 1
    },
    {
      "q": "How do you set up a multi-node Kubernetes cluster using kubeadm? What is the first step on the master node?",
      "options": [
        "kubectl init --master",
        "kubeadm init (with optional --pod-network-cidr flag), then configure kubectl with the generated kubeconfig",
        "kubeadm bootstrap --master --flannel",
        "systemctl start kubernetes-master"
      ],
      "correct": 1
    },
    {
      "q": "What command would you use to join a worker node to a kubeadm-initialized cluster?",
      "options": [
        "kubectl node add --master <ip>",
        "kubeadm join <master-ip>:<port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>",
        "kubeadm connect --cluster <cluster-name>",
        "kubectl join --node <worker-ip>"
      ],
      "correct": 1
    },
    {
      "q": "What is Ansible and what makes it 'agentless'?",
      "options": [
        "Ansible is a container orchestration tool; agentless means it doesn't need containers",
        "Ansible is a configuration management and automation tool; agentless means it connects to managed nodes via SSH (or WinRM) without installing any agent software on them",
        "Ansible is agentless because it uses REST APIs instead of CLI",
        "Ansible runs agents that install themselves and self-destruct after execution"
      ],
      "correct": 1
    },
    {
      "q": "What is an Ansible Playbook?",
      "options": [
        "A binary executable that runs Ansible commands",
        "A YAML file that defines a set of plays (ordered sets of tasks) to be executed on specified hosts",
        "A Python script that Ansible generates automatically",
        "A GUI tool for managing Ansible inventories"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the Ansible Inventory file?",
      "options": [
        "It lists all Ansible modules available for use",
        "It defines the hosts and groups of hosts on which Ansible will run playbooks, along with connection variables",
        "It stores encrypted secrets like passwords and SSH keys",
        "It tracks the execution history of Ansible playbooks"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Ansible task do?\n- name: Install nginx\n  apt:\n    name: nginx\n    state: present",
      "options": [
        "Removes nginx if it is installed",
        "Installs the nginx package using apt if not already present, making the task idempotent",
        "Downloads the nginx source code and compiles it",
        "Starts the nginx service after installation"
      ],
      "correct": 1
    },
    {
      "q": "What is idempotency in Ansible and why is it important?",
      "options": [
        "Idempotency means tasks always run regardless of current state, ensuring fresh configuration",
        "Idempotency means running a playbook multiple times produces the same result as running it once — Ansible only makes changes when needed, preventing unintended drift",
        "Idempotency means Ansible tasks run in parallel to speed up execution",
        "Idempotency means tasks can be rolled back automatically"
      ],
      "correct": 1
    },
    {
      "q": "What are Ansible Roles used for?",
      "options": [
        "Defining user permissions within Ansible Tower",
        "Organizing and reusing related tasks, variables, files, and templates in a standardized directory structure for modular playbooks",
        "Assigning tasks to specific Ansible users",
        "Defining the execution order of playbooks"
      ],
      "correct": 1
    },
    {
      "q": "What does the 'ansible-vault encrypt secrets.yml' command do?",
      "options": [
        "Decrypts an already encrypted file",
        "Encrypts the secrets.yml file so sensitive data (passwords, keys) can be safely stored in version control",
        "Creates a new empty vault and imports secrets.yml",
        "Validates the syntax of secrets.yml for security issues"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between an Ansible 'task' and an Ansible 'handler'?",
      "options": [
        "Tasks run once at the end of a play; handlers run at every step",
        "Tasks execute in order during a play; handlers are triggered by 'notify' and run only once at the end of a play if notified — commonly used for restarting services",
        "Handlers execute conditionally based on variables; tasks always execute",
        "They are identical; handlers are just tasks with a different name"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Ansible snippet demonstrate?\n- name: Deploy config\n  template:\n    src: nginx.conf.j2\n    dest: /etc/nginx/nginx.conf\n  notify: restart nginx",
      "options": [
        "Copies a static file to the destination and starts nginx",
        "Renders a Jinja2 template with variable substitution and deploys it; notifies the 'restart nginx' handler if the file changes",
        "Creates a new nginx.conf from scratch using builtin defaults",
        "Downloads nginx.conf from a remote URL and saves it locally"
      ],
      "correct": 1
    },
    {
      "q": "Which Ansible module is used to run arbitrary shell commands on remote hosts?",
      "options": [
        "command (for simple commands) and shell (for commands requiring shell features like pipes and redirects)",
        "execute",
        "run",
        "bash"
      ],
      "correct": 0
    },
    {
      "q": "What is CI/CD and what is the difference between Continuous Delivery and Continuous Deployment?",
      "options": [
        "They are identical; the terms are used interchangeably",
        "CI automates integration; CD (Delivery) automates building to a staging environment requiring manual approval to production; CD (Deployment) automatically deploys to production without manual approval",
        "Continuous Delivery deploys to production automatically; Continuous Deployment requires manual approval",
        "CI is a Docker concept; CD is a Kubernetes concept"
      ],
      "correct": 1
    },
    {
      "q": "What is Jenkins and what is its primary role in a CI/CD pipeline?",
      "options": [
        "Jenkins is a container runtime for running CI jobs",
        "Jenkins is an open-source automation server that orchestrates CI/CD pipelines — building, testing, and deploying applications triggered by code changes",
        "Jenkins is a code repository similar to GitHub",
        "Jenkins is a monitoring tool for Kubernetes deployments"
      ],
      "correct": 1
    },
    {
      "q": "What is a Jenkinsfile and what are its two main syntaxes?",
      "options": [
        "A Jenkins configuration file in XML; syntaxes are freestyle and pipeline",
        "A text file defining a Jenkins pipeline as code; supports Declarative Pipeline (structured, opinionated) and Scripted Pipeline (Groovy-based, flexible)",
        "A YAML file for defining Jenkins jobs; syntaxes are sequential and parallel",
        "A JSON file for configuring Jenkins plugins; syntaxes are simple and advanced"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Maven in a CI/CD pipeline?",
      "options": [
        "Maven is a container runtime used to build Docker images",
        "Maven is a Java build and dependency management tool that compiles code, runs tests, and packages applications (e.g., into JARs/WARs) in a CI pipeline",
        "Maven is a version control tool similar to Git",
        "Maven orchestrates the deployment of applications to Kubernetes"
      ],
      "correct": 1
    },
    {
      "q": "In a Jenkins pipeline, what does the following stage do?\nstage('Build') {\n    steps {\n        sh 'mvn clean package -DskipTests'\n    }\n}",
      "options": [
        "Runs unit tests and packages the application",
        "Compiles and packages the Maven project into a JAR/WAR while skipping test execution",
        "Cleans the Docker image and pushes to registry",
        "Deploys the package to a Tomcat server"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of Apache Tomcat in a CI/CD pipeline?",
      "options": [
        "Tomcat is a build tool that compiles Java applications",
        "Tomcat is a Java Servlet/JSP web server and application container used to deploy and serve Java web applications (WARs) as part of a CD pipeline",
        "Tomcat is a container orchestrator for Java microservices",
        "Tomcat manages Jenkins job queues"
      ],
      "correct": 1
    },
    {
      "q": "In a Jenkins pipeline integrating Docker, what does the following step do?\nstage('Docker Build & Push') {\n    steps {\n        sh 'docker build -t myrepo/myapp:${BUILD_NUMBER} .'\n        sh 'docker push myrepo/myapp:${BUILD_NUMBER}'\n    }\n}",
      "options": [
        "Pulls a Docker image and tests it",
        "Builds a Docker image tagged with the Jenkins build number and pushes it to a Docker registry",
        "Builds and immediately deploys the container to production",
        "Runs the application in Docker and captures output for testing"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the 'deploy' stage in a Jenkins pipeline that uses kubectl?",
      "options": [
        "To build and test the Kubernetes YAML files",
        "To apply Kubernetes manifests (via kubectl apply) to update deployments in the cluster with the newly built image",
        "To scale down existing deployments before the new version is ready",
        "To validate that the Kubernetes cluster is running"
      ],
      "correct": 1
    },
    {
      "q": "What is a Jenkins agent (node) in the context of a distributed build environment?",
      "options": [
        "A Jenkins plugin that monitors pipeline execution",
        "A machine (physical, VM, or container) that connects to the Jenkins controller and executes build jobs, enabling parallel and distributed builds",
        "The Jenkins server itself running all pipelines",
        "An Ansible host managed by Jenkins for deployments"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Declarative Jenkinsfile section configure?\nenvironment {\n    DOCKER_REGISTRY = 'docker.io/myuser'\n    IMAGE_TAG = \"${env.BUILD_NUMBER}\"\n}",
      "options": [
        "Defines Docker runtime settings for the Jenkins agent",
        "Declares pipeline-level environment variables accessible to all stages as DOCKER_REGISTRY and a dynamic IMAGE_TAG using the Jenkins build number",
        "Sets environment variables only for the first stage",
        "Configures the Jenkins controller's Docker plugin settings"
      ],
      "correct": 1
    },
    {
      "q": "In a Jenkins-Ansible-Docker pipeline, what is the typical sequence of stages?",
      "options": [
        "Deploy → Build → Test → Push",
        "Code Checkout → Build (Maven/compile) → Test → Docker Build → Docker Push → Ansible Deploy",
        "Docker Pull → Ansible Install → Jenkins Build → Push to Git",
        "Git Clone → Docker Run → Test → Kubernetes Apply"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Jenkins Credentials (Manage Credentials)?",
      "options": [
        "To manage Jenkins user accounts and RBAC",
        "To securely store and inject sensitive data (SSH keys, passwords, tokens) into pipelines without exposing them in plaintext in Jenkinsfiles",
        "To configure Jenkins agent connection credentials",
        "To store Kubernetes kubeconfig files only"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between 'docker stop' and 'docker kill'?",
      "options": [
        "docker kill gracefully shuts down a container; docker stop forcefully terminates it",
        "docker stop sends SIGTERM (graceful shutdown with a timeout then SIGKILL); docker kill sends SIGKILL (immediate termination by default)",
        "docker stop removes the container; docker kill only stops it",
        "They are identical commands"
      ],
      "correct": 1
    },
    {
      "q": "What does 'docker system prune -a' do?",
      "options": [
        "Removes only stopped containers",
        "Removes all stopped containers, unused networks, dangling images, and all unused images (not just dangling ones) to free disk space",
        "Removes all running containers forcefully",
        "Resets Docker to factory settings"
      ],
      "correct": 1
    },
    {
      "q": "What is a 'dangling' Docker image?",
      "options": [
        "An image that is currently running in a container",
        "An untagged image layer that is no longer referenced by any tagged image, typically left after rebuilding an image with the same tag",
        "An image with a broken manifest",
        "An image stored in a private registry without a valid SSL certificate"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the .dockerignore file?",
      "options": [
        "It prevents Docker from running on certain directories",
        "It specifies files and directories to exclude from the Docker build context, reducing build time and preventing sensitive files from being sent to the daemon",
        "It lists images that should not be pulled from Docker Hub",
        "It ignores Docker daemon errors during builds"
      ],
      "correct": 1
    },
    {
      "q": "What does 'docker inspect <container_id>' return?",
      "options": [
        "The container's live resource usage statistics",
        "A JSON object with detailed low-level information about the container including its configuration, network settings, mounts, and state",
        "The container's application logs",
        "A list of all processes running inside the container"
      ],
      "correct": 1
    },
    {
      "q": "In Kubernetes, what is a PersistentVolume (PV) and PersistentVolumeClaim (PVC)?",
      "options": [
        "PV is the storage request from a pod; PVC is the actual storage resource",
        "PV is a cluster-level storage resource provisioned by an admin; PVC is a user's request for storage that binds to an appropriate PV",
        "They are identical; PVC is just the newer API version of PV",
        "PV stores ConfigMaps; PVC stores Secrets"
      ],
      "correct": 1
    },
    {
      "q": "What is a Kubernetes StatefulSet and when would you use it instead of a Deployment?",
      "options": [
        "StatefulSet is used for any application that requires more than 3 replicas",
        "StatefulSet provides stable network identities and persistent storage for each pod, ordered deployment/scaling — ideal for stateful apps like databases",
        "StatefulSet is a deprecated feature replaced by Deployments with PVCs",
        "StatefulSet is only available in enterprise Kubernetes distributions"
      ],
      "correct": 1
    },
    {
      "q": "What is Kubernetes Horizontal Pod Autoscaling (HPA)?",
      "options": [
        "Automatically adjusting the resource limits of a single pod",
        "Automatically scaling the number of pod replicas in a Deployment/ReplicaSet based on observed CPU utilization or custom metrics",
        "Adding more nodes to the cluster when resource usage is high",
        "Vertically scaling a pod by increasing its CPU and memory limits"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Kubernetes liveness probe do?\nlivenessProbe:\n  httpGet:\n    path: /health\n    port: 8080\n  initialDelaySeconds: 10\n  periodSeconds: 5",
      "options": [
        "Checks if the container is ready to receive traffic every 5 seconds",
        "Sends an HTTP GET to /health on port 8080 every 5 seconds (after an initial 10s delay); if it fails, the kubelet restarts the container",
        "Logs the container health status every 5 seconds",
        "Terminates the pod if /health returns anything other than 404"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between a liveness probe and a readiness probe in Kubernetes?",
      "options": [
        "They are identical; readiness is the old name for liveness",
        "Liveness probe determines if a container should be restarted (unhealthy); readiness probe determines if a container is ready to receive traffic (if not ready, removed from Service endpoints)",
        "Readiness probe restarts the container; liveness probe removes it from the service",
        "Liveness probes only work with HTTP; readiness probes work with TCP and exec commands"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Kubernetes RBAC (Role-Based Access Control)?",
      "options": [
        "To control network traffic between pods based on roles",
        "To regulate who can perform which actions on which Kubernetes API resources using Roles, ClusterRoles, RoleBindings, and ClusterRoleBindings",
        "To assign CPU and memory quotas to namespaces",
        "To manage container image pull permissions from private registries"
      ],
      "correct": 1
    },
    {
      "q": "What is Docker's overlay2 storage driver and why is it significant?",
      "options": [
        "It is a legacy storage driver replaced by aufs",
        "It is the recommended default Linux storage driver that efficiently manages image layers using copy-on-write semantics with minimal disk space usage",
        "It provides encrypted storage for sensitive container data",
        "It enables cross-host container storage without a volume plugin"
      ],
      "correct": 1
    },
    {
      "q": "What does the following docker-compose.yml 'depends_on' option do?\nservices:\n  web:\n    image: myapp\n    depends_on:\n      - db\n  db:\n    image: postgres",
      "options": [
        "Ensures the db service's application is fully initialized before web starts",
        "Ensures Docker Compose starts the db container before the web container, but does NOT wait for db to be ready/healthy",
        "Creates a network link between web and db",
        "Prevents web from running if db exits with an error"
      ],
      "correct": 1
    },
    {
      "q": "What is a Jenkins webhook and why is it used?",
      "options": [
        "A Jenkins plugin for connecting to Docker registries",
        "A mechanism where GitHub/GitLab sends an HTTP POST to Jenkins when events (like a push) occur, triggering an automatic pipeline build without polling",
        "A Jenkins security feature for validating incoming API calls",
        "A way to notify developers when builds fail"
      ],
      "correct": 1
    },
    {
      "q": "In a Jenkins pipeline, what does the 'post' block do?\npost {\n  success { mail to: 'team@company.com', subject: 'Build Passed' }\n  failure { slackSend message: 'Build Failed!' }\n}",
      "options": [
        "Defines pre-build steps that run before any stage",
        "Defines post-build actions that run after the pipeline completes, conditionally based on build status (success, failure, always, unstable)",
        "Configures Jenkins notifications for manual approval gates",
        "Runs cleanup tasks only when the pipeline is aborted"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of Ansible's 'when' conditional in a task?\n- name: Start nginx\n  service:\n    name: nginx\n    state: started\n  when: ansible_os_family == 'Debian'",
      "options": [
        "Runs the task when the playbook starts",
        "Conditionally executes the task only when the target host's OS family is Debian, enabling conditional logic in playbooks",
        "Runs the task only on the first execution",
        "Skips the task if nginx is already installed"
      ],
      "correct": 1
    },
    {
      "q": "What is 'git bisect' used for?",
      "options": [
        "Splitting a commit into two smaller commits",
        "Using binary search through commit history to find the specific commit that introduced a bug",
        "Dividing a repository into two separate repositories",
        "Merging two branches by finding the midpoint commit"
      ],
      "correct": 1
    },
    {
      "q": "What does the EXPOSE instruction in a Dockerfile do?",
      "options": [
        "It automatically publishes the port to the host machine",
        "It documents which port(s) the container listens on at runtime; it does NOT actually publish the port — that requires -p in docker run",
        "It opens a firewall rule for the specified port",
        "It creates a network binding between the container and the host on the specified port"
      ],
      "correct": 1
    },
    {
      "q": "What is the Kubernetes kube-proxy component responsible for?",
      "options": [
        "Proxying kubectl commands to the API server",
        "Maintaining network rules on nodes (using iptables/IPVS) to enable communication to pods across the cluster and implement Service load balancing",
        "Proxying container image pulls from the registry",
        "Encrypting traffic between pods"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between 'git clone' and 'git init'?",
      "options": [
        "git init creates a new local repository; git clone creates a copy of an existing remote repository locally",
        "git clone initializes a repository; git init copies a remote repository",
        "They are identical; git init is the older command",
        "git init creates a bare repository; git clone creates a normal repository"
      ],
      "correct": 0
    },
    {
      "q": "What is an Ansible 'fact' and how is it collected?",
      "options": [
        "A hardcoded variable defined in the inventory file",
        "System information about managed nodes (OS, IP, memory, etc.) automatically gathered at the start of a playbook run via the 'setup' module (gather_facts: yes)",
        "A user-defined variable stored in group_vars",
        "An Ansible module output that persists between playbook runs"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Kubernetes command do?\nkubectl scale deployment myapp --replicas=5",
      "options": [
        "Sets a maximum of 5 pods for autoscaling",
        "Immediately scales the myapp Deployment to run exactly 5 pod replicas",
        "Scales the cluster to 5 nodes",
        "Sets the minimum number of pods to 5"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the ARG instruction in a Dockerfile vs ENV?",
      "options": [
        "ARG is available only at runtime; ENV is available only at build time",
        "ARG defines build-time variables passed with --build-arg (not available in running container); ENV defines environment variables available both at build time and in the running container",
        "They are identical; ARG is for numeric values, ENV for strings",
        "ENV encrypts values; ARG stores them in plaintext"
      ],
      "correct": 1
    },
    {
      "q": "In Ansible, what is the difference between 'copy' and 'template' modules?",
      "options": [
        "copy transfers static files as-is to remote hosts; template renders Jinja2 template files with variable substitution before transferring",
        "template copies files faster; copy supports Jinja2 templating",
        "copy works for directories; template works only for single files",
        "They are identical; template is the deprecated version of copy"
      ],
      "correct": 0
    },
    {
      "q": "What does 'kubectl port-forward pod/mypod 8080:80' do?",
      "options": [
        "Permanently exposes pod port 80 on the host at port 8080",
        "Creates a temporary tunnel that forwards local port 8080 to port 80 on the pod for debugging, without creating a Service",
        "Updates the pod's containerPort to 8080",
        "Creates a NodePort service mapping port 80 to 8080"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the '--record' flag in older kubectl commands (e.g., kubectl apply --record)?",
      "options": [
        "It saves the kubectl output to a log file",
        "It annotates the resource with the command used, preserving it in the rollout history for auditing — deprecated in newer Kubernetes versions",
        "It enables verbose logging for the API server",
        "It records the current cluster state as a backup"
      ],
      "correct": 1
    },
    {
      "q": "What does the following Jenkins pipeline code demonstrate?\nstage('Deploy to Kubernetes') {\n    steps {\n        withKubeConfig([credentialsId: 'k8s-cred']) {\n            sh 'kubectl set image deployment/myapp myapp=myrepo/myapp:${BUILD_NUMBER}'\n        }\n    }\n}",
      "options": [
        "Builds a Kubernetes image from scratch and deploys it",
        "Uses stored Jenkins credentials to authenticate with Kubernetes and performs a rolling update of the myapp deployment to the newly built image",
        "Creates a new Kubernetes cluster and deploys the application",
        "Pulls the image from Kubernetes and caches it in Jenkins"
      ],
      "correct": 1
    },
    {
      "q": "What is the Git 'upstream' in the context of a forked repository?",
      "options": [
        "The main production branch of the forked repository",
        "The original repository from which the fork was created, typically added as a remote to sync changes: git remote add upstream <original-url>",
        "The remote named 'origin' on the forked repository",
        "The GitHub Actions workflow that syncs forks automatically"
      ],
      "correct": 1
    },
    {
      "q": "What is the Kubernetes concept of 'taints and tolerations'?",
      "options": [
        "Taints allow pods to prefer certain nodes; tolerations repel pods from nodes",
        "Taints are applied to nodes to repel pods; tolerations are applied to pods to allow them to be scheduled on tainted nodes",
        "Taints define pod priority; tolerations define pod resource limits",
        "They are network policies that control ingress and egress traffic"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of 'docker-compose down -v'?",
      "options": [
        "Stops all containers and removes named/anonymous volumes defined in the compose file, completely cleaning up the environment",
        "Stops containers but keeps volumes intact",
        "Scales all services down to zero replicas",
        "Removes only the networks created by docker-compose up"
      ],
      "correct": 0
    },
    {
      "q": "In a Jenkins-Docker CI/CD pipeline, why would you mount the Docker socket (/var/run/docker.sock) into the Jenkins agent container?",
      "options": [
        "To give the Jenkins container access to the host filesystem",
        "To allow the Jenkins agent container to communicate with the host's Docker daemon so it can build and push Docker images from within a container",
        "To share Jenkins build artifacts with other containers",
        "To enable Jenkins to access Kubernetes cluster configuration"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between Ansible 'block' and 'include_tasks'?",
      "options": [
        "block groups tasks together enabling shared error handling (rescue/always); include_tasks dynamically includes a separate task file at runtime",
        "include_tasks is the block equivalent with error handling; block includes external task files",
        "They are identical in function",
        "block is used for looping; include_tasks is used for conditional execution"
      ],
      "correct": 0
    },
    {
      "q": "What does the following Kubernetes YAML define?\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: myapp-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: myapp\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70",
      "options": [
        "A static Deployment with exactly 10 replicas",
        "A HorizontalPodAutoscaler that scales the myapp Deployment between 2 and 10 replicas, targeting 70% average CPU utilization",
        "A resource quota limiting myapp to 70% CPU usage",
        "A scheduled cron job that scales myapp twice daily"
      ],
      "correct": 1
    },
    {
      "q": "Which property is replaced by c-namespace in spring?",
      "options": [
        "<property/>",
        "<constructor-arg>"
      ],
      "correct": 1
    },
    {
      "q": "Can the class which spring container makes subclass be final?",
      "options": [
        "No",
        "Yes"
      ],
      "correct": 0
    },
    {
      "q": "What is continuous testing?",
      "options": [
        "Testing continuously for 24 hours",
        "Manually testing each build, end-to-end Automated testing",
        "Automated testing",
        "on each continuous deployment"
      ],
      "correct": 3
    },
    {
      "q": "Shift-left concept refers to moving everything to the earlier phase in the ________",
      "options": [
        "cycle.",
        "Requirement",
        "Development",
        "Design",
        "Testing"
      ],
      "correct": 1
    },
    {
      "q": "In Kubernetes, a node is:",
      "options": [
        "A worker machine",
        "A tool for starting a kubernetes cluster on a local machine",
        "A machine that coordinates the scheduling and management of application containers",
        "on the cluster A virtual machine"
      ],
      "correct": 0
    },
    {
      "q": "GIT can be integrated with Jenkins.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "How to handle shutdown of IoC container?",
      "options": [
        "Using shutdownHook()",
        "Using shutdownHandler()",
        "Using registerHook()",
        "Using registerShutdownHook()"
      ],
      "correct": 3
    },
    {
      "q": "Microservices is most closely related to which other established acronym?",
      "options": [
        "API",
        "AWS",
        "GCP",
        "PAAS"
      ],
      "correct": 0
    },
    {
      "q": "How to handle shut down of IoC containers?",
      "options": [
        "A - Using shutdownHook()",
        "B - Using shutdownHandler()",
        "C - Using registerHook()",
        "D - Using registerShutdownHook()"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Load Balancing improves the distribution of workloads across multiple computing resources , such as computers or a computer cluster.",
      "options": [
        "True.",
        "False."
      ],
      "correct": 0
    },
    {
      "q": "DevOps: What is the purpose of Docker?",
      "options": [
        "Code compilation",
        "Containerization",
        "Version control",
        "Load balancing"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "DevOps: Which command builds a Docker image?",
      "options": [
        "docker run",
        "docker build",
        "docker push",
        "docker pull"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "DevOps: What is CI/CD?",
      "options": [
        "Continuous Integration / Continuous Deployment",
        "Code Inspection / Code Delivery",
        "Continuous Improvement / Continuous Development",
        "Code Integration / Code Deployment"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "DevOps: Which tool manages container orchestration?",
      "options": [
        "Jenkins",
        "Kubernetes",
        "Git",
        "Ansible"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "DevOps: What does nginx -g \"daemon off;\" do in a Docker container?",
      "options": [
        "Runs NGINX in the background",
        "Runs NGINX in the foreground",
        "Stops NGINX",
        "Restarts NGINX"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "DevOps: Which file defines a Jenkins pipeline?",
      "options": [
        "Dockerfile",
        "Jenkinsfile",
        "pom.xml",
        "build.gradle"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "DevOps: What is Infrastructure as Code?",
      "options": [
        "Manual server setup",
        "Defining infrastructure using scripts",
        "Database management",
        "Application deployment"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "DevOps: Which AWS service manages containerized apps?",
      "options": [
        "EC2",
        "ECS",
        "S3",
        "RDS"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Microservices: What is a key benefit of microservices architecture?",
      "options": [
        "Monolithic codebase",
        "Independent scalability",
        "Tight coupling",
        "Single database"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Microservices: Which pattern ensures loose coupling in microservices?",
      "options": [
        "Circuit Breaker",
        "Service Registry",
        "Event-Driven",
        "Monolith"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "After initializing a new Git repository and creating git-quiz.html, which command will NOT work if issued?",
      "options": [
        "git add git-quiz.html",
        "git status",
        "git add .",
        "git commit -m \"git quiz web file added\""
      ],
      "correct": 3
    },
    {
      "q": "Which of the following are the benefits of using Gradle over Maven?",
      "options": [
        "Gradle supports more languages than Maven.",
        "Gradle incorporates Maven features as well as additional functionality.",
        "Gradle builds are successful more often than Maven builds.",
        "A Gradle build is 1000 times faster than a Maven build."
      ],
      "correct": 1
    },
    {
      "q": "Adopting Agile is necessary prior to embracing DevOps practices.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "Adopting DevOps requires planning that spans which of the following? (choose which is not)",
      "options": [
        "People",
        "Efforts",
        "Process",
        "Tools/Technology"
      ],
      "correct": 1
    },
    {
      "q": "Which DevOps principle focuses on product and service thinking?",
      "options": [
        "Customer-centric action",
        "Continuous improvement",
        "Create with the end in mind",
        "Automate everything you can"
      ],
      "correct": 2
    },
    {
      "q": "Shift-left concept refers to moving everything to the earlier phase in the ________ cycle.",
      "options": [
        "Requirement",
        "Development",
        "Design",
        "Testing"
      ],
      "correct": 1
    },
    {
      "q": "In order to minimize risks to the business within DevOps, what is the main goal of version control?",
      "options": [
        "Ensure the ability to alert when configuration changes from the desired state.",
        "Ensure the ability to re-create the previous state of the test environment.",
        "Ensure the ability to re-create the production environment and build processes.",
        "Ensure the ability to share the source code between different developer teams."
      ],
      "correct": 2
    },
    {
      "q": "What is a continuous build?",
      "options": [
        "A build that runs non-stop, over and over again.",
        "A build that has not failed in 10 continuous attempts.",
        "A build that is executed every hour/day by a continuous integration server.",
        "A build that is executed on every commit by a continuous integration server."
      ],
      "correct": 3
    },
    {
      "q": "DevOps is primarily about:",
      "options": [
        "Tools and their usage",
        "Processes and adherence",
        "Governance and audit processes",
        "Tools, processes, and culture"
      ],
      "correct": 3
    },
    {
      "q": "Which statement best describes the relationship between DevOps and Continuous Delivery?",
      "options": [
        "DevOps and Continuous Delivery are the same thing.",
        "DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking.",
        "DevOps and Continuous Delivery share common processes.",
        "DevOps and Continuous Delivery are not related and are mutually exclusive."
      ],
      "correct": 1
    },
    {
      "q": "How does a DevOps organization act in principle when it comes to financing its work?",
      "options": [
        "It finances special projects to serve its clients.",
        "It finances products and services to serve its clients.",
        "It finances teams in matrix organizations responsible for their own budgets.",
        "It finances development and operations teams separately."
      ],
      "correct": 1
    },
    {
      "q": "POM in Maven stands for ________.",
      "options": [
        "Project Object Model",
        "Process Object Model",
        "Project Object Method",
        "All of the above"
      ],
      "correct": 0
    },
    {
      "q": "What is a widely used reusable asset to reinforce information security of deliverables from your DevOps team?",
      "options": [
        "Data storage systems",
        "Handling the logging of sensitive client information",
        "Data transfer between clients and software",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "DevOps is NOT a set of ______ steps.",
      "options": [
        "Development",
        "Fixed",
        "Testing",
        "Design"
      ],
      "correct": 1
    },
    {
      "q": "What is the sequence in which Maven looks for resources?",
      "options": [
        "Local -> Remote -> Maven Central",
        "Remote -> Maven Central -> Local",
        "Remote -> Local -> Maven Central",
        "Maven Central -> Local -> Remote"
      ],
      "correct": 0
    },
    {
      "q": "Why is it recommended that production and development environments should be similar?",
      "options": [
        "It is easier to manage for the ops team.",
        "It improves testing accuracy, eases deployment, and reduces chances of major problems in production.",
        "People can fix defects directly in the production environment.",
        "Development environments are cheaper."
      ],
      "correct": 1
    },
    {
      "q": "DevOps can be implemented in any _________.",
      "options": [
        "Process",
        "Environment",
        "Defects",
        "None of the above"
      ],
      "correct": 1
    },
    {
      "q": "What is continuous deployment?",
      "options": [
        "Deployment on every code push/commit",
        "Deployment every hour/day",
        "Local deployment on the developer's laptop",
        "Deployment on IBM Cloud"
      ],
      "correct": 0
    },
    {
      "q": "In DevOps, one of the significant ROI areas is:",
      "options": [
        "Zero defects",
        "Faster time to value",
        "Less feedback",
        "Less customer experience"
      ],
      "correct": 1
    },
    {
      "q": "How do you remove local (untracked) files and directories from the current Git working tree?",
      "options": [
        "Only: git clean -f",
        "Only: git delete -f / git remove -f -d",
        "Only: git clean -f (and git clean -fd for directories)",
        "All of: git clean -f, git delete -f, git remove -f -d, git add --all, git reset --hard HEAD"
      ],
      "correct": 2
    },
    {
      "q": "What does it mean to publish a REST service in Spring? (i) Publishing data as JSON (ii) Publishing data as XML (iii) Sharing DB between microservices using DAO",
      "options": [
        "Only i",
        "Only i and ii",
        "Only ii",
        "All of the above"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following statements is true about microservices architecture? (i) must deploy on same host (ii) supports high availability of individual microservices (iii) cannot be used with DevOps (iv) designed using bounded context communicating with other bounded contexts",
      "options": [
        "Only i",
        "Only ii",
        "Only ii and iv",
        "All of the above"
      ],
      "correct": 2
    },
    {
      "q": "Can the subclass that the Spring container generates (e.g. via CGLIB proxying) be created from a final class?",
      "options": [
        "No",
        "Yes"
      ],
      "correct": 0
    },
    {
      "q": "How do you shut down the Spring IoC container gracefully in non-web applications?",
      "options": [
        "Using shutdownNow()",
        "registerShutdownHook()"
      ],
      "correct": 1
    },
    {
      "q": "What kind of information does 'docker system df' show you?",
      "options": [
        "Container network settings",
        "Disk usage of images, containers, and volumes",
        "Docker daemon version",
        "Running container CPU usage"
      ],
      "correct": 1
    },
    {
      "q": "Which Dockerfile instruction initializes a new build stage and sets the base image?",
      "options": [
        "FROM",
        "BASE",
        "RUN",
        "IMAGE"
      ],
      "correct": 0
    },
    {
      "q": "Which service mode deploys a single task of a service to each node in a swarm?",
      "options": [
        "Replicated",
        "Global",
        "Constrained",
        "Local"
      ],
      "correct": 1
    },
    {
      "q": "Which description best fits a DaemonSet?",
      "options": [
        "A way to run a copy of a pod on all or some nodes",
        "A load balancer for services",
        "A storage class for persistent volumes",
        "A single long-running batch job"
      ],
      "correct": 0
    },
    {
      "q": "What is the default format of `docker inspect` output?",
      "options": [
        "YAML",
        "JSON",
        "XML",
        "Plain text"
      ],
      "correct": 1
    },
    {
      "q": "What does `docker image prune` do?",
      "options": [
        "Removes all containers",
        "Removes unused (dangling) images",
        "Removes all volumes",
        "Removes all networks"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between ADD and COPY in a Dockerfile?",
      "options": [
        "ADD supports remote URL handling and auto-extraction, COPY does not",
        "COPY supports remote URLs, ADD does not",
        "There is no difference",
        "ADD only works with directories, COPY only with files"
      ],
      "correct": 0
    },
    {
      "q": "What does the Dockerfile LABEL instruction do?",
      "options": [
        "Adds metadata (key/value) to an image",
        "Sets an environment variable",
        "Defines a build argument",
        "Exposes a network port"
      ],
      "correct": 0
    },
    {
      "q": "What does the Dockerfile EXPOSE instruction do?",
      "options": [
        "Publishes the port to the host automatically",
        "Informs Docker that the container listens on the specified port (documentation only, unless combined with -p)",
        "Opens a firewall rule on the host",
        "Creates a new network"
      ],
      "correct": 1
    },
    {
      "q": "What is true about using the `-P` (capital) option with `docker run`?",
      "options": [
        "It disables all networking",
        "Docker binds each exposed container port to a random host port",
        "It pulls the image before running",
        "It runs the container in privileged mode"
      ],
      "correct": 1
    },
    {
      "q": "Which Docker commands can be used to find all port mappings for a container?",
      "options": [
        "docker inspect, docker ps, docker port",
        "docker network ls only",
        "docker top only",
        "docker stats only"
      ],
      "correct": 0
    },
    {
      "q": "Which is NOT a valid way to tag a Docker image?",
      "options": [
        "Tag by repository:tag name",
        "Tag by image ID alone as if it were a repository name",
        "Tag during build with -t",
        "Tag an existing image with `docker tag`"
      ],
      "correct": 1
    },
    {
      "q": "What is a label in Kubernetes?",
      "options": [
        "A container's log file",
        "A way to group and select related objects using key/value pairs",
        "A network policy rule",
        "A type of persistent volume"
      ],
      "correct": 1
    },
    {
      "q": "What can you deploy on Kubernetes?",
      "options": [
        "Only virtual machines",
        "Containers (packaged as pods)",
        "Only bare-metal servers",
        "Only serverless functions"
      ],
      "correct": 1
    },
    {
      "q": "Which command is used to create a Service in Kubernetes?",
      "options": [
        "kubectl expose",
        "kubectl create service-only",
        "kubectl deploy",
        "kubectl attach"
      ],
      "correct": 0
    },
    {
      "q": "What is the function of a node in a Kubernetes cluster?",
      "options": [
        "To store cluster configuration only",
        "To run pods according to instructions from the master/control-plane components",
        "To act only as a DNS server",
        "To manage user authentication"
      ],
      "correct": 1
    },
    {
      "q": "OpenShift is built on top of which container orchestration platform?",
      "options": [
        "Docker Swarm",
        "Kubernetes",
        "Apache Mesos",
        "Nomad"
      ],
      "correct": 1
    },
    {
      "q": "What is a Pod in Kubernetes?",
      "options": [
        "A single running container with no networking",
        "A group of one or more application containers with shared storage/volumes and a shared IP address",
        "A worker node",
        "A persistent volume claim"
      ],
      "correct": 1
    },
    {
      "q": "What is a Kubernetes Volume?",
      "options": [
        "A directory containing data, accessible to the containers in a pod",
        "A type of Service",
        "A CPU/memory resource limit",
        "A network interface"
      ],
      "correct": 0
    },
    {
      "q": "What is a kubelet?",
      "options": [
        "A load balancer for services",
        "A node agent that manages pods and their containers on a node",
        "The central API server",
        "A CLI tool for developers only"
      ],
      "correct": 1
    },
    {
      "q": "What is etcd used for in Kubernetes?",
      "options": [
        "To store all cluster data and maintain cluster state",
        "To run application containers",
        "To route external traffic",
        "To build container images"
      ],
      "correct": 0
    },
    {
      "q": "At its core, Kubernetes is a platform for:",
      "options": [
        "Running and scheduling container applications on a cluster",
        "Building container images",
        "Managing relational databases",
        "Serving static websites"
      ],
      "correct": 0
    },
    {
      "q": "What runs on each node to ensure containers are running as expected within a pod?",
      "options": [
        "kubelet",
        "etcd",
        "kube-scheduler",
        "kube-apiserver"
      ],
      "correct": 0
    },
    {
      "q": "What is a 'cluster' in this context?",
      "options": [
        "A single system made up of several other resources (nodes) working together",
        "A single standalone container",
        "A single Dockerfile",
        "A single persistent volume"
      ],
      "correct": 0
    },
    {
      "q": "What is a proxy service used for (e.g. kube-proxy)?",
      "options": [
        "To act as an intermediary between endpoint servers/services and route traffic",
        "To compile source code",
        "To store cluster secrets",
        "To build Docker images"
      ],
      "correct": 0
    },
    {
      "q": "Which servers run the Kubernetes control-plane components in OpenShift?",
      "options": [
        "Workers",
        "Masters",
        "Registries",
        "Routers"
      ],
      "correct": 1
    },
    {
      "q": "Which resource sets default request/limit values for containers in a namespace?",
      "options": [
        "ResourceQuota",
        "LimitRange",
        "PodDisruptionBudget",
        "NetworkPolicy"
      ],
      "correct": 1
    },
    {
      "q": "What is the mission of the control plane?",
      "options": [
        "To regulate/coordinate communication and scheduling across the Kubernetes cluster",
        "To store container images",
        "To run user application code directly",
        "To provide DNS resolution only"
      ],
      "correct": 0
    },
    {
      "q": "The 'shift-left' concept refers to moving testing to an earlier phase in the ________ cycle.",
      "options": [
        "Requirement",
        "Development",
        "Design",
        "Testing"
      ],
      "correct": 1
    },
    {
      "q": "Can GIT be integrated with Jenkins?",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "What is the primary purpose of Docker?",
      "options": [
        "Code compilation",
        "Containerization",
        "Version control",
        "Load balancing"
      ],
      "correct": 1
    },
    {
      "q": "Which command builds a Docker image?",
      "options": [
        "docker run",
        "docker build",
        "docker push",
        "docker pull"
      ],
      "correct": 1
    },
    {
      "q": "What does CI/CD stand for?",
      "options": [
        "Continuous Integration / Continuous Deployment",
        "Code Inspection / Code Delivery",
        "Continuous Improvement / Continuous Development",
        "Code Integration / Code Deployment"
      ],
      "correct": 0
    },
    {
      "q": "Which tool manages container orchestration?",
      "options": [
        "Jenkins",
        "Kubernetes",
        "Git",
        "Ansible"
      ],
      "correct": 1
    },
    {
      "q": "What does nginx -g \"daemon off;\" do inside a Docker container?",
      "options": [
        "Runs NGINX in the background",
        "Runs NGINX in the foreground",
        "Stops NGINX",
        "Restarts NGINX"
      ],
      "correct": 1
    },
    {
      "q": "Which file defines a Jenkins pipeline?",
      "options": [
        "Dockerfile",
        "Jenkinsfile",
        "pom.xml",
        "build.gradle"
      ],
      "correct": 1
    },
    {
      "q": "What is Infrastructure as Code?",
      "options": [
        "Manual server setup",
        "Defining infrastructure using scripts/config files",
        "Database management",
        "Application deployment"
      ],
      "correct": 1
    },
    {
      "q": "Which AWS service manages containerized applications?",
      "options": [
        "EC2",
        "ECS",
        "S3",
        "RDS"
      ],
      "correct": 1
    },
    {
      "q": "Which release pattern does NOT enable low-risk DevOps production deployments?",
      "options": [
        "Canary Deployment (Dark Launch)",
        "Blue-Green Deployment",
        "Cluster Immune System Release Pattern",
        "Big bang deployment of fully tested releases"
      ],
      "correct": 3
    },
    {
      "q": "Service discovery tools help by reducing the problem of how processes/services in a cluster find and talk to each other.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "What are the core operations of DevOps with application development and infrastructure?",
      "options": [
        "Provisioning, Configuration, and Orchestration",
        "Code building, coverage, and Unit testing",
        "Packaging and Deployment",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What is a key benefit of microservices architecture?",
      "options": [
        "Monolithic codebase",
        "Independent scalability",
        "Tight coupling",
        "A single shared database"
      ],
      "correct": 1
    },
    {
      "q": "Which pattern helps ensure loose coupling between microservices?",
      "options": [
        "Circuit Breaker",
        "Service Registry",
        "Event-Driven architecture",
        "Monolith pattern"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following statements is true about microservices architecture?",
      "options": [
        "Must be deployed on the same physical host",
        "Supports high availability of individual services",
        "Cannot be used with DevOps",
        "Are designed using bounded contexts that communicate with other bounded contexts"
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "q": "Load balancing improves the distribution of workloads across multiple computing resources.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Publishing an application's data as a REST service in Spring typically means:",
      "options": [
        "Publishing data as JSON over REST",
        "Publishing data as XML over REST",
        "Sharing a database directly between two microservices via DAO",
        "Both publishing as JSON and as XML over REST"
      ],
      "correct": 3
    },
    {
      "q": "After initializing a new Git repository and creating git-quiz.html, which command will NOT work if issued immediately?",
      "options": [
        "git add git-quiz.html",
        "git status",
        "git add .",
        "git commit -m \"git quiz web file added\" (without staging first)"
      ],
      "correct": 3
    }
  ],
  "htmlcss": [
    {
      "q": "What is the correct HTML5 doctype declaration?",
      "options": [
        "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 5.0//EN\">",
        "<!DOCTYPE html>",
        "<!DOCTYPE HTML5>",
        "<doctype html>"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following correctly describes the difference between an HTML element and an HTML tag?",
      "options": [
        "They are identical terms and can be used interchangeably",
        "A tag is just the opening marker; an element includes the opening tag, content, and closing tag",
        "An element is only the text content inside the tags",
        "A tag includes both the opening and closing markers; an element is only the opening marker"
      ],
      "correct": 1
    },
    {
      "q": "What will be the rendered output of: <h1>Hello <span style='display:none'>World</span></h1>?",
      "options": [
        "Hello World",
        "Hello",
        "Hello  (with extra space)",
        "An error is thrown"
      ],
      "correct": 1
    },
    {
      "q": "Which attribute is mandatory for an <img> element to be considered accessible?",
      "options": [
        "title",
        "src",
        "alt",
        "aria-label"
      ],
      "correct": 2
    },
    {
      "q": "In the HTML parent/child structure, which statement is correct about sibling elements?",
      "options": [
        "Siblings share the same parent element",
        "Siblings are elements nested inside each other",
        "A sibling is always the first child of its parent",
        "Siblings must be the same HTML tag type"
      ],
      "correct": 0
    },
    {
      "q": "What is the correct way to open a hyperlink in a new browser tab?",
      "options": [
        "<a href='url' window='new'>",
        "<a href='url' target='_blank'>",
        "<a href='url' open='tab'>",
        "<a href='url' target='new-tab'>"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML element should be used to represent a list where the order of items does NOT matter?",
      "options": [
        "<ol>",
        "<dl>",
        "<ul>",
        "<list>"
      ],
      "correct": 2
    },
    {
      "q": "Given this HTML: <ol start='5' reversed><li>Item</li><li>Item</li></ol>, what numbers will the list items display?",
      "options": [
        "5, 6",
        "1, 2",
        "5, 4",
        "4, 5"
      ],
      "correct": 2
    },
    {
      "q": "Which is the correct HTML to create a table cell that spans 2 columns and 2 rows?",
      "options": [
        "<td colspan='2' rowspan='2'>",
        "<td colspread='2' rowspread='2'>",
        "<td span-col='2' span-row='2'>",
        "<td columns='2' rows='2'>"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the <caption> element inside a <table>?",
      "options": [
        "It adds a tooltip to the table on hover",
        "It provides a title or description for the table, aiding accessibility",
        "It defines the table's column headers",
        "It styles the table border"
      ],
      "correct": 1
    },
    {
      "q": "Which form element attribute prevents a user from submitting a form if the field is empty, without using JavaScript?",
      "options": [
        "validate='true'",
        "mandatory",
        "required",
        "notnull"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between <input type='submit'> and <button type='submit'>?",
      "options": [
        "They are functionally identical with no differences",
        "<button> can contain HTML content (icons, bold text) while <input> only shows plain text",
        "<input type='submit'> works without a form; <button> requires a form parent",
        "<button> always uses GET method; <input type='submit'> uses POST"
      ],
      "correct": 1
    },
    {
      "q": "In HTML, what is the correct use of the <fieldset> and <legend> elements?",
      "options": [
        "<fieldset> groups related form controls; <legend> provides a caption for the group",
        "<fieldset> adds a border to inputs; <legend> labels individual inputs",
        "<legend> groups form elements; <fieldset> labels the group",
        "<fieldset> is used for layout; <legend> is its heading tag"
      ],
      "correct": 0
    },
    {
      "q": "What does the 'for' attribute in a <label> element do?",
      "options": [
        "It iterates over form inputs like a for loop",
        "It applies a CSS class to the input it references",
        "It programmatically associates the label with the input whose id matches the 'for' value",
        "It sets the default value for the associated input"
      ],
      "correct": 2
    },
    {
      "q": "What is the semantic difference between <strong> and <b>?",
      "options": [
        "Both are identical; <b> is just an older version of <strong>",
        "<strong> indicates strong importance; <b> is for stylistic bold with no implied importance",
        "<b> indicates strong importance; <strong> is for stylistic bold",
        "<strong> is block-level; <b> is inline"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML element is used to define an abbreviation and provide its full expansion?",
      "options": [
        "<acronym>",
        "<dfn>",
        "<abbr>",
        "<short>"
      ],
      "correct": 2
    },
    {
      "q": "What is the correct use of the HTML <address> element?",
      "options": [
        "It is used for any mailing address on the page",
        "It provides contact information for its nearest <article> or <body> ancestor",
        "It is only for email addresses",
        "It creates a clickable address that opens Google Maps"
      ],
      "correct": 1
    },
    {
      "q": "The HTML <time> element with the attribute datetime='2025-08-15' is best described as:",
      "options": [
        "Displaying a countdown timer on the page",
        "Providing a machine-readable date to improve SEO and accessibility",
        "Automatically formatting the visible date based on user's locale",
        "Setting a deadline for form submission"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the <aside> element in HTML5?",
      "options": [
        "It must always appear in a sidebar column of a page layout",
        "It represents content tangentially related to the content around it, like a sidebar or callout",
        "It is a non-semantic container identical to <div>",
        "It is used for hidden content not visible to the user"
      ],
      "correct": 1
    },
    {
      "q": "Which heading level creates the largest text by default in HTML?",
      "options": [
        "<h6>",
        "<h3>",
        "<h1>",
        "All headings are the same size by default"
      ],
      "correct": 2
    },
    {
      "q": "In CSS, which statement correctly describes 'inheritance'?",
      "options": [
        "All CSS properties are automatically passed from parent to child elements",
        "Only certain properties like font-size and color are inherited by child elements by default",
        "Inherited styles always override directly applied styles",
        "Only block-level elements can inherit styles"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between inline styles, internal styles, and external stylesheets in terms of maintainability?",
      "options": [
        "Inline styles are the most maintainable because they are closest to the HTML",
        "External stylesheets are most maintainable as styles are centralized and reusable across pages",
        "Internal styles are most maintainable because they avoid extra HTTP requests",
        "All three are equally maintainable"
      ],
      "correct": 1
    },
    {
      "q": "Given this CSS: body { font-size: 16px; } p { font-size: 1.5em; } span { font-size: 1.5em; } — if a <span> is inside a <p>, what is the computed font size of the span?",
      "options": [
        "24px",
        "36px",
        "16px",
        "32px"
      ],
      "correct": 1
    },
    {
      "q": "What unit should you use if you want an element's font-size to always be relative to the root element's font-size?",
      "options": [
        "em",
        "px",
        "rem",
        "%"
      ],
      "correct": 2
    },
    {
      "q": "A CSS rule states: div { width: 50%; }. What is this 50% relative to?",
      "options": [
        "The viewport width",
        "The div's own font-size",
        "The width of the div's containing (parent) block",
        "The width of the <body> element"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS selector targets only <p> elements that are direct children of a <div>?",
      "options": [
        "div p",
        "div + p",
        "div > p",
        "div ~ p"
      ],
      "correct": 2
    },
    {
      "q": "What does the CSS adjacent sibling combinator (+) do in the rule: h2 + p { color: red; }?",
      "options": [
        "Styles all <p> elements that come after any <h2>",
        "Styles the first <p> element that immediately follows an <h2> at the same level",
        "Styles all siblings of <h2> including <p>",
        "Styles all <p> elements inside <h2>"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS rule correctly groups selectors to apply the same style to h1, h2, and h3?",
      "options": [
        "h1 h2 h3 { color: blue; }",
        "h1 > h2 > h3 { color: blue; }",
        "h1, h2, h3 { color: blue; }",
        "h1 + h2 + h3 { color: blue; }"
      ],
      "correct": 2
    },
    {
      "q": "What is the CSS specificity value (inline, IDs, classes, elements) for the selector: #header .nav > li:hover?",
      "options": [
        "(0, 1, 2, 1)",
        "(0, 1, 1, 1)",
        "(0, 0, 2, 1)",
        "(0, 1, 0, 2)"
      ],
      "correct": 0
    },
    {
      "q": "If two CSS rules have the same specificity, which one takes precedence?",
      "options": [
        "The first rule declared in the stylesheet",
        "The rule defined in the external stylesheet",
        "The last rule declared in the stylesheet",
        "The rule with more properties"
      ],
      "correct": 2
    },
    {
      "q": "What does !important do in CSS, and why should its use be minimized?",
      "options": [
        "It increases the selector's specificity by one point; it is fine to use frequently",
        "It overrides all other declarations regardless of specificity, making the cascade hard to manage and debug",
        "It only applies to inherited properties and has no effect on directly set properties",
        "It marks a property as required; the browser throws an error if the property is missing"
      ],
      "correct": 1
    },
    {
      "q": "In the CSS box model, what does the 'padding' property affect?",
      "options": [
        "The space outside the border, between the element and its neighbors",
        "The space between the content and the border of the element",
        "The thickness of the border",
        "The space between the element's text and the viewport edge"
      ],
      "correct": 1
    },
    {
      "q": "With box-sizing: border-box applied, if a div has width: 300px, padding: 20px, and border: 5px, what is the actual width of the content area?",
      "options": [
        "300px",
        "250px",
        "270px",
        "350px"
      ],
      "correct": 1
    },
    {
      "q": "What CSS border shorthand correctly sets a 2px solid red border?",
      "options": [
        "border: 2px, solid, red;",
        "border: red 2px solid;",
        "border: 2px solid red;",
        "border-all: 2px solid red;"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS property controls whether a background image repeats, and what value prevents repetition entirely?",
      "options": [
        "background-position: center;",
        "background-repeat: no-repeat;",
        "background-attachment: fixed;",
        "background-size: cover;"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between background-size: cover and background-size: contain?",
      "options": [
        "cover scales the image to fit entirely within the element; contain scales it to fill the element completely",
        "cover scales the image to fill the element completely (may crop); contain scales it to fit entirely without cropping",
        "They are identical in behavior",
        "cover is for block elements; contain is for inline elements"
      ],
      "correct": 1
    },
    {
      "q": "What happens to an element when you apply float: left to it?",
      "options": [
        "It is removed from the normal document flow and positioned to the left, allowing text/elements to wrap around it",
        "It is absolutely positioned at the left edge of the viewport",
        "It becomes an inline element aligned to the left",
        "It is fixed to the left side of the screen when scrolling"
      ],
      "correct": 0
    },
    {
      "q": "What does the CSS clear: both property do when applied to an element?",
      "options": [
        "Removes all styles from the element",
        "Prevents the element from being floated in any direction",
        "Ensures the element drops below any preceding floated elements on both sides",
        "Clears the element's padding and margin"
      ],
      "correct": 2
    },
    {
      "q": "What is a 'clearfix' hack and why is it used?",
      "options": [
        "A CSS reset that removes browser default styles",
        "A technique to force a parent container to expand and contain its floated children",
        "A method to prevent CSS transitions from running",
        "A way to clear the browser cache with CSS"
      ],
      "correct": 1
    },
    {
      "q": "What is the default value of the CSS position property?",
      "options": [
        "relative",
        "fixed",
        "static",
        "inherit"
      ],
      "correct": 2
    },
    {
      "q": "What is the key difference between position: absolute and position: fixed?",
      "options": [
        "absolute is positioned relative to its nearest positioned ancestor; fixed is positioned relative to the viewport and does not scroll",
        "fixed is positioned relative to its parent; absolute is relative to the viewport",
        "absolute elements are removed from flow; fixed elements are not",
        "They behave identically in all cases"
      ],
      "correct": 0
    },
    {
      "q": "An element has position: absolute. What happens if none of its ancestor elements have a position other than static?",
      "options": [
        "The browser throws a CSS error",
        "The element is positioned relative to the <body> element",
        "The element is positioned relative to the initial containing block (typically the viewport)",
        "The element reverts to position: relative"
      ],
      "correct": 2
    },
    {
      "q": "What does the z-index property control, and what is required for it to take effect?",
      "options": [
        "It controls element zoom level and always applies to any element",
        "It controls stacking order on the z-axis and requires the element to have a position value other than static",
        "It controls opacity layering and requires display: block",
        "It sets the rendering depth for 3D transforms and only works with perspective"
      ],
      "correct": 1
    },
    {
      "q": "What is the CSS display difference between a <div> and a <span> by default?",
      "options": [
        "<div> is inline; <span> is block",
        "<div> is block-level; <span> is inline",
        "Both are block-level by default",
        "Both are inline by default"
      ],
      "correct": 1
    },
    {
      "q": "What does display: inline-block allow you to do that display: inline does not?",
      "options": [
        "Apply width, height, and vertical margin/padding to the element while keeping it in the text flow",
        "Float the element to the left or right",
        "Nest block elements inside it",
        "Stack elements vertically"
      ],
      "correct": 0
    },
    {
      "q": "Which CSS property and value hides an element but still occupies its space in the layout?",
      "options": [
        "display: none",
        "visibility: hidden",
        "opacity: 0",
        "Both B and C"
      ],
      "correct": 3
    },
    {
      "q": "What is the correct CSS to style an anchor link that has already been visited?",
      "options": [
        "a:active { color: purple; }",
        "a:hover { color: purple; }",
        "a:visited { color: purple; }",
        "a:focus { color: purple; }"
      ],
      "correct": 2
    },
    {
      "q": "What is the correct order for link pseudo-classes to avoid specificity conflicts? (mnemonic: LoVe HAte or LoVe-Fear-Hate)",
      "options": [
        ":active, :visited, :hover, :link",
        ":link, :hover, :visited, :active",
        ":link, :visited, :hover, :active",
        ":hover, :link, :visited, :active"
      ],
      "correct": 2
    },
    {
      "q": "How do you style a form input to change its border color to blue when it receives focus?",
      "options": [
        "input:active { border-color: blue; }",
        "input:hover { border-color: blue; }",
        "input:focus { border-color: blue; }",
        "input:selected { border-color: blue; }"
      ],
      "correct": 2
    },
    {
      "q": "What does the CSS rule input[type='text'] { ... } demonstrate?",
      "options": [
        "A class selector",
        "An attribute selector targeting inputs with a specific type value",
        "A pseudo-class selector",
        "An ID selector"
      ],
      "correct": 1
    },
    {
      "q": "What is the CSS descendant selector, and how does it differ from a child selector?",
      "options": [
        "A descendant selector (space) matches any nested level; a child selector (>) matches only direct children",
        "A descendant selector (>) matches only direct children; a child selector (space) matches any nested level",
        "They are identical but use different syntax",
        "A descendant selector only works on <div> elements"
      ],
      "correct": 0
    },
    {
      "q": "Which CSS pseudo-element adds content before an element without modifying the HTML?",
      "options": [
        ":before",
        "::after",
        "::before",
        "Both ::before and :before (both syntaxes are valid)"
      ],
      "correct": 3
    },
    {
      "q": "Given: .box::after { content: ''; display: block; clear: both; } — what pattern does this represent?",
      "options": [
        "A CSS animation reset",
        "A clearfix pattern using a pseudo-element to contain floats",
        "A box-shadow replacement technique",
        "A CSS tooltip implementation"
      ],
      "correct": 1
    },
    {
      "q": "What is the CSS :nth-child() pseudo-class? Which selector targets every even-numbered list item?",
      "options": [
        "li:even { }",
        "li:nth-child(2) { }",
        "li:nth-child(even) { }",
        "li:every(2) { }"
      ],
      "correct": 2
    },
    {
      "q": "What is the difference between :nth-child(n) and :nth-of-type(n)?",
      "options": [
        "They are functionally identical",
        ":nth-child(n) counts all sibling elements; :nth-of-type(n) counts only siblings of the same tag type",
        ":nth-of-type(n) counts all siblings; :nth-child(n) counts only matching tag types",
        ":nth-child(n) applies only to lists; :nth-of-type(n) applies to all elements"
      ],
      "correct": 1
    },
    {
      "q": "What value of the CSS font-weight property renders text as bold?",
      "options": [
        "font-weight: heavy;",
        "font-weight: 600; (or higher, commonly 700)",
        "font-weight: 400;",
        "font-weight: strong;"
      ],
      "correct": 1
    },
    {
      "q": "What does the CSS shorthand font: italic bold 16px/1.5 'Arial', sans-serif declare?",
      "options": [
        "font-style, font-weight, font-size, letter-spacing, and font-family",
        "font-style, font-weight, font-size, line-height, and font-family",
        "font-style, font-weight, font-size, word-spacing, and font-family",
        "Only font-size and font-family; other values are invalid in shorthand"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of a CSS reset stylesheet (like Normalize.css)?",
      "options": [
        "It removes all default browser stylesheets and starts from zero styling",
        "It normalizes browser inconsistencies in default styles while preserving useful defaults",
        "It is the same as a CSS reset; Normalize.css and CSS reset are interchangeable",
        "It automatically generates responsive breakpoints"
      ],
      "correct": 1
    },
    {
      "q": "How do you correctly import an external CSS file within another CSS file?",
      "options": [
        "<link href='other.css'>",
        "@import url('other.css');",
        "include('other.css');",
        "@require 'other.css';"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS property controls the space between lines of text within a paragraph?",
      "options": [
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-spacing"
      ],
      "correct": 2
    },
    {
      "q": "What does the CSS property overflow: hidden do to an element?",
      "options": [
        "Makes the element transparent",
        "Clips any content that extends beyond the element's bounds, hiding the overflow",
        "Adds a scrollbar automatically when content overflows",
        "Prevents child elements from being positioned outside the parent"
      ],
      "correct": 1
    },
    {
      "q": "What CSS technique would you use to vertically and horizontally center a div of unknown dimensions inside its parent?",
      "options": [
        "margin: auto; on the child",
        "text-align: center; on the parent",
        "display: flex; justify-content: center; align-items: center; on the parent",
        "position: center; on the child"
      ],
      "correct": 2
    },
    {
      "q": "What will this CSS code produce? div { width: 100px; margin: 0 auto; }",
      "options": [
        "The div will be pinned to the top of the page",
        "The div will be horizontally centered within its block-level parent",
        "The div will have zero margin on all sides",
        "The div will be vertically centered within its parent"
      ],
      "correct": 1
    },
    {
      "q": "In CSS, what is 'specificity' and how is it calculated?",
      "options": [
        "Specificity is the order of rules; later rules win",
        "Specificity is a weight system: inline styles > IDs > classes/attributes/pseudo-classes > elements/pseudo-elements",
        "Specificity is determined by the file size of the stylesheet",
        "Specificity applies only to inherited properties"
      ],
      "correct": 1
    },
    {
      "q": "Consider: .nav li a { color: blue; } and #main a { color: red; }. Both apply to an <a> inside an <li> inside .nav and #main. Which color wins?",
      "options": [
        "blue, because .nav li a has more selectors",
        "red, because the ID selector (#main) has higher specificity than a class selector",
        "blue, because class selectors always beat ID selectors",
        "The last declared rule wins regardless of specificity"
      ],
      "correct": 1
    },
    {
      "q": "What is the HTML <meta charset='UTF-8'> declaration used for?",
      "options": [
        "It sets the language of the document",
        "It specifies the character encoding so the browser renders text correctly",
        "It is required for SEO and search engine ranking",
        "It links the HTML page to a CSS stylesheet"
      ],
      "correct": 1
    },
    {
      "q": "What is the role of the <meta name='viewport' content='width=device-width, initial-scale=1'> tag?",
      "options": [
        "It enables GPU-accelerated rendering on mobile",
        "It tells the browser to match the page width to the device screen width at 1:1 scale, essential for responsive design",
        "It sets the default zoom level for desktop browsers",
        "It prevents users from zooming into the page"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML element goes inside <head> and does NOT directly render visible content?",
      "options": [
        "<header>",
        "<h1>",
        "<meta>",
        "<section>"
      ],
      "correct": 2
    },
    {
      "q": "What is the correct way to add a comment in HTML?",
      "options": [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "## This is a comment"
      ],
      "correct": 2
    },
    {
      "q": "What is the correct CSS comment syntax?",
      "options": [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */",
        "# This is a comment"
      ],
      "correct": 2
    },
    {
      "q": "Which HTML5 input type provides a date picker in most modern browsers?",
      "options": [
        "<input type='calendar'>",
        "<input type='datepicker'>",
        "<input type='date'>",
        "<input type='datetime'>"
      ],
      "correct": 2
    },
    {
      "q": "What is the use of the <datalist> element in HTML5 forms?",
      "options": [
        "It creates a multi-select dropdown list",
        "It provides a list of predefined options for autocomplete suggestions on an input",
        "It replaces the <select> element with a searchable list",
        "It is used to list data tables inside a form"
      ],
      "correct": 1
    },
    {
      "q": "What is the default behavior of the CSS margin property on block-level elements when set to margin: 0 auto?",
      "options": [
        "It removes all margins and applies 'auto' as a fallback",
        "It centers the element horizontally by distributing available horizontal space equally on both sides",
        "It centers the element both horizontally and vertically",
        "It is invalid CSS and will be ignored by browsers"
      ],
      "correct": 1
    },
    {
      "q": "What is 'margin collapsing' in CSS?",
      "options": [
        "When margins from two adjacent block elements combine into a single margin equal to the larger of the two",
        "When a margin is set to 0 and collapses to a negative value",
        "When margins are removed from floated elements",
        "When margin and padding conflict and the browser ignores the margin"
      ],
      "correct": 0
    },
    {
      "q": "Which CSS rule makes the header sticky so it stays at the top of the viewport when the user scrolls?",
      "options": [
        "header { position: fixed; top: 0; }",
        "header { position: sticky; top: 0; }",
        "header { float: top; }",
        "Both A and B achieve the same result"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS property controls the stacking context and visual layering of overlapping elements?",
      "options": [
        "layer-order",
        "display-order",
        "z-index",
        "stack-level"
      ],
      "correct": 2
    },
    {
      "q": "How do you use CSS to apply styles exclusively when the viewport width is 768px or less?",
      "options": [
        "@screen (max-width: 768px) { }",
        "@media screen and (max-width: 768px) { }",
        "@viewport (768px) { }",
        "@breakpoint max-768 { }"
      ],
      "correct": 1
    },
    {
      "q": "What does the HTML attribute data-* allow developers to do?",
      "options": [
        "Store data in an external database linked to the HTML element",
        "Embed custom private data attributes in HTML elements for use by scripts",
        "Declare the data type of an input field",
        "Link datasets to table elements"
      ],
      "correct": 1
    },
    {
      "q": "What is the CSS :not() pseudo-class used for? Provide an example.",
      "options": [
        "It targets elements with a specific property: div:not(color) { }",
        "It selects elements that do NOT match the specified selector: li:not(.active) { } selects all li without class 'active'",
        "It negates all styles applied to an element",
        "It is used to exclude elements from inheritance"
      ],
      "correct": 1
    },
    {
      "q": "What does the CSS property white-space: nowrap do?",
      "options": [
        "Collapses multiple white spaces into one",
        "Prevents text from wrapping to the next line",
        "Adds white space around an element",
        "Applies word-spacing of zero"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct HTML to make an image a hyperlink?",
      "options": [
        "<img src='pic.jpg' href='page.html'>",
        "<a href='page.html'><img src='pic.jpg' alt='desc'></a>",
        "<link href='page.html'><img src='pic.jpg'></link>",
        "<img src='pic.jpg' link='page.html'>"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS property is used to change the style of list item markers (bullets/numbers)?",
      "options": [
        "list-decoration",
        "bullet-style",
        "list-style-type",
        "marker-type"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS value for list-style-type would use uppercase Roman numerals?",
      "options": [
        "upper-roman",
        "roman-upper",
        "type-upper-roman",
        "roman"
      ],
      "correct": 0
    },
    {
      "q": "What is wrong with this CSS code: #myDiv { colour: red; font-size: 14; }?",
      "options": [
        "The selector syntax is incorrect",
        "'colour' is not a valid CSS property (should be 'color'), and font-size needs a unit (e.g., 14px)",
        "ID selectors cannot have more than one property",
        "The semicolon after the last property is incorrect"
      ],
      "correct": 1
    },
    {
      "q": "In CSS, how do you target an element with BOTH class 'active' and class 'highlight'?",
      "options": [
        ".active, .highlight { }",
        ".active .highlight { }",
        ".active.highlight { }",
        ".active + .highlight { }"
      ],
      "correct": 2
    },
    {
      "q": "What is the output of this CSS rule applied to a paragraph: p { text-transform: capitalize; } with content 'hello world'?",
      "options": [
        "HELLO WORLD",
        "hello world (no change)",
        "Hello World",
        "Hello world"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS property would you use to prevent a table's borders from doubling up between adjacent cells?",
      "options": [
        "border-collapse: collapse;",
        "border-spacing: 0;",
        "border-style: single;",
        "cell-border: merge;"
      ],
      "correct": 0
    },
    {
      "q": "What is the purpose of the <thead>, <tbody>, and <tfoot> elements in HTML tables?",
      "options": [
        "They are decorative; they don't affect table structure or accessibility",
        "They semantically group table rows for better accessibility, styling control, and browser rendering",
        "They are required for every HTML table or the table will not render",
        "They replace <tr> and <td> in modern HTML5"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between the HTML attributes 'id' and 'class'?",
      "options": [
        "Both can be applied to multiple elements; the difference is only stylistic",
        "An id must be unique per page; a class can be applied to multiple elements",
        "A class must be unique per page; an id can be applied to multiple elements",
        "id is for CSS only; class is for JavaScript only"
      ],
      "correct": 1
    },
    {
      "q": "What does the rel='noopener noreferrer' attribute do when used with target='_blank' on a link?",
      "options": [
        "It prevents the opened page from loading external resources",
        "It prevents the new tab from accessing the original page via window.opener and hides the referrer header, improving security",
        "It forces the link to open in an iframe",
        "It blocks the browser's back button for the new tab"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML element is used to embed a scalable vector graphic inline in HTML?",
      "options": [
        "<vector>",
        "<canvas>",
        "<svg>",
        "<graphic>"
      ],
      "correct": 2
    },
    {
      "q": "What is the CSS object-fit property used for?",
      "options": [
        "It controls how a replaced element (like <img> or <video>) fits within its container box",
        "It sets how CSS objects inherit properties",
        "It defines the stacking order of overlapping elements",
        "It applies a 3D transform to elements"
      ],
      "correct": 0
    },
    {
      "q": "What does the following code do: input:checked + label { font-weight: bold; }?",
      "options": [
        "Makes the label bold when the input receives focus",
        "Makes the label bold that immediately follows a checked input (works with checkboxes/radio buttons)",
        "Targets all labels that are siblings of any input",
        "It is invalid CSS because input and label cannot be combined"
      ],
      "correct": 1
    },
    {
      "q": "What CSS property controls the rendering direction of text (e.g., left-to-right or right-to-left)?",
      "options": [
        "text-align",
        "writing-mode",
        "direction",
        "flow"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following correctly applies multiple CSS classes to a single HTML element?",
      "options": [
        "<div class='box' class='red'>",
        "<div class='box, red'>",
        "<div class='box red'>",
        "<div classes='box red'>"
      ],
      "correct": 2
    },
    {
      "q": "What will the following CSS do: a { text-decoration: none; } a:hover { text-decoration: underline; }?",
      "options": [
        "All links will always be underlined",
        "Links will show no underline by default and show an underline only when hovered",
        "Links will have an underline that disappears on hover",
        "No underline will ever show because text-decoration: none overrides hover"
      ],
      "correct": 1
    },
    {
      "q": "What is the HTML5 <figure> element typically paired with, and what is its purpose?",
      "options": [
        "<img>; to add a border around images",
        "<figcaption>; to associate a caption with self-contained content like images, charts, or code snippets",
        "<caption>; to provide a title for a table",
        "<footer>; to add a footnote to a section"
      ],
      "correct": 1
    },
    {
      "q": "What is the CSS word-break: break-all property used for?",
      "options": [
        "It splits words into separate letters",
        "It forces line breaks between words only",
        "It allows long words or strings to be broken and wrapped at any character to prevent overflow",
        "It removes all word spacing"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS property would you use to add space between the content of a table cell and its border?",
      "options": [
        "cell-padding",
        "padding",
        "border-spacing",
        "margin"
      ],
      "correct": 1
    },
    {
      "q": "In a CSS hero section, what combination of properties would make a full-viewport-height section with a centered background image that always covers the section?",
      "options": [
        "height: 100%; background-size: auto;",
        "height: 100vh; background-size: cover; background-position: center;",
        "min-height: 500px; background-repeat: repeat;",
        "height: 100vw; background-size: contain;"
      ],
      "correct": 1
    },
    {
      "q": "What is the correct way to link a favicon (browser tab icon) in HTML?",
      "options": [
        "<meta name='favicon' content='favicon.ico'>",
        "<link rel='icon' href='favicon.ico' type='image/x-icon'>",
        "<img src='favicon.ico' id='favicon'>",
        "<link rel='favicon' src='favicon.ico'>"
      ],
      "correct": 1
    },
    {
      "q": "What is the purpose of the HTML <base> element?",
      "options": [
        "It defines the base font size for all text on the page",
        "It specifies the base URL for all relative URLs in the document and optionally a default target",
        "It sets the base background color of the page",
        "It is the root container element of all HTML documents"
      ],
      "correct": 1
    },
    {
      "q": "What does the CSS property cursor: pointer do when applied to a <div>?",
      "options": [
        "Makes the div respond to click events in JavaScript",
        "Changes the mouse cursor to a hand/pointer when hovering over the div, indicating it is clickable",
        "Makes the div draggable",
        "Enables touch events on mobile devices"
      ],
      "correct": 1
    },
    {
      "q": "What is the difference between the HTML <header> element and the <head> element?",
      "options": [
        "They are synonymous and can be used in place of each other",
        "<head> contains metadata not displayed on the page; <header> is a visible semantic section for introductory content",
        "<header> contains metadata; <head> is a visible content section",
        "<head> appears in the <body>; <header> appears outside the <body>"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is a valid way to use an ID selector in CSS?",
      "options": [
        ".myID { color: blue; }",
        "#myID { color: blue; }",
        "id.myID { color: blue; }",
        "@myID { color: blue; }"
      ],
      "correct": 1
    },
    {
      "q": "What does the HTML attribute 'tabindex' control?",
      "options": [
        "The number of tabs displayed in a browser window",
        "The order in which elements receive keyboard focus when the Tab key is pressed",
        "The indentation level of the element",
        "The z-index stacking order of overlapping elements"
      ],
      "correct": 1
    },
    {
      "q": "What will happen in this HTML: <p>Line 1<br>Line 2</p>?",
      "options": [
        "A new paragraph will begin after 'Line 1'",
        "A line break will be inserted inside the paragraph, placing 'Line 2' on the next line",
        "The <br> will be treated as invisible and both lines appear on the same line",
        "The browser will render an error symbol"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of this HTML: <p>Price: &lt;b&gt;100&lt;/b&gt;</p>?",
      "options": [
        "Price: 100 (with 100 in bold)",
        "Price: <b>100</b> (rendered as literal text, not bold)",
        "An HTML error occurs",
        "Price: b100b"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS property controls the opacity of an element, and what is the range of valid values?",
      "options": [
        "transparency: 0 to 100",
        "opacity: 0 to 1, where 0 is fully transparent and 1 is fully opaque",
        "alpha: 0 to 255",
        "opacity: 0% to 100%"
      ],
      "correct": 1
    },
    {
      "q": "What is a CSS 'stacking context' and what creates one?",
      "options": [
        "A named CSS layer created with @layer that controls cascade order",
        "A three-dimensional rendering context created whenever an element has position: static",
        "A self-contained layering environment created by certain CSS properties (like position + z-index, opacity < 1, transform, filter), within which z-index values are isolated",
        "An ordering system that is only created by the root HTML element"
      ],
      "correct": 2
    },
    {
      "q": "A <nav> element is placed inside a <footer>. Is this valid HTML5?",
      "options": [
        "No, <nav> can only appear once per page inside <header>",
        "Yes, <nav> can be used inside <footer> for secondary navigation such as site links",
        "No, <footer> cannot contain block-level elements",
        "Yes, but only if the <nav> contains at least 3 links"
      ],
      "correct": 1
    },
    {
      "q": "What is a CSS 'box shadow' and which property applies it? Give an example.",
      "options": [
        "shadow-box: 2px 2px 5px black; — adds a drop shadow",
        "box-shadow: 2px 2px 5px black; — offsets a shadow horizontally, vertically, with blur and color",
        "drop-shadow: 2px 2px 5px black; — applies a filter-based shadow",
        "element-shadow: offset-x offset-y blur color; — applies to block elements only"
      ],
      "correct": 1
    },
    {
      "q": "In HTML forms, what is the difference between GET and POST methods?",
      "options": [
        "GET appends data to the URL (visible, limited length); POST sends data in the request body (not visible in URL, no practical size limit)",
        "POST appends data to the URL; GET sends data in the request body",
        "GET is for file uploads; POST is for text inputs",
        "GET is more secure than POST because data is encrypted"
      ],
      "correct": 0
    },
    {
      "q": "What does the CSS universal selector (*) do?",
      "options": [
        "It selects only the root element of the document",
        "It selects every element on the page",
        "It selects all class attributes across the page",
        "It is a wildcard that only applies inside a specific selector"
      ],
      "correct": 1
    },
    {
      "q": "What is wrong with this HTML form: <form><input type='text' name='user'><input type='submit'></form> — from an accessibility standpoint?",
      "options": [
        "The form is missing an action attribute",
        "The text input is missing a <label> element, making it unclear to screen reader users what the field is for",
        "The submit button must have a name attribute",
        "The form method should be explicitly declared"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML5 element is used to represent self-contained content that can be independently reused?",
      "options": [
        "<section>",
        "<article>",
        "<div>",
        "<aside>"
      ],
      "correct": 1
    },
    {
      "q": "Which element is used for marking navigation links in HTML5?",
      "options": [
        "<menu>",
        "<nav>",
        "<aside>",
        "<header>"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is correct about the difference between <section> and <div>?",
      "options": [
        "Both are semantic",
        "<section> is semantic; <div> is non-semantic",
        "<div> is semantic; <section> is non-semantic",
        "Both are non-semantic"
      ],
      "correct": 1
    },
    {
      "q": "Which is NOT a valid HTML5 element?",
      "options": [
        "<main>",
        "<footer>",
        "<sidebar>",
        "<header>"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS3 feature allows you to create rounded corners?",
      "options": [
        "border-style",
        "border-radius",
        "corner-radius",
        "round-corner"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following creates a linear gradient background?",
      "options": [
        "linear-gradient(red, blue)",
        "background-gradient(red, blue)",
        "gradient(linear, red, blue)",
        "bg-linear(red, blue)"
      ],
      "correct": 0
    },
    {
      "q": "Which CSS3 property is used for transitions?",
      "options": [
        "motion",
        "transition",
        "animation",
        "effect"
      ],
      "correct": 1
    },
    {
      "q": "What will this code do: p::first-line { font-weight: bold; }?",
      "options": [
        "Makes entire paragraph bold",
        "Makes first sentence bold",
        "Makes first line bold",
        "Makes first word bold"
      ],
      "correct": 2
    },
    {
      "q": "Which CSS3 layout module allows flexible box-based design?",
      "options": [
        "CSS Grid",
        "Flexbox",
        "Float Layout",
        "Box Model"
      ],
      "correct": 1
    },
    {
      "q": "What does this rule do: div { display: grid; grid-template-columns: 1fr 2fr; }?",
      "options": [
        "Creates 2 equal columns",
        "Creates 2 columns, 1:2 ratio",
        "Creates 3 columns",
        "Invalid CSS3 rule"
      ],
      "correct": 1
    },
    {
      "q": "Which CSS3 property is used to apply a shadow to text?",
      "options": [
        "text-decoration",
        "text-shadow",
        "font-shadow",
        "box-shadow"
      ],
      "correct": 1
    },
    {
      "q": "What does the following CSS code achieve: div:hover { transform: rotate(15deg); }?",
      "options": [
        "Rotates the div permanently",
        "Rotates the div when hovered",
        "Rotates the background only",
        "No effect"
      ],
      "correct": 1
    },
    {
      "q": "The '<picture>' element is used primarily for:",
      "options": [
        "Embedding YouTube videos",
        "Providing responsive images with multiple sources",
        "Creating image maps with clickable areas",
        "Defining a container for SVG graphics"
      ],
      "correct": 1
    },
    {
      "q": "For the code '<label for='email-address'>Email:</label><input type='email' id='email-address' name='email'>', which attribute must be unique on the page?",
      "options": [
        "The 'for' attribute in the '<label>' tag",
        "The 'type' attribute in the '<input>' tag",
        "The 'id' attribute in the '<input>' tag",
        "The 'name' attribute in the '<input>' tag"
      ],
      "correct": 2
    },
    {
      "q": "What is the key semantic purpose of the '<article>' element compared to '<section>'?",
      "options": [
        "'<article>' is for standalone, distributable content, while '<section>' is for thematic grouping.",
        "'<article>' must always be nested inside a '<section>'.",
        "'<section>' is for standalone content, while '<article>' is for grouping.",
        "They are semantically identical and can be used interchangeably."
      ],
      "correct": 0
    },
    {
      "q": "Which input type would be most appropriate for selecting a value from a range of 1 to 100?",
      "options": [
        "<input type='number' min='1' max='100'>",
        "<input type='range' min='1' max='100'>",
        "Both A and B are equally appropriate.",
        "<input type='slider'>"
      ],
      "correct": 2
    },
    {
      "q": "To pre-select an '<option>' in a dropdown menu when the page loads, you use the attribute:",
      "options": [
        "selected='selected'",
        "checked='checked'",
        "default='true'",
        "value='selected'"
      ],
      "correct": 0
    },
    {
      "q": "Which tag is NOT a valid HTML5 semantic tag?",
      "options": [
        "<nav>",
        "<header>",
        "<frame>",
        "<aside>"
      ],
      "correct": 2
    },
    {
      "q": "The 'async' attribute in a '<script>' tag means:",
      "options": [
        "The script will be executed synchronously in the order it appears.",
        "The script will be downloaded asynchronously and executed immediately, pausing the parser.",
        "The script will be executed after the 'DOMContentLoaded' event.",
        "The script will only run if the user interacts with the page."
      ],
      "correct": 1
    },
    {
      "q": "To create a required text input field that must be filled out, you use:",
      "options": [
        "<input type='text' necessary='true'>",
        "<input type='text' validate='required'>",
        "<input type='text' required>",
        "<input type='text' mustfill='yes'>"
      ],
      "correct": 2
    },
    {
      "q": "The 'sandbox' attribute in an '<iframe>' is used to:",
      "options": [
        "Improve the loading performance of the iframe.",
        "Create a restricted environment for the content, enhancing security.",
        "Allow the iframe content to access the parent page's DOM.",
        "Enable seamless rendering of the iframe border."
      ],
      "correct": 1
    },
    {
      "q": "Which code snippet correctly links a document-level CSS style sheet?",
      "options": [
        "<link src='styles.css' rel='stylesheet'>",
        "<style href='styles.css'></style>",
        "<a rel='stylesheet' href='styles.css'>Style</a>",
        "<link href='styles.css' rel='stylesheet'>"
      ],
      "correct": 3
    },
    {
      "q": "Which selector has the highest specificity?",
      "options": [
        "#nav .list li a:hover",
        "html body header h1",
        "div > header > h1.title",
        "a:hover"
      ],
      "correct": 0
    },
    {
      "q": "Which code will create a 20px blur effect and move a div 30px to the right?",
      "options": [
        "filter: blur(20px) translateX(30px);",
        "effect: blur(20px); transform: translateX(30px);",
        "transform: blur(20px) translateX(30px);",
        "filter: blur(20px); transform: translateX(30px);"
      ],
      "correct": 3
    },
    {
      "q": "To style every '<p>' element that is the first child of its parent, you would use:",
      "options": [
        "p:first-of-type",
        "p:first-child",
        "p:nth-child(1)",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Whenever you are assigning two classes to a tag , you must separate them with a",
      "options": [
        "Space",
        "Comma",
        "Dash"
      ],
      "correct": 0
    },
    {
      "q": "____________ contains the navigation menu, or other navigation functionality for the page",
      "options": [
        "section",
        "header",
        "nav",
        "aside"
      ],
      "correct": 2
    },
    {
      "q": "The main purpose of the placeholder attribute in input controls is:",
      "options": [
        "Allow the end-user to remember the location in form",
        "There is no such attribute known as \"placeholder\"",
        "Allow the end-user to replace the data control with another",
        "Display \"watermark\" data to assist the end-user"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following values are accepted by the float Property?a) leftb) rightc) noned) all of the mentioned",
      "options": [
        "left",
        "right",
        "none",
        "all of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following CSS Property controls how an element is positioned?",
      "options": [
        "position",
        "set",
        "static",
        "fix"
      ],
      "correct": 0
    },
    {
      "q": "If You are designing a column to occupy 3 of the 12 columns in your desktop designWhat is the width in CSS",
      "options": [
        "Width:25%",
        "Width:33.3333%",
        "Width:21%"
      ],
      "correct": 0
    },
    {
      "q": "In what direction does float will work? img { float: right;​   }",
      "options": [
        "left",
        "top",
        "bottom",
        "right"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following CSS Property sets the stacking order of positioned elements?",
      "options": [
        "x-index",
        "y-index",
        "z-index"
      ],
      "correct": 2
    },
    {
      "q": "You indicate a class selector with",
      "options": [
        "the hash (#) symboL",
        "the dot (.)",
        "the tag"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following media queries would apply to a tabletreporting a screen width of 768px?",
      "options": [
        "@media only screen and (min-width: 1140px){}",
        "@media only screen and (min-width: 641px){}",
        "@media only screen and (max-width: 1140px){}"
      ],
      "correct": 1
    },
    {
      "q": "To get the first or nth child you use",
      "options": [
        "the nested selector",
        "A pseudo-class"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following rules allows users to import style rules from other style sheets?",
      "options": [
        "@media",
        "@important",
        "@import",
        "@style"
      ],
      "correct": 2
    },
    {
      "q": "I have a <p> which is the child of a <div> which is the child of a <section>, does the style in the section affect the p tag?",
      "options": [
        "Yes, inheritance accumulates",
        "No, only the immediate parent's style is inherited"
      ],
      "correct": 0
    },
    {
      "q": "Which HTML tag allows styling from an external .css file?",
      "options": [
        "link",
        "css",
        "style"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following properties sets the distance between an element’s right border and the rightmost edge of its content?",
      "options": [
        "auto",
        "padding-left",
        "padding-right",
        "Padding-top"
      ],
      "correct": 2
    },
    {
      "q": "What built-in functions allows you to convert a string into an integer?",
      "options": [
        "toInt()",
        "parseInt()",
        "toInteger()",
        "parseString()"
      ],
      "correct": 1
    },
    {
      "q": "What is the catch method for a promise?",
      "options": [
        "To compose two promises",
        "To listen to the result of a promise",
        "To listen only for a rejected promise",
        "There is no catch method on a promise"
      ],
      "correct": 2
    },
    {
      "q": "What is the effect of using await?",
      "options": [
        "The awaited function runs in parallel",
        "A promise is returned from a function instead of a value",
        "A value is returned from a function instead of a promise"
      ],
      "correct": 2
    },
    {
      "q": "What is a function in JavaScript?",
      "options": [
        "An instance of a class",
        "A statement that evaluates an expression",
        "A block of organized, reusable code that performs a single action",
        "Code that allows us to write loops"
      ],
      "correct": 2
    },
    {
      "q": "What does an async function return?",
      "options": [
        "A promise in a promise",
        "The value returned from the function",
        "A promise"
      ],
      "correct": 2
    },
    {
      "q": "What is dependency injection?",
      "options": [
        "A coding technique in which all dependencies are defined with import statements",
        "A coding technique for registering services",
        "A coding pattern in which a class receives the instances of objects it needs from an external source"
      ],
      "correct": 2
    },
    {
      "q": "Which is the proper syntax to make sessionTemplate available by name from a JavaScript module?",
      "options": [
        "export function sessionTemplate(sessions) {...}",
        "export default function sessionTemplate(sessions) {...}",
        "module.exports = function sessionTemplate(sessions) {...}",
        "require function sessionTemplate(sessions) {...}"
      ],
      "correct": 0
    },
    {
      "q": "What is a callback?",
      "options": [
        "A function that is called when a parallel operation is done",
        "A boolean that is set to true when a parallel operation is done",
        "A function that can be used with the 'await' keyword"
      ],
      "correct": 0
    },
    {
      "q": "There is no catch method on a promise",
      "options": [
        "true",
        "false"
      ],
      "correct": 1
    },
    {
      "q": "What is blog.name?var blog = { name: 'Ski Utah'};var updatedBlog = blog;updatedBlog.name = 'Rocky Mountain Skiing' }",
      "options": [
        "Ski Utah",
        "undefined",
        "blog",
        "Rocky Mountain Skiing"
      ],
      "correct": 3
    },
    {
      "q": "What is the output of the following?greet = function(...months){ months.forEach(month => console.log('Month: ' +\nmonth));}greet([ 'Jan', 'Feb']);",
      "options": [
        "Jan Feb",
        "ReferenceError",
        "Month: Jan,Feb",
        "Month: Jan",
        "Month: Feb"
      ],
      "correct": 2
    },
    {
      "q": "What is the relationship between JavaScript and ECMAScript?",
      "options": [
        "ECMAScript is a standard that JavaScript implements.",
        "They are different terms for the same thing.",
        "JavaScript is a standard that ECMAScript implements.",
        "JavaScript is an old term for what is now called ECMAScript."
      ],
      "correct": 0
    },
    {
      "q": "What will show in the console when this code runs?var value = \"no value\";console.log(!!value );",
      "options": [
        "false",
        "(an empty string)",
        "true",
        "no value"
      ],
      "correct": 2
    },
    {
      "q": "What is the console output of the following code block:function printName() { name = \"Mary\"; name = \"John\";",
      "options": [
        "console.log(name);}",
        "Empty",
        "None",
        "John",
        "Mary"
      ],
      "correct": 2
    },
    {
      "q": "Where is the correct place to insert a Javascript ?",
      "options": [
        "The <head> section",
        "Both the <head> section and the <body> section are correct.",
        "The <body> section.",
        "The <footer> section."
      ],
      "correct": 1
    },
    {
      "q": ".What syntax allows for a variable number of arguments to a function where the arguments are passed as an array?",
      "options": [
        "1. function([]numbers) { }",
        "2. function(*numbers) { }",
        "3. function(...numbers) { }",
        "4. function(numbers[]) { }"
      ],
      "correct": 2
    },
    {
      "q": "What statement will load a module from a script named employee.js?",
      "options": [
        "1. reference \"employee\";",
        "2. import \"employee\";",
        "3. import \"employee.js\";",
        "4. reference \"employee.js\";"
      ],
      "correct": 2
    },
    {
      "q": "Which flags are required to run nodes with ES6?",
      "options": [
        "1. harmony and strict-mode",
        "2. experimental and strict-mode",
        "3. harmony and block-binding",
        "4. harmony and experimental"
      ],
      "correct": 3
    },
    {
      "q": "What contextual keyword is used in a class definition to identify a function containing initialization logic for an object?",
      "options": [
        "1. ctor",
        "2. new",
        "3. constructor",
        "4. class"
      ],
      "correct": 2
    },
    {
      "q": "What syntax will create the array [1, 2, 3, 4, 5, 6] ?",
      "options": [
        "1. [1, 2, [3, 4]..., 5, 6];",
        "2. [1, 2, ...[3, 4], 5, 6];",
        "3. [1, 2, [3, 4], 5, 6];",
        "4. [1, 2, {3, 4}, 5, 6];"
      ],
      "correct": 1
    },
    {
      "q": "Q 6. What symbol identifies a generator function?",
      "options": [
        "1. &",
        "2. @",
        "3. $",
        "4. *"
      ],
      "correct": 3
    },
    {
      "q": "By default, if you load a module that's not a JavaScript file, what will SystemJS do?",
      "options": [
        "1. Raise an error when loading the module.",
        "2. Attempt to load the module as if it were a JavaScript file.",
        "3. Look for a plugin with the name of the file extension to load the file."
      ],
      "correct": 2
    },
    {
      "q": "Babel compiles the JavaScript code you write into",
      "options": [
        "1. ECMAScript 5",
        "2. ECMAScript 7",
        "3. ECMAScript 3",
        "4. ECMAScript 6"
      ],
      "correct": 0
    },
    {
      "q": ". Which of these phrases describes Babel?",
      "options": [
        "JavaScript compiler",
        "B, Requires a runtime",
        "A programming language",
        "Experimental"
      ],
      "correct": 0
    },
    {
      "q": "The string \"api/route\" in Express is an example of a...",
      "options": [
        "Middleware",
        "B .Route",
        "Error Handler"
      ],
      "correct": 1
    },
    {
      "q": "Which library allows the use of the \"require\" keyword in front-end code?",
      "options": [
        "guid",
        "Browserify",
        "React",
        "jQuery"
      ],
      "correct": 1
    },
    {
      "q": "The ______ attribute of a React form is called when the main action button inside the form is pressed.",
      "options": [
        "onSubmit",
        "onChange",
        "onComplete"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are automation tools?",
      "options": [
        "Gulp",
        "JSX",
        "Express"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is not a method of a dispatcher?",
      "options": [
        "register",
        "vector",
        "dispatch"
      ],
      "correct": 1
    },
    {
      "q": "What React function is used to define a new element tag?",
      "options": [
        "renderComponent",
        "createClass",
        "setInnerHTML"
      ],
      "correct": 1
    },
    {
      "q": "Isomorphic means to focus exclusively on an app's back-end.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "React's abstraction of the document object model is often called...",
      "options": [
        "Virtual DOM",
        "Meta DOM",
        "Virtualized Model"
      ],
      "correct": 0
    },
    {
      "q": "True or false : The only thing that can change the data inside a store is the store itself.",
      "options": [
        "false",
        "true"
      ],
      "correct": 1
    },
    {
      "q": "The best way to detect when a user has completed a form is",
      "options": [
        "to handle the onClick event on the form's submit element",
        "to handle the onBlur event of the last form element",
        "to handle the form's onSubmit event",
        "to accumulate the onChange events for each form element"
      ],
      "correct": 2
    },
    {
      "q": "React is",
      "options": [
        "A A library that represents asynchronous data streams with observables",
        "B A comprehensive client-side application framework",
        "C An optimizing compiler for JavaScript",
        "D A client-side library providing rendering and event handling"
      ],
      "correct": 3
    },
    {
      "q": "Routing can be added to a React application by",
      "options": [
        "adding an HTML5 or hash fragment based routing library",
        "rendering the application on the server using react-page",
        "handling the window.onLocationChanged event",
        "using the React.route function"
      ],
      "correct": 0
    },
    {
      "q": "Behavior is shared between components using",
      "options": [
        "propTypes",
        "state",
        "mixins",
        "props"
      ],
      "correct": 2
    },
    {
      "q": "An advantage of React is",
      "options": [
        "jQuery syntax",
        "static type checking",
        "speed",
        "easy integration with other JavaScript libraries"
      ],
      "correct": 2
    },
    {
      "q": "The JSX pre-processor is packaged as a",
      "options": [
        "dynamic link library",
        "Nuget package",
        "Gem",
        "npm module"
      ],
      "correct": 3
    },
    {
      "q": "The just-in-time JSX transformer is good for",
      "options": [
        "integrating with JavaScript tools",
        "simple development workflow",
        "reusing behavior",
        "performance"
      ],
      "correct": 1
    },
    {
      "q": "The function that creates React components is",
      "options": [
        "React.component.extend",
        "React.createComponent",
        "React.renderComponent",
        "React.createClass"
      ],
      "correct": 3
    },
    {
      "q": "How does React Router make URL params accessible to components?",
      "options": [
        "parseUrlParams",
        "State",
        "getUrlParams",
        "Props"
      ],
      "correct": 3
    },
    {
      "q": "Why is the Link component useful?",
      "options": [
        "It allows you to hyperlink to routes by name",
        "It enhances page load performance",
        "It removes invalid characters from the URL",
        "It provides faster navigation than hyperlinks"
      ],
      "correct": 0
    },
    {
      "q": "How do Flux stores find out about Flux actions?",
      "options": [
        "They query the server via AJAX",
        "They poll HTML5 localstorage",
        "They register a callback with the dispatcher.",
        "They call action creators directly"
      ],
      "correct": 2
    },
    {
      "q": "Where should mutable data for React components be stored?",
      "options": [
        "props",
        "reactData",
        "state",
        "React.cookie"
      ],
      "correct": 2
    },
    {
      "q": "What mechanism is recommended for passing data down to child components in React?",
      "options": [
        "props",
        "sendChildData",
        "getDefaultProps",
        "state"
      ],
      "correct": 0
    },
    {
      "q": "What is JSX?",
      "options": [
        "A language that looks like JavaScript that compiles to HTML.",
        "A styling language that compiles down to CSS.",
        "A language for querying RESTful web services.",
        "A language that looks like HTML that compiles down to JavaScript."
      ],
      "correct": 3
    },
    {
      "q": "What function should all your JSX be placed in?",
      "options": [
        "render",
        "compile",
        "jsx",
        "emit"
      ],
      "correct": 0
    },
    {
      "q": "What does the “webpack” command do ?",
      "options": [
        "Runs React Local Development Server.",
        "Transpiles all the Javascript down into one file.",
        "Both A and B."
      ],
      "correct": 2
    },
    {
      "q": "Which of the following API is a MUST for every React Component ?",
      "options": [
        "getInitialState.",
        "render",
        "renderComponent."
      ],
      "correct": 2
    },
    {
      "q": "What are the advantages of using React?",
      "options": [
        "React can be used on client as well as server side.",
        "Using React increases readability and makes maintainability easier. Component and Data patterns improve readability and thus make it easier for maintaining larger props.",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is just a View Layer.",
        "All of the above."
      ],
      "correct": 2
    },
    {
      "q": "Which statement about React and ARIA attributes is correct?",
      "options": [
        "aria-* HTML attributes are fully supported in JSX where most DOM properties and attributes in React are camelCased, these attributes should be lowercase.",
        "React processes aria-* attributes separately and updates the DOM for accessibility if the user requires it.",
        "aria-* attributes should be converted to camelCase like other attributes; for example: className, onChange and so on.",
        "React is yet to support the WAI-ARIA standard."
      ],
      "correct": 0
    },
    {
      "q": "What is React?",
      "options": [
        "Just a server-side framework",
        "Just a user-interface framework",
        "Both a server-side framework as well as a user-interface framework"
      ],
      "correct": 2
    },
    {
      "q": "What are the limitations of React?",
      "options": [
        "React is only for the view layer of the app so we still need the help of other technologies to get a complete tooling set for development.",
        "React uses inline templating and JSX. This can seem awkward to some developers.",
        "The library of React is too large.",
        "All of the above"
      ],
      "correct": 2
    },
    {
      "q": "How can you access the state of a component from inside of a member function in React?",
      "options": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correct": 3
    },
    {
      "q": "You can also use an ES6 class to define a component in React.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "At the highest level, React components have lifecycle events that fall into _______.",
      "options": [
        "Initialization",
        "State/Property updates",
        "Destruction",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What is React in MVC?",
      "options": [
        "Controller",
        "Middleware",
        "Model",
        "Router"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following is not a type keyword in TypeScript?",
      "options": [
        "1.float",
        "2.bool",
        "3.all are valid types in TypeScript",
        "4.number",
        "5.string"
      ],
      "correct": 0
    },
    {
      "q": "Interfaces defined in TypeScript are included in the JavaScript that is generated?",
      "options": [
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "q": "How do you extend an interface in TypeScript?",
      "options": [
        "interface ITruckOptions extends IAutoOptions",
        "interface ITruckOptions => IAutoOptions",
        "interface ITruckOptions : IAutoOptions",
        "interface ITruckOptions implements IAutoOptions"
      ],
      "correct": 0
    },
    {
      "q": "Benefits offered by TypeScript include:",
      "options": [
        "Code encapsulation",
        "All of these",
        "More maintainable code",
        "Strongly-typed code"
      ],
      "correct": 1
    },
    {
      "q": "How do you automatically generate fields in a TypeScript class?",
      "options": [
        "Add the public keyword to a constructor parameter",
        "None of these",
        "Use the auto keyword",
        "TypeScript doesn't support automatically generated fields"
      ],
      "correct": 0
    },
    {
      "q": "Which TypeScript function will accept 2 parameters that must be numbers and return their product?\nvar func = (x: number, y: number) => x * y;\nvar func = (x, y) => x * y;",
      "options": [
        "None of these",
        "var func = function(x, y) => x * y;",
        "All of these"
      ],
      "correct": 0
    },
    {
      "q": "Which statement will allow your code to reference an internal module in a file named shapes.ts using TypeScript?",
      "options": [
        "/// <reference=\"shapes.ts\" />",
        "/// <reference path=\"shapes.ts\" />",
        "import \"shapes\"",
        "/// shapes.ts"
      ],
      "correct": 2
    },
    {
      "q": "Which TypeScript statement will import an external module in a file named viewmodels.ts that is in the same folder as your code?",
      "options": [
        "import vm = module(viewmodels);",
        "import vm = module('../viewmodels');",
        "import module('viewmodels');",
        "import vm = module('viewmodels');"
      ],
      "correct": 3
    },
    {
      "q": "Which TypeScript compiler parameter will emit JavaScript that is AMD compliant?",
      "options": [
        "--AMD",
        "--module AMD",
        "Neither of these"
      ],
      "correct": 1
    },
    {
      "q": "What keyword is used to apply all of the properties on one interface to another interface?",
      "options": [
        "implements",
        "extends",
        "class",
        "furthers",
        "references"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following best defines a \"class\"?",
      "options": [
        "Objects with no implementation details",
        "Object with no properties or methods",
        "JSON objects with methods",
        "Collection of private, reusable functions",
        "Template for creating objects"
      ],
      "correct": 4
    },
    {
      "q": "What term describes the concept of treating an object as if it were a particular type, even if it weren't declared as that type?",
      "options": [
        "Extension Typing",
        "Duck Typing",
        "Interface Typing",
        "Generic Typing",
        "Ruby Typing"
      ],
      "correct": 1
    },
    {
      "q": "What access modifier limits the accessibility of a class member to its own class and subclasses?",
      "options": [
        "export",
        "internal",
        "protected",
        "private",
        "sensitive"
      ],
      "correct": 2
    },
    {
      "q": "What is the primary difference between a generic class and a non-generic class?",
      "options": [
        "Generic classes do not accept constructor parameters.",
        "Generic classes are always declared abstract.",
        "Generic classes may not implement interfaces.",
        "Generic classes accept a type parameter.",
        "Generic classes must inherit from a base class."
      ],
      "correct": 3
    },
    {
      "q": "Which TypeScript compiler options lets you specify the location of the tsconfig.json file to be used for the compilation?",
      "options": [
        "--project",
        "--json",
        "--outDir",
        "--input",
        "--source"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following symbols is used to denote that a function parameter is a rest parameter?",
      "options": [
        "<>",
        ">>>",
        "!!",
        "...",
        "||"
      ],
      "correct": 3
    },
    {
      "q": "Which of the following will correctly import the items exported by this export statement?",
      "options": [
        "export { GetUser as GetLibraryUser, GetBook as GetLibraryBook };",
        "import TypeScript from './library';",
        "import namespace from './library';",
        "import { GetLibraryUser, GetLibraryBook } from './library';",
        "import { GetUser, GetBook } from './library';",
        "import all from './library';"
      ],
      "correct": 2
    },
    {
      "q": "Which are the different Data Types supported by Typescript?",
      "options": [
        "Boolean var bValue: boolean = false",
        "Number var age: number = 16",
        "String var name: string = \"join\"",
        "All of the above mentioned"
      ],
      "correct": 3
    },
    {
      "q": "What are the variable scopes available in TypeScript?",
      "options": [
        "Global Scope",
        "Class Scope",
        "Local Scope",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which object oriented terms are supported by Typescript?",
      "options": [
        "Modules",
        "Classes",
        "Interfaces",
        "All of these"
      ],
      "correct": 3
    },
    {
      "q": "In typescript, it calls an javascript internally and then performs validations",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "To change the datatype from one type to another,we require",
      "options": [
        "TypeOperator",
        "TypeAssertion",
        "InferredTyping"
      ],
      "correct": 1
    },
    {
      "q": "For a variable,Without Specifying any data type is",
      "options": [
        "InferredTyping",
        "TypeOperator",
        "TypeAssertion"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following is valid command to compile\ntypescript file?",
      "options": [
        "ts abc.ts",
        "t abc.ts",
        "tsc abc.ts",
        "tst abc.ts"
      ],
      "correct": 2
    },
    {
      "q": "What will be output of : var a:string=47;\nconsole.log(“Value of a=\"+a);",
      "options": [
        "Value of a=47",
        "Value of a=0",
        "Value of a=",
        "None of the above"
      ],
      "correct": 3
    },
    {
      "q": "Internal Modules are known as namespaces in Typescript.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following Arrow Functions are true",
      "options": [
        "var reflect = value => value;",
        "var sum = (num1, num2) => num1 + num2;",
        "var getName = () => \"Nicholas\";",
        "var sum = (num1, num2) => { return num1 + num2; };",
        "All"
      ],
      "correct": 4
    },
    {
      "q": "function fun1(...params) {\nconsole.log(params.length);\n}\nfun1();\nfun1(5);\nfun1(5, 6, 7);",
      "options": [
        "Which concept resemble the above program",
        "String Interpolation",
        "Tagged Templates",
        "Spread Operator/Rest Parameters",
        "Object Destructuring"
      ],
      "correct": 2
    },
    {
      "q": "Typescript is a",
      "options": [
        "Strongly typed",
        "Object oriented",
        "Compiled Language",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "Typescript is",
      "options": [
        "Language",
        "set of tools",
        "Both",
        "None"
      ],
      "correct": 2
    },
    {
      "q": "Select user defined data types in typescript",
      "options": [
        "arrays",
        "String",
        "Boolean",
        "Void"
      ],
      "correct": 0
    },
    {
      "q": "Which of the following are true",
      "options": [
        "we can use printf in ts(typescript)",
        "we can use console.log in ts(typescript)"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following are array methods",
      "options": [
        "Unshift()",
        "Sort()",
        "Pop()",
        "All the above"
      ],
      "correct": 3
    },
    {
      "q": "Supertype of all datatypes in typescript",
      "options": [
        "number",
        "Enum",
        "Void",
        "Any"
      ],
      "correct": 3
    },
    {
      "q": "List some features of Typescript?",
      "options": [
        "Typescript can be compiled to all major versions of Javascript(ES3,ES5,ES6,ES7)",
        "Typescript can be used for cross –browser development and is an open source project",
        "Typescript is a superset of JavaScript that provides typed nature to your code",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "What are the components of TypeScript?",
      "options": [
        "TypeScript Language",
        "TypeScript Compiler",
        "TypeScript Language Service",
        "All of these"
      ],
      "correct": 3
    },
    {
      "q": "How to declare variables in Typescript?",
      "options": [
        "Var",
        "Let",
        "Both"
      ],
      "correct": 2
    },
    {
      "q": "Typescript uses which data type?",
      "options": [
        "String",
        "Number",
        "Boolean",
        "All above option"
      ],
      "correct": 3
    },
    {
      "q": ") Default access modifier typescript?",
      "options": [
        "public",
        "private",
        "protected"
      ],
      "correct": 0
    },
    {
      "q": "What is async/await?",
      "options": [
        "New syntax to write JavaScript promises",
        "New syntax to consume JavaScript promises",
        "New syntax to consume asynchronous callbacks"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following is an attribute css selector?",
      "options": [
        "[selector]",
        ".selector",
        "#selector"
      ],
      "correct": 0
    },
    {
      "q": "When is it recommended to pass this.setState a function instead of an object",
      "options": [
        "When the new state should completely replace the old state .",
        "When the new state does not depend on the old state.",
        "When the new state depends on the old state."
      ],
      "correct": 2
    },
    {
      "q": "A promise represents what?",
      "options": [
        "A single value in the future",
        "Multiple values in the present",
        "Multiple values in the future",
        "A single value in the present"
      ],
      "correct": 0
    },
    {
      "q": "Can a component be styled with a global styled sheet?",
      "options": [
        "Only function components can be styled with a global styled sheet",
        "Only if the component returns HTML elements",
        "Yes",
        "No"
      ],
      "correct": 2
    },
    {
      "q": "When binding to data in templates, how do you avoid issues with binding to properties of null or undefined objects?",
      "options": [
        "You don't need to worry about null objects, Angular will handle them gracefully.",
        "Use the * operator on any object that could be null.",
        "Use the ? operator on any object that could be null.",
        "In the component, ensure the objects are never null."
      ],
      "correct": 2
    },
    {
      "q": "Where should you sort and filter data?",
      "options": [
        "In a directive",
        "In a pipe",
        "In your component",
        "In a filter"
      ],
      "correct": 2
    },
    {
      "q": "What's the right syntax to assign the function doSomething as the handler of a click event?",
      "options": [
        "onClick={doSomething}",
        "onClick={() => doSomething}",
        "onClick={doSomething()}"
      ],
      "correct": 0
    },
    {
      "q": "Assuming you define the statement: \"var person: string;\" TypeScript will alert you that there is an error if you enter which\nadditional code?",
      "options": [
        "person = { name: 'Colleen', age: 25; }",
        "person = 0",
        "person = ['Colleen', 'John'];",
        "all of the above"
      ],
      "correct": 3
    },
    {
      "q": "When bootstrapping an Angular app, how do you specify the main, top-level app component to be used?",
      "options": [
        "You add the component as a package in your SystemJs config.",
        "You load the component directly in your index.html file.",
        "You add the component to the bootstrap array in your main app module.",
        "You load the component directly from your main SystemJs package (e.g. main.ts)."
      ],
      "correct": 2
    },
    {
      "q": "What is the format of the data returned by the JSON Server API?",
      "options": [
        "YAML",
        "XML",
        "JSON"
      ],
      "correct": 2
    },
    {
      "q": "What syntax do you use to render the App component into an HTML element with id \"root\"?",
      "options": [
        "ReactDOM.render(App, document.getElementById(\"root\"));",
        "React.render(App, document.getElementById(\"root\"));",
        "ReactDOM.mountNode(<App />, document.getElementById(\"root\"));",
        "ReactDOM.render(<App />, document.getElementById(\"root\"));"
      ],
      "correct": 3
    },
    {
      "q": "What function can be used to change the state of a React component?",
      "options": [
        "this.state = {}",
        "this.setState",
        "this.changeState"
      ],
      "correct": 1
    },
    {
      "q": "What can we do if components A and B are siblings and they require access to the same state element?",
      "options": [
        "Restructure the application to have A and B be related differently",
        "Place the state in either A or B",
        "Place the state in a third component C that is a sibling to A and B",
        "Place the state in the parent component of A and B"
      ],
      "correct": 3
    },
    {
      "q": "What is the name of the file that manages TypeScript projects?",
      "options": [
        "tsproj.config",
        "tsmeta.json",
        "tsconfig.json",
        "package.json"
      ],
      "correct": 0
    },
    {
      "q": "When dealing with asynchronous functions, what type of generic must your return type be?",
      "options": [
        "Async",
        "Promise",
        "Array",
        "AsyncAwait"
      ],
      "correct": 1
    },
    {
      "q": "What should appear to the left of the arrow in an arrow function?",
      "options": [
        "Function name",
        "Function parameters",
        "Curly braces",
        "Function return value",
        "Number of function parameters."
      ],
      "correct": 1
    },
    {
      "q": "What character separates a variable from its type annotation in a declaration?",
      "options": [
        "#",
        "$",
        "%",
        ":"
      ],
      "correct": 3
    },
    {
      "q": "How would you define a string type variable with the value bar in TypeScript?",
      "options": [
        "let string: foo = 'bar';",
        "let foo:string = 'bar';",
        "let string foo = 'bar';",
        "let foo (string) = 'bar';"
      ],
      "correct": 1
    },
    {
      "q": "What keyword requires a variable to be declared before it's used?",
      "options": [
        "let",
        "dim",
        "declare",
        "set"
      ],
      "correct": 0
    },
    {
      "q": "What keyword declares a class member in the class rather than an instance of the class?",
      "options": [
        "enum",
        "static",
        "intersection",
        "function",
        "async"
      ],
      "correct": 1
    },
    {
      "q": "Within which function scope would a variable that you declare using the keyword var cover?",
      "options": [
        "Within the entire function scope",
        "Within an if statement scope",
        "Within a for loop scope",
        "Within a while loop scope"
      ],
      "correct": 0
    },
    {
      "q": "What keyword lets you derive a subclass from a superclass?",
      "options": [
        "stretches",
        "extends",
        "sub",
        "follows",
        "buildsUpon"
      ],
      "correct": 1
    },
    {
      "q": "____________ contains the navigation menu, or other navigation functionality for the",
      "options": [
        "page",
        "section",
        "header",
        "nav",
        "aside"
      ],
      "correct": 2
    },
    {
      "q": "Which of the following properties sets the distance between an element’s right\nborder and the rightmost edge of its content?",
      "options": [
        "auto",
        "padding-left",
        "padding-right",
        "Padding-top"
      ],
      "correct": 2
    },
    {
      "q": "After you initialize a new Git repository and create a file named git-quiz.html, which of the following commands will NOT work if issued?",
      "options": [
        "git add git-quiz.html",
        "git status",
        "git add .",
        "git commit -m \"git quiz web file added\""
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "Which of the following media queries would apply to a tablet reporting a screen width of 768px?",
      "options": [
        "@media only screen and (min-width: 1140px){}",
        "@media only screen and (min-width: 641px){}",
        "@media only screen and (max-width: 1140px){}"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What is the correct HTML for making a checkbox?",
      "options": [
        "<checkbox>",
        "<input type=\"check\">",
        "<input type=\"checkbox\">",
        "<check>"
      ],
      "correct": 2
    },
    {
      "q": "Which is the correct CSS Syntax ?",
      "options": [
        "body color-black",
        "{body color-black}",
        "body {color:black;}",
        "{body;color;black}"
      ],
      "correct": 2
    },
    {
      "q": "Which event occurs when the user clicks on the HTML element ?",
      "options": [
        "onmouseover",
        "onchange",
        "onmouseclick",
        "onclick"
      ],
      "correct": 3
    },
    {
      "q": "Which tag is used to define a clickable image map in HTML5?",
      "options": [
        "<map>",
        "<area>",
        "<img>",
        "<figure>"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "What is the effect of display: flex; justify-content: space-between;?",
      "options": [
        "Aligns children vertically with equal spacing",
        "Aligns children horizontally with space between them",
        "Centers children horizontally",
        "Stacks children in a column"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What is the output? console.log(5 + \"5\");",
      "options": [
        "10",
        "\"55\"",
        "25",
        "Error"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which method is used to add an event listener?",
      "options": [
        "addEvent()",
        "attachEvent()",
        "addEventListener()",
        "onEvent()"
      ],
      "correct": 2,
      "note": null
    },
    {
      "q": "Which property keeps a background image fixed while scrolling?",
      "options": [
        "background-repeat: no-repeat",
        "background-attachment: fixed",
        "background-position: center",
        "background-size: cover"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "What does this render? return <h1>{undefined}</h1>;",
      "options": [
        "Nothing (empty string)",
        "\"undefined\"",
        "Error",
        "null"
      ],
      "correct": 0,
      "note": null
    },
    {
      "q": "Purpose of key prop in a list?",
      "options": [
        "Styling",
        "Identifying unique elements for efficient rendering",
        "Handling events",
        "Managing state"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which index improves query performance?",
      "options": [
        "Compound index",
        "Text index",
        "Unique index",
        "All of the above"
      ],
      "correct": 3,
      "note": null
    },
    {
      "q": "How to inject service?",
      "options": [
        "Using @Inject",
        "In constructor",
        "Using @Service",
        "In template"
      ],
      "correct": 1,
      "note": null
    },
    {
      "q": "Which class indicates a dropdown menu?",
      "options": [
        ".dropdown-list",
        ".dropdown",
        ".select"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following values are accepted by the float property?",
      "options": [
        "left",
        "right",
        "none",
        "all of the above"
      ],
      "correct": 3
    },
    {
      "q": "If you are designing a column to occupy 3 of the 12 columns in your desktop design, what is the width in CSS?",
      "options": [
        "Width:25%",
        "Width:33.3333%",
        "Width:21%"
      ],
      "correct": 0
    },
    {
      "q": "In what direction does float work? img { float: right; }",
      "options": [
        "left",
        "top",
        "bottom",
        "right"
      ],
      "correct": 3
    },
    {
      "q": "The correct HTML tag to left align the content inside a table cell is:",
      "options": [
        "<td align=\"left\">",
        "<td align=\"right\">",
        "<td leftAlign>",
        "<table align=\"left\">"
      ],
      "correct": 0
    },
    {
      "q": "Which CSS property is used to change the font of an element?",
      "options": [
        "font",
        "font-family",
        "font-style",
        "font-weight"
      ],
      "correct": 1
    },
    {
      "q": "After initializing a new Git repo and creating git-quiz.html, which command will NOT work as needed?",
      "options": [
        "git add git-quiz.html",
        "git status",
        "git add",
        "git commit -m \"git quiz web file added\""
      ],
      "correct": 2
    },
    {
      "q": "Choose the correct HTML element to define important text.",
      "options": [
        "<strong>",
        "<important>",
        "<b>",
        "<pre>"
      ],
      "correct": 0
    },
    {
      "q": "Which Bootstrap classes create a vertical pills navigation?",
      "options": [
        ".nav, .nav-tabs",
        ".nav, .nav-pills",
        ".nav, .nav-pills, .nav-stacked",
        ".nav, .nav-tabs, .nav-justified"
      ],
      "correct": 2
    },
    {
      "q": "Which Bootstrap classes create a justified tabs navigation?",
      "options": [
        ".nav, .nav-tabs",
        ".nav, .nav-pills",
        ".nav, .nav-pills, .nav-stacked",
        ".nav, .nav-tabs, .nav-justified"
      ],
      "correct": 3
    },
    {
      "q": "Bootstrap's grid system allows up to how many columns across the page?",
      "options": [
        "6 columns",
        "12 columns",
        "16 columns",
        "24 columns"
      ],
      "correct": 1
    },
    {
      "q": "Which class makes a round-cornered image automatically adjust to fit the size of the screen?",
      "options": [
        ".img-res-image",
        ".img-responsive-image",
        ".img-responsive",
        ".img-res"
      ],
      "correct": 2
    },
    {
      "q": "Which class should be used to indicate a button group?",
      "options": [
        "btn-group-buttons",
        "btn-group",
        "btn-grp",
        "btn-buttons"
      ],
      "correct": 1
    },
    {
      "q": "Which class is used to create a black/dark navigation bar?",
      "options": [
        ".navbar-default",
        ".navbar-black",
        ".navbar-dark",
        ".navbar-inverse"
      ],
      "correct": 3
    },
    {
      "q": "The .container-fluid class provides:",
      "options": [
        "a fixed-width container",
        "a table format",
        "a way to create a form",
        "a full-width container"
      ],
      "correct": 3
    },
    {
      "q": "Which tool is a well-known CSS validator/linter?",
      "options": [
        "csslint",
        "htmlhint",
        "jsvalidate",
        "stylecheck"
      ],
      "correct": 0
    },
    {
      "q": "Which CSS preprocessors are commonly referenced (LESS and/or SASS)?",
      "options": [
        "LESS only",
        "SASS only",
        "Both LESS and SASS",
        "Neither"
      ],
      "correct": 2
    },
    {
      "q": "Which of these are valid values for the CSS display property?",
      "options": [
        "none",
        "inline",
        "inline-block / block",
        "all of the above are valid"
      ],
      "correct": 3
    },
    {
      "q": "What's the shorthand CSS property for setting background properties together?",
      "options": [
        "background",
        "bg-set",
        "background-all",
        "bg-shorthand"
      ],
      "correct": 0
    },
    {
      "q": "____ is an HTML specification used to add more information (structured data) to HTML tags.",
      "options": [
        "Macrodata",
        "Microdata",
        "Minidata",
        "Modifydata"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following can be implemented using CSS/JS animation?",
      "options": [
        "Fireworks",
        "Fade effects",
        "Roll-in or roll-out",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "q": "Which attribute is required to make an &lt;input&gt; a mandatory field?",
      "options": [
        "required",
        "minlength",
        "both required and minlength are needed",
        "pattern"
      ],
      "correct": 0
    },
    {
      "q": "What does the <aside> tag in HTML do?",
      "options": [
        "Defines the main content of the page",
        "Defines content aside from the page content, often shown as a sidebar",
        "Defines a footer",
        "Defines a navigation bar"
      ],
      "correct": 1
    },
    {
      "q": "Which of the following represents the correct syntax for a standard navigation tab in Bootstrap?",
      "options": [
        "<ul class=\"nav nav-tabs\">",
        "<div class=\"nav-tab\">",
        "<nav class=\"tabs\">",
        "<ul class=\"tab-nav\">"
      ],
      "correct": 0
    },
    {
      "q": "How many columns does the Bootstrap grid system allow across the page?",
      "options": [
        "6",
        "12",
        "10",
        "16"
      ],
      "correct": 1
    },
    {
      "q": "Which class makes a rounded-corner image automatically adjust to fit the screen size in Bootstrap?",
      "options": [
        ".img-res-image",
        ".img-responsive-image",
        ".img-responsive",
        ".img-res"
      ],
      "correct": 2
    },
    {
      "q": "Where in an HTML document is the correct place to refer to an external style sheet?",
      "options": [
        "In the <body> section",
        "At the end of the document",
        "In the <head> section",
        "At the start of the document, outside <html>"
      ],
      "correct": 2
    },
    {
      "q": "Where is the correct place to insert a JavaScript in an HTML document?",
      "options": [
        "Only the <head> section",
        "Only the <body> section",
        "Both the <head> section and the <body> section are correct",
        "The <footer> section only"
      ],
      "correct": 2
    },
    {
      "q": "How can you detect the client's browser name in JavaScript?",
      "options": [
        "class.navName",
        "navigator.appName",
        "browser.name",
        "window.browser"
      ],
      "correct": 1
    },
    {
      "q": "Which class indicates a dropdown menu in Bootstrap?",
      "options": [
        ".dropdown-list",
        ".select",
        ".dropdown",
        ".menu-drop"
      ],
      "correct": 2
    },
    {
      "q": "How do you create a zebra-striped table in Bootstrap?",
      "options": [
        "<table class=\"table table-striped\">",
        "<table class=\"table-zebra\">",
        "<table class=\"striped\">",
        "<table class=\"table table-zebra\">"
      ],
      "correct": 0
    },
    {
      "q": "Which class is used to create a big box for calling extra attention in Bootstrap?",
      "options": [
        ".bigbox",
        ".jumbotron",
        ".container",
        ".highlight"
      ],
      "correct": 1
    },
    {
      "q": "Which button class is used to create a large button in Bootstrap?",
      "options": [
        ".btn-lg",
        ".btn-xl",
        ".btn-l",
        ".btn-large"
      ],
      "correct": 0
    },
    {
      "q": "How do you capitalize text in CSS?",
      "options": [
        "text-capitalize: true;",
        "text-transform: capitalize;",
        "font-style: capitalize;",
        "capitalize: text;"
      ],
      "correct": 1
    },
    {
      "q": "Which rule removes the underline from a hyperlink?",
      "options": [
        "a { text-decoration: none; }",
        "a { underline: none; }",
        "a { text-style: none; }",
        "a { hyperlink: none; }"
      ],
      "correct": 0
    },
    {
      "q": "Which is the correct table structure in HTML?",
      "options": [
        "<table><tr><td>",
        "<table><td><tr>",
        "<table><row><cell>",
        "<table><tbody><cell>"
      ],
      "correct": 0
    },
    {
      "q": "Which HTML tag is used to create an unordered (bulleted) list?",
      "options": [
        "<ol>",
        "<ul>",
        "<li>",
        "<list>"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML tag is used to create an ordered list?",
      "options": [
        "<ul>",
        "<ol>",
        "<li>",
        "<order>"
      ],
      "correct": 1
    },
    {
      "q": "Which HTML element is used to draw graphics using JavaScript?",
      "options": [
        "<svg>",
        "<canvas>",
        "<draw>",
        "<graphic>"
      ],
      "correct": 1
    },
    {
      "q": "SVG graphics are defined in which format?",
      "options": [
        "Binary",
        "XML",
        "JSON",
        "CSV"
      ],
      "correct": 1
    },
    {
      "q": "Which event occurs when the user clicks on an HTML element?",
      "options": [
        "onmouseover",
        "onchange",
        "onmouseclick",
        "onclick"
      ],
      "correct": 3
    },
    {
      "q": "Which class in Bootstrap provides a responsive fixed-width container?",
      "options": [
        ".wrapper",
        ".container",
        ".box",
        ".fixed"
      ],
      "correct": 1
    },
    {
      "q": "What is the output of the following?\nfunction display(num1, num2) { console.log(num1, num2); }\nlet nums = \"12345\";\ndisplay(...nums);",
      "options": [
        "1 2",
        "21",
        "12345",
        "45"
      ],
      "correct": 0
    },
    {
      "q": "What value will be output at the end of the following code block?\nenum Color { Red = 5, Green = 10, Blue = 15 };\nconsole.log(Color.Green);",
      "options": [
        "2",
        "Color.Green",
        "1",
        "Green",
        "10"
      ],
      "correct": 4
    },
    {
      "q": "Where can the <script> tag be added in HTML?",
      "options": [
        "Head",
        "Body",
        "Both"
      ],
      "correct": 2
    }
  ]
};

// Human-friendly display names for topic ids (used in the UI)
const TOPIC_LABELS = {
  "java": "Java",
  "spring": "Spring Core & Spring Boot",
  "mongodb": "MongoDB",
  "nodejs": "Node.js",
  "javascript": "JavaScript & Node.js",
  "angular": "Angular",
  "typescript": "TypeScript",
  "react": "React",
  "devops": "DevOps",
  "htmlcss": "HTML & CSS"
};
