import { GetStaticProps } from 'next'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import RecipeCard from 'pages/components/recipeCard'
import { FC } from 'react'

const RecipeList: FC<GetStatic.rowedRecipesStatic> = ({ recipes }: GetStatic.rowedRecipesStatic) => {
  return (
    <>
      <h1>酒豪のレシピ</h1>
      <Container>
        {
          recipes.map((arr: API.recipe[], i: number) => (
            <Row
              key={i}
            >
              {
                arr.map((v: API.recipe, j: number) => (
                  <Col
                    key={j}
                    sm
                  >
                    <RecipeCard
                      title={v.title}
                      imgSrc={v.sumbnail}
                      text={v.text}
                      path={v.recipe_id.toString()}
                    />
                  </Col>
                ))
              }
            </Row>
          ))
        }
      </Container>
    </>
  )
}

export default RecipeList

const splitRecipes = (recipes: API.recipe[]) => {
  const rowNum = 3
  const resultArray: API.recipe[][] = []

  while (recipes.length != 0) {
    if (recipes.length > rowNum) {
      resultArray.push(recipes.splice(0, rowNum))
    } else {
      resultArray.push(recipes)
      recipes = []
    }
  }
  return resultArray
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_BASE}recipe`)
  const data = await res.json()
  const recipes = splitRecipes(data)

  return {
    props: {
      recipes
    },
    revalidate: 10
  }
}