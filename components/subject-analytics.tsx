"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function SubjectAnalytics() {
  const subjectStats = [
    { subject: "Математика", completed: 32, total: 50, tests: 8 },
    { subject: "Программирование", completed: 45, total: 54, tests: 12 },
    { subject: "Физика", completed: 28, total: 62, tests: 6 },
    { subject: "История", completed: 42, total: 59, tests: 10 },
  ]

  const chartData = subjectStats.map((stat) => ({
    name: stat.subject.split(" ")[0],
    completed: stat.completed,
    total: stat.total,
  }))

  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Выполнение задач</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }} />
            <Bar dataKey="completed" fill="#3b82f6" name="Выполнено" />
            <Bar dataKey="total" fill="#e5e7eb" name="Всего" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Subject List */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Статус по предметам</h3>
        <div className="space-y-3">
          {subjectStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground">{stat.subject}</p>
                <p className="text-xs text-muted">
                  {stat.completed}/{stat.total} заданий • {stat.tests} тестов
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-blue-500">{Math.round((stat.completed / stat.total) * 100)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
