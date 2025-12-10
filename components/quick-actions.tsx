"use client"

import { Wand2, FileText, BookMarked, BarChart3 } from "lucide-react"

const actions = [
  {
    icon: Wand2,
    label: "Генерировать конспект",
    description: "AI создаст конспект по вашей теме",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookMarked,
    label: "Создать тест",
    description: "Сгенерировать тестовые вопросы",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FileText,
    label: "Анализ документов",
    description: "Загрузить и разобраться",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: BarChart3,
    label: "План подготовки",
    description: "Автоматический учебный план",
    color: "from-green-500 to-green-600",
  },
]

export default function QuickActions() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-foreground mb-4">Быстрые действия</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="group bg-card border border-border rounded-lg p-4 hover:border-blue-500 transition-all hover:shadow-lg text-left"
          >
            <div
              className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <action.icon className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-foreground text-sm">{action.label}</h3>
            <p className="text-xs text-muted mt-1">{action.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
