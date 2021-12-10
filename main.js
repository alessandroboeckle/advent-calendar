const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;
var date1 = new Date();
date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0);
console.log(date1);

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";
}

const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");



        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        courseNumber = i + 1;
        let coursePath = `./courses/course-${courseNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath));
    }
}

calendarButton.addEventListener("click", createCalendar);

