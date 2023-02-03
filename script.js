const metaThemeColor = document.querySelector('meta[name="theme-color"]');

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

//Define most used div elements
const gameplay = document.querySelector(".gameplay");
// const categoryScreen = document.querySelector(".category");
const bodyElement = document.querySelector("body");

aboutMeButton = document.querySelector(".about-me");
aboutMeCloseButton = document.querySelector(".close-about-button");
categoryOverlay = document.querySelector(".category-overlay");
aboutOverlay = document.querySelector(".about-overlay");

//delay the entire script
setTimeout(() => {
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
      gsap.to(slideToUnlock, {
        scale: 1.05,
        duration: 0.4,
        ease: "power4.out",
      });
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

  let firstTitle = "";
  let secondTitle = "";
  let thirdTitle = "";
  let fourthTitle = "";

  function unlockScreen() {
    categoryScreen.style.backgroundColor = colorChipDarkPink;
    categoryScreen.style.display = "flex";
    setTimeout(() => {
      gsap.to(
        "body",
        {
          backgroundColor: colorChipDarkPink,
          duration: 0.2,
        },
        0
      );
    }, 800);
    setTimeout(() => {
      document;
      categoryScreen.style.removeProperty("background-color");
    }, 1200);

    gsap.to(".splash", {
      y: "-100%",
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
    //load in
    let loadInTimeline = gsap.timeline({ delay: 3.5 });
    loadInTimeline.from(
      ".swiper.cats",
      {
        opacity: 0,
        ease: "power2.out",
        duration: 1.5,
      },
      0
    );
    loadInTimeline.fromTo(
      ".animation-wrapper",
      {
        scale: 0,
      },
      {
        scale: 1,
        delay: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      0
    );
    loadInTimeline.fromTo(
      ".select-category-button",
      {
        scale: 0.4,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        delay: 0.3,
        duration: 1.5,
        ease: "power4.out",
      },
      0
    );
    loadInTimeline.fromTo(
      ".slider-container",
      {
        scale: 0.3,
      },
      {
        scale: 1,
        delay: 0,
        duration: 1,
        ease: "power4.out",
      },
      0
    );
    loadInTimeline.fromTo(
      ".category-heading-wrapper",
      {
        opacity: 0,
        y: "+=32",
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 1,
        ease: "power4.out",
      },
      0
    );
    loadInTimeline.fromTo(
      ".about-me, .mood-title, .swiper-dots",
      {
        y: "+=32",
        opacity: 0,
      },
      {
        y: "-=32",
        opacity: 1,
        delay: 0.5,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
      },
      0
    );
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

  const swiperFirst = new Swiper(".swiper.first", {
    initialSlide: 0,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    loop: false,
    speed: 500,
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
    bodyElement.style.background = "#f094e4";
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
    bodyElement.style.background = "#FFDC5C";
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
    bodyElement.style.background = "#C6CCF8";
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
    bodyElement.style.background = "#C7F1FF";
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
    bodyElement.style.background = "#f094e4";
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
    bodyElement.style.background = "#FFDC5C";
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
    bodyElement.style.background = "#C6CCF8";
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
    bodyElement.style.background = "#C7F1FF";
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
          ease: "expo.out",
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
          onComplete: updateGameplayCanvas,
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
      ease: "expo.out",
      onComplete: function () {
        $(".popup").hide();
        $(popupItem).hide();
      },
    });
    gsap.fromTo(
      [
        closePopupButton,
        popupTitle,
        popupDescription,
        tagContainer,
        playButton,
      ],
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

  // Attach a click event to the categoryOverlay
  categoryOverlay.addEventListener("click", function () {
    // Check if the bottom value of aboutOverlay is 0
    if (getComputedStyle(aboutOverlay).bottom === "0px") {
      // If it is, simulate a click event on the aboutMeCloseButton
      aboutMeCloseButton.click();
    }
  });

  aboutMeButton.addEventListener("click", function () {
    categoryOverlay.style.pointerEvents = "auto";
    gsap.fromTo(
      ".category-content",
      {
        scale: 1,
        filter: "blur(0px)",
      },
      {
        scale: 0.8,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".category-overlay",
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
        duration: 1,
        ease: "power3.out",
      }
    );
    aboutOverlay.style.display = "flex";
    gsap.fromTo(
      aboutOverlay,
      {
        bottom: "-100%",
      },
      {
        bottom: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  });

  aboutMeCloseButton.addEventListener("click", function () {
    categoryOverlay.style.pointerEvents = "none";
    gsap.fromTo(
      ".category-content",
      {
        scale: 0.8,
        filter: "blur(8px)",
      },
      {
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        delay: 0,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".category-overlay",
      {
        opacity: 0.5,
      },
      {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      aboutOverlay,
      {
        bottom: 0,
      },
      {
        bottom: "-100%",
        duration: 1,
        ease: "power3.out",
        onComplete: function () {
          onComplete: {
            aboutOverlay.style.display = "none";
          }
        },
      }
    );
  });

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

  //Fetch data for the category slider
  const categorySlider = categoryData;
  const swiperWrapper = document.querySelector(".swiper-wrapper.cats");
  const slideTemplate = document.querySelector(".swiper-slide-cat-template");

  categorySlider.forEach((category, i) => {
    const categorySliderData = categorySlider.data;

    //clone the template
    const slideClone = slideTemplate.cloneNode(true);
    slideClone.classList.add("swiper-slide");
    slideClone.classList.add("category");
    slideClone.classList.remove("swiper-slide-cat-template");

    const innerDiv = slideClone.querySelector(".category-card");
    innerDiv.style.backgroundColor = category.PrimaryColor;

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

    if (i === 2) {
      // create the animation 3 rings
      const animThreeRingOne = document.createElement("div");
      animThreeRingOne.classList.add("a3-r1");
      const animThreeRingTwo = document.createElement("div");
      animThreeRingTwo.classList.add("a3-r2");
      const animThreeRingThree = document.createElement("div");
      animThreeRingThree.classList.add("a3-r3");
      const animThreeRingFour = document.createElement("div");
      animThreeRingFour.classList.add("a3-r4");

      const animWrapper = document.createElement("div");
      animWrapper.classList.add("animation-wrapper");

      animWrapper.appendChild(animThreeRingOne);
      animWrapper.appendChild(animThreeRingTwo);
      animWrapper.appendChild(animThreeRingThree);
      animWrapper.appendChild(animThreeRingFour);

      //append the element to category card
      innerDiv.appendChild(animWrapper);
    }

    if (i === 3) {
      // create the animation 3 rings
      const animFourRingOne = document.createElement("div");
      animFourRingOne.classList.add("a4-r1");
      const animFourRingTwo = document.createElement("div");
      animFourRingTwo.classList.add("a4-r2");
      const animFourRingThree = document.createElement("div");
      animFourRingThree.classList.add("a4-r3");
      const animFourRingFour = document.createElement("div");
      animFourRingFour.classList.add("a4-r4");

      const animWrapper = document.createElement("div");
      animWrapper.classList.add("animation-wrapper");
      animWrapper.appendChild(animFourRingOne);
      animWrapper.appendChild(animFourRingTwo);
      animWrapper.appendChild(animFourRingThree);
      animWrapper.appendChild(animFourRingFour);

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

  //Fetch data for popup content

  categorySlider.forEach((category, i) => {
    const categorySliderData = categorySlider.data;
    const popupWrapper = document.querySelector(".popup-list");
    const popupTemplate = document.querySelector(".popup-item-template");

    //clone the template
    const slideClone = popupTemplate.cloneNode(true);
    slideClone.classList.remove("popup-item-template");
    slideClone.classList.add("popup-item");

    slideClone.style.backgroundColor = category.PrimaryColor;
    const popupTitle = slideClone.querySelector(".popup-title");
    const popupSubtitle = slideClone.querySelector(".popup-description");
    const playButton = slideClone.querySelector(".play-game-button");
    const tagOne = slideClone.querySelector(".popup-tag-copy.one");
    const tagTwo = slideClone.querySelector(".popup-tag-copy.two");
    const tagThree = slideClone.querySelector(".popup-tag-copy.three");
    const closeIcon = slideClone.querySelector("svg.close-svg");
    const closeContainer = slideClone.querySelector(".close-popup");

    popupTitle.textContent = category.Title;
    popupSubtitle.textContent = category.Description;
    popupSubtitle.style.color = category.TextColor;

    closeContainer.style.backgroundColor = category.DarkColor;
    closeIcon.style.fill = category.SecondaryColor;

    tagOne.textContent = category.TagOne;
    tagTwo.textContent = category.TagTwo;
    tagThree.textContent = category.TagThree;

    // tagOne.style.backgroundColor = category.DarkColor;
    // tagTwo.style.backgroundColor = category.DarkColor;
    // tagThree.style.backgroundColor = category.DarkColor;

    playButton.style.backgroundColor = category.SecondaryColor;
    playButton.style.color = category.PrimaryColor;
    popupTitle.style.color = category.SecondaryColor;
    popupSubtitle.style.color = category.TextColor;

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

    if (i === 2) {
      // create the animation 3 rings
      const animThreeRingOne = document.createElement("div");
      animThreeRingOne.classList.add("a3-r1");
      const animThreeRingTwo = document.createElement("div");
      animThreeRingTwo.classList.add("a3-r2");
      const animThreeRingThree = document.createElement("div");
      animThreeRingThree.classList.add("a3-r3");
      const animThreeRingFour = document.createElement("div");
      animThreeRingFour.classList.add("a3-r4");

      const animWrapper = document.createElement("div");
      animWrapper.classList.add("animation-wrapper");
      animWrapper.classList.add("popup");

      animWrapper.appendChild(animThreeRingOne);
      animWrapper.appendChild(animThreeRingTwo);
      animWrapper.appendChild(animThreeRingThree);
      animWrapper.appendChild(animThreeRingFour);

      //append the element to category card
      slideClone.appendChild(animWrapper);
    }

    if (i === 3) {
      // create the animation 3 rings
      const animFourRingOne = document.createElement("div");
      animFourRingOne.classList.add("a4-r1");
      const animFourRingTwo = document.createElement("div");
      animFourRingTwo.classList.add("a4-r2");
      const animFourRingThree = document.createElement("div");
      animFourRingThree.classList.add("a4-r3");
      const animFourRingFour = document.createElement("div");
      animFourRingFour.classList.add("a4-r4");

      const animWrapper = document.createElement("div");
      animWrapper.classList.add("animation-wrapper");
      animWrapper.classList.add("popup");

      animWrapper.appendChild(animFourRingOne);
      animWrapper.appendChild(animFourRingTwo);
      animWrapper.appendChild(animFourRingThree);
      animWrapper.appendChild(animFourRingFour);

      //append the element to category card
      slideClone.appendChild(animWrapper);
    }

    //add click event for the close
    slideClone.addEventListener("click", function () {
      openPopup.call($(this));
    });

    // append the slide element to the swiper-wrapper element
    popupWrapper.appendChild(slideClone);
    popupTemplate.style.display = "none";
    playCategoryAnimations();
  });

  // fetch data for All questions
  // Pull in question data to variable 'categories'
  const categories = questionData;

  categories.forEach((category) => {
    let level = category.Level;
    let slideTemplate;
    let swiperWrapper;
    let swiperInstance;

    switch (category.Category) {
      case "Big talk":
        switch (level) {
          case 1:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.one .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.one .swiper-wrapper.gameplay-cards-one"
            );
            swiperInstance = swiperCatOneLevelOne;
            break;
          case 2:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.one .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.one .swiper-wrapper.gameplay-cards-two"
            );
            swiperInstance = swiperCatOneLevelTwo;
            break;
          case 3:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.one .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.one .swiper-wrapper.gameplay-cards-three"
            );
            swiperInstance = swiperCatOneLevelThree;
            break;
        }
        break;
      case "Debateable":
        switch (level) {
          case 1:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.two .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.two .swiper-wrapper.gameplay-cards-one"
            );
            swiperInstance = swiperCatTwoLevelOne;
            break;
          case 2:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.two .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.two .swiper-wrapper.gameplay-cards-two"
            );
            swiperInstance = swiperCatTwoLevelTwo;
            break;
          case 3:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.two .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.two .swiper-wrapper.gameplay-cards-three"
            );
            swiperInstance = swiperCatTwoLevelThree;
            break;
        }
        break;
      case "Pillow talk":
        switch (level) {
          case 1:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.three .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.three .swiper-wrapper.gameplay-cards-one"
            );
            swiperInstance = swiperCatThreeLevelOne;
            break;
          case 2:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.three .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.three .swiper-wrapper.gameplay-cards-two"
            );
            swiperInstance = swiperCatThreeLevelTwo;
            break;
          case 3:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.three .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.three .swiper-wrapper.gameplay-cards-three"
            );
            swiperInstance = swiperCatThreeLevelThree;
            break;
        }
        break;
      case "Honest dating":
        switch (level) {
          case 1:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.four .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.four .swiper-wrapper.gameplay-cards-one"
            );
            swiperInstance = swiperCatFourLevelOne;
            break;
          case 2:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.four .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.four .swiper-wrapper.gameplay-cards-two"
            );
            swiperInstance = swiperCatFourLevelTwo;
            break;
          case 3:
            slideTemplate = document.querySelector(
              ".gameplay-canvas.four .swiper-slide-game-card-template"
            );
            swiperWrapper = document.querySelector(
              ".gameplay-canvas.four .swiper-wrapper.gameplay-cards-three"
            );
            swiperInstance = swiperCatFourLevelThree;
            break;
        }
        break;
    }

    //clone the template
    const slideClone = slideTemplate.cloneNode(true);
    slideClone.classList.add("swiper-slide");
    slideClone.classList.add("game-card");
    slideClone.classList.remove("swiper-slide-game-card-template");

    const questionLabel = slideClone.querySelector(".gameplay-card-copy");
    questionLabel.textContent = category.Question;

    // append the slide element to the swiper-wrapper element
    swiperWrapper.appendChild(slideClone);
    swiperCatOneLevelOne.update();
    swiperCatOneLevelTwo.update();
    swiperCatOneLevelThree.update();
    swiperCatTwoLevelOne.update();
    swiperCatTwoLevelTwo.update();
    swiperCatTwoLevelThree.update();
    swiperCatThreeLevelOne.update();
    swiperCatThreeLevelTwo.update();
    swiperCatThreeLevelThree.update();
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

  //Fetch data for the headings
  const categoryTypes = categoryData;

  categoryTypes.forEach((category) => {
    let level = category.Level;
    let slideTemplate;
    const swiperWrapper = document.querySelector(".category-heading-wrapper");

    // // create a new div element
    const slide = document.createElement("div");
    slide.classList.add("category-title");

    // create the title element
    const title = document.createElement("h1");

    // set the text content of the title element
    title.textContent = category.Title;
    title.style.color = category.PrimaryColor;

    // append the title element to the slide element
    slide.appendChild(title);

    // create the subtitle element
    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle-copy");

    // set the text content of the subtitle element
    subtitle.textContent = category.Subtitle;
    subtitle.style.color = category.PrimaryColor;

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
    swiperCat.update();
  });
  secondTitle.style.transform = "translateX(150px)";
  secondTitle.style.opacity = "0";
  thirdTitle.style.transform = "translateX(150px)";
  thirdTitle.style.opacity = "0";
  fourthTitle.style.transform = "translateX(150px)";
  fourthTitle.style.opacity = "0";

  let currentParentPopupItem;
  let currentPopupBackground;

  function openGameplay() {
    $(gameplay).show();
    $(".popup-overlay").show();
    gsap.fromTo(
      ".gameplay",
      {
        y: "100vh",
      },
      {
        y: 0,
        delay: 0.4,
        duration: 1,
        ease: "expo.out",
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
      ".popup-background",
      {
        scale: 1,
      },
      {
        scale: 0.9,
        duration: 0.6,
        ease: "power1.out",
      }
    );
    setTimeout(() => {
      firstTimeAnimation();
    }, 600);
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
        delay: 0.5,
        ease: "power4.out",
      }
    );
  }

  //Dismiss first time wrapper

  let gameplayFirstTimer = document.querySelector(".gameplay-first-timer");

  $(".dismiss-first-button").click(function () {
    gameplayFirstTimer.classList.add("fadeOut");
    setTimeout(() => {
      gameplayFirstTimer.style.display = "none";
    }, 600);
  });

  //Close gameplay button
  $(".close-gameplay-button").click(function () {
    closeGameplay();
  });

  function closeGameplay() {
    gsap.fromTo(
      ".popup-overlay",
      {
        opacity: 0.5,
      },
      {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        onComplete: function () {
          $(".popup-overlay").hide();
        },
      }
    );
    gsap.fromTo(
      ".popup-background",
      {
        scale: 0.9,
      },
      {
        scale: 1,
        duration: 0.6,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      ".gameplay",
      {
        y: 0,
      },
      {
        y: "100vh",
        delay: 0.4,
        duration: 1,
        ease: "expo.out",
      }
    );
  }

  // Store the commmon elements in constants
  const gameplayTitle = document.querySelector(".gameplay-category-title");
  const levelSelector = document.querySelector(".level-selector");
  const gameCards = document.querySelectorAll(".swiper-slide.game-card");
  const gameCardCopies = document.querySelectorAll(".gameplay-card-copy");
  const levelSliderElement = document.querySelector(".level-slider-element");
  let secondaryBrandColor = "";

  const gameplayCanvasOne = document.querySelector(".gameplay-canvas.one");
  const gameplayCanvasTwo = document.querySelector(".gameplay-canvas.two");
  const gameplayCanvasThree = document.querySelector(".gameplay-canvas.three");
  const gameplayCanvasFour = document.querySelector(".gameplay-canvas.four");

  function updateGameplayCanvas() {
    //reset all gameplay canvas'
    gameplayCanvasOne.style.display = "none";
    gameplayCanvasTwo.style.display = "none";
    gameplayCanvasThree.style.display = "none";
    gameplayCanvasFour.style.display = "none";

    // Check which category level is set and show the correct set of cards
    switch (gameplayCategory) {
      case 0:
        levelSelector.style.display = "flex";
        gameplay.style.backgroundColor = colorChipDarkPink;
        gameplayTitle.textContent = "Big Talk";
        secondaryBrandColor = colorChipGreen;
        gameplayCanvasOne.style.display = "flex";
        break;
      case 1:
        levelSelector.style.display = "none";
        gameplay.style.backgroundColor = colorChipYellow;
        gameplayTitle.textContent = "Debateable";
        secondaryBrandColor = colorChipOrange;
        gameplayCanvasTwo.style.display = "flex";
        break;
      case 2:
        levelSelector.style.display = "none";
        gameplay.style.backgroundColor = colorChipLightPurple;
        gameplayTitle.textContent = "Pillow Talk";
        secondaryBrandColor = colorChipPlum;
        gameplayCanvasThree.style.display = "flex";
        break;

      case 3:
        levelSelector.style.display = "flex";
        gameplay.style.backgroundColor = colorChipLightBlue;
        gameplayTitle.textContent = "Honest Dating";
        secondaryBrandColor = colorChipPurple;
        gameplayCanvasFour.style.display = "flex";
        break;
    }
    gameCards.forEach((card) => {
      card.style.backgroundColor = secondaryBrandColor;
    });
    gameCardCopies.forEach((copy) => {
      copy.style.color = gameplay.style.backgroundColor;
    });
    levelSliderElement.style.backgroundColor = gameplay.style.backgroundColor;
  }

  let currentLevel;

  //Level functionality

  const levelSlider = document.querySelector(".level-slider-element");

  const levelChipOne = document.querySelector(".level-chip-label.one");
  const levelChipTwo = document.querySelector(".level-chip-label.two");
  const levelChipThree = document.querySelector(".level-chip-label.three");

  $(".level-chip-label.one").click(function () {
    levelChipOne.classList.add("active");
    levelChipTwo.classList.remove("active");
    levelChipThree.classList.remove("active");
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
    levelChipOne.classList.remove("active");
    levelChipTwo.classList.add("active");
    levelChipThree.classList.remove("active");
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

    levelTwoEncourage();
  });

  $(".level-chip-label.three").click(function () {
    levelChipOne.classList.remove("active");
    levelChipTwo.classList.remove("active");
    levelChipThree.classList.add("active");
    levelSlider.style.transform = "translateX(208px)";
    levelThreeEncourage();

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

  const levelChangeMessage = document.querySelector(".level-change-message");

  function levelTwoEncourage() {
    levelChangeMessage.innerHTML = `<p class="level-message">Take a deep breath—you've got this</p>`;
    //level message animation
    //out
    gsap.to(".level-selector", {
      y: "8px",
      duration: 1,
      ease: "expo.out",
      delay: 1,
    });
    gsap.fromTo(
      levelChangeMessage,
      {
        y: 0,
        height: "46px",
        borderRadius: "24px",
      },
      {
        borderRadius: "24px 24px 0px 0px",
        height: "66px",
        y: "-38px",
        duration: 1,
        ease: "expo.out",
        delay: 1,
      }
    );
    //back in
    gsap.to(".level-selector", {
      y: 0,
      duration: 1,
      ease: "expo.out",
      delay: 5,
    });
    gsap.to(levelChangeMessage, {
      borderRadius: "24px",
      height: "46px",
      y: 0,
      duration: 1,
      ease: "expo.out",
      delay: 5,
    });
  }

  function levelThreeEncourage() {
    levelChangeMessage.innerHTML = `<p class="level-message">Stay brave — you're about to grow</p>`;
    //level message animation
    //out
    gsap.to(".level-selector", {
      y: "8px",
      duration: 1,
      ease: "expo.out",
      delay: 1,
    });
    gsap.fromTo(
      levelChangeMessage,
      {
        y: 0,
        height: "46px",
        borderRadius: "24px",
      },
      {
        borderRadius: "24px 24px 0px 0px",
        height: "66px",
        y: "-38px",
        duration: 1,
        ease: "expo.out",
        delay: 1,
      }
    );
    //back in
    gsap.to(".level-selector", {
      y: 0,
      duration: 1,
      ease: "expo.out",
      delay: 5,
    });
    gsap.to(levelChangeMessage, {
      borderRadius: "24px",
      height: "46px",
      y: 0,
      duration: 1,
      ease: "expo.out",
      delay: 5,
    });
  }
}, 2800);
