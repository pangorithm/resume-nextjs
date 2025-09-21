import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'TNH',
      position: 'DevOps',
      startedAt: '2024-03',
      descriptions: [
        '서비스 서버 자체 모니터링 프로그램 리팩토링',
        '서비스 서버 자체 모니터링 시스템 구축',
        '실시간 서버 장애 대응 및 DR 대비, 아키텍처 개선',
        'IDC 온프레미스 환경 유지 보수',
        '인프라 네트워크 구축 및 유지 보수',
        '신규 서비스 아키텍쳐 구축',
      ],
      skillKeywords: [
        'Linux(RedHat)',
        'Node.js',
        'Nest.js',
        'Nginx',
        'Haproxy',
        'ProxySQL',
        'MariaDB',
        'GaleraCluster',
        'Redis',
        'Podman',
        'Grafana',
        'Prometheus',
      ],
    },
    {
      title: 'TNH',
      position: 'Backend Developer',
      startedAt: '2024-01',
      endedAt: '2024-02',
      descriptions: ['CRM & EMR 통합 솔루션 고객지원 및 유지보수 & 기능 추가'],
      skillKeywords: ['JavaScript', 'TypeScript', 'JQuery', 'Express.js', 'Koa.js'],
    },
  ],
};

export default experience;
