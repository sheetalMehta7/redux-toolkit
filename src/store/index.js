import { configureStore, createSlice} from "@reduxjs/toolkit";


const initialCounterState = {
    counter : 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
           state.counter++;
        },
        decrement(state){
           state.counter--;
        },
        increase(state, action){
           state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})


const authInitialState = {
    isAuthenticated: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }

})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
})

export const counterAction = counterSlice.actions;
export const authActions =  authSlice.actions;
export default store;


