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
    },
    {
        department: "안경광학과",
        img: "img\\hs2.svg",
    },
    {
        department: "응급구조학과",
        img: "img\\hs3.svg",
    },
    {
        department: "방사선학과",
        img: "img\\hs4.svg",
    },
    {
        department: "치위생학과",
        img: "img\\hs5.svg",
    },
    {
        department: "물리치료학과",
        img: "img\\hs6.svg",
    },
    {
        department: "의료경영학과",
        img: "img\\hs7.svg",
    },
]

const aiDepartments = [
    {
        department: "빅데이터인공지능 전공",
        img: "img\\ai1.svg",
    },
    {
        department: "글로벌빅데이터AI학과과",
        img: "img\\ai2.svg",
    },
]

const naDepartments = [
    {
        department: "식품영양전공",
        img: "img\\na1.svg",
    },
    {
        department: "식품생명공학전공",
        img: "img\\na2.svg",
    },
    {
        department: "안전공학전공",
        img: "img\\na3.svg",
    },
    {
        department: "화장품과학전공",
        img: "img\\na4.svg",
    },
    {
        department: "의료공학전공",
        img: "img\\na5.svg",
    },
]

const soDepartments = [
    {
        department: "레저산업전공",
        img: "img\\so1.svg",
    },
    {
        department: "뷰티아트전공",
        img: "img\\so2.svg",
    },
    {
        department: "시각디자인전공",
        img: "img\\so3.svg",
    },
    {
        department: "사회복지전공",
        img: "img\\so4.svg",
    },
    {
        department: "아동청소년상담전공",
        img: "img\\so5.svg",
    },
    {
        department: "중독상담전공",
        img: "img\\so6.svg",
    },
    {
        department: "장례산업전공",
        img: "img\\so7.svg",
    },
]

const nuDepartments = [
    {
        department: "간호학과",
        img: "img\\ns1.svg",
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

        const nameSection = document.createElement("div");
        nameSection.setAttribute("class", "nameSection");

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


