import favicon from '../asset/favicon.ico';
import previewImage from '../asset/pangHS.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = "pangorithm's RESUME";
const description = "This is a pangorithm's resume.";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
