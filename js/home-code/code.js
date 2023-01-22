const btn = document.querySelector('.language-button')
btn.addEventListener("click", function(){
    document.querySelector('div.language-list').classList.toggle('disactive')
})


/* wyskakujące logo*/



function changeMenu() {
    const bigLogo = document.querySelector('div.main-menu');
    const miniLogo = document.querySelector('div.main-menu-middle');
    const MainMenu = document.querySelector('div.main-menu-wrap');

    const bigLogoHeight = bigLogo.clientHeight;
    const bigLogoFromTop = bigLogo.offsetTop+50;
    const positionScroll = window.scrollY
 
    
    if (positionScroll  > bigLogoFromTop + bigLogoHeight){
        miniLogo.classList.add('active');
        MainMenu.classList.add('active');
       

    }
    else{
        miniLogo.classList.remove('active');
        MainMenu.classList.remove('active');


    }

}
window.addEventListener('scroll', changeMenu)

//description1

var FirstSlide = document.querySelector('.first1');
var btns = document.querySelectorAll('.navigation1 .btn');
var listClass = ['active0','active1', 'active2','active3']
let i1 = 0;





 // Javascript for image slider manual navigation
 var manualNav = function(manual){
    i1 = manual;
    listClass.forEach(element => FirstSlide.classList.remove(element));
    btns.forEach(btn => btn.classList.remove('active'));
    FirstSlide.classList.add(listClass[manual]);
    console.log(manual);
    btns[manual].classList.add('active');
    }

    btns.forEach((btn, j1) => {
      btn.addEventListener("click", () => {
      manualNav(j1);
         });
       });

  // Javascript for image slider autoplay navigation
   
    var repeater = () => {
      setTimeout(function(){
        listClass.forEach(element => FirstSlide.classList.remove(element));
        btns.forEach(btn => btn.classList.remove('active'));

        FirstSlide.classList.add(listClass[i1]);
      btns[i1].classList.add('active');
      i1++;

      if(btns.length == i1){
        i1 = 0;
      }
      if(i1 >= btns.length){
        return;
      }

     
      
      repeater();
    }, 3000);
    }
    repeater();


    // description2


var FirstSlide2 = document.querySelector('.first2');
var btns2 = document.querySelectorAll('.navigation2 .btn');
let i2 = 0;
    

     // Javascript for image slider manual navigation

     var manualNav2 = function(manual){
      i2 = manual;
      listClass.forEach(element => FirstSlide2.classList.remove(element));
      btns2.forEach(btn => btn.classList.remove('active'));
      FirstSlide2.classList.add(listClass[manual]);
      console.log(manual);
      btns2[manual].classList.add('active');
      }
  
      btns2.forEach((btn, j1) => {
        btn.addEventListener("click", () => {
          console.log('oki');
        manualNav2(j1);
           });
         });

 var repeater2 = () => {
      setTimeout(function(){
        listClass.forEach(element => FirstSlide2.classList.remove(element));
        btns2.forEach(btn => btn.classList.remove('active'));

        FirstSlide2.classList.add(listClass[i2]);
      btns2[i2].classList.add('active');
      i2++;

      if(btns.length == i2){
        i2 = 0;
      }
      if(i2 >= btns2.length){
        return;
      }

     
      
      repeater2();
    }, 3000);
    }
    repeater2();


  // SLIDER 3


var FirstSlide3 = document.querySelector('.first3');
var btns3 = document.querySelectorAll('.navigation3 .btn');
let i3 = 0;
    

     // Javascript for image slider manual navigation

     var manualNav3 = function(manual){
      i3 = manual;
      listClass.forEach(element => FirstSlide3.classList.remove(element));
      btns3.forEach(btn => btn.classList.remove('active'));
      FirstSlide3.classList.add(listClass[manual]);
      btns3[manual].classList.add('active');
      }
  
      btns3.forEach((btn, j1) => {
        btn.addEventListener("click", () => {
        manualNav3(j1);
           });
         });


         var repeater3 = () => {
          setTimeout(function(){
            listClass.forEach(element => FirstSlide3.classList.remove(element));
            btns3.forEach(btn => btn.classList.remove('active'));
    
            FirstSlide3.classList.add(listClass[i3]);
          btns3[i3].classList.add('active');
          i3++;
    
          if(btns3.length == i3){
            i3 = 0;
          }
          if(i3 >= btns3.length){
            return;
          }
    
         
          
          repeater3();
        }, 3000);
        }
        repeater3();
    
    

// QUESTIONS


var qstBtn = document.querySelectorAll('div.question')
var ansBtn = document.querySelectorAll('div.ans')


var showAns = function(manual){
  ansBtn[manual].classList.toggle('disactive');
  qstBtn[manual].classList.toggle('disactive');
}
  qstBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    showAns(i);
       });
     });


// LANGUAGE

const Language = document.querySelector('.pl-language');
var LanguageList = document.querySelectorAll('.language')

var LanguageChange = function(manual){
  console.log(LanguageList[manual].src)
  let tempPath = Language.src
  Language.src = LanguageList[manual].src;
  LanguageList[manual].src = tempPath;
  }

  LanguageList.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    LanguageChange(i);
       });
     });


// SPECIAL OFFERS
const offerBtn = document.querySelector('.specialoffers div')
const offer = document.querySelector('aside.specialoffers')
offerBtn.addEventListener('click', function(){
  offer.classList.toggle('active')

})


//Calendar

document.querySelector(' .data-arriving i.fa-calendar').addEventListener('click', function(){
  document.querySelector('div.data-arriving div.calendar-card').classList.toggle('active');
})

document.querySelector('.data-leaving i.fa-calendar').addEventListener('click', function(){
  document.querySelector('div.data-leaving div.calendar-card').classList.toggle('active');
})