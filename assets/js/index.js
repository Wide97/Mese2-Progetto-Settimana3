const getFootballer = function () {
    const URL = 'https://striveschool-api.herokuapp.com/api/product/';
    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk"
        }
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error in fetch call');
        }
    })
    .then((arrayOfCards) => {
        console.log(arrayOfCards);
        const cardsRow = document.getElementById('cards-row');
        arrayOfCards.forEach((card) => {
            const newCardCol = `
                <div class="col my-3">
                    <div class="card bg-success">
                        <img
                            src="${card.imageUrl}"
                            class="card-img-top custom-height"
                            alt="card pic"
                        />
                        <div class="card-body text-center">
                            <h5 class="card-title">${card.name}</h5>
                            <p class="card-text">${card.description}</p>
                            <p class="card-text">${card.brand}</p>
                            <p class="card-text">${card.price}</p>
                            <a href="./details.html?cardId=${card._id}" class="btn btn-primary w-100">Vai ai dettagli</a>
                        </div>
                    </div>
                </div>
            `;
            cardsRow.innerHTML += newCardCol;
        });
    })
    .catch((error) => {
        console.log('Error', error);
    });
}

getFootballer();