 let tl=gsap.timeline();
 tl.from("nav img ,nav h3,nav button",{
    y:-100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.2
})
tl.from("#main h1",{
    y:200,
    opacity:0,
     duration:1,
    stagger:0.3
})
tl.from("#main>img",{
    opacity:0,
    scale:0

})
tl.from("h5",{
    y:-30,
    
    opacity:0

})
tl.to("h5",{
    y:-30,
    yoyo:true,
    repeat:-1,
    duration:0.5
})

