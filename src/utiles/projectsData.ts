export interface Project {
    id: number;
    title: string;
    description: string;
    img: string;
    details: string;
    role: string;
    duration: string;
    location: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "IoT MF-Fire: Realtime Object Detection",
      description: "Real-time Object Detection using Raspberry Pi and AI technologies.",
      img: "/project1.jpg",
      details: `2024 Dec – present\nPune\nRole: Software Developer (Python, YOLO, TensorFlow, OpenCV, Raspberry Pi, Firebase, Bluetooth)\nResponsibilities:\n• Developed real-time object detection for stove and door state monitoring using Raspberry Pi and IR camera.\n• Trained YOLO and TensorFlow models with custom annotated images for accurate detection.\n• Deployed models on Raspberry Pi and integrated Firebase for state updates and history logging.\n• Created first-time device setup workflow for Bluetooth and Wi-Fi configuration.\n• Enabled real-time results display, including images, door state, and timestamps, in the MF-Fire app.`,
      role: "Software Developer",
      duration: "2024 Dec – present",
      location: "Pune"
    },
    {
      id: 2,
      title: "Medforce Sentiment Analysis Application",
      description: "Sentiment analysis app using React, AWS, and voice emotion recognition.",
      img: "/project2.jpg",
      details: `2024 Aug – 2024 Nov\nPune\nRole: Full Stack Developer (React Native, React.js, AWS Services - S3, Transcribe, Comprehend, Lambda, Vokaturi)\nResponsibilities:\n• Developed a sentiment analysis application using React Native and React.js.\n• Integrated AWS services for speech-to-text and sentiment analysis, and Vokaturi for emotion recognition.\n• Delivered a user-friendly, serverless application using AWS Lambda.`,
      role: "Full Stack Developer",
      duration: "2024 Aug – 2024 Nov",
      location: "Pune"
    },
    {
      id: 3,
      title: "BONDXN - Finance Sector Bidding Application",
      description: "Developed frontend for a finance sector bidding application using React.js and TypeScript.",
      img: "/project3.jpg",
      details: `2024 Feb – 2024 Aug\nPune\nRole: Frontend Developer (React.js, TypeScript, Socket.io, AWS S3)\nResponsibilities:\n• Developed the frontend for a finance sector bidding application using React.js and TypeScript.\n• Implemented real-time updates using Socket.io for bid processes.\n• Built a role-based login system and a calendar/data grid for managing bond data and bids.\n• Deployed the application on AWS S3 for high availability and scalability.`,
      role: "Frontend Developer",
      duration: "2024 Feb – 2024 Aug",
      location: "Pune"
    },
    {
      id: 4,
      title: "Call Outs (Entertainment) - Video Platform",
      description: "Developed a video platform similar to TikTok using React.js and AWS S3.",
      img: "/project4.jpg",
      details: `2023 Dec – 2023 Jun\nPune\nRole: Frontend Developer (React.js, Node.js, AWS S3, CDN)\nResponsibilities:\n• Developed a video platform using React.js and Node.js for backend services.\n• Implemented large file handling using Multer and AWS S3 for high-resolution videos.\n• Integrated CDN for improved video buffering and created reusable components for video playback.\n• Deployed the application on AWS for scalability and performance.`,
      role: "Frontend Developer",
      duration: "2023 Dec – 2023 Jun",
      location: "Pune"
    },
    {
      id: 5,
      title: "BFAC - Nichols Hills - Fitness Tracking App",
      description: "Developed a fitness tracking mobile app with React Native and Angular.js.",
      img: "/project5.jpg",
      details: `2022 Dec – 2023 Jun\nPune\nRole: Frontend Developer (React Native, Angular.js, Node.js, MySQL)\nResponsibilities:\n• Built a fitness tracking mobile app using React Native for iOS and Android.\n• Developed an admin dashboard with Angular.js for managing user data.\n• Created backend APIs with Node.js to support tracking features and manage user data.\n• Deployed the web app and Node.js backend on AWS using Docker for scalability.`,
      role: "Frontend Developer",
      duration: "2022 Dec – 2023 Jun",
      location: "Pune"
    },
    {
      id: 6,
      title: "Angular eCommerce Application",
      description: "Developed a dynamic eCommerce web application with Angular and ASP.NET Core.",
      img: "/project6.jpg",
      details: `2022 Jul – 2022 Nov\nPune\nRole: Full Stack Developer (Angular 13, ASP.NET Core, MySQL)\nResponsibilities:\n• Developed a dynamic eCommerce application with Angular for frontend and ASP.NET Core for backend.\n• Implemented role-based authentication for admins and users.\n• Designed product listings, shopping cart, order placement, and invoice generation.\n• Utilized MySQL for efficient data management and integrated RESTful APIs for seamless communication.`,
      role: "Full Stack Developer",
      duration: "2022 Jul – 2022 Nov",
      location: "Pune"
    },
    {
      id: 7,
      title: "Little Elly School Web App",
      description: "Developed a mobile app for students and parents using React.js and TypeScript.",
      img: "/project7.jpg",
      details: `2022 Mar – 2022 Jun\nBangalore\nRole: Software Developer (React.js, TypeScript)\nResponsibilities:\n• Developed a school web application for students and parents.\n• Implemented features for parents to track child’s educational progress and make online payments.\n• Created functionalities for students to view class schedules and access assignments.\n• Ensured cross-platform compatibility for both iOS and Android devices.`,
      role: "Software Developer",
      duration: "2022 Mar – 2022 Jun",
      location: "Bangalore"
    }
  ];
  