const page1Foods = [
    {
        category: "한식맛집",
        name: "신사골 감자탕 은행점",
        location: "경기 성남시 중원구 산성대로 534 1층~2층",
        menu: "뼈해장국, 辛사골 감자탕, 辛대왕 등뼈찜",
        text: "신사골감자탕은 진한 국물과 푸짐한 고기 그리고 합리적인 가격으로 깊은 맛을 느낄 수 있는 뼈해장국집이다. 산처럼 쌓인 고기가 특징이다.",
    },
    {
        category: "한식맛집",
        name: "도담 순대국",
        location: "경기 성남시 중원구 산성대로476번길 3 도담순대국",
        menu: "순대국, 얼큰 순대국, 막창강정",
        text: "깔끔하고 깊은 맛의 순댓국을 합리적인 가격에 제공한다. BTS RM의 사인이 있어, 더 유명해지기 전에 가보길 추천한다.",
    },
    {
        category: "한식맛집",
        name: "행복식당",
        location: "경기 성남시 수정구 산성대로 581",
        menu: "백반, 김치찌개, 제육볶음",
        text: "을지대학교 학생들은 현금 또는 계좌이체 시 각 메뉴별로 1,000원 할인, 다양한 메뉴를 합리적인 가격에 제공하여 학생들과 지역 주민들에게 사랑받는 식당이다. 매일 바뀌는 밑반찬에 따뜻한 분위기로, 자취생들에게 추천하는 집이다.",
    },
    {
        category: "한식맛집",
        name: "김치찜의 정석",
        location: "경기 성남시 중원구 산성대로 566",
        menu: "갈비 김치찜, 삼겹 김치찜, 계란말이",
        text: "얼큰하고 시원한 맛이 특징이며, 묵은지의 아삭함과 고기의 부드러움이 잘 어우러져 입맛을 돋운다. 점심에 선착순 1팀에게 서비스를 주신다.",
    },
    {
        category: "한식맛집",
        name: "역전우동",
        location: "경기 성남시 수정구 산성대로 539 103호 1층",
        menu: "옛날우동, 냉모밀, 돈까스, 우볶이",
        text: "가성비 좋은 우동과 덮밥을 제공하여 학생들에게 인기 있는 맛집이다. 장소가 협소해 점심에 빨리 자리를 잡아야 한다.",
    },
    {
        category: "한식맛집",
        name: "최박사 돈까스 냉면",
        location: "경기 성남시 중원구 산성대로 574 1층",
        menu: "물냉 돈까스, 비냉 돈까스, 바삭돈까스",
        text: "돈까스와 냉면을 함께 즐길 수 있어 학생들에게 인기 있는 맛집이다. 양이 생각보다 많아 세트 메뉴는 2인이서 나눠 먹는게 좋다.",
    },
    {
        category: "한식맛집",
        name: "등촌샤브칼국수",
        location: "경기 성남시 수정구 산성대로 509-1",
        menu: "버섯매운탕칼국수, 볶음밥",
        text: "신선한 재료와 얼큰한 국물로 깊은 맛을 자랑하며, 특히 버섯 칼국수가 인기 있는 곳, 마지막에 먹는 볶음밥이 킥이다.",
    },
    {
        category: "한식맛집",
        name: "홍익화로구이",
        location: "경기 성남시 중원구 산성대로 556 2층",
        menu: "뼈해장국, 辛사골 감자탕, 辛대왕 등뼈찜",
        text: "신선한 고기와 정성 가득한 서비스로 입맛을 사로잡는 성남의 인기 화로구이 맛집이다. 무료 아이스크림을 꼭 먹어야 한다.",
    },
    {
        category: "한식맛집",
        name: "오대오 바지락 칼국수",
        location: "경기 성남시 중원구 순환로 467",
        menu: "칼국수, 왕만두",
        text: "신선한 바지락과 쫄깃한 면발이 어우러져 시원하고 깊은 맛을 자랑한다. 양이 많아서 3명이서 하나를 나눠 먹어야 한다.",
    },
    {
        category: "한식맛집",
        name: "방가로 두부 이야기",
        location: "경기 성남시 중원구 산성대로518번길 8 1층 방가로 두부이야기",
        menu: "두부조림, 해물 순두부, 두부 제육볶음",
        text: "신선한 수제 두부 요리와 다양한 반찬으로 건강한 한 끼를 즐길 수 있다. 수제로 만든 두부라 더 부드럽다.",
    },
    {
        category: "한식맛집",
        name: "봉평메밀막국수",
        location: "경기 성남시 수정구 산성대로 589",
        menu: "메밀 물 막국수, 들깨 감자 옹심이, 메밀 온 막국수",
        text: "100% 국산 메밀로 만든 면발과 시원한 육수가 조화를 이루며, 특히 물막국수와 비빔막국수가 유명하다. 더운 여름에도 추운 겨울에도 먹기 좋다.",
    }
]

const page2Foods = [
    {
        category: "양식맛집",
        name: "롤링파스타",
        location: "경기 성남시 수정구 산성대로 529 1층",
        menu: "매운 우삼겹 오일 파스타, 토마토 파스타, 고르곤 졸라",
        text: "가성비 좋은 파스타와 피자를 부담 없이 즐길 수 있다. 더블 매쉬드 샐러드를 시키면 감자 샐러드를 고봉밥처럼 많이 주신다.",
    },
    {
        category: "양식맛집",
        name: "고욤비스트로",
        location: "경기 성남시 중원구 산성대로 532 2층",
        menu: "비스큐 파스타, 토마토 해산물 파스타",
        text: "부드러운 우드톤 인테리어와 널찍한 창문으로 편안한 분위기를 제공하며, 다양한 이탈리안 요리를 맛볼 수 있는 곳이다. 가격은 조금 쎈 편.",
    },
    {
        category: "양식맛집",
        name: "파스타 진",
        location: "경기 성남시 중원구 산성대로442번길 7 1층",
        menu: "새우 로제 파스타, 투움바, 해산물 투움바",
        text: "다양한 파스타 메뉴를 저렴한 가격에 제공, 최대 1만 원 이내의 가격대에서 가볍게 식사를 즐길 수 있다.",
    },
    {
        category: "중식맛집",
        name: "홍콩반점",
        location: "경기 성남시 중원구 산성대로 522 1층",
        menu: "짜장면, 찹쌀 탕수육, 짬뽕",
        text: "저렴한 가격에 깔끔하고 맛있는 짜장면과 짬뽕을 제공, 가끔 할인 행사로 더 싸게 먹을 수 있다.",
    },
    {
        category: "중식맛집",
        name: "주야짬뽕",
        location: "경기 성남시 수정구 산성대로 517",
        menu: "짬뽕,짜장면,탕수육",
        text: "가성비 좋은 짜장면과 얼큰한 짬뽕을 먹을 수 있음. 늦은 시간까지 운영해, 늦은 저녁에도 먹을 수 있음.",
    },
    {
        category: "중식맛집",
        name: "중화가정식 태룡",
        location: "경기 성남시 중원구 산성대로518번길 33 1층 태룡",
        menu: "24시간숙성 등심탕수육, 꿀 호두망고 크림새우, 짜장면",
        text: "육즙 가득한 탕수육과 독특한 튀김이 인상적인 곳, 고급지게 맛있다는 평이 많음.",
    },
    {
        category: "중식맛집",
        name: "정원 중화 요리",
        location: "경기 성남시 수정구 산성대로 569 1층",
        menu: "쟁반 짜장, 탕수육, 짬뽕",
        text: "쫀득한 탕수육이 입천장까지 까질 정도로 바삭하게 맛있다. 짜장면은 쟁반 짜장으로 먹는걸 추천.",
    },
    {
        category: "중식맛집",
        name: "을지마라탕",
        location: "경기 성남시 중원구 산성대로 570-1 2층 을지마라탕",
        menu: "셀프 마라탕, 마라샹궈, 꿔바로우",
        text: "다양한 재료를 선택하여 자신만의 마라탕을 즐길 수 있으며, 매운맛의 강도를 조절할 수 있어 취향에 맞게 즐길 수 있다. 재료가 신선해서 좋다.",
    },
    {
        category: "분식맛집",
        name: "숙이네 분식",
        location: "경기 성남시 수정구 논골로 14",
        menu: "해물즉석 떡볶이, 라면, 비빔 쫄면",
        text: "쫄깃한 밀떡과 신선한 해산물이 어우러져 깊은 맛을 자랑하며, 튀김만두와 라면사리 등 다양한 추가 메뉴도 제공.",
    },
    {
        category: "분식맛집",
        name: "짱이야 떡볶이",
        location: "경기 성남시 수정구 양지로 2 짱이야떡볶이",
        menu: "떡볶이, 비벼밥, 매떡밥",
        text: "매콤한 국물과 쫄깃한 떡이 어우러져 깊은 맛을 자랑한다. 특히, 참치마요밥과 비벼 먹는 비벼밥이 포인트다.",
    },
    {
        category: "분식맛집",
        name: "천하일미김밥집",
        location: "경기 성남시 수정구 산성대로 529-11층",
        menu: "일미김밥, 돈까스, 쫄면",
        text: "천하일미김밥집은 가성비 좋은 김밥과 다양한 분식 메뉴를 24시간 즐길 수 있는 곳이다. 세트메뉴로 먹는걸 추천한다.",
    },
]

const coffees = [
    {
        name: "범석관 1층 교내카페",
        location: "경기 성남시 수정구 산성대로 553",
        menu: "아메리카노,아이스티",
        text: "수업이 있는 학생들이 간단하게 커피를 즐기기에 적합하며, 옆에있는 편의점도 들리기 좋다.",
    },
    {
        name: "뉴밀레니엄센터 1층 교내카페",
        location: "경기 성남시 수정구 산성대로 573",
        menu: "아메리카노,녹차 프라페",
        text: "학생식당 위에 위치한 카페, 학식을 먹고 가기 좋으며, 조용해서 과제하기에도 좋다.",
    },
    {
        name: "이디야커피 을지대점",
        location: "경기 성남시 수정구 수정로578번길 28",
        menu: "아이스티 망고 추가, 토피넛 라떼, 아메리카노",
        text: "조용한 분위기와 넓은 공간으로 학습이나 휴식에 적합, 아이스티 샷,망고 추가시 무료 사이즈업도 해주신다.",
    },
    {
        name: "메머드익스프레스",
        location: "경기 성남시 수정구 산성대로567번길 10",
        menu: "민트초코 프라페, 카페라떼, 청귤 에이드",
        text: "가장 가까운 프랜차이즈 카페이며, 밝은 분위기와 저렴한 가격으로 학생들에게 인기 있는 카페이다.",
    },
    {
        name: "투썸 플레이스",
        location: "경기 성남시 수정구 산성대로 533 1,2층",
        menu: "스초생, 아이스박스, 신촌커피",
        text: "넓은 자리를 제공해 과제 하기에 좋으며, 다양한 디저트와 음료를 즐길 수 있다.",
    },
    {
        name: "컴포즈 커피",
        location: "경기 성남시 수정구 산성대로 539",
        menu: "쿠키초코라떼, 리얼초코자바칩, 바닐라 라떼",
        text: "가성비 높은 커피와 다양한 음료를 제공하는 곳이다. 휘핑이 쫀득해서 맛있다.",
    },
    {
        name: "빽다방",
        location: "경기 성남시 수정구 산성대로 535",
        menu: "완전 초코, 사라다빵, 녹차 빽스치노",
        text: "빠른 서비스와 편안한 분위기,가성비 좋은 커피와 다양한 음료를 제공한다.",
    },
    {
        name: "메가커피",
        location: "경기 성남시 수정구 산성대로 525 1층",
        menu: "감자빵, 딸기라떼, 메가초코",
        text: "빠르게 음료를 받을 수 있다. 제일 최근에 생긴 카페로, 쾌적한 환경을 즐길 수 있다.",
    },
    {
        name: "이너프",
        location: "경기 성남시 수정구 산성대로 481 1,2층 이너프 inuf",
        menu: "피스타치오크림라떼, 눈꽃 애플망고 치즈빙수, 엑설런트 라떼",
        text: "넓고 쾌적한 2층 카페로, 다양한 음료와 디저트를 제공한다. 2층에는 콘센트가 있어 작업하기에도 적합한 환경이다.",
    },
    {
        name: "연주빵집",
        location: "경기 성남시 중원구 산성대로 576 번길 1층",
        menu: "슈크림빵, 소금빵 ,모카크림빵",
        text: "갓 구워낸 빵의 촉촉함과 풍부한 맛이 매력적이며, 가격도 합리적, 특히 소금빵이 유명하다.",
    },
    {
        name: "카페 만월경",
        location: "경기 성남시 수정구 산성대로 569 B1층",
        menu: "고래로로쉐, 레몬에이드, 아메리카노",
        text: "24시간 무인으로 운영되는 카페로, 시험기간 공부하기 좋은 카페입니다. 학교앞과 남한산성역 근처에도 있지만, 학교앞이 더 넓습니다.",
    },
]


const suls = [
    {
        name: "서울삼겹살",
        location: "경기 성남시 중원구 산성대로562번길 1",
        menu: "김치전, 미나리 삼겹살",
        text: "무료로 제공되는 김치전을 무한으로 즐길 수 있으며, 저렴한 가격에 소주를 함께 마실 수 있어 가성비 좋은 고기집이다.",
    },
    {
        name: "월매주막",
        location: "경기 성남시 중원구 산성대로 508 2층",
        menu: "월매족발 ,냉채 족발, 골뱅이 무침",
        text: "월매주막은 성남 모란 지역에 위치한 족발 전문점으로, 다양한 족발 메뉴를 제공한다.",
    },
    {
        name: "와다다",
        location: "경기 성남시 수정구 산성대로 539",
        menu: "파닭순두부찌개, 새우탕, 후라이드 치킨",
        text: "가성비 좋은 치킨 호프집으로, 넓고 친근한 분위기에서 학우들과 함께 방문하기 좋은 장소이다.",
    },
    {
        name: "필가",
        location: "경기 성남시 중원구 산성대로 558",
        menu: "간장치킨, 치즈콘버터구이, 짜파구리",
        text: "학생들의 회식 장소로 유명하며, 다양한 메뉴와 가성비 좋은 가격으로 즐거운 시간을 보낼 수 있다.",
    },
    {
        name: "성남야시장",
        location: "경기 성남시 수정구 산성대로 479 2층 성남야시장",
        menu: "깐풍기, 똥집볶음, 국물떡볶이",
        text: "가성비 좋은 안주와 다양한 음료를 제공하여 대학생들의 회식 장소로 추천한다. ",
    },
    {
        name: "봉구비어",
        location: "경기 성남시 중원구 산성대로582번길 2",
        menu: "통닭, 감자튀김, 치즈스틱",
        text: "저렴한 가격에 다양한 맥주와 맛있는 안주를 제공하는 곳이다.",
    },
    {
        name: "도쿠베츠",
        location: "경기 성남시 중원구 산성대로 594 1층",
        menu: "모듬꼬치구이, 치킨 가라아게, 나가사끼짬뽕나베",
        text: "가성비 높은 이자카야로, 다양한 메뉴와 무한 사케를 제공하여 가볍게 맥주한 잔 즐기기에 좋은 장소이다.",
    },
    {
        name: "놀자비어",
        location: "경기 성남시 중원구 은이로7번길 2 3층",
        menu: "육전, 제육볶음, 수제 오뎅탕",
        text: "사자님이 친절하시고, 안주가 빨리 나온다. 동네 술집 치고는 조금 비싼편이다.",
    },
    {
        name: "친구야 포차가자",
        location: "경기 성남시 중원구 산성대로540번길 1",
        menu: "해물파전, 멍게, 꼬막찜",
        text: "계절별로 변하는 메뉴로 항상 신선한 요리를 맛볼 수 있으며, 멍게와 꼬막찜도 인기 있는 메뉴이다.",
    },
    {
        name: "79대포",
        location: "경기 성남시 수정구 산성대로 503 1층",
        menu: "빠삭 파전, 허니갈릭 감자튀김, 소곱창전골",
        text: "저렴한 가격대의 다양한 안주를 제공하는 가성비 좋은 술집, 회식 2차로 적합하다.",
    },

]

const goodFoodList = document.querySelector(".goodFoodList");
const bab = document.querySelector(".bab");
const coffee = document.querySelector(".coffee");
const sul = document.querySelector(".sul");
const page1Button = document.querySelector('.pageButton1');
const page2Button = document.querySelector('.pageButton2');

const buttonArea = document.querySelector('.buttonArea');

const listView = (foodList) => {
    goodFoodList.innerHTML = "";

    foodList.forEach(food => {

        const FoodMainDiv = document.createElement("div");
        FoodMainDiv.setAttribute("class", "foodMainDiv")

        const FoodNameDiv = document.createElement("div");
        FoodNameDiv.setAttribute("class", "foodName");
        FoodNameDiv.innerText = food.name;

        const FoodLocationDiv = document.createElement("div");
        FoodLocationDiv.setAttribute("class", "foodLocation");
        FoodLocationDiv.innerText = food.location;

        const FoodMenuDiv = document.createElement("div");
        FoodMenuDiv.setAttribute("class", "foodMenu");
        FoodMenuDiv.innerText = food.menu;

        const FoodtextDiv = document.createElement("div");
        FoodtextDiv.setAttribute("class", "foodtext");
        FoodtextDiv.innerText = food.text;

        goodFoodList.appendChild(FoodMainDiv);
        FoodMainDiv.appendChild(FoodNameDiv);
        FoodMainDiv.appendChild(FoodLocationDiv);
        FoodMainDiv.appendChild(FoodMenuDiv);
        FoodMainDiv.appendChild(FoodtextDiv);

    })


}

listView(page1Foods);

page1Button.addEventListener('click', () => {
    listView(page1Foods)
    page1Button.classList.add("buttonOrange");
    page2Button.classList.remove("buttonOrange");
});
page2Button.addEventListener('click', () => {
    listView(page2Foods)
    page2Button.classList.add("buttonOrange");
    page1Button.classList.remove("buttonOrange");
});

bab.addEventListener('click', () => {
    listView(page1Foods)
    buttonArea.classList.remove('none');
    bab.classList.add("white");
    coffee.classList.remove("white");
    sul.classList.remove("white");
    page1Button.classList.add("buttonOrange");
    page2Button.classList.remove("buttonOrange");
})
coffee.addEventListener('click', () => {
    listView(coffees)
    buttonArea.classList.add('none');
    coffee.classList.add("white");
    bab.classList.remove("white");
    sul.classList.remove("white");
})
sul.addEventListener('click', () => {
    listView(suls)
    buttonArea.classList.add('none');
    sul.classList.add("white");
    bab.classList.remove("white");
    coffee.classList.remove("white");

})

page1Button.addEventListener('click', () => {
    page1Button.classList.add("buttonOrange");
    page2Button.classList.remove("buttonOrange");
})