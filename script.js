// Get color variables from css
const colorChipBlack = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--black");
const colorChipPink = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--pink");
const colorChipDarkPink = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--darkpink");
const colorChipRed = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--red");
const colorChipDarkRed = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--darkred");
const colorChipGreen = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--green");
const colorChipDarkGreen = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--darkgreen");
const colorChipOrange = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--orange");
const colorChipDarkOrange = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--darkorange");
const colorChipYellow = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--yellow");
const colorChipPlum = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--plum");
const colorChipDarkPlum = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--darkplum");
const colorChipPurple = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--purple");
const colorChipLightPurple = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--lightpurple");
const colorChipLightBlue = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--lightblue");
const colorChipCream = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--cream");

// SPLIT HEADING INTO CHAR
let splashSplit = new SplitType(".splash-heading", {
  types: "words, chars",
  tagName: "span",
});

let splashHeadingFloat = gsap.timeline({});
splashHeadingFloat.to($(".splash-heading.line-one").find(".char"), {
  y: "-=16px",
  stagger: { amount: 1, yoyo: true, repeat: -1 },
  duration: 1.2,
  ease: "power1.inOut",
});
splashHeadingFloat.to(
  $(".splash-heading.line-two").find(".char"),
  {
    y: "-=16px",
    stagger: { amount: 1, yoyo: true, repeat: -1 },
    duration: 1.2,
    ease: "power1.inOut",
  },
  0
);

// SPLASH SCREEN

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
        y: this.y - (b.top - a.top),
      });
      //do something
      unlockScreen();
      this.kill();
    }
  },
});

//UNLOCKING SCREEN TO CATS

function unlockScreen() {
  categoryScreen.style.display = "flex";
  gsap.to(".splash", {
    y: "-100vh",
    duration: 1.2,
    ease: "power2.inOut",
  });
  let walkthroughTL = gsap.timeline({});
  walkthroughTL.fromTo(
    ".first-up-title-1, .first-up-title-2",
    {
      y: "+=32px",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.8,
      stagger: 0.1,
      ease: "power4.out",
    },
    0
  );
  walkthroughTL.to(".first-up-title-1, .first-up-title-2", {
    y: "-=40px",
    opacity: 0,
    ease: "power4.in",
    delay: 0.3,
    stagger: 0.1,
    duration: 1,
  });
  walkthroughTL.to(".category-content", {
    opacity: 1,
    ease: "power4.in",
  });
}

const swiperCat = new Swiper(".swiper.cats", {
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
    },
  },
});

let firstTitle = "";
let secondTitle = "";
let thirdTitle = "";
let fourthTitle = "";

//Fetch data for the headings
fetch("http://localhost:1337/api/categories", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;
    const swiperWrapper = document.querySelector(".category-heading-wrapper");
    categories.forEach((category) => {
      // // create a new div element
      const slide = document.createElement("div");
      slide.classList.add("category-title");

      // create the title element
      const title = document.createElement("h1");

      // set the text content of the title element
      title.textContent = category.attributes.Title;
      title.style.color = category.attributes.PrimaryColor;

      // append the title element to the slide element
      slide.appendChild(title);

      // create the subtitle element
      const subtitle = document.createElement("p");
      subtitle.classList.add("subtitle-copy");

      // set the text content of the subtitle element
      subtitle.textContent = category.attributes.Subtitle;
      subtitle.style.color = category.attributes.PrimaryColor;

      // append the subtitle element to the slide element
      slide.appendChild(subtitle);

      // append the slide element to the swiper-wrapper element
      swiperWrapper.appendChild(slide);

      //assign titles to vars
      firstTitle = document.querySelector(
        "body > div.category > div.category-content > div.slider-container > div.category-heading-wrapper > div:nth-child(1)"
      );
      secondTitle = document.querySelector(
        "body > div.category > div.category-content > div.slider-container > div.category-heading-wrapper > div:nth-child(2)"
      );
      thirdTitle = document.querySelector(
        "body > div.category > div.category-content > div.slider-container > div.category-heading-wrapper > div:nth-child(3)"
      );
      fourthTitle = document.querySelector(
        "body > div.category > div.category-content > div.slider-container > div.category-heading-wrapper > div:nth-child(4)"
      );
    });
    secondTitle.style.transform = "translateX(150px)";
    secondTitle.style.opacity = "0";
    thirdTitle.style.transform = "translateX(150px)";
    thirdTitle.style.opacity = "0";
    fourthTitle.style.transform = "translateX(150px)";
    fourthTitle.style.opacity = "0";
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//Fetch data for category slider
fetch("http://localhost:1337/api/categories", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;
    const swiperWrapper = document.querySelector(".swiper-wrapper.cats");
    const slideTemplate = document.querySelector(".swiper-slide-cat-template");

    categories.forEach((category, i) => {
      //clone the template
      const slideClone = slideTemplate.cloneNode(true);
      slideClone.classList.add("swiper-slide");
      slideClone.classList.add("category");
      slideClone.classList.remove("swiper-slide-cat-template");

      const innerDiv = slideClone.querySelector(".category-card");
      innerDiv.style.backgroundColor = category.attributes.PrimaryColor;

      if (i === 0) {
        // create the animation 1 rings
        const animOneRingOne = document.createElement("div");
        animOneRingOne.classList.add("a1-r1");
        const animOneRingTwo = document.createElement("div");
        animOneRingTwo.classList.add("a1-r2");
        const animOneRingThree = document.createElement("div");
        animOneRingThree.classList.add("a1-r3");
        const animOneRingFour = document.createElement("div");
        animOneRingFour.classList.add("a1-r4");

        const animWrapper = document.createElement("div");
        animWrapper.classList.add("animation-wrapper");
        animWrapper.appendChild(animOneRingOne);
        animWrapper.appendChild(animOneRingTwo);
        animWrapper.appendChild(animOneRingThree);
        animWrapper.appendChild(animOneRingFour);

        //append the element to category card
        innerDiv.appendChild(animWrapper);
      }

      if (i === 1) {
        // create the animation 1 rings
        const animTwoRingOne = document.createElement("div");
        animTwoRingOne.classList.add("a2-r1");
        const animTwoRingTwo = document.createElement("div");
        animTwoRingTwo.classList.add("a2-r2");
        const animTwoRingThree = document.createElement("div");
        animTwoRingThree.classList.add("a2-r3");

        const animWrapper = document.createElement("div");
        animWrapper.classList.add("animation-wrapper");
        animWrapper.appendChild(animTwoRingOne);
        animWrapper.appendChild(animTwoRingTwo);
        animWrapper.appendChild(animTwoRingThree);

        //append the element to category card
        innerDiv.appendChild(animWrapper);
      }

      slideClone.addEventListener("click", function () {
        openPopup.call($(this));
      });
      // append the slide element to the swiper-wrapper element
      swiperWrapper.appendChild(slideClone);
      swiperCat.update();
    });
    slideTemplate.style.display = "none";
    playCategoryAnimations();
  })
  .catch((error) => {
    console.log("Error:", error);
  });

$([secondTitle, thirdTitle, fourthTitle]).css("opacity", "0");

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
    firstTitle,
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([secondTitle, thirdTitle, fourthTitle], {
    x: "-120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

function nextTo1() {
  document.querySelector("body").style.background = "#FFDC5C";
  gsap.fromTo(
    secondTitle,
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([firstTitle, thirdTitle, fourthTitle], {
    x: "-120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

function nextTo2() {
  document.querySelector("body").style.background = "#C6CCF8";
  gsap.fromTo(
    thirdTitle,
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([firstTitle, secondTitle, fourthTitle], {
    x: "-120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

function nextTo3() {
  document.querySelector("body").style.background = "#C7F1FF";
  // $(".category-subtitle").css("color", "#ffffff");
  gsap.fromTo(
    fourthTitle,
    { x: "120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([firstTitle, secondTitle, thirdTitle], {
    x: "-120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
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
    firstTitle,
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([secondTitle, thirdTitle, fourthTitle], {
    x: "120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

function backTo1() {
  document.querySelector("body").style.background = "#FFDC5C";
  gsap.fromTo(
    secondTitle,
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([firstTitle, thirdTitle, fourthTitle], {
    x: "120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

function backTo2() {
  document.querySelector("body").style.background = "#C6CCF8";
  gsap.fromTo(
    thirdTitle,
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([firstTitle, secondTitle, fourthTitle], {
    x: "120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

function backTo3() {
  $(".category-heading").css("color", "#111111");
  $(".swiper-pagination-bullet").css("background", "#222222");
  document.querySelector("body").style.background = "#C7F1FF";
  gsap.fromTo(
    fourthTitle,
    { x: "-120px", opacity: 0 },
    {
      x: "0px",
      opacity: 1,
      delay: titleDelay,
      stagger: titleStagger,
      duration: titleDuration,
      ease: "power3.out",
    }
  );
  gsap.to([firstTitle, secondTitle, thirdTitle], {
    x: "120px",
    opacity: 0,
    delay: 0,
    duration: 1,
    ease: "power3.out",
  });
}

//Fetch data for popup content
fetch("http://localhost:1337/api/categories", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;
    const popupWrapper = document.querySelector(".popup-list");
    const popupTemplate = document.querySelector(".popup-item-template");

    categories.forEach((category, i) => {
      //clone the template
      const slideClone = popupTemplate.cloneNode(true);
      slideClone.classList.remove("popup-item-template");
      slideClone.classList.add("popup-item");

      slideClone.style.backgroundColor = category.attributes.PrimaryColor;
      const popupTitle = slideClone.querySelector(".popup-title");
      const popupSubtitle = slideClone.querySelector(".popup-description");
      const playButton = slideClone.querySelector(".play-game-button");
      const tagOne = slideClone.querySelector(".popup-tag-copy.one");
      const tagTwo = slideClone.querySelector(".popup-tag-copy.two");
      const tagThree = slideClone.querySelector(".popup-tag-copy.three");
      const closeIcon = slideClone.querySelector("svg.close-svg");
      const closeContainer = slideClone.querySelector(".close-popup");

      popupTitle.textContent = category.attributes.Title;
      popupSubtitle.textContent = category.attributes.Description;

      closeContainer.style.backgroundColor = category.attributes.DarkColor;
      closeIcon.style.fill = category.attributes.SecondaryColor;

      tagOne.textContent = category.attributes.TagOne;
      tagTwo.textContent = category.attributes.TagTwo;
      tagThree.textContent = category.attributes.TagThree;

      tagOne.style.backgroundColor = category.attributes.DarkColor;
      tagTwo.style.backgroundColor = category.attributes.DarkColor;
      tagThree.style.backgroundColor = category.attributes.DarkColor;

      playButton.style.backgroundColor = category.attributes.SecondaryColor;
      playButton.style.color = category.attributes.PrimaryColor;
      popupTitle.style.color = category.attributes.SecondaryColor;
      popupSubtitle.style.color = category.attributes.TextColor;

      if (i === 0) {
        // create the animation 1 rings
        const animOneRingOne = document.createElement("div");
        animOneRingOne.classList.add("a1-r1");
        const animOneRingTwo = document.createElement("div");
        animOneRingTwo.classList.add("a1-r2");
        const animOneRingThree = document.createElement("div");
        animOneRingThree.classList.add("a1-r3");
        const animOneRingFour = document.createElement("div");
        animOneRingFour.classList.add("a1-r4");

        const animWrapper = document.createElement("div");
        animWrapper.classList.add("animation-wrapper");
        animWrapper.classList.add("popup");
        animWrapper.appendChild(animOneRingOne);
        animWrapper.appendChild(animOneRingTwo);
        animWrapper.appendChild(animOneRingThree);
        animWrapper.appendChild(animOneRingFour);

        //append the element to category card
        slideClone.appendChild(animWrapper);
      }

      if (i === 1) {
        // create the animation 1 rings
        const animTwoRingOne = document.createElement("div");
        animTwoRingOne.classList.add("a2-r1");
        const animTwoRingTwo = document.createElement("div");
        animTwoRingTwo.classList.add("a2-r2");
        const animTwoRingThree = document.createElement("div");
        animTwoRingThree.classList.add("a2-r3");

        const animWrapper = document.createElement("div");
        animWrapper.classList.add("animation-wrapper");
        animWrapper.classList.add("popup");

        animWrapper.appendChild(animTwoRingOne);
        animWrapper.appendChild(animTwoRingTwo);
        animWrapper.appendChild(animTwoRingThree);

        //append the element to category card
        slideClone.appendChild(animWrapper);
      }

      //add click event for the close
      slideClone.addEventListener("click", function () {
        openPopup.call($(this));
      });

      // append the slide element to the swiper-wrapper element
      popupWrapper.appendChild(slideClone);
    });
    popupTemplate.style.display = "none";
    playCategoryAnimations();
  })
  .catch((error) => {
    console.log("Error:", error);
  });

function playCategoryAnimations() {
  //Animations for category slider
  //ease variable
  animationEase = "power2.inOut";
  let animationOneTl = gsap.timeline({ yoyo: true, repeat: -1 });
  animationOneTl.fromTo(
    ".a1-r1",
    {
      x: "-8px",
    },
    { x: "+8px", duration: 1.5, ease: animationEase }
  );
  animationOneTl.fromTo(
    ".a1-r2",
    {
      x: "-32px",
    },
    { x: "+32px", duration: 1.5, ease: animationEase },
    0
  );
  animationOneTl.fromTo(
    ".a1-r3",
    {
      x: "-56px",
    },
    { x: "+56px", duration: 1.5, ease: animationEase },
    0
  );
  animationOneTl.fromTo(
    ".a1-r4",
    {
      x: "-80px",
    },
    { x: "+80px", duration: 1.5, ease: animationEase },
    0
  );

  let animationTwoTl = gsap.timeline({ yoyo: true, repeat: -1 });
  animationTwoTl.fromTo(
    ".a2-r1",
    {
      rotationX: 0,
    },
    { rotationX: 180, duration: 1.5, ease: animationEase }
  );
  animationTwoTl.fromTo(
    ".a2-r2",
    {
      rotationZ: 0,
    },
    { rotationZ: -180, duration: 1.5, ease: animationEase },
    0
  );
  animationTwoTl.fromTo(
    ".a2-r3",
    {
      rotationZ: 0,
    },
    { rotationZ: 180, duration: 1.5, ease: animationEase },
    0
  );
}

var gameplayCategory = "";
//Open popup
//select button
$(".select-category-button").on("click", function () {
  let activeCategoryLink = $(".swiper-slide-active").find(
    ".category-card-link"
  );
  $(activeCategoryLink).click();
});

var animationWrapper;

function openPopup() {
  // Get the clicked element
  var clickedElement = $(this);

  // Get the corresponding .category-card element
  var categoryCard = clickedElement.find(".category-card");

  // Get the corresponding popup item
  var popupItem = $(".popup-item").eq(clickedElement.index());

  // Get the corresponding divs inside the item
  var closePopupButton = popupItem.find(".close-popup");
  var popupTitle = popupItem.find(".popup-title");
  var popupDescription = popupItem.find(".popup-description");
  var playButton = popupItem.find(".play-game-button");
  var tagContainer = popupItem.find(".popup-tag-container");

  if ($(categoryCard).is(".category-card")) {
    animationWrapper = popupItem.find(".animation-wrapper");

    // Store the original position and dimensions of the .category-card element
    var originalX = categoryCard.offset().left;
    var originalY = categoryCard.offset().top;
    var originalWidth = categoryCard.width();
    var originalHeight = categoryCard.height();

    //set the gameplay category varaible
    gameplayCategory = clickedElement.index();
    console.log(gameplayCategory);

    // Show the popup and set its initial position and dimensions
    $(".popup").show();
    popupItem.show();
    gsap.fromTo(
      popupItem,
      {
        x: originalX,
        y: originalY,
        width: originalWidth,
        height: originalHeight,
        borderRadius: "300px",
      },
      {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
      }
    );
    gsap.fromTo(
      [
        closePopupButton,
        popupTitle,
        popupDescription,
        tagContainer,
        playButton,
      ],
      {
        opacity: 0,
        y: "+=40",
      },
      {
        y: "0",
        opacity: 1,
        duration: 1,
        delay: 0.2,
        stagger: 0.1,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      ".category",
      {
        scale: 1,
        filter: "blur(0px)",
      },
      {
        scale: 0.8,
        filter: "blur(8px)",
        duration: 0.9,
        delay: 0,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      animationWrapper,
      {
        scale: 1,
      },
      {
        scale: 1.3,
        duration: 0.9,
        ease: "power4.out",
      }
    );
    gsap.to(".category-overlay", {
      opacity: 0.5,
      duration: 0.9,
      delay: 0,
      ease: "power1.out",
    });
    // Show the corresponding popup item
    popupItem.show();
  }

  // Add an event listener to the close button
  $(".close-popup").click(function () {
    closePopup(
      originalX,
      originalY,
      originalWidth,
      originalHeight,
      popupItem,
      closePopupButton,
      popupTitle,
      popupDescription,
      playButton,
      tagContainer,
      animationWrapper
    );
  });
  $(".play-game-button").on("click", function () {
    openGameplay();
  });
}

function closePopup(
  originalX,
  originalY,
  originalWidth,
  originalHeight,
  popupItem,
  closePopupButton,
  popupTitle,
  popupDescription,
  playButton,
  tagContainer,
  animationWrapper
) {
  gsap.to(popupItem, {
    x: originalX,
    y: originalY,
    width: originalWidth,
    height: originalHeight,
    borderRadius: "300px",
    duration: 1,
    ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
    onComplete: function () {
      $(".popup").hide();
      $(popupItem).hide();
    },
  });
  gsap.fromTo(
    [closePopupButton, popupTitle, popupDescription, tagContainer, playButton],
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.3,
      ease: "power4.out",
    }
  );
  gsap.fromTo(
    animationWrapper,
    {
      scale: 1.3,
    },
    {
      scale: 1,
      duration: 0.9,
      ease: "power4.out",
    }
  );
  gsap.fromTo(
    ".category",
    {
      scale: 0.8,
      filter: "blur(8px)",
    },
    {
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.09,
      ease: "power4.out",
    }
  );
  gsap.to(".category-overlay", {
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "power4.out",
  });
}

// GAMEPLAY //

//define swipers for levels
var swiperCatOneLevelOne = new Swiper(".swiper.catone.levelone", {
  effect: "cards",
});
var swiperCatOneLevelTwo = new Swiper(".swiper.catone.leveltwo", {
  effect: "cards",
});
var swiperCatOneLevelThree = new Swiper(".swiper.catone.levelthree", {
  effect: "cards",
});

var swiperCatTwoLevelOne = new Swiper(".swiper.cattwo.levelone", {
  effect: "cards",
});
var swiperCatTwoLevelTwo = new Swiper(".swiper.cattwo.leveltwo", {
  effect: "cards",
});
var swiperCatTwoLevelThree = new Swiper(".swiper.cattwo.levelthree", {
  effect: "cards",
});

var swiperCatThreeLevelOne = new Swiper(".swiper.catthree.levelone", {
  effect: "cards",
});
var swiperCatThreeLevelTwo = new Swiper(".swiper.catthree.leveltwo", {
  effect: "cards",
});
var swiperCatThreeLevelThree = new Swiper(".swiper.catthree.levelthree", {
  effect: "cards",
});

var swiperCatFourLevelOne = new Swiper(".swiper.catfour.levelone", {
  effect: "cards",
});
var swiperCatFourLevelTwo = new Swiper(".swiper.catfour.leveltwo", {
  effect: "cards",
});
var swiperCatFourLevelThree = new Swiper(".swiper.catfour.levelthree", {
  effect: "cards",
});

// fetch data for cards

//Fetch data for big talk cards
fetch(
  "https://github.com/lukeanthonymcewan/emotionsmadeeasy/tree/new_branch_name/my-project/src/api/big-talks",
  {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
      "Content-Type": "application/json",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;

    categories.forEach((category) => {
      let level = category.attributes.Level;
      let slideTemplate;
      let swiperWrapper;

      switch (level) {
        case 1:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.one .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.one .swiper-wrapper.gameplay-cards-one"
          );
          break;
        case 2:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.one .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.one .swiper-wrapper.gameplay-cards-two"
          );
          break;
        case 3:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.one .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.one .swiper-wrapper.gameplay-cards-three"
          );
          break;
      }

      //clone the template
      const slideClone = slideTemplate.cloneNode(true);
      slideClone.classList.add("swiper-slide");
      slideClone.classList.add("game-card");
      slideClone.classList.remove("swiper-slide-game-card-template");

      const questionLabel = slideClone.querySelector(".gameplay-card-copy");
      questionLabel.textContent = category.attributes.Question;

      // append the slide element to the swiper-wrapper element
      swiperWrapper.appendChild(slideClone);
      swiperCatOneLevelOne.update();
      swiperCatOneLevelTwo.update();
      swiperCatOneLevelThree.update();
    });

    // hide the templates after all the slides are created
    document.querySelector(".swiper-slide-game-card-template").style.display =
      "none";
    document
      .querySelectorAll(".swiper-slide-game-card-template")
      .forEach(function (element) {
        element.style.display = "none";
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Fetch data for debateable cards
fetch("http://localhost:1337/api/debateables", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;

    categories.forEach((category) => {
      let level = category.attributes.Level;
      let slideTemplate;
      let swiperWrapper;

      switch (level) {
        case 1:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.two .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.two .swiper-wrapper.gameplay-cards-one"
          );
          break;
        case 2:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.two .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.two .swiper-wrapper.gameplay-cards-two"
          );
          break;
        case 3:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.two .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.two .swiper-wrapper.gameplay-cards-three"
          );
          break;
      }

      //clone the template
      const slideClone = slideTemplate.cloneNode(true);
      slideClone.classList.add("swiper-slide");
      slideClone.classList.add("game-card");
      slideClone.classList.remove("swiper-slide-game-card-template");

      const questionLabel = slideClone.querySelector(".gameplay-card-copy");
      questionLabel.textContent = category.attributes.Question;

      // append the slide element to the swiper-wrapper element
      swiperWrapper.appendChild(slideClone);
      swiperCatTwoLevelOne.update();
      swiperCatTwoLevelTwo.update();
      swiperCatTwoLevelThree.update();
    });

    // hide the templates after all the slides are created
    document.querySelector(".swiper-slide-game-card-template").style.display =
      "none";
    document
      .querySelectorAll(".swiper-slide-game-card-template")
      .forEach(function (element) {
        element.style.display = "none";
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Fetch data for pillow talk cards
fetch("http://localhost:1337/api/pillow-talks", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;

    categories.forEach((category) => {
      let level = category.attributes.Level;
      let slideTemplate;
      let swiperWrapper;

      switch (level) {
        case 1:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.three .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.three .swiper-wrapper.gameplay-cards-one"
          );
          break;
        case 2:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.three .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.three .swiper-wrapper.gameplay-cards-two"
          );
          break;
        case 3:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.three .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.three .swiper-wrapper.gameplay-cards-three"
          );
          break;
      }

      //clone the template
      const slideClone = slideTemplate.cloneNode(true);
      slideClone.classList.add("swiper-slide");
      slideClone.classList.add("game-card");
      slideClone.classList.remove("swiper-slide-game-card-template");

      const questionLabel = slideClone.querySelector(".gameplay-card-copy");
      questionLabel.textContent = category.attributes.Question;

      // append the slide element to the swiper-wrapper element
      swiperWrapper.appendChild(slideClone);
      swiperCatThreeLevelOne.update();
      swiperCatThreeLevelTwo.update();
      swiperCatThreeLevelThree.update();
    });

    // hide the templates after all the slides are created
    document.querySelector(".swiper-slide-game-card-template").style.display =
      "none";
    document
      .querySelectorAll(".swiper-slide-game-card-template")
      .forEach(function (element) {
        element.style.display = "none";
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//Fetch data for dating cards
fetch("http://localhost:1337/api/honest-datings", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 7501ae3d10a89aa29146d84013760c10ebd3d19f4f8f6dbad9a9b238fc5566bcdee949eaa7cd1e114e4206592cc20732744e4ae5ca67761e4c856ddea594e1084375a0be8ea9e4e99937fa0490498cb2625964257350f88279a2eec3e58a7d5db05733c48e8737ef27576a73778e8971a7f685ff910a907fcf4aed061dd571b0",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const categories = data.data;

    categories.forEach((category) => {
      let level = category.attributes.Level;
      let slideTemplate;
      let swiperWrapper;

      switch (level) {
        case 1:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.four .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.four .swiper-wrapper.gameplay-cards-one"
          );
          break;
        case 2:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.four .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.four .swiper-wrapper.gameplay-cards-two"
          );
          break;
        case 3:
          slideTemplate = document.querySelector(
            ".gameplay-canvas.four .swiper-slide-game-card-template"
          );
          swiperWrapper = document.querySelector(
            ".gameplay-canvas.four .swiper-wrapper.gameplay-cards-three"
          );
          break;
      }

      //clone the template
      const slideClone = slideTemplate.cloneNode(true);
      slideClone.classList.add("swiper-slide");
      slideClone.classList.add("game-card");
      slideClone.classList.remove("swiper-slide-game-card-template");

      const questionLabel = slideClone.querySelector(".gameplay-card-copy");
      questionLabel.textContent = category.attributes.Question;

      // append the slide element to the swiper-wrapper element
      swiperWrapper.appendChild(slideClone);
      swiperCatFourLevelOne.update();
      swiperCatFourLevelTwo.update();
      swiperCatFourLevelThree.update();
    });

    // hide the templates after all the slides are created
    document.querySelector(".swiper-slide-game-card-template").style.display =
      "none";
    document
      .querySelectorAll(".swiper-slide-game-card-template")
      .forEach(function (element) {
        element.style.display = "none";
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

let currentParentPopupItem;
let currentPopupBackground;

function openGameplay() {
  //get current popup background
  currentParentPopupItem = document.querySelector(
    '.popup-item:not([style*="display: none"])'
  );
  let currentPopupBackground = $(currentParentPopupItem).find(
    ".popup-background"
  );

  $(".gameplay").show();
  $(".popup-overlay").show();
  updateGameplayCanvas();

  //set the first time colors

  $(".dismiss-first-button").css(
    "background-color",
    $(currentParentPopupItem).css("background-color")
  );
  $(".dismiss-first-button").css(
    "color",
    $(".gameplay").css("background-color")
  );
  $(".first-timer-title").css(
    "color",
    $(currentParentPopupItem).css("background-color")
  );
  $(".first-step-number").css(
    "color",
    $(currentParentPopupItem).css("background-color")
  );

  $(".gameplay-first-timer").css(
    "background-color",
    $(".gameplay").css("background-color")
  );

  gsap.fromTo(
    ".gameplay",
    {
      y: "100vh",
    },
    {
      y: 0,
      delay: 0.4,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
      onComplete: function () {
        onComplete: {
        }
      },
    }
  );
  gsap.fromTo(
    ".popup-overlay",
    {
      opacity: 0,
    },
    {
      opacity: 0.5,
      duration: 0.6,
      ease: "power1.out",
    }
  );
  gsap.fromTo(
    currentPopupBackground,
    {
      scale: 1,
    },
    {
      scale: 0.9,
      duration: 0.6,
      ease: "power1.out",
    }
  );
}

function firstTimeAnimation() {
  let firstTimeTimeline = gsap.timeline({});
  firstTimeTimeline.fromTo(
    ".first-timer-title, .first-steps-row, .dismiss-first-button",
    { yPercent: 150, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1.8,
      delay: 0.8,
      ease: "power4.out",
    }
  );
}

//Dismiss first time wrapper
$(".dismiss-first-button").click(function () {
  gsap.to(".gameplay-first-timer", {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
    onComplete: function () {
      onComplete: {
        $(".gameplay-first-timer").hide();
      }
    },
  });
});

//Close gameplay button
$(".close-gameplay-button").click(function () {
  closeGameplay();
});

function closeGameplay() {
  //get current popup background
  currentParentPopupItem = document.querySelector(
    '.popup-item:not([style*="display: none"])'
  );
  let currentPopupBackground = $(currentParentPopupItem).find(
    ".popup-background"
  );

  gsap.fromTo(
    ".gameplay",
    {
      y: "0vh",
    },
    {
      y: "100vh",
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
      onComplete: function () {
        onComplete: {
          $(".gameplay").show();
        }
      },
    }
  );
  gsap.fromTo(
    ".popup-overlay",
    {
      opacity: 0.5,
    },
    {
      opacity: 0,
      duration: 1.5,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
      onComplete: function () {
        onComplete: {
          $(".popup-overlay").hide();
        }
      },
    }
  );
  gsap.to(currentPopupBackground, {
    scale: 1,
    duration: 1.5,
    ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
  });
}

function updateGameplayCanvas() {
  //play animation for first timers
  firstTimeAnimation();

  //get the gameplay title element
  const gameplayTitle = document.querySelector(".gameplay-category-title");

  //check which category level is set and show the correct set of cards
  if (gameplayCategory === 0) {
    document.querySelector(".gameplay").style.backgroundColor =
      colorChipDarkPink;
    gameplayTitle.textContent = "Big talk";
    $(".swiper-slide.game-card").css("background-color", colorChipGreen);
    $(".gameplay-card-copy").css("color", colorChipDarkPink);
    document.querySelector(".gameplay-canvas.one").style.display = "flex";
    document.querySelector(".gameplay-canvas.two").style.display = "none";
    document.querySelector(".gameplay-canvas.three").style.display = "none";
    document.querySelector(".gameplay-canvas.four").style.display = "none";
  }

  if (gameplayCategory === 1) {
    document.querySelector(".gameplay").style.backgroundColor = colorChipYellow;
    gameplayTitle.textContent = "Debateable";
    $(".swiper-slide.game-card").css("background-color", colorChipOrange);
    $(".gameplay-card-copy").css("color", colorChipYellow);
    document.querySelector(".gameplay-canvas.one").style.display = "none";
    document.querySelector(".gameplay-canvas.two").style.display = "flex";
    document.querySelector(".gameplay-canvas.three").style.display = "none";
    document.querySelector(".gameplay-canvas.four").style.display = "none";
  }

  if (gameplayCategory === 2) {
    document.querySelector(".gameplay").style.backgroundColor =
      colorChipLightPurple;
    gameplayTitle.textContent = "Pillow Talk";
    $(".swiper-slide.game-card").css("background-color", colorChipPlum);
    $(".gameplay-card-copy").css("color", colorChipLightPurple);
    document.querySelector(".gameplay-canvas.one").style.display = "none";
    document.querySelector(".gameplay-canvas.two").style.display = "none";
    document.querySelector(".gameplay-canvas.three").style.display = "flex";
    document.querySelector(".gameplay-canvas.four").style.display = "none";
  }
  $(".level-slider-element").css(
    "background-color",
    $(".gameplay").css("background-color")
  );
}

let currentLevel;

//Level functionality

const levelSlider = document.querySelector(".level-slider-element");
let gameplayBackground = document.querySelector(".gameplay");

$(".level-chip-label.one").click(function () {
  document.querySelector(".level-chip-label.one").classList.add("active");
  document.querySelector(".level-chip-label.two").classList.remove("active");
  document.querySelector(".level-chip-label.three").classList.remove("active");
  levelSlider.style.transform = "translateX(0px)";

  let gameplayCanvas = $(this)
    .closest(".gameplay-wrapper")
    .find(".gameplay-canvas:visible");
  if (gameplayCanvas.length) {
    gameplayCanvas.find(".level-1-cards").css({
      transform: "translateX(0)",
    });
    gameplayCanvas.find(".level-2-cards").css({
      transform: "translateX(150vw)",
    });
    gameplayCanvas.find(".level-3-cards").css({
      transform: "translateX(150vw)",
    });
  }
});

$(".level-chip-label.two").click(function () {
  document.querySelector(".level-chip-label.one").classList.remove("active");
  document.querySelector(".level-chip-label.two").classList.add("active");
  document.querySelector(".level-chip-label.three").classList.remove("active");
  levelSlider.style.transform = "translateX(104px)";

  let gameplayCanvas = $(this)
    .closest(".gameplay-wrapper")
    .find(".gameplay-canvas:visible");
  if (gameplayCanvas.length) {
    gameplayCanvas.find(".level-1-cards").css({
      transform: "translateX(-150vw)",
    });
    gameplayCanvas.find(".level-2-cards").css({
      transform: "translateX(0)",
    });
    gameplayCanvas.find(".level-3-cards").css({
      transform: "translateX(150vw)",
    });
  }
});

$(".level-chip-label.three").click(function () {
  document.querySelector(".level-chip-label.one").classList.remove("active");
  document.querySelector(".level-chip-label.two").classList.remove("active");
  document.querySelector(".level-chip-label.three").classList.add("active");
  levelSlider.style.transform = "translateX(208px)";
  let gameplayCanvas = $(this)
    .closest(".gameplay-wrapper")
    .find(".gameplay-canvas:visible");
  if (gameplayCanvas.length) {
    gameplayCanvas.find(".level-1-cards").css({
      transform: "translateX(-150vw)",
    });
    gameplayCanvas.find(".level-2-cards").css({
      transform: "translateX(-150vw)",
    });
    gameplayCanvas.find(".level-3-cards").css({
      transform: "translateX(0)",
    });
  }
});
