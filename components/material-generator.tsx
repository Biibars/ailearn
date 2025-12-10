"use client"

import { useState } from "react"
import { Send, Loader2, Download } from "lucide-react"

type MaterialType = "concept" | "test" | "mindmap" | "cheatsheet" | "examples" | "structure"

interface GeneratedMaterial {
  id: string
  title: string
  type: MaterialType
  content: string
  createdAt: string
}

export default function MaterialGenerator() {
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [materialType, setMaterialType] = useState<MaterialType>("concept")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedMaterial, setGeneratedMaterial] = useState<GeneratedMaterial | null>(null)

  const materialTypes = [
    { id: "concept", label: "Конспект", icon: "📝" },
    { id: "test", label: "Тестовые вопросы", icon: "❓" },
    { id: "mindmap", label: "Ментальная карта", icon: "🗺️" },
    { id: "cheatsheet", label: "Шпаргалка", icon: "⚡" },
    { id: "examples", label: "Примеры и задачи", icon: "🔢" },
    { id: "structure", label: "Структура доклада", icon: "📊" },
  ]

  const handleGenerate = async () => {
    if (!subject || !topic) {
      alert("Пожалуйста заполните все поля")
      return
    }

    setIsLoading(true)

    // Simulate AI generation
    setTimeout(() => {
      const mockContent = {
        concept: `# Конспект: ${topic}\n\n## Основные понятия\n- Понятие 1: Определение и примеры\n- Понятие 2: Применение в теории\n- Понятие 3: Практическое использование\n\n## Ключевые идеи\n1. Первая ключевая идея с объяснением\n2. Вторая ключевая идея с примерами\n3. Третья ключевая идея с формулами\n\n## Формулы и теоремы\n...Дополнительная информация...`,
        test: `1. ${topic} - это?\n   a) Вариант A\n   b) Вариант B\n   c) Вариант C (правильный)\n   d) Вариант D\n\n2. Какое из следующих утверждений верно?\n   a) Утверждение 1\n   b) Утверждение 2 (правильное)\n   c) Утверждение 3\n   d) Утверждение 4\n\n3. Вопрос с развернутым ответом:\n   Объясните принцип ${topic}...`,
        mindmap: `${topic}\n├── Основной компонент 1\n│   ├── Подкомпонент 1.1\n│   └── Подкомпонент 1.2\n├── Основной компонент 2\n│   ├── Подкомпонент 2.1\n│   └── Подкомпонент 2.2\n└── Основной компонент 3\n    ├── Подкомпонент 3.1\n    └── Подкомпонент 3.2`,
        cheatsheet: `КРАТКАЯ ШПАРГАЛКА: ${topic}\n\n1. ОПРЕДЕЛЕНИЕ: ${topic} - это...\n2. ОСНОВНЫЕ СВОЙСТВА:\n   - Свойство 1\n   - Свойство 2\n   - Свойство 3\n3. ФОРМУЛА: F = ...\n4. ПРИМЕР: Когда ${topic} применяется в...\n5. ЧАСТЫЕ ОШИБКИ: Не путать с...`,
        examples: `ПРИМЕРЫ И ЗАДАЧИ: ${topic}\n\nПример 1: Базовый пример\nУсловие: Описание задачи\nРешение: Пошаговое решение\nОтвет: Результат\n\nПример 2: Сложный пример\nУсловие: Более сложная задача\nРешение: Подробное решение\nОтвет: Окончательный результат\n\nЗадачи для практики:\n1. Задача 1...\n2. Задача 2...\n3. Задача 3...`,
        structure: `СТРУКТУРА ДОКЛАДА: ${topic}\n\nI. ВСТУПЛЕНИЕ (2-3 минуты)\n   - Привет аудитории\n   - Тема доклада: ${topic}\n   - План презентации\n\nII. ОСНОВНАЯ ЧАСТЬ (10-15 минут)\n   A. Историческое введение\n   B. Теоретические основы\n   C. Практические примеры\n   D. Современные приложения\n\nIII. ЗАКЛЮЧЕНИЕ (2-3 минуты)\n   - Резюме ключевых пунктов\n   - Выводы\n   - Спасибо за внимание`,
      }

      setGeneratedMaterial({
        id: Date.now().toString(),
        title: `${topic} - ${materialTypes.find((t) => t.id === materialType)?.label}`,
        type: materialType,
        content: mockContent[materialType] || "",
        createdAt: new Date().toLocaleString("ru-RU"),
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Generator Panel */}
      <div className="lg:col-span-1">
        <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
          <h2 className="text-xl font-bold text-foreground mb-6">Генератор материалов</h2>

          <div className="space-y-4 mb-6">
            {/* Subject Select */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Предмет</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground outline-none"
              >
                <option value="">Выберите предмет</option>
                <option value="math">Высшая Математика</option>
                <option value="prog">Программирование</option>
                <option value="physics">Физика</option>
                <option value="history">История</option>
              </select>
            </div>

            {/* Topic Input */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Тема</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Например: Интегралы..."
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground outline-none placeholder:text-muted"
              />
            </div>

            {/* Material Type */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Тип материала</label>
              <div className="grid grid-cols-2 gap-2">
                {materialTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setMaterialType(type.id as MaterialType)}
                    className={`p-3 rounded-lg text-xs font-semibold transition-all ${
                      materialType === type.id
                        ? "bg-blue-500 text-white border-blue-600"
                        : "bg-muted text-foreground border border-border hover:border-blue-400"
                    }`}
                  >
                    <div>{type.icon}</div>
                    <div>{type.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isLoading || !subject || !topic}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Генерирую...
              </>
            ) : (
              <>
                <Send size={18} />
                Сгенерировать
              </>
            )}
          </button>

          <p className="text-xs text-muted text-center mt-4">
            Используется AI для создания высокачественных материалов
          </p>
        </div>
      </div>

      {/* Generated Content */}
      <div className="lg:col-span-2">
        {generatedMaterial ? (
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">{generatedMaterial.title}</h2>
                <p className="text-sm text-muted">{generatedMaterial.createdAt}</p>
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Download size={20} className="text-blue-500" />
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-muted rounded-lg p-4 font-mono text-sm text-foreground whitespace-pre-wrap overflow-auto max-h-96">
                {generatedMaterial.content}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Сохранить
              </button>
              <button className="flex-1 py-2 bg-muted text-foreground font-semibold rounded-lg hover:bg-border transition-colors">
                Изменить
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Готовы создать материал?</h3>
            <p className="text-muted">Выберите предмет, тему и тип материала, чтобы начать</p>
          </div>
        )}
      </div>
    </div>
  )
}
