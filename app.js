const redux =  require('redux')

// state default
const variable_awal = {
    value:0,
    umur:1
}

// reducer
const rootReducer = (state = variable_awal, action) => {
    switch(action.type) {
        case 'ADD' :
            return {
                ...state,
                umur: state.umur +1
            }
        case 'MIN' :
            return {
                ...state,
                umur: (state.umur <= 1) ? state.umur : state.umur -1
            }
        default :
             return state        
    }
 
}

// sotre

const store = redux.legacy_createStore(rootReducer)

console.log(store.getState())

store.subscribe(()=> {
    console.log('data berubah => '+ JSON.stringify(store.getState()))
})
store.dispatch({type:'ADD'})

store.dispatch({type:'MIN'})
store.dispatch({type:'MIN'})

// store.dispatch({type:'MIN'})



// dispacth