"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import MaterialGenerator from "@/components/material-generator"
import MaterialsList from "@/components/materials-list"

export default function MaterialsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState<"library" | "generator">("library")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Учебные материалы</h1>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-border">
              <button
                onClick={() => setActiveTab("library")}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === "library" ? "text-blue-500 border-b-2 border-blue-500" : "text-muted"
                }`}
              >
                Моя библиотека
              </button>
              <button
                onClick={() => setActiveTab("generator")}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === "generator" ? "text-blue-500 border-b-2 border-blue-500" : "text-muted"
                }`}
              >
                AI Генератор
              </button>
            </div>

            {/* Content */}
            {activeTab === "library" ? <MaterialsList /> : <MaterialGenerator />}
          </div>
        </main>
      </div>
    </div>
  )
}
