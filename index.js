const slider = document.getElementById("slider");
const indicators = document.querySelectorAll(".indicator");

// 슬라이드 이동 함수 (클릭 시)
function moveToSlide(index) {
    const slideWidth = slider.clientWidth;
    slider.scrollLeft = slideWidth * index;  // 해당 인덱스로 스크롤 이동
    updateIndicator(index);
}

// 인디케이터 업데이트 함수
function updateIndicator(index) {
    indicators.forEach(indicator => indicator.classList.remove("active"));
    indicators[index].classList.add("active");
}

// 스크롤 이벤트로 현재 슬라이드 감지
slider.addEventListener("scroll", () => {
    const slideWidth = slider.clientWidth;
    const index = Math.round(slider.scrollLeft / slideWidth);  // 현재 슬라이드 인덱스 계산
    updateIndicator(index);
});

// 첫 번째 인디케이터 활성화
updateIndicator(0);
