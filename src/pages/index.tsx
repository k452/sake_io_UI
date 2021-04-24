import Link from 'next/link'
import Header from 'pages/header'

const MainApp: React.FC = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link href="/" as="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/recipe" as="/recipe">
            酒豪のレシピ
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MainApp
