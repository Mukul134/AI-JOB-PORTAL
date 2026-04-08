"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Search, Loader2 } from "lucide-react"

interface SmartSuggestions {
  categories: string[]
  skills: string[]
  experienceLevel: string
  budgetRange: { min: number; max: number }
}

export function AISmartFilter({ onApplyFilters }: { onApplyFilters: (filters: any) => void }) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<SmartSuggestions | null>(null)

  const handleSmartSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai/smart-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()

      try {
        const parsed = JSON.parse(data.suggestions)
        setSuggestions(parsed)
      } catch {
        // Fallback suggestions
        setSuggestions({
          categories: ["Web Development", "Design & Creative"],
          skills: ["React", "UI/UX", "TypeScript"],
          experienceLevel: "intermediate",
          budgetRange: { min: 15000, max: 50000 },
        })
      }
    } catch (error) {
      console.error("[v0] Smart search failed:", error)
      setSuggestions({
        categories: ["Web Development"],
        skills: ["JavaScript", "React"],
        experienceLevel: "intermediate",
        budgetRange: { min: 10000, max: 50000 },
      })
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    if (suggestions) {
      onApplyFilters({
        category: suggestions.categories[0] || "",
        budgetMin: suggestions.budgetRange.min,
        budgetMax: suggestions.budgetRange.max,
        experienceLevel: suggestions.experienceLevel,
        searchQuery: query,
      })
    }
  }

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent mb-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-base">AI Smart Search</CardTitle>
            <CardDescription className="text-xs">Describe what you're looking for in natural language</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="e.g., 'React developer for e-commerce site'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSmartSearch()}
          />
          <Button onClick={handleSmartSearch} disabled={loading || !query.trim()}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          </Button>
        </div>

        {suggestions && (
          <div className="space-y-3 p-4 rounded-lg bg-muted/50">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">AI Suggestions:</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-muted-foreground">Categories: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {suggestions.categories.map((cat, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Skills: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {suggestions.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Experience: </span>
                  <Badge variant="default" className="text-xs">
                    {suggestions.experienceLevel}
                  </Badge>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Budget Range: </span>
                  <span className="text-xs font-medium">
                    ₹{suggestions.budgetRange.min.toLocaleString()} - ₹{suggestions.budgetRange.max.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <Button onClick={applyFilters} className="w-full" size="sm">
              Apply AI Filters
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
