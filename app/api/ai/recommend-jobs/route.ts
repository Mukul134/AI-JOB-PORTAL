export async function POST(req: Request) {
  try {
    const { skills, experience, preferences } = await req.json()

    console.log("[v0] AI recommendation request - Skills:", skills, "Experience:", experience, "Preferences:", preferences)

    if (!skills || skills.length === 0) {
      console.warn("[v0] No skills provided for recommendation")
      return Response.json({ error: "Please provide at least one skill" }, { status: 400 })
    }

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Demo job database
    const jobDatabase = [
      {
        id: "job-1",
        title: "Python Developer Intern",
        company: "TechNova",
        skills: ["Python", "Django", "FastAPI", "SQL", "Git"],
        experience: "Entry-level",
      },
      {
        id: "job-2",
        title: "Frontend Developer",
        company: "CodeCraft",
        skills: ["React", "JavaScript", "TypeScript", "CSS", "HTML", "Tailwind"],
        experience: "Mid-level",
      },
      {
        id: "job-3",
        title: "AI/ML Engineer",
        company: "VisionAI",
        skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Deep Learning", "Data Science"],
        experience: "Senior",
      },
      {
        id: "job-4",
        title: "Plumber Technician",
        company: "UrbanFix",
        skills: ["Plumbing", "Pipe Installation", "Maintenance", "Safety Protocols", "Problem Solving"],
        experience: "Intermediate",
      },
      {
        id: "job-5",
        title: "Full Stack Developer",
        company: "WebSolutions Inc.",
        skills: ["React", "Node.js", "MongoDB", "JavaScript", "REST API"],
        experience: "Mid-level",
      },
      {
        id: "job-6",
        title: "Software Developer",
        company: "InnovateTech",
        skills: ["Java", "C++", "Software Design", "Testing", "Debugging"],
        experience: "Mid-level",
      },
      {
        id: "job-7",
        title: "Data Analyst",
        company: "DataInsights",
        skills: ["Python", "SQL", "Tableau", "Data Analysis", "Excel"],
        experience: "Entry-level",
      },
      {
        id: "job-8",
        title: "UX/UI Designer",
        company: "DesignHub",
        skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
        experience: "Mid-level",
      },
    ]

    // Calculate match scores based on skill overlap with keyword matching
    const recommendations = jobDatabase
      .map((job) => {
        // Count matching skills (case-insensitive)
        let matchingSkills = 0
        const matchedSkillsList: string[] = []

        skills.forEach((userSkill: string) => {
          const userSkillLower = userSkill.toLowerCase().trim()
          job.skills.forEach((jobSkill) => {
            if (
              jobSkill.toLowerCase().includes(userSkillLower) ||
              userSkillLower.includes(jobSkill.toLowerCase())
            ) {
              matchingSkills++
              if (!matchedSkillsList.includes(jobSkill)) {
                matchedSkillsList.push(jobSkill)
              }
            }
          })
        })

        // Calculate match percentage
        const skillMatchPercentage = Math.min(100, (matchingSkills / skills.length) * 100)
        const baseScore = skillMatchPercentage * 0.7 + Math.random() * 20

        return {
          title: job.title,
          company: job.company,
          reason: `${matchedSkillsList.length > 0 ? `Your ${matchedSkillsList.slice(0, 3).join(", ")} skills match this role.` : "Good fit based on your background."} ${job.experience} level position at ${job.company}.`,
          matchScore: Math.round(Math.min(99, baseScore)),
          skills: matchedSkillsList,
        }
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5)

    console.log("[v0] Recommendations generated:", recommendations.length, "top matches")

    return Response.json({ recommendations })
  } catch (error) {
    console.error("[v0] AI recommendation error:", error)
    return Response.json({ error: "Failed to generate recommendations", details: String(error) }, { status: 500 })
  }
}
