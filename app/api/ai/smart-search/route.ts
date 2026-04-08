import { INDIA_CATEGORIES } from "@/lib/india-data"

export async function POST(req: Request) {
  try {
    const { query } = await req.json()
    const lowerQuery = query.toLowerCase()

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // AI-powered query interpretation
    const categoryMatches: string[] = []
    const skillMatches: string[] = []
    let experienceLevel = "all"
    let budgetRange = { min: 500, max: 5000 }

    // Intelligent category matching
    INDIA_CATEGORIES.forEach((cat) => {
      if (
        lowerQuery.includes(cat.name.toLowerCase()) ||
        lowerQuery.includes(cat.icon) ||
        cat.name.toLowerCase().includes(lowerQuery.split(" ")[0])
      ) {
        categoryMatches.push(cat.name)
      }
    })

    // Skill extraction
    const commonSkills = [
      "react",
      "javascript",
      "python",
      "design",
      "writing",
      "marketing",
      "node.js",
      "typescript",
      "figma",
      "photoshop",
    ]
    commonSkills.forEach((skill) => {
      if (lowerQuery.includes(skill)) {
        skillMatches.push(skill.charAt(0).toUpperCase() + skill.slice(1))
      }
    })

    // Experience level detection
    if (lowerQuery.includes("senior") || lowerQuery.includes("expert") || lowerQuery.includes("experienced")) {
      experienceLevel = "senior"
      budgetRange = { min: 2000, max: 10000 }
    } else if (lowerQuery.includes("junior") || lowerQuery.includes("beginner") || lowerQuery.includes("entry")) {
      experienceLevel = "entry"
      budgetRange = { min: 500, max: 2000 }
    } else if (lowerQuery.includes("mid") || lowerQuery.includes("intermediate")) {
      experienceLevel = "intermediate"
      budgetRange = { min: 1000, max: 5000 }
    }

    // Budget detection
    if (lowerQuery.includes("cheap") || lowerQuery.includes("budget") || lowerQuery.includes("affordable")) {
      budgetRange = { min: 500, max: 2000 }
    } else if (lowerQuery.includes("premium") || lowerQuery.includes("high quality") || lowerQuery.includes("expert")) {
      budgetRange = { min: 3000, max: 15000 }
    }

    const suggestions = {
      categories: categoryMatches.length > 0 ? categoryMatches : ["Web Development", "Design & Creative"],
      skills: skillMatches.length > 0 ? skillMatches : ["JavaScript", "React", "Design"],
      experienceLevel,
      budgetRange,
    }

    return Response.json({ suggestions })
  } catch (error) {
    console.error("[v0] AI smart search error:", error)
    return Response.json({ error: "Failed to process search" }, { status: 500 })
  }
}
