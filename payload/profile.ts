import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faBlogger, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/pangHS.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '방현석',
    small: '(pangorithm)',
  },
  contact: [
    {
      title: 'phs559800@gmail.com',
      link: 'mailto:phs559800@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/pangorithm',
      icon: faGithub,
    },
    {
      link: 'https://dewtide.tistory.com/',
      icon: faBlogger,
    },
    {
      link: 'https://www.instagram.com/pangorithm',
      icon: faInstagram,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
