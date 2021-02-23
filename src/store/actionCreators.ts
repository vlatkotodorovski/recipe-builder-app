import {ADD_RECIPE , REMOVE_RECIPE } from './actionTypes';

export function addRecipe(recipe: IRecipe){
    const action: RecipeAction = {
        type: ADD_RECIPE,
        recipe,
    }
    return simulateHttpRequest(action)
}

export function removeRecipe(recipe: IRecipe){
    const action: RecipeAction = {
        type: REMOVE_RECIPE,
        recipe,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: RecipeAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }
