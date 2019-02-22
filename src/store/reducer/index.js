const defaultState={
    goodsList:[]
}
const reducers=(state=defaultState,action)=>{
    const {type,payload}=action
    switch(type){
        case 'UPDATE':
            return {...state,goodsList:payload}
        default:
            return state
    }
}

export default reducers