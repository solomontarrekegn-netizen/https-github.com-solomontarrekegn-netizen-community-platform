import QuestionList from './components/QuestionList'

export default function Page() {
  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Recent Questions</h2>
      </section>
      <QuestionList />
    </div>
  )
}
