import { useRouter } from 'next/router'

const Recipe: React.FC = () => {
  const router = useRouter()
  
  return (
    <div>userId: {router.query.id}</div>
  )
}

export default Recipe