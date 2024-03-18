import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '네이버 클라우드 AIaaS 개발자 과정',
      subTitle: '모범상, 개근상 수상',
      startedAt: '2023-04',
      endedAt: '2023-10',
    },
    {
      title: '독학학위제',
      subTitle: '컴퓨터 공학 학사 졸업',
      startedAt: '2019-03',
      endedAt: '2024-02',
    },
    {
      title: '절강대학교(浙江大学)',
      subTitle: '기계전자공학 학사 중퇴',
      startedAt: '2017-09',
      endedAt: '2019-01',
    },
    {
      title: '대성고등학교 (서울 자사고)',
      subTitle: '자연계 졸업',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
