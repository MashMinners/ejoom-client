import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: () => ({
        //Хранилище записей
        records: [],
        //Настройки поиска
        correspondenceTypeId: 1,
        searchType : "ByParams",
        //Текущее время
        currentDate: new Date().toISOString().slice(0, 10),
        //Диалоговые окна
        createRecordDialog: false,
        //
        EJournalText: 'Входящие Email'
    }),
    actions: {
        async getMails({state, commit}, payload){
            try {
                const stringified = (JSON.parse(JSON.stringify(payload)))
                const params =  {
                    "searchType" : state.searchType,
                    "correspondenceTypeId" : state.correspondenceTypeId,
                    "searchString" : stringified.searchString,
                    "startDate" : payload.startDate,
                    "endDate" : payload.endDate,
                    "employeeId" : payload.employeeId,
                    "counterpartyId" : payload.counterpartyId
                }
                //Бизнес логика
                const response = await axios.get('http://192.168.0.10/?XDEBUG_SESSION_START=PHPSTORM', {params});
                const records = response.data.results ? response.data.results : [] ;
                console.log(records)
                commit('GET_RECORDS', records)
            }
            catch (e) {
                console.log(e)
            }
            finally {

            }
        }
    },
    mutations: {
        ['GET_RECORDS'](state, records){
            state.records = records
        },
        ['SHOW_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = true
        },
        ['HIDE_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = false
        },
        ['SET_EJOURNAL_TEXT'](state, text){
            state.EJournalText = text
        },
        ['SET_EJOURNAL_TYPE'](state, id){
            state.correspondenceTypeId = id
        }

    },
    getters: {
        getCorrespondenceType(state){
            return state.correspondenceTypeId
        },
        records(state){
            return state.records
        },
        currentDate(state){
            return state.currentDate
        },
        createRecordDialog(state){
            return state.createRecordDialog
        },
        EJournalText(state){
            return state.EJournalText
        }
    }
})