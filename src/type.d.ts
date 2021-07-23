declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
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

declare namespace Form {
  type signin = {
    mail: string
    pass: string
  }
  type signup = {
    name: string
    mail: string
    pass: string
    pass2: string
  }
}
