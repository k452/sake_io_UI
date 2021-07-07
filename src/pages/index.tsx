import Link from 'next/link'

const MainApp: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/" as="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/recipeList" as="/recipeList">
            酒豪のレシピ
          </Link>
        </li>
      </ul>
    </>
  )
}

export default MainApp
