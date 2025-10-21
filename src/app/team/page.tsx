import Image from 'next/image'
import Link from 'next/link'
// 👇 FaLink 아이콘 import 추가
import { FaGithub, FaLink } from 'react-icons/fa'

// 1. TeamMember 타입 수정: portfolioUrl 추가
type TeamMember = {
  name: string
  major: string
  tags: string[]
  githubUrl: string
  imageUrl: string
  portfolioUrl?: string // 👈 포트폴리오 URL 필드 (선택 사항)
}

// 2. teamMembers 배열 수정: portfolioUrl 데이터 추가
const teamMembers: TeamMember[] = [
  {
    name: '곽민경',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'WEB'],
    githubUrl: 'https://github.com/kkaturi14',
    imageUrl: '/team/member1.png',
    portfolioUrl: 'https://web-server-mid.vercel.app/',
  },
  {
    name: '박혜수',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'CLOUD'],
    githubUrl: 'https://github.com/Pandyo',
    imageUrl: '/team/member2.png',
    portfolioUrl: 'https://web-server-class-project-01.vercel.app/',
  },
  {
    name: '심재훈',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'PWNABLE'],
    githubUrl: 'https://github.com/J4EH00N',
    imageUrl: '/profile.png',
    portfolioUrl: '/',
  },
  {
    name: '정윤서',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'WEB3'],
    githubUrl: 'https://github.com/oesp91',
    imageUrl: '/team/member3.png',
    portfolioUrl: 'https://wsvbp1-ixms.vercel.app/',
  },
  {
    name: '정재성',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'WEB'],
    githubUrl: 'https://github.com/Interludeal',
    imageUrl: '/team/member4.png',
    portfolioUrl: 'https://20252-middle.vercel.app/',
  },
]

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
    <Image
      src={member.imageUrl}
      alt={`${member.name} profile picture`}
      width={120}
      height={120}
      className="rounded-full object-cover object-top aspect-square mb-4 border-2 border-gray-200 flex-shrink-0"
    />
    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
    <p className="text-sm text-gray-500 mb-2">{member.major}</p>
    <div className="flex flex-wrap justify-center gap-2 mt-auto">
      {' '}
      {member.tags.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

export default async function TeamPage() {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Our Team</h1>
        <p className="text-gray-500 mt-2">
          <br />
          웹서버보안프로그래밍 수업을 함께하는 팀원들입니다.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-2">
        {' '}
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <TeamMemberCard member={member} />
            <div className="flex space-x-4 mt-4 p-3 bg-white rounded-full shadow-md">
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
                title="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              {member.portfolioUrl && (
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  title="Personal Portfolio"
                >
                  <FaLink size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
