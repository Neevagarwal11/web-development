import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}
