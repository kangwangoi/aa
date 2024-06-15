// const apiDataMusicURL = "https://www.steamwebapi.com/steam/api/items?key=AMVABEHZ4JS519DG&page=1&max=20&price_min=0&price_max=500000&=0&limit=20&numberOfTopResults=5"

// const getData = async () => {
//     try {
//         await axios({
//             method: 'get',
//             url: apiDataMusicURL
//           })
//         .then(function (response) {
//             //s
//             const gamesDataArray = response.data
//             console.log(gamesDataArray);
//             const container = document.getElementById("bodycontainer")
//             gamesDataArray.forEach((game) => {

//                 const albumCard = document.createElement('div')

//                 albumCard.className = "col-md-  2 album-card"
//                 let price = ""
//                 if (game.priceavg<1||game.priceavg==0){
//                      price = "free"
//                 } else {
//                      price = gane.priceavg
//                 }
//                 albumCard.innerHTML = `
//                 <div class="card" style="display:flex;">
//                     <img src=${game.itemimage} style="width: 158px; padding: 10px 10px 0 10px;" >
//                     <h1>${game.itemname}</h1>
//                     <p>${price}</p>
//                     <div class="card-body">
//                     </div>
//                 </div>`

//                 container.appendChild(albumCard);
//             })
            
//         });
//     }catch(errors) {
//         console.log(errors);
//     }
// }
// //jh
// getData();  
// Search albums
const search = document.getElementById("input_search")
const name = ""
search.addEventListener("input" , (item) =>{
name = item.value.trim()
searchItem()
})
function searchItem(item){
    if (search != ""){
        const con = document.querySelector("#gameContainer")
        const gameName = document.querySelectorAll(".itemname")
    }
}
