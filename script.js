window.addEventListener("load", function () {
  const preloader = document.getElementsByClassName("loader__div")[0];
  preloader.classList.add("preloader-display-none");
});

gsap.to(".section1--image4", {
  width: "100vw",
  height: "100vh",
  filter: "brightness(0.5)",

  scrollTrigger: {
    trigger: ".section1",
    scroller: "body",
    start: "top top",
    end: "+4000",
    scrub: 0.3,
    pin: true,
    immediateRender: false,
  },
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
      start: "top 0%",
      scrub: true,
    
    },
  }
);

gsap.fromTo(
  ".section1__sideImage",
  {
    scale: "1",
  },
  {
    scale: "0.7",

    scrollTrigger: {
      trigger: ".section1",
      scroller: "body",
      start: "top top",
      scrub: 5,
    },
  }
);

gsap.from(".section3--item", {
  transform: " translate(0px,0px) scale(1,1)",
  filter: "brightness(1)",

  scrollTrigger: {
    trigger: ".section3",
    scroller: "body",
    start: "top top",
    end: "+10000",
    scrub: 0.3,
    pin: true,
   
    immediateRender: false,
  },
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
      start: "top 0%",
      scrub: true,
      // markers: true,
    },
  }
);

gsap.to(
  ".section5__image",

  {
    transform: "translate(482px, 117px)",
    width: "300px",
    height: "351.2px",
    scrollTrigger: {
      trigger: ".section5",
      scroller: "body",
      start: "top 0%",
      end: "+15000",

      pin: true,

      scrub: true,
      markers: true,
    },
  }
);

gsap.fromTo(
  ".section5--caption",
  { y: 300, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    delay: 10,
    duration: 10,
    scrollTrigger: {
      trigger: ".section5",
      scroller: "body",
      start: "top 0%",
      scrub: 2,
      // markers: true,
    },
  }
);

gsap.from(".section7--images", {
  transform: " translate(0px, 0px)",
  opacity: "0",
  filter: "brightness(1)",
  scrollTrigger: {
    trigger: ".section7",
    scroller: "body",
    start: "top top",
    end: "+20000",
    // end:"+10000",
    scrub: 1,
    pin: true,
    
    immediateRender: false,
  },
});

gsap.to(".section10--image", {
  transform: "scale(0.25, 0.25)",
  filter: "brightness(0.7) hue-rotate(0deg)",
 
  scrollTrigger: {
    trigger: ".section10",
    scroller: "body",
    start: "top top",

    end: "+25000",
    scrub: true,
    pin: true,
  
    immediateRender: false,
  },
});

gsap.fromTo(
  ".section10--caption",
  { y: 300, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 2.5,
    scrollTrigger: {
      trigger: ".section10",
      scroller: "body",
      start: "top 0%",
      scrub: 5,
    
    },
  }
);
