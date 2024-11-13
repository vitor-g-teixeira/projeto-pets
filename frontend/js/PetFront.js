const validarData = function(){
    const dateString = document.getElementById('data-resgate-input').value;
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);

    if (!match) {
        alert('A data deve seguir o formato: dd/mm/aaaa');
        return false;
    }
    const day = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const year = parseInt(match[3]);

    const date = new Date(year, month, day);

    if(date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) return true;
    else{
        alert('A data inserida não é válida');
        return false;
    }
}

function handleSelectChange(event) {
    const select = event.target;
    if (select.value !== "default") {
        select.classList.add("changed");
    } else {
        select.classList.remove("changed");
    }
}

const selects = document.querySelectorAll('.select-front');

selects.forEach(select => {
    select.addEventListener('change', handleSelectChange);
});