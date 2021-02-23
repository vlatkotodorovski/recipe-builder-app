import React, { useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { removeRecipe } from "../../store/actionCreators"
import { Wrapper } from './TableList.styles'
import { Dispatch } from "redux"
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import DeleteModal from '../DeleteModal/DeleteModal'


const TableList: React.FC = () => {
    const recipes: IRecipe[] = useSelector(

        (state: RecipeState) => state.recipes,
        shallowEqual
    )

    const [selectedRecipe, setSelectedRecipe] = useState<any>([])
    const [modalDetailsRecipe, setModalDetailsRecipe] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteSelectedRecipe, setDeleteSelectRecipe] = useState()

    const handleDeleteModal = (id: any): void => {
        setDeleteModal(!deleteModal)
        setDeleteSelectRecipe(id)
    }

    const handleModalDetailsRecipe = () => {
        setModalDetailsRecipe(!modalDetailsRecipe)
    }

    const dispatch: Dispatch<any> = useDispatch()

    const deleteRecipe = React.useCallback(
        (recipe: IRecipe) => dispatch(removeRecipe(recipe)),
        [dispatch]
    )


    const showListIngredients = (arr: any[]) => {

        let arrIng: any[] = []

        for (var i = 0; i < arr.length; i++) {
            var split = arr[i].split(" ");
            arrIng.push(split[0]);
        }

        if (arrIng.length > 3) {
            return arrIng.slice(0, 3).join(' ') + " ..."

        }
        else {
            return arrIng
        }
    }

    const countIngredients = (arr: any[]) => {
        return arr.length
    }


    // Check if charachters are more than 50, and last word is shown in full
    const checkTextArea = (text: string, limit: number) => {
        if (text.length > limit) {
            for (let i = limit; i > 0; i--) {
                if (text.charAt(i) === ' ' && (text.charAt(i - 1) !== ',' || text.charAt(i - 1) !== '.' || text.charAt(i - 1) !== ';')) {
                    return text.substring(0, i) + '...';
                }
            }
            return text.substring(0, limit) + '...';
        }
        else
            return text;
    };

    const detailsRecipeView = (recipeID: number) => {
        const recipeIDDetail = recipes.find(recipe => recipe.id === recipeID)
        setSelectedRecipe([recipeIDDetail])
        setModalDetailsRecipe(!modalDetailsRecipe)
    }

    return (
        <Wrapper>
            <div>
                <table>
                    <caption>Recipe List</caption>
                    <thead>
                        <tr>
                            <th>Recipe Id</th>
                            <th>Recipe Name</th>
                            <th>Recipe Source</th>
                            <th>Number of Ingredients</th>
                            <th>Ingredients</th>
                            <th>Preparation Time</th>
                            <th>Recipe Instructions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe: IRecipe) => (
                            <tr key={recipe.id}>
                                <td>{recipe.id}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.source}</td>
                                <td>{countIngredients(recipe.ingredients)}</td>
                                <td>{showListIngredients(recipe.ingredients)}</td>
                                <td>{recipe.prepTimeHour ? recipe.prepTime : recipe.prepTimeMinutes + "mins"}</td>
                                <td>{checkTextArea(recipe.instructions, 50)}</td>
                                <td id="table-btns">
                                    <button onClick={() => handleDeleteModal(recipe)}>DELETE</button>
                                    <button onClick={() => detailsRecipeView(recipe.id)}>VIEW</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {modalDetailsRecipe ? <RecipeDetails selectedRecipe={selectedRecipe} handleModalDetailsRecipe={handleModalDetailsRecipe} deleteRecipe={deleteRecipe} modalDetailsRecipe={modalDetailsRecipe} /> : null}

                {deleteModal ? <DeleteModal handleDeleteModal={handleDeleteModal} deleteRecipe={deleteRecipe} selectedRecipe={deleteSelectedRecipe} handleModalDetailsRecipe={handleModalDetailsRecipe} modalDetailsRecipe={modalDetailsRecipe} /> : null}

            </div>
        </Wrapper>

    )
}

export default TableList
