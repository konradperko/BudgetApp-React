import React, { useState, useEffect } from 'react'
import * as S from './Style'
import { serviceNode } from '../../services/node/node'

import ItemDetails from '../ItemDetails/ItemDetails'
import Loader from '../Loader/Loader'
import Status from '../Status/Status'

const ListDetails = () => {
  const [expenseList, setExpenseList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  
  useEffect(() => {
    if(loading) {
      (async () => {
        try {
          const result = await serviceNode.getExpenses().then(data => (data.json()))
          setLoading(false)
          setExpenseList(result)
        } catch (error) {
          setErrors(true);
        }
      })()
    }
  }, [loading])

  return(
    <>
      <S.Headline>List of Expense</S.Headline>
      { loading ? <Loader /> : 
        errors ? <Status status={'error'} message={errors.message} /> :
        expenseList.length === 0  ? <Status status={'error'} message={'Brak produktów'} /> : (
        <S.Table>
          <S.TableHead>
            <S.TableRow>
                <S.TableHeadline>
                  Nazwa 
                </S.TableHeadline>
                <S.TableHeadline>
                  Koszty 
                </S.TableHeadline>
                <S.TableHeadline>
                  Data 
                </S.TableHeadline>
                <S.TableHeadline>
                  Kategoria 
                </S.TableHeadline>
            </S.TableRow>
          </S.TableHead>
          <S.TableBody>
            {
              expenseList.map((expense) => (
                <ItemDetails key={expense._id} type="table" data={expense} />
              )) 
            }
            <S.TableRow>
            </S.TableRow>
          </S.TableBody>
        </S.Table>
      )}
    </>
  )
}

export default ListDetails