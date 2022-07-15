const dogBtn = document.querySelector('.dogBtn');
const dogImage = document.querySelector('.dogImage');
dogBtn.addEventListener('click',()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(result => {
    return result.json();
  })
  .then(picture => {
    dogImage.src = picture.message;
  });
});