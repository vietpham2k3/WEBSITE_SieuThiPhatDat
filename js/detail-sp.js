 // slider sp moi and noi
 $(".image-slider8").owlCarousel({
    margin: 10,
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
      1200: {
        items: 4,
      }
    },
  });
  // mở rộng, thu gọn mô tả
  document.getElementById('button-thu-mo').addEventListener('click', function() {
    var content = document.getElementById('content');
    if (content.classList.contains('mo-rong')) {
        content.classList.remove('mo-rong');
        content.classList.add('thu-gon');
        this.textContent = 'Xem thêm';
    } else {
        content.classList.remove('thu-gon');
        content.classList.add('mo-rong');
        this.textContent = 'Thu gọn';
    }
    // add before khi thu gọn và xóa khi mở rộng
    var btnMo = document.getElementById("btn-mo-rong");
    if(btnMo.classList.contains("hien-before")){
      btnMo.classList.add("an-before");
      btnMo.classList.remove("hien-before");
    }else{
      btnMo.classList.add("hien-before");
      btnMo.classList.remove("an-before");
    }
});
// btn quantity

document.getElementById('decrease-btn').addEventListener('click', function() {
  var result = document.getElementById('qtym');
  var qtypro = parseInt(result.value);
  if (!isNaN(qtypro) && qtypro > 1) {
      result.value = qtypro - 1;
  }
});

document.getElementById('increase-btn').addEventListener('click', function() {
  var result = document.getElementById('qtym');
  var qtypro = parseInt(result.value);
  if (!isNaN(qtypro)) {
      result.value = qtypro + 1;
  }
});

document.getElementById('qtym').addEventListener('keypress', function(event) {
  if (isNaN(this.value + String.fromCharCode(event.keyCode))) {
      event.preventDefault();
  }
});

document.getElementById('qtym').addEventListener('change', function() {
  if (this.value == 0) {
      this.value = 1;
  }
});

// 
