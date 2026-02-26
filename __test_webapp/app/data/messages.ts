export interface Message {
  id: number;
  name: string;
  title: string;
  email: string;
  body: string;
}

export const messages: Message[] = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Project Update",
    email: "alice@example.com",
    body: "The project is on track. We completed the frontend implementation and are moving to testing phase next week.",
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "Meeting Reminder",
    email: "bob@example.com",
    body: "Don't forget about the team meeting tomorrow at 10 AM. Please prepare your weekly status report.",
  },
  {
    id: 3,
    name: "Carol Williams",
    title: "Bug Report #342",
    email: "carol@example.com",
    body: "Found a critical bug in the checkout flow. Users are unable to complete payment when using mobile devices.",
  },
  {
    id: 4,
    name: "David Brown",
    title: "New Feature Request",
    email: "david@example.com",
    body: "A client requested dark mode support. Can we prioritize this for the next sprint?",
  },
  {
    id: 5,
    name: "Eve Davis",
    title: "Deployment Notice",
    email: "eve@example.com",
    body: "We will deploy version 2.3.1 to production this Friday at 9 PM. Please ensure all PRs are merged by Thursday.",
  },
  {
    id: 6,
    name: "Frank Miller",
    title: "Code Review Needed",
    email: "frank@example.com",
    body: "I've submitted a PR for the authentication refactor. Could someone review it when they have time?",
  },
  {
    id: 7,
    name: "Grace Wilson",
    title: "Welcome to the Team",
    email: "grace@example.com",
    body: "Welcome aboard! We're excited to have you on the team. Please check the onboarding docs in the wiki.",
  },
];
