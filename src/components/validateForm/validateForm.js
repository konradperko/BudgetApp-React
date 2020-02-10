export default function validateAuth(values) {
  let errors = {}
  //cost
  if(!values.cost) {
    errors.cost = "Podaj kwotę zakupu"
  } else if(isNaN(values.cost)) {
    errors.cost = "Koszt musi byc liczbą"
  } else if(values.cost < 0) {
    errors.cost = "Kwota nie może być ujemna"
  }
  //category
  if(!values.category) {
    errors.category = "Podaj kategorię"
  } else if (values.category.length < 2) {
    errors.category = "Kategorię musi zawierać conajmniej 2 znaki"
  }
  //date
  if(!values.date) {
    errors.date = "Podaj datę"
  }

  return errors
}
