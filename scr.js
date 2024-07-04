
                const itemPer = 20;
                let pageBegin = 1;
                let pageEnd = Math.ceil(91 / itemPer); // Example item count for calculation
                let currentPage = 1; // Initialize currentPage
            
                function pagePre() {
                    if (currentPage > 1) {
                        pageBegin--;
                        appendDataElement();
                        document.getElementById("pageID").innerHTML = `Page ${pageBegin} of ${pageEnd}`;
                    }
                }
            
                function pageNext() {
                    if (pageEnd > pageBegin) {
                        pageBegin++;
                        appendDataElement();
                        document.getElementById("pageID").innerHTML = `Page ${pageBegin} of ${pageEnd}`;
                    }
                }
            
                // document.getElementById("pageID").innerHTML = `Page ${pageBegin} of ${pageEnd}`;
            
const urlGame = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '55a8dae2ecmsha374c05867d4de0p168faajsn0555c3e002af',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
//
const fetchApi = async () => {
    try {
        const response = await fetch(urlGame, options);
        const result = await response.text();
        localStorage.setItem("data", JSON.stringify(result));
        return JSON.parse(result)
    } catch (error) {
        console.error(error);
    }
};

const appendDataElement = (data) => {
    const container = document.getElementById("gameContainer");
        const data_arr = JSON.parse(data);
        data_arr.forEach(game => {
        const gameCard = document.createElement('div');
        // console.log("data game", game)
        gameCard.className = `col-md-3 game-card game-card-${game.id}`;
        // console.log("thumbnail: ", game.thumbnail, " - title: ", game.title);
        gameCard.innerHTML = `
            <div class="card" style="color:white; background-color:black; width:100; margin:10px 0 10px 0; padding:0 0 0 0; heigh:300px">
                <img src=${game.thumbnail} style="width: 99%; padding:10px;"/>
                <div class="card-body" style="width:250px">
                    <h5 style="width:500px">${game.title || 'N/A'}</h5>
                    <p style="font-size:19px;">${game.genre}  |  ${game.release_date}</p>
                    <a href="${game.game_url}" class="button">Play</a>
                    <a href="detail.html?id=${game.id}&genre=${game.genre}"class="button">View</a>
                </div>
            </div>
        `;
        container.appendChild(gameCard);
    });
};
const getData = () => {
let data = localStorage.getItem("data");
if (data) {
    appendDataElement(JSON.parse(data));
} else {
    data = fetchApi();
    appendDataElement(data)
}
};           
// fetchApi()
//jh
// Khong nen goi ham getData nhieu vi api co gioi han so lan request 
getData()
// Search games
const search = document.getElementById("input_search")

search.addEventListener("input" , () =>{
    const container = document.querySelector("#gameContainer")
    const itemsGame = container.querySelectorAll(".game-card")
    itemsGame.forEach(element => { 
        element.style.display = 'none';
    });
    
    
    let name = search.value.trim()
    searchItem(name)
})
// fetchApi() 

function searchItem(name){
    let searchItem = name.toUpperCase()
    if (name != '') {
        let isFoundItem = false
        const data = JSON.parse(localStorage.getItem("data"))
        // console.log("data when searching", data)
        
        JSON.parse(data).forEach((game) => {
            let gameName = game.title.toUpperCase()
            console.log(gameName);
            // let resultName = gameName.toUppercase()
            if (gameName != null) {
                if (gameName.includes(searchItem)){
                    document.querySelector(`.game-card-${game.id}`).style.display = "block";
                    isFoundItem = true
                    console.log(name);
                }
            }
        })
        
        isFoundItem ? document.getElementById("messageNotFound").innerHTML=``: document.getElementById("messageNotFound").innerHTML = `<div display="text-align: center;">Game not found</div>`
    }
    else {
        document.getElementById("messageNotFound").innerHTML='';
        const container = document.querySelector("#gameContainer")
        const itemsGame = container.querySelectorAll(".game-card")
        itemsGame.forEach(element => { 
            element.style.display = 'block';
        });
    }
    
}




// gameName.array.forEach(element => {
//     element.itemname = 'none'
// });

