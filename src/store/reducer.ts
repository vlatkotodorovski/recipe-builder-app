import {ADD_RECIPE , REMOVE_RECIPE } from './actionTypes';

const initialState: RecipeState = {
    recipes: []
}

const reducer = (
    state: RecipeState = initialState,
    action: RecipeAction
): RecipeState => {
    switch (action.type) {

        case ADD_RECIPE:
            const newRecipe = {
            id:Math.floor(Math.random() * 100000),
            name: action.recipe.name,
            source: action.recipe.source,
            ingredients: action.recipe.ingredients,
            prepTime: `${action.recipe.prepTimeHour}h , ${action.recipe.prepTimeMinutes}min`,
            prepTimeHour: action.recipe.prepTimeHour,
            prepTimeMinutes: action.recipe.prepTimeMinutes,
            instructions: action.recipe.instructions
        }
        return {
            ...state,
            recipes: state.recipes.concat(newRecipe),
        }
        case REMOVE_RECIPE:
            const updatedRecipes: IRecipe[] = state.recipes.filter(
                recipe => recipe.id !== action.recipe.id
            )
            return {
                ...state,
                recipes: updatedRecipes,
            }

    }
    
    return state
}

export default reducer