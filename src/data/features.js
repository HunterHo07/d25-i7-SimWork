export const features = [
  {
    id: 1,
    title: "Interactive 2.5D Environment",
    description: "Navigate a stylized workspace with different department zones designed for specific roles and tasks.",
    icon: "map",
  },
  {
    id: 2,
    title: "Role-Based Challenges",
    description: "Tasks tailored to specific job functions including development, design, project management, and data analysis.",
    icon: "tasks",
  },
  {
    id: 3,
    title: "Embedded Tools",
    description: "Simulated IDE, design canvas, and data manipulation interfaces that mirror real-world work environments.",
    icon: "tools",
  },
  {
    id: 4,
    title: "Progress Tracking",
    description: "Real-time feedback on performance metrics including accuracy, speed, and decision quality.",
    icon: "chart",
  },
  {
    id: 5,
    title: "Adaptive Difficulty",
    description: "AI-powered challenge generation that grows with the user and adapts to their skill level.",
    icon: "brain",
  },
  {
    id: 6,
    title: "Realistic Scenarios",
    description: "Authentic work tasks that mirror actual job responsibilities across different departments.",
    icon: "scenario",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director, TechCorp",
    quote: "SimWork has transformed our hiring process. We can now evaluate candidates based on actual performance rather than just interviews.",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Training Manager, GlobalFin",
    quote: "Our onboarding time has been cut in half, and new hires are productive much faster thanks to SimWork's immersive training.",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CS Professor, Tech University",
    quote: "SimWork bridges the gap between academic learning and workplace readiness. My students are much better prepared for their internships.",
    avatar: "/images/testimonials/avatar-3.jpg",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "How does SimWork differ from traditional training methods?",
    answer: "SimWork provides an immersive, gamified environment where users complete authentic work tasks rather than theoretical exercises. This hands-on approach leads to better engagement, higher completion rates, and improved skill retention.",
  },
  {
    id: 2,
    question: "Can SimWork be customized for our company's specific workflows?",
    answer: "Yes, SimWork offers customization options for enterprise clients. We can tailor scenarios, tasks, and environments to match your company's specific tools, processes, and challenges.",
  },
  {
    id: 3,
    question: "How does the assessment system work?",
    answer: "SimWork tracks multiple performance metrics including task completion, accuracy, speed, decision quality, and problem-solving approach. These metrics provide a comprehensive view of a user's skills and abilities.",
  },
  {
    id: 4,
    question: "Is SimWork suitable for both technical and non-technical roles?",
    answer: "Absolutely. SimWork includes scenarios for developers, designers, project managers, data analysts, customer service representatives, and more. We cover both technical and soft skills across various departments.",
  },
  {
    id: 5,
    question: "How long does it take to implement SimWork in our organization?",
    answer: "Basic implementation can be completed in as little as one week. For customized enterprise solutions, the timeline typically ranges from 2-4 weeks depending on the level of customization required.",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Individual",
    price: 29,
    period: "month",
    description: "Perfect for self-directed learners looking to develop their skills.",
    features: [
      "Access to all standard scenarios",
      "Personal progress tracking",
      "Basic performance analytics",
      "Monthly new scenarios",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: 2,
    name: "Team",
    price: 99,
    period: "month",
    description: "Ideal for small teams and startups with up to 10 users.",
    features: [
      "Everything in Individual",
      "Team performance dashboard",
      "Custom scenario creation",
      "Collaborative challenges",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 499,
    period: "month",
    description: "Comprehensive solution for large organizations with unlimited users.",
    features: [
      "Everything in Team",
      "Custom integration with HR systems",
      "Advanced analytics and reporting",
      "Dedicated account manager",
      "Custom branding options",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];
