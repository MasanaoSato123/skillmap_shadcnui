import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET() {
  const industries = await prisma.industry.findMany()
  const services = await prisma.service.findMany()
  const languages = await prisma.language.findMany()

  return NextResponse.json({ industries, services, languages })
}
