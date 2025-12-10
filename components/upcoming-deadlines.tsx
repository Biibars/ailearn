"use client"

import { Calendar, Clock } from "lucide-react"

const deadlines = [
  {
    id: 1,
    title: "Курсовая работа - Математика",
    subject: "Высшая Математика",
    dueDate: "20 декабря",
    daysLeft: 6,
    priority: "high",
  },
  {
    id: 2,
    title: "Проект - Веб-приложение",
    subject: "Программирование",
    dueDate: "22 декабря",
    daysLeft: 8,
    priority: "high",
  },
  {
    id: 3,
    title: "Реферат - История",
    subject: "История",
    dueDate: "28 декабря",
    daysLeft: 14,
    priority: "medium",
  },
  {
    id: 4,
    title: "Тест - Физика",
    subject: "Физика",
    dueDate: "30 декабря",
    daysLeft: 16,
    priority: "low",
  },
]

export default function UpcomingDeadlines() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Предстоящие дедлайны</h2>

      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <div
              className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${
                deadline.priority === "high"
                  ? "bg-red-500"
                  : deadline.priority === "medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
              }`}
            ></div>

            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{deadline.title}</h3>
              <p className="text-sm text-muted">{deadline.subject}</p>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Calendar size={14} />
                  <span>{deadline.dueDate}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
                  <Clock size={14} />
                  <span>{deadline.daysLeft} дней</span>
                </div>
              </div>
            </div>

            <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors">
              Подготовиться
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
