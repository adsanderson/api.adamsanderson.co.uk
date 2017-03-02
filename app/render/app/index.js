const renderToString = require('react-dom/server').renderToString
const React = require('react')

function handleRender () {
  // // Create a new Redux store instance
  // const store = createStore(counterApp)

  // Render the component to a string
  const html = renderToString(
    React.DOM.div(null, 'Hello World!')
  )

  // Grab the initial state from our Redux store
  // const initialState = store.getState();

  // Send the rendered page back to the client
  return html
}

module.exports = handleRender
