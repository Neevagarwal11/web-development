// Constructor Funct
    // function jisme "this" keyword aur "new" ka istemal hoo
function biscutMaker(property){
    this.name="Neev";
    this.no = 360;
    this.business= true;
    this.property = property;
}
var casea = new biscutMaker("mz");


// IIFE -Imediately Invoked Function Expression
    //Used to store private variable which cannot be accessed by public.

var ans = (function(){
    var privateValue= 12;
    return{
        getter:function(){
            console.log(privateValue);
        },
        setter:function(val){
            privateValue = val;
        }
    }
})()    



// Inheritance
    //The art of taking some properties of 1 var to another.

var human = {
    canFly :false,
    canTalk:true,
    canWalk:true,
    canMakeWebsites:true
}
var me = {
    name:"Neev",
    age:19,

}

me.__proto__ = human        //used to inherit the common properties of human into me.



//"This" keyword

function abcd(){
    console.log(this);              //Returns window
}

var obj = {
    name:"Neev",
    someMethod: function(){
        console.log(this);          //Returns object obj
    }
}
        //This is eventListener  (DOM)
var btn = document.querySelector("button");        //"This" Returns the query seleted upon clicking the button , the query just before the ".addEventListener" attr
btn.addEventListener("click",function(){
    this.style.backgroundColor="green";
})


//"Call" Keyword
    //Jab ek function aur ek object ko aur function ko call karke default mai this keh value ko replace karte hua obj ko direct karna hai tho ".call" use hota hai

function abc(){
    console.log(this);
}

var obj = {age:24};
abc.call(obj);              //".call" used to pass the obj as the "this" value in the function abc()


function abc(val,val2,val3){
    console.log(this);
}

var obj = {age:24};
abc.call(obj,1,2,3);              //If arguments to be passed then it could be done after obj is assigned.



// Sync And Async

    //Sync --> agar 4 task hai tho sync mai 1 by 1 saare task hote hai. Ek task kahtam hone keh baad dusara start hota hai.




    //async --> Isme saare task ek saath start hoo jate hai jiska output phele aa gya voo phele display hoo jata.
    

