const apiDataMusicURL = "https://www.steamwebapi.com/steam/api/items?key=AMVABEHZ4JS519DG&page=1&max=20&price_min=10&price_max=500000&=0&limit=20&numberOfTopResults=5"

const appendDataElement = (data) => {
    // alert("Loading data...")
    console.log(typeof data)
    const container = document.getElementById("gameContainer")
    data.forEach((game, index) => {

        console.log(data.itemname)

        const albumCard = document.createElement('div')
        
        albumCard.className = `col-md-2 album-card album-card-${index}`

        let price = ""
        if (game.priceavg<1||game.priceavg==0){
             price = "free"
        } else {
             price = gane.priceavg
        }
        // const gameCard = document.getElementById("gameContainer")
        albumCard.innerHTML = `
                <img src=${game.itemimage} style="width: 158px; padding: 10px 10px 0 10px;" >
                <div class="card-body">
                <h5>${game.itemname}</h5>
                <p>${price}</p>
                </div>
       
            `

        container.appendChild(albumCard);
    })
}

const getData = () => {
    const data = JSON.parse(localStorage.getItem("data"))
    if (data) {
        appendDataElement(data)
    }
    else {
        appendDataElement(fetchApi())
    }
}
const fetchApi = async () => {
    alert("fetching...")
    try {
        await axios({
            method: 'get',
            url: apiDataMusicURL
        })
        .then(function (response) {
            const gamesDataArray = response.data
            localStorage.setItem("data", JSON.stringify(gamesDataArray))
            return gamesDataArray
            
        });
    }catch(errors) {
        console.log(errors);
    }
}
// fetchApi()
//jh
// Khong nen goi ham getData nhieu vi api co gioi han so lan request 
getData()
// Search games
const search = document.getElementById("input_search")

search.addEventListener("input" , () =>{
    const container = document.querySelector("#gameContainer")
    const itemsAlbum = container.querySelectorAll(".album-card")
    itemsAlbum.forEach(element => { 
        element.style.display = 'none';
    });

    
    const data = JSON.parse(localStorage.getItem("data"))
    console.log("Data can search ne", data)
    let name = search.value.trim()
    searchItem(name, data)
})

function searchItem(name, data){
    if (name != '') {
        let isFoundItem = false
       data.forEach((item, index) => {
           if (item.itemname.includes(name)){
                document.querySelector(`.album-card-${index}`).style.display = "block"
                isFoundItem = true

            }
        })
        isFoundItem ? console.log("ok") : document.getElementById("messageNotFound").innerHTML("Item Not Found")
    }
    else {
        const container = document.querySelector("#gameContainer")
        const itemsAlbum = container.querySelectorAll(".album-card")
        itemsAlbum.forEach(element => { 
            element.style.display = 'block';
        });
    }
}


// gameName.array.forEach(element => {
//     element.itemname = 'none'
// });
