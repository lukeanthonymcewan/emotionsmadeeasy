// variables
let customEase =
  "M0,0 C0.126,0.382 0.304,0.334 0.462,0.482 0.654,0.662 0.634,1 1,1 ";
let counter = { value: 0 };

// $("body").addClass("no-scroll");
// $(".content-wrapper-categories").addClass("no-scroll");
// $(".gameplay").addClass("no-scroll");

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") == null) {
  $(".loading-screen").css("display", "flex");
  $(".splash-screen").css("display", "flex");

  document.querySelector("body").style.background = "#c50001";

  let loaderDuration = 4;

  //loading heading animations
  let typeSplit = new SplitType(".loadingtext", {
    types: "words, chars",
    tagName: "span"
  });

  let loadingscreentl = gsap.timeline({});

  loadingscreentl.from($(".loadingtext").find(".char"), {
    yPercent: 150,
    rotation: 15,
    stagger: { amount: 0.8 },
    duration: 1.2,
    opacity: 0,
    ease: "expo.out"
  });
  
  loadingscreentl.from(
    ".loaderbar-wrapper",
    {
      delay: 1.8,
      duration: 0.8,
      opacity: 0,
      ease: "power1.out"
    },
    0
  );

  function updateLoaderText() {
    let progress = Math.round(counter.value);
    $(".loader_number").text(progress + "%");
  }

  function clickTrigger() {
    $(".loading-screen").css("display", "none");
  }

  function endLoaderAnimation() {
    let outroTimeline = gsap.timeline({
      onComplete: clickTrigger
    });
    outroTimeline.to(".circle-one", {
      width: "300vw",
      height: "300vw",
      delay: 0.2,
      duration: 1.8,
      ease: "power4.inOut"
    });
    outroTimeline.to(
      ".circle-two",
      {
        width: "300vw",
        height: "300vw",
        delay: 0.3,
        duration: 1.8,
        ease: "power4.inOut"
      },
      0
    );
    outroTimeline.to(
      ".loader_block",
      {
        scale: 250,
        opacity: 0,
        delay: 0,
        duration: 2,
        ease: "power4.inOut"
      },
      0
    );
    outroTimeline.to(
      ".splash-screen-1",
      {
        opacity: 1,
        delay: 0,
        duration: 0.3,
        ease: "power2.in"
      },
      0
    );

    gsap.to("body", {
      backgroundColor: "#fac4f3",
      delay: 0.6,
      duration: 0.2,
      ease: "power3.in"
    });
    gsap.from(
      ".splash-logo, .splash-heading, .splash-body, .slide-to-unlock, .eye-svg, .star-1, .star-2, .star-3, .star-4",
      {
        y: "+=56px",
        delay: 1.1,
        stagger: 0.1,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }
    );
    let starTimeline = gsap.timeline({ yoyo: true, repeat: -1 });
    starTimeline.to(".star-1, .star-2, .star-3, .star-4", {
      rotate: 10,
      duration: 2,
      stagger: 1,
      ease: "power1.inOut"
    });

    //splash background animations

    // SPLIT HEADING INTO CHAR
    let typeSplit = new SplitType(".splash-heading", {
      types: "words, chars",
      tagName: "span"
    });

    let splashHeadingFloat = gsap.timeline({});
    splashHeadingFloat.to($(".splash-heading.line-one").find(".char"), {
      y: "-=16px",
      stagger: { amount: 1, yoyo: true, repeat: -1 },
      duration: 1.2,
      ease: "power1.inOut"
    });
    splashHeadingFloat.to(
      $(".splash-heading.line-two").find(".char"),
      {
        y: "-=16px",
        stagger: { amount: 1, yoyo: true, repeat: -1 },
        duration: 1.2,
        ease: "power1.inOut"
      },
      0
    );
  }

  let tl = gsap.timeline({
    onComplete: endLoaderAnimation
  });
  tl.to(counter, {
    value: 100,
    delay: 2,
    onUpdate: updateLoaderText,
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
  });
  tl.to(
    ".loader-bar",
    {
      width: "100%",
      delay: 2,
      duration: loaderDuration,
      ease: CustomEase.create("custom", customEase)
    },
    0
  );
}

if (sessionStorage.getItem("visited") !== null) {
  $(".loading-screen").css("display", "none");
  $(".splash-screen").css("display", "none");
  $(".loading-screen").css("z-index", 0);
  $(".splash-screen").css("z-index", 0);
  $(".content-wrapper-categories").css("opacity", "100");
  document.querySelector("body").style.background = "#f094e4";
}
sessionStorage.setItem("visited", "true");

//swipe to unlock drag

let dragContainer = document.querySelector(".drag-container");
let hitArea = document.querySelector(".hitarea");
let slideToUnlock = document.querySelector(".slide-to-unlock");

Draggable.create(".drag-handle", {
  type: "x",
  bounds: dragContainer,
  // onDrag: adjustSplashOpacity,
  // onThrowUpdate: adjustSplashOpacity,
  onPress: function () {
    //function to grow
    gsap.to(slideToUnlock, { scale: 1.05, duration: 0.4, ease: "power4.out" });
  },
  onRelease: function () {
    //function to reset
    gsap.to(slideToUnlock, { scale: 1, duration: 0.4, ease: "power4.out" });
  },
  onDragEnd: function (pointerEvent) {
    // check if hit and is correct number
    const hit = this.hitTest(hitArea);
    const speed = 0.35;
    const easing = "back.out(1)";
    if (!hit) {
      gsap.to(this.target, { x: 0, y: 0, duration: speed, ease: easing });
    } else {
      const a = hitArea.getBoundingClientRect();
      const b = this.target.getBoundingClientRect();

      gsap.to(this.target, {
        x: this.x - (b.right - a.right + 8),
        y: this.y - (b.top - a.top)
      });
      walkthroughAnimation();
      this.kill();
    }
  }
});
let walkthroughTL = gsap.timeline({});
let loadInTimeline = gsap.timeline({});

function walkthroughAnimation() {
  $(".first-up-title").show();
  $("body").css("background-color", "#f094e4");
  $(".content-wrapper-categories").css("transform", "scale(0.8)");
  $(".content-wrapper-categories").css("opacity", "0");
  walkthroughTL.to(".splash-screen", {
    y: "-110vh",
    duration: 1.2,
    ease: "power2.inOut"
  });
  walkthroughTL.fromTo(
    ".first-up-title-1, .first-up-title-2",
    {
      y: "+=32px",
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.8,
      stagger: 0.1,
      ease: "power4.out"
    },
    0
  );
  walkthroughTL.to(".first-up-title-1, .first-up-title-2", {
    y: "-=40px",
    opacity: 0,
    ease: "power4.in",
    delay: 0.6,
    stagger: 0.1,
    duration: 1
  });
  setTimeout(() => {
    unlockAnimation();
    $(".first-up-title").css("display", "none");
  }, "3800");
}

function unlockAnimation() {
  loadInTimeline.to(
    ".content-wrapper-categories",
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5
    },
    0
  );
  loadInTimeline.fromTo(
    ".animation-wrapper",
    {
      scale: 0
    },
    {
      scale: 1,
      delay: 0,
      duration: 1.5,
      ease: "power2.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".select-category-button",
    {
      scale: 0.4,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      delay: 0.3,
      duration: 1.5,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".slider-container",
    {
      scale: 0.3
    },
    {
      scale: 1,
      delay: 0,
      duration: 1,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".category-subtitle",
    {
      opacity: 0,
      scale: 0.8
    },
    {
      scale: 1,
      opacity: 1,
      delay: 0.4,
      duration: 1,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".category-title",
    {
      opacity: 0,
      scale: 0.8
    },
    {
      scale: 1,
      opacity: 1,
      delay: 0.5,
      duration: 1,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".tag-1-container, .tag-2-container",
    {
      y: "+=20",
      scale: 0.8,
      opacity: 0
    },
    {
      y: "-=20",
      opacity: 1,
      delay: 0.1,
      duration: 1,
      scale: 1,
      stagger: 0.1,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".category-heading, .swiper-dots",
    {
      y: "+=32",
      opacity: 0,
      delay: 0,
      duration: 0
    },
    {
      y: "-=32",
      opacity: 1,
      delay: 0.5,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out"
    },
    0
  );
}

var dragPosition = dragContainer.getBoundingClientRect();

// category swiper

var swiperCat = new Swiper(".swiper.swiper-category", {
  //slidesPerView: 4,
  initialSlide: 0,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 32,
  loop: false,
  speed: 500,
  pagination: {
    el: ".swiper-dots",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    }
  }
});

// swiper background transitions

//set titles to default state
let firstTitle = document.querySelector(".title-wrapper :nth-child(1)");
let secondTitle = document.querySelector(".title-wrapper :nth-child(2)");
let thirdTitle = document.querySelector(".title-wrapper :nth-child(3)");
let fourthTitle = document.querySelector(".title-wrapper :nth-child(4)");
let firstSubTitle = document.querySelector(".subtitle-wrapper :nth-child(1)");
let secondSubTitle = document.querySelector(".subtitle-wrapper :nth-child(2)");
let thirdSubTitle = document.querySelector(".subtitle-wrapper :nth-child(3)");
let fourthSubTitle = document.querySelector(".subtitle-wrapper :nth-child(4)");

$([
  secondTitle,
  thirdTitle,
  fourthTitle,
  secondSubTitle,
  thirdSubTitle,
  fourthSubTitle
]).css("opacity", "0");

let titleDuration = 0.8;
let titleStagger = 0.0;
let titleDelay = 0;

swiperCat.on("slideNextTransitionStart", function (e) {
  if (this.activeIndex == 0) {
    nextTo0();
  }
  if (this.activeIndex == 1) {
    nextTo1();
  }
  if (this.activeIndex == 2) {
    nextTo2();
  }
  if (this.activeIndex == 3) {
    nextTo3();
  }
});

function nextTo0() {
  document.querySelector("body").style.background = "#f094e4";
  gsap.fromTo(
    [firstTitle, firstSubTitle],
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      secondTitle,
      thirdTitle,
      fourthTitle,
      secondSubTitle,
      thirdSubTitle,
      fourthSubTitle
    ],
    {
      x: "-120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

function nextTo1() {
  document.querySelector("body").style.background = "#FFDC5C";
  gsap.fromTo(
    [secondTitle, secondSubTitle],
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      firstTitle,
      thirdTitle,
      fourthTitle,
      firstSubTitle,
      thirdSubTitle,
      fourthSubTitle
    ],
    {
      x: "-120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

function nextTo2() {
  document.querySelector("body").style.background = "#C6CCF8";
  gsap.fromTo(
    [thirdTitle, thirdSubTitle],
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      firstTitle,
      secondTitle,
      fourthTitle,
      firstSubTitle,
      secondSubTitle,
      fourthSubTitle
    ],
    {
      x: "-120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

function nextTo3() {
  document.querySelector("body").style.background = "#C7F1FF";
  // $(".category-subtitle").css("color", "#ffffff");
  gsap.fromTo(
    [fourthTitle, fourthSubTitle],
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      firstTitle,
      secondTitle,
      thirdTitle,
      firstSubTitle,
      secondSubTitle,
      thirdSubTitle
    ],
    {
      x: "-120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

swiperCat.on("slidePrevTransitionStart", function (e) {
  if (this.activeIndex == 0) {
    backTo0();
  }
  if (this.activeIndex == 1) {
    backTo1();
  }
  if (this.activeIndex == 2) {
    backTo2();
  }
  if (this.activeIndex == 3) {
    backTo3();
  }
});

function backTo0() {
  document.querySelector("body").style.background = "#f094e4";
  gsap.fromTo(
    [firstTitle, firstSubTitle],
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      secondTitle,
      thirdTitle,
      fourthTitle,
      secondSubTitle,
      thirdSubTitle,
      fourthSubTitle
    ],
    {
      x: "120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

function backTo1() {
  document.querySelector("body").style.background = "#FFDC5C";
  gsap.fromTo(
    [secondTitle, secondSubTitle],
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      firstTitle,
      thirdTitle,
      fourthTitle,
      firstSubTitle,
      thirdSubTitle,
      fourthSubTitle
    ],
    {
      x: "120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

function backTo2() {
  document.querySelector("body").style.background = "#C6CCF8";
  gsap.fromTo(
    [thirdTitle, thirdSubTitle],
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      firstTitle,
      secondTitle,
      fourthTitle,
      firstSubTitle,
      secondSubTitle,
      fourthSubTitle
    ],
    {
      x: "120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

function backTo3() {
  $(".category-heading").css("color", "#111111");
  $(".swiper-pagination-bullet").css("background", "#222222");
  document.querySelector("body").style.background = "#C7F1FF";
  gsap.fromTo(
    [fourthTitle, fourthSubTitle],
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out"
    }
  );
  gsap.to(
    [
      firstTitle,
      secondTitle,
      thirdTitle,
      firstSubTitle,
      secondSubTitle,
      thirdSubTitle
    ],
    {
      x: "120px",
      opacity: 0,
      delay: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
}

////////////////////////////////////////////////////////////
// POPUP CODE HERE
// get the relative size & position values to apply to an image
function getDifference(cardBG, popupBG) {
  let cardWidth = cardBG.innerWidth();
  let cardHeight = cardBG.innerHeight();
  let offsetLeft = cardBG.offset().left - popupBG.offset().left;
  let offsetTop = cardBG.offset().top - popupBG.offset().top;
  // return transformValue
  return [offsetLeft, offsetTop, cardWidth, cardHeight];
}

// OPEN POPUP

//select button
$(".select-category-button").on("click", function () {
  let activeCategoryLink = $(".swiper-slide-active").find(
    ".category-card-link"
  );
  $(activeCategoryLink).click();
});

//Popup click
$(".category-card-link").on("click", function () {
  currentCategory = swiperCat.realIndex;

  // get images to animate to & from
  let myIndex = $(this).parent().index();
  let cardBG = $(this).find(".category-card");
  let popupBG = $(".popup_item").eq(myIndex).find(".popup_background");
  //popupBackgroundColor = popupBG.style.background;
  let closeContainer = $(".popup_item")
    .eq(myIndex)
    .find(".popup_close_container");
  let popupTitle = $(".popup_item").eq(myIndex).find(".category-popup-title");
  let popupBody = $(".popup_item").eq(myIndex).find(".category_popup_body");
  let popupTags = $(".popup_item").eq(myIndex).find(".popup_tags_container");
  let popupPlayButton = $(".popup_item").eq(myIndex).find(".play-game-button");
  let anim1 = $(".popup_item").eq(myIndex).find(".animation-wrapper");
  let anim2 = $(".popup_item").eq(myIndex).find(".animation-wrapper-2");
  let anim3 = $(".popup_item").eq(myIndex).find(".animation-wrapper-3");
  let anim4 = $(".popup_item").eq(myIndex).find(".animation-wrapper-4");
  let tagContainer = $(".popup_item").eq(myIndex).find(".tag-wrapper");

  let secondaryColor = $(popupTitle).css("color");
  popupSecondaryColor = secondaryColor;
  let primaryBGColor = $(".popup_item").eq(myIndex).find(".popup_background");
  let primaryColor = $(primaryBGColor).css("backgroundColor");
  popupPrimaryColor = primaryColor;

  // set initial display states
  $(".popup_item").removeClass("active");
  $(".popup_item").eq(myIndex).addClass("active");
  $(".popup").css("display", "block");
  //$("body").addClass("no-scroll");
  $("body").addClass("popup-open");
  cardBG.css("opacity", 0);
  $(".popup").css("pointer-events", "none");

  let transformValue = getDifference(cardBG, popupBG);

  //only allow for touch events after all animations are done to avoid bugs
  function makeActive() {
    $(".popup").css("pointer-events", "auto");
    $(".content-wrapper-categories").css("transform", "scale(1)");
  }

  // animations
  gsap.fromTo(
    popupBG,
    {
      x: transformValue[0],
      y: transformValue[1],
      width: transformValue[2],
      height: transformValue[3],
      borderRadius: "148px"
    },
    {
      x: 0,
      y: 0,
      width: "100vw",
      height: "100%",
      duration: 1,
      delay: 0,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
      borderRadius: "0px"
    }
  );
  gsap.fromTo(
    [closeContainer, popupTitle, popupBody, popupTags, popupPlayButton],
    {
      opacity: 0,
      y: "+=40"
    },
    {
      y: "0",
      opacity: 1,
      duration: 1,
      delay: 0.2,
      stagger: 0.1,
      ease: "power4.out",
      onComplete: makeActive
    }
  );
  gsap.fromTo(
    tagContainer,
    {
      opacity: 1
    },
    {
      opacity: 0,
      duration: 0.2,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    [anim1, anim2, anim3, anim4],
    {
      scale: 1
    },
    {
      y: "+=16px",
      scale: 1.2,
      duration: 1,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    ".content-wrapper-categories",
    {
      scale: 1,
      filter: "blur(0px)"
    },
    {
      scale: 0.8,
      filter: "blur(8px)",
      duration: 0.9,
      delay: 0,
      ease: "power4.out"
    }
  );
});

// CLOSE POPUP

//defining popuscreen element for outside this function
$(".popup_close").on("click", function () {
  let myIndex = $(".popup_item.active").index();
  let popupBG = $(".popup_item.active .popup_background");
  let cardBG = $(".category-card-link").eq(myIndex).find(".category-card");
  let closeContainer = $(".popup_item")
    .eq(myIndex)
    .find(".popup_close_container");
  let popupTitle = $(".popup_item").eq(myIndex).find(".category-popup-title");
  let popupBody = $(".popup_item").eq(myIndex).find(".category_popup_body");
  let popupTags = $(".popup_item").eq(myIndex).find(".popup_tags_container");
  let popupPlayButton = $(".popup_item").eq(myIndex).find(".play-game-button");
  let anim1 = $(".popup_item").eq(myIndex).find(".animation-wrapper");
  let anim2 = $(".popup_item").eq(myIndex).find(".animation-wrapper-2");
  let anim3 = $(".popup_item").eq(myIndex).find(".animation-wrapper-3");
  let anim4 = $(".popup_item").eq(myIndex).find(".animation-wrapper-4");
  let tagContainer = $(".popup_item").eq(myIndex).find(".tag-wrapper");
  $(".content-wrapper-categories").css("transform", "scale(1)");
  let transformValue = getDifference(cardBG, popupBG);

  function closePopup() {
    $("body").removeClass("popup-open");
    $(".popup").css("display", "none");
    cardBG.css("opacity", 1);
    popupBG.css("transform", "none");
  }

  function popupClosed() {
    document.querySelector(".popup_back").style.opacity = "0";
    document.querySelector(".popup_content_wrapper_1").style.transform =
      "scale(1)";
  }

  // animations
  gsap.fromTo(
    popupBG,
    {
      x: 0,
      y: 0,
      width: "100vw",
      height: "100%",
      borderRadius: "0px"
    },
    {
      x: transformValue[0],
      y: transformValue[1],
      width: transformValue[2],
      height: transformValue[3],
      borderRadius: "148px",
      onComplete: closePopup,
      duration: 0.9,
      delay: 0.05,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 ")
    }
  );
  gsap.fromTo(
    [closeContainer, popupTitle, popupBody, popupTags, popupPlayButton],
    {
      opacity: 1
    },
    {
      opacity: 0,
      duration: 0.6,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    [anim1, anim2, anim3, anim4],
    {
      scale: 1.2
    },
    {
      y: "0px",
      scale: 1,
      duration: 0.8,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    tagContainer,
    {
      opacity: 0
    },
    {
      opacity: 1,
      delay: 0.3,
      duration: 0.3,
      ease: "power4.out"
    }
  );
  gsap.to(".popup_content_wrapper_1", {
    opacity: 1,
    duration: 1,
    ease: "power4.out"
  });

  gsap.fromTo(
    ".content-wrapper-categories",
    {
      scale: 0.8,
      filter: "blur(8px)"
    },
    {
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.09,
      ease: "power4.out",
      onComplete: popupClosed
    }
  );
});

//////////////////// Gameplay Code /////////////////////

var swiper = new Swiper(".swiper.levelone", {
  effect: "cards"
});
var swiper = new Swiper(".swiper.leveltwo", {
  effect: "cards"
});
var swiper = new Swiper(".swiper.levelthree", {
  effect: "cards"
});

$(".swiper-next").on("click", function () {
  swiper.slideNext();
});

let firstTime = true;

//Hit play button to open gameplay
$(".play-game-button").on("click", function () {
  $(".gameplay").show();
  setGameplayCategory();
  if (firstTime) {
    document.querySelector(".first-wrapper").style.display = "flex";
    gsap.from(".first-heading, .first-step-row, .dismiss-first, .first-tip", {
      y: "+=100",
      opacity: 0,
      duration: 2,
      stagger: 0.1,
      delay: 1.2,
      ease: "power4.out"
    });
    document.querySelector(".category-1-cards").style.opacity = 0;
    document.querySelector(".category-2-cards").style.opacity = 0;
    document.querySelector(".category-3-cards").style.opacity = 0;
    document.querySelector(".category-4-cards").style.opacity = 0;
    document.querySelector(".gameplay-nav-bottom").style.opacity = 0;
  } else {
    firstTime = false;
  }
  //popupPrimaryColor
  document.querySelector(".first-heading").style.color = popupPrimaryColor;
  const firstStepNumbers = document.querySelectorAll(".first-step-number");
  firstStepNumbers.forEach((firstStepNumber) => {
    firstStepNumber.style.color = popupPrimaryColor;
  });
  document.querySelector(
    ".dismiss-first"
  ).style.backgroundColor = popupPrimaryColor;
  document.querySelector(
    ".level-slider-element"
  ).style.backgroundColor = popupSecondaryColor;
  gsap.to(".gameplay-underlay", {
    opacity: 0.5,
    duration: 1,
    ease: "power4.out"
  });
  gsap.to(".popup_content_wrapper_1", {
    scale: 0.8,
    duration: 1,
    ease: "power4.out"
  });
  gsap.fromTo(
    ".gameplay",
    {
      y: "100vh"
    },
    {
      y: 0,
      delay: 0.4,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 ")
    }
  );
  document.querySelector(".level-chip-label.two").style.display = "flex";
  document.querySelector(".level-chip-label.three").style.display = "flex";
  if (currentCategory === 2 || currentCategory === 1) {
    document.querySelector(".level-chip-label.two").style.display = "none";
    document.querySelector(".level-chip-label.three").style.display = "none";
  }
});

function setGameplayCategory() {
  // Select all the category cards
  const categoryCards = document.querySelectorAll(
    ".category-1-cards, .category-2-cards, .category-3-cards, .category-4-cards"
  );

  // Loop through each category card and hide them
  categoryCards.forEach((card) => {
    card.style.display = "none";
  });

  // Select the gameplay container and title
  const gameplay = document.querySelector(".gameplay");
  const gameplayTitle = document.querySelector(".gameplay-title");

  if (currentCategory === 0) {
    gameplay.style.backgroundColor = "#f094e4";
    gameplayTitle.textContent = "Big Talk";
    document.querySelector(".category-1-cards").style.display = "flex";
  } else if (currentCategory === 1) {
    gameplay.style.backgroundColor = "#ffdc5c";
    gameplayTitle.textContent = "Debateable";
    document.querySelector(".category-2-cards").style.display = "flex";
  } else if (currentCategory === 2) {
    gameplay.style.backgroundColor = "#c6ccf8";
    gameplayTitle.textContent = "Pillow Talk";
    document.querySelector(".category-3-cards").style.display = "flex";
  } else if (currentCategory === 3) {
    gameplay.style.backgroundColor = "#c7f1ff";
    gameplayTitle.textContent = "Honest Dating";
    document.querySelector(".category-4-cards").style.display = "flex";
  }
}
$(".dismiss-first").on("click", function () {
  gsap.to(".first-wrapper", {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    onComplete: firstTimeDone
  });
  gsap.fromTo(
    ".category-1-cards, .category-2-cards, .category-3-cards, .category-4-cards, .gameplay-nav-bottom",
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      delay: 0.3,
      stagger: -0.1,
      ease: "power4.out"
    }
  );
  setGameplayCategory();
  firstTime = false;
  if (currentCategory === 2 || currentCategory === 1) {
    document.querySelector(".level-chip-label.two").style.display = "none";
    document.querySelector(".level-chip-label.three").style.display = "none";
  }
});

function firstTimeDone() {
  document.querySelector(".first-wrapper").style.display = "none";
}

const levelSlider = document.querySelector(".level-slider-element");

// Level interactions
const levelOneSwipers = document.querySelectorAll(":scope .swiper.levelone");
const levelTwoSwipers = document.querySelectorAll(":scope .swiper.leveltwo");
const levelThreeSwipers = document.querySelectorAll(
  ":scope .swiper.levelthree"
);

$(".level-chip-label.one").on("click", function () {
  //Adjust class to make bold or regular
  document.querySelector(".level-chip-label.one").classList.add("active");
  document.querySelector(".level-chip-label.two").classList.remove("active");
  document.querySelector(".level-chip-label.three").classList.remove("active");
  levelSlider.style.transform = "translateX(0px)";
  levelOneSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(0px) rotate(0deg)";
    swiper.style.opacity = "1";
  });
  levelTwoSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(150vw) rotate(10deg)";
    swiper.style.opacity = "0.5";
  });
  levelThreeSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(150vw) rotate(10deg)";
    swiper.style.opacity = "0.5";
  });
});
$(".level-chip-label.two").on("click", function () {
  //Adjust class to make bold or regular
  document.querySelector(".level-chip-label.one").classList.remove("active");
  document.querySelector(".level-chip-label.two").classList.add("active");
  document.querySelector(".level-chip-label.three").classList.remove("active");
  levelSlider.style.transform = "translateX(104px)";
  levelOneSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(-150vw) rotate(-10deg)";
    swiper.style.opacity = "0.5";
  });
  levelTwoSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(0px) rotate(0deg)";
    swiper.style.opacity = "1";
  });
  levelThreeSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(150vw) rotate(10deg)";
    swiper.style.opacity = "0.5";
  });
});
$(".level-chip-label.three").on("click", function () {
  //Adjust class to make bold or regular
  document.querySelector(".level-chip-label.one").classList.remove("active");
  document.querySelector(".level-chip-label.two").classList.remove("active");
  document.querySelector(".level-chip-label.three").classList.add("active");
  levelSlider.style.transform = "translateX(208px)";
  levelOneSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(-150vw) rotate(-10deg)";
    swiper.style.opacity = "0.5";
  });
  levelTwoSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(-150vw) rotate(-10deg)";
    swiper.style.opacity = "0.5";
  });
  levelThreeSwipers.forEach((swiper) => {
    swiper.style.transform = "translateX(0px) rotate(0deg)";
    swiper.style.opacity = "1";
  });
});

//close gameplay

$(".close-gameplay").on("click", function () {
  setTimeout(function () {
    $(".level-chip-label.one").click();
  }, 1000);

  gsap.fromTo(
    ".gameplay-underlay",
    {
      opacity: 0.5
    },
    {
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }
  );
  gsap.to(".popup_content_wrapper_1", {
    scale: 1,
    duration: 1,
    ease: "power4.out"
  });
  gsap.to(".gameplay", {
    y: "100vh",
    duration: 1,
    ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 ")
  });
  gsap.from(".content-wrapper-categories", {
    filter: "blur(8px)",
    scale: 0.8,
    duration: 1,
    ease: "power2.out"
  });
  gsap.to(".gameplay-underlay", {
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});