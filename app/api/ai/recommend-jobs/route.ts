export async function POST(req: Request) {
  try {
    const { skills, experience, preferences } = await req.json()

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock AI-generated recommendations based on skills
    const jobDatabase = [
      { title: "Full Stack Developer", skills: ["React", "Node.js", "JavaScript", "TypeScript"], matchScore: 95 },
      { title: "Frontend Developer", skills: ["React", "JavaScript", "CSS", "HTML"], matchScore: 90 },
      { title: "Backend Developer", skills: ["Node.js", "Python", "Java", "MongoDB"], matchScore: 88 },
      { title: "UI/UX Designer", skills: ["Figma", "Adobe XD", "Design", "Prototyping"], matchScore: 85 },
      { title: "Data Scientist", skills: ["Python", "Machine Learning", "TensorFlow", "Pandas"], matchScore: 92 },
      { title: "DevOps Engineer", skills: ["Docker", "Kubernetes", "AWS", "CI/CD"], matchScore: 87 },
      { title: "Mobile Developer", skills: ["React Native", "Flutter", "iOS", "Android"], matchScore: 89 },
      { title: "AI/ML Engineer", skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"], matchScore: 94 },
    ]

    // Calculate match scores based on skill overlap
    const recommendations = jobDatabase
      .map((job) => {
        const matchingSkills = skills.filter((skill: string) =>
          job.skills.some((jobSkill) => jobSkill.toLowerCase().includes(skill.toLowerCase())),
        )
        const matchScore = Math.min(95, (matchingSkills.length / skills.length) * 100 + Math.random() * 10)

        return {
          title: job.title,
          reason: `Based on your ${matchingSkills.slice(0, 3).join(", ")} skills and ${experience} experience level, this role is an excellent match. ${preferences ? `Aligns with your preference for ${preferences}.` : ""}`,
          matchScore: Math.round(matchScore),
        }
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3)

    return Response.json({ recommendations })
  } catch (error) {
    console.error("[v0] AI recommendation error:", error)
    return Response.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
