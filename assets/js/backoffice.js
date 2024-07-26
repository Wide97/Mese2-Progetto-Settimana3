const cardId = new URLSearchParams(location.search).get('cardId');
console.log('CARDID', cardId);

if (cardId) {
  fetch('https://striveschool-api.herokuapp.com/api/product/' + cardId, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk"
      
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nel recupero della card')
      }
    })
    .then((singleCard) => {
      console.log('SINGLECARD', singleCard)
      document.getElementById('name').value = singleCard.name
      document.getElementById('role').value = singleCard.description
      document.getElementById('team').value = singleCard.time
      document.getElementById('price').value = singleCard.price
      document.getElementById('imgFootballer').value = singleCard.imgFootballer

    })
    .catch((err) => {
      console.log(err)
    })
}

class Card {
  constructor(_name, _role, _team, _price, _imgFootballer) {
    this.name = _name
    this.role = _role
    this.team = _team
    this.price = _price
    this.imgFootballer = _imgFootballer
  }
}

const cardForm = document.getElementById('card-form')
cardForm.addEventListener('submit', function (e) {
  e.preventDefault() 
  const nameInput = document.getElementById('name')
  const roleInput = document.getElementById('role')
  const teamInput = document.getElementById('team')
  const priceInput = document.getElementById('price')
  const imgFootballerInput = document.getElementById('imgFootballer')

  console.log('nameInput', nameInput)


  const nameValue = nameInput.value
  const roleValue = roleInput.value
  const teamValue = teamInput.value
  const priceValue = priceInput.value
  const imgFootballerValue = imgFootballerInput.value

  const newCard = new Card(
    nameValue,
    roleValue,
    teamValue,
    priceValue,
    imgFootballerValue
  )

  let methodToUse
  if (cardId) {
    methodToUse = 'PUT'
  } else {
    methodToUse = 'POST'
  }

  const URL = 'https://striveschool-api.herokuapp.com/api/product/'

  let URLToUse
  if (cardId) {
    URLToUse = URL + cardId
  } else {
    URLToUse = URL
  }

  fetch(URLToUse, {
    method: methodToUse,
    
    body: JSON.stringify(newCard), 
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk",
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        alert('CARD SALVATA!')
      } else {
        alert('ERRORE NEL SALVATAGGIO!')
        throw new Error('Errore nel salvataggio della card')
      }
    })
    .catch((err) => {
      console.log('ERRORE', err)
    })
})