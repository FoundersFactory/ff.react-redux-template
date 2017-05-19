import fetch from 'isomorphic-fetch'

function receivedItem(json) {
    return {
        type: 'RECEIVED_ITEM',
        json
    }
}

/*  EXAMPLE ACTION using fetch */
export function fetchItem() {
  return function (dispatch, getState) {
    const state = getState()
    const url = 'item'

    return fetch(url)
    .then(response => response.json())
    .then(json =>
        dispatch(receiveCars(json))
    )
  }
}
