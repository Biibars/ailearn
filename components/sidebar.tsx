"use client"

import Link from "next/link"
import { BookOpen, BarChart3, Calendar, Users, User, Settings, Menu, X } from "lucide-react"

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

const navItems = [
  {
    name: "Главная",
    href: "/",
    icon: BookOpen,
  },
  {
    name: "Материалы",
    href: "/materials",
    icon: BookOpen,
  },
  {
    name: "Тесты",
    href: "/tests",
    icon: BarChart3,
  },
  {
    name: "Прогресс",
    href: "/progress",
    icon: Calendar,
  },
  {
    name: "Группы",
    href: "/groups",
    icon: Users,
  },
  {
    name: "Профиль",
    href: "/profile",
    icon: User,
  },
  {
    name: "Настройки",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <>
      <button onClick={onToggle} className="fixed top-4 left-4 z-50 lg:hidden p-2 hover:bg-muted rounded-lg">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static w-64 h-screen bg-card border-r border-border flex flex-col transition-all duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold text-foreground">StudyMate KG</h1>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground hover:text-foreground"
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted font-semibold">Версия</p>
            <p className="text-sm font-bold text-foreground">1.0.0 Beta</p>
          </div>
        </div>
      </aside>
    </>
  )
}
