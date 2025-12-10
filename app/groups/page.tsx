"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import GroupsList from "@/components/groups-list"
import GroupChat from "@/components/group-chat"

export default function GroupsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto flex">
          {/* Groups List */}
          <div
            className={`w-full md:w-80 border-r border-border overflow-auto flex flex-col ${selectedGroup ? "hidden md:flex" : ""}`}
          >
            <div className="p-4 lg:p-6 border-b border-border">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Учебные группы</h1>
            </div>
            <GroupsList selectedId={selectedGroup} onSelect={setSelectedGroup} />
          </div>

          {/* Chat Area */}
          {selectedGroup ? (
            <div className="flex-1 flex flex-col overflow-hidden">
              <GroupChat groupId={selectedGroup} onBack={() => setSelectedGroup(null)} />
            </div>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">👥</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Выберите группу</h2>
                <p className="text-muted">Выберите группу из списка слева для начала общения</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
