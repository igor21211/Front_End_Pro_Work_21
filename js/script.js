document.addEventListener('DOMContentLoaded', () => {
    clickToShow();
})

const clickToShow = () => {
    let btn = document.querySelector('.btn_show_table');
    let inputValue = document.querySelector('.input_value');
    btn.addEventListener('click', () => showTable(inputValue.value/10));
}

const showTable = (num) => {
    let tbody = document.querySelector('.table')
    let html = "";
    for (let i = 1; i <= num; i++) {
        html += "<tr>";
        for (let j = 1; j <= 10; j++) {
           let value = (i-1) * 10 + j;
            html += `<td>${value}</td>`;
            
        }
        html += "</tr>";

    }
    tbody.innerHTML = html;
}