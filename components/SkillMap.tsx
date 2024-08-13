"use client";

import React, { useEffect, useState } from 'react'
import EmployeeForm from './EmployeeForm'
import type { EmployeeFormProps } from './EmployeeForm'

interface Skill {
  name: string
  level: number
}

interface Employee {
  id: number
  name: string
  skills: Skill[]
  industries: { name: string }[]
}

const SkillMap: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    const response = await fetch('/api/employees')
    const data = await response.json()
    setEmployees(data)
  }

  const handleAddEmployee: EmployeeFormProps['onSubmit'] = async (employeeData) => {
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    })
    if (response.ok) {
      fetchEmployees()
    }
  }

  const handleDeleteEmployee = async (id: number) => {
    const response = await fetch('/api/employees', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    if (response.ok) {
      fetchEmployees()
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">新しい従業員を追加</h2>
      <EmployeeForm onSubmit={handleAddEmployee} />
      
      <h2 className="text-2xl font-bold mt-8 mb-4">従業員リスト</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="mb-8 p-4 border rounded">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{employee.name}</h2>
            <button
              onClick={() => handleDeleteEmployee(employee.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              削除
            </button>
          </div>
          <h3 className="text-xl mt-4">スキル</h3>
          <ul>
            {employee.skills.map((skill) => (
              <li key={skill.name} className="flex items-center">
                <span className="w-32">{skill.name}</span>
                <div className="w-32 bg-gray-200 rounded">
                  <div
                    className="bg-blue-500 h-4 rounded"
                    style={{ width: `${skill.level * 20}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl mt-4">経験業種</h3>
          <ul>
            {employee.industries.map((industry) => (
              <li key={industry.name}>{industry.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SkillMap