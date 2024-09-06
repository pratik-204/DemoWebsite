// script.js

document.getElementById('checkButton').addEventListener('click', function() 
{
 // Scroll to the second screen
  document.querySelector('.screen2').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact').addEventListener('click', function()
{
  document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('Homes').addEventListener('click',function()
{
  document.querySelector('.screen1').scrollIntoView({behavior: 'smooth'});
});