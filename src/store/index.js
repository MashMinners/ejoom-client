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
        startDate: '',
        endDate: '',
        employeeId: '',
        counterpartyId: '',
        //Даты и время
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
                //const stringified = (JSON.parse(JSON.stringify(payload)))
                console.log(payload)
                const params =  {
                    "searchType" : state.searchType  ? state.searchType : null,
                    "correspondenceTypeId" : state.correspondenceTypeId,
                    "searchString" : payload.searchString ? payload.searchString : null,//stringified.searchString ? stringified.searchString : null,
                    "startDate" : state.startDate ? state.startDate : null, //payload.startDate ? payload.startDate : null,//state.currentDate,
                    "endDate" : state.endDate ? state.endDate : null, //payload.endDate ? payload.endDate : null,
                    "employeeId" : state.employeeId ? state.employeeId : null,
                    "counterpartyId" : state.counterpartyId ? state.counterpartyId : null
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
            //commit('HIDE_CREATE_RECORD_DIALOG')
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
        },
        //Даты
        ['SET_DATES'](state, dates){
            state.startDate = dates.startDate;
            state.endDate = dates.endDate;
            /*let endDate = new Date();
            let startDate = new Date();
            switch (period){
                case 0 :
                    state.startDate = ''
                    state.endDate = ''
                    break;
                case 1 :
                    state.startDate = startDate.toISOString().slice(0, 10);
                    state.endDate = endDate.toISOString().slice(0, 10);
                    break;
                case 2 :
                    startDate.setDate((startDate.getDate() - 1));
                    state.startDate = startDate.toISOString().slice(0, 10);
                    state.endDate = endDate.toISOString().slice(0, 10);
                    break;
                case 3 :
                    startDate.setDate((startDate.getDate() - 2));
                    state.startDate = startDate.toISOString().slice(0, 10);
                    state.endDate = endDate.toISOString().slice(0, 10);
                    break;
                case 7 :
                    startDate.setDate((startDate.getDate() - 7));
                    state.startDate = startDate.toISOString().slice(0, 10);
                    state.endDate = endDate.toISOString().slice(0, 10);
                    break;
                case 30 :
                    startDate.setDate((startDate.getDate() - 30));
                    state.startDate = startDate.toISOString().slice(0, 10);
                    state.endDate = endDate.toISOString().slice(0, 10);
            }*/
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