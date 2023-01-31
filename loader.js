// Loading screen variables

let loaderDuration = 2;
let counter = { value: 0 };

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
  ease: "expo.out",
});

//set display of divs initial
let categoryScreen = document.querySelector(".category");
categoryScreen.style.display = "none";

//Animate in the loader bar
loadingscreentl.from(
  ".loaderbar-wrapper",
  {
    delay: 1.2,
    yPercent: 200,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
  },
  0
);

//Gsap timeline counting the counter variable up to 100 (complete)
let tl = gsap.timeline({ onComplete: endLoaderAnimation });
tl.to(counter, {
  value: 100,
  delay: 2,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: "power4.inOut",
});
tl.to(
  ".loader-bar",
  {
    width: "100%",
    delay: 2,
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
  let outroTimeline = gsap.timeline({ onComplete: hideSplashScreen });
  outroTimeline.to(".loader-content", {
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

function hideSplashScreen() {
  let loader = document.querySelector(".loader");
  // hide the loader
  loader.style.display = "none";
}
