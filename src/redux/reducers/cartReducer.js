export const cartReducer = {
    getCarts(state){
        state.loading = true;
    },
    getCartSuccess(state , action){
        state.carts = action.payload[0]
        state.cartCount = action.payload[1]
        state.loading = false
        state.hasErrors = false
    },
    getCartFailure(state){
        state.loading = false;
        state.hasErrors = true;
    },
}