import patrioti from '../../../public/icon/patrioti.jpg'
import imgFlag1 from '../../../public/icon/babo4ka.jpg'
import serceSherst from '../../../public/icon/serdceSherst.jpg' 


let USER_DATA = [
    // {name: "Олег", sur: "Иванов", age: 30, avatar: "https://gyazo.com/f850be7e9fc91aa2c8cb844603ea1e10.png",},
    // {name: "Lindsey", sur: "Stirling", age: 25, avatar: "https://i.gyazo.com/fe48322c44d1c214ee8d9ba49876a0da.png",},
    // {name: "Maki", sur: "Harukawa", age: 20, avatar: "https://gyazo.com/c708f879e56f725318fafca74b9cbe7f.png",},
    {
      id: 1,
      image: imgFlag1 ,
      name: "The tragedy of Ukraine",
      date: '3rd March 2022',
      Typography: 'The full-scale invasion of Ukraine is less than a week old and most of us have watched in horror as Russian tanks rolled into a sovereign country ....',
      button:  "https://www.peacedirect.org/tragedy-ukraine-urgency-peacebuilding/?gclid=CjwKCAiAleOeBhBdEiwAfgmXf2lV_-3aJK6i55w9yPsnUZK1lX_msr5GqsD_mq8J-pe0BqbeocMilxoCKBcQAvD_BwE"
  },
  {
      id: 2,
      image: serceSherst ,
      name: "War in Ukraine",
      date: 'February 24th 2022',
      Typography: 'uyine since late February 2022. Millions have fled the country, while others stayed to fight....',
      button:  "https://www.dw.com/en/war-in-ukraine/t-60931789"
  },
  {
      id: 3,
      image: patrioti  ,
      name: "3",
      date: '33',
      Typography: '3333',
      button:  <a href="https://www.dw.com/en/war-in-ukraine/t-60931789">More info -＞</a>
  }
  ];
  
  /*******************/
  let data = USER_DATA; // Для удобного локального использования.
  let cards = ArrUserCardComponents();
  let limit = cards.length; 
  /* подразумевается, что массив будет сильно больше, чем количество юзеров на странице */
  let shownUserIndexes = []; /* Будет хранить индексы (или id) показанных юзеров */
  
  loadUserData(0, 3);
  handleUserCardFunctional();
  
  function loadUserData(start, end, array){
    array = array || USER_DATA; // это чтобы можно было вызывать не указывая массив.
    
    for( let i = start; i < end; i++ ){
      let index = i % limit; 
      /* start может быть 48 (48-й юзер), а limit = 3, всё равно возьмется индекс 0 для карточки */
      
      cards[index].avatar.src = array[i].avatar;
      cards[index].name.textContent = array[i].name;
      cards[index].age.textContent = array[i].age;
      
      shownUserIndexes[index] = i;
    }
  }
  
  function ArrUserCardComponents(){
    let cards = document.querySelectorAll('.user-card');
    let arr = [];
    
    for( let i = 0; i < cards.length; i++ ){
      let card = cards[i];
      arr.push({
        avatar: card.querySelector('.avatar'),
        name: card.querySelector('.name'),
        age: card.querySelector('.age'),
      });
    }
    
    return arr; // Google. → JS array reduce
  }
  
  function handleUserCardFunctional(){
    let cards = document.querySelectorAll('.user-card');
    
    popupOnClick();
    // другие();
    // связанные();
    // функции();
    
    function popupOnClick(){
      let idx = shownUserIndexes;
    
      for( let i = 0; i < cards.length; i++ ){
        cards[i].addEventListener('click', function(){
          let index = idx[i];
          alert(
           `Имя: ${ data[index].name }
            Фамилия: ${ data[index].sur }
            Возраст: ${ data[index].age }`
          ); /* Заполнить-показать любую другую форму */
        });
      }
    }
  }