const txt = ['witaj !','jestem marek zemla','web-developer-freelancer']

const welcomeText = document.querySelector('.welcome p .text');
const welcomeCursor = document.querySelector('.welcome p .cursor');
const h1Text = document.querySelector('.welcome h1 .text');
const h1Cursor = document.querySelector('.welcome h1 .cursor');
const h2Text = document.querySelector('.welcome h2 .text');
const h2Cursor = document.querySelector('.welcome h2 .cursor');
const btn = document.querySelector('.welcome button');

let activeLetterWelcome = 0;
let activeTextWelcome = 0;
let activeLetterH1 = 0;
let activeTextH1 = 1;
let activeLetterH2 = 0;
let activeTextH2 = 2;


const addLetter = () => {
   
    if(activeLetterWelcome >= 0){
    welcomeText.textContent += txt[activeTextWelcome][activeLetterWelcome];}
    activeLetterWelcome++
    if(activeLetterWelcome === txt[activeTextWelcome].length){
        return 
    }
   setTimeout(addLetter,100);
//    if(activeTextWelcome === txt.length)return ;
//         return setTimeout(()=>{
//         activeLetterWelcome = -10;
//         cursorAnimation = null
//         // welcomeText.textContent = ""; 
//         // addLetter(); 
//         },1000)
}
   const addLetterH1 = () => {
    if(activeLetterH1 >= 0){
    h1Text.textContent += txt[activeTextH1][activeLetterH1];}
    activeLetterH1++
    if(activeLetterH1 === txt[activeTextH1].length){
        return btn
    }
   setTimeout(addLetterH1,100);
}
    const addLetterH2 =() =>{
        if(activeLetterH1 >= 0){
        h2Text.textContent += txt[activeTextH2][activeLetterH2];}
        activeLetterH2++
        if(activeLetterH2 === txt[activeTextH2].length){
        btn.style.display = "block"
        return
        }
        setTimeout(addLetterH2,100);
}


//  if(activeTextWelcome === txt.length)return ;
//         return setTimeout(()=>{
//         activeLetterWelcome = -10;
//         welcomeText.textContent = ""; 
//         addLetter(); 
//         },1000)

let cursorAnimation = () => {
welcomeCursor.classList.toggle('active');
}
// setInterval(cursorAnimation, 400);
addLetter();
addLetterH1();
addLetterH2();

