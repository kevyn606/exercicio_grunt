
function greet() {
    console.log('Olá, Mundo!');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    button.addEventListener('click', function () {
      greet();
    });
  });