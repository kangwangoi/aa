async function detail(){
    const searchParams = new URLSearchParams(window.location.search);
    const idGame = searchParams.get('id'); 
    const GENRE = searchParams.get('genre'); 
    // console.log(GENRE);
const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '55a8dae2ecmsha374c05867d4de0p168faajsn0555c3e002af',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
    const detail = document.getElementById("detail").innerHTML=`
    <div style="display:flex;  background-color:black;">
    <img src=${result.thumbnail} style="width:50%; height:100%; "/>
    <div style="margin-left:100px;margin-top:70px; width:50%;">
    <h1 style="color:white;">${result.title}</h1>
        <p style="color:white;font-size:2rem;"><b>GENRE</b>:${result.genre}</p>
        <p style="color:white;font-size:2rem;"><b>DEVELOPER</b>:${result.developer}</p>
        <p style="color:white;font-size:2rem;"><b>PLATFORM</b>:${result.platform}</p>
        <p style="color:white;font-size:2rem;"><b>RELEASE</b>:${result.release_date}</p>
        <p style="color:white;font-size:2rem;"><b>DESCRIPTION</b>:${result.short_description}</p>
        <a href="${result.game_url}" class="button">Play</a>
        </div>
    </div>  
        `
const gameSearched = JSON.parse(localStorage.getItem("data"))
let gameSearching = JSON.parse(gameSearched)
let numberGame = 0
let related = []
gameSearching.forEach(game => {
    if(game.genre==GENRE){
        numberGame++;
        related.push(game)        
    }
});
for(i=1;i<related.length;i++){
    if (i==10){break} else {
        const relatedGame = document.getElementById("relativeGame");
        const gameRelated = document.createElement('div');
        gameRelated.className = `col-md-3 game-card`
        console.log(related);
        gameRelated.innerHTML = `
        <img src="${related[i].thumbnail}"/>
        <p>${related[i].title}</p>`;
        
        relatedGame.appendChild(gameRelated);
    }
     
   
}

        // <img src=${result.screenshots[0].image} style="width: 50%; height="1000px"/>

    } catch (error) {
	console.error(error);
}}
//  async function appendGameDetail(){
// const game = await detail()
// // console.log(game)

// }
detail()
// appendGameDetail()