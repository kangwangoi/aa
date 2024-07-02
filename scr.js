
// const itemPer = 20;
// let pageBegin = 1;
// let pageEnd = Math.ceil(91 / itemPer)
// function pagePre(){
//     if(currentPage==pageEnd || currentPage>1){
//         pageBegin--
//     appendDataElement()
//     let tam = currentPage
//     document.getElementById("pageID").innerHTML = `Page ${pageBegin} of ${pageEnd}`  
// }}
// function pageNExt(){
//     if(pageEnd>pageBegin){
//         pageBegin++
//     appendDataElement()
//    let  tam = pageBegin
//     document.getElementById("pageID").innerHTML = `Page ${pageBegin} of ${pageEnd}`  
// }}
// document.getElementById("pageID").innerHTML = `Page ${pageBegin} of ${pageEnd}`  
// //page number 


// const item = []
 document.addEventListener("DOMContentLoaded", ()=>{
     const apiDataMusicURL = "https://opencritic-api.p.rapidapi.com/game/search?criteria=the%20withcer%203"
     const fetchApi = async () => {
        alert("fetching...")
                        const options = {
                            method: 'GET',
                            headers: {
                                'x-rapidapi-key': '55a8dae2ecmsha374c05867d4de0p168faajsn0555c3e002af',
                                'x-rapidapi-host': 'opencritic-api.p.rapidapi.com'
                            }
                        };
                        
                        try {
                            const response = await fetch(apiDataMusicURL, options);
                            const result = await response.json();
                            localStorage.setItem("data", result)
                            console.log(result);
                        } catch (error) {
                            console.error(error);
                        }
                    }
    
    const appendDataElement = (data) => {
        // alert("Loading data...")
        // console.log("data", data)
        // fetchApi()
        const container = document.getElementById("gameContainer")
        console.log(data);
       
        data.forEach((game, index) => {

            
                const gameCard = document.createElement('div')
                gameCard.className = `col-md-2 album-card album-card-${index}`
                    //price 
                //     let time = 0;
                // let price = ""
                // if (game.priceavg<=0){
                //     price = "free"
                // } else {
                //     price = game.priceavg
                // }
            //    console.log(typeof(gameCard));
            //     doi albumCard => gameCard            
            //     page number begin n end
                
            //     console.log(pageBegin);
            //     for(i=start;i++;i<end){
            //         gameItem.push(
            //     gameCard.innerHTML = `
            //         <div class="card">
            //             <img src=${item[i].itemimage} style="width: 248px; padding: 10px 10px 0 10px;" />
            //             <div class="card-body" style ="width:248px">
            //                 <h5>${game.itemname}</h5>
            //                 <p>${price} $</p>
            //             </div>
            //         </div>
            //         `
            //                     )
            //                         }
                gameCard.innerHTML`<p>hi</p>`
                container.appendChild(gameCard);
            }
           
        )
    }
//    console.log(tam);
//    console.log("item",item);
    const getData = () => {
        if (JSON.parse(localStorage.getItem("data"))!=null) {
            alert("success")
            const data = JSON.parse(localStorage.getItem("data"))
            appendDataElement(data)
        }
        else {
            fetchApi()
            alert("bruhhhhhhhhhhhh")
          const data = JSON.stringify(localStorage.getItem("data"))
            appendDataElement(data)  
            console.log(data)   
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
                    // fetchApi()
                    
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
                            
                            isFoundItem ? document.getElementById("messageNotFound").innerHTML=``: document.getElementById("messageNotFound").innerHTML = `<div display="text-align: center;">Game not found</div>`
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

