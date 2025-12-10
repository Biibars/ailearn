"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import SubjectCards from "@/components/subject-cards"
import UpcomingDeadlines from "@/components/upcoming-deadlines"
import ProgressOverview from "@/components/progress-overview"
import QuickActions from "@/components/quick-actions"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            {/* Greeting Section */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Привет, Барсбек!</h1>
              <p className="text-muted">Добро пожаловать в StudyMate KG AI</p>
            </div>

            {/* Profile Quick Info */}
            <div className="mb-8 p-4 bg-card border border-border rounded-lg">
              <h2 className="text-lg font-semibold text-foreground mb-4">Профиль</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted">Имя</p>
                  <p className="text-base font-medium text-foreground">Турганалиев Барсбек</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="text-base font-medium text-foreground">bars@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <SubjectCards />
              </div>
              <div>
                <ProgressOverview />
              </div>
            </div>

            {/* Deadlines */}
            <UpcomingDeadlines />
          </div>
        </main>
      </div>
    </div>
  )
}
