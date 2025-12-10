"use client"

import { Download, Trash2, Eye, Share2 } from "lucide-react"

const materials = [
  {
    id: 1,
    title: "Конспект: Дифференциальные уравнения",
    subject: "Высшая Математика",
    type: "Конспект",
    date: "15 дек 2024",
    size: "2.4 MB",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Тесты: Основы Web Development",
    subject: "Программирование",
    type: "Тесты",
    date: "14 дек 2024",
    size: "1.2 MB",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Ментальная карта: История Кыргызстана",
    subject: "История",
    type: "Ментальная карта",
    date: "12 дек 2024",
    size: "0.8 MB",
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Шпаргалка: Формулы физики",
    subject: "Физика",
    type: "Шпаргалка",
    date: "10 дек 2024",
    size: "0.5 MB",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    title: "Примеры задач: Электричество",
    subject: "Физика",
    type: "Примеры",
    date: "08 дек 2024",
    size: "1.8 MB",
    color: "from-red-500 to-red-600",
  },
  {
    id: 6,
    title: "Структура доклада: Органическая химия",
    subject: "Химия",
    type: "Структура",
    date: "06 дек 2024",
    size: "0.6 MB",
    color: "from-pink-500 to-pink-600",
  },
]

export default function MaterialsList() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Моя библиотека ({materials.length} материалов)</h2>
        <div className="flex gap-2">
          <select className="px-4 py-2 bg-muted border border-border rounded-lg text-foreground outline-none text-sm">
            <option>Все предметы</option>
            <option>Математика</option>
            <option>Программирование</option>
            <option>История</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {materials.map((material) => (
          <div key={material.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${material.color} rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-lg`}
              >
                {material.type[0]}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">{material.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-muted">{material.subject}</span>
                  <span className="text-xs text-muted">•</span>
                  <span className="text-xs text-muted">{material.size}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted">{material.date}</p>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted hover:text-foreground">
                  <Eye size={16} />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted hover:text-foreground">
                  <Share2 size={16} />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted hover:text-red-500">
                  <Download size={16} />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
