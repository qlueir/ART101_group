let mazeArray = []
const mazeImages = []

let gameState = {
    current: "",
    location: "a2"
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

function getMazeLayout(mazePar){
    let mazeMap = [];
    if (mazePar == "layout1"){
        mazeMap =
        ["0010", "0110", "0111", "0110", "0100",
         "0011", "0110", "1100", "0010", "1101",
         "1001", "0011", "0100", "0011", "1100",
         "1010", "1010", "0110", "1110", "0101",
         "1010", "0110", "0101", "0010", "1100"
        ];
        
    } else if (mazePar == "layout2"){
        return
    } else {
        return
    }
    return mazeMap;
}

function mazeGenerate(){
    let mazeLayout = getMazeLayout();
    debugger;

    //for every item in mazeLayout, should be 25 for every cell of the maze
    for (i=0; i<mazeLayout.length(); i++){

        //each item is a string, so iterate through every character in the item (4 times)
        for (j=0; j<mazeLayout[i].length(); j++){

            //split the selected item into separate array of 4
            //preserving the original array data
            let tempvar = mazeLayout[i].split();
            debugger;
            //create another variable to retain result
            let exitvar = [];

            //iterate through tempvar 
            for (k=0; k<tempvar.length(); k++){

                //checking if there is or is not an exit accordingly
                if (tempvar[k] == "0"){
                    exitvar.push(false);
                } else {
                    exitvar.push(true)
                }
            }
        }

        mazeArray[i].exits = exitvar;
    }
}

$("#start").click(function(){
    $("#start").hide();
    mazeInitialize();
});