var tl = gsap.timeline()

tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
},"ani1")
tl.to("#loader h1",{
    color:"black",
    delay:0.2
},"ani1")
tl.to("#loader",{
    display:"none"
})

