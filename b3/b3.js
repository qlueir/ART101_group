let mazeArray = []
const mazeImages = []

let gameState = {
    current: "",

}

function Room(id, setImage){
    this.id = id;
    this.exits = [];
    this.image = setImage;
    this.markers = [false, false, false, false];
}

function mazeInitialize(){
    let letters = ["a", "b", "c", "d", "e"]
    for (i = 0; i<5; i++){
        for (j = 0; j<5; j++){
            let newObject = new Room(letters[i]+j, "");
            mazeArray.push(newObject);
    }
}
debugger
};

function randomMaze(){
    let mazeOptions = ["layout1", "layout2", "layout3"];
    let currentMaze = gameState.current;
    if (currentMaze == ""){
        currentMaze = mazeOptions[Math.floor(Math.random()*2)];
    } else {
        for (k=0; k<3; k++){
            if (currentMaze == mazeOptions[k]){
                mazeOptions.splice(k-1, 1);
            }
        }
        currentMaze = mazeOptions[Math.floor(Math.random())];
    }
    gameState.current = currentMaze;
    return currentMaze
}

function getMazeLayout(mazeLayout){
    let mazeMap = [];
    if (mazeLayout == "layout1"){
        return
    } else if (mazeLayout == "layout2"){
        return
    } else {
        return
    }
}

function mazeGenerate(){
    

    for (i=0; i<mazeArray.length(); i++){
        
    }
}

$("button").click(function(){
    mazeInitialize();
})