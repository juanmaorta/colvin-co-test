import { createStore } from 'redux'
import reducers from './reducers'
import { loadState, saveState } from './util/localStorage'

const persistedState = loadState()

const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    cards: store.getState().cards
  })
})

export default store
