"use client"

import { Bell, Search } from "lucide-react"

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-4 py-2 flex-1 max-w-md">
          <Search size={18} className="text-muted" />
          <input
            type="text"
            placeholder="Поиск..."
            className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full"></span>
        </button>

        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
          БТ
        </div>
      </div>
    </header>
  )
}
