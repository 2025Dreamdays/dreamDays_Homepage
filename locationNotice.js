window.onload = function () {
    console.log("🚀 window.onload 실행됨");

    // ✅ API가 로드되었는지 확인
    if (typeof kakao !== "undefined" && kakao.maps) {
        console.log("✅ 카카오 API 로드 성공!");
        initMap();
    } else {
        console.error("🚨 카카오 지도 API가 로드되지 않았습니다. API 키와 도메인 등록을 확인하세요.");
    }
};

// ✅ 지도 초기화 함수
 // 카카오맵 그리기
 function printKakaomap() {
    var container = document.getElementById("map");
    var options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new window.kakao.maps.Map(container, options);
  }
