export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p>
        저는 웹 개발에 대한 열정을 가지고 있으며, 특히 React와 Next.js를
        사용하여 사용자 친화적인 인터페이스를 만드는 것을 좋아합니다.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">My Skills</h2>
      <ul className="list-disc list-inside">
        <li>React & Next.js</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    </div>
  )
}
