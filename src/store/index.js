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
        createCounterpartyDialog: false,
        //
        EJournalText: 'Входящие Email'
    }),
    actions: {
        async getMails({state, commit}, payload){
            try {
                const stringified = (JSON.parse(JSON.stringify(payload)))
                const params =  {
                    "searchType" : state.searchType  ? state.searchType : null,
                    "correspondenceTypeId" : state.correspondenceTypeId,
                    "searchString" : stringified.searchString ? stringified.searchString : null,
                    "startDate" : payload.startDate ? payload.startDate : state.currentDate,
                    "endDate" : payload.endDate ? payload.endDate : null,
                    "employeeId" : payload.employeeId ? payload.employeeId : null,
                    "counterpartyId" : payload.counterpartyId ? payload.counterpartyId : null
                }
                //Бизнес логика
                const response = await axios.get('http://192.168.0.10/records?XDEBUG_SESSION_START=PHPSTORM', {params});
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
            const response = await axios.post('http://192.168.0.10/employees?XDEBUG_SESSION_START=PHPSTORM', stringified)
            commit('HIDE_CREATE_EMPLOYEE_DIALOG')
        },
        async getCounterpartiesAction({state,commit}, payload){
            try{
                const params = {
                    search: payload
                }
                const response = await axios.get('http://192.168.0.10/counterparties?XDEBUG_SESSION_START=PHPSTORM', {params});
                const counterparties = response.data.counterparties ? response.data.counterparties : [] ;
                commit('SET_COUNTERPARTIES', counterparties)
            }
            catch (e){

            }
            finally {

            }
        },
        async createCounterpartyAction({state, commit}, employee){
            const stringified = (JSON.parse(JSON.stringify(employee)))
            const response = await axios.post('http://192.168.0.10/counterparties?XDEBUG_SESSION_START=PHPSTORM', stringified)
            commit('HIDE_CREATE_COUNTERPARTY_DIALOG')
        },
        async addRecordAction({state, commit}, payload){
            const stringified = (JSON.parse(JSON.stringify(payload)))
            const record = {
                letterNumber: stringified.record.letterNumber,
                letterHeader: stringified.record.letterHeader,
                additionally: stringified.record.additionally,
                registrationDate: stringified.record.registrationDate,
                employeeId: stringified.employee.employeeId,
                counterpartyId: stringified.counterparty.counterpartyId,
                correspondenceTypeId: state.correspondenceTypeId
            }
            const response = await axios.post('http://192.168.0.10/records?XDEBUG_SESSION_START=PHPSTORM', record)
            console.log(response)
            commit('HIDE_CREATE_RECORD_DIALOG')
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
        ['SET_COUNTERPARTIES'](state, counterparties){
            //employees.forEach((element) => {
                //element.employeeFullname = element.employeeSurname + ' ' + element.employeeFirstName + ' ' + element.employeeSecondName
            //})
            state.counterparties = counterparties
        },
        //Диалоговые окна
        ['SHOW_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = true
        },
        ['SHOW_CREATE_EMPLOYEE_DIALOG'](state){
            state.createEmployeeDialog = true
        },
        ['SHOW_CREATE_COUNTERPARTY_DIALOG'](state){
            state.createCounterpartyDialog = true
        },
        ['HIDE_CREATE_RECORD_DIALOG'](state){
            state.createRecordDialog = false
        },
        ['HIDE_CREATE_EMPLOYEE_DIALOG'](state){
            state.createEmployeeDialog = false
        },
        ['HIDE_CREATE_COUNTERPARTY_DIALOG'](state){
            state.createCounterpartyDialog = false
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
        counterparties(state){
            return state.counterparties
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
        createCounterpartyDialog(state){
            return state.createCounterpartyDialog
        },
        EJournalText(state){
            return state.EJournalText
        }
    }
})