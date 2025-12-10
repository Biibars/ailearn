"use client"

interface ProgressTrendsProps {
  timeRange: "week" | "month" | "semester"
}

export default function ProgressTrends({ timeRange }: ProgressTrendsProps) {
  const trends = [
    {
      subject: "Высшая Математика",
      trend: "+12%",
      isPositive: true,
      score: 78,
      details: "Значительное улучшение в решении дифференциальных уравнений",
    },
    {
      subject: "Программирование",
      trend: "+8%",
      isPositive: true,
      score: 85,
      details: "Освоены основы React, продолжать практику",
    },
    {
      subject: "Физика",
      trend: "-3%",
      isPositive: false,
      score: 65,
      details: "Нужна дополнительная помощь с электричеством",
    },
    {
      subject: "История",
      trend: "+15%",
      isPositive: true,
      score: 72,
      details: "Хорошее улучшение после интенсивной подготовки",
    },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Тренды по предметам</h2>

      <div className="space-y-4">
        {trends.map((item, index) => (
          <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-foreground">{item.subject}</h3>
                <p className="text-xs text-muted mt-1">{item.details}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold text-lg ${item.isPositive ? "text-green-500" : "text-red-500"}`}>
                  {item.trend}
                </p>
                <p className="text-xs text-muted">Текущий балл</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                style={{ width: `${item.score}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted mt-2">{item.score}% усвоения материала</p>
          </div>
        ))}
      </div>
    </div>
  )
}
