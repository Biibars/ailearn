"use client"

import { Zap, Target, Users, Clock, TrendingUp, BookOpen } from "lucide-react"

export default function ProfileStats() {
  const stats = [
    { icon: BookOpen, label: "Завершено материалов", value: "28", color: "from-blue-500" },
    { icon: TrendingUp, label: "Средний прогресс", value: "82%", color: "from-green-500" },
    { icon: Clock, label: "Часов учебы", value: "156.5", color: "from-purple-500" },
    { icon: Target, label: "Выполнено задач", value: "142", color: "from-orange-500" },
    { icon: Users, label: "Участник групп", value: "5", color: "from-pink-500" },
    { icon: Zap, label: "Серия дней подряд", value: "23", color: "from-yellow-500" },
  ]

  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4">
            <div
              className={`w-10 h-10 bg-gradient-to-br ${stat.color} to-cyan-400 rounded-lg flex items-center justify-center mb-3`}
            >
              <stat.icon className="text-white" size={20} />
            </div>
            <p className="text-xs text-muted mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Activity Timeline */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-foreground mb-6">Недавняя активность</h3>

        <div className="space-y-4">
          {[
            {
              date: "Сегодня в 14:30",
              action: "Завершил тест по Математике",
              icon: "📝",
            },
            {
              date: "Вчера в 10:15",
              action: "Присоединился к группе Программирования",
              icon: "👥",
            },
            {
              date: "2 дня назад",
              action: "Создал конспект по дифференциальным уравнениям",
              icon: "✍️",
            },
            {
              date: "3 дня назад",
              action: "Достиг серии из 20 дней подряд",
              icon: "🔥",
            },
            {
              date: "4 дня назад",
              action: "Разблокировал достижение Отличник",
              icon: "🏆",
            },
          ].map((activity, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0">
              <div className="text-2xl flex-shrink-0">{activity.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{activity.action}</p>
                <p className="text-xs text-muted mt-1">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
