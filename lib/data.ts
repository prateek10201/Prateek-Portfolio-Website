import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import sfuit from "@/public/Sfuit_.png";
import bounceit from "@/public/bounceit_homepage.png";
import its from "@/public/Interview Tracking System.png";
import drs from "@/public/five_images_3.png";
import vp from "@/public/vp_home.png";
import cal from "@/public/calendar.png";
import hh from "@/public/humminghire.png";
import mov from "@/public/Moviematchmaker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Teaching Assistant, Clemson University",
    location: "Clemson, SC",
    description:
      "Instructed students in the 'Software Development Foundations' course under the mentorship of Prof. Mathew Joseph Re. Delivered hands-on programming sessions focused on Java and OOP concepts.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - May 2025",
  },
  {
    title: "Software Developer - Part Time, Daedalus Cybernetics",
    location: "Clemson, SC",
    description:
      "Developed a fully responsive company website using JavaScript, HTML, CSS, and Webflow. Identified and resolved rendering issues and page loading errors across all web pages, eliminating bugs and delivering a error-free browsing experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Dec 2024",
  },
  {
    title: "Graduate Teaching Assistant, Clemson University",
    location: "Clemson, SC",
    description:
      "Guided over 60 students in the 'Introduction to Software Engineering' course, emphasizing practical skills in building microservices with C# and ASP.NET. Focused on critical areas such as the Software Development Life Cycle, Agile Methodologies, Object-Oriented Programming, ASP.NET, Git, and Azure Cloud.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - May 2024",
  },
  {
    title: "Clemson Univerity",
    location: "Clemson, SC",
    description:
      "Currently pursuing Master's Degree in Computer Science with 4 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2025",
  },
  {
    title: "Programmer Analyst Trainee, Cognizant Technology Solutions",
    location: "Hyderabad, India",
    description:
      "Worked for the PayPal Fact Development and GCP Fact projects, where I optimized legacy XML code to Python Scripts and migrated them to GCP Buckets. Restructured the audit module using DataFrames in PySpark.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Jun 2023",
  },
  {
    title: "Software Engineer Intern, Cognizant Technology Solutions",
    location: "Hyderabad, India",
    description:
      "Trained in Big Data and Data Warehousing within the AIA domain, focusing on Python, Hadoop, Spark, and other key Big Data technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 - Jun 2022",
  },
  {
    title: "Backend Developer Intern, Player Orbit",
    location: "Remote",
    description:
      "Architectured and Deployed User Authentication microservice Backend API using Spring Boot and MongoDB, optimizing REST APIs for seamless frontend-backend integration.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Mar 2022",
  },
  {
    title: "Matrusri Engineering College, Osmania University",
    location: "Hyderabad, India",
    description:
      "Graduated with an 3.7 GPA in Bachelor of Engineering, Computer Science & Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "SfUIT - Smart fabrics Using IoT",
    description:
      "Developed a robust Backend API using Java with the Spring Framework for the SfUIT prototype, a SaaS solution designed for continuous health monitoring of differently-abled individuals.",
    tags: ["Java", "SaaS", "Spring Boot", "PostgreSQL"],
    imageUrl: sfuit,
    projectUrl: "https://sfuit-apror.netlify.app/",
  },
  {
    title: "Humming Hire - AI Backend API",
    description:
      "Built a scalable recruitment platform backend using Java Spring Boot, PostgreSQL, and REST APIs, integrating Spring AI for LLM-based candidate-recruiter matching, reducing matching time.",
    tags: [
      "Java",
      "AI Integration",
      "Spring AI",
      "Spring Boot",
      "Kafka",
      "Spring Security",
      "Spring Cloud",
      "PostgreSQL",
      "LLM",
    ],
    imageUrl: hh,
    projectUrl: "https://github.com/prateek10201/HummingHire-Backend",
  },
  {
    title: "Movie Matchmaker - AI-Powered Movie Recommendation System",
    description:
      "Movie MatchMaker is an AI-powered movie recommendation system that delivers personalized movie suggestions based on user preferences, mood, and viewing history.",
    tags: [
      "Python",
      "Flask",
      "Content-Based Filtering",
      "HTML",
      "CSS",
      "Javascript",
      "Render",
    ],
    imageUrl: mov,
    projectUrl: "https://movie-matchmaker-recommendation-system.onrender.com/",
  },
  {
    title: "Interview Tracking System",
    description:
      "Developed a RESTful API from scratch for backend operations, drawing inspiration from Superset, to manage CRUD functions such as scheduling appointments, tracking interviewer feedback, and notifying candidates.",
    tags: ["Java", "Spring Boot", "MySQL", "PostgreSQL"],
    imageUrl: its,
    projectUrl:
      "https://github.com/prateek10201/InterviewTrackingSystemBackend",
  },
  {
    title: "Bounce It",
    description:
      "Built 'BOUNCE IT!,' a cross-platform casual game using HTML, CSS, and JavaScript. Achieved high user acceptance, effectively managing the challenges of creating a graphics-intensive game with dynamic gameplay.",
    tags: ["HTML", "CSS", "Javascript", "CanvasAPI", "jQuery"],
    imageUrl: bounceit,
    projectUrl: "https://bounceit.netlify.app/#",
  },
  {
    title: "Scheduler - Calendar Component",
    description:
      "Created a responsive calendar scheduling component using Next.js, Supabase, and TailwindCSS, enabling intuitive appointment management and visualization. Implemented the Backend with PostgreSQL via Supabase to handle user authentication, and data persistence.",
    tags: [
      "NextJs",
      "React",
      "Supabase",
      "TailwindCSS",
      "PostgreSQL",
      "TypeScript",
    ],
    imageUrl: cal,
    projectUrl: "https://calendar-component-test-scheduler.vercel.app/",
  },
  {
    title: "Diabetic Retinopathy Screening Using CNN",
    description:
      "Curated an exhaustive dataset of Fundus Images related to diabetic patients from the ATMOS dataset on Kaggle. Employed the ResNet-18 architecture, and achieved an accuracy of 84.3%, highlighting its efficiency in DR Screening. ",
    tags: ["Deep Learning", "CNN", "Python", "Pandas"],
    imageUrl: drs,
    projectUrl:
      "https://github.com/prateek10201/Diabetic-Retinopathy-Screening-Using-CNN",
  },
  {
    title: "Voice Prescription Mobile Application",
    description:
      "Developed an Android application for healthcare professionals to streamline digital prescriptions. Utilized the Google Speech-To-Text API, and delivered prescription to patients as a PDF document. The app aids physicians in archiving past prescriptions, generating new prescriptions.",
    tags: ["Java", "Mobile App Development", "SQL", "Firebase"],
    imageUrl: vp,
    projectUrl: "https://github.com/prateek10201/Voice-Prescription_VP",
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Java",
  "Python",
  "C++",
  "C#",
  "TypeScript",
  "JavaScript",

  // Web Development: Frontend
  "HTML",
  "CSS",
  "TailwindCSS",
  "React.js",
  "Next.js",

  // Web Development: Backend
  "Spring Boot",
  "Restful Web Services",
  "Flask",
  "ASP.Net",

  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "BigQuery",
  "Supabase",

  // Cloud & Deployment
  "AWS",
  "GCP",
  "Docker",
  "Vercel",
  "Render",

  // Tools
  "Git",
  "Pandas",
  "PySpark",
  "Postman",

  // Specialized
  "AI Integration",
  "LLM",
] as const;
