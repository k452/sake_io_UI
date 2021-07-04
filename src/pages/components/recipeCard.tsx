import Card from 'react-bootstrap/Card'
import Link from 'next/link'

const RecipeCard: React.FC<Props.cardProps> = (props: Props.cardProps) => {
  return (
    <Link href={{
      pathname: '/recipe/[recipeId]',
      query: {
        recipeId: props.path
      }
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
