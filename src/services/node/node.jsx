const EXPENSES_URL = 'https://budget-app-aa.herokuapp.com/expenses'

const getExpenses = () => {
    return fetch(EXPENSES_URL)
}

export const serviceNode = {
    getExpenses
}