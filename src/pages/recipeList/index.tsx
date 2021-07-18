import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'

const RecipeList: FC<GetStatic.recipesStatic> = ({ recipes }: GetStatic.recipesStatic) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">酒豪のレシピ</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">全国の酒豪が投稿した酒の調合</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            recipes.map((v: API.recipe) => (
              <Link
                key={v.recipe_id}
                href={{
                  pathname: '/recipe/[recipeId]',
                  query: {
                    recipeId: v.recipe_id
                  }
                }}
              >
                <div className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img alt={v.title} className="h-40 rounded w-full object-cover object-center mb-6" src={v.sumbnail} />
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{v.title}</h2>
                      <p className="leading-relaxed text-base">{v.text.substr(0, 60) + '...'}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
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
    revalidate: 600
  }
}