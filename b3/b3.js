let mazeArray = [];
const mazeImages = [];

//maze data converted into cells, const
//each item is 1 cell of the maze, 4 characters for nwes compass directions respectively
//0 = wall in that direction (ie 1110 = a wall to the south)
const maze_layout1 = ["0010", "0110", "0111", "0110", "0100",
         "0011", "0110", "1100", "0010", "1101",
         "1001", "0011", "0100", "0011", "1100",
         "1010", "1010", "0110", "1110", "0101",
         "1010", "0110", "0101", "0010", "1100"
        ];
const maze_layout2 = ["0011", "0101", "0001", "0011", "0100",
        "1001", "1010", "1100", "1010", "0101",
        "1011", "0110", "0110", "0111", "1101",
        "1010", "0101", "0011", "1100", "1001",
        "0010", "1100", "1001", "0010", "1100"
];
const maze_layout3 = ["0011", "0110", "0110", "0110", "0101",
        "1010", "0101", "0010", "0110", "1100",
        "0011", "1110", "0110", "0111", "0101",
        "1001", "0011", "0110", "1100", "1001",
        "1000", "1010", "0101", "0010", "1100"
];

let maze_layout1_markers = [];
let maze_layout2_markers = [];
let maze_layout3_markers = [];

//very important gamestate object, should always start player at position a2
let gameState = {
    current: "layout1",
    position: "a2",
    pagecount: 0
}

//room object constructor, no need for flexible names just use this.id
function Room(id, setImage){
    this.id = id;
    this.exits = [];
    this.image = setImage;
    this.markerBool = [false, false, false, false];
    this.trap = false;
    this.page = false;
    this.trueexit = false;
}

//initialize maze
function mazeInitialize(){
    mazeArray = [];
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
        mazeMap = maze_layout1.slice();
        stateGenerate("trap", ["b3", "c2", "e3"]);
        stateGenerate("page", ["a0", "d2", "c0"]);
    } else if (mazePar == "layout2"){
        mazeMap = maze_layout2.slice();
        stateGenerate("trap", ["a4", "e0", "e3"]);
        stateGenerate("page", ["e1", "c4", "e4"]);
    } else if (mazePar == "layout3"){
        mazeMap = maze_layout3.slice();
        stateGenerate("trap", ["b2", "e0", "e3"]);
        stateGenerate("page", ["b3", "c3", "d0"])
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

    mazeArray[searchArray("e2")].trueexit = true;

    debugger;
}

//function that modifies room objects to have traps or pages
function stateGenerate(state, myArray){
    for (i=0; i<mazeArray.length; i++){
        if (mazeArray[i].id == myArray[0] || mazeArray[i].id == myArray[1] || mazeArray[i].id == myArray[2]){
            if (state == "trap"){
                mazeArray[i].trap = true;
                console.log("created trap at " + mazeArray[i].id)
            } else {
                mazeArray[i].page = true;
                console.log("created page at " + mazeArray[i].id)
            }
        }
    }
}

function findButtonIndex(button){
    let index = 0;
    if (button == "north"){
        index = 0;
    } else if (button == "west"){
        index = 1;
    } else if (button == "east"){
        index = 2;
    } else if (button == "south"){
        index = 3
    }
    return index;
}

function reverseFindIndex(index){
    let button = "";
    if (index == 0){
        button = "north";
    } else if (index == 1){
        button = "west";
    } else if (index == 2){
        button = "east";
    } else if (index == 3){
        button = "south";
    }
    return button;
}

//function for searching the array for a specific room id
function searchArray(value){
    for (i=0; i<mazeArray.length; i++){
        if (mazeArray[i].id == value){
            return i
        }
    }
}

//function for the marker selection box specifically, colors or clears buttons
function markerPlace(button, color, bool){
    let tempvar = button;
    console.log(tempvar);
    $('#' + tempvar).css("background-color", color)
    mazeArray[searchArray(gameState.position)].markerBool[findButtonIndex(tempvar)] = bool;
    console.log(mazeArray[searchArray(gameState.position)].markerBool);
    $('#marker-select').css("display", "none")
}

function saveMazeState(layout){
    let tempvar;

    if (layout == "layout1"){
        tempvar = maze_layout1_markers.fill([], 0, mazeArray.length);
    } else if (layout == "layout2"){
        tempvar = maze_layout2_markers.fill([], 0, mazeArray.length);
    } else if (layout == "layout3"){
        tempvar = maze_layout3_markers.fill([], 0, mazeArray.length);
    }

    for (i=0; i<mazeArray.length; i++){
        tempvar[i] = mazeArray[i].markerBool;
    }
}

function updatePosition(direction){
    let displacement = 0;
    const displacement_array = [-5, -1, 1, 5]
    displacement = displacement_array[findButtonIndex(direction)]
    /*if (direction === "north"){
        displacement = -5;
    } else if (direction === "west"){
        displacement = -1;
    } else if (direction === "east"){
        displacement = 1;
    } else if (displacement === "south"){
        displacement = 5;
    }*/

    let index = searchArray(gameState.position) + displacement;

    //debugger;

    gameState.position = mazeArray[index].id;

    debugger;

}

function updateScreen(){

    if (mazeArray[searchArray(gameState.position)].trap == true){
        playerDeath();
        return
    }
    
    for (i=0; i<4; i++){
        if (mazeArray[searchArray(gameState.position)].markerBool[i] === true){
            $('#' + reverseFindIndex[i]).css("background-color", "red");
        } else {
            $('#' + reverseFindIndex[i]).css("background-color", "");
        }
    }

    if (mazeArray[searchArray(gameState.position)].page == true){
        mazeArray[searchArray(gameState.position)].page = false;
        pagecount += 1;
    }

    debugger;
}

function playerDeath(){
    saveMazeState();
    gameState.pagecount = 0;
    gameState.current = randomMaze();
    gameState.position = "a2";
}

$("#yes").click(function(){
    $('#choice').hide();
    $("body").append("haha theres nothing here yet but the console has stuff i promise");
    $("#directions").toggle();
    mazeInitialize();
    mazeGenerate();
    updateScreen();
    debugger
});

$(".direction-button").click(function(){
    updatePosition(this.id);
    updateScreen();
})

$('#marker-button').click(function(){
    $("#marker-select").show();
})

$('#submit').click(function(){
    markerPlace($('#direction-selection').val(), "red", true);
})

$('#erase').click(function(){
    markerPlace($('#direction-selection').val(), "", false);
})

$('#test').click(function(){
    saveMazeState(gameState.current);
    debugger;
    randomMaze();
})