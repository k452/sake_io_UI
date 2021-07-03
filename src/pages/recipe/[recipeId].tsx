import { useRouter } from 'next/router'

const Recipe: React.FC = () => {
  const router = useRouter()
  const recipeId = router.query.recipeId

  return (
    <div>
      <h1>recipeId: {recipeId}</h1>
    </div>
  )
}

export default Recipe