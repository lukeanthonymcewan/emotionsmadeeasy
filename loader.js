// Loading screen variables
let loaderDuration = 4;
let counter = { value: 0 };

//set display of divs initial
const categoryScreen = document.querySelector(".category");
window.categoryScreen = categoryScreen;
categoryScreen.style.display = "none";

//Split logo into characters for animation
let typeSplit = new SplitType(".loadingtext", {
  types: "words, chars",
  tagName: "span",
});

//Gsap animation for text in
let loadingscreentl = gsap.timeline({});
loadingscreentl.from($(".loadingtext").find(".char"), {
  yPercent: 150,
  rotation: 45,
  stagger: { amount: 0.8 },
  duration: 1.2,
  opacity: 0,
  delay: 0.3,
  ease: "expo.out",
});
loadingscreentl.to(
  ".loadingtext",
  {
    duration: 0,
    opacity: 1,
    ease: "expo.out",
  },
  0
);
loadingscreentl.from(
  ".loading-copy.top",
  {
    yPercent: -150,
    duration: 1.5,
    opacity: 0,
    delay: 1.6,
    ease: "expo.out",
  },
  0
);
loadingscreentl.from(
  ".loading-copy.bottom",
  {
    yPercent: 150,
    duration: 1.5,
    opacity: 0,
    delay: 1.6,
    ease: "expo.out",
  },
  0
);

//Animate in the loader bar
loadingscreentl.fromTo(
  ".loaderbar-wrapper",
  {
    yPercent: 200,
    opacity: 0,
  },
  {
    yPercent: 0,
    opacity: 1,
    delay: 1.4,
    duration: 0.8,
    ease: "power3.out",
  },
  0
);

//Gsap timeline counting the counter variable up to 100 (complete)
let tl = gsap.timeline({ onComplete: endLoaderAnimation });
tl.to(counter, {
  value: 100,
  delay: 1,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: "power4.inOut",
});
tl.to(
  ".loader-bar",
  {
    width: "100%",
    delay: 1,
    duration: loaderDuration,
    ease: "power4.inOut",
  },
  0
);

//Function that updates the progress of the loader number
function updateLoaderText() {
  let progress = Math.round(counter.value);
}

// Animates to splash screen
function endLoaderAnimation() {
  gsap.to(
    "body",
    {
      backgroundColor: "#fac4f3",
      delay: 5.55,
      duration: 0.5,
    },
    0
  );
  let outroTimeline = gsap.timeline({});
  outroTimeline.to(".loading-wrapper", {
    scale: 250,
    opacity: 0,
    delay: 0,
    duration: 2,
    ease: "power4.inOut",
  });
  outroTimeline.to(
    ".circle-one",
    {
      width: "300vw",
      height: "300vw",
      delay: 0.4,
      duration: 1.8,
      ease: "power4.inOut",
    },
    0
  );
  outroTimeline.to(
    ".circle-two",
    {
      width: "300vw",
      height: "300vw",
      delay: 0.2,
      duration: 1.8,
      ease: "power4.inOut",
      onComplete: hideLoader,
    },
    0
  );
  outroTimeline.from(
    "#logo, .splash-heading-wrapper, .splash-body, .slide-to-unlock, .eye-svg, .star-1, .star-2, .star-3, .star-4",
    {
      y: "+=56px",
      delay: 1.2,
      stagger: 0.15,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    0
  );
  let starTimeline = gsap.timeline({ yoyo: true, repeat: -1 });
  starTimeline.to(".star-1, .star-2, .star-3, .star-4", {
    rotate: 10,
    duration: 2,
    stagger: 1,
    ease: "power1.inOut",
  });
  outroTimeline.to(
    ".splash",
    {
      opacity: 1,
      delay: 0.5,
      duration: 1.8,
      ease: "power4.inOut",
    },
    0
  );
}

function hideLoader() {
  let loader = document.querySelector(".loader");
  // hide the loader
  loader.style.display = "none";
}
