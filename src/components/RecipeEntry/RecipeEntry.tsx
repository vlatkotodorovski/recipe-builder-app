import React, { useState } from 'react';
import { Wrapper } from './RecipeEntry.styles'
import { FaWindowClose } from "react-icons/fa";

type Props = {
    saveRecipe: (recipe: IRecipe | any) => void
    handleModalEntryRecipe: () => void
}

const RecipeEntry: React.FC<Props> = ({ saveRecipe, handleModalEntryRecipe }) => {
    const [recipe, setRecipe] = useState<IRecipe | {}>()
    const [inputList, setInputList] = useState([{ ingredientName: "", ingredientQuantity: "" }]);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>, index: number) => {
        const { name, value } = e.currentTarget;
        const list: any = [...inputList];
        list[index][name] = value;

        let result = list.map((a: any) => `${a.ingredientName}, ${a.ingredientQuantity}; `)

        setInputList(list);
        setRecipe({
            ...recipe,
            ingredients: result

        })

    };


    // handle click event of the Remove button
    const handleRemoveClick = (index: number) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { ingredientName: "", ingredientQuantity: "" }]);
    };


    const handleRecipeData = (e: React.FormEvent<HTMLInputElement>) => {

        setRecipe({
            ...recipe,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const handleRecipeDataTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setRecipe({
            ...recipe,
            [e.currentTarget.id]: e.currentTarget.value,

        })
    }

    const addNewRecipe = (e: React.FormEvent) => {
        e.preventDefault()
        saveRecipe(recipe)
        handleModalEntryRecipe()
    }


    return (
        <Wrapper>
            <div className="form-wrapper">
                <div className="form-container">
                    <form onSubmit={addNewRecipe}>
                        <div className="btn-close-recipeEntry">
                            <button onClick={handleModalEntryRecipe}><FaWindowClose size='30px' /></button>
                        </div>
                        <div className="form-content">
                            <div className="form-left">
                                <h1>RECIPE DATA</h1>
                                <div className="recipe-name">
                                    <label htmlFor="name">Enter Recipe Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        id="name"
                                        placeholder="Recipe Name"
                                        onChange={handleRecipeData}
                                    />
                                </div>
                                <div className="recipe-source">
                                    <label htmlFor="source">Enter Recipe Source</label>
                                    <input
                                        type="text"
                                        id="source"
                                        placeholder="Recipe Source"
                                        onChange={handleRecipeData}
                                    />
                                </div>

                                <div className="prepTime">
                                    <label>Enter Preparation Time</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="24"
                                        id="prepTimeHour"
                                        placeholder="Hours"
                                        onChange={handleRecipeData}

                                    />
                                    <input
                                        required
                                        type="number"
                                        min="1" max="60"
                                        id="prepTimeMinutes"
                                        placeholder="Minutes"
                                        onChange={handleRecipeData}

                                    />
                                </div>
                                <div className="prep-instruction">
                                    <label htmlFor="instruction">Enter Preparation Instructions</label>
                                    <textarea
                                        rows={7}
                                        cols={50}
                                        required
                                        id="instructions"
                                        placeholder="Instructions"
                                        onChange={handleRecipeDataTextarea}
                                    />
                                </div>
                            </div>
                            <div className="form-right">
                                <h1>INGREDIENTS</h1>

                                {inputList.map((x, i) => {
                                    return (
                                        <div className="ingredients" id="ingredients">
                                            <div className="ingredients-entry">
                                                <label>Ingredient</label>
                                                <select required name="ingredientName" id="ingredientName" onChange={e => handleInputChange(e, i)}>
                                                    <option disabled selected value=""></option>
                                                    <option value="flour">Flour</option>
                                                    <option value="milk">Milk</option>
                                                    <option value="oil">Oil</option>
                                                    <option value="salt">Salt</option>
                                                    <option value="sugar">Sugar</option>
                                                    <option value="eggs">Eggs</option>
                                                    <option value="tomatoes">Tomatoes</option>
                                                    <option value="peppers">Peppers</option>
                                                    <option value="cheese">Cheese</option>
                                                    <option value="potatoes">Potatoes</option>
                                                    <option value="meat">Meat</option>
                                                </select>
                                                <label>Quantity</label>
                                                <input
                                                    required
                                                    type="number"
                                                    name="ingredientQuantity"
                                                    placeholder="Enter Quantity"
                                                    value={x.ingredientQuantity}
                                                    onChange={e => handleInputChange(e, i)}
                                                />
                                                <div >
                                                    {inputList.length !== 1 && <button
                                                        className="btn-remove-ingredient"
                                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                </div>
                                            </div>
                                            <div >
                                                {inputList.length - 1 === i && <button className="btn-add-ingredient" onClick={handleAddClick}>Add New Ingredient</button>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button className="btn-add-recipe" disabled={recipe === undefined ? true : false}>
                            Add Recipe
                </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default RecipeEntry
