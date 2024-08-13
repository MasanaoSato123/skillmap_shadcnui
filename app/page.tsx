"use client"

import EmployeeForm from '../components/EmployeeForm'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IT社員スキルマップ</h1>
      <EmployeeForm onSubmit={(data) => console.log(data)} />
    </main>
  )
}