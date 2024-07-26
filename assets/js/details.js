
document.addEventListener('DOMContentLoaded', () => {
    const addressBarParameters = new URLSearchParams(location.search);
    const cardId = addressBarParameters.get('cardId');
    
    if (!cardId) {
        console.error("ID della card non trovato!");
        return;
    }

    const detailRow = document.getElementById('detail-row');

    fetch(`https://striveschool-api.herokuapp.com/api/product/${cardId}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk"
        }
    })
    .then(response => response.json())
    .then(cardEvent => {
        detailRow.innerHTML = `
            <div class="col-12 col-md-8 text-center">
                <div class="card pb-4">
                    <img src="${cardEvent.imageUrl}" class="card-img-top" alt="card">
                    <div class="card-body">
                        <h5 class="card-title">${cardEvent.name}</h5>
                        <p class="card-text">${cardEvent.description}</p>
                        <p class="card-text">${cardEvent.brand}</p>
                        <a href="#" class="btn btn-primary">${cardEvent.price}€ COMPRA</a>
                    </div>
                    <div class="border border-danger border-2 fit-content mx-auto p-3">
                        <h3>TASTI ADMIN</h3>
                        <div>
                            <a href="./backoffice.html?eventId=${cardEvent._id}" class="btn btn-warning">MODIFICA</a>
                            <button class="btn btn-danger" onclick="deleteEvent('${cardEvent._id}')">ELIMINA</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .catch(err => console.error("Errore nel caricamento dei dati della card:", err));
});


function deleteEvent(cardId) {
    const confirmDelete = confirm("Sei sicuro di voler eliminare questo elemento?");
    if (confirmDelete) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${cardId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Elemento eliminato con successo!");
                window.location.href = "index.html";
            } else {
                throw new Error("Errore nell'eliminazione");
            }
        })
        .catch(error => console.error("Errore:", error));
    }
}
