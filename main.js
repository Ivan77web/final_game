for(let i = 0; i<9; i++){
    document.getElementById("game").innerHTML+='<div class="block"></div>';
}

let hod = 0;
let winnerOne = 0;
let winnerTwo = 0;

function checkWinner(){
    let allBlock = document.getElementsByClassName("block");
    
    if( (allBlock[0].innerHTML == "X" && allBlock[1].innerHTML == "X" && allBlock[2].innerHTML == "X") || (allBlock[3].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[5].innerHTML == "X") || (allBlock[6].innerHTML == "X" && allBlock[7].innerHTML == "X" && allBlock[8].innerHTML == "X") || (allBlock[0].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[8].innerHTML == "X") || (allBlock[2].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[6].innerHTML == "X")|| (allBlock[0].innerHTML == "X" && allBlock[3].innerHTML == "X" && allBlock[6].innerHTML == "X")|| (allBlock[1].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[7].innerHTML == "X")|| (allBlock[2].innerHTML == "X" && allBlock[5].innerHTML == "X" && allBlock[8].innerHTML == "X") ){
        winnerOne++;
        alert("Победили крестики");
    } else if( (allBlock[0].innerHTML == "0" && allBlock[1].innerHTML == "0" && allBlock[2].innerHTML == "0") || (allBlock[3].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[5].innerHTML == "0") || (allBlock[6].innerHTML == "0" && allBlock[7].innerHTML == "0" && allBlock[8].innerHTML == "0") || (allBlock[0].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[8].innerHTML == "0") || (allBlock[2].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[6].innerHTML == "0")|| (allBlock[0].innerHTML == "0" && allBlock[3].innerHTML == "0" && allBlock[6].innerHTML == "0")|| (allBlock[1].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[7].innerHTML == "0") || (allBlock[2].innerHTML == "0" && allBlock[5].innerHTML == "0" && allBlock[8].innerHTML == "0") ){
        winnerTwo++;
        alert("Победили нолики");
    } else if(hod == 9){
        alert("Победила дружба)))");
    }
}

document.getElementById("game").onclick = function(event){
    if(event.target.className == "block"){
        if(event.target.innerHTML == "X" || event.target.innerHTML == "0"){
            return
        }

        if(hod%2 == 0){
            event.target.innerHTML = "X";
        } else{
            event.target.innerHTML = "0";
        }
        
        hod++;
        checkWinner();
    }
}

document.querySelector(".button").onclick = function(){
    let all = document.getElementsByClassName("block");
    for(elem of all){
        elem.innerHTML = "";
    }
    hod = 0;
};

document.querySelector(".buttonTwo").onclick = function(){
    alert(`Крестики выиграли ${winnerOne} раз, нолики выиграли ${winnerTwo} раз `);
}
