let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
 
let turn0 = true ;//player x,player y

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked by user");
    if(turn0){//player o 
        box.innerText = "0";
        turn0 = false;

    }else{
          box.innerText = "X";
          turn0 = true;
    }
    box.Disabled = true; 

    checkwinner();
    });
});
const checkwinner = () => {
    for(let pattern of win){
  let pos1val =  boxes[pattern[0]].innerText;
  let pos2val =  boxes[pattern[1]].innerText;
  let pos3val =  boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        console.log(" Winner",pos1val)
    }
}

        
    }
};
