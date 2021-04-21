import Link from 'next/link'

const MainApp: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/" >Home</Link>
        </li>
        <li>
          <Link href="/hoge" as="/hoge">Hoge Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainApp