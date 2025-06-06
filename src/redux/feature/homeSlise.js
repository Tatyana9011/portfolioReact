// redux/features/homeSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchData = createAsyncThunk('home/fetchData', async () => {
  const res = await axios.get('/api/some-data');
  return res.data;
});

const homeSlice = createSlice({
  name: 'home',
  initialState: { 
    initialHorosckop: false, //перша сторінка зі знаками зодіаку
    firstSign:{  //вибираемо перший знак гороскопу
      name:'',
      index:0,
      nickName:'',
      discription:'',
      textDescrib:'',
      gun:'',
      advaic:'',
      number:'',
      text:'',  
    },
    twoSign:{
      index:0,
      name:'',
      nickName:'',
    },  //вибираемо другий знак гороскопу для перевірки сумісності
    db : [
  {name:'Бандеровен',
    nickName:'Овен',
    discription:'Овни - стихія полумʼя. По життю в них теж все палає. Не знають страху, відмови, поразки. Якщо щось задумали - хрін перепреш.',
    textDescrib:' Якщо Овен неправий, він правий. Якщо ви не погоджуєтеся з Овном,  погодитесь. Якщо хочете додати пікантності в своє життя - просто скажіть Овну, як йому жити. “Останнє слово завжди за нами”',
    gun:'Протитанкові ракетні комплекси Javelin',
    advaic:'Знайти час на себе',
    number:'4, 7, 9, 11',
  },
  {name:'Бандерець',
    nickName:'Телець',
    discription:'Тельці - рогаті небожителі. Перш ніж прийняти рішення, Телець обдумає все разів зо триста.  А потім все одно буде лише на 25% впевненим, що діє правильно. ',
    textDescrib:' Стабільність, порядок, дисципліна для них - база. Якщо ви запрошуєте Тельця на побачення і не кажете куди, +- до 19:00 він зійде з розуму. “Мої принципи непохитні”',
    gun:'Бронеавтомобіль AMX-10RC',
    advaic:'Подорожі та великі покупки',
    number:'1, 5, 14, 30'
  },
  {name:'Бандерюки',
    nickName:'Близнюки',
    discription:'Близнюки - авантюристи в стилі “пан або пропав”. Відпочинок - це пробігти 10 км,  попорати худобу і зробити якусь диверсію на расєї. ',
    textDescrib:'Оптимісти, рішучі та впевнені в собі, завжди знайдуть пригоди на свою 5-ту точку. Настрій приблизно як березень:  сніг, дощ, град, сонце, цунамі.“Хто не ризикує, той не ми, бо ми завжди пʼємо шампанське”. ',
    gun:'Багатоцільовий БТР Bastion',
    advaic:'Насолоджуватися життям тут і зараз',
    number:'5, 16, 23, 31'
  },
  {name:'Бандерак',
    nickName:'Рак',
    discription:'Раки - найчуттєвіші та найбільш емоційні люди, але вперті, тому ніколи з цим не погодяться.',
    textDescrib:'Drama Queen усіх знаків зодіаку. Але третє око Раків має найгострішу інтуїцію. Завдяки їхньому покерфейсу, ви ніколи не здогадаєтеся, що у них в голові: чи то поле з метеликами, чи то план нападу по чотирьох позиціях. “Маєте критику? Залиште її при собі”',
    gun:'Реактивні системи залпового вогню',
    advaic:'Подорожі та втілення в життя нових ідей',
    number:'3, 12, 25, 30'
  },
  {name:'Бандеролев',
    nickName:'Лев',
    discription:'Леви - найбільш яскраві та харизматичні особистості. Справжні королі, завжди досягають свого, щедрі, великодушні, але тільки з обраними.', 
    textDescrib:'Якщо б за гордість давали премію, статуетка була б у формі лева. Леви люблять жартувати над собою, але вам над ними жартувати не радимо. “Є тільки дві точки зору - моя та хибна”',
    gun:'Танки Leopard',
    advaic:'Карʼєрне зростання та родинне полумʼя',
    number:'2, 14, 26, 29'
  },
  {name:'Бандеродіва',
    nickName:'Діва',
    discription:'Діви - фанатичні перфекціоністи, які повільно, але впевнено досягають мети.  ',
    textDescrib:'Коли Діви прасують одяг, то прасують і шкарпетки, і панчохи, і шнурки від найків. Якщо, не приведи боже, ви дасте Діві чорну ручку із зеленим ковпачком, отримає панічну атаку. “Я що, багато прошу? Просто веди себе ідеально 24/7!”',
    gun:'Зенітні самохідні установки Gepard',
    advaic:'Час налагоджувати стосунки',
    number:'5, 13, 28, 29'
  },      
  {name:'Бандерези',
    nickName:'Терези',
    discription:'Терези - з дитинства мають якийсь особливий шарм та привабливість, за що їх неможливо не любити. ',
    textDescrib:'Живуть у темпі “5 пʼятниць на тиждень”. 5 настроїв на хвилину. 5 особистостей на день. Ніколи не знаєш, чого чекати від Терезів. Будь-яке рішення приймається 2-3 тижні. А потім ще 20 разів перевіряється.“Сам не сплю і вам не дам”           ',
    gun:'Безпілотні повітряні системи Ghost',
    advaic:'Прибавка до зарплати та гармонія',
    number:'3, 12, 24, 31'
  },      
  {name:'Бандерпіон',
    nickName:'Скорпіон',
    discription:'Скорпіони - незалежні, самостійні, сталеві особистості, але з чуйною душею і добрим серцем, які ви ніколи не побачите. ',
    textDescrib:'Дуже складна і глибока натура. Якщо Скорпіон обрав вас у друзі/партнери, то можете почуватися як “Оскар” на поличці у ДіКапріо. Якщо ваша думка йде всупереч їхній, то ви її зміните. “Я не злопамʼятний, але все памʼятаю”',
    gun:'Ракетні установки HIMARS',
    advaic:'Проявіть творчу натуру',
    number:'6, 9, 27, 28'
  },                                 
  {name:'Бандерілець',
    nickName:'Стрілець',
    discription:'Стрільці - найбільш енергійні та позитивні особистості, у яких хочеться знайти кнопку “Викл”, але її немає.  ',
    textDescrib:'Життя в ритмі “щось робити, кудись їхати”. Будь-яку ситуацію можуть обернути на свою користь та на хвилю оптимізму. Вкрали гроші - можливість заробити нові. Розбив келих - на щастя. “Не будь як всі, будь original”',
    gun:'Бойова машина піхоти Bradley',
    advaic:'Досить вирішувати чужі проблеми',
    number:'7, 17, 27, 30'
  },
  {name:'Бандероріг',
    nickName:'Козоріг',
    discription:'Козероги - цілеспрямовані, сильні особистості, які досягають цілей так легко, наче лускають насіннячко. ',
    textDescrib:'Якщо ви плануєте подорож із Козерогами, будьте готовими до детального аналізу кожного кроку, після якого перехочеться їхати. Думки в голові рухаються зі швидкістю машин у Форсажі.“Сльози у Козерогів - це 8-е диво світу”',
    gun:'САУ Paladin зі 155-мм гарматою',
    advaic:'Будьте готовими до змін',
    number:'2, 6, 13, 27'
  }, 
  {name:'Бандеролій',
    nickName:'Водолій',
    discription:'Водолії - особистості з найбільшим серцем та душею, але якщо хочете їх обдурити, це буде ваша остання ідея в житті. ',
    textDescrib:'У Водоліїв чудово розвинена інтуіція та вміння бачити людей. Ви тільки ввійшли, а вони вже знають, які у вас дитячі травми і що ви за людина. “Не май сто друзів, а май одного Водолія”',
    gun:'Системи протиповітряної оборони С-300',
    advaic:'Нові можливості та допомога',
    number:'6, 11, 15, 29'
  }, 
  {name:'Бандериби',
    nickName:'Риби',
    discription:'Риби - це ті самі люди, до яких ви приходите ввечері з пляшечкою вина і душевними ранами.  ',
    textDescrib:'Гнучкі особистості, які найшвидше адаптуються до будь-яких змін. Треба переїхати? Піду спакую валізку. Треба вночі виїхати на допомогу другу? Піду візьму лопату. Відчуття справедливості гостріше за самурайський меч. “У вир з головою”',
    gun:'Протитанкові комплекси NLAW',
    advaic:'Подорожі та зміни в житті',
    number:'1, 13, 27, 31 '
  }
    ],
    db_result:[
    'Абсолютно несумісні. Зірочки кажуть, що стосунки приреченні, адже ви надто різні. Але, можливо, ви як той інь-янь:  хоч і зовсім різні, але одне без одного ніяк? Тут уже залежить від вас, тож маєте почуття - спробуйте',
    'Погана сумісність Ми любимо американські гірки - девіз ваших стосунків.Ваш шлях у стосунках, якщо і буде, то м’яко кажучи, тернистим. Але якщо є почуття, коли це когось зупиняло?',
    'Нейтральна сумісність. Або пан, або пропав. Для таких стосунків головне пройти перевірку часом. Ви як оливки: почнете любити одне одного, тільки коли обидва подорослішаєте',
    'Хороша сумісність.Такі стосунки завжди починаються з фрази: “Божеее, яке кончене”, коли вас бісить в людині все, але тягне одне до одного, наче магнітом. І в голові каша. Але далі одне без одного вже неможливо',
    'Ідеальна сумісність. Тут рівень Love Is - обійнявшись, дивитись, як палають куполи кремля. Зазвичай такі стосунки починаються з довгої френдзони, а в один момент переростають у найміцніше кохання і родину'
    ],
    tableCompatibility:[
[3,2,4,2,5,1,3,2,5,2,4,1],
[2,3,1,4,1,5,2,3,4,5,1,4],
[4,1,3,2,4,1,5,2,3,4,5,1],
[1,4,2,3,1,4,4,5,2,3,1,5],
[5,1,4,1,3,2,4,4,5,2,3,1],
[1,5,1,4,2,3,2,4,4,5,2,3],
[3,2,5,1,4,1,3,2,4,5,2,5],
[2,3,2,5,2,4,2,3,1,4,1,5],
[5,2,3,1,5,1,4,1,3,1,4,1],
[2,5,1,3,1,5,2,4,1,3,1,4],
[4,1,5,1,3,2,5,1,4,1,1,1],
[2,4,1,5,1,3,2,5,1,4,1,3]
]
  },
  reducers: {
    startToggleHorosckop:(state)=>{
      state.initialHorosckop = !state.initialHorosckop;
      state.firstSign = {
        name:'',
        nickName:'',
        discription:'',
        textDescrib:'',
        gun:'',
        advaic:'',
        number:'',
        index:0,
      };
      state.twoSign={
        name:'',
        nickName:'',
        index:0,
      }
  },
    renderSignHorosckop: (state) => {//рендер всех знаков 
      state.initialHorosckop = true;
    },
    updateUnitialHorosckop: (state) => {//рендер всех знаков 
      state.initialHorosckop = false;
    },
    setFirstSign: (state, action) => {  //вибрали свой знак и записали его в стейт
      const elemArr = state.db.find(item=>item.name===action.payload);
      state.firstSign = {...elemArr};
      state.firstSign.index = state.db.findIndex(item => item.name === action.payload)+1;

       // 1. Сначала найдём текст в кавычках
      const matches = state.firstSign.textDescrib.match(/“(.*?)”/g);
      const result = matches && matches.length
        ? matches[matches.length - 1].slice(1, -1)
        : '';

      state.firstSign.text = result;

      // 2. Потом очищаем textDescrib от кавычек
      const cleanedText = state.firstSign.textDescrib.replace(/“.*?”/g, '');
      state.firstSign.textDescrib=cleanedText;

    },
  
   setTwoSign:(state, action)=>{  //записуємо в стейт обраний знак для перевірки сумісності
      const elemArr = state.db.find(item=>item.name===action.payload);
      state.twoSign={
        name:elemArr.name,
        nickName:elemArr.nickName,
        index:state.db.findIndex(item => item.name === action.payload)+1,
        
      };
    },
    backToSignsForCouple: (state) => { //возвращаемся на попередню сторінку зі знаками для вибору пари
        state.twoSign={
          name:'',
          nickName:'',
          index:0,
        };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => { state.loading = true; })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export const {startToggleHorosckop,renderSignHorosckop, setFirstSign,updateUnitialHorosckop,
    setTwoSign, showSumisnistyForCouple, backToSignsForCouple } = homeSlice.actions;
export default homeSlice.reducer;