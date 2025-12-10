"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import ProfileCard from "@/components/profile-card"
import ProfileStats from "@/components/profile-stats"
import UserAchievements from "@/components/user-achievements"
import UserPreferences from "@/components/user-preferences"

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState<"profile" | "settings" | "achievements">("profile")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Мой профиль</h1>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-border">
              {(["profile", "achievements", "settings"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-semibold transition-colors ${
                    activeTab === tab ? "text-blue-500 border-b-2 border-blue-500" : "text-muted"
                  }`}
                >
                  {tab === "profile" ? "Профиль" : tab === "achievements" ? "Достижения" : "Настройки"}
                </button>
              ))}
            </div>

            {/* Content */}
            {activeTab === "profile" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ProfileCard />
                <ProfileStats />
              </div>
            )}

            {activeTab === "achievements" && <UserAchievements />}

            {activeTab === "settings" && <UserPreferences />}
          </div>
        </main>
      </div>
    </div>
  )
}
