export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || ""

    // Simulate AI thinking delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    let response = ""

    // Pattern matching for common queries
    if (lastMessage.includes("find") && lastMessage.includes("job")) {
      response =
        "To find jobs, click on 'Browse Jobs' in the navigation menu. You can filter by category, location, and budget. I recommend setting up your profile first so employers can find you too!"
    } else if (lastMessage.includes("profile")) {
      response =
        "Your profile is your digital resume! Go to Dashboard > Profile Settings to add your skills, bio, hourly rate, and portfolio. A complete profile gets 3x more views from employers."
    } else if (lastMessage.includes("apply") || lastMessage.includes("proposal")) {
      response =
        "When applying for jobs, write a personalized proposal highlighting relevant experience. Mention specific skills from the job description and explain how you can add value. Keep it under 300 words and include your availability."
    } else if (lastMessage.includes("payment") || lastMessage.includes("money")) {
      response =
        "Payments are processed securely through the platform. Set your hourly rate or project budget in your profile. Once work is completed and approved, funds are released within 5-7 business days."
    } else if (lastMessage.includes("skill") || lastMessage.includes("learn")) {
      response =
        "Focus on in-demand skills like React, Python, UI/UX Design, or Digital Marketing. Check the Profile Analyzer in your dashboard for personalized skill recommendations based on your current expertise!"
    } else if (lastMessage.includes("help") || lastMessage.includes("how")) {
      response =
        "I'm here to help! I can assist with finding jobs, creating your profile, writing proposals, understanding payments, or general career advice. What specific topic would you like to know more about?"
    } else {
      response =
        "That's a great question! As your AI assistant, I'm here to help you navigate the platform. You can ask me about finding jobs, optimizing your profile, writing proposals, or anything else related to freelancing. What would you like to know?"
    }

    return Response.json({
      message: response,
      role: "assistant",
      content: response,
    })
  } catch (error) {
    console.error("[v0] AI chat error:", error)
    return Response.json({ error: "Failed to process chat" }, { status: 500 })
  }
}
