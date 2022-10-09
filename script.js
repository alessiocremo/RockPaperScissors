// const prompt = require("prompt-sync")();

function getword(){
    const rps=["Rock","Paper","Scissors"];
    let x = Math.floor(Math.random()*2) +1;
    //console.log(x);
    return rps[x];
};


function getComputerChoice(){
    let cc = getword();
    cc = cc.toString();
    cc=cc.toLowerCase();
    //console.log("scelta pc  " + cc);
    return cc;
};

function getUserChoice(){
    let uc = prompt("Please insert your choice  ");
    uc = uc.toString();
    uc = uc.toLowerCase();
    return uc;
};

function round(){
    let CC;
    let UC;
    CC = getComputerChoice();
    //CC=CC.toLowerCase();
    let x=0;
    while (x==0){
        UC =  getUserChoice();
        if((UC=="rock") || (UC=="paper") || (UC=="scissors"))
            x=1
        else 
            console.log("input must be one between rock, paper or scissors, case doesn't matter")
    }

    //console.log("check uc  ", UC);
    //console.log("check cc  ", CC);

    if (UC==CC) {
        console.log(UC + " ties with " + CC +".");
        return 0;
    }   // 1 = tie
        
    else if ((CC=="scissors" && CC =="paper") || (CC=="rock" && UC=="scissors") || (CC=="paper" && UC=="rock")) {
        console.log(CC + " beats " + UC + ".")
        return 1;
    } //1 = computer wins
        
    else {
        console.log(UC + " beats " + CC + ".")
        return 2;
    }            //2 = user wins
        

}


function whowon(c, u){
    if (c==u)       //0 tie
        return 0;
    else if (c>u)        //1 computer won
        return 1;
    else            //2 user won
        return 2;
};


function game() {

    let result;
    let finalresult;
    let ccounter=0;
    let ucounter=0;

    for (let i = 0; i<5; i++){
        result=round()
        if (result==1) {
            ccounter++;
            console.log ("computer wins round" + (i+1));
        }
            
        else if (result==2){
            console.log ("user wins round" + (i+1) );
            ucounter++;
        }

        else
            console.log("tie in round " + (i+1))

        console.log("score is now " + ucounter + " points for user and " + ccounter + " points for computer. \n")
    }


    finalresult=whowon(ccounter, ucounter);
    
    
    console.log ("Game over. Final result is " + ucounter + " points for user and " + ccounter + " pointes for computer\n")


    if (finalresult==0){
        console.log("game ended with a tie " + ucounter + "-" + ccounter)
    }
    else if (finalresult==1){
        console.log("Computer wins with " + ccounter + " points against " + ucounter + " user points.")
    }
    else {
        console.log("User wins with" + ucounter + " points against " + ccounter + " computer points." )
    }

}


game();




