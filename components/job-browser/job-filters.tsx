"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { INDIA_CATEGORIES } from "@/lib/india-data"

const durations = [
  { value: "short-term", label: "Short-term" },
  { value: "medium-term", label: "Medium-term" },
  { value: "long-term", label: "Long-term" },
]

const experienceLevels = [
  { value: "entry", label: "Entry-level" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
]

interface JobFiltersProps {
  filters: {
    category: string
    budgetMin: number
    budgetMax: number
    duration: string
    experienceLevel: string
    searchQuery: string
  }
  setFilters: (filters: any) => void
}

export function JobFilters({ filters, setFilters }: JobFiltersProps) {
  return (
    <div className="space-y-4 sticky top-24">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            type="text"
            placeholder="Search jobs..."
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </CardContent>
      </Card>

      {/* Category */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={filters.category === ""}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">All Categories</span>
          </label>
          {INDIA_CATEGORIES.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.name}
                checked={filters.category === cat.name}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">{cat.name}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Budget */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Budget (₹)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-2">
              Min: ₹{filters.budgetMin.toLocaleString("en-IN")}
            </label>
            <input
              type="range"
              min="0"
              max="500000"
              step="1000"
              value={filters.budgetMin}
              onChange={(e) => setFilters({ ...filters, budgetMin: Number.parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-2">
              Max: ₹{filters.budgetMax.toLocaleString("en-IN")}
            </label>
            <input
              type="range"
              min="0"
              max="500000"
              step="1000"
              value={filters.budgetMax}
              onChange={(e) => setFilters({ ...filters, budgetMax: Number.parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="duration"
              value=""
              checked={filters.duration === ""}
              onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">All Durations</span>
          </label>
          {durations.map((dur) => (
            <label key={dur.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="duration"
                value={dur.value}
                checked={filters.duration === dur.value}
                onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">{dur.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Experience Level */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Experience Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="experienceLevel"
              value=""
              checked={filters.experienceLevel === ""}
              onChange={(e) => setFilters({ ...filters, experienceLevel: e.target.value })}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">All Levels</span>
          </label>
          {experienceLevels.map((level) => (
            <label key={level.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="experienceLevel"
                value={level.value}
                checked={filters.experienceLevel === level.value}
                onChange={(e) => setFilters({ ...filters, experienceLevel: e.target.value })}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">{level.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
