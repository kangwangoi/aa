document.addEventListener("DOMContentLoaded", ()=>{
    
    const apiDataMusicURL = "https://www.steamwebapi.com/steam/api/items?key=IZHRG11JTRY8F2UR&page=1&max=100&price_min=10&price_max=500000&=0&limit=20"
    
    
    const appendDataElement = (data) => {
        // alert("Loading data...")
        console.log("data", data)
        const container = document.getElementById("gameContainer")
        data.forEach((game, index) => {

            if (game.itemname != null) {
                const gameCard = document.createElement('div')
            
                gameCard.className = `col-md-2 album-card album-card-${index}`
                    //price 
                let price = ""
                if (game.priceavg<0||game.priceavg==0){
                    price = "free"
                } else {
                    price = game.priceavg
                }
    
    
                //doi albumCard => gameCard
                gameCard.innerHTML = `
                    <div class="card">
                        <img src=${game.itemimage} style="width: 248px; padding: 10px 10px 0 10px;" />
                        <div class="card-body" style ="width:248px">
                            <h5>${game.itemname}</h5>
                            <p>${price} $</p>
                        </div>
                    </div>
                    `
    
                container.appendChild(gameCard);

            }

            
        })
    }

    const getData = () => {
        const data = JSON.parse(localStorage.getItem("data"))
        if (data!="") {
            alert("success")
            appendDataElement(data)
        }
        else {
            fetchApi()
            data = JSON.parse(localStorage.getItem("data"))
            appendDataElement(data)     
        }
    }


    const fetchApi = async () => {
        alert("fetching...")
        try {
            await axios({
                method: 'get',
                url: apiDataMusicURL
            })
            .then(function(response) {
                const gamesDataArray = response.data
                console.log("Data", gamesDataArray)
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
        let name = search.value.trim()
        searchItem(name)
    })

    function searchItem(name){

        if (name != '') {
            let isFoundItem = false
            const data = JSON.parse(localStorage.getItem("data"))

            data.forEach((game, index) => {
                if (game.itemname != null) {
                    if (game.itemname.includes(name)){
                            document.querySelector(`.album-card-${index}`).style.display = "block"
                            isFoundItem = true
                        }
                }
            })

            isFoundItem ? document.getElementById("messageNotFound").innerHTML("") : document.getElementById("messageNotFound").innerHTML("Item Not Found")
        }
        else {
            const container = document.querySelector("#gameContainer")
            const itemsAlbum = container.querySelectorAll(".album-card")
            itemsAlbum.forEach(element => { 
                element.style.display = 'block';
            });
        }
    }
})



// gameName.array.forEach(element => {
//     element.itemname = 'none'
// });
