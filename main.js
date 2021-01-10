const txt = ['witaj !','jestem marek zemla','web-developer-freelancer']

const welcomeText = document.querySelector('.welcome p .text');
const h1Text = document.querySelector('.welcome h1 .text');
const h2Text = document.querySelector('.welcome h2 .text');
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
   setTimeout(addLetter,200);
}

   const addLetterH1 = () => {
    if(activeLetterH1 >= 0){
    h1Text.textContent += txt[activeTextH1][activeLetterH1];}
    activeLetterH1++
    if(activeLetterH1 === txt[activeTextH1].length){
        return btn
    }
   setTimeout(addLetterH1,40);
}
    const addLetterH2 =() =>{
        if(activeLetterH1 >= 0){
        h2Text.textContent += txt[activeTextH2][activeLetterH2];}
        activeLetterH2++
        if(activeLetterH2 === txt[activeTextH2].length){
        btn.classList.add('active')
        btn.style.transition = "opacity 2s"
        return 
        }
        setTimeout(addLetterH2,80);
}
addLetter();
addLetterH1();
addLetterH2();

