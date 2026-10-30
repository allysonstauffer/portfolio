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
  availability: "Seeking Summer 2027 internships · San Francisco Bay Area",
  resumeUrl: "/resume/Ally_Stauffer_Resume.pdf",
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
      status: "Completed production work",
      summary:
        "Built and shipped a Python → BigQuery SQL → Dataform → Looker Studio pipeline that turned fragmented drone-imagery validation data into hourly, property-level operational reporting.",
      problem:
        "Validation signals were spread across databases and processing stages, making it difficult for operators to find incomplete imagery and determine what needed to be recollected.",
      contribution:
        "Built scoring and remediation logic, automated hourly reporting, and shipped an operations dashboard.",
      impact:
        "Operators could identify incomplete coverage, investigate failed properties, and prioritize re-uploads or reflights without tracing fragmented engineering data manually.",
      highlights: [
        "Hourly production reporting",
        "47 tests · 11 fixtures",
        "7 PostgreSQL/BigQuery entities",
      ],
      details: [
        "Evaluated RGB and thermal imagery completeness, coverage, quality, and reconstruction status, applying a 99% image-completeness threshold.",
        "Developed Python scoring and remediation logic and implemented the production reporting flow with BigQuery SQL and Dataform.",
        "Wrote 47 pytest cases across 11 fixtures and investigated validation data across 7 PostgreSQL/BigQuery entities.",
        "Built SQLAlchemy/Folium geospatial visualizations and shipped a filterable, exportable Looker Studio dashboard for Drone Operations.",
        "The work enabled faster identification and prioritization; no quantified reduction in investigation time is claimed.",
      ],
      skills: ["Python", "BigQuery SQL", "Dataform", "Looker Studio", "pytest"],
    },
    {
      name: "Cal Poly NVIDIA AI Factory — Infrastructure Analytics",
      category: "Cal Poly Noyce · Primary student Software Engineer",
      status: "In Development",
      summary:
        "Selected as the primary student Software Engineer developing infrastructure monitoring and data visualization for Cal Poly's $3M NVIDIA-powered AI Factory, which uses four NVIDIA DGX B200 systems.",
      problem:
        "Students, faculty, and infrastructure stakeholders need clear, reliable information about AI Factory workload activity and resource use.",
      contribution:
        "Designing Python telemetry pipelines and stakeholder-facing dashboards using read-only NVIDIA Run APIs and approved, aggregated workload data.",
      focus:
        "Developing infrastructure analytics to give stakeholders clearer visibility into GPU workloads, resource utilization, and capacity planning.",
      highlights: [
        "$3M AI Factory",
        "4 NVIDIA DGX B200 systems",
        "Primary student engineer",
      ],
      details: [
        "Designing telemetry for workload activity, running and pending jobs, requested and allocated GPU resources, utilization, and capacity metrics.",
        "Scoping the data flow as read-only and limited to approved, aggregated workload data.",
        "Collaborating with Noyce leadership and infrastructure staff to make technical data useful to stakeholders.",
        "Storage, GPU, and power telemetry are possible future expansions, subject to validation and approval.",
      ],
      link: "https://github.com/allysonstauffer/cal-poly-ai-factory-dashboard",
      officialLink: {
        label: "Official Cal Poly Announcement",
        url: "https://ucm.calpoly.edu/news/cal-poly-open-advanced-ai-factory-nvidia-technology",
      },
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
      status: "Evaluation framework built · stress testing planned",
      summary:
        "Built a detector-agnostic Python CLI that evaluates image-detector predictions and produces reproducible JSON reliability reports.",
      problem:
        "A single accuracy score can obscure calibration issues and confidently incorrect predictions in AI-image detectors.",
      contribution:
        "Created a CSV-in, JSON-out evaluation workflow covering classification and calibration metrics.",
      impact:
        "The reports help identify unreliable or confidently incorrect predictions for human review.",
      highlights: [
        "Python AI evaluation framework",
        "10-bin expected calibration error",
        "Reproducible JSON reports",
      ],
      details: [
        "Accepts per-image labels, predictions, and confidence scores from CSV through a command-line workflow.",
        "Reports accuracy, precision, recall, false-negative rate, confusion matrices, and expected calibration error.",
        "Planned JPEG-compression stress tests will compare quality levels 90, 70, 50, and 30; those experiments have not yet produced results.",
      ],
      link: "https://github.com/allysonstauffer/trustframe",
      skills: ["Python", "AI Evaluation", "Calibration", "Machine Learning"],
    },
    {
      name: "Mustang Maps — Production Geospatial Navigation",
      category: "Professional experience · CodeBox team project",
      status: "Production application · Team project",
      summary:
        "Contributed navigation and classroom wayfinding features to a production React Native campus app built by an eight-person team.",
      problem:
        "Students need practical walking directions and precise classroom wayfinding across a large campus.",
      contribution:
        "Contributed to navigation workflows and shipped a MapLibre classroom-zones layer; the routing system was a collaborative team effort.",
      impact:
        "The production app has 161+ downloads and classroom-zone coverage spanning 4,271 classrooms.",
      highlights: [
        "161+ downloads",
        "5.7K nodes · 6.3K edges",
        "4,271 classrooms",
      ],
      details: [
        "Contributed to A*-based navigation over a GeoJSON walking graph with approximately 5.7K nodes, 6.3K edges, 98 km of paths, and 400+ campus buildings.",
        "Shipped a MapLibre class-zones interface covering 92 floor-plan zones across 45 buildings and 4,271 classrooms.",
        "Implemented GO/Exit navigation-mode behavior for turn-by-turn workflows and contributed through collaborative Git development and code review.",
        "These are individual contributions within an eight-person team; I did not build the entire application or routing system.",
      ],
      skills: ["React Native", "TypeScript", "MapLibre", "GeoJSON", "A* routing"],
    },
    {
      name: "Inner View — AI-Powered Interview Platform",
      category: "Hackathon · Product and engineering",
      status: "Hackathon project",
      summary:
        "A voice-driven interview product adapts follow-up questions to the role and turns responses into structured feedback.",
      problem:
        "Interview practice is more useful when questions respond to the conversation and feedback helps candidates understand performance.",
      contribution:
        "Led product direction and built adaptive interview and evaluation flows with a six-person team.",
      impact:
        "Presented the working product to 150+ attendees, connecting engineering decisions to a user-facing interview experience.",
      highlights: [
        "AI-powered interview platform",
        "6-person team",
        "Presented to 150+ attendees",
      ],
      details: [
        "Built with Next.js, TypeScript, OpenAI API, and Web Speech API, including adaptive follow-up questions.",
        "Implemented server-side API routes and context-conditioned interviewer agents that generate scripts and follow-ups from role and transcript context.",
        "Used React Context, versioned localStorage, and Zod-validated schemas and migrations for local-first state management.",
        "Developed structured qualitative and quantitative post-interview feedback from transcript signals.",
        "Led product direction for the six-person hackathon team and presented the project to 150+ attendees.",
      ],
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
      name: "LociLens — Full-Stack Field Documentation",
      category: "Personal project",
      status: "In Development",
      summary:
        "Building a field-documentation platform for architecture, engineering, and construction teams, with offline mobile capture, structured photo metadata, and project organization.",
      details: [
        "Designing offline queueing and retry for field capture.",
        "Organizing multi-attribute photo metadata with bulk tagging and metadata audit history.",
        "Building a React/Express/PostgreSQL backend with role-based access control.",
        "Supporting ZIP and CSV project exports.",
      ],
      skills: [
        "React Native",
        "Expo",
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
    },
    {
      name: "SideQuest",
      category: "Personal project · In progress",
      summary:
        "An early-stage social platform for sharing personal projects and discovering communities around creative interests.",
      link: "https://github.com/allysonstauffer/sidequest",
      details: [
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
      details: [
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
        "Translated drone-imagery validation workflows into Python scoring and remediation rules and owned delivery of the production reporting pipeline.",
        "Coordinated data investigation across 7 PostgreSQL and BigQuery entities and validated scoring with 47 pytest cases across 11 fixtures.",
        "Partnered with Drone Operations to turn the reporting into a filterable, exportable dashboard for property follow-up and operational prioritization.",
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
      company: "CodeBox",
      title: "Software Developer (Mustang Maps)",
      dateRange: "Oct 2025 – Jun 2026",
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
        "Conducted nearly two years of undergraduate HCI research, analyzing a CSC 101 study comparing AI-labeled and human-labeled tutors and how labeling influences trust, communication, and problem-solving.",
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
      company: "Cal Poly Noyce School of Applied Computing",
      title: "Social Media Student Assistant",
      dateRange: "Apr 2025 – Feb 2026",
      bullets: [
        "Produced digital storytelling and event coverage across Instagram, LinkedIn, and Noyce web channels to highlight faculty research, student achievements, and computing initiatives.",
        "Collaborated with Noyce leadership and university partners on speaker series, fundraising campaigns, event promotion, photography, and community engagement before promotion to Student Communications Lead.",
      ],
    },
  ],
  education: [
    {
      school: "California Polytechnic State University, San Luis Obispo",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Expected Graduation: May 2028",
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
        "COSMOS Cluster 1: Quantum Mechanics & Applications to Nanotechnology",
      dateRange: "Summer 2023",
      isPrimary: false,
      achievements: [
        "Selected for an intensive computational physics and nanotechnology program, applying C programming to quantum simulations and gaining hands-on experience with experimental electronics and scanning tunneling microscopy.",
      ],
      coursework: [
        {
          category: "Coursework",
          courses: [
            "Computations of Quantum Phenomena",
            "Quantum Physics Experiments & Applications to Nanotechnology",
          ],
        },
      ],
    },
  ],
  honorsAndLeadership: {
    featured: [
      {
        title: "Dean's List — 5× Recipient",
        organization: "Cal Poly College of Engineering",
        description:
          "Recognized for academic achievement across five academic terms.",
      },
      {
        title: "Social Science Department Medallion",
        organization: "College Park High School · 2024",
        description:
          "Selected as the sole recipient from a graduating class of 450+ students for excellence in history and social sciences.",
      },
      {
        title: "Choir Medallion",
        organization: "College Park High School · 2024",
        description:
          "Selected as the sole recipient among 24 senior choir students for excellence in singing and music theory.",
      },
      {
        title: "California State Seal of Biliteracy — French",
        organization: "2024",
        description:
          "Recognized for proficiency in reading, writing, and speaking French following five years of language study.",
      },
    ],
    additional: [
      {
        title: "Chamber Singers MVP Award — 2024",
        description:
          "Recognized for exceptional contribution and leadership within the choir ensemble.",
      },
      {
        title: "Choir President — College Park High School",
        description:
          "Led weekly officer meetings, coordinated events, delegated responsibilities, and assisted with rehearsals and warm-ups.",
      },
      {
        title: "Director's Award — 2024",
        description: "Recognized for four years of dedication to choral music.",
      },
      {
        title: "MDUSD Creative Arts Honor Roll — 2024",
        description:
          "Completed four consecutive years of choir while maintaining a 4.0 GPA in vocal music.",
      },
      {
        title: "AP Scholar — 2023",
        description:
          "Recognized by the College Board for performance on Advanced Placement examinations.",
      },
      {
        title: "Girl Scout Bronze Award — 2017",
        description:
          "Completed a collaborative community Take Action project involving more than 20 hours of planning and service.",
      },
      {
        title: "Girls Who Code — Early Computing Programs, 2022–2023",
        description:
          "Completed Summer Immersion and Self-Paced programs in programming, cybersecurity, cryptography, and data science. Developed projects using HTML, CSS, JavaScript, and Python.",
      },
      {
        title: "College Park High School — Academic Recognition",
        description: "Graduated in the top 3% of the class with a 4.49 GPA.",
      },
    ],
  },
};
