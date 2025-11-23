import cover1 from "@assets/generated_images/minimalist_abstract_book_cover_art_1.png";
import cover2 from "@assets/generated_images/minimalist_abstract_book_cover_art_2.png";
import cover3 from "@assets/generated_images/minimalist_abstract_book_cover_art_3.png";

export interface Newsletter {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
  issueNumber: number;
}

export const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "The Architecture of Digital Trust",
    description: "Exploring how we build sustainable relationships in an increasingly automated world. We look at the fundamental principles of digital identity.",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    imageUrl: cover1,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 42
  },
  {
    id: "2",
    title: "Systems Thinking for Modern Leaders",
    description: "Why linear problem solving fails in complex organizations. A deep dive into feedback loops and leverage points.",
    date: "Nov 01, 2025",
    readTime: "8 min read",
    imageUrl: cover2,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 41
  },
  {
    id: "3",
    title: "The Quiet Renaissance of Craft",
    description: "In the age of AI generation, human craftsmanship is becoming a new luxury. How to position value in a post-scarcity economy.",
    date: "Oct 18, 2025",
    readTime: "6 min read",
    imageUrl: cover3,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 40
  },
  {
    id: "4",
    title: "Resilience by Design",
    description: "Building teams that don't just survive change, but thrive on it. Antifragility in practice.",
    date: "Oct 04, 2025",
    readTime: "7 min read",
    imageUrl: cover1,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 39
  },
  {
    id: "5",
    title: "Cognitive Overhead",
    description: "Reducing the mental load of your users and your team. Strategies for clarity and focus.",
    date: "Sep 20, 2025",
    readTime: "4 min read",
    imageUrl: cover2,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 38
  },
  {
    id: "6",
    title: "Mapping the Intangible",
    description: "How to measure what really matters when the metrics are fuzzy. Qualitative data in a quantitative world.",
    date: "Sep 05, 2025",
    readTime: "6 min read",
    imageUrl: cover3,
    link: "https://www.linkedin.com/newsletters/7159940733972434944/",
    issueNumber: 37
  }
];
