import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'space order',
      startedAt: '2025-02',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: '크로스 플랫폼 서비스 애플리케이션',
        },
        {
          content: 'tauri, rust, javascript',
        },
      ],
    },
    // {
    //   title: '오픈마켓 서비스 플랫폼 리팩토링',
    //   startedAt: '2023-11',
    //   where: '네이버클라우드 AIaaS 개발자 과정 7기 수료생 모임',
    //   descriptions: [
    //     // {
    //     //   content:
    //     //     'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
    //     // },
    //     // {
    //     //   content:
    //     //     'Achieved significant improvements in system performance and resource management.',
    //     //   weight: 'MEDIUM',
    //     //   descriptions: [
    //     //     { content: '30% improvement in system resource efficiency' },
    //     //     { content: 'Job Scheduler Refactor and Optimization' },
    //     //   ],
    //     // },
    //     {
    //       content: '프로젝트 깃허브',
    //       href: 'https://github.com/orgs/NC7-BleuAuction/repositories',
    //     },
    //   ],
    // },
    {
      title: 'SNS 서비스 플랫폼 개발',
      startedAt: '2023-10',
      endedAt: '2023-10',
      where: '네이버클라우드 AIaaS 개발자 과정 7기',
      descriptions: [
        {
          content:
            '현대인들에게 웹 푸시 알림과 다국어 커뮤니케이션이 가능한 실시간 채팅 기능을 제공하는 SNS 서비스 개발',
        },
        {
          content:
            'React, Redux, Express, Socket.io, Spring, MySQL, MongoDB, Redis, NaverCloudPlatform 등을 사용하여 서비스 개발',
        },
        {
          content:
            '팀장, PM, 마이페이지·알림·채팅 번역 서브 시스템, Git 관리자, API 아키텍처 설계, ERD 설계, 팀원 개발 상담 수행',
        },
        {
          content:
            '팀장으로써 프로젝트를 진행 및 조율하며 프로젝트 문서화, 협업, 클라우드 서버 배포 등을 경험',
        },
        {
          content: '프로젝트 상세 설명',
          href:
            'https://ncamp.magicecole.com/Home/Project/023ef993-a000-40b8-8cfa-0c1d9b19299c?page=1&groupId=0',
        },
        {
          content: '프로젝트 깃허브',
          href: 'https://github.com/NC7-1st-TeamProject-1st-Team/2nd-sns-notification-system',
        },
        {
          content: '구버전 프로젝트 깃허브',
          href: 'https://github.com/NC7-1st-TeamProject-1st-Team/sns-notification-system',
        },
      ],
    },
    {
      title: '웹 커뮤니티 개발',
      startedAt: '2023-01',
      endedAt: '2023-03',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: 'JS 풀스택 프로젝트 ',
        },
        {
          content: 'React, Redux, Koa, Socket.io, MySQL, MongoDB 등을 사용하여 서비스 개발',
        },
        {
          content: '풀스택 개발을 통한 FrontEnd와 BackEnd의 전반적인 경험과 이해',
        },
        {
          content: '프로젝트 깃허브',
          href: 'https://github.com/pangorithm/MFWP',
        },
      ],
    },
  ],
};

export default project;
