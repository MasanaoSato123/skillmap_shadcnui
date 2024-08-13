// @ts-ignore
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import prismaClient from '../lib/prisma.js';

async function main() {
  const industries = [
    '金融', '建設・不動産', 'IT・メディア', '物流・運輸', '小売・卸',
    '製造・素材', '自動車・機械', '電機・精密', '食品', 'サービス', '生活関連', '教育'
  ]

  const services = [
    'EZCraft', 'kintone', 'UnitBase', 'OutSystems', 'WebPerformer',
    'WinActor', 'BizRobo!', 'UiPath', 'AWS', 'GCP', 'Azure', 'CI/CD',
    'Ansible', 'Docker', 'Podman', 'Kubernetes', 'ECS', 'EKS', 'GKE',
    'Azure Kubernetes Service'
  ]

  const languages = [
    'Java', 'JavaScript', 'React', 'C#', 'C++', 'PHP', 'Ruby', 'Perl',
    'COBOL', 'Go', 'Swift', 'Python', 'VB.NET', 'R'
  ]

  for (const name of industries) {
    await prismaClient.industry.create({ data: { name } })
  }

  for (const name of services) {
    await prismaClient.service.create({ data: { name } })
  }

  for (const name of languages) {
    await prismaClient.language.create({ data: { name } })
  }

  console.log('Seed data has been inserted')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaClient.$disconnect()
  })