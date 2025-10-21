export type Project = {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
  link?: string
}

// 프로젝트 데이터 목록
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Clerk Practice Demo',
    description:
      '웹서버보안프로그래밍 강의 중 Clerk으로 로그인을 구현한 사이트입니다.',
    imageUrl: '/projectsimg/clerk.png',
    tags: ['Web Development'],
    link: 'https://wssp-clerk.vercel.app/',
  },
  {
    id: 2,
    title: 'MongoDB Practice Demo',
    description:
      '웹서버보안프로그래밍 강의 중 MongoDB의 기능을 구현한 사이트입니다.',
    imageUrl: '/projectsimg/mongodb.webp',
    tags: ['Web Development'],
    link: 'https://exmongo.vercel.app/',
  },
  {
    id: 3,
    title: 'SCP 내부 해커톤',
    description:
      '동아리 내부 해커톤에 참여하여 문서 파일의 암호를 크래킹하는 프로그램을 개발했습니다.',
    imageUrl: '/projectsimg/fpc.png',
    tags: ['Hackathon', 'Malware Analysis', 'Python'],
  },
  {
    id: 4,
    title: 'SCP Python Toy Project',
    description:
      'Python을 활용하여 소켓 통신을 이용한 백도어 프로그램을 제작한 토이 프로젝트입니다.',
    imageUrl: '/projectsimg/scp.png',
    tags: ['Malware Analysis', 'Python'],
    link: 'https://github.com/J4EH00N/Python_Toy_Project_2022',
  },
  {
    id: 5,
    title: 'JBUCTF2022 문제 출제',
    description:
      '교내 CTF 대회인 JBUCTF 2022에서 문제 출제자로 참여하여 시스템 해킹 분야 문제를 제작했습니다.',
    imageUrl: '/projectsimg/jbuctf2022.png',
    tags: ['CTF', '문제 출제', 'PWN'],
  },
  {
    id: 6,
    title: '[HackIn] Pwn CTF 아카이빙',
    description:
      'Pwnable CTF 문제들을 아카이빙하고 풀이를 공유하기 위해 제작한 웹사이트입니다.',
    imageUrl: '/projectsimg/hackin.png',
    tags: ['CTF', '문제 출제', 'PWN'],
    link: 'https://github.com/J4EH00N/HackIn-Project',
  },
  {
    id: 7,
    title: 'JBUCTF2025 문제 출제',
    description:
      '교내 CTF 대회인 JBUCTF 2025에서 문제 출제자로 참여하여 시스템 해킹 분야 문제를 제작했습니다.',
    imageUrl: '/projectsimg/jbuctf2025.png',
    tags: ['CTF', '문제 출제', 'PWN'],
  },
  {
    id: 8,
    title: 'CVE-2016-5195 분석 및 실습',
    description:
      'CVE-2016-5195 취약점을 분석하고 이를 이용한 실습을 진행했습니다.',
    imageUrl: '/projectsimg/dirty-cow.png',
    tags: ['CVE Analysis', 'PWN', 'Kernel Exploitation'],
    link: 'https://sjh4ck3r.tistory.com/51',
  },
]

export const projectTags = [
  'All',
  'Web Development',
  'CTF',
  'Hackathon',
  'Malware Analysis',
]
