"use client"

import { useState, useMemo } from "react"
import { JobFilters } from "@/components/job-browser/job-filters"
import { JobCard } from "@/components/job-browser/job-card"
import { Card, CardContent } from "@/components/ui/card"
import { AISmartFilter } from "@/components/ai/ai-smart-filter"

interface Job {
  id: string
  title: string
  category: string
  description: string
  budget: number
  duration: "short-term" | "medium-term" | "long-term"
  experienceLevel: "entry" | "intermediate" | "expert"
  employer: string
  applications: number
  postedDate: string
}

const sampleJobs: Job[] = [
  // Web Development Jobs
  {
    id: "1",
    title: "Build a React Dashboard",
    category: "Web Development",
    description: "Need a custom React dashboard for analytics tracking with real-time data visualization and charts",
    budget: 25000,
    duration: "medium-term",
    experienceLevel: "intermediate",
    employer: "Tech Startup India",
    applications: 12,
    postedDate: "2 days ago",
  },
  {
    id: "2",
    title: "Mobile App Development - React Native",
    category: "Web Development",
    description: "Build iOS and Android app using React Native. 3+ years experience required.",
    budget: 120000,
    duration: "long-term",
    experienceLevel: "expert",
    employer: "MobileFirst Technologies",
    applications: 8,
    postedDate: "1 day ago",
  },
  {
    id: "3",
    title: "E-Commerce Platform Development",
    category: "Web Development",
    description: "Full-stack e-commerce platform with payment integration and inventory management",
    budget: 150000,
    duration: "long-term",
    experienceLevel: "expert",
    employer: "ShopHub India",
    applications: 15,
    postedDate: "3 days ago",
  },
  
  // Design & Creative Jobs
  {
    id: "4",
    title: "UI/UX Design for Mobile App",
    category: "Design & Creative",
    description: "Design modern UI/UX for a mobile fitness tracking application with Figma prototypes",
    budget: 15000,
    duration: "short-term",
    experienceLevel: "intermediate",
    employer: "FitLife Co",
    applications: 8,
    postedDate: "1 day ago",
  },
  {
    id: "5",
    title: "Brand Identity & Logo Design",
    category: "Design & Creative",
    description: "Complete branding package including logo, color palette, and brand guidelines for startup",
    budget: 50000,
    duration: "medium-term",
    experienceLevel: "intermediate",
    employer: "StartupHub",
    applications: 6,
    postedDate: "2 days ago",
  },
  {
    id: "6",
    title: "Illustration & Character Design",
    category: "Design & Creative",
    description: "Create 20+ character illustrations for educational mobile app in cartoon style",
    budget: 35000,
    duration: "medium-term",
    experienceLevel: "expert",
    employer: "EduTech Solutions",
    applications: 4,
    postedDate: "4 days ago",
  },

  // Electrical Services Jobs
  {
    id: "7",
    title: "Home Electrical Rewiring",
    category: "Electrical Services",
    description: "Complete apartment rewiring needed with modern fixtures. Licensed electrician required.",
    budget: 12000,
    duration: "short-term",
    experienceLevel: "expert",
    employer: "Home Renovations Delhi",
    applications: 7,
    postedDate: "1 day ago",
  },
  {
    id: "8",
    title: "Solar Panel Installation",
    category: "Electrical Services",
    description: "Install solar panels on commercial building roof. Expert in solar installation needed.",
    budget: 80000,
    duration: "short-term",
    experienceLevel: "expert",
    employer: "GreenEnergy Corp",
    applications: 3,
    postedDate: "5 days ago",
  },
  {
    id: "9",
    title: "Office Electrical Maintenance",
    category: "Electrical Services",
    description: "Regular monthly electrical maintenance and upgrades for corporate office",
    budget: 6000,
    duration: "long-term",
    experienceLevel: "intermediate",
    employer: "Corporate Facilities",
    applications: 2,
    postedDate: "3 days ago",
  },

  // Plumbing Services Jobs
  {
    id: "10",
    title: "Pipe Repair & Maintenance",
    category: "Plumbing Services",
    description: "Fix leaky pipes and install new fixtures in residential apartment. Urgent.",
    budget: 3000,
    duration: "short-term",
    experienceLevel: "intermediate",
    employer: "Rajesh Kumar",
    applications: 5,
    postedDate: "3 hours ago",
  },
  {
    id: "11",
    title: "Water System Installation",
    category: "Plumbing Services",
    description: "Install RO water system and pipes for villa. Complete water solution needed.",
    budget: 15000,
    duration: "short-term",
    experienceLevel: "expert",
    employer: "Villa Owners Association",
    applications: 4,
    postedDate: "2 days ago",
  },
  {
    id: "12",
    title: "Bathroom Fixtures Installation",
    category: "Plumbing Services",
    description: "Install modern bathroom fixtures and plumbing for new house construction",
    budget: 20000,
    duration: "medium-term",
    experienceLevel: "intermediate",
    employer: "Construction Corp",
    applications: 6,
    postedDate: "1 day ago",
  },

  // Painting & Renovation Jobs
  {
    id: "13",
    title: "Interior Painting & Wall Design",
    category: "Painting & Renovation",
    description: "Professional painters for interior house painting with wall design patterns. 3000 sqft space.",
    budget: 18000,
    duration: "medium-term",
    experienceLevel: "intermediate",
    employer: "Sharma Residence",
    applications: 4,
    postedDate: "4 days ago",
  },
  {
    id: "14",
    title: "Office Renovation Project",
    category: "Painting & Renovation",
    description: "Complete office renovation including painting, carpentry, and lighting upgrades",
    budget: 150000,
    duration: "long-term",
    experienceLevel: "expert",
    employer: "Corporate Interiors",
    applications: 8,
    postedDate: "2 days ago",
  },
  {
    id: "15",
    title: "Exterior House Painting",
    category: "Painting & Renovation",
    description: "Exterior painting with waterproofing for residential villa with modern design",
    budget: 40000,
    duration: "medium-term",
    experienceLevel: "intermediate",
    employer: "Kavya Desai Properties",
    applications: 5,
    postedDate: "3 days ago",
  },

  // Cleaning Services Jobs
  {
    id: "16",
    title: "Weekly Office Cleaning",
    category: "Cleaning Services",
    description: "Regular weekly cleaning service for 5000 sqft office space in Bangalore",
    budget: 8000,
    duration: "long-term",
    experienceLevel: "entry",
    employer: "Corporate Solutions India",
    applications: 3,
    postedDate: "5 days ago",
  },
  {
    id: "17",
    title: "Deep Home Cleaning",
    category: "Cleaning Services",
    description: "One-time deep cleaning service for 3 BHK apartment with professional equipment",
    budget: 5000,
    duration: "short-term",
    experienceLevel: "entry",
    employer: "House Owners",
    applications: 4,
    postedDate: "1 day ago",
  },
  {
    id: "18",
    title: "Commercial Carpet Cleaning",
    category: "Cleaning Services",
    description: "Professional carpet cleaning and upholstery maintenance for corporate spaces",
    budget: 12000,
    duration: "short-term",
    experienceLevel: "intermediate",
    employer: "Facility Management",
    applications: 2,
    postedDate: "3 days ago",
  },

  // Carpentry & Furniture Jobs
  {
    id: "19",
    title: "Custom Furniture Design",
    category: "Carpentry & Furniture",
    description: "Design and create custom wooden furniture for home office with modern aesthetics",
    budget: 30000,
    duration: "medium-term",
    experienceLevel: "expert",
    employer: "Interior Design Studio",
    applications: 6,
    postedDate: "2 days ago",
  },
  {
    id: "20",
    title: "Interior Carpentry Work",
    category: "Carpentry & Furniture",
    description: "Carpentry work for villa interior including wardrobes, kitchen, and shelving systems",
    budget: 100000,
    duration: "long-term",
    experienceLevel: "expert",
    employer: "Luxury Homes",
    applications: 5,
    postedDate: "3 days ago",
  },
  {
    id: "21",
    title: "Furniture Assembly & Installation",
    category: "Carpentry & Furniture",
    description: "Assemble and install ready-made furniture and fixtures for office building",
    budget: 18000,
    duration: "short-term",
    experienceLevel: "intermediate",
    employer: "Furniture Retailers",
    applications: 3,
    postedDate: "1 day ago",
  },

  // Online Tutoring Jobs
  {
    id: "22",
    title: "Mathematics IIT Coaching",
    category: "Online Tutoring",
    description: "IIT-JEE mathematics coach for 2 students. Online coaching sessions required.",
    budget: 20000,
    duration: "long-term",
    experienceLevel: "expert",
    employer: "Ravi Mathew Coaching",
    applications: 8,
    postedDate: "3 days ago",
  },
  {
    id: "23",
    title: "IELTS Preparation Tutor",
    category: "Online Tutoring",
    description: "IELTS preparation coach needed for 3 students. Target band 7+. Online classes.",
    budget: 15000,
    duration: "long-term",
    experienceLevel: "expert",
    employer: "English Academy",
    applications: 5,
    postedDate: "1 day ago",
  },
  {
    id: "24",
    title: "Programming Basics Tutor",
    category: "Online Tutoring",
    description: "Teach Python and JavaScript basics to college students online. Flexible hours.",
    budget: 10000,
    duration: "long-term",
    experienceLevel: "intermediate",
    employer: "Tech Learning Hub",
    applications: 7,
    postedDate: "2 days ago",
  },
]

export function JobBrowser() {
  const [filters, setFilters] = useState({
    category: "",
    budgetMin: 0,
    budgetMax: 500000,
    duration: "",
    experienceLevel: "",
    searchQuery: "",
  })

  const filteredJobs = useMemo(() => {
    return sampleJobs.filter((job) => {
      if (filters.category && job.category !== filters.category) return false
      if (job.budget < filters.budgetMin || job.budget > filters.budgetMax) return false
      if (filters.duration && job.duration !== filters.duration) return false
      if (filters.experienceLevel && job.experienceLevel !== filters.experienceLevel) return false
      if (
        filters.searchQuery &&
        !job.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !job.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false
      }
      return true
    })
  }, [filters])

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Jobs</h1>
          <p className="text-muted-foreground">Find your next opportunity from {sampleJobs.length} available jobs</p>
        </div>

        <AISmartFilter onApplyFilters={setFilters} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <JobFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredJobs.length === 0 ? (
                <Card>
                  <CardContent className="p-12">
                    <p className="text-center text-muted-foreground">
                      No jobs match your filters. Try adjusting your search.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-4">Showing {filteredJobs.length} jobs</p>
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
