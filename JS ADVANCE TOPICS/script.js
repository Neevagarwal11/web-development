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

console.log("Neev");        //sync code
setTimeout(function(){
    console.log("Agarwal");     //async code
},2000);


    //async --> Isme saare task ek saath start hoo jate hai jiska output phele aa gya voo phele display hoo jata.
        //async code callby-function keh ander likha jata hai.
            // setTimeout(callby-function(){},time-interval in ms);   

    //JS is not async. Coz it's single threaded.
    //JS mai concept hota hai Main stack aur Side Stack ka.
    //Main Stack mai main execution hota hai sync code directly jata hai main stack mai aur async code jata hai side stack mai.
    //Phele main stack ka execution complete hota hai phir voo side stack mai check hota hai kii udar kuch khatam hua if yes tho voo main stack mai chale jata hai.


    console.log("Hey1");
    console.log("Hey2");
    setTimeout(function(){
        console.log("Hey3");        //idar async mai time 0ms diya hua phir bhi voo hey4 keh baad print hota hai which proves kii vo side stack mai tha.
    },0)
    console.log("Hey4");
        


//Promises
var ans = new Promise(function(res , rej){
    return res("sabse phela task.")
})
var p2 = ans.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Dusara Task");
    })
})
var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("Teesara promise.")
    })
})
p3.then(function(data){
    console.log(data);
})



// Asnc await

//Jab koi bhi api seh data fetch karte hai tho voo hame raw format mai milta hai jisse hame json (readable file) mai convert karna padtha hai jiske liye hame then ka istemaal karna padta hai after the fetch to avoid we use async await.

async function abcd(){
    
    let raw = await fetch("https://randomuser.me/api/"); // 1 await seh ek .then ka kaam hota hai isme yeh raw value fetch kar keh lata hai.
    let ans = await raw.json();                             // Iss baar voo raw ko json mai convert karta hai.
    console.log(ans)
    // .then(function(raw){                //Data api seh raw format mai aata hai.
    //     return raw.json();                //Usko return karne keh liye hame .then ka use karna hai.
    // })
    // .then(function(data){               //Uss fetched raw.json keh data ko read karke print karne keh liye phir seh .then ka use karna padega.
    //     console.log(data);
    // })
}
abcd()


//Throttling --> Iska matlab kisi bhi code keh number of executions ko kam kar dena.


// Throttling Function
const throttleFunction = (func, delay) => {
 
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

document.querySelector("#th-exp")
.addEventListener("mousemove",throttleFunction((dets) => {
        var div = document.createElement("div")
        div.classList.add("imagediv")
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";
        document.body.appendChild(div);
        setTimeout(function(){
            div.remove()
        },500)
    }, 500));