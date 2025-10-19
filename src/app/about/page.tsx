import Image from 'next/image'
import {
  FaGithub,
  FaUserTie,
  FaCode,
  FaBirthdayCake,
  FaInstagram,
} from 'react-icons/fa'
import { SiTistory } from 'react-icons/si'

const MbtiBar = ({
  label,
  value,
}: {
  label: [string, string]
  value: number
}) => (
  <div className="w-full">
    <div className="flex justify-between mb-1 text-sm text-gray-500 font-medium">
      <span>{label[0]}</span>
      <span>{label[1]}</span>
    </div>
    <div className="relative w-full h-2">
      <div className="w-full bg-gray-200 rounded-full h-2 absolute top-0 left-0"></div>
      <div
        className="bg-gray-700 h-2 rounded-full absolute top-0 left-0"
        style={{ width: `${value}%` }}
      ></div>
      <div
        className="w-5 h-5 bg-gray-700 border-2 border-white rounded-full absolute top-1/2 -translate-y-1/2 shadow-md"
        style={{ left: `${value}%`, transform: 'translateX(-50%)' }}
      ></div>
    </div>
  </div>
)

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12 bg-white p-8 rounded-2xl shadow-lg">
        <Image
          src="/profile.png"
          alt="Sim Jaehun Profile"
          width={180}
          height={180}
          className="rounded-full object-cover object-top aspect-square flex-shrink-0"
          priority
        />
        <div className="flex flex-col gap-4 w-full text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">Sim Jaehun</h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-600 text-lg">
            <div className="flex items-center gap-2">
              <FaUserTie className="text-gray-500" />
              <span>SCP 학습부장</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-gray-500" />
              <span>Pwnable / Network</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBirthdayCake className="text-gray-500" />
              <span>2003.09.28</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://github.com/J4EH00N"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://sjh4ck3r.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <SiTistory size={26} />
            </a>
            <a
              href="https://www.instagram.com/s._.jhoon/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {' '}
        {/* == 1열 == */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              License
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>2021.10.</strong> 정보처리기사
              </li>
              <li>
                <strong>2021.09.</strong> 정보기기운용기능사
              </li>
              <li>
                <strong>2020.12.</strong> 네트워크관리사 2급
              </li>
              <li>
                <strong>2020.08.</strong> DIAT-인터넷정보검색
              </li>
              <li>
                <strong>2020.07.</strong> 리눅스마스터 2급
              </li>
              <li>
                <strong>2019.12.</strong> 워드프로세서 2급
              </li>
              <li>
                <strong>2016.01.</strong> GTQ그래픽기술자격 2급
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              {' '}
              Education
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>2022.03~</strong> 중부대학교 정보보호학전공
              </li>
              <li>
                <strong>2023.06~07</strong> 공군정보통신학교
              </li>
              <li>
                <strong>2019.03~22.01</strong> 삼일공업고등학교 정보통신과
              </li>
            </ul>
          </div>
        </div>
        {/* == 2열 == */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Experience
            </h2>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li>
                <strong>22.06.</strong> SCP 내부 해커톤 (File Password Cracking)
              </li>
              <li>
                <strong>22.09 - 12.</strong> SCP Python Toy Project (Backdoor
                제작)
              </li>
              <li>
                <strong>22.07 - 10.</strong> JBUCTF 2022 문제 출제
              </li>
              <li>
                <strong>23 - 25.</strong> 사이버작전사령부 경진대회 참가
              </li>
              <li>
                <strong>23 - 25.</strong> 정보통신경연대회 참가
              </li>
              <li>
                <strong>25.04.</strong> 2025 HackTheon 참가
              </li>
              <li>
                <strong>25.08.</strong> 2025 CCE 예선 참가
              </li>
              <li>
                <strong>25.07 ~ 08.</strong> HackIn (Pwn CTF 아카이빙 사이트
                제작)
              </li>
              <li>
                <strong>25.08.</strong> 제31회 해킹캠프 참가
              </li>
              <li>
                <strong>25.07 - 10.</strong> JBUCTF 2025 문제 출제
              </li>
            </ul>
          </div>
        </div>
        {/* == 3열 == */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">MBTI</h2>
            </div>
            <div className="flex justify-center mb-6">
              <Image
                src="/ESTJ.png"
                alt="MBTI Avatar"
                width={200}
                height={10}
              />
            </div>
            <div className="space-y-20">
              <MbtiBar label={['Extraversion', 'Introversion']} value={40} />
              <MbtiBar label={['Sensing', 'iNtuition']} value={15} />
              <MbtiBar label={['Thinking', 'Feeling']} value={10} />
              <MbtiBar label={['Judging', 'Perceiving']} value={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
