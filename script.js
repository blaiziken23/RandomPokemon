const pokemonAPI = fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD'
};

pokemonAPI.then(res => res.json())
.then(data => {

    random = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let count = data.count; 
    let card = document.querySelector(".card-list");
    
    for (let i = 0; i < 10; i++) {
        
        const random_num = random(count, 0);
        const getUrl = data.results[random_num].url;
        const newUrl = getUrl;
        // console.log(random_num, getUrl)
        let type = "";

        fetch(newUrl).then(res => res.json())
        .then(result => {

            // console.log(result);
            const name = result.name;
            const id = result.id;
            let img = result.sprites.other["official-artwork"].front_default;

            if (img === null) {
                img = 'img/default_img.png';
            }
            for (let i = 0; i < result.types.length; i++) {
                let bgColor ="";
        
                switch(result.types[i].type.name) {
                    case "normal": 
                        bgColor = colours.normal; break;
                    case "fire":
                        bgColor = colours.fire; break;
                    case "water":
                        bgColor = colours.water; break;
                    case "electric":
                        bgColor = colours.electric; break;
                    case "grass":
                        bgColor = colours.grass; break;
                    case "ice":
                        bgColor = colours.ice; break;
                    case "fighting":
                        bgColor = colours.fighting; break;
                    case "poison":
                            bgColor = colours.poison; break;
                    case "ground":
                        bgColor = colours.ground; break;
                    case "flying":
                        bgColor = colours.flying; break;
                    case "psychic":
                        bgColor = colours.psychic; break;
                    case "bug":
                        bgColor = colours.bug; break;
                    case "rock":
                        bgColor = colours.rock; break;
                    case "ghost":
                        bgColor = colours.ghost; break;
                    case "dragon":
                        bgColor = colours.dragon; break;
                    case "dark":
                        bgColor = colours.dark; break;
                    case "steel":
                        bgColor = colours.steel; break;
                    case "fairy":
                        bgColor = colours.fairy; break;
                }
                type += ` <li id="typelist" style="background-color:${bgColor};"> ${result.types[i].type.name} </li> `;
            }
            card.innerHTML += `
                <div class="card mb-3">
                    <h6 class="card-header"> ${id} </h6>
                    <img src=" ${img} " class="card-img-top p-2" alt=" ${name} ">
                    <div class="card-body">
                        <h6 class="card-title" id="card-title"> <a type="button" data-bs-toggle="modal" data-bs-target="#info"> ${name} </a> </h6>   
                        <span class="card-text mb-2" id="type">${type}</span>
                    </div>
                </div> `  

            let modal_name = document.getElementById("name").innerHTML = name;
            console.log(modal_name)


        }).catch(err => console.error(err));

        
    }
    
}).catch(err => console.log(err));


                
