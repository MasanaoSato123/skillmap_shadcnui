import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET() {
  const employees = await prisma.employee.findMany({
    include: {
      industries: true,
      services: true,
      languages: true,
    },
  })
  return NextResponse.json(employees)
}

export async function POST(request: Request) {
  const body = await request.json()
  const employee = await prisma.employee.create({
    data: {
      name: body.name,
      department: body.department,
      team: body.team,
      industries: {
        connect: body.industries.map((id: number) => ({ id })),
      },
      services: {
        connect: body.services.map((id: number) => ({ id })),
      },
      languages: {
        connect: body.languages.map((id: number) => ({ id })),
      },
    },
  })
  return NextResponse.json(employee)
}

export async function PUT(request: Request) {
  const body = await request.json()
  const employee = await prisma.employee.update({
    where: { id: body.id },
    data: {
      name: body.name,
      department: body.department,
      team: body.team,
      industries: {
        set: body.industries.map((id: number) => ({ id })),
      },
      services: {
        set: body.services.map((id: number) => ({ id })),
      },
      languages: {
        set: body.languages.map((id: number) => ({ id })),
      },
    },
  })
  return NextResponse.json(employee)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  await prisma.employee.delete({
    where: { id },
  })
  return NextResponse.json({ message: '従業員が削除されました' })
}