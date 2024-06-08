const apiDataMusicURL = "https://www.steamwebapi.com/steam/api/items?key=AMVABEHZ4JS519DG&page=1&max=50&price_min=0&price_max=500000&=0&limit=20&numberOfTopResults=5"

const getData = async () => {
    try {
        await axios({
            method: 'get',
            url: apiDataMusicURL
          })
        .then(function (response) {
            //sua lai dong nay
            const gamesDataArray = response.data.albums.items
            
            const container = document.getElementById("bodycontainer")
            gamesDataArray.forEach((album) => {

                const data = album.data


                const albumCard = document.createElement('div')

                albumCard.className = "col-md-2 album-card"

                albumCard.innerHTML = `
                <div class="card">
                    <a href="https://open.spotify.com/album/${data.uri.split(':')[2]}" class="card-img-top album-cover"><img src=${data.coverArt.sources[0].url} style="width: 158px; padding: 10px 10px 0 10px;"></a>
                    <div class="card-body">
                        <div class="card-text">${data.artists.items[0].profile.name}</p>
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