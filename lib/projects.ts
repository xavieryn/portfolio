
export interface ProjectData {
  slug: string;
  name: string;
  shortDescription: string;
  tags: string[];
  externalLink?: string;
  details: {
    title: string;
    subtitle: string;
    role: string;
    sections: { heading: string; content: string }[];
  }
}

export const projects: ProjectData[] = [
  {
    slug: "owl-vision",
    name: "Owl Vision",
    shortDescription: "Rebuilt Owl Vision's pest detection system and deployed to 50+ devices across 18 apple farms in New England.",
    tags: ["Computer Vision", "AWS", "Docker", "Object Detection"],
    externalLink: "https://www.barnowltechnologies.com/",
    details: {
      title: "Owl Vision",
      subtitle: "Computer Vision Deployment - Agricultural Pest Detection | Owl Vision (Summer 2025)",
      role: "Sole ML Engineer",
      sections: [
        {
          heading: "Overview",
          content: "Rebuilt Owl Vision's pest detection system and deployed to 50+ devices across 18 apple farms in New England. The system detects codling moth, obliquebanded leafroller, and oriental fruit moth infestations before visible damage appears—enabling farmers to intervene during the critical first wave, when treatment is most effective and before pest populations multiply exponentially."
        },
        {
          heading: "Impact",
          content: "Achieved 2x improvement in detection accuracy and 10x faster inference compared to the previous CNN-based system, enabling near real-time alerts to farmers in the field."
        },
        {
          heading: "Technical Approach",
          content: "Researched and migrated from image classification to YOLO-based object detection with bounding box localization of pest targets. Designed preprocessing pipeline (intelligent cropping, tiling) to maximize detection of small-scale pest features at high resolution. Architected modular Docker deployment on AWS, replacing legacy EC2 setup with containerized system that decouples model retraining from infrastructure—enabling rapid iteration without deployment rewrites or dependency conflicts."
        },
        {
          heading: "Cross-functional Execution",
          content: "Coordinated annotation of thousands of training images across multiple contributors, building self-service documentation to scale data collection independently. Collaborated with mobile app developer to align model API outputs (bounding box coordinates, confidence scores) with frontend requirements. Navigated stakeholder management when proposing infrastructure changes—when questioned on migrating to Docker (\"if it works, why change it?\"), explained production reliability risks of manual deployments: dependency conflicts, version mismatches, and cascading impact of server downtime on farmer alerts. Advocated for containerization as both a stability measure (reproducible deployments) and enabler of faster iteration (safe local testing before production releases). Translated technical concepts for farmers, explaining model behavior (detection confidence, environmental factors) in practical agricultural terms."
        },
        {
          heading: "Project Management",
          content: "Self-directed project timeline and deliverables as the sole ML engineer, balancing model research, data pipeline development, production deployment, and stakeholder coordination. Identified and advocated for infrastructure improvements despite initial resistance, building business case around deployment reliability and development velocity."
        }
      ]
    }
  },
  {
    slug: "plailab",
    name: "Pl(ai)Lab",
    shortDescription: "AI-powered exercise coach using computer vision and voice interaction for cancer rehabilitation.",
    tags: ["Swift", "iOS", "OpenAI", "Computer Vision", "AR"],
    externalLink: "https://www.olin.edu/articles/story-oliners-collaborate-local-senior-center-artificial-intelligence-ai-and-augmented",
    details: {
      title: "Pl(AI) Lab",
      subtitle: "AI-Assisted Rehabilitation App for Post-Surgical Cancer Patients | Pl(AI) Lab, Olin College (2025)",
      role: "Programming Lead",
      sections: [
        {
          heading: "Overview",
          content: "Led technical development of a research prototype addressing a gap in cancer rehabilitation: post-surgical patients who are chair-bound lack access to personalized exercise guidance between physical therapy sessions. Traditional PT is expensive and infrequent; existing fitness apps assume mobility and tech literacy that older adults often lack."
        },
        {
          heading: "Solution",
          content: "Built an AI-powered exercise coach using computer vision (pose estimation) and voice interaction, designed specifically for adults 65+ recovering from cancer surgery. The system guides patients through rehabilitation exercises (protocols developed in consultation with MSKCC physical therapists), adapts workouts in real-time based on patient feedback, and provides form guidance to prevent injury—all without requiring patients to touch a screen or navigate menus."
        },
        {
          heading: "Key Innovation - AR Accessibility",
          content: "Identified that standard phone-based interfaces were unusable for chair-bound patients (camera must be 6+ feet away for full-body view, making screens unreadable). Advocated for lab to acquire Viture AR glasses, projecting the interface directly in patients' field of view regardless of body orientation during exercises. This eliminated the need for patients to face the phone directly, critical for lateral movements."
        },
        {
          heading: "Technical Execution",
          content: "Developed Swift iOS app with real-time pose estimation to track joint positions and detect exercise completion. Built Python backend integrating OpenAI's multimodal model for voice-driven interaction—patients could request breaks, adjust rep counts, or stop exercises through natural conversation. Implemented form checking using 2D joint coordinates to flag asymmetry and range-of-motion issues (limitation: 2D pose estimation provides general guidance, not clinical-grade biomechanical analysis). Gamified exercises with on-screen targets patients \"hit\" with body parts, reducing cognitive load for exercise execution."
        },
        {
          heading: "User Research",
          content: "Conducted user testing with 20+ post-surgical cancer patients. 95% expressed interest in continued use if developed into a production app, validating core concept and accessibility approach. Presented findings to 3,000+ attendees at Stanford Engineering Centennial."
        },
        {
          heading: "Research Contribution",
          content: "Demonstrated feasibility of AI-assisted rehabilitation for underserved populations (older adults, post-surgical patients) using commercially available hardware. Showed that voice interaction + AR can reduce traditional barriers to tech adoption in clinical contexts."
        }
      ]
    }
  },
  {
    slug: "afora",
    name: "Afora",
    shortDescription: "Full-stack team-matching web app using React, Next.js, and Firebase with GPT API integration.",
    tags: ["React", "Firebase", "Next.js", "OpenAI"],
    externalLink: "https://afora1.vercel.app/",
    details: {
      title: "Afora",
      subtitle: "Software Developer | Team Formation Tool (3-month project)",
      role: "Software Developer",
      sections: [
        {
          heading: "Overview",
          content: "Developed a team-matching web app to help students find project partners at hackathons and in classrooms. Built full-stack application using React, Next.js, TypeScript, and Firebase with GPT API integration to parse user survey responses and suggest compatible teams based on interests and goals."
        },
        {
          heading: "Technical Contributions",
          content: "Implemented authentication, data storage, and real-time updates using Firebase and React-Firebase-Hooks. Integrated ChatGPT API for survey response analysis and team recommendations. Deployed functional prototype on Vercel."
        },
        {
          heading: "Funding & Outcome",
          content: "Secured $1,000 grant from Babson College. Conducted user testing but did not launch publicly. Project concluded after 3 months when team goals diverged."
        },
        {
          heading: "Key Learning",
          content: "Experienced firsthand how misaligned goals and communication gaps can derail early-stage projects, regardless of technical execution. A functional product doesn't matter if the team isn't aligned on vision and next steps."
        }
      ]
    }
  },
  {
    slug: "project-aura",
    name: "Project AURA",
    shortDescription: "Autonomous cart capable of following a user via reflective tape tracking.",
    tags: ["Robotics", "Electrical Engineering", "Project Management", "C++"],
    externalLink: "https://xavieryn.github.io/AURA/",
    details: {
      title: "Project AURA",
      subtitle: "Autonomous Following Cart | Project Manager & Electrical Lead (Sophomore Year)",
      role: "Project Manager & Electrical Lead",
      sections: [
        {
          heading: "Overview",
          content: "Led a 5-person team building an autonomous cart capable of carrying 300 lb loads while following a user via reflective tape tracking—designed as a proof-of-concept for hands-free shopping carts or airport luggage transport. Managed cross-functional integration across mechanical, electrical, and software subsystems under aggressive 2-month timeline."
        },
        {
          heading: "Project Management & Technical Leadership",
          content: "Defined system architecture and interfaces between subsystems (sensor data formats, power requirements, mechanical constraints for sensor mounting). Managed cascading delays from component backordering and integration challenges—descoped advanced features (path planning, high-speed operation) to prioritize core functionality (reliable following, obstacle avoidance) when timeline compressed. Debugged critical steering failure through systematic subsystem isolation: tested electrical signals, verified mechanical assembly for binding, then identified root cause in software—mechanical torque calculations were incorrect, causing stepper motor to skip steps. Solution: reduced step size to prevent gear skipping. Navigated pushback from software team on feature cuts, prioritizing safety (lower max speed) and demo reliability over advanced capabilities."
        },
        {
          heading: "Electrical Systems",
          content: "Designed and implemented power distribution across multiple voltage sources (motors, sensors, compute)—underestimated complexity of voltage regulation and noise isolation, leading to mid-project redesign. Integrated reflective tape tracking sensor and RealSense depth camera for obstacle detection, managing cable routing to avoid mechanical interference. Created electrical documentation and wiring diagrams enabling team troubleshooting and modifications."
        },
        {
          heading: "Technical Outcome",
          content: "Successfully demonstrated autonomous following and obstacle avoidance in controlled conditions. System limitations exposed gap between proof-of-concept and production readiness: tracking lost user when reflective tape moved out of view or when other reflective objects appeared in environment; obstacle avoidance occasionally over-sensitive in crowded spaces."
        },
        {
          heading: "Key Learning",
          content: "Integration is where theory meets reality—mechanical calculations that looked correct on paper caused motor skipping in practice. Managing multiple voltage sources proved harder than expected. Descoping isn't failure; it's prioritization under constraints. For future projects: build integration time into schedule, not just component development."
        }
      ]
    }
  }
];
