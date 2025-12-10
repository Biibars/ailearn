"use client"

import { TrendingUp, Calendar, Award } from "lucide-react"

export default function ProgressOverview() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground mb-6">Статистика</h2>

      {/* Overall Progress */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Общий прогресс</h3>
          <TrendingUp size={20} className="text-green-500" />
        </div>
        <div className="text-3xl font-bold text-foreground mb-2">66%</div>
        <p className="text-sm text-muted">На этой неделе +5%</p>
      </div>

      {/* Study Hours */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Часов учебы</h3>
          <Calendar size={20} className="text-blue-500" />
        </div>
        <div className="text-3xl font-bold text-foreground mb-2">24.5</div>
        <p className="text-sm text-muted">На этой неделе</p>
      </div>

      {/* Achievements */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Достижения</h3>
          <Award size={20} className="text-yellow-500" />
        </div>
        <div className="text-3xl font-bold text-foreground mb-2">12</div>
        <p className="text-sm text-muted">Разблокировано</p>
      </div>
    </div>
  )
}
