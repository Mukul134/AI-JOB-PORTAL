export async function POST(req: Request) {
  try {
    const { skills, bio, experience } = await req.json()

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Calculate profile score based on multiple factors
    const skillScore = Math.min(30, skills.length * 5)
    const bioScore = bio ? Math.min(25, bio.length / 10) : 0
    const expScore = experience === "senior" ? 25 : experience === "intermediate" ? 20 : 15
    const completionScore = 20
    const totalScore = Math.round(skillScore + bioScore + expScore + completionScore)

    // Generate contextual strengths and improvements
    const strengths = []
    const improvements = []

    if (skills.length >= 5) {
      strengths.push("Diverse skill set demonstrates versatility")
    } else {
      improvements.push("Add more skills to showcase your full capabilities")
    }

    if (bio && bio.length > 50) {
      strengths.push("Well-written bio effectively communicates your value")
    } else {
      improvements.push("Expand your bio to highlight your unique experience and achievements")
    }

    if (experience === "senior") {
      strengths.push("Extensive experience makes you highly competitive")
    } else if (experience === "entry") {
      improvements.push("Consider adding internships or personal projects to demonstrate experience")
    }

    // Recommend complementary skills
    const recommendedSkills = skills.includes("React")
      ? ["Next.js", "TypeScript", "Tailwind CSS"]
      : skills.includes("Python")
        ? ["Django", "FastAPI", "PostgreSQL"]
        : ["JavaScript", "Git", "REST APIs"]

    const analysis = {
      score: totalScore,
      strengths: strengths.slice(0, 3),
      improvements: improvements.slice(0, 3),
      recommendedSkills,
    }

    return Response.json({ analysis })
  } catch (error) {
    console.error("[v0] AI analysis error:", error)
    return Response.json({ error: "Failed to analyze profile" }, { status: 500 })
  }
}
