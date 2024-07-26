
const addressBarParameters = new URLSearchParams(location.search)
const cardId = addressBarParameters.get('cardId')
console.log('cardId', cardId)

const agendaURL = 'https://striveschool-api.herokuapp.com/api/product/'

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

.then((cardEvent) => {

    console.log(cardEvent)

    const detailRow = document.getElementById('detail-row')

    detailRow.innerHTML = `

        <div class="col-12 col-md-8 text-center">

            <div class="card pb-4">

            <img src="${cardEvent.img}" class="card-img-top" alt="card">

            <div class="card-body">

                <h5 class="card-title">${cardEvent.name}</h5>

                <p class="card-text">${cardEvent.role}</p>

                <p class="card-text">${cardEvent.team}</p>

                <a href="#" class="btn btn-primary">${cardEvent.price}€ COMPRA</a>

            </div>

                <div class="border border-danger border-2 fit-content mx-auto p-3">

                    <h3>TASTI ADMIN</h3>

                    <div>

                        <a href="./backoffice.html?eventId=${cardEvent._id}" class="btn btn-warning">MODIFICA</a>

                        <button class="btn btn-danger" onclick="deleteEvent()">ELIMINA</button>

                    </div>

                </div>cardId

            </div>

        </div>

    `

  })

.catch((err) => {

  console.log(err)

})