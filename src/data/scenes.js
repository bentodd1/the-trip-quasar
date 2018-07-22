const images = require.context('./images', true, /\.jpg$/);

const scenes = {
  all: [{
    id: 0,
    text: 'You see a monk and he asks you if you like to see something new or see the world as it always is',
    src: images('./monk.jpg'),
    options: [{ optionText: 'new', optionIndex: [1] }, { optionText: 'same', optionIndex: [0] }],
  },
  {
    id: 1,
    text: 'The monk takes you to a cave and says you will meditate all day and will take your mind into an amazing place.  You begin to meditate and begin to drift and hallucinate. ',
    src: images('./meditate.jpg'),
    options: [{ optionText: 'continue', optionIndex: [2] }],
  },
  {
    id: 2,
    text: 'The being asks this is your trip what would you like in your life?',
    src: images('./journey.jpg'),
    options: [{ optionText: 'Love', optionIndex: [3] }, { optionText: 'Power', optionIndex: [4] }, {optionText: 'Famous', optionIndex: [14]},{ optionText: 'I do not know', optionIndex: [3, 4, 14] }],
  },
  {
    id: 3,
    text: 'You are in a place with your true lover.  However, you notice that even true love is a wave and has phases.  You must choose peace or exictement.',
    src: images('./yingyang.jpg'),
    options: [{ optionText: 'Good', optionIndex: [5] }, { optionText: 'Bad', optionIndex: [6] }],
  },
  {
    id: 4,
    text: 'You become a King.  Every King must make wise decisions.',
    src: images('./king.jpg'),
    options: [{ optionText: 'Bring your country to War', optionIndex: [7] }, { optionText: 'Bring Your Country To Peace', optionIndex: [8] }],
  },
  {
    id: 5,
    text: 'You choose good which takes you to a place of kindness',
    src: images('./kind.jpg'),
  },
  {
    id: 6,
    text: 'You choose excitement which takes you to a place of sexual fantasy.  This excitement may bring to a child or heartbreak.',
    src: images('./loveMaking.jpg'),
    options: [{ optionText:'Heartbreak or familly', optionIndex: [12, 13] }],
  },
  {
    id: 7,
    text: 'Bring your country to war.  You loose the war and are captured and killed.',
    src: images('./death.jpg'),
  },
  {
    id: 8,
    text: 'The world becomes peaceful and you are transported to a world of green with leaves In the world of plants you can decide to be a plant or animal what do you choose.',
    src: images('./naturePeace.jpg'),
    options: [{ optionText: 'Water', optionIndex: [9] }, { optionText: 'Animal', optionIndex: [10] }, { optionText: 'Tree', optionIndex: [11] }],
  },
  {
    id: 9,
    text: 'You become water and do nothing',
    src: images('./water.jpg'),
  },
  {
    id: 10,
    text: 'You become a monkey swinging from tree to tree a giant predator is approaching you',
    src: images('./monkey.jpg'),
  },
  {
    id: 11,
    text: 'You become a plant are connected with the earth and grow and expand.',
    src: images('./tree.jpg'),
  },
  {
    id: 12,
    text:'The sexual fantasy leads you to having a child',
    src: images('./child.jpg'),
  },
  {
    id: 13,
    text:'You are to caught up in lust.  Because of that you forget to enjoy other moments in life.  This leads to your lover leaving you.',
    src: images('./heartbreak.jpg'),
  },
  {
    id: 14,
    text:'You become a celebrity musician everybody loves you.  The rockstar lifestyle leads you to a life of partying.  You don’t know where partying will take you.  You may die.  You may get married with a model.  Or you may become religious and take your life in a new direction.',
    src: images('./musician.jpg'),
    options: [{ optionText: 'Anything can happen', optionIndex: [15,16,17] }],
  },

  {
    id: 15,
    text:'You become a religious monk.  You began to pray and meditate your hallucination begins to fade.',
    src: images('./religion.jpg'),
  },
  {
    id: 16,
    text:'You overdose and die.',
    src: images('./death.jpg'),
  },
  {
    id: 17,
    text:'You get married with a model and have amazing sex and then have a kid.',
    src: images('./child.jpg'),
  },
  

  ],
};
export default scenes;
