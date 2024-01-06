import Ship from "./shipObj"

function gameBoard(){
    const shipArrat = []
   shipArrat.push(Ship(2, [2], [2,3])) 
   shipArrat.push(Ship(3, [3], [2,3,4])) 
   shipArrat.push(Ship(4, [4], [2,3,4,5])) 
   shipArrat.push(Ship(5, [5], [2,3,4,5,6])) 

    const consoleGame = () =>{
        console.log(shipArrat)
    }

    const receveAttack = (w,h) =>{


        for(let i = 0; i < shipArrat.length; i++){
            console.log(shipArrat[i].sunkState)
            for(let c = 0; c < shipArrat[i].w.length; c++){
                for(let j = 0; j < shipArrat[i].h.length; j++){

                    if(w == shipArrat[i].w[c] && h == shipArrat[i].h[j]){

                        shipArrat[i].hit()
                    }

                }
            }

        }
    }

    return{consoleGame, receveAttack}
}

export default gameBoard