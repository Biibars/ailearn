"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import ScheduleCalendar from "@/components/schedule-calendar"
import StudyPlan from "@/components/study-plan"
import WeeklyOverview from "@/components/weekly-overview"

export default function SchedulePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Расписание и планирование</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <div className="lg:col-span-2">
                <ScheduleCalendar />
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <WeeklyOverview />
              </div>
            </div>

            {/* Study Plan */}
            <div className="mt-8">
              <StudyPlan />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
