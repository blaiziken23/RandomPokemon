document.getElementById("search").addEventListener("click", (e) => {

    e.preventDefault();
    const search_val = document.getElementById("user_input").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${search_val}`)
    .then(res => res.json())
    .then(result => {

        let card = document.querySelector(".card-list");
        const name = result.name;
        const id = result.id;
        let img = result.sprites.other["official-artwork"].front_default;
        let type = "";
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
        card.innerHTML = ` 
            <div class="card mb-3">
                <h6 class="card-header"> ${id} </h6>
                <img src=" ${img} " class="card-img-top p-2" alt=" ${name} ">
                <div class="card-body">
                    <h6 class="card-title" id="card-title">  ${name}  </h6>
                    <span class="card-text mb-2" id="type">${type}</span>
                </div>
            </div>`
    })


    document.getElementById("user_input").value = "";
})