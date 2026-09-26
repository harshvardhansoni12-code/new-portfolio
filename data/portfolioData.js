export const personalInfo = {
  name: "harsh",
  fullName: "HARSH VARDHAN SONI",
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
    title: "Shrinkster",
    resumeTitle: "Shrinkster",
    subtitle: "modern, high-speed url shortening service with analytics & custom aliases",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Node.js", "REST API", "Vercel"],
    techStack: "Next.js, React, JavaScript, Tailwind CSS, Prisma, PostgreSQL, Node.js, REST API, Vercel",
    description:
      "a minimalist url shortener that converts long urls into short, shareable links. features high-speed redirection routing, custom alias creation, copy utilities, and backend route optimization.",
    details:
      "Developed with Next.js and React to provide an instant, frictionless user experience. Designed backend API routes for rapid hash generation, collision-free code mapping, and sub-millisecond redirection. Backed by PostgreSQL and Prisma ORM for robust link persistence.",
    bullets: [
      "Built the frontend using Next.js and React to create a clean, responsive user interface for entering URLs and copying generated short links.",
      "Implemented backend API routes for creating shortened URLs and redirecting short codes to their original destinations.",
    ],
    showLiveInResume: true,
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://shrinkster-six.vercel.app/",
  },
  {
    id: "examinee",
    title: "examinee",
    resumeTitle: "Examinee (AI powered quiz app)",
    subtitle: "ai powered study & revision platform for automated flashcards, notes, & mcqs",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "NextAuth", "Prisma", "PostgreSQL", "Google Gemini API", "Node.js", "REST API"],
    techStack: "Next.js, React, JavaScript, Tailwind CSS, shadcn/ui, Framer Motion, NextAuth, Prisma, PostgreSQL, Google Gemini API, Node.js, REST API",
    description:
      "an ai-powered study and revision platform that transforms student notes and raw pdfs into structured study outputs with automatic summary generation, smart flashcard creation, and mcq quizzes for efficient exam prep.",
    details:
      "Built using Next.js, React, Tailwind CSS, shadcn/ui, and Framer Motion for a fluid frontend experience. Integrated Google Gemini API for structured prompt workflows and parsing complex study materials. Implemented NextAuth for authentication and PostgreSQL with Prisma for storing student progress, quiz results, and flashcard decks.",
    bullets: [
      "Developed features for automatic summary generation, flashcard creation, and MCQ generation to support exam preparation.",
      "Integrated AI generation workflows with Gemini API to transform raw text into structured study outputs.",
    ],
    showLiveInResume: false,
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://examinee-qxup.vercel.app",
  },
  {
    id: "chat-mini",
    title: "chat-mini",
    resumeTitle: "Chat-mini (Message-app)",
    subtitle: "real-time room-based messaging app with typing indicators & presence tracking",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Node.js", "Socket.IO", "Prisma", "PostgreSQL", "NextAuth", "Node.js", "REST API"],
    techStack: "Next.js, React, JavaScript, Tailwind CSS, Node.js, Socket.IO, Prisma, PostgreSQL, NextAuth, Node.js, REST API",
    description:
      "real-time chat application with room-based messaging. users can create rooms, join instantly, exchange live messages, view typing indicators, and track room participant updates with persistent storage.",
    details:
      "Engineered with Socket.IO and WebSockets on Node.js/Express for bi-directional event broadcast. Uses PostgreSQL via Prisma to persist message histories and room records. Features responsive UI with Tailwind CSS, NextAuth session management, and live typing indicators.",
    bullets: [
      "Users can create rooms, join rooms, and send messages instantly",
      "Persistent chat data stored in PostgreSQL via Prisma",
      "Live features include typing indicators, room/member updates, and socket-based communication",
    ],
    showLiveInResume: false,
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://chat-mini-production-de18.up.railway.app",
  },
];

export const skills = [
  {
    category: "Languages",
    items: "JavaScript, TypeScript, SQL, Python",
  },
  {
    category: "Frontend",
    items: "React, Next.js, HTML5, CSS3, Tailwind CSS",
  },
  {
    category: "Backend",
    items: "Node.js, Express.js, REST APIs, WebSockets, Socket.IO, API-Integration",
  },
  {
    category: "Tools",
    items: "Git, GitHub, VS Code, Postman, Docker",
  },
];

export const education = {
  institution: "BADERIA GLOBAL COLLEGE OF ENGINEERING AND MANAGEMENT",
  degree: "BTECH in AIML",
  graduation: "",
  coursework: "",
};
