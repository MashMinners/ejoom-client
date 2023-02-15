import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: () => ({
        //Хранилище записей
        records: [],
        employees: [],
        //Настройки поиска
        correspondenceTypeId: 1,
        searchType : "ByParams",
        //Текущее время
        currentDate: new Date().toISOString().slice(0, 10),
        //Диалоговые окна
        createRecordDialog: false,
        createEmployeeDialog: false,
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
                commit('GET_RECORDS', records)
            }
            catch (e) {
                console.log(e)
            }
            finally {

            }
        },
        async getEmployeesAction({state,commit}, payload){
            try{
                const params = {
                    search: payload
                }
                const response = await axios.get('http://192.168.0.10/employees?XDEBUG_SESSION_START=PHPSTORM', {params});
                const employees = response.data.employees ? response.data.employees : [] ;
                commit('SET_EMPLOYEES', employees)
            }
            catch (e){

            }
            finally {

            }
        },
        async createEmployee({state, commit}, employee){
            const stringified = (JSON.parse(JSON.stringify(employee)))
            console.log(stringified)
            commit('HIDE_CREATE_EMPLOYEE_DIALOG')
        }
    },
    mutations: {
        //API
        ['GET_RECORDS'](state, records){
            state.records = records
        },
        ['SET_EMPLOYEES'](state, employees){
            employees.forEach((element) => {
                element.employeeFullname = element.employeeSurname + ' ' + element.employeeFirstName + ' ' + element.employeeSecondName
            })
            state.employees = employees
        },
        //Диалоговые окна
        ['SHOW_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = true
        },
        ['SHOW_CREATE_EMPLOYEE_DIALOG'](state){
            state.createEmployeeDialog = true
        },
        ['HIDE_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = false
        },
        ['HIDE_CREATE_EMPLOYEE_DIALOG'](state){
            state.createEmployeeDialog = false
        },
        //Текст
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
        employees(state){
            return state.employees
        },
        currentDate(state){
            return state.currentDate
        },
        //Диалоговые окна
        createRecordDialog(state){
            return state.createRecordDialog
        },
        createEmployeeDialog(state){
            return state.createEmployeeDialog
        },
        EJournalText(state){
            return state.EJournalText
        }
    }
})