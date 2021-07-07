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
      <Card
        style={{
          width: '18rem',
          height: '20rem',
          margin: '10px'
        }}
      >
        <Card.Img
          variant="top"
          src={props.imgSrc}
          style={{
            height: '15rem'
          }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RecipeCard
