// Cursor                           
// var crsr = document.querySelector("#cursor")              //Specifyinig a variable as the cursor and selecting it thourg html id using document.querySelector("ID")
var cblr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){     //adding an event in the webpage when ever a cursor is moved it's detected by dets and the co-ordinates are notes.  
    // crsr.style.left = dets.x -15 +"px"                     //adding cursor style whenever there is a movemnet in the cursor  and specifies that the element  in the cursor should follow the co-ordinates provided by dets.
    // crsr.style.top = dets.y - 10 + "px"
    cblr.style.left = dets.x-200 +"px"
    cblr.style.top = dets.y-200 + "px"
})

// Scroll Trigger for navbar and the page-2 bg transition.
gsap.to("#nav",{
    backgroundColor:"rgba(0,0,0,0.9)",
    // duration:"0.5",
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"bottom -10%",
        end:"bottom -11%",
        // markers:true,
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"rgba(0,0,0,1)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})