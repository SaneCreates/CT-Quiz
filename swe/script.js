const units = [
  {
    id: "unit-1",
    name: "Unit 1",
    questions: [
      {
        question: "The primary goal of software engineering is to:",
        options: [
          "Write code quickly",
          "Build reliable and maintainable software",
          "Reduce hardware usage only",
          "Avoid documentation",
        ],
        answer: 1,
      },
      {
        question:
          "Which activity is usually carried out first in the software lifecycle?",
        options: [
          "Testing",
          "Requirement analysis",
          "Deployment",
          "Maintenance",
        ],
        answer: 1,
      },
      {
        question: "A requirement that is clear and testable is called:",
        options: ["Ambiguous", "Verifiable", "Optional", "Unnecessary"],
        answer: 1,
      },
      {
        question: "A feasibility study evaluates:",
        options: [
          "Only team size",
          "Technical, economic, and operational practicality",
          "Only coding speed",
          "Only hardware cost",
        ],
        answer: 1,
      },
      {
        question: "Main stakeholders in a software project usually include:",
        options: [
          "Only programmers",
          "Users, clients, and team members",
          "Only testers",
          "Only managers",
        ],
        answer: 1,
      },
      {
        question: "Understanding user needs is called:",
        options: [
          "Debugging",
          "Requirement elicitation",
          "Compilation",
          "Testing",
        ],
        answer: 1,
      },
      {
        question: "Which model is best when requirements keep changing?",
        options: ["Waterfall", "Agile", "V-model", "None"],
        answer: 1,
      },
      {
        question: "The waterfall model is best known for:",
        options: [
          "Sequential phases",
          "Continuous changes",
          "No documentation",
          "No testing",
        ],
        answer: 0,
      },
      {
        question: "The main purpose of a prototype is to:",
        options: [
          "Replace the final system",
          "Allow users to visualize requirements",
          "Remove all documentation",
          "Eliminate project review",
        ],
        answer: 1,
      },
      {
        question: "A functional requirement describes:",
        options: [
          "How fast the system is",
          "What the system must do",
          "Only hardware features",
          "Only user interface color",
        ],
        answer: 1,
      },
      {
        question: "A non-functional requirement usually relates to:",
        options: [
          "Business rules only",
          "Performance, reliability, and security",
          "Only user login",
          "Only database scripts",
        ],
        answer: 1,
      },
      {
        question: "SDLC stands for:",
        options: [
          "Software Development Life Cycle",
          "System Design Learning Center",
          "Software Delivery Launch Cycle",
          "System Documentation Logic Control",
        ],
        answer: 0,
      },
      {
        question: "Maintenance usually includes:",
        options: [
          "Bug fixing and enhancement",
          "Only initial coding",
          "Only deployment",
          "Only requirement design",
        ],
        answer: 0,
      },
      {
        question: "Poor requirement analysis often leads to:",
        options: [
          "Lower software cost",
          "Rework and project failure",
          "Faster delivery",
          "No testing",
        ],
        answer: 1,
      },
      {
        question: "Traceability means:",
        options: [
          "Hiding all requirements",
          "Linking requirements to design and code",
          "Removing tests",
          "Ignoring stakeholders",
        ],
        answer: 1,
      },
      {
        question:
          "A document that describes behavior and constraints is usually the:",
        options: ["User manual", "SRS", "Hardware catalog", "Budget sheet"],
        answer: 1,
      },
      {
        question: "Which is not usually a software engineering phase?",
        options: ["Design", "Maintenance", "Installation only", "Requirements"],
        answer: 2,
      },
      {
        question: "A project is successful when it:",
        options: [
          "Uses the newest tools only",
          "Meets user needs and quality standards",
          "Completes in one week",
          "Avoids all testing",
        ],
        answer: 1,
      },
      {
        question: "The role of a systems analyst is to:",
        options: [
          "Write all code",
          "Bridge business needs and technical solutions",
          "Run only hardware tests",
          "Create network cables",
        ],
        answer: 1,
      },
      {
        question: "One common requirement gathering technique is:",
        options: [
          "Interviews",
          "Deleting code",
          "Skipping validation",
          "Ignoring users",
        ],
        answer: 0,
      },
      {
        question: "A project charter usually contains:",
        options: [
          "Project goals and scope",
          "The final test results",
          "The hardware budget only",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "Scope creep is:",
        options: [
          "A controlled reduction of work",
          "Uncontrolled expansion of requirements",
          "A testing method",
          "A code review step",
        ],
        answer: 1,
      },
      {
        question: "Use cases describe:",
        options: [
          "Only database tables",
          "Actor-system interaction",
          "Only hardware drivers",
          "Only project cost",
        ],
        answer: 1,
      },
      {
        question: "A good requirement should be:",
        options: [
          "Vague and flexible",
          "Clear, complete, and testable",
          "Only in one sentence",
          "Not tied to system goals",
        ],
        answer: 1,
      },
      {
        question: "Validation in requirement engineering checks:",
        options: [
          "Whether we are building the right product",
          "Whether the code compiles",
          "Whether the server is online",
          "Whether all hardware exists",
        ],
        answer: 0,
      },
      {
        question: "A key issue in software engineering is:",
        options: [
          "Managing changing user needs",
          "Ignoring testing",
          "Reducing documentation",
          "Decreasing team size",
        ],
        answer: 0,
      },
      {
        question: "A software product is usually judged by:",
        options: [
          "Its price only",
          "Functionality, quality, and maintainability",
          "Its number of pages",
          "Its code length only",
        ],
        answer: 1,
      },
      {
        question: "Which list includes true software process activities?",
        options: [
          "Specification, design, validation",
          "Only coding",
          "Only deployment",
          "Only maintenance",
        ],
        answer: 0,
      },
      {
        question: "Requirement verification checks whether:",
        options: [
          "The hardware is configured",
          "Requirements are complete and correct",
          "The compiler is installed",
          "The team has enough meetings",
        ],
        answer: 1,
      },
      {
        question: "A software engineer should mainly focus on:",
        options: [
          "Quality and maintainability",
          "Speed alone",
          "Code generation only",
          "No stakeholder communication",
        ],
        answer: 0,
      },
      {
        question: "Missing requirements most often lead to:",
        options: [
          "Building the wrong system",
          "Lower network cost",
          "Fewer user interviews",
          "Faster deployment",
        ],
        answer: 0,
      },
      {
        question: "User-centered design strongly emphasizes:",
        options: [
          "Coding speed only",
          "Understanding user needs and experience",
          "Reducing documentation",
          "Ignoring usability",
        ],
        answer: 1,
      },
      {
        question: "An SRS normally includes:",
        options: [
          "Requirements and constraints",
          "Only database diagrams",
          "Only marketing slogans",
          "Only project tasks",
        ],
        answer: 0,
      },
      {
        question: "The software crisis refers to:",
        options: [
          "Failure to meet schedule and quality goals",
          "Lack of internet access",
          "Too many operating systems",
          "A lack of hardware",
        ],
        answer: 0,
      },
      {
        question: "Documentation is important because it:",
        options: [
          "Helps communication and maintenance",
          "Eliminates testing",
          "Replaces design",
          "Removes stakeholder needs",
        ],
        answer: 0,
      },
      {
        question: "An example of a constraint is:",
        options: [
          "The system must run on Windows 11",
          "The system must allow login",
          "The interface must be appealing",
          "The project should finish on time",
        ],
        answer: 0,
      },
      {
        question: "Late requirement changes usually:",
        options: [
          "Reduce software cost",
          "Increase cost and rework",
          "Improve user satisfaction",
          "Remove need for planning",
        ],
        answer: 1,
      },
      {
        question: "Software quality is:",
        options: [
          "Optional",
          "A key measure of success",
          "Only about speed",
          "Only about code length",
        ],
        answer: 1,
      },
      {
        question: "Planning in software engineering mainly aims to:",
        options: [
          "Define tasks, schedule, and resources",
          "Avoid all documentation",
          "Skip project management",
          "Write code before design",
        ],
        answer: 0,
      },
      {
        question:
          "A detailed description of system requirements is typically called:",
        options: [
          "Project proposal",
          "Requirements specification",
          "User guide",
          "Installation manual",
        ],
        answer: 1,
      },
      {
        question: "Which approach is highly iterative and incremental?",
        options: ["Agile", "Waterfall", "Classical sequence", "No process"],
        answer: 0,
      },
      {
        question: "Validation ensures:",
        options: [
          "Requirements satisfy user needs",
          "Server software is installed",
          "Budget is zero",
          "Hardware works",
        ],
        answer: 0,
      },
      {
        question: "A good requirement must avoid:",
        options: [
          "Clear measurable criteria",
          "Ambiguous wording like “fast enough”",
          "Testable conditions",
          "Specific scope",
        ],
        answer: 1,
      },
      {
        question: "Project management concerns include:",
        options: [
          "Budget, time, and risk",
          "Only hardware upgrades",
          "Only software downloads",
          "Only marketing banners",
        ],
        answer: 0,
      },
      {
        question: "Software engineering combines:",
        options: [
          "Engineering methods with software practice",
          "Only mathematics",
          "Only debugging",
          "Only hardware maintenance",
        ],
        answer: 0,
      },
      {
        question: "A milestone is:",
        options: [
          "A key project checkpoint",
          "A bug fix",
          "A compiler output",
          "A database table",
        ],
        answer: 0,
      },
      {
        question: "Which item is not usually part of requirement analysis?",
        options: ["Elicitation", "Specification", "Compilation", "Validation"],
        answer: 2,
      },
      {
        question: "Requirements change because:",
        options: [
          "Users learn more as the project develops",
          "Hardware is always free",
          "Code never changes",
          "Managers never ask questions",
        ],
        answer: 0,
      },
      {
        question: "A project that meets deadlines but fails user needs is:",
        options: [
          "Fully successful",
          "Partially successful at best",
          "Always acceptable",
          "Not a project",
        ],
        answer: 1,
      },
      {
        question: "The software process is:",
        options: [
          "A sequence of activities for producing software",
          "Only a hardware operation",
          "A database design tool",
          "A network protocol",
        ],
        answer: 0,
      },
      {
        question: "A requirements trace matrix helps with:",
        options: [
          "Tracking requirement-to-work links",
          "Reducing code comments",
          "Planning hardware maintenance",
          "Writing marketing reports",
        ],
        answer: 0,
      },
      {
        question: "Requirement prioritization is needed to:",
        options: [
          "Avoid unnecessary work",
          "Skip code entirely",
          "Remove all users",
          "Reduce design decisions",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "unit-2",
    name: "Unit 2",
    questions: [
      {
        question: "Requirement engineering includes:",
        options: [
          "Elicitation, specification, and validation",
          "Only coding",
          "Only testing",
          "Only deployment",
        ],
        answer: 0,
      },
      {
        question: "A use case mainly models:",
        options: [
          "User-system interaction",
          "Hardware performance",
          "Database design",
          "User interface only",
        ],
        answer: 0,
      },
      {
        question: "A data flow diagram represents:",
        options: [
          "Flow of data through a system",
          "Only coding sequence",
          "Only security checks",
          "Only hardware logs",
        ],
        answer: 0,
      },
      {
        question: "Sequence diagrams show:",
        options: [
          "Time-based interactions",
          "Only code blocks",
          "Only project timeline",
          "Only database rows",
        ],
        answer: 0,
      },
      {
        question: "Which is a modeling technique?",
        options: ["ERD", "DFD", "State diagram", "All of the above"],
        answer: 3,
      },
      {
        question: "An ER diagram models:",
        options: [
          "Entities and relationships",
          "User actions only",
          "Server memory",
          "Project schedules",
        ],
        answer: 0,
      },
      {
        question: "A functional requirement says:",
        options: [
          "What the system must do",
          "How expensive the hardware is",
          "Only the number of users",
          "Only the background color",
        ],
        answer: 0,
      },
      {
        question: "Requirement validation checks whether requirements are:",
        options: [
          "Clear, consistent, and complete",
          "Only minimal",
          "Only in code",
          "Only on paper",
        ],
        answer: 0,
      },
      {
        question: "Typical requirement sources include:",
        options: [
          "Users, customers, analysts",
          "Only testers",
          "Only managers",
          "Only hardware vendors",
        ],
        answer: 0,
      },
      {
        question: "Requirement prioritization means:",
        options: [
          "Ranking by importance and urgency",
          "Deleting all low-priority tasks",
          "Removing users",
          "Reducing code quality",
        ],
        answer: 0,
      },
      {
        question: "A flowchart is used to show:",
        options: [
          "Business process flow",
          "Machine learning model",
          "Compiler output",
          "Software cost",
        ],
        answer: 0,
      },
      {
        question: "A state transition diagram shows:",
        options: [
          "System state changes in response to events",
          "Only hardware connections",
          "Only user login form",
          "Only project goals",
        ],
        answer: 0,
      },
      {
        question: "A benefit of modeling tools is:",
        options: [
          "Improved communication and understanding",
          "Bug-free code guarantee",
          "No need for users",
          "No need for testing",
        ],
        answer: 0,
      },
      {
        question: "Elicitation means:",
        options: [
          "Collecting requirements",
          "Writing code",
          "Running tests",
          "Deploying the system",
        ],
        answer: 0,
      },
      {
        question: "Response time is usually a:",
        options: [
          "Non-functional requirement",
          "Functional requirement",
          "Design-only concept",
          "Database schema",
        ],
        answer: 0,
      },
      {
        question: "A prototype is mainly used for:",
        options: [
          "Clarifying requirements",
          "Final deployment",
          "Hardware checking",
          "Marketing only",
        ],
        answer: 0,
      },
      {
        question: "Requirement analysis includes:",
        options: [
          "Problem understanding",
          "Budget preparation",
          "User guide writing",
          "Hardware installation",
        ],
        answer: 0,
      },
      {
        question: "A requirement must be testable so it can be:",
        options: [
          "Validated objectively",
          "Ignored",
          "Removed",
          "Converted to hardware",
        ],
        answer: 0,
      },
      {
        question: "An ER diagram is best for:",
        options: [
          "Entity and relationship modeling",
          "Network routing",
          "Testing bugs",
          "Project pricing",
        ],
        answer: 0,
      },
      {
        question: "Ambiguity in requirements often comes from:",
        options: [
          "Vague wording like “fast”",
          "Clear acceptance criteria",
          "Precise documents",
          "Strong review",
        ],
        answer: 0,
      },
      {
        question: "A requirement review helps identify:",
        options: [
          "Inconsistencies and missing details",
          "Only hardware errors",
          "Only deployment steps",
          "Only source code comments",
        ],
        answer: 0,
      },
      {
        question: "A state machine model focuses on:",
        options: [
          "System behavior over time",
          "Budget changes",
          "Hardware cost",
          "Only database storage",
        ],
        answer: 0,
      },
      {
        question: "A context diagram shows:",
        options: [
          "The system and external entities",
          "Only internal classes",
          "Only server logs",
          "Only budget items",
        ],
        answer: 0,
      },
      {
        question: "Decomposition means:",
        options: [
          "Breaking a system into smaller parts",
          "Combining all modules",
          "Eliminating all testing",
          "Removing user interactions",
        ],
        answer: 0,
      },
      {
        question: "Class diagrams best describe:",
        options: [
          "Class structure",
          "Code execution order",
          "Project intensity",
          "Hardware inventory",
        ],
        answer: 0,
      },
      {
        question: "Business rules define:",
        options: [
          "Policies and constraints",
          "Only coding style",
          "Only UI colors",
          "Only end-user training",
        ],
        answer: 0,
      },
      {
        question: "Poor requirement modeling can cause:",
        options: [
          "Misunderstanding among stakeholders",
          "Fewer design changes",
          "No need for testing",
          "Lower hardware cost",
        ],
        answer: 0,
      },
      {
        question: "Requirement specification usually produces:",
        options: [
          "SRS",
          "Compiler output",
          "Hardware drivers",
          "Server scripts",
        ],
        answer: 0,
      },
      {
        question: "A non-functional requirement may state:",
        options: [
          "The system must support 500 users",
          "The system must allow login",
          "The system must save data",
          "The system must show a dashboard",
        ],
        answer: 0,
      },
      {
        question: "A flowchart is mainly used to show:",
        options: [
          "Steps and decisions",
          "Only cost estimates",
          "Only network speed",
          "Only team names",
        ],
        answer: 0,
      },
      {
        question: "A sequence diagram emphasizes:",
        options: [
          "Messages exchanged over time",
          "Only database tables",
          "Only cost variables",
          "Only project risks",
        ],
        answer: 0,
      },
      {
        question: "An untestable requirement is usually:",
        options: ["Poorly defined", "Clear", "Critical", "Already complete"],
        answer: 0,
      },
      {
        question: "A data dictionary defines:",
        options: [
          "Data elements and meanings",
          "Only hardware design",
          "Only process steps",
          "Only project schedule",
        ],
        answer: 0,
      },
      {
        question: "Which is not a requirement engineering task?",
        options: ["Installation", "Elicitation", "Modeling", "Validation"],
        answer: 0,
      },
      {
        question: "A good requirement is usually:",
        options: [
          "Clear and measurable",
          "Vague and broad",
          "Hidden",
          "Unrelated to stakeholders",
        ],
        answer: 0,
      },
      {
        question: "UML is useful for:",
        options: [
          "Describing system architecture concepts",
          "Only writing SQL",
          "Only managing hardware",
          "Only creating websites",
        ],
        answer: 0,
      },
      {
        question: "A scenario is:",
        options: [
          "A realistic interaction or event description",
          "A bug report",
          "A user manual",
          "A test script",
        ],
        answer: 0,
      },
      {
        question: "Process modeling may include:",
        options: [
          "DFD, use case, and activity diagrams",
          "Only cost calculation",
          "Only hardware output",
          "Only network cables",
        ],
        answer: 0,
      },
      {
        question: "Consistency in requirements means:",
        options: [
          "Requirements do not contradict one another",
          "All requirements are identical",
          "Requirements are optional",
          "Requirements are always short",
        ],
        answer: 0,
      },
      {
        question: "A use case diagram helps communicate:",
        options: [
          "System interactions and actors",
          "Only code complexity",
          "Only server load",
          "Only employee attendance",
        ],
        answer: 0,
      },
      {
        question: "Elicitation differs from validation because:",
        options: [
          "Elicitation gathers ideas while validation checks correctness",
          "They are identical",
          "Validation writes code",
          "Elicitation removes requirements",
        ],
        answer: 0,
      },
      {
        question: "Traceability is most closely tied to:",
        options: [
          "Following each requirement to implementation",
          "Only hardware testing",
          "Only project deadlines",
          "Only user logins",
        ],
        answer: 0,
      },
      {
        question: "A requirement should normally be:",
        options: [
          "Specific and verifiable",
          "Vague and informal",
          "Hidden from stakeholders",
          "Not testable",
        ],
        answer: 0,
      },
      {
        question: "A context model helps identify:",
        options: [
          "External entities that interact with the system",
          "Only project risks",
          "Only bugs",
          "Only hardware components",
        ],
        answer: 0,
      },
      {
        question: "Which statement is true about stakeholders?",
        options: [
          "They influence project success",
          "They are irrelevant to system design",
          "They never participate",
          "They only write code",
        ],
        answer: 0,
      },
      {
        question: "The main result of specification is usually:",
        options: [
          "An SRS document",
          "A compiler build",
          "A hardware inventory",
          "A network diagram",
        ],
        answer: 0,
      },
      {
        question: "A good requirement avoids terms like:",
        options: [
          "“fast enough” without measurable criteria",
          "Specific measurement values",
          "Clear stakeholder names",
          "Validation criteria",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "unit-3",
    name: "Unit 3",
    questions: [
      {
        question: "Software design is the process of:",
        options: [
          "Organizing software components and structure",
          "Only writing database scripts",
          "Only deploying software",
          "Only checking hardware",
        ],
        answer: 0,
      },
      {
        question: "A key design principle is:",
        options: [
          "High cohesion",
          "High coupling",
          "No modularity",
          "No abstraction",
        ],
        answer: 0,
      },
      {
        question: "Low coupling means:",
        options: [
          "Modules are loosely linked",
          "Modules are heavily linked",
          "Modules are identical",
          "Modules are unstructured",
        ],
        answer: 0,
      },
      {
        question: "High cohesion means:",
        options: [
          "A module has one clear purpose",
          "A module has no purpose",
          "A module is random",
          "A module has many unrelated tasks",
        ],
        answer: 0,
      },
      {
        question: "Encapsulation means:",
        options: [
          "Hiding internal implementation details",
          "Showing all internals",
          "Combining unrelated logic",
          "Avoiding all classes",
        ],
        answer: 0,
      },
      {
        question: "Examples of architectural style include:",
        options: [
          "Layered, client-server, pipe and filter",
          "Only SQL tables",
          "Only coding rules",
          "Only hardware architecture",
        ],
        answer: 0,
      },
      {
        question: "A layered architecture separates concerns by:",
        options: [
          "Levels or responsibilities",
          "Only hardware banks",
          "Only user names",
          "Only cost values",
        ],
        answer: 0,
      },
      {
        question: "Modularization means:",
        options: [
          "Breaking a system into modules",
          "Increasing code length",
          "Removing classes",
          "Ignoring design",
        ],
        answer: 0,
      },
      {
        question: "Polymorphism allows:",
        options: [
          "One interface to support multiple implementations",
          "No reuse",
          "Only static methods",
          "A single fixed behavior",
        ],
        answer: 0,
      },
      {
        question: "A design pattern is a:",
        options: [
          "Reusable solution to a recurring design problem",
          "Variable name",
          "Test case template",
          "Hardware part",
        ],
        answer: 0,
      },
      {
        question: "A class diagram shows:",
        options: [
          "Classes and relationships",
          "Only server logs",
          "Only bug lists",
          "Only user emails",
        ],
        answer: 0,
      },
      {
        question: "Abstraction helps by:",
        options: [
          "Simplifying complex systems",
          "Removing all code",
          "Avoiding testing",
          "Ignoring user needs",
        ],
        answer: 0,
      },
      {
        question: "Strong cohesion improves:",
        options: [
          "Maintainability",
          "Randomness",
          "Network latency",
          "Hardware cost",
        ],
        answer: 0,
      },
      {
        question: "A hierarchical component arrangement is often called:",
        options: [
          "Layered architecture",
          "One-off design",
          "Flat hardware",
          "Inline design",
        ],
        answer: 0,
      },
      {
        question: "A component diagram depicts:",
        options: [
          "System component relationships",
          "Only code comments",
          "Only database tables",
          "Only project risks",
        ],
        answer: 0,
      },
      {
        question: "Interfaces help by:",
        options: [
          "Separating contract from implementation",
          "Deleting all abstractions",
          "Combining modules",
          "Reducing team communication",
        ],
        answer: 0,
      },
      {
        question: "Reusability is usually improved by:",
        options: [
          "Modularity and clear interfaces",
          "High coupling",
          "Long monolithic code",
          "No documentation",
        ],
        answer: 0,
      },
      {
        question: "A package in object-oriented design is:",
        options: [
          "A group of related classes",
          "A database table",
          "A hardware connector",
          "A user story",
        ],
        answer: 0,
      },
      {
        question: "Inheritance is when:",
        options: [
          "A class inherits from another class",
          "A project delays completion",
          "A program ignores requirements",
          "A system is not tested",
        ],
        answer: 0,
      },
      {
        question: "Good design improves:",
        options: [
          "Maintainability and flexibility",
          "Only project cost",
          "Only hardware speed",
          "Only meeting count",
        ],
        answer: 0,
      },
      {
        question: "A design review is:",
        options: [
          "An evaluation of design quality by reviewers",
          "A type of compiler",
          "An installation process",
          "A deployment script",
        ],
        answer: 0,
      },
      {
        question: "Common enterprise architectures include:",
        options: [
          "Client-server and three-tier",
          "Only database tables",
          "Only hardware units",
          "Only source files",
        ],
        answer: 0,
      },
      {
        question: "Interfaces define:",
        options: [
          "A contract between components",
          "Only user hardware",
          "Only passwords",
          "Only code execution time",
        ],
        answer: 0,
      },
      {
        question: "Cohesion is the degree to which:",
        options: [
          "Elements in a module belong together",
          "Modules depend on each other",
          "Users are satisfied",
          "All code is identical",
        ],
        answer: 0,
      },
      {
        question: "Coupling is the degree to which:",
        options: [
          "Modules depend on each other",
          "Functions are separated",
          "Code is documented",
          "Users are involved",
        ],
        answer: 0,
      },
      {
        question: "A module with low cohesion and high coupling is usually:",
        options: [
          "Hard to maintain",
          "Easy to maintain",
          "Very stable",
          "Very cheap",
        ],
        answer: 0,
      },
      {
        question: "Object-oriented design includes:",
        options: [
          "Class, object, and inheritance",
          "Only loops",
          "Only SQL",
          "Only schedules",
        ],
        answer: 0,
      },
      {
        question: "An association in UML is:",
        options: [
          "A relationship between classes",
          "A database backup",
          "A test run",
          "A hardware error",
        ],
        answer: 0,
      },
      {
        question: "Single responsibility means:",
        options: [
          "Each class should have one reason to change",
          "Every program uses one file",
          "Only one person writes code",
          "Every requirement is identical",
        ],
        answer: 0,
      },
      {
        question: "Dependency injection helps by:",
        options: [
          "Reducing hard-coded dependencies",
          "Writing binary code",
          "Deleting abstractions",
          "Ignoring requirements",
        ],
        answer: 0,
      },
      {
        question: "A component is:",
        options: [
          "A reusable part of a system",
          "Only a requirement list",
          "Only a test suite",
          "Only a user guide",
        ],
        answer: 0,
      },
      {
        question: "The pipe-and-filter architecture is useful for:",
        options: [
          "Processing pipelines",
          "Simple hardware wiring",
          "Only cost analysis",
          "Only data storage",
        ],
        answer: 0,
      },
      {
        question: "A black-box design view focuses on:",
        options: [
          "External behavior",
          "Only internal variables",
          "Only memory size",
          "Only compiler warnings",
        ],
        answer: 0,
      },
      {
        question: "Refactoring is:",
        options: [
          "Improving structure without changing behavior",
          "Removing all tests",
          "Deploying hardware",
          "Changing requirements",
        ],
        answer: 0,
      },
      {
        question: "Separation of concerns helps with:",
        options: [
          "Reducing complexity and improving maintainability",
          "Avoiding all testing",
          "Eliminating design reviews",
          "Reducing user communication",
        ],
        answer: 0,
      },
      {
        question: "Architectural decisions should be based on:",
        options: [
          "Non-functional requirements and trade-offs",
          "Random choices",
          "Only code length",
          "Only budget views",
        ],
        answer: 0,
      },
      {
        question: "A decorator pattern:",
        options: [
          "Adds behavior dynamically",
          "Removes all code",
          "Changes hardware",
          "Prevents all requirement changes",
        ],
        answer: 0,
      },
      {
        question: "Scalability refers to:",
        options: [
          "Handling increased system demand",
          "Only front-end size",
          "Only CPU brand",
          "Only meeting frequency",
        ],
        answer: 0,
      },
      {
        question: "A flexible system usually contains:",
        options: [
          "Reusable and interchangeable components",
          "Only large classes",
          "Only one monolithic module",
          "No interfaces",
        ],
        answer: 0,
      },
      {
        question: "Design concerns may include:",
        options: [
          "Database schema, module decomposition, relationships",
          "Only user stories",
          "Only hardware drivers",
          "Only spreadsheet layout",
        ],
        answer: 0,
      },
      {
        question: "An interface in OO design is:",
        options: [
          "A contract typically without implementation",
          "A hardware connector",
          "A database server",
          "A test case",
        ],
        answer: 0,
      },
      {
        question: "Reliability design should emphasize:",
        options: [
          "Error handling and fault tolerance",
          "Maximizing code size",
          "Ignoring edge cases",
          "Removing documentation",
        ],
        answer: 0,
      },
      {
        question: "A design smell indicates:",
        options: [
          "Poor design quality",
          "Perfect code",
          "Only user satisfaction",
          "Only hardware performance",
        ],
        answer: 0,
      },
      {
        question: "A package diagram shows:",
        options: [
          "Package structure",
          "Only deployment timing",
          "Only code symbols",
          "Only user accounts",
        ],
        answer: 0,
      },
      {
        question: "Modularity is improved by:",
        options: [
          "Clear boundaries and responsibilities",
          "Global variables everywhere",
          "Long single functions",
          "No interfaces",
        ],
        answer: 0,
      },
      {
        question: "Good design balances:",
        options: [
          "Clarity, flexibility, and maintainability",
          "Only speed",
          "Only cost",
          "Only hardware support",
        ],
        answer: 0,
      },
      {
        question: "An architectural constraint is:",
        options: [
          "A limitation on design choices",
          "A code comment",
          "A test issue",
          "A schedule milestone",
        ],
        answer: 0,
      },
      {
        question: "The open/closed principle means software is:",
        options: [
          "Open for extension, closed for modification",
          "Only open to one developer",
          "Not reusable",
          "Always rewritten",
        ],
        answer: 0,
      },
      {
        question: "Design traceability connects:",
        options: [
          "Requirements to design artifacts",
          "Only bugs to tests",
          "Only users to hardware",
          "Only code to comments",
        ],
        answer: 0,
      },
      {
        question: "Useful design quality metrics include:",
        options: [
          "Complexity, cohesion, and coupling",
          "Only budget size",
          "Only meeting count",
          "Only user opinions",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "unit-4",
    name: "Unit 4",
    questions: [
      {
        question: "The goal of testing is to:",
        options: [
          "Identify defects and verify behavior",
          "Prove software is perfect",
          "Remove documentation",
          "Reduce hardware purchases",
        ],
        answer: 0,
      },
      {
        question: "White-box testing checks:",
        options: [
          "Internal logic and structure",
          "Only final output",
          "Only hardware errors",
          "Only user interviews",
        ],
        answer: 0,
      },
      {
        question: "Black-box testing focuses on:",
        options: [
          "Input-output behavior",
          "Internal logic",
          "Compiler warnings",
          "Memory addresses",
        ],
        answer: 0,
      },
      {
        question: "Unit testing usually examines:",
        options: [
          "Individual functions or modules",
          "The complete system",
          "Only hardware devices",
          "Only network speed",
        ],
        answer: 0,
      },
      {
        question: "Integration testing checks whether:",
        options: [
          "Modules work correctly together",
          "Only one unit works",
          "Hardware is installed",
          "Documents are printed",
        ],
        answer: 0,
      },
      {
        question: "System testing validates:",
        options: [
          "The complete system against requirements",
          "A single module only",
          "Only user comments",
          "Only cost planning",
        ],
        answer: 0,
      },
      {
        question: "Acceptance testing is usually done by:",
        options: [
          "End users or clients",
          "Only developers",
          "Only testers",
          "Only network engineers",
        ],
        answer: 0,
      },
      {
        question: "A test case includes:",
        options: [
          "Input, actions, and expected result",
          "Only a team name",
          "Only a code comment",
          "Only a budget figure",
        ],
        answer: 0,
      },
      {
        question: "Regression testing is used to:",
        options: [
          "Check old behavior still works after changes",
          "Ignore bug fixes",
          "Skip user validation",
          "Remove documentation",
        ],
        answer: 0,
      },
      {
        question: "A logic error is caused by:",
        options: [
          "Incorrect program logic",
          "Bad syntax rules",
          "Hardware heat",
          "Low memory only",
        ],
        answer: 0,
      },
      {
        question: "A syntax error occurs when:",
        options: [
          "The code violates language rules",
          "The requirement is vague",
          "The user is unclear",
          "The hardware fails",
        ],
        answer: 0,
      },
      {
        question: "Which testing level is broadest in scope?",
        options: [
          "System testing",
          "Unit testing",
          "Integration testing",
          "Static analysis",
        ],
        answer: 0,
      },
      {
        question: "Static analysis inspects code:",
        options: [
          "Without execution",
          "While running",
          "Only after release",
          "Only in the browser",
        ],
        answer: 0,
      },
      {
        question: "Defects found earlier are usually:",
        options: [
          "Cheaper to fix",
          "Harder to fix",
          "Impossible to fix",
          "Not relevant",
        ],
        answer: 0,
      },
      {
        question: "Review, inspection, and walkthrough are all:",
        options: [
          "Validation techniques",
          "Programming languages",
          "Project risks",
          "Hardware tools",
        ],
        answer: 0,
      },
      {
        question: "A bug report is:",
        options: [
          "A record of a defect and its details",
          "A design diagram",
          "A user guide",
          "A network report",
        ],
        answer: 0,
      },
      {
        question: "Verification asks:",
        options: [
          "Are we building the product right?",
          "Are we building the right product?",
          "Is the design pretty?",
          "Is the user satisfied?",
        ],
        answer: 0,
      },
      {
        question: "Validation asks:",
        options: [
          "Are we building the right product?",
          "Does the program compile?",
          "Is the code formatted?",
          "Is the hardware present?",
        ],
        answer: 0,
      },
      {
        question: "Test coverage measures:",
        options: [
          "How much code or requirements a test set exercises",
          "Number of meetings",
          "Project cost",
          "Team size",
        ],
        answer: 0,
      },
      {
        question: "A smoke test is used to:",
        options: [
          "Check whether the system is stable enough for full testing",
          "Replace all other tests",
          "Eliminate all bugs",
          "Skip code review",
        ],
        answer: 0,
      },
      {
        question: "Equivalence partitioning helps in:",
        options: [
          "Input domain testing",
          "Hardware calibration",
          "Cost estimation",
          "Database backup",
        ],
        answer: 0,
      },
      {
        question: "Boundary value analysis focuses on:",
        options: [
          "Values at the edges of valid ranges",
          "Average values only",
          "Middle values only",
          "Random values",
        ],
        answer: 0,
      },
      {
        question: "A test oracle provides:",
        options: [
          "Expected results or a judging mechanism",
          "Only a compiler routine",
          "Only project goals",
          "Only hardware logs",
        ],
        answer: 0,
      },
      {
        question: "Pair testing means:",
        options: [
          "Two testers work together",
          "Two versions are tested",
          "Two users share one screen",
          "Two databases are merged",
        ],
        answer: 0,
      },
      {
        question: "The purpose of code review is to:",
        options: [
          "Find defects early and improve quality",
          "Replace testing completely",
          "Skip design reviews",
          "Lower project cost only",
        ],
        answer: 0,
      },
      {
        question: "Common defect types include:",
        options: [
          "Logic errors, null pointers, performance issues",
          "Only syntax symbols",
          "Only hardware failures",
          "Only user stories",
        ],
        answer: 0,
      },
      {
        question: "A test plan describes:",
        options: [
          "Scope, approach, and resources",
          "Only code comments",
          "Only hardware setup",
          "Only user manual text",
        ],
        answer: 0,
      },
      {
        question: "Integration testing is usually performed:",
        options: [
          "After individual modules are tested",
          "Before requirements are set",
          "After deployment",
          "Only on hardware",
        ],
        answer: 0,
      },
      {
        question: "A traceability matrix links:",
        options: [
          "Requirements to test cases",
          "Users to hardware",
          "Bugs to budget",
          "Costs to staff",
        ],
        answer: 0,
      },
      {
        question: "Alpha testing is done by:",
        options: [
          "Internal team before release",
          "General public early",
          "Only hardware vendors",
          "Only marketing managers",
        ],
        answer: 0,
      },
      {
        question: "Beta testing usually involves:",
        options: [
          "Real users outside the project team",
          "Only developers",
          "Only testers",
          "Only database admins",
        ],
        answer: 0,
      },
      {
        question: "A vulnerability test seeks:",
        options: [
          "Security weaknesses",
          "Design details only",
          "Compiler syntax",
          "Budget issues",
        ],
        answer: 0,
      },
      {
        question: "Test automation can improve:",
        options: [
          "Speed and repeatability",
          "Only design quality",
          "Only hardware cost",
          "Only documentation length",
        ],
        answer: 0,
      },
      {
        question: "Inspection is a form of:",
        options: [
          "Non-execution testing",
          "Runtime execution",
          "Hardware installation",
          "Project closure",
        ],
        answer: 0,
      },
      {
        question: "Test data should be chosen to:",
        options: [
          "Cover important scenarios and edge cases",
          "Ignore edge cases",
          "Shorten implementation",
          "Reduce stakeholder input",
        ],
        answer: 0,
      },
      {
        question: "Branch coverage is based on:",
        options: [
          "Program branching",
          "Hardware cables",
          "Database fields",
          "Cost reports",
        ],
        answer: 0,
      },
      {
        question: "Defect triage decides:",
        options: [
          "Which defects to fix first",
          "How to write code comments",
          "Which users to ignore",
          "How many meetings to hold",
        ],
        answer: 0,
      },
      {
        question: "Load testing emphasizes:",
        options: [
          "Performance under stress",
          "Only code comments",
          "Only traffic lights",
          "Only hardware design",
        ],
        answer: 0,
      },
      {
        question: "Possible test result statuses include:",
        options: [
          "Pass, fail, blocked",
          "Only pass",
          "Only fail",
          "Only design",
        ],
        answer: 0,
      },
      {
        question: "User acceptance testing checks whether:",
        options: [
          "The product meets user expectations",
          "The network is fast",
          "The compiler works",
          "The database is huge",
        ],
        answer: 0,
      },
      {
        question: "Debugging aims to:",
        options: [
          "Locate and fix the root cause",
          "Write requirements only",
          "Skip testing",
          "Stop project management",
        ],
        answer: 0,
      },
      {
        question: "Testing measures quality aspects such as:",
        options: [
          "Correctness, reliability, usability",
          "Only staffing levels",
          "Only hardware version",
          "Only meeting dates",
        ],
        answer: 0,
      },
      {
        question: "Test execution means:",
        options: [
          "Running tests on the software",
          "Writing design diagrams",
          "Installing hardware",
          "Creating budgets",
        ],
        answer: 0,
      },
      {
        question: "A failure in software is:",
        options: [
          "An observed incorrect behavior",
          "A user request",
          "A project document",
          "A hardware part",
        ],
        answer: 0,
      },
      {
        question: "Performance testing focuses on:",
        options: [
          "Speed, responsiveness, and resource usage",
          "Only code comments",
          "Only team size",
          "Only version numbers",
        ],
        answer: 0,
      },
      {
        question: "Maintenance is most related to:",
        options: [
          "Fixing defects after deployment",
          "First requirement gathering",
          "Project kickoff only",
          "Only hardware setup",
        ],
        answer: 0,
      },
      {
        question: "Test-driven development means:",
        options: [
          "Write tests before code",
          "Write code before requirements",
          "Ignore tests until the final release",
          "Skip debugging",
        ],
        answer: 0,
      },
      {
        question: "Usability testing studies:",
        options: [
          "How easy and effective software is for users",
          "Only hardware performance",
          "Only compiler output",
          "Only admin tasks",
        ],
        answer: 0,
      },
      {
        question: "Which is not usually a testing activity?",
        options: [
          "Requirement brainstorming",
          "Executing tests",
          "Logging defects",
          "Analyzing results",
        ],
        answer: 0,
      },
      {
        question: "A good test case should cover:",
        options: [
          "Critical and risky behavior",
          "Low-priority comments only",
          "Only budget numbers",
          "Only machine code",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "unit-5",
    name: "Unit 5",
    questions: [
      {
        question: "Software project management includes:",
        options: [
          "Planning, organizing, and controlling work",
          "Only testing",
          "Only deployment",
          "Only hardware assembly",
        ],
        answer: 0,
      },
      {
        question: "Core project management activities include:",
        options: [
          "Planning, monitoring, control",
          "Only user stories",
          "Only release notes",
          "Only coding",
        ],
        answer: 0,
      },
      {
        question: "A WBS helps by:",
        options: [
          "Breaking work into smaller tasks",
          "Removing all estimates",
          "Ignoring team roles",
          "Stopping project control",
        ],
        answer: 0,
      },
      {
        question: "A milestone represents:",
        options: [
          "An important checkpoint or event",
          "A syntax issue",
          "A bug report",
          "A project budget",
        ],
        answer: 0,
      },
      {
        question: "Gantt charts are used for:",
        options: [
          "Scheduling and visualizing tasks",
          "Only database design",
          "Only security testing",
          "Only compilation",
        ],
        answer: 0,
      },
      {
        question: "Critical path analysis identifies:",
        options: [
          "The sequence that affects project duration",
          "Only hardware connections",
          "Only user stories",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "Risk management is the process of:",
        options: [
          "Identifying and handling project risk",
          "Only writing requirements",
          "Only installing software",
          "Only creating reports",
        ],
        answer: 0,
      },
      {
        question: "Typical project risks include:",
        options: [
          "Changing requirements, budget issues, turnover",
          "Only code comments",
          "Only UI colors",
          "Only server memory",
        ],
        answer: 0,
      },
      {
        question: "Scope management means:",
        options: [
          "Defining and controlling the project scope",
          "Removing all tasks",
          "Ignoring user needs",
          "Deploying without planning",
        ],
        answer: 0,
      },
      {
        question: "A project baseline is used to:",
        options: [
          "Measure progress against a plan",
          "Delete all requirements",
          "Replace code review",
          "Remove stakeholders",
        ],
        answer: 0,
      },
      {
        question: "Estimation depends on:",
        options: [
          "Size, complexity, and productivity",
          "Only hardware cost",
          "Only code comments",
          "Only release date",
        ],
        answer: 0,
      },
      {
        question: "Common estimation methods include:",
        options: [
          "COCOMO, function points, expert judgment",
          "Only diff tools",
          "Only UI mocks",
          "Only bug reports",
        ],
        answer: 0,
      },
      {
        question: "Configuration management is about:",
        options: [
          "Controlling changes to project artifacts",
          "Lowering hardware prices",
          "Ignoring versioning",
          "Removing user feedback",
        ],
        answer: 0,
      },
      {
        question: "Version control is important because it:",
        options: [
          "Tracks code and supports teamwork",
          "Removes all bugs",
          "Needs no backups",
          "Ignores collaboration",
        ],
        answer: 0,
      },
      {
        question: "A software metric is:",
        options: [
          "A quantitative measure of a software attribute",
          "A user story",
          "A type of bug",
          "A hardware driver",
        ],
        answer: 0,
      },
      {
        question: "The iron triangle usually refers to:",
        options: [
          "Cost, time, and scope",
          "Quality, speed, and design",
          "Users, clients, and testers",
          "Hardware, software, and network",
        ],
        answer: 0,
      },
      {
        question: "Communication is important because it:",
        options: [
          "Aligns team and stakeholders",
          "Removes all planning",
          "Replaces requirements",
          "Eliminates testing",
        ],
        answer: 0,
      },
      {
        question: "Schedule issues often include:",
        options: [
          "Dependencies, delays, and resource conflicts",
          "Only budget figures",
          "Only UI issues",
          "Only hardware cost",
        ],
        answer: 0,
      },
      {
        question: "Earned value analysis monitors:",
        options: [
          "Project performance against cost and schedule",
          "Only code quality",
          "Only UI layout",
          "Only manager feedback",
        ],
        answer: 0,
      },
      {
        question: "A status report is used to:",
        options: [
          "Communicate project progress",
          "Write business rules",
          "Compile source code",
          "Install software",
        ],
        answer: 0,
      },
      {
        question: "A risk register documents:",
        options: [
          "Risks and treatment plans",
          "Only budget totals",
          "Only user names",
          "Only code reviews",
        ],
        answer: 0,
      },
      {
        question: "The project manager is responsible for:",
        options: [
          "Overall coordination",
          "Only database updates",
          "Only hardware purchases",
          "Only UI testing",
        ],
        answer: 0,
      },
      {
        question: "A task dependency means:",
        options: [
          "One task depends on another",
          "Two tasks are identical",
          "A task is unnecessary",
          "A task removes a risk",
        ],
        answer: 0,
      },
      {
        question: "A resource plan describes:",
        options: [
          "People, tools, and time needed",
          "Only project budget",
          "Only user stories",
          "Only code modules",
        ],
        answer: 0,
      },
      {
        question: "Estimation is challenging because of:",
        options: [
          "Uncertainty and changing requirements",
          "A lack of users",
          "No software exists",
          "Unlimited deadliness",
        ],
        answer: 0,
      },
      {
        question: "Quality assurance focuses on:",
        options: [
          "Preventing defects through process improvement",
          "Only fixing bugs late",
          "Only reducing meetings",
          "Only removing users",
        ],
        answer: 0,
      },
      {
        question: "Process metrics measure:",
        options: [
          "How the process performs",
          "Only hardware speed",
          "Only code comments",
          "Only meeting dates",
        ],
        answer: 0,
      },
      {
        question: "Project closure includes:",
        options: [
          "Final review and lessons learned",
          "Only code writing",
          "Only bug creation",
          "Only user interviews",
        ],
        answer: 0,
      },
      {
        question: "A deliverable is:",
        options: [
          "A tangible result of the project",
          "A test case only",
          "A coding rule",
          "A user scenario",
        ],
        answer: 0,
      },
      {
        question: "Stakeholder management aims to:",
        options: [
          "Understand and address stakeholder needs",
          "Reduce all requirements",
          "Stop communication",
          "Avoid project decisions",
        ],
        answer: 0,
      },
      {
        question: "Monitoring and control help track:",
        options: [
          "Actual project progress",
          "Only hardware costs",
          "Only user schedules",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "Agile project management emphasizes:",
        options: [
          "Iterative delivery and collaboration",
          "Rigid long planning only",
          "No stakeholder input",
          "No documentation",
        ],
        answer: 0,
      },
      {
        question: "Example quality metrics include:",
        options: [
          "Defect density, reliability, maintainability",
          "Only compiler speed",
          "Only memory usage",
          "Only test names",
        ],
        answer: 0,
      },
      {
        question: "A contract in software projects defines:",
        options: [
          "Scope, deliverables, and obligations",
          "Only hardware prices",
          "Only bug counts",
          "Only user stories",
        ],
        answer: 0,
      },
      {
        question: "An issue log usually tracks:",
        options: [
          "Problem, owner, and status",
          "Only dates",
          "Only hardware drivers",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "Risk mitigation aims to:",
        options: [
          "Reduce the likelihood or impact of risks",
          "Skip all testing",
          "Ignore documentation",
          "Reduce team size",
        ],
        answer: 0,
      },
      {
        question: "A major challenge for project managers is:",
        options: [
          "Balancing cost, time, and quality",
          "Writing all code themselves",
          "Avoiding communication",
          "Removing planning",
        ],
        answer: 0,
      },
      {
        question: "A release plan is:",
        options: [
          "A schedule for delivering increments",
          "A defect log",
          "A hardware checklist",
          "A code review form",
        ],
        answer: 0,
      },
      {
        question: "A configuration repository is used for:",
        options: [
          "Version control and change tracking",
          "Only cost analysis",
          "Only marketing content",
          "Only hardware support",
        ],
        answer: 0,
      },
      {
        question: "A change request is:",
        options: [
          "A formal proposal to alter scope or requirements",
          "A syntax error",
          "A test script",
          "A user story only",
        ],
        answer: 0,
      },
      {
        question: "Poor project management often leads to:",
        options: [
          "Cost overruns and missed deadlines",
          "Higher code quality",
          "No user input",
          "No requirement changes",
        ],
        answer: 0,
      },
      {
        question: "A Gantt chart shows:",
        options: [
          "Task timing and schedule",
          "Only hardware speed",
          "Only database rows",
          "Only code complexity",
        ],
        answer: 0,
      },
      {
        question: "A project constraint is:",
        options: [
          "A limitation such as time or budget",
          "A user interface type",
          "A compiler rule",
          "A quality metric",
        ],
        answer: 0,
      },
      {
        question: "Common software quality goals include:",
        options: [
          "Correctness, reliability, maintainability",
          "Only low cost",
          "Only faster coding",
          "Only visual appeal",
        ],
        answer: 0,
      },
      {
        question: "A backlog in agile is:",
        options: [
          "A prioritized list of work items",
          "A deployment log",
          "A test suite",
          "A hardware inventory",
        ],
        answer: 0,
      },
      {
        question: "Documentation matters in project management because it:",
        options: [
          "Supports clarity and accountability",
          "Replaces all meetings",
          "Increases bugs",
          "Reduces code review",
        ],
        answer: 0,
      },
      {
        question: "Effective project control requires:",
        options: [
          "Measuring progress and correcting deviations",
          "Ignoring metrics",
          "Skipping communication",
          "Avoiding monitoring",
        ],
        answer: 0,
      },
      {
        question: "The team lead is responsible for:",
        options: [
          "Coordinating tasks and guiding the group",
          "Only writing database code",
          "Only purchasing hardware",
          "Only reading marketing reports",
        ],
        answer: 0,
      },
      {
        question: "Software productivity is influenced by:",
        options: [
          "Team experience, tools, and project complexity",
          "Only hardware speed",
          "Only project budget",
          "Only release notes",
        ],
        answer: 0,
      },
      {
        question: "Risk planning helps by:",
        options: [
          "Preparing for unexpected issues",
          "Removing all project changes",
          "Skipping quality review",
          "Ignoring stakeholders",
        ],
        answer: 0,
      },
      {
        question: "A status report usually tracks:",
        options: [
          "Actual progress against the plan",
          "Only bug names",
          "Only database designs",
          "Only hardware life cycle",
        ],
        answer: 0,
      },
      {
        question: "Effective project management is best described as:",
        options: [
          "Planning, monitoring, and adjusting as needed",
          "Ignoring risk until release",
          "Writing code only at the end",
          "Avoiding documentation",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "unit-6",
    name: "Unit 6",
    questions: [
      {
        question: "Software cost estimation predicts:",
        options: [
          "Effort, schedule, and resource needs",
          "Only user feedback",
          "Only hardware cost",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "Cost estimation is important because it supports:",
        options: [
          "Budgeting and planning",
          "No design work",
          "Zero defects",
          "No testing",
        ],
        answer: 0,
      },
      {
        question: "Software cost is strongly affected by:",
        options: [
          "Size, complexity, and requirements stability",
          "Only user names",
          "Only code comments",
          "Only hardware replacement",
        ],
        answer: 0,
      },
      {
        question: "LOC stands for:",
        options: [
          "Lines of code",
          "Levels of communication",
          "Logic of computation",
          "Loss of code",
        ],
        answer: 0,
      },
      {
        question: "Common cost estimation models include:",
        options: [
          "COCOMO, function points, expert judgment",
          "Only code review",
          "Only deployment logs",
          "Only UI layout",
        ],
        answer: 0,
      },
      {
        question: "COCOMO stands for:",
        options: [
          "Constructive Cost Model",
          "Complexity Control Model",
          "Code Output Cost Method",
          "Customer Oriented Cost Overview",
        ],
        answer: 0,
      },
      {
        question: "Function point analysis measures:",
        options: [
          "User-visible functions and data",
          "Only programming language count",
          "Only hardware memory",
          "Only server logs",
        ],
        answer: 0,
      },
      {
        question: "Major sources of estimation error include:",
        options: [
          "Changing requirements, poor data, unclear scope",
          "Only user interviews",
          "Only code style",
          "Only large screens",
        ],
        answer: 0,
      },
      {
        question: "Effort estimation predicts:",
        options: [
          "Labor required for the project",
          "Hardware budget only",
          "Only maintenance activity",
          "Only user needs",
        ],
        answer: 0,
      },
      {
        question: "Software effort is influenced by:",
        options: [
          "Team productivity and tool support",
          "Only network bandwidth",
          "Only UI colors",
          "Only user stories",
        ],
        answer: 0,
      },
      {
        question: "Schedule estimation predicts:",
        options: [
          "Time needed to finish the project",
          "Only test results",
          "Only documentation length",
          "Only hardware delivery",
        ],
        answer: 0,
      },
      {
        question: "Direct costs include:",
        options: [
          "Developer salaries and software licenses",
          "Office support only",
          "Only utility bills",
          "Only meeting costs",
        ],
        answer: 0,
      },
      {
        question: "Indirect costs may include:",
        options: [
          "Utilities and administration",
          "Developer salaries only",
          "Only code reviews",
          "Only hardware sensors",
        ],
        answer: 0,
      },
      {
        question: "Productivity in software is:",
        options: [
          "Output per unit of effort",
          "Meeting frequency",
          "Code length per bug",
          "Deployment time alone",
        ],
        answer: 0,
      },
      {
        question: "Estimates should be treated as:",
        options: [
          "Approximate and revisable",
          "Exact and permanent",
          "Unnecessary",
          "Only for UI teams",
        ],
        answer: 0,
      },
      {
        question: "Function points count:",
        options: [
          "Inputs, outputs, files, queries, and interfaces",
          "Only machine code",
          "Only bugs",
          "Only project budgets",
        ],
        answer: 0,
      },
      {
        question: "Historical data helps estimation by:",
        options: [
          "Providing benchmarks from similar projects",
          "Removing all risk",
          "Eliminating scope changes",
          "Avoiding design",
        ],
        answer: 0,
      },
      {
        question: "Cost risks include:",
        options: [
          "Requirements creep, delays, and complexity",
          "Only user names",
          "Only software versions",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "A cost estimate is more reliable when:",
        options: [
          "Requirements are clear and history exists",
          "No stakeholders exist",
          "Hardware is ignored",
          "No planning occurs",
        ],
        answer: 0,
      },
      {
        question: "Bottom-up estimation estimates:",
        options: [
          "Each task and then totals them",
          "Only the final date",
          "Only server capacity",
          "Only code style",
        ],
        answer: 0,
      },
      {
        question: "Top-down estimation starts with:",
        options: [
          "Overall project size or budget",
          "One small code module",
          "One unit test",
          "One user story",
        ],
        answer: 0,
      },
      {
        question: "Person-months are a measure of:",
        options: [
          "Labor effort",
          "Hardware memory",
          "Number of test cases",
          "Meeting frequency",
        ],
        answer: 0,
      },
      {
        question: "Outputs of cost estimation include:",
        options: [
          "Effort, schedule, and budget estimates",
          "Only code files",
          "Only test reports",
          "Only hardware logs",
        ],
        answer: 0,
      },
      {
        question: "Estimation errors can be reduced by:",
        options: [
          "Using historical data and revising assumptions",
          "Ignoring project history",
          "Avoiding project estimates",
          "Removing all requirements",
        ],
        answer: 0,
      },
      {
        question: "A contingency reserve is:",
        options: [
          "Extra time or budget for uncertainty",
          "A deleted requirement",
          "A user story",
          "A hardware component",
        ],
        answer: 0,
      },
      {
        question: "Poor requirement clarity usually:",
        options: [
          "Increases cost",
          "Decreases project cost",
          "Improves hardware speed",
          "Removes stakeholder needs",
        ],
        answer: 0,
      },
      {
        question: "Software sizing measures:",
        options: [
          "The scale of the software project",
          "Only design colors",
          "Only test results",
          "Only documentation length",
        ],
        answer: 0,
      },
      {
        question: "Common sizing techniques include:",
        options: [
          "Function points, LOC, use-case points",
          "Only UI heuristics",
          "Only server uptime",
          "Only meeting agendas",
        ],
        answer: 0,
      },
      {
        question: "Uncertainty matters in estimation because it affects:",
        options: [
          "Confidence in the estimate",
          "Project color choices",
          "Hardware branding",
          "Team names",
        ],
        answer: 0,
      },
      {
        question: "Software cost drivers may include:",
        options: [
          "Complexity, reliability, and volatility",
          "Only team lunches",
          "Only code comments",
          "Only hardware vendors",
        ],
        answer: 0,
      },
      {
        question: "Historical estimates are valuable because they:",
        options: [
          "Calibrate new estimates",
          "Replace all planning",
          "Eliminate user needs",
          "Stop testing",
        ],
        answer: 0,
      },
      {
        question: "Scope growth usually leads to:",
        options: [
          "Higher cost",
          "Lower cost",
          "No cost changes",
          "Only lower user demand",
        ],
        answer: 0,
      },
      {
        question: "Large systems often cost more because they involve:",
        options: [
          "More complexity and coordination",
          "Less testing",
          "Fewer requirements",
          "Simpler code",
        ],
        answer: 0,
      },
      {
        question: "Estimation challenges include:",
        options: [
          "Unclear requirements, changing technology, variable resources",
          "Only server backups",
          "Only UI spacing",
          "Only team names",
        ],
        answer: 0,
      },
      {
        question: "Cost-benefit analysis compares:",
        options: [
          "Expected costs and benefits",
          "Only hardware costs",
          "Only user satisfaction",
          "Only code comments",
        ],
        answer: 0,
      },
      {
        question: "A key assumption in COCOMO is that effort depends on:",
        options: [
          "Project size and cost drivers",
          "Only one developer",
          "Only one language",
          "Only hardware memory",
        ],
        answer: 0,
      },
      {
        question: "A productivity measure may be:",
        options: [
          "Function points per person-month",
          "Defects per hour",
          "Cost per feature",
          "All of the above",
        ],
        answer: 3,
      },
      {
        question: "A realistic estimate should include:",
        options: [
          "Assumptions, risk, and uncertainty",
          "Only fixed values",
          "Only budget totals",
          "Only meeting minutes",
        ],
        answer: 0,
      },
      {
        question: "Sources of estimation bias include:",
        options: [
          "Optimism, weak planning, poor requirements",
          "Only code review",
          "Only UI decisions",
          "Only low-level tasks",
        ],
        answer: 0,
      },
      {
        question: "A project budget is:",
        options: [
          "The approved cost plan",
          "A database diagram",
          "A user requirement",
          "A release note",
        ],
        answer: 0,
      },
      {
        question: "Cost control aims to:",
        options: [
          "Monitor actual spending against the plan",
          "Increase vendor count",
          "Remove tests",
          "Ignore changes",
        ],
        answer: 0,
      },
      {
        question: "Software economics includes:",
        options: [
          "Return on investment and trade-offs",
          "Only hardware pricing",
          "Only project slogans",
          "Only user stories",
        ],
        answer: 0,
      },
      {
        question: "The least certain estimate is usually:",
        options: [
          "An early rough estimate",
          "The final approved estimate",
          "The post-deployment estimate",
          "The final audit report",
        ],
        answer: 0,
      },
      {
        question: "Estimates are refined because:",
        options: [
          "New information changes understanding",
          "Documentation is unnecessary",
          "Testing never matters",
          "Requirements always stop changing",
        ],
        answer: 0,
      },
      {
        question: "The main output of software cost estimation is:",
        options: [
          "An estimate of effort, schedule, and resources",
          "A bug-free software system",
          "A deployment script",
          "A hardware purchase list",
        ],
        answer: 0,
      },
      {
        question: "Which is not an estimation input?",
        options: [
          "Favorite system color",
          "Project size",
          "Requirements clarity",
          "Team capability",
        ],
        answer: 0,
      },
      {
        question: "Contingency is important because it:",
        options: [
          "Provides cushion for uncertainty",
          "Replaces planning",
          "Removes all bugs",
          "Eliminates user needs",
        ],
        answer: 0,
      },
      {
        question: "A cost driver in COCOMO is a factor that:",
        options: [
          "Influences effort and cost",
          "Only affects hardware",
          "Only affects meetings",
          "Only affects code comments",
        ],
        answer: 0,
      },
      {
        question: "Software economics is the study of:",
        options: [
          "Costs, benefits, and trade-offs",
          "Only hardware prices",
          "Only database tables",
          "Only UI design",
        ],
        answer: 0,
      },
      {
        question: "A conservative estimate is often used when:",
        options: [
          "Risk is high and requirements are uncertain",
          "The project is finished",
          "The team has no budget",
          "The software is tiny",
        ],
        answer: 0,
      },
      {
        question: "Effort in estimation refers to:",
        options: [
          "The labor required, often in person-months",
          "Hardware memory",
          "Number of test cases",
          "Number of meetings",
        ],
        answer: 0,
      },
      {
        question: "A practical improvement to estimation is:",
        options: [
          "Use history and update assumptions regularly",
          "Never revise estimates",
          "Ignore team capability",
          "Measure only comments",
        ],
        answer: 0,
      },
    ],
  },
];

const state = {
  activeUnit: units[0].id,
  answers: {},
};

const tabsEl = document.getElementById("unit-tabs");
const containerEl = document.getElementById("quiz-container");

function renderTabs() {
  tabsEl.innerHTML = units
    .map(
      (unit) => `
      <button
        class="tab-button ${unit.id === state.activeUnit ? "active" : ""}"
        type="button"
        data-target="${unit.id}"
      >
        ${unit.name}
      </button>
    `,
    )
    .join("");

  tabsEl.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeUnit = button.dataset.target;
      renderTabs();
      renderUnitPanels();
    });
  });
}

function getSelectedAnswer(unitId, questionIndex) {
  const key = `${unitId}-${questionIndex}`;
  return state.answers[key];
}

function countAnswered(unit) {
  return unit.questions.filter(
    (_, idx) => getSelectedAnswer(unit.id, idx) !== undefined,
  ).length;
}

function getScore(unit) {
  let score = 0;
  unit.questions.forEach((item, idx) => {
    if (getSelectedAnswer(unit.id, idx) === item.answer) score += 1;
  });
  return score;
}

function renderUnitPanels() {
  containerEl.innerHTML = units
    .map((unit) => {
      const questionsMarkup = unit.questions
        .map((item, index) => {
          const selected = getSelectedAnswer(unit.id, index);
          const name = `unit-${unit.id}-q-${index}`;
          const hasAnswer = selected !== undefined;
          const isCorrect = hasAnswer && selected === item.answer;
          return `
            <div class="question-card">
              <p>Q${index + 1}. ${item.question}</p>
              <div class="options">
                ${item.options
                  .map(
                    (option, optionIdx) => `
                    <label class="option-label ${
                      hasAnswer && optionIdx === selected
                        ? isCorrect
                          ? "correct"
                          : "incorrect"
                        : ""
                    }">
                      <input
                        type="radio"
                        name="${name}"
                        value="${optionIdx}"
                        ${selected === optionIdx ? "checked" : ""}
                        data-unit="${unit.id}"
                        data-question="${index}"
                      />
                      <span>${String.fromCharCode(65 + optionIdx)}. ${option}</span>
                    </label>
                  `,
                  )
                  .join("")}
              </div>
              ${
                hasAnswer
                  ? `<p class="answer-feedback ${
                      isCorrect ? "correct" : "incorrect"
                    }">${
                      isCorrect
                        ? "Correct answer"
                        : `Incorrect. Correct answer: ${item.options[item.answer]}`
                    }</p>`
                  : ""
              }
            </div>
          `;
        })
        .join("");

      const answered = countAnswered(unit);
      const score = getScore(unit);

      return `
        <section class="unit-panel ${unit.id === state.activeUnit ? "active" : ""}" data-unit-panel="${unit.id}">
          <div class="unit-head">
            <h2 class="unit-title">${unit.name}</h2>
            <div class="unit-meta">
              <span class="badge">${answered}/${unit.questions.length} answered</span>
              <span class="badge">Score: ${score}/${unit.questions.length}</span>
            </div>
          </div>
          <div class="question-list">${questionsMarkup}</div>
          <div class="summary-box">
            <div>
              <strong>${unit.name} Summary</strong>
              <div class="summary-text">${answered} answered out of ${unit.questions.length} questions.</div>
            </div>
            <button class="reset-btn" type="button" data-reset-unit="${unit.id}">Reset answers</button>
          </div>
        </section>
      `;
    })
    .join("");

  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const target = event.target;
      const key = `${target.dataset.unit}-${target.dataset.question}`;
      state.answers[key] = Number(target.value);
      renderTabs();
      renderUnitPanels();
    });
  });

  document.querySelectorAll("[data-reset-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      const unitId = button.dataset.resetUnit;
      const unit = units.find((item) => item.id === unitId);
      unit.questions.forEach((_, idx) => {
        delete state.answers[`${unitId}-${idx}`];
      });
      renderTabs();
      renderUnitPanels();
    });
  });
}

renderTabs();
renderUnitPanels();
