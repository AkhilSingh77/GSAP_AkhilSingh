

gsap.to(".section1--image4", {
  width: "100vw",
  height: "100vh", 
  filter: "brightness(0.5)",

  scrollTrigger: {
    trigger: ".section1",
    scroller:"body",
    start: "top top",

    scrub: 1,
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
    scrub: 1,
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
