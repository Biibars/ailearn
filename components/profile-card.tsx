"use client"

import { Mail, Phone, MapPin, Edit2, LogOut } from "lucide-react"

export default function ProfileCard() {
  return (
    <div className="lg:col-span-1 space-y-4">
      {/* Main Card */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {/* Header */}
        <div className="h-24 bg-gradient-to-r from-blue-500 to-cyan-400"></div>

        {/* Avatar and Info */}
        <div className="p-6 relative">
          <div className="flex items-start justify-between mb-4">
            <div className="relative -mt-16 mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-4xl border-4 border-card">
                БТ
              </div>
            </div>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Edit2 size={20} className="text-muted" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-1">Барсбек Турганалиев</h2>
          <p className="text-sm text-muted mb-6">Студент ВУЗа</p>

          {/* Contact Info */}
          <div className="space-y-3 border-t border-border pt-6">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-semibold text-foreground">bars@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <div>
                <p className="text-xs text-muted">Телефон</p>
                <p className="text-sm font-semibold text-foreground">+996 500 123 456</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              <div>
                <p className="text-xs text-muted">Город</p>
                <p className="text-sm font-semibold text-foreground">Бишкек, Кыргызстан</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-6 pt-6 border-t border-border">
            <button className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm">
              Редактировать
            </button>
            <button className="flex-1 py-2 bg-muted text-foreground font-semibold rounded-lg hover:bg-border transition-colors text-sm flex items-center justify-center gap-2">
              <LogOut size={16} />
              Выход
            </button>
          </div>
        </div>
      </div>

      {/* Study Goals */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Учебные цели</h3>
        <div className="space-y-3">
          {[
            "Улучшить оценки до 4.5+",
            "Завершить все курсовые работы",
            "Подготовиться к сессии на 100%",
            "Помогать одногруппникам",
          ].map((goal, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex-shrink-0 mt-0.5"></div>
              <p className="text-sm text-foreground">{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
