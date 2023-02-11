import {createStore} from "vuex";

export default createStore({
    state: () => ({
        //Диалоговые окна
        createRecordDialog: false,
        //
        EJournalText: 'Входящие Email'
    }),
    actions: {

    },
    mutations: {
        ['SHOW_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = true
        },
        ['HIDE_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = false
        },
        ['SET_EJOURNAL_TEXT'](state, text){
            state.EJournalText = text
        }

    },
    getters: {
        createRecordDialog(state){
            return state.createRecordDialog
        },
        EJournalText(state){
            return state.EJournalText
        }
    }
})