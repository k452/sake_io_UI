import Card from 'react-bootstrap/Card'

const RecipeCard: React.FC<T.cardProps> = (props: T.cardProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <hr></hr>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RecipeCard
