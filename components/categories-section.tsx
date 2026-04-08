"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { INDIA_CATEGORIES } from "@/lib/india-data"
import { ArrowRight } from "lucide-react"

export function CategoriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl text-foreground mb-4 text-balance">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find professionals across a wide range of services and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDIA_CATEGORIES.map((category, index) => (
            <Link
              key={category.id}
              href={`/browse?category=${category.id}`}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-card">
                <CardHeader className="space-y-4">
                  {/* Large emoji icon with hover effect */}
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                  {/* Arrow indicator */}
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
