
gsap.from("nav ul li",{
    x:50,
    delay:0.7,
    opacity:0,
    duration:1,
    stagger: 1
   
});
gsap.from(".image2",{
    y:50,
    delay:0.7,
    opacity:0,
    duration:1,
   
});
gsap.from(".image3",{
    y:100,
    opacity:0,
    delay:2.5,
    duration:2,
   
});
gsap.from(".image4",{
    y:50,
    opacity:0,
    duration:1,
   });
gsap.from(".image5",{
    y:50,
    opacity:0,
    duration:0.8,
   });

gsap.from(".content",{
    
    y:100,
    delay:1.5,
    opacity:0,
    duration:1.9,
   
    
    
});

gsap.from("#history_head h1",{

    x:30,
    scale:0,
    duration:1,
    scrollTrigger:{

        trigger:"#history_head",
        scroller:"body",
        // markers:true,
        start: "top 80%"
        
    }



});
gsap.from("#head1 .left_side , #head1 .right_side",{

   scale:0,

    duration:1.5,
    stagger:0.5,
    scrollTrigger:{

        trigger:"#head1",
        scroller:"body",
        // markers:true,
        scrub:1,
        end:"top 40%",
    }



});
gsap.from("#head2 .left_side , #head2 .right_side",{

   scale:0,

    duration:1.5,
    stagger:0.5,
    scrollTrigger:{

        trigger:"#head2",
        scroller:"body",
        // markers:true,
        scrub:1,
        end:"top 40%",
    }



});
gsap.from("#head3 .left_side , #head3 .right_side",{

   scale:0,

    duration:1.9,
    stagger:0.5,
    scrollTrigger:{

        trigger:"#head3",
        scroller:"body",
        // markers:true,
        scrub:1,
        end:"top 40%",
    }



});
gsap.from(".contactMe",{

//    scale:0,
    y:-120,
   opacity:0,

    duration:1.9,
    stagger:0.5,
    scrollTrigger:{

        trigger:".contactMe",
        scroller:"body",
        // markers:true,
        scrub:1,
        // end:"top 40%",
    }



});





