"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import ProgressCharts from "@/components/progress-charts"
import SubjectAnalytics from "@/components/subject-analytics"
import WeakTopics from "@/components/weak-topics"
import ProgressTrends from "@/components/progress-trends"

export default function ProgressPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [timeRange, setTimeRange] = useState<"week" | "month" | "semester">("week")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Анализ прогресса</h1>
              <div className="flex gap-2">
                {(["week", "month", "semester"] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                      timeRange === range ? "bg-blue-500 text-white" : "bg-muted text-foreground hover:bg-border"
                    }`}
                  >
                    {range === "week" ? "Неделя" : range === "month" ? "Месяц" : "Семестр"}
                  </button>
                ))}
              </div>
            </div>

            {/* Overall Stats */}
            <ProgressCharts timeRange={timeRange} />

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2">
                <ProgressTrends timeRange={timeRange} />
              </div>
              <div className="space-y-6">
                <SubjectAnalytics />
              </div>
            </div>

            {/* Weak Topics */}
            <div className="mt-8">
              <WeakTopics />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
