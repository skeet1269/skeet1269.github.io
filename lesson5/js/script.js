function getdate() {
    document.getElementById("lastmodified").innerText =  "Last Modified: " + document.lastModified;
}

function togglemenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US" , { dateStyle: "full" }).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;