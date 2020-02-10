import React, { useState, useEffect } from 'react'
import * as S from './Style'
import { serviceNode } from '../../services/node/node'

import ItemDetails from '../ItemDetails/ItemDetails'
import Loader from '../Loader/Loader'
import Status from '../Status/Status'

const ListDetails = ({ }) => {
  const [expenseList, setExpenseList] = useState(undefined)
  

  useEffect(() => {
    serviceNode.getExpenses().then((response) => response.json())
    .then((data) => {
      setExpenseList(data)
    }).catch(error => {
      setExpenseList(false)
    })
  }, [])

  return(
    <>
      <S.Wrapper>
        <S.Headline>List of Expense</S.Headline>
        { expenseList === undefined ? <Loader /> : 
          expenseList === false ? <Status status={'error'} message={'Przepraszam poszło coś nie tak'} /> :
          expenseList.length === 0 ? <Status status={'error'} message={'Brak produktów'} /> : (
          <S.Table>
            <S.TableHead>
              <S.TableRow>
                {Object.keys(expenseList[0]).map((keyExpense) => (
                  <S.TableHeadline>
                    {keyExpense}
                  </S.TableHeadline>
                ))}
              </S.TableRow>
            </S.TableHead>
            <S.TableBody>
              {
                expenseList.map((expense) => (
                  <ItemDetails type="table" data={expense} />
                )) 
              }
              <S.TableRow>
              </S.TableRow>
            </S.TableBody>
          </S.Table>
        )}
      </S.Wrapper>
    </>
  )
}

export default ListDetails
