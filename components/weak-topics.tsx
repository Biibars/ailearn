"use client"

import { AlertCircle, Lightbulb } from "lucide-react"

export default function WeakTopics() {
  const weakTopics = [
    {
      id: 1,
      topic: "Интегралы (неопределенные)",
      subject: "Высшая Математика",
      successRate: 42,
      recommendation: "Пройти дополнительный урок и решить 10 примеров",
      aiSuggestion: "Рекомендуем сгенерировать конспект с примерами интегралов",
    },
    {
      id: 2,
      topic: "CSS Grid и Flexbox",
      subject: "Программирование",
      successRate: 55,
      recommendation: "Создать несколько тестовых проектов на эти темы",
      aiSuggestion: "Попросите AI создать интерактивный курс по CSS",
    },
    {
      id: 3,
      topic: "Волны и колебания",
      subject: "Физика",
      successRate: 35,
      recommendation: "Нужна помощь преподавателя. Запланируйте консультацию",
      aiSuggestion: "Генерируйте тесты и шпаргалки для быстрого обучения",
    },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="text-red-500" size={24} />
        <h2 className="text-2xl font-bold text-foreground">Слабые места</h2>
      </div>

      <div className="space-y-4">
        {weakTopics.map((topic) => (
          <div key={topic.id} className="p-4 border-l-4 border-l-red-500 bg-red-50 rounded-lg">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{topic.topic}</h3>
                <p className="text-xs text-muted mt-1">{topic.subject}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-red-500">{topic.successRate}%</p>
                <p className="text-xs text-muted">Успешность</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="h-2 bg-red-500 rounded-full" style={{ width: `${topic.successRate}%` }}></div>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-sm text-foreground">
                <strong>Рекомендация:</strong> {topic.recommendation}
              </p>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <Lightbulb size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  <strong>Совет AI:</strong> {topic.aiSuggestion}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Подробнее
              </button>
              <button className="flex-1 px-4 py-2 bg-muted text-foreground text-sm font-semibold rounded-lg hover:bg-border transition-colors">
                Генерировать материал
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
