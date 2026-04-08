export async function POST(req: Request) {
  try {
    const { jobTitle, requiredSkills, experienceLevel, budget } = await req.json()

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1800))

    // Mock candidate database with realistic profiles
    const candidateProfiles = [
      {
        profileType: "Senior Full-Stack Developer",
        keySkills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        matchScore: 95,
        availability: "High",
      },
      {
        profileType: "Frontend Specialist",
        keySkills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "UI/UX"],
        matchScore: 88,
        availability: "High",
      },
      {
        profileType: "Backend Developer",
        keySkills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Docker"],
        matchScore: 90,
        availability: "Medium",
      },
      {
        profileType: "UI/UX Designer",
        keySkills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
        matchScore: 85,
        availability: "Medium",
      },
      {
        profileType: "DevOps Engineer",
        keySkills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
        matchScore: 87,
        availability: "Low",
      },
      {
        profileType: "Data Scientist",
        keySkills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL"],
        matchScore: 92,
        availability: "Medium",
      },
    ]

    // Calculate match scores based on skill overlap and experience
    const matches = candidateProfiles
      .map((profile) => {
        const matchingSkills = requiredSkills.filter((skill: string) =>
          profile.keySkills.some((candidateSkill) => candidateSkill.toLowerCase().includes(skill.toLowerCase())),
        )

        const skillMatch = (matchingSkills.length / requiredSkills.length) * 60
        const expMatch = experienceLevel === "senior" ? 20 : experienceLevel === "intermediate" ? 15 : 10
        const budgetMatch = budget > 3000 ? 20 : 15
        const totalScore = Math.min(98, skillMatch + expMatch + budgetMatch + Math.random() * 5)

        return {
          profileType: profile.profileType,
          keySkills: profile.keySkills,
          matchReason: `Strong expertise in ${matchingSkills.slice(0, 3).join(", ")} makes this candidate ideal for ${jobTitle}. Their ${experienceLevel} level experience aligns perfectly with your requirements.`,
          marketAvailability: profile.availability,
          matchScore: Math.round(totalScore),
        }
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3)

    return Response.json({ matches: JSON.stringify(matches) })
  } catch (error) {
    console.error("[v0] AI candidate matching error:", error)
    return Response.json({ error: "Failed to match candidates" }, { status: 500 })
  }
}
