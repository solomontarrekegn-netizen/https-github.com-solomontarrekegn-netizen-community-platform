'use client'

import { useEffect, useState } from 'react'

type Question = {
  id: string
  title: string
  content: string
  createdAt: string
}

export default function QuestionList() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/questions')
      .then((r) => r.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>
  if (!questions.length) return <p>No questions yet.</p>

  return (
    <ul className="space-y-4">
      {questions.map((q) => (
        <li key={q.id} className="bg-white p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold">{q.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{q.content}</p>
          <div className="text-xs text-gray-400 mt-2">{new Date(q.createdAt).toLocaleString()}</div>
        </li>
      ))}
    </ul>
  )
}
