const department = document.querySelector('.department');

const nurseB = document.querySelector('.nurse');
const healthScienceB = document.querySelector('.healthScience');
const aiB = document.querySelector('.ai');
const natureB = document.querySelector('.nature');
const societyB = document.querySelector('.society');



const hsDepartments = [
    {
        department: "임상병리학과",
        img: "img\\hs1.svg",
        link: "hsPage/imPage.html",
    },
    {
        department: "안경광학과",
        img: "img\\hs2.svg",
        link: "hsPage/glassesPage.html",
    },
    {
        department: "응급구조학과",
        img: "img\\hs3.svg",
        link: "hsPage/rescuePage.html",
    },
    {
        department: "방사선학과",
        img: "img\\hs4.svg",
        link: "hsPage/bangPage.html",
    },
    {
        department: "치위생학과",
        img: "img\\hs5.svg",
        link: "hsPage/toothPage.html",
    },
    {
        department: "물리치료학과",
        img: "img\\hs6.svg",
        link: "hsPage/physicsPage.html",

    },
    {
        department: "의료경영학과",
        img: "img\\hs7.svg",
        link: "hsPage/managePage.html",

    },
]

const aiDepartments = [
    {
        department: "빅데이터인공지능 전공",
        img: "img\\ai1.svg",
        link: "aiPage/aiPage.html",

    },
    {
        department: "글로벌빅데이터AI학과과",
        img: "img\\ai2.svg",
        link: "aiPage/globalAiPage.html",

    },
]

const naDepartments = [
    {
        department: "식품영양전공",
        img: "img\\na1.svg",
        link: "naPage/nutritionPage.html",

    },
    {
        department: "식품생명공학전공",
        img: "img\\na2.svg",
        link: "naPage/foodLifePage.html",

    },
    {
        department: "안전공학전공",
        img: "img\\na3.svg",
        link: "naPage/safetyPage.html",

    },
    {
        department: "화장품과학전공",
        img: "img\\na4.svg",
        link: "naPage/cosmeticsPage.html",

    },
    {
        department: "의료공학전공",
        img: "img\\na5.svg",
        link: "naPage/engineeringPage.html",

    },
]

const soDepartments = [
    {
        department: "레저산업전공",
        img: "img\\so1.svg",
        link: "soPage/leisurePage.html",

    },
    {
        department: "뷰티아트전공",
        img: "img\\so2.svg",
        link: "soPage/beautyPage.html",


    },
    {
        department: "시각디자인전공",
        img: "img\\so3.svg",
        link: "soPage/designPage.html",

    },
    {
        department: "사회복지전공",
        img: "img\\so4.svg",
        link: "soPage/socialPage.html",
    },
    {
        department: "아동청소년상담전공",
        img: "img\\so5.svg",
        link: "soPage/childPage.html",
    },
    {
        department: "중독상담전공",
        img: "img\\so6.svg",
        link: "soPage/addictionPage.html",
    },
    {
        department: "장례산업전공",
        img: "img\\so7.svg",
        link: "soPage/funeralPage.html",
    },
]

const nuDepartments = [
    {
        department: "간호학과",
        img: "img\\ns1.svg",
        link: "nsPage/nursePage.html",
    },
]


function selectDepartment(object, button) {
    nurseB.classList.remove("buttonW");
    healthScienceB.classList.remove("buttonW");
    aiB.classList.remove("buttonW");
    natureB.classList.remove("buttonW");
    societyB.classList.remove("buttonW");
    button.classList.add("buttonW");
    department.innerHTML = "";
    object.forEach(depart => {

        const hsDepartment = document.createElement("div");
        hsDepartment.setAttribute("class", "departmentDiv");

        const departmentImg = document.createElement("img");
        departmentImg.setAttribute("src", depart.img)

        const nameSection = document.createElement("a");
        nameSection.setAttribute("class", "nameSection");
        nameSection.setAttribute("href", depart.link)

        const arrowDiv = document.createElement("div");
        arrowDiv.setAttribute("class", "arrowDiv");

        const departmentArrow = document.createElement("img");
        departmentArrow.setAttribute("src", "img\\arrow.svg");

        const departmentName = document.createElement("div");
        departmentName.setAttribute("class", "departmentName");
        departmentName.innerText = depart.department;


        department.appendChild(hsDepartment);
        hsDepartment.appendChild(departmentImg);
        hsDepartment.appendChild(nameSection);
        nameSection.appendChild(departmentName);
        nameSection.appendChild(arrowDiv);
        arrowDiv.appendChild(departmentArrow);

    });
}



nurseB.addEventListener("click", () => selectDepartment(nuDepartments, nurseB));
healthScienceB.addEventListener("click", () => selectDepartment(hsDepartments, healthScienceB));
aiB.addEventListener("click", () => selectDepartment(aiDepartments, aiB));
natureB.addEventListener("click", () => selectDepartment(naDepartments, natureB));
societyB.addEventListener("click", () => selectDepartment(soDepartments, societyB))

selectDepartment(nuDepartments, nurseB);


