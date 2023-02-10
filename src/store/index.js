import {createStore} from "vuex";

export default createStore({
    state: {
        createRecordDialog: false
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        createRecordDialog(state){
            return state.createRecordDialog
        }
    }
})