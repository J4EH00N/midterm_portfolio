export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>아래 연락처로 편하게 연락주세요.</p>
      <ul className="mt-4 space-y-2">
        <li>Email: your-email@example.com</li>
        <li>
          Github:{' '}
          <a
            href="https://github.com/your-github"
            className="text-blue-600 hover:underline"
          >
            github.com/your-github
          </a>
        </li>
      </ul>
    </div>
  )
}
