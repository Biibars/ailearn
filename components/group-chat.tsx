"use client"

import { useState } from "react"
import { Send, ChevronLeft, Phone, Video, MoreVertical } from "lucide-react"

interface Message {
  id: number
  author: string
  avatar: string
  content: string
  timestamp: string
  isOwn: boolean
}

interface GroupChatProps {
  groupId: number
  onBack: () => void
}

export default function GroupChat({ groupId, onBack }: GroupChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: "Айтекбi Адылбек",
      avatar: "👨‍🎓",
      content: "Привет! Кто может помочь с интегралами?",
      timestamp: "10:30",
      isOwn: false,
    },
    {
      id: 2,
      author: "Барсбек Турганалиев",
      avatar: "👦",
      content: "Я! Какой вопрос?",
      timestamp: "10:31",
      isOwn: true,
    },
    {
      id: 3,
      author: "Айтекбi Адылбек",
      avatar: "👨‍🎓",
      content: "Не понимаю, как решать интегралы подстановкой. Можешь объяснить?",
      timestamp: "10:32",
      isOwn: false,
    },
    {
      id: 4,
      author: "Барсбек Турганалиев",
      avatar: "👦",
      content: "Конечно! Сейчас я создам для тебя конспект с примерами через AI",
      timestamp: "10:33",
      isOwn: true,
    },
    {
      id: 5,
      author: "Алиса Искакова",
      avatar: "👩‍🎓",
      content: "И мне нужна помощь! Спасибо!",
      timestamp: "10:34",
      isOwn: false,
    },
    {
      id: 6,
      author: "Барсбек Турганалиев",
      avatar: "👦",
      content: "Вот, посмотрите конспект. Там все подробно объяснено с примерами",
      timestamp: "10:35",
      isOwn: true,
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          author: "Барсбек Турганалиев",
          avatar: "👦",
          content: newMessage,
          timestamp: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
          isOwn: true,
        },
      ])
      setNewMessage("")
    }
  }

  return (
    <>
      {/* Header */}
      <div className="border-b border-border px-4 lg:px-6 py-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="md:hidden p-2 hover:bg-muted rounded-lg">
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="font-bold text-foreground">Математика - Основная группа</h2>
            <p className="text-xs text-muted">24 участника онлайн</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-muted rounded-lg text-muted hover:text-foreground transition-colors">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg text-muted hover:text-foreground transition-colors">
            <Video size={20} />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg text-muted hover:text-foreground transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.isOwn ? "flex-row-reverse" : ""}`}>
            {/* Avatar */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-sm flex-shrink-0">
              {message.avatar}
            </div>

            {/* Message Content */}
            <div className={`flex flex-col gap-1 max-w-xs ${message.isOwn ? "items-end" : ""}`}>
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-muted">{message.author}</p>
                <p className="text-xs text-muted">{message.timestamp}</p>
              </div>

              <div
                className={`px-4 py-2 rounded-lg ${
                  message.isOwn ? "bg-blue-500 text-white rounded-br-none" : "bg-muted text-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card p-4 lg:p-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Написать сообщение..."
            className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg text-foreground outline-none placeholder:text-muted"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Send size={18} />
            <span className="hidden sm:inline">Отправить</span>
          </button>
        </div>

        <p className="text-xs text-muted text-center mt-3">
          Используйте команду /ai для генерации материалов прямо в чате
        </p>
      </div>
    </>
  )
}
