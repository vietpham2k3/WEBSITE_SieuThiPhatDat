// slider thuong hieu
$(".image-slider1").owlCarousel({
    margin: 0,
    loop: false,
    autoplay: false,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
  // slider banner sp moi
$(".image-slider2").owlCarousel({
  margin: 20,
  loop: false,
  autoplay: false,
  nav: true,
  navText: ["", ""],
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
    },
    768: {
      items: 3,
    },
  },
});
  // slider banner sp noi 2
  $(".image-slider4").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      768: {
        items: 2,
      },
    },
  });
  // slider sp moi and noi
  $(".image-slider3").owlCarousel({
    margin: 10,
    loop: false,
    autoplay: false,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      786: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  // two row slide
  $('#slick1').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
	  loop:false
});
 // two row slide
 $('#slick2').slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  loop:false
});
  // slider feedback
  $(".image-slider5").owlCarousel({
    margin: 30,
    loop: false,
    autoplay: false,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
    // slider tin share
$(".image-slider6").owlCarousel({
  margin: 20,
  loop: false,
  autoplay: false,
  nav: true,
  navText: ["", ""],
  responsive: {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
// js table tabs 1 and 2
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var tablinks2 = document.getElementsByClassName("tab-links2");
var tabcontents2 = document.getElementsByClassName("tab-contents2");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function opentab2(tabname) {
  for (let tablink2 of tablinks2) {
    tablink2.classList.remove("active-link2");
  }
  for (let tabcontent2 of tabcontents2) {
    tabcontent2.classList.remove("active-tab2");
  }
  event.currentTarget.classList.add("active-link2");
  document.getElementById(tabname).classList.add("active-tab2");
}
// according footer
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion2 button');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const itemToggle = this.getAttribute('aria-expanded');

          if (itemToggle === 'false') {
              this.setAttribute('aria-expanded', 'true');
          } else {
              this.setAttribute('aria-expanded', 'false');
          }
      });
  });
});

// scroll hien thi back to top

   // Tạo một hàm xử lý sự kiện scroll
   function handleScroll() {
    let scroll_h = window.pageYOffset || document.documentElement.scrollTop;
    if (parseInt(scroll_h) > 300) {
        document.querySelector(".backtop").classList.add("show");
        document.querySelector(".backtop").classList.remove("hidden");
    } else {
        document.querySelector(".backtop").classList.remove("show");
        document.querySelector(".backtop").classList.add("hidden");
    }
}

// Thêm sự kiện scroll chỉ đối với các phần tử mà bạn muốn xử lý
window.addEventListener('scroll', handleScroll);




