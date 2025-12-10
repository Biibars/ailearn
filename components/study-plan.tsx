"use client"

import { Plus, CheckCircle2, Circle } from "lucide-react"

const studyPlan = [
  {
    id: 1,
    subject: "Высшая Математика",
    tasks: [
      { id: 1, title: "Прочитать главу 5 (Дифференциальные уравнения)", completed: true, daysLeft: 0 },
      { id: 2, title: "Решить примеры 5.1-5.5", completed: true, daysLeft: 0 },
      { id: 3, title: "Подготовить курсовую работу", completed: false, daysLeft: 6 },
      { id: 4, title: "Пройти контрольный тест", completed: false, daysLeft: 8 },
    ],
  },
  {
    id: 2,
    subject: "Программирование",
    tasks: [
      { id: 1, title: "Завершить проект Web-приложения", completed: false, daysLeft: 8 },
      { id: 2, title: "Изучить React Hooks", completed: true, daysLeft: 0 },
      { id: 3, title: "Напротестировать компоненты", completed: false, daysLeft: 7 },
    ],
  },
  {
    id: 3,
    subject: "Физика",
    tasks: [
      { id: 1, title: "Решить задачи по электричеству", completed: false, daysLeft: 12 },
      { id: 2, title: "Подготовить доклад", completed: false, daysLeft: 16 },
    ],
  },
]

export default function StudyPlan() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Учебный план</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm">
          <Plus size={18} />
          Добавить задачу
        </button>
      </div>

      <div className="space-y-6">
        {studyPlan.map((plan) => (
          <div key={plan.id} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-bold text-foreground mb-4">{plan.subject}</h3>

            <div className="space-y-3">
              {plan.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-border transition-colors"
                >
                  <button className="mt-0.5 flex-shrink-0">
                    {task.completed ? (
                      <CheckCircle2 size={20} className="text-green-500" />
                    ) : (
                      <Circle size={20} className="text-muted" />
                    )}
                  </button>

                  <div className="flex-1">
                    <h4 className={`font-semibold ${task.completed ? "text-muted line-through" : "text-foreground"}`}>
                      {task.title}
                    </h4>
                  </div>

                  {!task.completed && (
                    <span className="text-xs font-semibold px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full flex-shrink-0">
                      {task.daysLeft} дней
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
