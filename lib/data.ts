import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import sfuit from "@/public/Sfuit_.png";
import bounceit from "@/public/bounceit_homepage.png";
import its from "@/public/Interview Tracking System.png";
import drs from "@/public/five_images_3.png"
import vp from "@/public/vp_home.png"


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
      "Instructing students in the 'Software Development Foundations' course under the mentorship of Prof. Mathew Joseph Re.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - now",
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
      "Currently pursuing Master's Degree in Computer Science with 4 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
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
      "Graduated with an 8.4 GPA in Bachelor of Engineering, Computer Science & Engineering.",
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
    projectUrl: "https://sfuit-apror.netlify.app/"
  },
  {
    title: "Interview Tracking System",
    description:
      "Developed a RESTful API from scratch for backend operations, drawing inspiration from Superset, to manage CRUD functions such as scheduling appointments, tracking interviewer feedback, and notifying candidates.",
    tags: ["Java", "Spring Boot", "MySQL", "PostgreSQL"],
    imageUrl: its,
    projectUrl: "https://github.com/prateek10201/InterviewTrackingSystemBackend"
  },
  {
    title: "Bounce It",
    description:
      "Built 'BOUNCE IT!,' a cross-platform casual game using HTML, CSS, and JavaScript. Achieved high user acceptance, effectively managing the challenges of creating a graphics-intensive game with dynamic gameplay.",
    tags: ["HTML", "CSS", "Javascript", "CanvasAPI", "jQuery"],
    imageUrl: bounceit,
    projectUrl: "https://bounceit.netlify.app/#"
  },
  {
    title: "Diabetic Retinopathy Screening Using CNN",
    description:
      "Curated an exhaustive dataset of Fundus Images related to diabetic patients from the ATMOS dataset on Kaggle. Employed the ResNet-18 architecture, and achieved an accuracy of 84.3%, highlighting its efficiency in DR Screening. ",
    tags: ["Deep Learning", "CNN", "Python", "Pandas"],
    imageUrl: drs
  },
  {
    title: "Voice Prescription Mobile Application",
    description:
      "Developed an Android application for healthcare professionals to streamline digital prescriptions. Utilized the Google Speech-To-Text API, and delivered prescription to patients as a PDF document. The app aids physicians in archiving past prescriptions, generating new prescriptions.",
    tags: ["Java", "Mobile App Development", "SQL", "Firebase"],
    imageUrl: vp,
    projectUrl: "https://github.com/prateek10201/Voice-Prescription_VP"
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "AWS",
  "Spring Boot",
  "C++",
  "HTML",
  "CSS",
  "Javascript",
  "C#",
  "Git",
  "ASP.Net",
  "PySpark",
  "React",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "BigQuery",
  "Docker",
  "pandas",
] as const;
