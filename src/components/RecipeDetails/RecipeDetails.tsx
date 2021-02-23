import React, { useState } from 'react'
import { Wrapper } from './RecipeDetails.styles'
import { FaWindowClose } from "react-icons/fa";
import DeleteModal from '../DeleteModal/DeleteModal'


interface Props {
    selectedRecipe: []
    handleModalDetailsRecipe: () => void
    deleteRecipe: (recipe: IRecipe) => void
    modalDetailsRecipe: any
}

const RecipeDetails: React.FC<Props> = ({ selectedRecipe, handleModalDetailsRecipe, deleteRecipe, modalDetailsRecipe }) => {

    const [deleteModal, setDeleteModal] = useState(false)

    const handleDeleteModal = (): void => {
        setDeleteModal(!deleteModal)
    }

    return (
        <Wrapper>
            <div className="details-wrapper">
                <div className="details-container">
                    {selectedRecipe.map((selectedRecipe: any) => (
                        <div>
                            <div className="btn-close-details-modal">
                                <button onClick={handleModalDetailsRecipe}><FaWindowClose size='40px' /></button>
                            </div>
                            <div className="details-content">
                                <div className="left-details">
                                    <p><b>Recipe Name: </b>{selectedRecipe.name}</p>
                                    <p><b>Recipe Source: </b>{selectedRecipe.source}</p>
                                    <p><b>Ingredients + Quantity: </b>{selectedRecipe.ingredients}</p>
                                    <p><b>Preparation Time: </b> {selectedRecipe.prepTimeHour ? selectedRecipe.prepTime : selectedRecipe.prepTimeMinutes + "mins"}</p>
                                    <div className="delete-recipe-from-details">
                                        <button onClick={handleDeleteModal}>DELETE RECIPE</button>
                                    </div>
                                </div>
                                <div className="right-details">
                                    <p><b>Instructions: </b>{selectedRecipe.instructions}</p>
                                </div>

                                {deleteModal ? <DeleteModal handleDeleteModal={handleDeleteModal} selectedRecipe={selectedRecipe} deleteRecipe={deleteRecipe} handleModalDetailsRecipe={handleModalDetailsRecipe} modalDetailsRecipe={modalDetailsRecipe} /> : null}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Wrapper>
    )
}

export default RecipeDetails
