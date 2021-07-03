import Container from 'react-bootstrap/Container'
import RecipeCard from 'pages/components/recipeCard'

const RecipeList: React.FC = () => {
  return (
    <div>
      <h1>酒豪のレシピ</h1>
      <Container>
        <RecipeCard
          title="グレンフィディック"
          imgSrc="https://media.glenfiddich.com/assets/Uploads/Flagship2019/glenfiddich-12-year-old-tile.jpg"
          text="グレンフィディック12年のトゥワイスアップの究極のレシピを紹介!..."
        />
      </Container>
    </div>
  )
}

export default RecipeList
