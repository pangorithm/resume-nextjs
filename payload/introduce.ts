import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 풀스택 개발자를 목표로 시작하여 웹 개발에 대한 전반적인 경험을 한 이후 백엔드 개발자 및 인프라 엔지니어로서의 전문성을 키우기 위해 노력하고 있습니다. 단순 검색만이 아니라 API 문서를 통해 버그를 해결 또는 코드를 구현하여 프로그래밍의 정확한 이해를 추구하며, 단순히 작동만 하는 코드가 아닌 기능의 지속적인 확장과 협업을 위한 유지보수성이 높은 코드 작성을 지향합니다. 또한 개발이란 언어나 프레임워크에 종속되는 것이 아니라 개발 목적에 따라 언어와 프레임워크를 선택하고 자유롭게 사용할 수 있어야 한다고 생각하고 있습니다.',
    '학창시절부터 가진 독학 습관을 통해 꾸준히 알고리즘 문제를 해결 또는 리서치하는 등 항상 자기주도적으로 학습하고 발전하려는 태도를 가지고 있습니다. 경험이 적은 주니어로서 개발 숙련도가 아직 부족하다고 생각되지만, 팀원들과 협력하여 실무 역량을 쌓으며 함께 성장해 언젠가는 프로젝트를 주도적으로 이끄는 리더가 되기를 목표하고 있습니다.',
  ],
  sign: 'Pangorithm',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
