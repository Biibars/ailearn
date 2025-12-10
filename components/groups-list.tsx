"use client"

import { Users, Plus } from "lucide-react"
import { useState } from "react"

interface Group {
  id: number
  name: string
  subject: string
  members: number
  unread: number
  lastMessage: string
  lastTime: string
  avatar: string
}

interface GroupsListProps {
  selectedId: number | null
  onSelect: (id: number) => void
}

export default function GroupsList({ selectedId, onSelect }: GroupsListProps) {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: "Математика - Основная группа",
      subject: "Высшая Математика",
      members: 24,
      unread: 3,
      lastMessage: "Кто может помочь с интегралами?",
      lastTime: "5 мин",
      avatar: "📐",
    },
    {
      id: 2,
      name: "Веб-разработка",
      subject: "Программирование",
      members: 18,
      unread: 0,
      lastMessage: "Готово! Первая версия проекта",
      lastTime: "30 мин",
      avatar: "💻",
    },
    {
      id: 3,
      name: "Физика - Волны и колебания",
      subject: "Физика",
      members: 12,
      unread: 5,
      lastMessage: "Завтра коллоквиум, кто готов?",
      lastTime: "1 час",
      avatar: "⚛️",
    },
    {
      id: 4,
      name: "История Кыргызстана",
      subject: "История",
      members: 20,
      unread: 0,
      lastMessage: "Интересная лекция была сегодня",
      lastTime: "2 часа",
      avatar: "📚",
    },
    {
      id: 5,
      name: "Подготовка к сессии",
      subject: "Все предметы",
      members: 45,
      unread: 2,
      lastMessage: "Как вы готовитесь?",
      lastTime: "3 часа",
      avatar: "📖",
    },
  ])

  return (
    <div className="flex-1 flex flex-col">
      {/* Create Group Button */}
      <div className="p-4 border-b border-border">
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm">
          <Plus size={18} />
          Создать группу
        </button>
      </div>

      {/* Groups List */}
      <div className="flex-1 overflow-y-auto">
        {groups.map((group) => (
          <button
            key={group.id}
            onClick={() => onSelect(group.id)}
            className={`w-full p-4 border-b border-border transition-colors hover:bg-muted text-left ${
              selectedId === group.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                {group.avatar}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground text-sm truncate">{group.name}</h3>
                  {group.unread > 0 && (
                    <span className="w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                      {group.unread}
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted mb-2">{group.subject}</p>

                <p className="text-xs text-muted truncate mb-1">{group.lastMessage}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Users size={12} />
                    <span>{group.members}</span>
                  </div>
                  <span className="text-xs text-muted">{group.lastTime}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
