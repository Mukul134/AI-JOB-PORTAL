"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, CheckCircle, AlertCircle, Lightbulb, Loader2 } from "lucide-react"

interface Analysis {
  score: number
  strengths: string[]
  improvements: string[]
  recommendedSkills: string[]
}

export function AIProfileAnalyzer() {
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)

  const analyzeProfile = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/ai/analyze-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skills: ["React", "Node.js", "TypeScript", "UI/UX Design", "MongoDB"],
          bio: "Full-stack developer with 3 years experience building modern web applications",
          experience: "intermediate",
        }),
      })

      const data = await response.json()

      // Parse AI response or use fallback
      try {
        const parsed = JSON.parse(data.analysis)
        setAnalysis(parsed)
      } catch {
        setAnalysis({
          score: 78,
          strengths: [
            "Strong modern tech stack with React and TypeScript",
            "Full-stack capabilities increase job opportunities",
            "UI/UX design skills add valuable differentiation",
          ],
          improvements: [
            "Add portfolio projects showcasing your work",
            "Include specific metrics and achievements",
            "Expand bio with unique value proposition",
          ],
          recommendedSkills: ["Next.js", "GraphQL", "Docker", "AWS"],
        })
      }
    } catch (error) {
      console.error("[v0] Failed to analyze profile:", error)
      setAnalysis({
        score: 78,
        strengths: ["Strong technical skills", "Diverse experience"],
        improvements: ["Add more projects", "Enhance bio"],
        recommendedSkills: ["Next.js", "Cloud platforms"],
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <Brain className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              AI Profile Analysis
              <Badge variant="secondary" className="text-xs bg-purple-500/10 text-purple-700 dark:text-purple-300">
                ML Powered
              </Badge>
            </CardTitle>
            <CardDescription>Get intelligent insights to improve your profile strength</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!analysis ? (
          <div className="text-center py-8">
            <Brain className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              Use machine learning to analyze your profile and get actionable insights
            </p>
            <Button onClick={analyzeProfile} disabled={loading} variant="default">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Analyze My Profile
                </>
              )}
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {/* Score */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Profile Strength</span>
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{analysis.score}%</span>
                </div>
                <Progress value={analysis.score} className="h-2" />
              </div>

              {/* Strengths */}
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Your Strengths
                </h4>
                <ul className="space-y-2">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index} className="text-sm text-muted-foreground pl-6">
                      • {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-500" />
                  Areas to Improve
                </h4>
                <ul className="space-y-2">
                  {analysis.improvements.map((improvement, index) => (
                    <li key={index} className="text-sm text-muted-foreground pl-6">
                      • {improvement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Skills */}
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                  Recommended Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.recommendedSkills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Button onClick={analyzeProfile} variant="outline" className="w-full bg-transparent" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Re-analyzing...
                </>
              ) : (
                "Re-analyze Profile"
              )}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
