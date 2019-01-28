import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const store = {
    getState: jest.fn,
    subscribe: jest.fn,
    dispatch: jest.fn
  }
  const div = document.createElement('div')
  ReactDOM.render(<App store={store} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
