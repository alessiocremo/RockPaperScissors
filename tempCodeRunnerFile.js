const prompt = require("prompt-sync")();

function getword(){
    const rps=["Rock","Paper","Scissors"];
    let x = Math.floor(Math.random()*2) +1;
    console.log(x);
    return rps[x];
};


function getComputerChoice(){
    let cc = getword();
    cc = cc.toString();
    cc=cc.toLowerCase();
    console.log("scelta pc" + cc);
    return cc;
};

function getUserChoice(){
    let uc = prompt("Please insert your choice");
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

    if (UC===CC)    // 1 = tie
        return 0;
    else if ((CC=="scissors" && CC =="paper") || (CC="rock" && UC=="scissors") || (CC=="paper" && UC=="rock")) //2 = computer wins
        return 1;
    else            //3 = user wins
        return 2;

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
            console.log ("user wins round" + (i+1));
            ucounter++;
        }

        else
            console.log("tie in round" + (i+1))

        console.log("score is now" + ccounter + "points for computer and" + ucounter + "points for user")
    }


    finalresult=whowon(ccounter, ucounter)
    
    if (finalresult==0){
        console.log("game ended with a tie " + u + "-" + c)
    }
    else if (finalresult==1){
        console.log("game ended with computer winning" + ccounter + "-" + ucounter)
    }
    else {
        console.log("game ended with user winning" + ucounter + "-" + ccounter)
    }

}



game();




