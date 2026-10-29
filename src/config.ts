export const siteConfig = {
  name: "Ally Stauffer",
  title: "Data Engineering & Product Analytics",
  metaTitle: "Ally Stauffer | Data Engineering & Product Analytics",
  description:
    "Computer Science student at Cal Poly building production data pipelines, AI infrastructure analytics, and data-driven software. Previously at Kestrix; currently at Cal Poly Noyce.",
  heroHeadline:
    "Building data systems that turn complex information into useful decisions.",
  heroDescription:
    "I'm a Computer Science student at Cal Poly focused on data engineering, analytics, and AI-powered products. I built production reporting pipelines at Kestrix in London and now develop infrastructure analytics for Cal Poly's $3M NVIDIA-powered AI Factory.",
  internshipSearch:
    "Seeking Summer 2027 internships in Data Engineering, Analytics Engineering, Product Analytics, and data-focused Software Engineering, particularly in the San Francisco Bay Area.",
  accentColor: "#1d4ed8",
  social: {
    email: "astauf02@calpoly.edu",
    linkedin: "https://linkedin.com/in/allystauffer",
    github: "https://github.com/allysonstauffer",
  },
  aboutMe:
    "I'm a Computer Science student at Cal Poly who enjoys building data systems that help people make better decisions. My experience spans production data engineering, infrastructure analytics, AI evaluation, and user-facing software.\n\nAt Kestrix, I built an automated reporting pipeline for drone-imagery validation. At Cal Poly's Noyce School, I'm developing telemetry pipelines and dashboards for our $3M NVIDIA-powered AI Factory.\n\nI'm especially interested in the intersection of data engineering, analytics, and product decisions—building reliable systems and making their outputs useful to the people who rely on them.",
  skills: [
    "Python",
    "SQL",
    "Data Engineering",
    "Analytics Engineering",
    "BigQuery",
    "Data Visualization",
    "AI Infrastructure",
  ],
  featuredProjects: [
    {
      name: "Kestrix — Production Data Validation & Reporting",
      category:
        "Professional experience · Software Engineering Intern · London · Jun–Aug 2026",
      summary:
        "Drone-imagery validation signals were distributed across systems; I consolidated them into hourly, property-level reporting for operations.",
      bullets: [
        "Built Python scoring and remediation logic for image completeness, image quality, and reconstruction status, then connected it with BigQuery SQL, Dataform, and Looker Studio.",
        "Investigated data across 7 PostgreSQL and BigQuery entities and wrote 47 pytest cases across 11 fixtures.",
      ],
      outcome:
        "Shipped a filterable, exportable operations dashboard to help Drone Operations identify incomplete coverage and prioritize follow-up.",
      skills: ["Python", "BigQuery SQL", "Dataform", "Looker Studio", "pytest"],
    },
    {
      name: "Cal Poly NVIDIA AI Factory — Infrastructure Analytics",
      category: "Cal Poly Noyce · Ongoing development",
      summary:
        "Developing infrastructure analytics for Cal Poly's $3M NVIDIA-powered AI Factory, which uses four NVIDIA DGX B200 systems.",
      bullets: [
        "Selected as the primary student developer for infrastructure monitoring and data visualization.",
        "Developing Python telemetry pipelines and dashboards for workload activity, GPU allocation, utilization, and capacity planning; not all planned features are deployed.",
        "Scoping a read-only NVIDIA Run:ai data pipeline around approved, aggregated workload data, including running and pending jobs, workload categories, requested and allocated GPUs, duration, and active-user trends.",
        "Documenting field meaning and availability before validating the initial data flow; storage, GPU, and power telemetry are possible later additions.",
        "Working with Noyce leadership and infrastructure staff to make complex engineering data useful to students, faculty, and infrastructure planning.",
      ],
      outcome: "Ongoing development; this work is not presented as a fully deployed platform.",
      link: "https://github.com/allysonstauffer/cal-poly-ai-factory-dashboard",
      skills: [
        "Python",
        "NVIDIA Run:ai",
        "REST APIs",
        "Data Visualization",
        "Infrastructure Monitoring",
      ],
    },
    {
      name: "TrustFrame — AI Model Evaluation",
      category: "Next-Gen Innovators via Cal Poly · Evaluation CLI built",
      summary:
        "A detector-independent evaluation tool makes it easier to inspect AI-image-detector reliability beyond a single accuracy score.",
      bullets: [
        "Built a Python CLI that reads per-image labels, predictions, and confidence scores from CSV and produces reproducible JSON reliability reports.",
        "Reports accuracy, precision, recall, false-negative rate, confusion-matrix counts, and 10-bin expected calibration error.",
        "JPEG-compression stress testing is a planned next step, not a completed evaluation.",
      ],
      outcome:
        "Created a reusable evaluation workflow for identifying unreliable or confidently wrong predictions for human review.",
      link: "https://github.com/allysonstauffer/trustframe",
      skills: ["Python", "AI Evaluation", "Calibration", "Machine Learning"],
    },
    {
      name: "Mustang Maps — Production Geospatial Navigation",
      category: "Professional experience · CodeBox team project",
      summary:
        "Contributed navigation and classroom wayfinding features to a production campus app as part of an eight-person team.",
      bullets: [
        "Contributed to A*-based routing over a GeoJSON walking graph of approximately 5.7K nodes and 6.3K edges; the routing system was a team effort.",
        "Shipped a MapLibre class-zones layer covering 92 floor-plan zones across 45 buildings and 4,271 classrooms.",
      ],
      outcome:
        "The production React Native app has 161+ downloads; contributions included classroom-zone wayfinding and navigation-mode features.",
      skills: ["React Native", "TypeScript", "MapLibre", "GeoJSON", "A* routing"],
    },
    {
      name: "Inner View — AI-Powered Interview Platform",
      category: "Hackathon · Product and engineering",
      summary:
        "A voice-driven interview practice app adapts follow-up questions to the role and turns interview responses into structured feedback.",
      bullets: [
        "Built with Next.js, TypeScript, the OpenAI API, and Web Speech API, with adaptive follow-up questions and structured post-interview feedback.",
        "Implemented server-side API routes and context-conditioned interviewer agents that generate structured scripts and follow-up questions from the role and interview transcript.",
        "Created a local-first architecture with React Context, versioned localStorage, and Zod-validated schemas and migrations.",
        "Developed a post-interview evaluation pipeline that converts transcripts into structured signals and timeline-based insights.",
        "Led product direction for a six-person hackathon team and presented the project to 150+ attendees.",
      ],
      outcome:
        "Connected a voice-driven interview flow with adaptive questions and structured post-interview insights.",
      link: "https://github.com/zen-watts/interview-ai",
      skills: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "Web Speech API",
        "Zod",
        "Local-First Architecture",
      ],
    },
  ],
  additionalProjects: [
    {
      name: "SideQuest",
      category: "Personal project · In progress",
      summary:
        "An early-stage social platform for sharing personal projects and discovering communities around creative interests.",
      link: "https://github.com/allysonstauffer/sidequest",
      bullets: [
        "Building an early-stage social platform where hobbyists can share personal projects, discover interests and communities, and connect around what they enjoy making.",
        "Implemented Supabase email/password authentication and a project feed where signed-in users can upload, view, and delete their own image-based posts; the profile and community-discovery experience is still evolving.",
        "Built as an npm-workspace monorepo with a React and TypeScript frontend, FastAPI image-upload API, and Supabase Auth, PostgreSQL, and Storage.",
      ],
      skills: [
        "React",
        "TypeScript",
        "FastAPI",
        "Supabase",
        "PostgreSQL",
      ],
    },
    {
      name: "Sightline",
      category: "Hackathon project",
      summary:
        "A camera-first room editor combines image-based room modeling with fit-checked furniture recommendations.",
      link: "https://github.com/NamishM123/Code-box-hack",
      bullets: [
        "Built a camera-first room editor that turns 6–12 guided photos into an editable room plan; Gemini extracts room geometry while deterministic checks apply 12 spatial principles and 5 Neufert clearances to create 3 fit-verified layouts with a 4-state verdict per piece.",
        "Built a parallel furniture recommendation pipeline across 8 retailers, ranking up to 34 listings per category by price, vibe, and parsed W×D×H; unverified dimensions are never placed, and pieces over 45% of room area or within 1 ft of a wall are rejected.",
        "Added a 2D planner, 3D block view, and 3D rendered view that can show actual product photos at measured sizes, with generated furniture models as a fallback for images that cannot be cleanly extracted.",
        "Implemented optional Gemini photoreal room renders using room dimensions, placement measurements, and product photos, plus localStorage persistence and shareable room plans encoded in the URL.",
      ],
      skills: [
        "Gemini",
        "Computer Vision",
        "Spatial Computing",
        "Recommendation Systems",
        "Product Engineering",
      ],
    },
  ],
  experience: [
    {
      company: "Cal Poly Noyce School of Applied Computing",
      title: "Software Engineer",
      dateRange: "Aug 2026 – Present",
      bullets: [
        "Selected as the primary student Software Engineer to develop infrastructure monitoring and data visualization for Cal Poly’s $3M NVIDIA-powered AI Factory, which uses four NVIDIA DGX B200 systems.",
        "Develop Python telemetry pipelines and stakeholder-facing dashboards using NVIDIA Run data to make workload activity, GPU allocation, and utilization useful for capacity planning; development is ongoing.",
        "Partner with Noyce leadership and infrastructure staff to translate complex engineering data into accessible insights for students and faculty while informing infrastructure planning and investment decisions.",
      ],
    },
    {
      company: "Kestrix",
      title: "Software Engineering Intern",
      dateRange: "Jun 2026 – Aug 2026",
      bullets: [
        "Built a Python → BigQuery SQL → Dataform → Looker Studio scoring pipeline that consolidated distributed drone-imagery validation signals into hourly, property-level reporting.",
        "Wrote 47 pytest cases across 11 fixtures to validate property scoring, no-action/re-upload/reflight remediation, and environment loading, then mirrored the verified scoring logic in BigQuery SQL.",
        "Investigated validation signals across 7 PostgreSQL and BigQuery entities and built SQLAlchemy/Folium visualizations comparing planned and collected drone imagery to identify properties needing recapture.",
        "Shipped a filterable, exportable Looker Studio dashboard so Drone Operations could identify incomplete coverage and prioritize follow-up.",
      ],
    },
    {
      company: "Cal Poly Noyce School of Applied Computing",
      title: "Student Communications Lead",
      dateRange: "Feb 2026 – Present",
      bullets: [
        "Lead cross-platform communications and a student marketing team across LinkedIn, Instagram, Facebook, and university channels, building structured content, asset-management, and project workflows while managing and mentoring team members.",
        "Drive promotion and coverage of AI events, distinguished speakers, hackathons, research, and student programs; an incoming-student outreach campaign generated 500+ new Instagram followers.",
        "Selected as one of two student speakers to address 400+ incoming freshmen and transfer students, representing Noyce and advising on computing, research, academics, and campus opportunities.",
      ],
    },
    {
      company: "Cal Poly Noyce School of Applied Computing",
      title: "Social Media Student Assistant",
      dateRange: "Apr 2025 – Feb 2026",
      bullets: [
        "Produced digital storytelling and event coverage across Instagram, LinkedIn, and Noyce web channels to highlight faculty research, student achievements, and computing initiatives.",
        "Collaborated with Noyce leadership and university partners on speaker series, fundraising campaigns, event promotion, photography, and community engagement before promotion to Student Communications Lead.",
      ],
    },
    {
      company: "CodeBox",
      title: "Software Developer (Mustang Maps)",
      dateRange: "Oct 2025 – Aug 2026",
      bullets: [
        "Developed features for Mustang Maps, a production React Native campus-navigation app with 161+ downloads, as part of an 8-person development team.",
        "Contributed to A*-based navigation over a GeoJSON walking graph with ~5.7K nodes, 6.3K edges, ~98 km of paths, and 400+ Cal Poly buildings.",
        "Shipped a MapLibre class-zones layer covering 92 floor-plan zones across 45 buildings and 4,271 classrooms, helping students find the correct building wing and floor.",
        "Implemented GO/Exit navigation-mode state for turn-by-turn routing workflows and shipped production code through Git-based development and review.",
      ],
    },
    {
      company: "Apple Next-Gen Innovators (via Cal Poly)",
      title: "Next-Gen Innovator",
      dateRange: "Sep 2025 – Jun 2026",
      bullets: [
        "Selected as one of ~10 Cal Poly students for Apple’s inaugural Next-Gen Innovators cohort, a nationwide program spanning ~22 universities.",
        "Built TrustFrame, a Python CLI evaluation layer that turns AI-image-detector prediction CSVs into reproducible JSON reports with accuracy, precision/recall, false-negative rate, 10-bin expected calibration error, and confusion-matrix metrics.",
      ],
    },
    {
      company: "Cal Poly Computer Science and Software Engineering Department",
      title: "Undergraduate Research Assistant",
      dateRange: "Sep 2024 – Jun 2026",
      bullets: [
        "Analyzed student interactions in a CSC 101 study comparing AI-labeled and human-labeled tutors to understand how labeling influences trust, communication, and problem-solving.",
        "Built a TypeScript, JavaScript, and React study interface with controlled task flows to support reliable participant data collection.",
        "Reviewed research on social media engagement and preference elicitation to inform research questions and experimental design; designed and ran an online study on reactions to subtly altered Instagram feed ratings and later reflection.",
      ],
    },
    {
      company: "Girls Who Code",
      title: "Teaching Assistant",
      dateRange: "May 2025 – Aug 2025",
      bullets: [
        "Taught 100+ high school students game development with p5.js, covering game mechanics, design principles, and creative coding.",
        "Led daily advisory sessions and 1:1 debugging, technical feedback, and project support through office hours.",
        "Coordinated attendance, surveys, student engagement, and learning accommodations across multiple time zones.",
      ],
    },
    {
      company: "University of California, Davis",
      title: "COSMOS Cluster 1: Quantum Mechanics & Applications to Nanotechnology",
      dateRange: "Jul 2023 – Aug 2023",
      bullets: [
        "Applied C to simulate Schrödinger’s equation and model tunneling, wavefunction spread, and quantum state transfer foundational to nanotechnology.",
        "Built electronics and instrumentation—including cables, LEDs, op-amps, and Arduino-based systems—to measure electromagnetic pulse propagation and LED band-gap energy.",
        "Collaboratively constructed and operated scanning tunneling microscopes to image atomic surfaces, gaining hands-on experience in quantum tunneling and nanoscale imaging.",
      ],
    },
    {
      company: "Girls Who Code",
      title: "Summer Immersion & Self-Paced Programs",
      dateRange: "Jun 2022 – Aug 2023",
      bullets: [
        "Completed the Summer Immersion Program (2022), Fall Self-Paced Program (2022), and Summer Self-Paced Program (2023), expanding a collaborative code-debugging platform using HTML, CSS, JavaScript, and Python.",
        "Completed courses in cybersecurity, cryptography, and data science while contributing solutions to user communities of 500+ members.",
        "Created projects including a personal website, personality quizzes, and a mental-health toolkit activist webpage.",
      ],
    },
  ],
  education: [
    {
      school: "California Polytechnic State University, San Luis Obispo",
      degree: "B.S. Computer Science, Minor in Mathematics",
      dateRange: "Sep 2024 – May 2028",
      isPrimary: true,
      gpa: "3.64",
      activities: [
        {
          category: "Computing & Technology",
          items: ["CS+AI", "Women Involved in Software & Hardware"],
        },
        {
          category: "Campus & Community",
          items: [
            "Systems Optimization Club",
            "Country Line Dancing Club",
            "Cal Poly Choirs",
            "CRU Cal Poly",
          ],
        },
      ],
      coursework: [
        {
          category: "Software & Systems",
          courses: [
            "Software Engineering (CSC 3100)",
            "Data Structures (CSC 202)",
            "Object-Oriented Programming & Design (CSC 203)",
            "Systems Programming (CSC 357)",
          ],
        },
        {
          category: "Data, Security & Databases",
          courses: [
            "Computer Security (CSC 3201)",
            "Data Science (DATA 3310)",
            "Database Management Systems (CSC 3665)",
            "Enterprise Analytics (IME 212)",
          ],
        },
        {
          category: "Algorithms & Mathematics",
          courses: [
            "Discrete Structures (CSC 248)",
            "Design & Analysis of Algorithms (CSC 349)",
            "Linear Analysis (MATH 244)",
            "Statistical Methods for Engineers (STAT 312)",
          ],
        },
      ],
    },
    {
      school: "University of California, Davis",
      degree:
        "COSMOS Certificate, Quantum Mechanics & Applications to Nanotechnology",
      dateRange: "Jul 2023 – Aug 2023",
      isPrimary: false,
      achievements: [
        "Selected through a ~10% acceptance-rate process for Cluster One; completed coursework in Computations of Quantum Phenomena and Quantum Physics Experiments and Applications to Nanotechnology.",
        "Collaborated with students across California on research and projects, including a presentation on scanning tunneling microscopy; worked with UC Davis department heads and PhD and master’s students.",
      ],
    },
    {
      school: "Girls Who Code",
      degree:
        "Summer Immersion Program (2022), Fall Self-Paced Program (2022), Summer Self-Paced Program (2023), Computer Science",
      dateRange: "Jun 2022 – Aug 2023",
      isPrimary: false,
      achievements: [
        "Grades 10–12; completed coursework in Python, cybersecurity, cryptography, and data science.",
        "Developed websites including a personal site, personality quizzes, and a mental-health advocacy toolkit.",
      ],
    },
    {
      school: "College Park High School",
      degree: "High School Diploma",
      dateRange: "Aug 2020 – May 2024",
      isPrimary: false,
      gpa: "4.49",
      highlights: [
        {
          category: "Academic Distinctions",
          items: [
            "Graduated in the top 3%",
            "Top 5% Medal",
            "AP Scholar",
            "California State Seal of Biliteracy (French)",
            "Received 15 distinguished awards at graduation, including choir, history, French, Key Club, and CSF honors",
          ],
        },
        {
          category: "Leadership & Activities",
          items: [
            "Choir President and leadership head",
            "French Club President",
            "Link Crew Commissioner",
            "CSF and Key Club",
          ],
        },
        {
          category: "Relevant Coursework",
          items: [
            "AP Physics C: Mechanics",
            "AP Statistics",
            "AP Calculus",
            "AP World History",
            "AP United States History",
            "AP English Language & Composition",
            "AP French Language & Culture",
          ],
        },
      ],
    },
  ],
};
