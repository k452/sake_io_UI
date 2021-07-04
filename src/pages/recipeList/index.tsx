import { GetStaticProps } from 'next'
import Container from 'react-bootstrap/Container'
import RecipeCard from 'pages/components/recipeCard'
import { FC } from 'react'

const RecipeList: FC<GetStatic.recipesStatic> = ({recipes}: GetStatic.recipesStatic) => {
  return (
    <div>
      <h1>酒豪のレシピ</h1>
      {recipes.map((v: API.recipe) => (
        <Container key={v.recipe_id}>
          <RecipeCard
            title={v.title}
            imgSrc={v.sumbnail}
            text={v.text}
            path={v.recipe_id.toString()}
          />
        </Container>
      ))}
    </div>
  )
}

export default RecipeList

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_BASE}recipe`)
  const recipes = await res.json()

  return {
    props: {
      recipes
    },
    revalidate: 600,
  }
}