import Harkiv from '../../../public/icon/Harkiv.png';
import Kiev from '../../../public/icon/Kiev.png';
import Summi from '../../../public/icon/Summi.png';
import Oxtirka from '../../../public/icon/Oxtirka.png';  
import Sever from '../../../public/icon/Sever.png';
import Liman from '../../../public/icon/Liman.png' ;  

export const Cards = [{
    id: 1,
    img: Kiev ,
    name: "Battle for Kyiv",
    date: 'February 25, 2022 - April 2, 2022',
    Typography1: "Kyiv, where the Ukrainian authorities are located, was the main target. An attempt to capture Kyiv ended in defeat and the retreat of Russian troops....",
    Typography2: "In the early morning of 2 March, the Ukrainian Air Force claimed it had shot down two Russian Sukhoi Su-35 over Kyiv.[26][75] Later in the morning, Klitschko stated that the Russian army was beginning to surround the city in an attempt to enforce a blockade.[76] Klitschko told Channel 24 that tanks were approaching Kyiv from Belarus and that Ukrainian authorities were inspecting Ukrainian checkpoints for preparedness.[77] Estonian Defence Forces intelligence chief Margo Grosberg estimated that the advancing Russian convoy would arrive to Kyiv's outer suburbs in at least two days, after which they would try to lay siege to the city.[78] Polish president Andrzej Duda said Zelenskyy had told him that Ukrainian forces would not withdraw from Kyiv.[79] Ukrainian general Oleksandr Syrskyi stated in an interview in June that Russian forces had attempted to storm Kyiv through its major highways, so Ukrainian forces set up two rings of forces along the city; an outer circle in the suburbs, and an inner one in downtown Kyiv. The intention was to protect the inner ring from the fighting occurring on the outer ring, and keep Russian forces fighting in the suburbs",
    knopka:  "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%B7%D0%B0_%D0%9A%D0%B8%D0%B5%D0%B2_(2022)"
  },
  {
    id: 2,
    img: Harkiv ,
    name: "Battle for Kharkov",
    date: "February 24, 2022 — September 11, 2022",
    Typography1: 'Russia attacked Kharkov in the early days of the invasion. The population of the region suffered greatly as a result of the attacks.....',
    Typography2: "",
    knopka:  "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%B7%D0%B0_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2_(2022)"
  },
  {
    id: 3,
    img: Summi  ,
    name: "Battles for Sumy",
    date: 'February 24, 2022 — April 6, 2022',
    Typography1: 'For almost the entire period of ground fighting in the Sumy region, Russian troops were near Sumy, shelling the city and trying to encircle it ...',
    Typography2: "",
    knopka:"https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B8_%D0%B7%D0%B0_%D0%A1%D1%83%D0%BC%D1%8B"
  },
  {
    id: 4,
    img: Oxtirka ,
    name: "Battles for Akhtyrka",
    date: 'February 24, 2022 — March 26, 2022',
    Typography1: 'The capture of Akhtyrka was very important. In the event of the capture of Akhtyrka, a direct route to Poltava and Mirgorod, Kyiv was opened for Russian troops...',
    Typography2: "",
    knopka:  "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B8_%D0%B7%D0%B0_%D0%90%D1%85%D1%82%D1%8B%D1%80%D0%BA%D1%83"
  },
  {
    id: 5,
    img: Sever ,
    name: "Battles for Severodonetsk",
    date: 'March 5, 2022 - June 25, 2022',
    Typography1: "By May 2022, Severodonetsk and its immediate neighbor, the city of Lysychansk, were the last remaining Ukrainian major strongholds in the Luhansk region",
    Typography2: "",
    knopka:  "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B8_%D0%B7%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D0%B4%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_(2022)"
  },
  {
    id: 6,
    img: Liman ,
    name: "Battles for Lyman",
    date: 'May 27, 2022 - October 1, 2022',
    Typography1: 'As a result of the offensive, the armed forces of the Russian Federation during the fighting damaged or destroyed 80-90% of the buildings of the city...',
    Typography2: "",
    knopka:  "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B8_%D0%B7%D0%B0_%D0%9B%D0%B8%D0%BC%D0%B0%D0%BD"
  }];

  export const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },{
      title: '1',
      variants: [
        '11',
        '12',
        '13',
      ],
      correct: 2,
    },{
      title: '2',
      variants: [
        '21',
        '22',
        '23',
      ],
      correct: 2,
    },{
      title: '3',
      variants: [
        '31',
        '32',
        '33',
      ],
      correct: 2,
    },
  ];