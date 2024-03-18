import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'TNH',
      position: 'DevOps',
      startedAt: '2024-03',
      descriptions: ['DB cluster & DR 아키텍처 개선'],
      skillKeywords: ['Linux(RedHat)', 'MariaDB', 'GaleraCluster'],
    },
    {
      title: 'TNH',
      position: 'Backend Developer',
      startedAt: '2024-01',
      endedAt: '2024-02',
      descriptions: ['기존 솔루션 고객지원 및 유지보수 & 기능 추가'],
      skillKeywords: ['JavaScript', 'TypeScript', 'JQuery', 'Express.js', 'Koa.js'],
    },
  ],
};

export default experience;
