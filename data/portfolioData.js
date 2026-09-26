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
    id: "examinee",
    title: "examinee",
    subtitle: "ai powered study & revision platform for automated flashcards, notes, & mcqs",
    tags: ["next.js", "gemini-api", "framer-motion", "prisma", "postgresql", "rest-api"],
    description:
      "an ai-powered study and revision platform that transforms student notes and raw pdfs into structured study outputs with automatic summary generation, smart flashcard creation, and mcq quizzes for efficient exam prep.",
    details:
      "Built using Next.js, React, Tailwind CSS, shadcn/ui, and Framer Motion for a fluid frontend experience. Integrated Google Gemini API for structured prompt workflows and parsing complex study materials. Implemented NextAuth for authentication and PostgreSQL with Prisma for storing student progress, quiz results, and flashcard decks.",
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://examinee-qxup.vercel.app",
  },
  {
    id: "shrinkster",
    title: "shrinkster",
    subtitle: "modern, high-speed url shortening service with analytics & custom aliases",
    tags: ["next.js", "react", "postgresql", "prisma", "node.js", "vercel"],
    description:
      "a minimalist url shortener that converts long urls into short, shareable links. features high-speed redirection routing, custom alias creation, copy utilities, and backend route optimization.",
    details:
      "Developed with Next.js and React to provide an instant, frictionless user experience. Designed backend API routes for rapid hash generation, collision-free code mapping, and sub-millisecond redirection. Backed by PostgreSQL and Prisma ORM for robust link persistence.",
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://shrinkster-six.vercel.app/",
  },
  {
    id: "chat-mini",
    title: "chat-mini",
    subtitle: "real-time room-based messaging app with typing indicators & presence tracking",
    tags: ["socket.io", "react", "node.js", "express", "postgresql", "prisma"],
    description:
      "real-time chat application with room-based messaging. users can create rooms, join instantly, exchange live messages, view typing indicators, and track room participant updates with persistent storage.",
    details:
      "Engineered with Socket.IO and WebSockets on Node.js/Express for bi-directional event broadcast. Uses PostgreSQL via Prisma to persist message histories and room records. Features responsive UI with Tailwind CSS, NextAuth session management, and live typing indicators.",
    github: "https://github.com/harshvardhansoni12-code",
    demo: "https://chat-mini-production-de18.up.railway.app",
  },
];

export const skills = [
  {
    category: "languages",
    items: "JavaScript, TypeScript, Python, SQL",
  },
  {
    category: "frontend",
    items: "React, Next.js, HTML5, CSS3, Tailwind CSS, shadcn/ui, Framer Motion",
  },
  {
    category: "backend",
    items: "Node.js, Express.js, REST APIs, WebSockets, Socket.IO, API-Integration",
  },
  {
    category: "database",
    items: "PostgreSQL, Prisma ORM, SQL",
  },
  {
    category: "tools & devops",
    items: "Git, GitHub, Docker, Postman, VS Code, Vercel",
  },
];

export const education = {
  institution: "baderia global college of engineering and management",
  degree: "btech in artificial intelligence & machine learning (aiml)",
  graduation: "07/2028 (grad)",
  coursework:
    "data structures & algorithms, object-oriented programming, machine learning foundations, database management systems, artificial intelligence.",
};
