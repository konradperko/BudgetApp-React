import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ListDetails from '../ListDetails/ListDetails'

const Layout = () => {
  return(
    <>
      <Header />
      <ExpenseForm />
      <ListDetails />
      <Footer />
    </>
  )
}

export default Layout