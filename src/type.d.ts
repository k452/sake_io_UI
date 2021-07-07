declare namespace Props {
  type cardProps = {
    title: string
    imgSrc: string
    text: string
    path: string
  }
}
declare namespace GetStatic {
  type recipesStatic = {
    recipes: API.recipe[]
  }
  type rowedRecipesStatic = {
    recipes: API.recipe[][]
  }
}
declare namespace API {
  type recipe = {
    recipe_id: number
    user_id: number
    title: string
    text: string
    sumbnail: string
    creaed_at: string
    updated_At: string
  }
}
