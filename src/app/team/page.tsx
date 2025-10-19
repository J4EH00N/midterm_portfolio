import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

type TeamMember = {
  name: string
  major: string
  tags: string[]
  githubUrl: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: '곽민경',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'WEB', '+5'],
    githubUrl: 'https://github.com/kkaturi14',
    imageUrl: '/team/member1.png',
  },
  {
    name: '박혜수',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'CLOUD', '+5'],
    githubUrl: 'https://github.com/Pandyo',
    imageUrl: '/team/member2.png',
  },
  {
    name: '심재훈',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'PWNABLE', '+5'],
    githubUrl: 'https://github.com/J4EH00N',
    imageUrl: '/profile.png',
  },
  {
    name: '정윤서',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'WEB3', '+5'],
    githubUrl: 'https://github.com/oesp91',
    imageUrl: '/team/member3.png',
  },
  {
    name: '정재성',
    major: '중부대학교 정보보호학전공',
    tags: ['SCP', 'WEB', '+5'],
    githubUrl: 'https://github.com/Interludeal',
    imageUrl: '/team/member4.png',
  },
]

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Link
    href={member.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center">
      <Image
        src={member.imageUrl}
        alt={`${member.name} profile picture`}
        width={120}
        height={120}
        className="rounded-full object-cover object-top aspect-square mb-4 border-2 border-gray-200"
      />
      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{member.major}</p>
      <div className="flex flex-wrap justify-center gap-2">
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
  </Link>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
