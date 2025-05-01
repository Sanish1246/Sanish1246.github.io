const typewriter = document.getElementById("typewriter-text");
const words = ["Developer", "Problem solver", "Programmer"];

let wordIndex=0;
let charIndex=1;
let deleting=false;

//Function to open the dropdown menu
function toggleMenu() {
    const dropdown = document.getElementById('dropdown-list');
    const menuIcon = document.getElementById('dropdown-icon');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        dropdown.classList.add('show');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
}

//Function to close the dropdown menu
function cancel() {
    const dropdown = document.getElementById('dropdown-list');
    const menuIcon = document.getElementById('dropdown-icon');
    
    dropdown.classList.remove('show');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
}

//Function for the typewriter effecr
const typing = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    console.log(typewriter);
    typewriter.textContent=currentChar;

    if(!deleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typing,200);
    } else if(deleting && charIndex>0) {
        charIndex--;
        setTimeout(typing,100);
    } else {
        deleting = !deleting;
        wordIndex = !deleting ? (wordIndex+1 )% words.length : wordIndex;
        setTimeout(typing,1200);
    }
}

typing();

//Swiper for the cards
const swiper = new Swiper('.projects .content', {
  loop: true,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  }
});
