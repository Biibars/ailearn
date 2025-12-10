"use client"

import { Bell, Moon, Volume2, Lock } from "lucide-react"
import { useState } from "react"

export default function UserPreferences() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    darkMode: false,
    soundEnabled: true,
    privateProfile: false,
    showProgress: true,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="max-w-2xl">
      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        {/* Notifications Section */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Bell size={20} />
            Уведомления
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Email уведомления</p>
                <p className="text-sm text-muted">Получать обновления по email</p>
              </div>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.emailNotifications ? "bg-blue-500" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Push уведомления</p>
                <p className="text-sm text-muted">Алерты на рабочем столе</p>
              </div>
              <button
                onClick={() => handleToggle("pushNotifications")}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.pushNotifications ? "bg-blue-500" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Display Section */}
        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Moon size={20} />
            Дизайн
          </h3>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Темный режим</p>
              <p className="text-sm text-muted">Использовать темную тему</p>
            </div>
            <button
              onClick={() => handleToggle("darkMode")}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.darkMode ? "bg-blue-500" : "bg-muted"
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.darkMode ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Sound Section */}
        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Volume2 size={20} />
            Звук
          </h3>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-semibold text-foreground">Звуковые эффекты</p>
              <p className="text-sm text-muted">Включить звуки в приложении</p>
            </div>
            <button
              onClick={() => handleToggle("soundEnabled")}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.soundEnabled ? "bg-blue-500" : "bg-muted"
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.soundEnabled ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Lock size={20} />
            Приватность
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Приватный профиль</p>
                <p className="text-sm text-muted">Скрыть профиль от других студентов</p>
              </div>
              <button
                onClick={() => handleToggle("privateProfile")}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.privateProfile ? "bg-blue-500" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.privateProfile ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold text-foreground">Показывать прогресс</p>
                <p className="text-sm text-muted">Разрешить видеть мой прогресс в группах</p>
              </div>
              <button
                onClick={() => handleToggle("showProgress")}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.showProgress ? "bg-blue-500" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.showProgress ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-bold text-red-500 mb-4">Опасная зона</h3>
          <button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
            Удалить аккаунт
          </button>
        </div>

        {/* Save Button */}
        <div className="flex gap-3 pt-6 border-t border-border">
          <button className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            Сохранить изменения
          </button>
          <button className="flex-1 py-2 bg-muted text-foreground font-semibold rounded-lg hover:bg-border transition-colors">
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}
