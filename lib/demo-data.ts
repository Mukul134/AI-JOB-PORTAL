// Demo person data for development/preview purposes
export const DEMO_WORKER = {
  id: "worker-1",
  fullName: "Alex Johnson",
  email: "worker@demo.com",
  role: "job_seeker",
  bio: "Experienced full-stack developer with 5+ years of expertise in React, Node.js, and modern web technologies. Passionate about building scalable applications.",
  skills: ["React", "Node.js", "TypeScript", "Web Design", "UI/UX"],
  experience:
    "Senior Full-Stack Developer at TechCorp (2019-2023) | Web Developer at StartupXYZ (2017-2019) | Junior Developer at WebAgency (2015-2017)",
  hourlyRate: "750",
  profileImage: null,
}

export const DEMO_EMPLOYER = {
  id: "employer-1",
  fullName: "Tech Solutions Inc.",
  email: "employer@demo.com",
  role: "employer",
  company: "Tech Solutions Inc.",
  industry: "Software Development",
  description:
    "Leading software development agency building innovative web and mobile solutions for startups and enterprises.",
  profileImage: null,
}

export const DEMO_ADMIN = {
  id: "admin-1",
  fullName: "Platform Admin",
  email: "admin@demo.com",
  role: "admin",
  profileImage: null,
}

export const DEMO_WORKS = [
  {
    id: "work-1",
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and rebuilding of a legacy e-commerce platform using React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    completedDate: "2023-06",
    earnings: 5000,
  },
  {
    id: "work-2",
    title: "Mobile App Dashboard",
    description: "Built a responsive admin dashboard for iOS app management with real-time analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "TypeScript", "Chart.js", "REST API"],
    link: "#",
    completedDate: "2023-04",
    earnings: 3500,
  },
  {
    id: "work-3",
    title: "SaaS Landing Page",
    description: "Designed and developed a modern landing page for a SaaS startup with conversion optimization",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    completedDate: "2023-02",
    earnings: 2000,
  },
  {
    id: "work-4",
    title: "UI Component Library",
    description: "Created a comprehensive reusable component library with 50+ components and full documentation",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
    link: "#",
    completedDate: "2022-12",
    earnings: 4500,
  },
]

export const DEMO_APPLICATIONS = [
  {
    id: "app-1",
    jobTitle: "React Developer - Full-time",
    company: "TechCorp",
    dateApplied: "2024-01-15",
    status: "Under Review",
    proposal:
      "I have extensive experience with React and have successfully delivered similar projects. I'm confident in meeting your requirements.",
    bidAmount: 50000,
  },
  {
    id: "app-2",
    jobTitle: "Frontend Engineer - Contract",
    company: "StartupXYZ",
    dateApplied: "2024-01-10",
    status: "Interview Scheduled",
    proposal:
      "My expertise aligns perfectly with your project needs. I've completed 3 similar projects in the last year.",
    bidAmount: 8000,
  },
  {
    id: "app-3",
    jobTitle: "Full-Stack Developer",
    company: "Innovation Labs",
    dateApplied: "2024-01-05",
    status: "Rejected",
    proposal: "Strong match for your requirements with relevant experience in both frontend and backend technologies.",
    bidAmount: 12000,
  },
]

export const DEMO_STATS = {
  worker: {
    applications: 12,
    proposalsSent: 8,
    earnings: 15000,
    completionRate: 95,
    recentActivity: [
      { date: "Today", action: "Applied to React Developer position" },
      { date: "Yesterday", action: "Completed project worth ₹5,000" },
      { date: "2 days ago", action: "Updated profile skills" },
    ],
  },
  employer: {
    activeJobs: 5,
    totalApplications: 34,
    hiredWorkers: 8,
    totalSpent: 125000,
    recentActivity: [
      { date: "Today", action: "Posted new job: React Developer" },
      { date: "Yesterday", action: "Hired Alex Johnson for Frontend Project" },
      { date: "2 days ago", action: "Closed job: Mobile App Designer" },
    ],
  },
  admin: {
    totalUsers: 1250,
    totalJobs: 324,
    completedProjects: 156,
    platformRevenue: 45680,
    jobSeekers: 850,
    employers: 350,
    admins: 50,
  },
}

export const demoWorkerData = {
  ...DEMO_WORKER,
  stats: DEMO_STATS.worker,
  works: DEMO_WORKS,
  applications: DEMO_APPLICATIONS,
  notifications: [
    {
      id: "notif-1",
      type: "job",
      title: "New Job Match Found",
      message: "A new React Developer position matches your skills and preferences",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "notif-2",
      type: "message",
      title: "New Message from TechCorp",
      message: "Sarah from TechCorp sent you a message regarding your application",
      time: "5 hours ago",
      read: false,
    },
    {
      id: "notif-3",
      type: "achievement",
      title: "Profile Milestone Reached",
      message: "Congratulations! You've completed 10 projects successfully",
      time: "1 day ago",
      read: true,
    },
    {
      id: "notif-4",
      type: "update",
      title: "Application Status Updated",
      message: "Your application for Frontend Engineer has been moved to interview stage",
      time: "2 days ago",
      read: true,
    },
  ],
  messages: [
    {
      id: "msg-1",
      sender: "Sarah Johnson - TechCorp",
      subject: "Interview Invitation",
      preview: "Hi Alex, We are impressed with your profile and would like to schedule an interview...",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: "msg-2",
      sender: "Mike Chen - StartupXYZ",
      subject: "Project Discussion",
      preview: "Hello, I'd like to discuss the project requirements in more detail. When would be...",
      time: "1 day ago",
      unread: true,
    },
    {
      id: "msg-3",
      sender: "Emma Wilson - Innovation Labs",
      subject: "Follow-up on Application",
      preview: "Thank you for your interest in our position. We wanted to follow up with some...",
      time: "3 days ago",
      unread: false,
    },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "Jan 2023",
      expiryDate: "Jan 2026",
      credentialId: "AWS-12345-CERT",
      verified: true,
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      issueDate: "Sep 2022",
      expiryDate: null,
      credentialId: "META-REACT-567",
      verified: true,
    },
    {
      name: "Full-Stack Web Development",
      issuer: "Udemy",
      issueDate: "Jun 2021",
      expiryDate: null,
      credentialId: "UC-FULLSTACK-890",
      verified: false,
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      issueDate: "Mar 2023",
      expiryDate: null,
      credentialId: "PSM-I-2023-456",
      verified: true,
    },
  ],
}

export const demoEmployerData = {
  ...DEMO_EMPLOYER,
  stats: DEMO_STATS.employer,
  applicantTracking: [
    {
      id: "job-1",
      jobTitle: "Senior React Developer",
      applicantCount: 12,
      recentApplicants: [
        {
          name: "Alex Johnson",
          experience: "5+ years in React & Node.js",
          status: "shortlisted",
        },
        {
          name: "Sarah Williams",
          experience: "4 years Full-Stack Development",
          status: "reviewing",
        },
        {
          name: "Mike Chen",
          experience: "6 years Frontend Engineering",
          status: "interviewed",
        },
      ],
    },
    {
      id: "job-2",
      jobTitle: "UI/UX Designer",
      applicantCount: 8,
      recentApplicants: [
        {
          name: "Emma Davis",
          experience: "3 years Product Design",
          status: "reviewing",
        },
        {
          name: "John Smith",
          experience: "5 years UI Design",
          status: "shortlisted",
        },
        {
          name: "Lisa Brown",
          experience: "2 years UX Research",
          status: "rejected",
        },
      ],
    },
    {
      id: "job-3",
      jobTitle: "Backend Developer",
      applicantCount: 15,
      recentApplicants: [
        {
          name: "Robert Taylor",
          experience: "7 years Node.js & Python",
          status: "interviewed",
        },
        {
          name: "Maria Garcia",
          experience: "4 years API Development",
          status: "shortlisted",
        },
      ],
    },
  ],
}

export const demoAdminData = {
  ...DEMO_ADMIN,
  stats: DEMO_STATS.admin,
  reports: {
    revenue: {
      total: 452680,
      growth: 18.5,
    },
    activeUsers: {
      total: 3450,
      growth: 12.3,
    },
    jobPostings: {
      total: 324,
      thisMonth: 47,
    },
    successRate: {
      percentage: 87,
      completedProjects: 156,
    },
    topCategories: [
      { name: "Web Development", count: 145, percentage: 85 },
      { name: "Mobile Development", count: 98, percentage: 60 },
      { name: "UI/UX Design", count: 76, percentage: 45 },
      { name: "Data Science", count: 54, percentage: 30 },
      { name: "Digital Marketing", count: 42, percentage: 25 },
    ],
    weeklyActivity: {
      newUsers: 234,
      jobsPosted: 47,
      transactions: 89560,
    },
  },
}
