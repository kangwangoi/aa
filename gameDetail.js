
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
    <img src=${result.thumbnail} style="width:50%; height:100%; padding-top:5.5rem"/>
    <div style="margin-left:100px; width:50%; ">
    <h1 style="color:white;">${result.title}</h1>
        <p style="color:white;font-size:2rem;"><b style="color:red;">GENRE</b>:${result.genre}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red;">SHORT DESCRIPTION</b>:${result.short_description}</p>
        <a href="${result.game_url}" class="button">Play</a>
        </div>
    </div>  
        `
        const resultt = await 1+1;
        
    const moreDetail = document.getElementById("moreDetail").innerHTML=`

        <div style="background-color:black;>
        
        <h1 style="color:white; font-size:2rem; ">ABOUT THIS GAME</h1>
        <p style="color:white;font-size:2rem;"><b style="color:red">DEVELOPER </b>: ${result.developer}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">PLATFORM </b>: ${result.platform}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">RELEASE </b>: ${result.release_date}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">DESCRIPTION </b>: ${result.description}</p>
          </div>
        `
        if (result.minimum_system_requirements.os !="" || result.minimum_system_requirements.os !="null" || result.minimum_system_requirements.os !=null){
        const require = document.getElementById("require").innerHTML=`
        <div style="background-color:black; padding:0; margin:0;">
        <p style="color:white;font-size:2rem;  text-align: center; color:red;">MINUMUM SYSTEM REQUIREMENTS</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">WINDOW </b>: ${result.minimum_system_requirements.os}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">PROCESSOR </b>: ${result.minimum_system_requirements.processor}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">MEMORY </b>: ${result.minimum_system_requirements.memory}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">GRAPHICS </b>: ${result.minimum_system_requirements.graphics}</p>
        <p style="color:white;font-size:2rem;"><b style="color:red">STORAGE </b>: ${result.minimum_system_requirements.storage}</p>
<div style="text-align: center; font-size: 40px; background-color: #000000; color: white; padding: 0;margin: 0;">SOME RELATED GAMES</div>
</div>
        `}
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
console.log(related);
for(i=1;i<related.length;i++){
    if (i==5){break} else {
        const relatedGame = document.getElementById("relativeGame");
        const gameRelated = document.createElement('div');
        gameRelated.className = `col-md-3 game-card`
        // console.log(related);
        gameRelated.innerHTML = `        
        <a class="button2" href="detail.html?id=${related[i].id}&genre=${related[i].genre}"><img src="${related[i].thumbnail}"/></a>
        `;
        
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