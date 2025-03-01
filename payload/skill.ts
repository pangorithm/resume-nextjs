import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Rust',
      level: 1,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'Java',
      level: 3,
    },
  ],
};

const frontendDevelopment: ISkill.Skill = {
  category: 'Frontend FameWorks & Libraries',
  items: [
    {
      title: 'React',
      level: 2,
    },
    {
      title: 'Redux',
      level: 2,
    },
    {
      title: 'Redux-saga',
      level: 2,
    },
    {
      title: 'Recoil',
      level: 1,
    },
    {
      title: 'JSP',
      level: 1,
    },
    {
      title: 'Tauri',
      level: 1,
    },
  ],
};

const backendDevelopment: ISkill.Skill = {
  category: 'Backend FameWorks & Libraries',
  items: [
    {
      title: 'bun.js',
      level: 1,
    },
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Express.js',
      level: 3,
    },
    {
      title: 'Koa.js',
      level: 3,
    },
    {
      title: 'Nest.js',
      level: 3,
    },
    {
      title: 'Socket.io',
      level: 2,
    },
    {
      title: 'Spring',
      level: 2,
    },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'NCP',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Haproxy',
    },
    {
      title: 'ProxySQL',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'GaleraCluster',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Consul',
    },
    {
      title: 'CoreDns',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Vim',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'IDEA',
    },
    {
      title: 'WSL',
    },
    {
      title: 'Git',
    },
    {
      title: 'Github',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Climbing',
    },
    {
      title: 'Cycling',
    },
    {
      title: 'Algorithm Problem Solving',
    },
    {
      title: 'DIY Crafting',
    },
    {
      title: 'Joke Telling',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frontendDevelopment, backendDevelopment, infra, tools, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
