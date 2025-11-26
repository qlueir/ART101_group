let mazeArray = [];
const mazeImages = [];

//maze data converted into cells, const
//each item is 1 cell of the maze, 4 characters for nwes compass directions respectively
//0 = wall in that direction (ie 1110 = a wall to the south)
const mazemap1 = ["0010", "0110", "0111", "0110", "0100",
         "0011", "0110", "1100", "0010", "1101",
         "1001", "0011", "0100", "0011", "1100",
         "1010", "1010", "0110", "1110", "0101",
         "1010", "0110", "0101", "0010", "1100"
        ];

//very important gamestate object, should always start player at position a2
let gameState = {
    current: "layout1",
    position: "a2"
}

//room object constructor, no need for flexible names just use this.id
function Room(id, setImage){
    this.id = id;
    this.exits = [];
    this.image = setImage;
    this.markerBool = [false, false, false, false];
    this.markers = [];
    this.trap = false;
}

//initialize maze
function mazeInitialize(){
    let letters = ["a", "b", "c", "d", "e"]
    for (i = 0; i<5; i++){
        for (j = 0; j<5; j++){
            let newObject = new Room(letters[i]+j, "");
            mazeArray.push(newObject);
    }
}
//debugger
};

//picks a random maze, different from the player's current
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

//retrieves the maze layout from global variable... just an if statement
function getMazeLayout(mazePar){
    let mazeMap = [];
    if (mazePar == "layout1"){
        mazeMap = mazemap1;
        /*["0010", "0110", "0111", "0110", "0100",
         "0011", "0110", "1100", "0010", "1101",
         "1001", "0011", "0100", "0011", "1100",
         "1010", "1010", "0110", "1110", "0101",
         "1010", "0110", "0101", "0010", "1100"
        ];*/
        
    } else if (mazePar == "layout2"){
        return
    } else {
        return
    }
    return mazeMap;
}

//this function changes the data of mazeArray based on the current maze
function mazeGenerate(){
    let mazeLayout = getMazeLayout(gameState.current);
    //debugger;

    //for every item in mazeLayout, should be 25 for every cell of the maze (5x5)
    for (i=0; i<mazeLayout.length; i++){

        //creates a new local variable to get/store the new room.exits data
        let exitvar = [];

        //split the selected item into separate list of 4 0s and 1s
        //preserving the original array data
        let tempvar = mazeLayout[i].split("");
        //debugger;

        //iterate for every item in the new tempvar list (4)
        for (j=0; j<tempvar.length; j++){

            //this should turn the 0s into false and 1s into true without if statement
            exitvar.push(Boolean(Number(tempvar[j])));
            //debugger;
            
        }

        mazeArray[i].exits = exitvar;
    }

    debugger;
}

function updatePosition(direction){
    let displacement = 0;
    if (direction === "north"){
        displacement = -5;
    } else if (direction === "west"){
        displacement = -1;
    } else if (direction === "east"){
        displacement = 1;
    } else if (displacement === "south"){
        displacement = 5;
    }

    let index;

    for (i=0; i<mazeArray.length; i++){
        index = i;
        if (gameState.position === mazeArray[i]){
            return
        }
    }

    debugger;

}

function updateScreen(){
    return
}

$("#start").click(function(){
    $("#start").hide();
    $("body").append("haha theres nothing here yet but the console has stuff i promise");
    $("#directions").toggle();
    mazeInitialize();
    mazeGenerate();
    debugger
});

$(".direction-button").click(function(){
    return
    //updatePosition(this.id);
})