export const personalInfo = {
  name: "harsh",
  fullName: "harsh vardhan soni",
  handle: "techitachi_ · next.js / react · full-stack & aiml",
  email: "harshvardhansoni012004@gmail.com",
  phone: "6269584026",
  github: "https://github.com/harshvardhansoni12-code",
  linkedin: "https://linkedin.com/in/harsh-vardhan-soni-68741a294",
  twitter: "https://x.com/techitachi_",
  twitterHandle: "@techitachi_",
  location: "jabalpur, in",
};

export const projects = [
  {
    id: "shrinkster",
    title: "shrinkster",
    resumeTitle: "shrinkster",
    subtitle: "modern, high-speed url shortening service with analytics & custom aliases",
    tags: ["next.js", "react", "javascript", "tailwind css", "prisma", "postgresql", "node.js", "rest api", "vercel"],
    techStack: "next.js, react, javascript, tailwind css, prisma, postgresql, node.js, rest api, vercel",
    description:
      "a minimalist url shortener that converts long urls into short, shareable links. features high-speed redirection routing, custom alias creation, copy utilities, and backend route optimization.",
    details:
      "developed with next.js and react to provide an instant, frictionless user experience. designed backend api routes for rapid hash generation, collision-free code mapping, and sub-millisecond redirection. backed by postgresql and prisma orm for robust link persistence.",
    bullets: [
      "built the frontend using next.js and react to create a clean, responsive user interface for entering urls and copying generated short links.",
      "implemented backend api routes for creating shortened urls and redirecting short codes to their original destinations.",
    ],
    showLiveInResume: true,
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://shrinkster-six.vercel.app/",
  },
  {
    id: "examinee",
    title: "examinee",
    resumeTitle: "examinee (ai powered quiz app)",
    subtitle: "ai powered study & revision platform for automated flashcards, notes, & mcqs",
    tags: ["next.js", "react", "javascript", "tailwind css", "shadcn/ui", "framer motion", "nextauth", "prisma", "postgresql", "google gemini api", "node.js", "rest api"],
    techStack: "next.js, react, javascript, tailwind css, shadcn/ui, framer motion, nextauth, prisma, postgresql, google gemini api, node.js, rest api",
    description:
      "an ai-powered study and revision platform that transforms student notes and raw pdfs into structured study outputs with automatic summary generation, smart flashcard creation, and mcq quizzes for efficient exam prep.",
    details:
      "built using next.js, react, tailwind css, shadcn/ui, and framer motion for a fluid frontend experience. integrated google gemini api for structured prompt workflows and parsing complex study materials. implemented nextauth for authentication and postgresql with prisma for storing student progress, quiz results, and flashcard decks.",
    bullets: [
      "developed features for automatic summary generation, flashcard creation, and mcq generation to support exam preparation.",
      "integrated ai generation workflows with gemini api to transform raw text into structured study outputs.",
    ],
    showLiveInResume: false,
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://examinee-qxup.vercel.app",
  },
  {
    id: "chat-mini",
    title: "chat-mini",
    resumeTitle: "chat-mini (message-app)",
    subtitle: "real-time room-based messaging app with typing indicators & presence tracking",
    tags: ["next.js", "react", "javascript", "tailwind css", "node.js", "socket.io", "prisma", "postgresql", "nextauth", "node.js", "rest api"],
    techStack: "next.js, react, javascript, tailwind css, node.js, socket.io, prisma, postgresql, nextauth, node.js, rest api",
    description:
      "real-time chat application with room-based messaging. users can create rooms, join instantly, exchange live messages, view typing indicators, and track room participant updates with persistent storage.",
    details:
      "engineered with socket.io and websockets on node.js/express for bi-directional event broadcast. uses postgresql via prisma to persist message histories and room records. features responsive ui with tailwind css, nextauth session management, and live typing indicators.",
    bullets: [
      "users can create rooms, join rooms, and send messages instantly",
      "persistent chat data stored in postgresql via prisma",
      "live features include typing indicators, room/member updates, and socket-based communication",
    ],
    showLiveInResume: false,
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://chat-mini-production-de18.up.railway.app",
  },
];

export const skills = [
  {
    category: "languages",
    items: "javascript, typescript, sql, python",
  },
  {
    category: "frontend",
    items: "react, next.js, html5, css3, tailwind css",
  },
  {
    category: "backend",
    items: "node.js, express.js, rest apis, websockets, socket.io, api-integration",
  },
  {
    category: "tools",
    items: "git, github, vs code, postman, docker",
  },
];

export const education = {
  institution: "baderia global college of engineering and management",
  degree: "btech in aiml",
  graduation: "",
  coursework: "",
};
