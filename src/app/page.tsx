import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
// 아이콘 추가: FaInstagram, SiTistory
import { FaGithub, FaNodeJs, FaInstagram } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiTistory,
} from 'react-icons/si'

export default function Home() {
  const skills = [
    { name: 'Next.js', icon: <SiNextdotjs size={30} /> },
    { name: 'TypeScript', icon: <SiTypescript size={30} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} /> },
    { name: 'Node.js', icon: <FaNodeJs size={30} /> },
  ]

  return (
    <div className="mt-16 mb-16">
      {/* 상단: 프로필과 소개 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center items-center">
          <Image
            src="/JBU.svg"
            alt="중부대 이미지"
            width={350}
            height={350}
            className="aspect-square rounded-fullobject-cover"
            priority
          />
        </div>
        <div className="flex flex-col space-y-8 text-center md:text-left items-center md:items-start">
          <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900">
            Portfolio
          </h1>
          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
            <strong>웹서버보안프로그래밍</strong> 강의를 기반으로
            제작되었습니다. Next.js의 풀스택 아키텍처 위에서 개발한 프로젝트와
            성장 과정을 담은 포트폴리오입니다.
          </p>
        </div>
      </div>

      {/* "Use Skill" 섹션 */}
      <div className="mt-24">
        <h2 className="text-center text-4xl font-bold mb-8 text-gray-900">
          Use Skill
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {skill.icon}
              <span className="font-semibold text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* "Call to Action" 섹션 */}
      <div className="mt-24 text-center bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900">더 자세히 알아보기</h2>
        <p className="text-gray-600 mt-2 mb-6">
          프로젝트가 궁금하거나 자세히 알고 싶다면 아래 버튼을 눌러주세요.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
          >
            My Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
