"use client"

import { Lock } from "lucide-react"

export default function UserAchievements() {
  const achievements = [
    {
      id: 1,
      title: "Первый шаг",
      description: "Создать первый конспект",
      icon: "🎯",
      unlocked: true,
      unlockedDate: "15 декабря 2024",
    },
    {
      id: 2,
      title: "Любитель учебы",
      description: "Учиться 10 дней подряд",
      icon: "📚",
      unlocked: true,
      unlockedDate: "18 декабря 2024",
    },
    {
      id: 3,
      title: "Помощник",
      description: "Помочь 5 однокурсникам",
      icon: "🤝",
      unlocked: true,
      unlockedDate: "20 декабря 2024",
    },
    {
      id: 4,
      title: "Отличник",
      description: "Средний прогресс 80%+",
      icon: "⭐",
      unlocked: true,
      unlockedDate: "21 декабря 2024",
    },
    {
      id: 5,
      title: "Суперсоциал",
      description: "Присоединиться к 5 группам",
      icon: "👥",
      unlocked: true,
      unlockedDate: "22 декабря 2024",
    },
    {
      id: 6,
      title: "Марафонец",
      description: "Учиться 30 дней подряд",
      icon: "🔥",
      unlocked: false,
    },
    {
      id: 7,
      title: "Мастер теста",
      description: "Пройти 50 тестов",
      icon: "🎓",
      unlocked: false,
    },
    {
      id: 8,
      title: "Легенда",
      description: "Достичь 100% прогресса по всем предметам",
      icon: "🏆",
      unlocked: false,
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Мои достижения</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`bg-card border border-border rounded-lg p-6 text-center transition-all ${
              achievement.unlocked ? "hover:shadow-lg" : "opacity-50"
            }`}
          >
            <div className={`text-4xl mb-3 ${!achievement.unlocked && "filter grayscale"}`}>{achievement.icon}</div>

            <h3 className="font-bold text-foreground mb-1">{achievement.title}</h3>
            <p className="text-xs text-muted mb-4">{achievement.description}</p>

            {achievement.unlocked ? (
              <p className="text-xs font-semibold text-green-500">Разблокировано</p>
            ) : (
              <div className="flex items-center justify-center gap-1 text-xs text-muted">
                <Lock size={12} />
                <span>Заблокировано</span>
              </div>
            )}

            {achievement.unlocked && achievement.unlockedDate && (
              <p className="text-xs text-muted mt-2">{achievement.unlockedDate}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
