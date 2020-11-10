export default (state, payload) => {
    switch (payload.type) {
        case 'malumot':
            return {
                ...state,
                productList:[...payload.malumot]
            };
        default:
            return {
                ...state
            }
    }
}