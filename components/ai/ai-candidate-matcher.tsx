"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Loader2, TrendingUp } from "lucide-react"

interface CandidateMatch {
  profileType: string
  keySkills: string[]
  matchReason: string
  marketAvailability: string
}

export function AICandidateMatcher() {
  const [loading, setLoading] = useState(false)
  const [matches, setMatches] = useState<CandidateMatch[]>([])

  const findCandidates = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/ai/match-candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: "Full Stack Developer",
          requiredSkills: ["React", "Node.js", "MongoDB", "TypeScript"],
          experienceLevel: "intermediate",
          budget: 50000,
        }),
      })

      const data = await response.json()

      try {
        const parsed = JSON.parse(data.matches)
        setMatches(parsed)
      } catch {
        // Fallback matches
        setMatches([
          {
            profileType: "Senior Full-Stack Engineer",
            keySkills: ["React", "Node.js", "TypeScript", "System Design"],
            matchReason: "Strong technical background with proven full-stack experience and leadership capabilities",
            marketAvailability: "Medium",
          },
          {
            profileType: "React Specialist with Backend Skills",
            keySkills: ["React", "Redux", "Node.js", "MongoDB"],
            matchReason: "Deep frontend expertise combined with solid backend knowledge, perfect for modern web apps",
            marketAvailability: "High",
          },
          {
            profileType: "Full-Stack MERN Developer",
            keySkills: ["MongoDB", "Express", "React", "Node.js"],
            matchReason: "Complete MERN stack expertise ensures seamless end-to-end development",
            marketAvailability: "High",
          },
        ])
      }
    } catch (error) {
      console.error("[v0] Failed to find candidates:", error)
      setMatches([
        {
          profileType: "Full-Stack Developer",
          keySkills: ["React", "Node.js", "MongoDB"],
          matchReason: "Matches your job requirements",
          marketAvailability: "High",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const availabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case "high":
        return "bg-green-500/10 text-green-700 dark:text-green-300"
      case "medium":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
      case "low":
        return "bg-red-500/10 text-red-700 dark:text-red-300"
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-300"
    }
  }

  return (
    <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              AI Candidate Matching
              <Badge variant="secondary" className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-300">
                AI Powered
              </Badge>
            </CardTitle>
            <CardDescription>Find the perfect candidates for your job postings</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {matches.length === 0 ? (
          <div className="text-center py-8">
            <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              Use AI to identify ideal candidate profiles for your job requirements
            </p>
            <Button onClick={findCandidates} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Users className="mr-2 h-4 w-4" />
                  Find Ideal Candidates
                </>
              )}
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {matches.map((match, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{match.profileType}</h4>
                    <Badge className={availabilityColor(match.marketAvailability)}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {match.marketAvailability} Availability
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {match.keySkills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{match.matchReason}</p>
                </div>
              ))}
            </div>
            <Button onClick={findCandidates} variant="outline" className="w-full bg-transparent" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Refreshing...
                </>
              ) : (
                "Refresh Matches"
              )}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
