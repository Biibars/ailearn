"use client"

import { Clock, BookOpen, AlertCircle } from "lucide-react"

export default function WeeklyOverview() {
  return (
    <div className="space-y-4">
      {/* Week Stats */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">На эту неделю</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock size={16} />
              Часов учебы
            </div>
            <span className="font-bold text-foreground">18.5 ч</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted">
              <BookOpen size={16} />
              Предметов
            </div>
            <span className="font-bold text-foreground">4</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted">
              <AlertCircle size={16} />
              Дедлайнов
            </div>
            <span className="font-bold text-warning">2</span>
          </div>
        </div>
      </div>

      {/* Add Event Button */}
      <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
        Добавить событие
      </button>

      {/* Study Hours Distribution */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Распределение учебы</h3>
        <div className="space-y-3">
          {[
            { subject: "Математика", hours: 5, color: "from-blue-500 to-blue-600" },
            { subject: "Программирование", hours: 7, color: "from-purple-500 to-purple-600" },
            { subject: "Физика", hours: 4, color: "from-orange-500 to-orange-600" },
            { subject: "История", hours: 2.5, color: "from-green-500 to-green-600" },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-foreground">{item.subject}</span>
                <span className="text-xs font-bold text-muted">{item.hours}ч</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 bg-gradient-to-r ${item.color} rounded-full`}
                  style={{ width: `${(item.hours / 7) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
