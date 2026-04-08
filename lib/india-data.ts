// India-specific categories, cities, and utilities
export const INDIA_CATEGORIES = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Custom websites, web apps, and full-stack solutions",
    icon: "💻",
  },
  {
    id: "design",
    name: "Design & Creative",
    description: "Logo design, UI/UX, branding, and illustration",
    icon: "🎨",
  },
  {
    id: "electrician",
    name: "Electrical Services",
    description: "Professional electricians for repairs and installations",
    icon: "⚡",
  },
  {
    id: "plumbing",
    name: "Plumbing Services",
    description: "Professional plumbers for repairs and installations",
    icon: "🔧",
  },
  {
    id: "painting",
    name: "Painting & Renovation",
    description: "Home painting and renovation services",
    icon: "🎭",
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    description: "Home and office cleaning services",
    icon: "🧹",
  },
  {
    id: "carpentry",
    name: "Carpentry & Furniture",
    description: "Custom carpentry and furniture design",
    icon: "🔨",
  },
  {
    id: "tutoring",
    name: "Online Tutoring",
    description: "Academic and professional tutoring services",
    icon: "📚",
  },
]

export const INDIA_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]

export const INDIA_TOP_CITIES = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Aurangabad"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubballi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  Delhi: ["New Delhi", "Delhi"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "West Bengal": ["Kolkata", "Darjeeling", "Durgapur"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  Haryana: ["Gurgaon", "Faridabad", "Hisar", "Rohtak"],
}

export const formatINR = (amount: number) => {
  return `₹${amount.toLocaleString("en-IN")}`
}
