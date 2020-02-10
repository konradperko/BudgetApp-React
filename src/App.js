import React from 'react'
import logo from './assets/logo192.png'
import ExpenseForm from './components/expenseForm/expenseForm'

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', marginTop: 20 }}>
        <img src={logo} alt="logo"  />
      </header>
      <ExpenseForm />
    </div>
  )
}

export default App
