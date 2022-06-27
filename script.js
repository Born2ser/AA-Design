// // window.addEventListener('scroll', () => {
// //     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// //   }, false);
//  var animate_text = document.getElementById('known4');
//   console.log(animate_text);
//   var newDom = '';
//   var animationDelay = 6;

//   for(let i = 0; i < animate_text.innerText.length; i++)
//   {
//       newDom += '<span class="char">' + (animate_text.innerText[i] == ' ' ? '&nbsp;' : animate_text.innerText[i])+ '</span>';
//   }

//   animate_text.innerHTML = newDom;
//   var length = animate_text.children.length;

//   for(let i = 0; i < length; i++)
//   {
//       animate_text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
//   }

// Function Declearation
function speak (){
    console.log('Hello there');
}
speak();
// Function Expression: It doesnt hoist in javascript, it is more prefered
const hi = function() {
    console.log('Welcome to our World')
};
hi();


const greet = function(name, age){
    console.log(`My name is ${name} and am ${age} years old`)
}
greet('Biola', 25);
greet('Deborah', 30);