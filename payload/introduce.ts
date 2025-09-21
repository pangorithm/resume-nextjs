import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 풀스택 개발자를 목표로 시작하여 웹 개발에 대한 전반적인 경험을 한 이후 백엔드 개발로 성장하였습니다. 현재는 인프라 엔지니어로서 서비스의 안정성을 책임지고 있습니다. 저는 급변하는 기술 환경에 발맟춰 AI를 적극적으로 활용하여 속도와 안정성 모두를 확보하는 워크 플로우를 정립하였습니다. 인프라 설계 시 AI를 통해 빠르게 기술과 문제점에 대해 빠르게 검토한 후 최종적으로 공식 문서를 통해 검증하여 최적의 해결책을 찾습니다. 코드 작성 시 1차 구현은 AI에게 맡기되 설계자이자 최종 검증자로서 코드의 구조와 안정성을 책임지고 목표에 맞게 코드를 수정하는 방식을 추구합니다. 이러한 개발 방식은 "개발이란 언어나 프레임워크에 종속되는 것이 아니라 개발 목적에 따라 언어와 프레임워크를 선택하고 자유롭게 사용할 수 있어야 한다"는 저의 개발 가치관과 맞물려 다양한 언어와 프레임워크 등을 경험하고 필요에 따라 유연하게 선택하여 사용할 수 있게 해주는 원동력이 되었습니다.',
    '실무에서의 경험으로 "신속하고 정확한 장애 대응의 핵심은 자동화에 있다"는 확신을 갖고 있습니다. 이를 위해 선제적으로 장애를 예방하고 사람의 개입을 최소화하는 시스템을 구축하는 것을 추구 합니다. 정교한 모니터링 및 HealthCheck 시스템을 구축하고, 충분한 테스트를 통해 예측 가능한 장애 상황에 대한 자동화된 대응 체계를 설계하는 것을 목표로 하고 있습니다.',
  ],
  sign: 'Pangorithm',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
