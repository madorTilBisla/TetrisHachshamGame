var objConcept = [
    {
        "concept": "",
        "shape": "img1.png",
        "category": "2"
    },
    {
        "concept": "",
        "shape": "img2.png",
        "category": "2"
    },
    {
        "concept": "",
        "shape": "img3.png",
        "category": "1"
    },
    {
        "concept": "",
        "shape": "img4.png",
        "category": "3"
    },{
        "concept": "",
        "shape": "img5.png",
        "category": "2"
    },
    {
        "concept": "",
        "shape": "img6.png",
        "category": "3"
    },
    {
        "concept": "",
        "shape": "img7.png",
        "category": "1"
    },
    {
        "concept": "",
        "shape": "img8.png",
        "category": "1"
    },
    {
        "concept": "",
        "shape": "img9.png",
        "category": "2"
    },
    {
        "concept": "",
        "shape": "img10.png",
        "category": "1"
    },
    {
        "concept": "",
        "shape": "img11.png",
        "category": "2"
    },
    {
        "concept": "",
        "shape": "img12.png",
        "category": "3"
    },
    {
        "concept": "",
        "shape": "img13.png",
        "category": "1"
    },
    {
        "concept": "",
        "shape": "img14.png",
        "category": "3"
    },
    {
        "concept": "",
        "shape": "img15.png",
        "category": "2"
    },
    {
        "concept": "",
        "shape": "img16.png",
        "category": "3"
    },
    {
        "concept": "",
        "shape": "img17.png",
        "category": "1"
    },
    {
        "concept": "",
        "shape": "img18.png",
        "category": "2"
    },
    {
         "concept": "",
         "shape": "img19.png",
         "category": "3"
    },
    {
        "concept": "",
        "shape": "img20.png",
        "category": "2"
    },
    {
         "concept": "",
         "shape": "img21.png",
         "category": "1"
     },
     {
        "concept": "",
         "shape": "img22.png",
         "category": "3"
    },
    {
         "concept": "",
         "shape": "img23.png",
         "category": "1"
    }
    ];
const DISTANCE = 29;
var DIR_MAT = [
    [1, 0], //Down
    [0, 1], //Right
    [-1, 0], //Up
    [0, -1] //Left
];
var nCountShape = 0;
var elShape;
var strConcept;
var elLeftErow;
var elRightErow;
var elConcept;
var PositionXCounter = 35;
var nCountWrong = 5;
var nCountRight = 0;
var elHeart;
var elPlayAgain;
var strRightMsg;
var strWrongmsg;
var nRandomNumber;
var arrayOfNumbers = [];

 /*
load
==================================
Description: Initialize the program.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
window.addEventListener("load", function() {
    AddListeners();
    ChangeConcept();
    setInterval(ChangeAllConcept, 4500);

    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function findMyNum(nRandomNumber){
    var blsIsExist = false;

    // check if the number is already taken
    for(var nLength = 0; nLength < 13; nLength++){
        if(nRandomNumber === arrayOfNumbers[nLength]){
            blsIsExist = true;
        }
    }
    return blsIsExist;
}

/*
AddListeners
==================================
Description: reset the elemnt and add the listners.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
 function AddListeners() {
    elShape = document.getElementById("the-shape");
    strConceptn = document.getElementById("the-concept");
    elLeftErow = document.getElementById("left-erow");
    elRightErow = document.getElementById("right-erow");
    elConcept = document.getElementById("move");
    elPlayAgain = document.getElementById("play-again");
    elLeftErow.addEventListener("click", Left);
    elRightErow.addEventListener("click", Right);
    strRightMsg = document.getElementById("right");
    strWrongmsg = document.getElementById("wrong");
 }

 /*
ChangeAllConcept
==================================
Description: happens every 7 seconds, checks if the match was right and call the ChangeConcept function thet update the concept.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function ChangeAllConcept() {
    IsRight();
    nCountShape++;
    ChangeConcept();
}

 /*
ChangeConcept
==================================
Description: changes the shape and the concept and add Listeners to the erow.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function ChangeConcept() {
    // for(var i = 1; i <= 10; i++){
        nRandomNumber = Math.floor(Math.random() * (23 - 0) + 0);
        while(findMyNum(nRandomNumber)){
            nRandomNumber = Math.floor(Math.random() * (23 - 0) + 0);
        }
        arrayOfNumbers.push(nRandomNumber);
        console.log(arrayOfNumbers);
    // }

    elShape.src = objConcept[nRandomNumber].shape;
    strConceptn.innerHTML  = objConcept[nRandomNumber].concept;
    elLeftErow.addEventListener("click", Left);
    elRightErow.addEventListener("click", Right);
    PositionXCounter = 35;
    elConcept.style.left = PositionXCounter + "%";
}

 /*
Left
==================================
Description: change the posoition of the concept to the left until the border.
Parameters: event.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function Left(event) {
    elRightErow.addEventListener("click", Right);
    PositionXCounter += DIR_MAT[3][1] * DISTANCE;
    elConcept.style.left = PositionXCounter + "%";
    if (PositionXCounter === 6) {
        elLeftErow.removeEventListener("click", Left);
    } 
}

 /*
Right
==================================
Description: change the posoition of the concept to the right until the border.
Parameters: event.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function Right(event) {
    elLeftErow.addEventListener("click", Left);
    PositionXCounter += DIR_MAT[1][1] * DISTANCE;
    elConcept.style.left = PositionXCounter + "%";
    if (PositionXCounter === 64) {
        elRightErow.removeEventListener("click", Right);
    } 
}

 /*
IsRight
==================================
Description: cheks if the concept match to the right place, if yes he chackd if there was 20 good matches and go to 
the winning massage, and if not he removes one life and chack if there was 5 erong matches and go to the loosing massage.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function IsRight() {
    if ((objConcept[nRandomNumber].category === "1" && PositionXCounter === 6) || (objConcept[nRandomNumber].category === "2" && PositionXCounter === 35) || (objConcept[nRandomNumber].category === "3" && PositionXCounter === 64)) {
        nCountRight++;
        if(nCountRight === 10) {
            winnnig();
        } else {
            strRightMsg.style.opacity = "1";
            setTimeout(function(){ strRightMsg.style.opacity = "0"; }, 700);
        }
    } else {
        elHeart = document.getElementById("life" + nCountWrong);
        elHeart.style.visibility = "hidden";
        if(nCountWrong === 1) {
            losing();
        } else {
            strWrongmsg.style.opacity = "1";
            setTimeout(function(){ strWrongmsg.style.opacity = "0"; }, 700);
        }
        nCountWrong--;
    }
}

 /*
winnnig
==================================
Description: if the player win, the game stop and shows the winning massage with a button of play again.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function winnnig() {
    elConcept.style.visibility = "hidden";
    nRandomNumber = null;
    nCountWrong = null;
    elPlayAgain.style.opacity = "1";
    document.getElementById("win").style.opacity = "1";
    elPlayAgain.addEventListener("click", function(){
        window.location.href = "index.html"
    });
}

 /*
losing
==================================
Description: if the player lose, the game stop and shows the losing massage with a button of play again.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function losing() {
    elConcept.style.visibility = "hidden";
    nRandomNumber = null;
    nCountWrong = null;
    elPlayAgain.style.opacity = "1";
    document.getElementById("lose").style.opacity = "1";
    elPlayAgain.addEventListener("click", function(){
        window.location.href = "index.html"
    });
}