var tl = gsap.timeline()

tl.to("#main",{
    bottom:"-100%",
    duration:1.2,
},"ani")
tl.from("#main" , {
    top:"100%",
    duration:1.2
},"ani")