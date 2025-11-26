export const siteConfig = {
  name: "Ally Stauffer",
  title: "CS @ Cal Poly | NGI @ Apple | HCI Researcher",
  description: "Portfolio website of Ally Stauffer",
  accentColor: "#1d4ed8",
  social: {
    email: "astauf02@calpoly.edu",
    linkedin: "https://linkedin.com/in/ally-stauffer",
    twitter: "https://x.com/allystauffer",
    github: "https://github.com/allysonstauffer",
  },
  aboutMe:
    "I am a Computer Science student at Cal Poly SLO driven by building technology that improves how people live, work, and connect. I currently design and prototype solutions with Apple’s Next-Gen Innovator program while conducting Human-Computer Interaction research focused on real-world user behavior.",
  skills: [
    "Product Strategy",
    "Human-Centered Design",
    "Full-Stack Development",
    "Data Analysis",
    "Research & Experimentation"
  ],
  projects: [
    {
      name: "Empowering Data: Educational Trends for Haitian Women",
      description:
        "Built a Python data analysis tool to visualize educational access trends among Haitian women across age groups and regions. Designed a scatter plot dashboard using Pandas and Matplotlib to analyze urban vs rural disparities and identify long-term patterns in schooling outcomes.",
      skills: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    },
    {
      name: "Minding Change — Mental Health Resource Platform",
      description:
        "Designed, developed, and launched an interactive mental health website using HTML, CSS, and JavaScript. Led UX decisions, integrated external support resources, and built the site with accessibility and usability as core principles.",
      skills: ["HTML", "CSS", "JavaScript", "UX Design"],
    },
    {
      name: "Caesar Cipher Decryption Tool",
      description:
        "Developed a Python-based cryptography tool that decrypts Caesar cipher text by testing all possible shift combinations. Implemented character-level encryption logic supporting letters, numbers, and symbols to automate brute-force decoding.",
      skills: ["Python", "Cryptography", "Algorithms"],
    },
    {
      name: "CyHelp — Cybersecurity Learning Chatbot",
      description:
        "Built an interactive chatbot in Python to teach cybersecurity fundamentals including the CIA Triad. Designed conditional workflows to personalize user learning paths and improve knowledge retention through conversational interaction.",
      skills: ["Python", "Cybersecurity", "Chatbot Design"],
    },
  ],
  experience: [
    {
      company: "Apple",
      title: "Next-Gen Innovator",
      dateRange: "Sept 2025 – Present",
      bullets: [
        "Selected for Apple’s inaugural Next-Gen Innovator cohort",
        "Design and prototype product concepts using internal frameworks",
        "Collaborate with engineers and product leaders on scalable solutions",
        "Develop product strategy, UX thinking, and technical execution skills",
      ],
    },
    {
      company: "CodeBox",
      title: "Software Developer",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Build open-source web & AI tools for Cal Poly’s builder community",
        "Translate product vision and user feedback into shipped features",
        "Work in small agile teams using Git-based workflows",
        "Contribute to debugging and implementation across the full stack",
      ],
    },
    {
      company: "Cal Poly CSSE Department",
      title: "HCI Research Assistant",
      dateRange: "Oct 2024 – Present",
      bullets: [
        "Lead Instagram engagement study with 30+ participants",
        "Conduct sentiment analysis and behavior modeling",
        "Design research methodology and recruitment strategy",
        "Apply research to real-world product insight",
      ],
    },
    {
      company: "Noyce School of Applied Computing",
      title: "Social Media Student Assistant",
      dateRange: "May 2025 – Present",
      bullets: [
        "Create and manage strategic content campaigns",
        "Produce feature stories and event promotions",
        "Drive engagement and fundraising outcomes",
        "Collaborate with faculty and media teams",
      ],
    },
    {
      company: "Girls Who Code",
      title: "Game Development Teaching Assistant",
      dateRange: "June 2025 – Aug 2025",
      bullets: [
        "Supported instruction for 100+ students nationwide",
        "Mentored students on code, debugging, and projects",
        "Facilitated community engagement",
        "Implemented accessibility accommodations",
      ],
    },
  ],
  education: [
    {
      school: "California Polytechnic State University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2024 - 2028",
      achievements: [
        "University Honors Program",
        "Dean's List",
        "Involvement: CS+AI, CodeBox, Product Management Club, Women Involved in Software & Hardware, CLDC, CRU",
      ],
    },
    {
      school: "University of California, Davis",
      degree: "Certificate in Quantum Mechanics & Applications to Nanotechnology",
      dateRange: "2023",
      achievements: [
        "Selected for a highly competitive summer research program focused on quantum mechanics, computational physics, and nanotechnology applications",
        "Built and programmed computing simulations in C to model quantum phenomena such as tunneling, probability distributions, and state evolution",
        "Conducted hands-on laboratory work including electronics experiments and construction of a scanning tunneling microscope (STM) to image atomic-scale surfaces",
      ],
    },
  ],
};