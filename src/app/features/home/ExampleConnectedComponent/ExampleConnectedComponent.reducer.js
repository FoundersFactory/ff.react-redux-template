const defaultState = {
  text: ''
}

const exampleComponent = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT':
            return { 
              ...state,
              text: action.text
            }
        default:
            return state
    }
}

export default exampleComponent