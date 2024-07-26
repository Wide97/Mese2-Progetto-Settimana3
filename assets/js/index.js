const getFootballer = function (){
    const URL= 'https://striveschool-api.herokuapp.com/api/product/'
    fetch (URL), {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjE5ODQ3MTMsImV4cCI6MTcyMzE5NDMxM30.I3DxQ3DSOoZgqHELivC9OIeUEaagyAmOZ2PCMKFHUGk"
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
}
