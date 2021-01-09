const txt = ['witaj !','jestem marek zemla','web-developer-freelancer']

const welcomeText = document.querySelector('.welcome p .text');
const welcomeCursor = document.querySelector('.welcome p .cursor');
const h1Text = document.querySelector('.welcome h1 .text');
const h1Cursor = document.querySelector('.welcome h1 .cursor');
// const h2Text = document.querySelector('.welcome h2 .text');
// const h2Cursor = document.querySelector('.welcome h2 .cursor');
// const btn = document.querySelector('.welcome button');

let activeLetter = 0;
let activeText = 0;

addLetterWelcome = ()=>{
    if(activeLetter >=0){
        welcomeText.textContent += txt[activeText][activeLetter]};
        activeLetter++;
        if(activeLetter === txt[activeText].length){
            clearInterval(interwalWelcome)
            clearInterval(setInterwal2)
            document.querySelector('button').style.display = "block"
        };
}
const interwalWelcome = setInterval(addLetterWelcome,100)

const cursorAnimation = ()=>{
    welcomeCursor.classList.toggle('active')
}
const setInterwal2 = setInterval(cursorAnimation,200)
addLetterWelcome()


// const addLetter = () => {
//     if(activeLetter >= 0){
//     welcomeText.textContent += txt[activeText][activeLetter];}
//     activeLetter++
//      if(activeLetter === txt[activeText].length){
//         activeText++
//         if(activeText === txt.length)return ;
//         return setTimeout(()=>{
//         activeLetter = -10;
//         welcomeText.textContent = ""; 
//         addLetter(); 
//         },2000)
//     }
//    setTimeout(addLetter,100);
// }
// addLetter();
// const cursorAnimation = () => {
//  welcomeCursor.classList.toggle('active');
// }
// setInterval(cursorAnimation, 400);