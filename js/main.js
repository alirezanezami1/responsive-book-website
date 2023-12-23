
/////////////// search ////////////////////

const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')
     
searchButton.addEventListener('click' , function() {
    searchContent.classList.add('show-search')
})

searchClose.addEventListener('click' , function() {
    searchContent.classList.remove('show-search')
})



/////////////////// login /////////////////////

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')
     
loginButton.addEventListener('click' , function() {
    loginContent.classList.add('show-login')
})

loginClose.addEventListener('click' , function() {
    loginContent.classList.remove('show-login')
})

///////////////////////////////////////////////

function headerShadow () {
    let header = document.getElementById('header')

    if (document.documentElement.scrollTop >= 50) {
        header.classList.add('shadow-header')
        document.getElementById('scroll-up').style.bottom = '4.5rem'
    } else {
        header.classList.remove('shadow-header')
        document.getElementById('scroll-up').style.bottom = '-50%'
    }
}


window.addEventListener('scroll' , headerShadow)
/////////////////////// swiper ///////////////

// let swiperHome = new Swiper('.home__swiper', {
//     loop: true,
//     spaceBetween: -24,
//     grabCursor: true,
//     slidesPreView: 'auto',
//     centeredSlides: 'auto',
// })

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }

  });

  //////////////////////////////////////////////////////////////////


let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1150: {
           slidesPerView: 4,
           centeredSlides: false,
        }
    }

  });



  ////////////////////////////////////////// 


  let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto', 

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },


    breakpoints: {
        1150: {
           slidesPerView: 3,
        }
    }

  });


////////////////////////////////////////////


let swiperTestimonial= new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1150: {
           slidesPerView: 3,
           centeredSlides: false,
        }
    }

  });

  //////////////////////////////////////////////

  let topArrow = document.getElementById('scroll-up')

  top.addEventListener('click' , function () {
    window.scrollTo(0,0)
  })

  ////////////////////////////////

  const sections = document.querySelectorAll('section[id]')

//   console.log(sections);

function scrollActive () {
    const scrollDown = window.scrollY

    sections.forEach(function(item) {
        const sectionHeight = item.offsetHeight,
        sectionTop = item.offsetTop -58,
        sectionId = item.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+ sectionId +']')


        // console.log(sectionHeight , sectionTop , scrollDown);

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}



window.addEventListener('scroll' , scrollActive)



///////////////////// theme //////////////////////////


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    if (document.body.className.includes(darkTheme)){
        localStorage.setItem('theme' , 'dark')
        localStorage.setItem('icon' , 'sun')
    } else {
        localStorage.setItem('theme' , 'light')
        localStorage.setItem('icon' , 'moon')
    }
})


function GetLocal () {
    let getData = localStorage.getItem('theme')

    if (getData == 'dark') {
        document.body.classList.add(darkTheme)
        themeButton.classList.add(iconTheme)
    } else {
        document.body.classList.remove(darkTheme)
        themeButton.classList.remove(iconTheme)
    }
}


window.addEventListener('load' , GetLocal)

////////////////////////////////////////////

const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true,
})

sr.reveal(`.home__data, .featured__container, .new__container, .join__data,
.testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})