"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

interface ProgressChartsProps {
  timeRange: "week" | "month" | "semester"
}

export default function ProgressCharts({ timeRange }: ProgressChartsProps) {
  // Weekly data
  const weekData = [
    { name: "Пн", progress: 45 },
    { name: "Вт", progress: 52 },
    { name: "Ср", progress: 58 },
    { name: "Чт", progress: 65 },
    { name: "Пт", progress: 72 },
    { name: "Сб", progress: 78 },
    { name: "Вс", progress: 82 },
  ]

  // Monthly data
  const monthData = [
    { name: "Нед 1", progress: 35 },
    { name: "Нед 2", progress: 48 },
    { name: "Нед 3", progress: 62 },
    { name: "Нед 4", progress: 76 },
  ]

  // Subject distribution
  const subjectData = [
    { name: "Математика", value: 28 },
    { name: "Программирование", value: 32 },
    { name: "Физика", value: 20 },
    { name: "История", value: 20 },
  ]

  const colors = ["#3b82f6", "#a855f7", "#f97316", "#10b981"]

  const data = timeRange === "week" ? weekData : monthData
  const chartTitle = timeRange === "week" ? "Прогресс на этой неделе" : "Прогресс в этом месяце"

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Progress Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">{chartTitle}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }}
              labelStyle={{ color: "#f9fafb" }}
            />
            <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Subject Distribution */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Распределение по предметам</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={subjectData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} ${value}%`}
              outerRadius={100}
            >
              {subjectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Key Metrics */}
      <div className="bg-card border border-border rounded-lg p-6 lg:col-span-2">
        <h2 className="text-xl font-bold text-foreground mb-6">Ключевые метрики</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Общий прогресс", value: "82%", color: "from-blue-500" },
            { label: "Часов учебы", value: "24.5ч", color: "from-purple-500" },
            { label: "Завершено заданий", value: "38/52", color: "from-green-500" },
            { label: "Средний балл", value: "4.2/5", color: "from-orange-500" },
          ].map((metric, index) => (
            <div key={index} className="p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted mb-2">{metric.label}</p>
              <p
                className={`text-2xl font-bold bg-gradient-to-r ${metric.color} to-cyan-400 bg-clip-text text-transparent`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
