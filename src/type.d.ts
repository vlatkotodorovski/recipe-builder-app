interface IRecipe {
    id: number
    name: string
    source?: string
    ingredients: any
    prepTime: string
    prepTimeHour: number
    prepTimeMinutes: number
    instructions: string
    
}


type RecipeState = {
    recipes: IRecipe[]
}

type RecipeAction = {
    type: string
    recipe: IRecipe
}

type DispatchType = (args: RecipeAction) => RecipeAction