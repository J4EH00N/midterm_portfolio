export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: '팀 프로젝트: 쇼핑몰',
      description: 'Next.js와 MongoDB를 활용한 풀스택 쇼핑몰 프로젝트입니다.',
    },
    {
      id: 2,
      title: '개인 프로젝트: 블로그',
      description: 'TypeScript와 Tailwind CSS로 만든 개인 기술 블로그입니다.',
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
