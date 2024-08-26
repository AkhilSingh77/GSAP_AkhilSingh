

gsap.to(".section1--image4", {
  width: "100vw",
  height: "100vh", 
  filter: "brightness(0.5)",

  scrollTrigger: {
    trigger: ".section1",
    scroller:"body",
    start: "top top",
    // end:"+2000",
    scrub: 0.3,
    pin: true, 
    markers: true, 
    immediateRender: false,

  }
});

gsap.fromTo(
  ".section1--details",
  { y: 200, opacity: 0 },
  {
    y: 0,
    opacity: 1, 
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section1",
      scroller: "body",
      start:"top 0%",
      scrub: true,
      markers: true,
    },
  }
);

 




gsap.from(".section3--item", {
  transform:" translate(0px,0px) scale(1,1)",
  filter: "brightness(1)",

  scrollTrigger: {
    trigger: ".section3",
    scroller:"body",
    start: "top top",
    // end:"+10000",
    scrub: 0.3,
    pin: true, 
    markers: true, 
    immediateRender: false,

  }
});


gsap.fromTo(
  ".section3--details",
  { y: 200, opacity: 0 },
  {
    y: 0,
    opacity: 1, 
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start:"top 0%",
      scrub: true,
      markers: true,
    },
  }
);


gsap.from(".section7--images", {
  transform:" translate(0px, 0px)",
     opacity: "0",
    filter: "brightness(1)",
  scrollTrigger: {
    trigger: ".section7",
    scroller:"body",
    start: "top top",
    // end:"+10000",
    scrub: 1,
    pin: true, 
    markers: true, 
    immediateRender: false,

  }
});

gsap.to(".section10--image", {
  transform: "scale(0.25, 0.25)",
  filter:"brightness(0.7) hue-rotate(0deg)",
    //  opacity: "0",
    // filter: "brightness(1)",
  scrollTrigger: {
    trigger: ".section10",
    scroller:"body",
    start: "top top",
    // end:"+10000",
    scrub: 1,
    pin: true, 
    markers: true, 
    immediateRender: false,

  }
});


gsap.fromTo(
  ".section10--caption",
  { y: 300, opacity: 0 },
  {
    y: 0,
    opacity: 1, 
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section10",
      scroller: "body",
      start:"top 0%",
      scrub: true,
      markers: true,
    },
  }
);

 
// gsap.(".section7--text", {
//   transform:" translate(0px, 0px)",


//   scrollTrigger: {
//     trigger: ".section7",
//     scroller:"body",
//     start: "top top",
//     scrub: 1,
//     pin: true, 
//     markers: true, 
//     immediateRender: false,

//   }
// });
// gsap.from(".section7--text", {

//      opacity:"0",
  
//   scrollTrigger: {
//     trigger: ".section7",
//     scroller:"body",
//     scrub: 1,

//     immediateRender: false,

//   }
// });
// gsap.fromTo(
//   "..section7--text",
//   { opacity: 0 },
//   {
  
//     opacity: 1, 
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".section7",
//       scroller: "body",
//       start:"top 0%",
//       scrub: true,
//       markers: true,
//     },
//   }
// );

 