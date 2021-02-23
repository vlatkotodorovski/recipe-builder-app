import React from 'react'
import { Wrapper } from './DeleteModal.styles'




interface Props {
    handleDeleteModal: (arg: any) => void
    deleteRecipe: (recipe: any) => any
    handleModalDetailsRecipe: (recipe: any) => void

    selectedRecipe: any

    modalDetailsRecipe: any
}

const DeleteModal: React.FC<Props> = ({ handleDeleteModal, deleteRecipe, selectedRecipe, handleModalDetailsRecipe, modalDetailsRecipe }) => {

    const handleDeleteConfirm = () => {
        deleteRecipe(selectedRecipe)
        handleDeleteModal(false)
        if (modalDetailsRecipe) {
            handleModalDetailsRecipe(false)
        }
    }


    return (
        <Wrapper>
            <div className="delete-wrapper">
                <div className="delete-container">
                    <h1>Are You Sure You Want To Delete This Recipe</h1>
                    <div className="delete-modal-group-btn">
                        <button className="delete-btns" onClick={handleDeleteConfirm}>DELETE</button>
                        <button className="delete-btns" onClick={handleDeleteModal}>CANCEL</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default DeleteModal