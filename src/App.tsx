import React, { useState } from 'react';
import { Wrapper } from './App.styles'

import { useDispatch } from "react-redux"

import RecipeEntry from "./components/RecipeEntry/RecipeEntry"
import { addRecipe } from "./store/actionCreators"
import { Dispatch } from "redux"
import TableList from './components/TableList/TableList';

const App: React.FC = () => {
  const [modalEntryRecipe, setModalEntryRecipe] = useState(false)

  const handleModalEntryRecipe = () => {
    setModalEntryRecipe(!modalEntryRecipe)
  }

  const dispatch: Dispatch<any> = useDispatch()

  const saveRecipe = React.useCallback(
    (recipe: IRecipe) => dispatch(addRecipe(recipe)),
    [dispatch]
  )

  return (
    <Wrapper>
      <div className="App">
        <main>
          <h1>Recipe App</h1>
          <div>
            <button className="btn-add-new-recipe" onClick={handleModalEntryRecipe}> ADD NEW RECIPE</button>
          </div>
          {modalEntryRecipe ? <RecipeEntry saveRecipe={saveRecipe} handleModalEntryRecipe={handleModalEntryRecipe} /> : null}
          <TableList />
        </main>
      </div>
    </Wrapper>
  );
}

export default App;
