import Link from 'next/link'

const Recipe: React.FC = () => {
  return (
    <>
      <Link href={{
        pathname: '/recipe/[recipeId]',
        query: {recipeId: 'a'}
      }}>
        <a>RecipeDynamic</a>
      </Link>
    </>
  )
}

export default Recipe