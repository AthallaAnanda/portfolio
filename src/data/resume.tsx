import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "R. Athalla Ananda Putra",
  initials: "AAP",
  url: "https://github.com/AthallaAnanda",
  location: "Bandung, West Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bandung",
  description:
    "Information Systems & Technology student who loves building things, from IoT systems to full-stack web apps, and enjoys leading teams to actually ship them.",
  summary:
    "I'm a second-year student at [Institut Teknologi Bandung](/#education) studying Information Systems and Technology (GPA 3.86/4.00). I love building products and have worked across IoT, AI, and full-stack web. Right now I'm Vice Chief Operating Officer at [Inkubator IT](/#work), where I help oversee 9 client projects worth IDR 107M. Along the way I've also worn hats as Product Owner, Scrum Master, and Business Analyst.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "C / C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "athallaanandap@gmail.com",
    tel: "+6281335207811",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AthallaAnanda",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:athallaanandap@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Inkubator IT",
      href: "#",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Vice Chief Operating Officer",
      logoUrl: "/work/inkubator.jfif",
      start: "May 2026",
      end: "Present",
      description:
        "I oversee 10 project managers running 9 client projects worth IDR 107M, making sure business goals, timelines, and delivery stay in sync. I've cut the time from requirement sign-off to dev kickoff by 20%, brought scope creep down 16%, and managed 5 change requests without a single delay.",
    },
    {
      company: "TechFusion",
      href: "#",
      badges: ["Product"],
      location: "Remote",
      title: "Product Manager",
      logoUrl: "/work/techfusion.png",
      start: "Jan 2026",
      end: "May 2026",
      description:
        "Ran TechFusion's website build as both Product Owner and Scrum Master, leading a 7-person team across product, UI/UX, and engineering. I wrote the PRD, scoped the MVP, ran 10+ Scrum ceremonies, and we shipped on time for 100+ org members.",
    },
    {
      company: "Inkubator IT",
      href: "#",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Project Manager",
      logoUrl: "/work/inkubator.jfif",
      start: "Oct 2025",
      end: "Present",
      description:
        "Managed 3 client projects worth up to IDR 50M: an HSE platform, a partnership portal, and a company landing page. I handled everything end-to-end, from stakeholder coordination and progress tracking to docs, while catching risks early and keeping clients and devs on the same page.",
    },
    {
      company: "Sekolah Robot Indonesia",
      href: "#",
      badges: ["IoT"],
      location: "Surabaya, Indonesia",
      title: "IoT Engineer Trainee",
      logoUrl: "/work/sri.jfif",
      start: "Jul 2022",
      end: "Oct 2023",
      description:
        "Built IoT safety and health monitoring systems using sensors like MPU6050, MAX30102, MLX90614, and GPS, covering everything from sensor integration to embedded programming and wireless comms. Worked on SPAADS (accident detection) and UNS-IL (a smart inflatable life jacket), which picked up Silver Medals at WorldInvent Singapore, a Gold Medal at Indonesia Inventors Day, and the Governor of East Java Award.",
    },
  ],
  education: [
    {
      school: "Institut Teknologi Bandung",
      href: "https://www.itb.ac.id",
      degree: "Bachelor of Engineering in Information Systems and Technology",
      gpa: "3.86 / 4.00",
      logoUrl: "/education/itb.png",
      start: "2024",
      end: "2028 (Expected)",
    },
    {
      school: "SMAN 5 Surabaya",
      href: "#",
      degree: "Science Major, Top 10 Academic Standing out of 310 students",
      gpa: "91.10 / 100",
      logoUrl: "/education/sman5.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "BeeWatch: Dual-Node IoT Beehive Monitoring System",
      href: "https://github.com/AthallaAnanda/beewatch",
      dates: "June 2026",
      active: true,
      description:
        "Built a full end-to-end IoT system for real-time beehive anomaly detection: ESP32 nodes talking to a Flask REST API, with a TensorFlow/Keras autoencoder doing the detection, SQLite for logging, and Telegram alerts when something's off.",
      technologies: [
        "ESP32",
        "Python",
        "Flask",
        "TensorFlow",
        "Keras",
        "SQLite",
        "REST API",
        "BME280",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AthallaAnanda/beewatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pinjemin Aja! (Community-Based Household Tool Lending App)",
      href: "https://github.com/AthallaAnanda/IF2050-2026-K02-G05-PinjeminAja",
      dates: "May 2026",
      active: true,
      description:
        "Led the full SDLC as Systems Analyst and Frontend Developer in a 5-person Agile team. I wrote the SRS (10 functional, 12 non-functional requirements, 21 use cases) and an SDD covering architecture, wireframes, and DB schema, then built the Auth and Profile module frontend in React 18, TypeScript, and Electron.",
      technologies: [
        "React 18",
        "TypeScript",
        "Electron",
        "REST API",
        "GitHub Issues",
        "Agile/Scrum",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AthallaAnanda/IF2050-2026-K02-G05-PinjeminAja",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/pinjeminaja.mp4",
    },
    {
      title: "PsyTrack (AI Early Instability Detection for Mental Health)",
      href: "https://drive.google.com/file/d/1ih1hksNmRacxARcg4i632ADc1qRgS583/view?usp=drive_link",
      dates: "Mar 2026",
      active: true,
      description:
        "Led product ideation for an AI-based outpatient mental health monitoring system. I ran the market research, validated the problem, and put together the business model, value proposition, and financial projections targeting healthcare providers.",
      technologies: [
        "Product Management",
        "Market Research",
        "Business Model",
        "AI/ML",
        "Healthcare",
      ],
      links: [
        {
          type: "Project",
          href: "https://drive.google.com/file/d/1ih1hksNmRacxARcg4i632ADc1qRgS583/view?usp=drive_link",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/psytrack.mp4",
    },
    {
      title: "BasdatFood (Online Food Delivery Platform)",
      href: "https://drive.google.com/drive/folders/1_RfWU4D1AuNdv01G6OEqhg5bvhKCSSmI?usp=sharing",
      dates: "Dec 2025",
      active: true,
      description:
        "Designed the ERD and relational schema, did functional dependency analysis and normalization, then built out the database with SQL scripts, Python-generated dummy data, and analytical queries to surface business insights.",
      technologies: ["PostgreSQL", "SQL", "Python", "ERD", "Normalization"],
      links: [
        {
          type: "Project",
          href: "https://drive.google.com/drive/folders/1_RfWU4D1AuNdv01G6OEqhg5bvhKCSSmI?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/basdatfood.jpg",
      video: "",
    },
    {
      title: "Enterprise Network Infrastructure for PT Vestia Cinta Abadi",
      href: "https://drive.google.com/drive/folders/18LDrxDLknf3A46h1L-Ffqnp1YU-uCHnx?usp=sharing",
      dates: "Dec 2025",
      active: true,
      description:
        "Designed a full enterprise network in Cisco Packet Tracer with 4 VLANs, 7 servers, and 74 PCs across multiple buildings. Set up subnetting, DHCP, NAT, DNS, routing, trunking, and ACLs to keep everything connected and secure.",
      technologies: [
        "Cisco Packet Tracer",
        "VLAN",
        "DHCP",
        "NAT",
        "DNS",
        "ACL",
        "Routing",
      ],
      links: [
        {
          type: "Project",
          href: "https://drive.google.com/drive/folders/18LDrxDLknf3A46h1L-Ffqnp1YU-uCHnx?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/vestia.gif",
      video: "",
    },
    {
      title: "Cook or Be Cooked (Multiplayer Cooking Simulation Game)",
      href: "https://github.com/gelatonnn/CookOrBeCooked",
      dates: "Dec 2025",
      active: true,
      description:
        "Built the backend game systems in Java, applying OOP and design patterns to keep things modular. Covered gameplay logic, controllers, item behaviors, and factory-based object creation, all driven from class diagrams.",
      technologies: ["Java", "OOP", "Design Patterns", "Factory Pattern"],
      links: [
        {
          type: "Source",
          href: "https://github.com/gelatonnn/CookOrBeCooked",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/cookorbecooked.mp4",
    },
    {
      title: "DepoSight (Smart Analytics System for Market Insights)",
      href: "https://drive.google.com/file/d/1BEyL37G4zLPHDYtfQBeAN_K7hW8z3PRB/view?usp=sharing",
      dates: "May 2025",
      active: true,
      description:
        "Dug into business processes and pain points as Business Analyst to design an Odoo-based ERP solution, mapping out requirements across sales, finance, inventory, and customer analytics.",
      technologies: ["Odoo", "ERP", "Business Analysis", "Requirements Engineering"],
      links: [
        {
          type: "Project",
          href: "https://drive.google.com/file/d/1BEyL37G4zLPHDYtfQBeAN_K7hW8z3PRB/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RS Neroifa (Hospital Management System)",
      href: "https://drive.google.com/file/d/1S2GqR2v5CkDfmOLVaWLb9KXD8FZRhv30/view?usp=sharing",
      dates: "May 2024",
      active: true,
      description:
        "Implemented the auth modules in C for a CLI-based hospital management system, covering login, logout, and password recovery with role-based access control, plus a custom unique-code verification algorithm for secure password resets.",
      technologies: ["C", "CLI", "Authentication", "RBAC"],
      links: [
        {
          type: "Project",
          href: "https://drive.google.com/file/d/1S2GqR2v5CkDfmOLVaWLb9KXD8FZRhv30/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  awards: [
    {
      title: "Governor of East Java Award",
      dates: "2023",
      location: "East Java, Indonesia",
      description:
        "Got the Governor of East Java Award for contributions to ICT innovation, specifically the safety and health tech systems we built at Sekolah Robot Indonesia.",
      image: "/awards/governor.svg",
      links: [],
    },
    {
      title: "Silver Medal at WorldInvent Singapore (WoSG)",
      dates: "2022 & 2023",
      location: "Singapore",
      description:
        "Won Silver Medals at WorldInvent Singapore two years in a row: in 2022 for early IoT embedded safety work, and in 2023 for SPAADS and UNS-IL.",
      image: "/awards/wosg.webp",
      links: [],
    },
    {
      title: "Gold Medal at Indonesia Inventors Day (IID)",
      dates: "2022",
      location: "Indonesia",
      description:
        "Took home a Gold Medal at Indonesia Inventors Day 2022 for UNS-IL, a smart inflatable life jacket with built-in health monitoring and wireless emergency alerts.",
      image: "/awards/iid-gold.webp",
      links: [],
    },
    {
      title: "Silver Medal at Indonesia Inventors Day (IID)",
      dates: "2023",
      location: "Indonesia",
      description:
        "Won a Silver Medal at Indonesia Inventors Day 2023 for SPAADS, our accident detection and emergency response system.",
      image: "/awards/iid-silver.webp",
      links: [],
    },
    {
      title: "Top 10 Academic Standing",
      dates: "2024",
      location: "Surabaya, Indonesia",
      description:
        "Graduated in the top 10 out of 310 students at SMAN 5 Surabaya with a cumulative GPA of 91.10/100.",
      image: "/awards/top10.png",
      links: [],
    },
  ],
} as const;
