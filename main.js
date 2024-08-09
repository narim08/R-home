let currentSlideIndex = 0; //전역변수로 호출할 때마다 업데이트
showSlides(); //페이지 로드 시 호출

function showSlides() {
  let slides = document.querySelectorAll('.slide');

  if (slides.length === 0) {
    console.error("슬라이드를 찾을 수 없습니다.");
    return;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
   
  }
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides[currentSlideIndex].style.display = 'block';
  currentSlideIndex++;
  setTimeout(showSlides, 7000);
}

function setClock(){
  var dateInfo = new Date(); 
  var hour = modifyNumber(dateInfo.getHours());
  var min = modifyNumber(dateInfo.getMinutes());
  var sec = modifyNumber(dateInfo.getSeconds());
  var year = dateInfo.getFullYear();
  var month = dateInfo.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
  var date = dateInfo.getDate();
  document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
  document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time){
  if(parseInt(time)<10){
      return "0"+ time;
  }
  else
      return time;
}
window.onload = function(){
  setClock();
  setInterval(setClock,1000); //1초마다 setClock 함수 실행
}