import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

const Recipe: React.FC<GetStatic.recipesStatic> = ({recipes}: GetStatic.recipesStatic) => {
  return (
    <>
      <h1>{recipes[0].title}</h1>
      <Image src={recipes[0].sumbnail.toString()} width={200} height={200} />
      <p>{recipes[0].text}</p>
    </>
  )
}

export default Recipe

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_BASE}recipe`)
  const posts: API.recipe[] = await res.json()  
  const paths = posts.map((post: API.recipe) => ({
    params: {
      recipeId: post.recipe_id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const res = await fetch(`${process.env.API_BASE}recipe/${params.recipeId}`)
  const recipes: API.recipe[] = await res.json()

  return {
    props: {
      recipes
    },
    revalidate: 600
  }
}