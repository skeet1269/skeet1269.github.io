function getdate() {
    document.getElementById("lastmodified").innerHTML =  "Last Modified:" + document.lastModified;
}

function togglemenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US" , { dateStyle: "full" }).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;

let thedate = new Date();

    if (thedate.getDay() == 5) {
    document.querySelector('#banner').style.display = "block";
    }
    else {
       document.querySelector('#banner').style.display = 'none';
    }