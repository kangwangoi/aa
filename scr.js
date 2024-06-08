const apiDataMusicURL = "https://www.steamwebapi.com/steam/api/items?key=AMVABEHZ4JS519DG&page=1&max=20&price_min=0&price_max=500000&=0&limit=20&numberOfTopResults=5"

const getData = async () => {
    try {
        await axios({
            method: 'get',
            url: apiDataMusicURL
          })
        .then(function (response) {
            //s
            const gamesDataArray = response.data
            console.log(gamesDataArray);
            const container = document.getElementById("bodycontainer")
            gamesDataArray.forEach((game) => {

                const albumCard = document.createElement('div')

                albumCard.className = "col-md-2 album-card"

                albumCard.innerHTML = `
                <div class="card">
                    <img src=${game.itemimage} style="width: 158px; padding: 10px 10px 0 10px;" >
                    <div class="card-body">
                    </div>
                </div>`

                container.appendChild(albumCard);
            })
            
        });
    }catch(errors) {
        console.log(errors);
    }
}
//jh
getData();  