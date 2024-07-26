const getFootballer = function (){
    const URL= 'https://striveschool-api.herokuapp.com/api/product/'
    fetch (URL), {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk"
        }
    }
    .then((response)=> {
        console.log(response)
        if(response.ok){
            return response.json()
        } else {
            throw new Error('errore nella chiamata');
        }
    })
    .catch((error) =>{
        console.log ('errore', error)
    })
    .then((arrayOfCards) =>{
        console.log(arrayOfCards)
        arrayOfCards.forEach((card) => {
            const newCardCol = `
                <div class="col">
                    <div class="card">
                        <img
                            src="${card.img}"
                            class="card-img-top"
                            alt="card pic"
                        />
                        <div class="card-body text-center">
                            <h5 class="card-title">${card.name}</h5>
                            <p class="card-text">${card.role}</p>
                            <p class="card-text">${card.team}</p>
                            <p class="card-text">${card.price}</p>
                            <a href="./details.html?cardId=${card._id}" class="btn btn-primary w-100">Vai ai dettagli</a>
                        </div>
                    </div>
                </div>
                `
            const cardsRow = document.getElementById('cards-row')
            cardsRow.innerHTML = cardsRow.innerHTML + newCardCol
          })
    })
}
