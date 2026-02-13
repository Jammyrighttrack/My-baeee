/**
 * @author Truong Giang  
 * 
 */

// Không được thay đổi ở đây - Not to change
$(document).ready(function () {
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);
});
     
function start() {
  const btnYes = document.querySelector(".btn--yes");  
  const btnNo = document.querySelector(".btn--no");
  const popup = document.querySelector(".modal");
  const overlay = document.querySelector(".modal__overlay");
  const btnClose = document.querySelector(".btn-close");
  const headerModar = document.querySelector(".heading-name");
  const desccriptionModar = document.querySelector(".message");
  const welcomeScreen = document.getElementById('welcome-screen');
  const btnStart = document.getElementById('btn-start');
  const music = document.getElementById('bg-music');

  window.onload = () => {
    music.play();
    music.volume = 1;
  };  
  window.onkeypress = (e) => {
    if (e.charCode === 32) {
      music.play();
    }
  };      

  document.querySelector(".header").innerHTML = `  
        <h1 class="header-name">  
            ${CONFIGDATA.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${CONFIGDATA.descriptionHeader}
            <i class="ti-face-smile"></i>
        </p>`;  
  btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${CONFIGDATA.buttonYes}`;
  btnNo.innerHTML = `<i class="ti-thumb-down"></i> ${CONFIGDATA.buttonNo}`;
  headerModar.innerHTML = `${CONFIGDATA.titleModar} <i class="ti-heart"></i>`;
  desccriptionModar.innerHTML = `${CONFIGDATA.descriptionModar}`;

  btnYes.onclick = () => {
    popup.classList.add("show");
  };    
  btnClose.onclick = () => {
    popup.classList.remove("show");
  };

  overlay.onclick = () => {
    popup.classList.remove("show");
  };

  btnNo.onclick = () => {      
    btnNo.style.top = 100 + "px";
    btnYes.style.top = 280 + "px";
  };
      
  btnNo.onmouseover = (e) => {
    var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
    var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
    btnNo.style.top = x + "px";
    btnNo.style.right = y + "px";
  };

  
btnStart.addEventListener('click', () => {
    // 1. Phát nhạc (Trình duyệt cho phép vì đây là tương tác của người dùng)
    music.play().catch(error => console.log("Lỗi phát nhạc:", error));
    
    // 2. Set volume cho chắc ăn
    music.volume = 1;

    // 3. Ẩn màn hình chào đi
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 500); // Đợi hiệu ứng mượt xong mới xóa hẳn
});   

}

start();
