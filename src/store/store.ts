import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import reducer from './reducer';

  export const store: Store<RecipeState, RecipeAction> & {
    dispatch: DispatchType
  } = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
  ))
