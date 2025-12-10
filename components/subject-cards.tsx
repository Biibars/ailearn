"use client"

import { BookOpen, CheckCircle2 } from "lucide-react"

const subjects = [
  {
    id: 1,
    name: "Высшая Математика",
    professor: "Проф. Иванов И.И.",
    progress: 65,
    tasksCompleted: 8,
    tasksTotal: 12,
    color: "from-blue-500 to-blue-600",
    nextDeadline: "25 дек",
  },
  {
    id: 2,
    name: "Программирование",
    professor: "Проф. Петров П.П.",
    progress: 82,
    tasksCompleted: 10,
    tasksTotal: 12,
    color: "from-purple-500 to-purple-600",
    nextDeadline: "20 дек",
  },
  {
    id: 3,
    name: "Физика",
    professor: "Проф. Сидоров С.С.",
    progress: 45,
    tasksCompleted: 5,
    tasksTotal: 11,
    color: "from-orange-500 to-orange-600",
    nextDeadline: "30 дек",
  },
  {
    id: 4,
    name: "История",
    professor: "Проф. Александрова А.А.",
    progress: 71,
    tasksCompleted: 10,
    tasksTotal: 14,
    color: "from-green-500 to-green-600",
    nextDeadline: "28 дек",
  },
]

export default function SubjectCards() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Мои предметы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${subject.color} rounded-lg flex items-center justify-center`}
              >
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-xs font-semibold px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                {subject.nextDeadline}
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">{subject.name}</h3>
            <p className="text-sm text-muted mb-4">{subject.professor}</p>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted">Прогресс</span>
                <span className="text-sm font-bold text-foreground">{subject.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 size={16} />
              <span>
                {subject.tasksCompleted} / {subject.tasksTotal} заданий
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
