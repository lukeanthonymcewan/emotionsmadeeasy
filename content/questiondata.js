const questionData = [
  //Big talk questions
  {
    Category: "Big talk",
    Question: "What does my outfit say about me right now?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do you think I fall in love quickly? Explain.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What is my body language telling you right now?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "On a scale of 1-10, how messy do you think my room is? 1 being cleanest, 10 a complete disaster.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do you think I intimidate others? Why or why not?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "What do you think I'm likely to buy when going on a shopping spree?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do I seem like a morning person or a night owl? Explain.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What was your very first impression of my personality?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Finish the sentence: When I first met you, I thought _____.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What's the first thing you noticed about me?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "On a scale of 1-10, how rebellious do you think I was as a teenager?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What do you think a pet peeve of mine is?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "What personality trait do you think has gotten me in the most trouble?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do I seem more like a leader or a follower? Explain.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What kind of flirter do you think I am?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do you think I'm more of an extrovert or an introvert?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What do you think is a guilty pleasure of mine?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do you think I believe in love at first sight? Why or why not.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What do you think is my go-to comfort food?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "What do you think is my favorite way to unwind after a long day?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What's something you find funny about me?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "If you could choose one food to describe my personality, what would it be and why?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What do you think is my spirit animal and why?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Describe me in one emoj. What would it be and why?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "If you could choose one fictional character to describe my personality, who would it be and why?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you think I'm really good at but I may not give myself credit for?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "What type of music do you think I listen to when no one else is around?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "What type of Tv show do you think I'm most likely to binge?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "If you could see me in a action movie, what kind of character would I be and why?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Do I seem like the type of person to slide into someones DMs?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "Do I seem more of a hopeless romantic or a realist when it comes to dating?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "Do I seem like the type of person who is good at reading signals when it comes to dating?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "Do I seem like the type of person who is comfortable with being in an open relationship?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Wildcard: Close your eyes. What color are my eyes?",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "Wildcard: Think of a food you don't like that most people do. On the count of 3, all players answer.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question:
      "Wildcard: Share a random fact about yourself that most people don't know.",
    Level: 1,
  },
  {
    Category: "Big talk",
    Question: "Wha's a topic lately that you can't stop talking about?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "If you could relive your life again, what’s one thing you would change and one thing you would keep the same?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you're currently working on to improve yourself?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "In what ways would you like to be a better person?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "In what ways are you not a good traveller?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Describe in some detail, your ideal hotel (think location, decor, food, design)",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What occupation or role would you be well suited to if you could travel back in time to another era?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What sides of you does your own country not understand/enhance/reflect?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Pick one sensation or moment from trip that has stayed with you and share",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What have you been curious about that lately?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What do you allow yourself to be idealistic about?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "In your utopia, what would be banned?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What is a noble way to make money?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What would you want to teach a child about money?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What has been your favourite age and why?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What is a meaningful conversation in your eyes?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Have you had a transcendent experience? Where were you and what did it feel like?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What's one thing that can instantly make your day better?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What negative character flaw do you fear that other people have spotted in you?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What sort of things have made you envious recently?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What things would alarm your family if they knew?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What do you think is quite odd about you?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What would help turn a stranger into a friend?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What enables you to ‘connect’ well with someone?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What little things in life do you stop to appreciate?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What can you do today that you couldn't a year ago?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "When you're having a bad day, what do you do to make yourself feel better?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What do you look for in a friendship?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you've accomplished that you never thought you would?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What is something that you're currently putting off that you know would benefit you?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you don't like about yourself, but would never change?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you would like to learn that is completely out of your comfort zone?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What is something that you've learned about yourself recently?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever been catfished by someone online? How did you handle it?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever had a date that was so good, you thought it was too good to be true?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever been in a friends with benefits situation? How did it turn out?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever had a date that you knew was going to be a one-time thing? Explain",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "Have you ever struggled with imposter syndrome?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever been ghosted after a first date? How did you feel?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "How do you feel about dating apps? Love them or hate them?",
    Level: 2,
  },
  {
    Category: "Big talk",
    Question: "What do you do when you're feeling lonely?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What problem would you like to solve for other people?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What advice would you give to your teenage self?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What has it taken you a bit too long to learn about yourself?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What was growing up like for you?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "Who in your life do you admire and why? How can you be more like them?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "Which family member has had the greatest impact on you?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "Do you ever wish you were raised differently?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "Did you ever hide anything from or lie to your parents?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What do you think makes someone a good person?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you've been feeling lately that you don't understand?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you're currently feeling that you don't want to talk about but know that you need to?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "If you could relive one moment in your life, what would it be and why?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something that you are grateful for in your life, and why does it hold so much meaning for you?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What is something you would like to be remembered for?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something that you've experienced that has changed your perspective on life?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What is a moment in our relationship that you cherish the most?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is a misconception you had about our relationship that was cleared up?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is a relationship you have that has been the most healing for you?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "Can you recall a time when you felt misunderstood in a relationship? How did you handle it?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is a boundary you've had to set in romantic relationships and why?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you've learned about yourself through a past failure?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question: "What is a past event that has had the most impact on your life?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you wish you had known in the past that you know now?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is a past event that you have a completely different perspective on now than you did at the time?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something that you've done that you're not proud of and why?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is a decision that you've made that you would do differently given the chance?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something that you wish you could go back and tell your younger self?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is a memory or moment that you wish you could relive and why?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What do you feel is the biggest misconception people have about you?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is something you believe in strongly, even if others may disagree with you?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "If you could relive any moment in your life, what would it be and why?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever had a moment where you felt like you lost yourself and how did you get back to being you again?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "Have you ever had a period in your life where you felt uninspired? How did you find your motivation again?",
    Level: 3,
  },
  {
    Category: "Big talk",
    Question:
      "What is the most meaningful dream or vision you've ever had and why was it significant to you?",
    Level: 3,
  },
  //Debatable questions
  {
    Category: "Debateable",
    Question:
      "I would rather live in a virtual reality world than in the real world",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "AI will eventually surpass human intelligence",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "I would support the use of brain-computer interfaces for human enhancement",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "Schools be required to teach mental health and self-care alongside traditional subjects",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "Extraterrestrial life exists and we will make contact in the future",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "I believe this universe was created",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Science can answer moral questions",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "I believe in life after death",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Everyone has the right to decide their gender",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "It is okay to test on animals for the safety of human beings",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Everyone has the right to express their own opinion",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Money is power",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "There is a good reason most people are monogamous",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "A good sex life is neccessary for a good realtionship",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "‘Girly girl’ and ‘Tomboy’ are problematic",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "I believe traditional gender roles are important",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Weight loss programs are toxic",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Trans athletes have an unfair advantage",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Social media makes you anti-social",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Barbie is a good role model for young girls",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "The government should have the power to regulate people's diets for the benefit of public health",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question: "Human cloning should be allowed for medical research",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      'The concept of "normal" is harmful and society should embrace diversity',
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "The use of animal testing in the beauty industry should be banned",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "The use of surveillance technology by government agencies is necessary for national security",
    Level: 1,
  },
  {
    Category: "Debateable",
    Question:
      "It's not the government's responsibility to provide healthcare for all citizens",
    Level: 1,
  },
  //Pillow talk questions
  {
    Category: "Pillow talk",
    Question: "What's the most unexpected place you've ever had sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "How do you feel about public displays of affection?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "Have you ever had a one-night stand that turned into something more?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "Have you ever been in a friends with benefits situation? How did it turn out?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What's something you've always wanted to try in the bedroom but haven't yet?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What is the most awkward sexual experience you've had?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What is the funniest thing that has happened to you during a sexual encounter?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What is the strangest thing someone has said to you during sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What's something you're self-conscious about when it comes to sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "Share a song that always gets you in the mood",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "Have you ever played with food in the bedroom? Explain.",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's a place on your body you like to be touched?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "Have you ever had phone sex? Explain",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's the most bizarre sexual request you've ever received?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's the most unusual object you've used during a sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "How do you feel about video sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What's the most risqué thing you've ever said to someone in the heat of the moment?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's the most spontaneous sexual encounter you've ever had?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What type of partner do you think I would be most attracted to in bed?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What type of music do you think I would listen to during sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What do you think one of my sexual fantasies are? Explain",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "Finish this sentence: I find it really sexy when a person_____.",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's the one thing you're not willing to do in bed?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's a turn-on for you?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's a sexual experience you've had that you'll never forget?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's something that would instantly turn you off?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "Do you like to stay the night or go home after a one night stand? Explain",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "Have you ever been caught in the act? If so, by whom and what happened?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What's something you're self-conscious about when it comes to sex?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What's a kink or fetish you have? Do you have any you would like to explore?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's a thing you're curious about trying?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "How do you feel about BDSM?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "Wildcard: On the count of 3, all players shout out their favourite sex position",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "How do you feel about voyeurism or exhibitionism?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "What is the longest sexual dry spell you've ever experienced? How did you deal with it?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What is something that makes you feel sexy?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "How important is sex to you in a relationship?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What is your opinion on open relationships?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What kind of power dynamics excite you?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What I wish I could change about me and sex is___",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's the craziest thing you've ever done in the name of love?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "Do you believe open and honest communication can lead to better sexual experiences?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "How do you believe communication plays a role in sexual experiences?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "How do you feel about your body and sexuality?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question:
      "How do you navigate discussing and experimenting with kinks or fetishes?",
    Level: 1,
  },
  {
    Category: "Pillow talk",
    Question: "What's your favourite type of foreplay?",
    Level: 1,
  },
  //Honest dating questions
  {
    Category: "Honest dating",
    Question: "Do you think I am more of an introvert or an extrovert? Why?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What do you think is my favorite type of cuisine?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "Do you think I am more of a spontaneous or a planned person? Why?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What was your first impression of my sense of humor?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "Do you think I am more of a risk-taker or a play-it-safe person? Why?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What do you think is my favorite type of music?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "Do you think I am more of a traditional or a modern person? Why?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What do you think is my favorite way to relax?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "Do you think I am more of a cat or a dog person? Why?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What do you think is my favorite type of vacation?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something that you think I would be surprised to learn about you?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something that you think I would be surprised to learn about your personality?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What do you think is my most attractive feature?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "On a scale of 1-10, how spontaneous would you rate me?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you find charming about me?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What do you think my ideal date would be? Get specific.",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you find intriguing about me?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "If you could describe my personality with an animal, what would it be?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "If we were to be stranded on a deserted island, what's one thing you'd want me to bring?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What's your go-to sleeping position?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "How do you like to be seduced?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question: "What's something from your childhood that has stayed with you?",
    Level: 1,
  },
  {
    Category: "Honest dating",
    Question:
      "What's the first thing you noticed about me when we met in person?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What would you have been like if I had met you 10 years ago?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's a physical feature you find most attractive in a person?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's a pick-up line someone has used on you that you actually liked?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "If you could only eat one type of food for the rest of your life, what would it be?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's a song that always puts you in a good mood?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's your favorite type of dance?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's a place you've been to that you would love to go back to?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's a hobby or interest you have that you're passionate about?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's a goal you're currently working towards?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's a belief or value you hold that is different from the majority of people you know?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's a memory from your childhood that still brings a smile to your face?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you've been holding back on, and why?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something that you've always wanted to try, but haven't yet?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "Can you share a time when you felt truly exposed and vulnerable?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you've been keeping a secret, and why?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you've always been afraid of facing?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something that you've always wanted to change about yourself, and why haven't you?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "Can you share a time when you felt truly ashamed of yourself?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you've been struggling to let go of?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "Can you share a time when you felt truly lost or uncertain?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something that you've always wanted to accomplish, but haven't yet?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something you've done that you feel has made a positive impact on someone else's life?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What does pure joy or hapiness look like for you?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What are you feeling a lot of lately?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question:
      "Can you recall a past relationship that taught you an important lesson?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's a past decision that you're still unsure about?",
    Level: 2,
  },
  {
    Category: "Honest dating",
    Question: "What's something you've never shared with anyone before?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's something you used to enjoy doing, but don't anymore?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's a fear you've faced and conquered?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you've been avoiding and why?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's a dream you have yet to fulfill?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something you're still working on forgiving yourself for?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's a moment you wish you could relive and why?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question:
      "Can you share a time when you had to put someone else's needs before your own?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something you're still working on accepting about yourself?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's a belief you used to hold, but no longer do?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's something that you've been repressing and why?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question:
      "What's a recurring thought or pattern that you're trying to change?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question:
      "What's something you've been holding back on expressing to someone?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's an experience that has changed your perspective on life?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's a decision you wish you could take back?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "How have you grown and changed as a person in the past year?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "How do you handle difficult or uncomfortable situations?",
    Level: 3,
  },
  {
    Category: "Honest dating",
    Question: "What's a dream or goal you have yet to fulfill?",
    Level: 3,
  },
];

window.questionData = questionData;
