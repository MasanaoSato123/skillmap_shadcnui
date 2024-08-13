"use client"

import React, { useState, useEffect } from 'react'

interface Industry {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
}

interface Language {
  id: string;
  name: string;
}

interface Employee {
  id: string;
  name: string;
  department: string;
  team: string;
  industries: string[];
  services: string[];
  languages: string[];
}

export interface EmployeeFormProps {
  onSubmit: (employeeData: any) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setIndustries(data.industries);
      setServices(data.services);
      setLanguages(data.languages);
    };
    fetchCategories();
  }, []);

  const handleAddEmployee = () => {
    // 新規従業員追加の処理
  };

  const handleUpdateEmployee = () => {
    // 従業員情報更新の処理
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input type="text" placeholder="氏名" className="border p-2" />
        <input type="text" placeholder="部門" className="border p-2" />
        <input type="text" placeholder="チーム" className="border p-2" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">新規登録</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">更新</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">詳細表示</button>
      </div>

      <div className="border p-4">
        <h3 className="font-bold">業種</h3>
        <div className="grid grid-cols-4 gap-2">
          {industries.map(industry => (
            <label key={industry.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedIndustries.includes(industry.id.toString())}
                onChange={() => {
                  const updatedIndustries = selectedIndustries.includes(industry.id.toString())
                    ? selectedIndustries.filter(id => id !== industry.id.toString())
                    : [...selectedIndustries, industry.id.toString()];
                  setSelectedIndustries(updatedIndustries);
                }}
                className="mr-2"
              />
              {industry.name}
            </label>
          ))}
        </div>
      </div>

      <div className="border p-4">
        <h3 className="font-bold">OS/サービス</h3>
        <div className="grid grid-cols-4 gap-2">
          {services.map(service => (
            <label key={service.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedServices.includes(service.id.toString())}
                onChange={() => {
                  const updatedServices = selectedServices.includes(service.id.toString())
                    ? selectedServices.filter(id => id !== service.id.toString())
                    : [...selectedServices, service.id.toString()];
                  setSelectedServices(updatedServices);
                }}
                className="mr-2"
              />
              {service.name}
            </label>
          ))}
        </div>
      </div>

      <div className="border p-4">
        <h3 className="font-bold">言語/DB</h3>
        <div className="grid grid-cols-4 gap-2">
          {languages.map(language => (
            <label key={language.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedLanguages.includes(language.id.toString())}
                onChange={() => {
                  const updatedLanguages = selectedLanguages.includes(language.id.toString())
                    ? selectedLanguages.filter(id => id !== language.id.toString())
                    : [...selectedLanguages, language.id.toString()];
                  setSelectedLanguages(updatedLanguages);
                }}
                className="mr-2"
              />
              {language.name}
            </label>
          ))}
        </div>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">氏名</th>
            <th className="border p-2">部門</th>
            <th className="border p-2">チーム</th>
            <th className="border p-2">経験業種(1)～(3)</th>
            <th className="border p-2">経験サービス(1)～(3)</th>
            <th className="border p-2">得意言語(1)～(3)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td className="border p-2">{employee.name}</td>
              <td className="border p-2">{employee.department}</td>
              <td className="border p-2">{employee.team}</td>
              <td className="border p-2">{employee.industries.join(', ')}</td>
              <td className="border p-2">{employee.services.join(', ')}</td>
              <td className="border p-2">{employee.languages.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">部門別分布図</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">チーム別分布図</button>
      </div>
    </div>
  );
};

export default EmployeeForm;