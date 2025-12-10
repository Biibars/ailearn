"use client"

import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react"
import { useState } from "react"

interface Event {
  id: number
  title: string
  subject: string
  time: string
  location?: string
  type: "lecture" | "practice" | "deadline"
  date: number
  month: number
}

export default function ScheduleCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  const events: Event[] = [
    {
      id: 1,
      title: "Лекция: Дифференциальные уравнения",
      subject: "Высшая Математика",
      time: "10:00 - 11:30",
      location: "Аудитория 201",
      type: "lecture",
      date: 16,
      month: 11,
    },
    {
      id: 2,
      title: "Практика: Базы данных",
      subject: "Программирование",
      time: "14:00 - 15:30",
      location: "Компьютерный класс",
      type: "practice",
      date: 17,
      month: 11,
    },
    {
      id: 3,
      title: "Дедлайн: Курсовая работа",
      subject: "Высшая Математика",
      time: "23:59",
      type: "deadline",
      date: 20,
      month: 11,
    },
    {
      id: 4,
      title: "Коллоквиум по физике",
      subject: "Физика",
      time: "11:00 - 13:00",
      location: "Аудитория 305",
      type: "lecture",
      date: 22,
      month: 11,
    },
  ]

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const monthName = new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" }).format(currentDate)

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const selectedDateEvents = selectedDate
    ? events.filter((e) => e.date === selectedDate && e.month === currentDate.getMonth())
    : []

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{monthName}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm font-semibold"
          >
            Сегодня
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-muted py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {days.map((day, index) => {
          const hasEvents = day && events.some((e) => e.date === day && e.month === currentDate.getMonth())
          const isSelected = day === selectedDate
          const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth()

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(day)}
              className={`aspect-square p-2 rounded-lg font-semibold transition-all text-sm flex flex-col items-center justify-center relative ${
                !day
                  ? "text-transparent"
                  : isSelected
                    ? "bg-blue-500 text-white"
                    : isToday
                      ? "bg-blue-100 text-blue-900 border-2 border-blue-500"
                      : "hover:bg-muted border border-border"
              }`}
            >
              {day}
              {hasEvents && <div className="w-1 h-1 bg-warning rounded-full mt-1"></div>}
            </button>
          )
        })}
      </div>

      {/* Selected Date Events */}
      {selectedDate && (
        <div className="border-t border-border pt-6">
          <h3 className="font-bold text-foreground mb-4">
            {selectedDate} {monthName.split(" ")[0]}
          </h3>

          {selectedDateEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedDateEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    event.type === "deadline"
                      ? "bg-red-50 border-l-red-500"
                      : event.type === "practice"
                        ? "bg-purple-50 border-l-purple-500"
                        : "bg-blue-50 border-l-blue-500"
                  }`}
                >
                  <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                  <p className="text-xs text-muted mb-2">{event.subject}</p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {event.time}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted text-center py-4">Нет событий в этот день</p>
          )}
        </div>
      )}
    </div>
  )
}
