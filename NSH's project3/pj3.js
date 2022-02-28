console.log(Math.trunc(Math.random()));

console.log('Welcome to my Game Web App')

//styling the h1 using DOM method
//text shadow porperty sets the shadow effect for h1
const h1_s = document.querySelector('.h1-s');
h1_s.style.textShadow = '2px 2px pink';
h1_s.style.textAlign = 'center';

//adding container to DOM
 const main = document.querySelector('.firstbox');
//  main.style.border = 'thick solid grey';
//  main.style.backgroundColor = 'white'
 main.style.height = '60%';
 main.style.borderRadius = '10%'
 main.style.backgroundColor='#B68D40';
 
//  main.style.marginTop='5%';
 


 //editing image with HTML DOM
 const image = document.querySelector('.images');
 image.style.display = 'block';
 image.style.marginLeft = 'auto';
 image.style.marginRight = 'auto';
 image.style.padding = '2%';
 image.style.borderRadius='20%';
 image.style.height = '50%'
//  image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI79pWPugwH0ATSxW5nv_-1UHptPfKxNB3EQ&usqp=CAU';

//  image.src='https://i.gifer.com/9Ry5.gif'


 //editing button
  const box = document.querySelector('.box1')
  box.style.padding = '2% 2% 2% 2%'
  box.style.display='block';
//   box.style.marginTop = '2%';
//   box.style.marginBottom = '20px';

 //editing userinput in HTML DOM
 const userInput = document.querySelector('input');
  userInput.style.display='block';
  userInput.style.marginLeft='auto';
  userInput.style.marginRight='auto';
  userInput.style.borderRadius='20%';
  userInput.style.backgroundColor='beige';
  userInput.style.textAlign = 'center';
  userInput.style.width = '30%';
  userInput.style.height ='25px';
  userInput.style.border='beige'

  //edit button
  const btn = document.querySelector('.btn');
  btn.style.display='block';
  btn.style.marginLeft='auto';
  btn.style.marginRight='auto';
  btn.style.backgroundColor = '#81B622'
  btn.style.borderRadius = '20%'
  btn.style.color= 'white';
  btn.style.width = '15%';
  btn.style.marginTop='2%';
  btn.style.border = 'green';
  btn.style.height='25px'
  btn.style.fontSize='70%'
  console.log(btn);

  //set guess history box
  const guessH = document.querySelector('.guesshist');
  guessH.style.width = '50%'
  guessH.style.height ='10%';
  guessH.style.backgroundColor = '#66D2D6'
  guessH.style.marginTop = '4%';
  guessH.style.display = 'block';
  guessH.style.marginLeft='auto';
  guessH.style.padding ='2% 2% 2% 2%';
  guessH.style.marginRight='auto';
  guessH.style.borderRadius = '15%';
  

//set h4 into HTML DOM
const h4_guess= document.querySelector('.h4-gues');
h4_guess.style.color = 'white';
h4_guess.style.textAlign='center'

//score pink box
const pink_box = document.querySelectorAll('.flexbox');
const score_box=document.querySelector('.number1');
score_box.style.fontSize='80%';
score_box.padding='2% 2% 2% 2%';
score_box.width='30%';



//edit the mdlwindow
const reset_btn=document.querySelector('.btn1')
reset_btn.href='pj3.html';
reset_btn.style.textDecoration ='none';
reset_btn.style.color='black';
reset_btn.style.fontSize='89%';

//append the list of history into guess history box
// const hist = document.querySelector('ul.history');
// hist.style.textDecoration=none;


//print the number inside the html website
btn.addEventListener('click', function(){
    if(Number(userInput.value) ===92){
        image.src='https://i.gifer.com/9Ry5.gif';
        h4_guess.textContent='Your guess was correct. 92 is my secret number!';
        main.style.backgroundColor='#A0E7E5';
        btn.textContent='Play Again';
        // btn.href='pj3.html';
        pink_box.textContent='none';
        score_box.style.textAlign='center';
        reset_btn.href='pj3.html';
        guessH.textContent= userInput.value
        score_box.textContent='Score: 10'
        btn.href='pj3.html';
        // userInput.placeholder=disabled;
        // score_box.style.width='99%';

        // hist.textContent=userInput.value
        // guessH.appendChild ='userInput.value'
        


    }else{
        image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI79pWPugwH0ATSxW5nv_-1UHptPfKxNB3EQ&usqp=CAU';
        main.style.backgroundColor='red';
        userInput.display ='none';
        btn.textContent='Try Again';

        h4_guess.textContent = 'Unfortunately! You lost the Game, Dont Give up and Try Again. You can win next time.';
        h4_guess.style.wordSpacing= '10px';
        pink_box.textContent='none';
        reset_btn.href='pj3.html';
        guessH.textContent= userInput.value
        score_box.textContent='Score: 0'
        btn.href='pj3.html';
        // guessH.appendChild ='userInput.value'
        hist.textContent=userInput.value
        




    }
})




 


