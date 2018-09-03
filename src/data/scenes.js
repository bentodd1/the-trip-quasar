const images = require.context('./images', true, /\.jpg$/);

const scenes = {
  all: [{
    id: 0,
    name: 'monk',
    text: 'You see a monk and he asks you if you like to see something new or see the world as it always is',
    src: images('./monk.jpg'),
    options: [{ optionText: 'New', optionIndex: [1]},],
  },
  {
    id: 1,
    name: 'meditate',
    text: 'The monk takes you to a cave and says you will meditate all day and will take your mind into an amazing place.  You begin to meditate and begin to drift and hallucinate. ',
    src: images('./meditate.jpg'),
    options: [{ optionText: 'Continue', optionIndex: [2] }],
  },
  {
    id: 2,
    name: 'journey',
    text: 'The being says, "This is your trip. what would you like in your life?"',
    src: images('./journey.jpg'),
    options: [{ optionText: 'Love', optionIndex: [3] }, { optionText: 'Power', optionIndex: [4] }, {optionText: 'Famous', optionIndex: [14]},{ optionText: 'I do not know', optionIndex: [3, 4, 14] }],
  },
  {
    id: 3,
    name: 'yingyang',
    text: 'You are in a place with your true lover.  However, you notice that even true love is a wave and has phases.  You must choose peace or exictement.',
    src: images('./yingyang.jpg'),
    options: [{ optionText: 'Peace', optionIndex: [5] }, { optionText: 'Excitement', optionIndex: [6] }],
  },
  {
    id: 4,
    name: 'king',
    text: 'You become a King.  Every King must make wise decisions.  You can bring your country to war or peace.',
    src: images('./king.jpg'),
    options: [{ optionText: 'War', optionIndex: [7] }, { optionText: 'Peace', optionIndex: [8] }],
  },
  {
    id: 5,
    name: 'lovHarmony',
    text: 'You choose peace.  You are in a peaceful place with your lover.   Because you are at peace your meditation deepens. Your mediation begins to deepen.  Find out if you will see the sky or fire.',
    src: images('./loveHarmony.jpg'),
    options: [{ optionText: 'Fire or Sky', optionIndex: [21, 20] }],
  },
  {
    id: 6,
    name: 'loveMaking',
    text: 'You choose excitement which takes you to a place of sexual fantasy.  This excitement may bring to a child or heartbreak.',
    src: images('./loveMaking.jpg'),
    options: [{ optionText:'Heartbreak or familly', optionIndex: [12, 13] }],
  },
  {
    id: 7,
    name: 'war',
    text: 'Bring your country to war.  Will you become more powerful or lose the war?',
    src: images('./war.jpg'),
    options: [{ optionText:'Death or power', optionIndex: [24, 16] }],
  },
  {
    id: 8,
    name: 'naturePeace',
    text: 'The world becomes peaceful and you are transported to a world of lots of green and leaves. In the world of plants you can decide to be a plant or animal or water. What do you choose?',
    src: images('./naturePeace.jpg'),
    options: [{ optionText: 'Water', optionIndex: [9] }, { optionText: 'Animal', optionIndex: [10] }, { optionText: 'Tree', optionIndex: [11] }],
  },
  {
    id: 9,
    name: 'water',
    text: 'You become water and do nothing. Water can change states.  It can become clouds, ice or water.  You may or may not change states.',
    src: images('./water.jpg'),
    options: [{ optionText: 'Water, ice, or cloud.', 
    optionIndex: [18,19]}]
  },
  {
    id: 10,
    name: 'monkey',
    text: 'You become a monkey swinging from tree to tree a giant predator is approaching you.  You see bananas that you really want to reach.',
    src: images('./monkey.jpg'),
    options: [{ optionText: 'Death or Bananas?', optionIndex: [22,23]}]
  },
  {
    id: 11,
    name: 'tree',
    text: 'You become a plant are connected with the earth and grow and expand.',
    src: images('./tree.jpg'),
  },
  {
    id: 12,
    name: 'child',
    text:'The sexual fantasy leads you to having a child',
    src: images('./child.jpg'),
  },
  {
    id: 13,
    name: 'heartBreak',
    text:'You are to caught up in lust.  Because of that you forget to enjoy other moments in life.  This leads to your lover leaving you.',
    src: images('./heartbreak.jpg'),
  },
  {
    id: 14,
    name: 'musician',
    text:'You become a celebrity musician and everybody loves you.  The rockstar lifestyle leads you to a life of partying.  You don’t know where partying will take you.  You may die, You may get married with a model, or you may become religious and take your life in a new direction.',
    src: images('./musician.jpg'),
    options: [{ optionText: 'Die, marriage, or religious ', optionIndex: [15,16,17] }],
  },

  {
    id: 15,
    name: 'religion',
    text:'You become a religious monk.  You began to pray and meditate your hallucination begins to fade.',
    src: images('./religion.jpg'),
  },
  {
    id: 16,
    nake: 'death',
    text:'You die.',
    src: images('./death.jpg'),
  },
  {
    id: 17,
    name: 'child',
    text:'You get married with a model, have amazing sex and then have a kid.',
    src: images('./child.jpg'),
  },
  {
    id: 18,
    name: 'ice',
    text: "You become ice.  Water can change states.  It can become clouds, ice or remain water.  You may or may not change states. ",
    src: images('./ice.jpg'),
    options: [{ optionText: 'Water, ice, or cloud.', 
    optionIndex: [9,19]}],
  },
  {
    id: 19,
    name: 'clouds',
    text: "You become clouds.  Water can change states.  It can become clouds, ice or remain water.  You may or may not change states.",
    src: images('./clouds.jpg'),
    options: [{ optionText: 'Water, ice, or cloud.', 
    optionIndex: [9,19]}],
  },
  {
    id: 20,
    name: 'fire',
    text: "You see fire and become fire.",
    src: images('./fire.jpg'),
  },
  {
    id: 21,
    name: 'sky',
    text: "You gaze into the sky and see the vastness of the universe.",
    src: images('./sky.jpg'),
  },
  {
    id: 22,
    name: 'lion',
    text: "You get eaten by the predator and die.",
    src: images('./lion.jpg'),
  },
  {
    id: 23,
    name: 'banana',
    text: "You get to eat the bananas and are a happy monkey.",
    src: images('./banana.jpg'),
  },
  {
    id: 24,
    name: 'ruler',
    text: "You become even more powerful.  Your country loves and praises you as you rule the entire world.  Next you become the ruler of the entire universe.",
    src: images('./ruler.jpg'),
  }

  ],
};
export default scenes;
