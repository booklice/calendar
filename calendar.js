const getDays = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const startOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const month = new Date(Date.now()).getMonth() + 1;
const year = new Date(Date.now()).getFullYear();
const days = getDays(month, year);
const day = (startOfMonth(new Date(year, month - 1, 1)) + 6) % 7;
const months = ["월", "화", "수", "목", "금", "토", "일"];

const createCalendar = (targetContainer) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const newTr = document.createElement("tr");
  const newTh = document.createElement("th");

  table.style.textAlign = "center";

  newTh.setAttribute("class", "month");
  newTr.appendChild(newTh);

  const anotherNewTr = document.createElement("tr");

  for (let i = 0; i < months.length; i++) {
    const monthTh = document.createElement("th");
    monthTh.textContent = months[i];
    anotherNewTr.appendChild(monthTh);
  }

  thead.appendChild(newTr);
  thead.appendChild(anotherNewTr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const currentDate = new Date(); // 현재 날짜
  let currentDay = 1;
  newTh.textContent = month;

  for (let i = 0; i < 6; i++) {
    // 월 1일부터 최대 6주까지 표시
    const newRow = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      // 7일 (월요일부터 일요일까지)
      const newData = document.createElement("td");
      if (i === 0 && j < day) {
        // 첫 주의 시작 요일 전까지 비움
        newData.textContent = "";
      } else if (currentDay <= days) {
        // 날짜를 출력
        newData.textContent = currentDay;
        currentDay++;

        // 현재 날짜와 비교하여 오늘인 경우 'today' 클래스 추가
        if (
          currentDate.getDate() === currentDay - 1 &&
          currentDate.getMonth() + 1 === month &&
          currentDate.getFullYear() === year
        ) {
          newData.classList.add("today");
          newData.style.textDecoration = "underline";
          newData.style.fontWeight = "bold";
        }

        newData.setAttribute("day", currentDay - 1);
      }
      newRow.appendChild(newData);
    }
    tbody.appendChild(newRow);
  }

  table.appendChild(tbody);
  targetContainer.appendChild(table);
};

// document.addEventListener("DOMContentLoaded", () => {
//   const targetElement = document.querySelector(".target-container");
//   createCalendar(targetElement);
// });
