import Card from 'react-bootstrap/Card'
import Link from 'next/link'

const RecipeCard: React.FC<T.cardProps> = (props: T.cardProps) => {
  return (
    <Link href={{
      pathname: '/recipe/[recipeId]',
      query: {recipeId: 'a'}
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <hr></hr>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RecipeCard
