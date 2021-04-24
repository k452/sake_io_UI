import Link from 'next/link'
import Header from 'pages/header'
import Footer from 'pages/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainApp: React.FC = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/hoge" as="/hoge">
            Hoge Page
          </Link>
        </li>
      </ul>
      <Footer />
    </div>
  )
}

export default MainApp
