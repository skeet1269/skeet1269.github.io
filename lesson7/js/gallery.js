function getLastVisited() {
    if (localStorage.lastVisited) {
        const today = new Date();
        const previous = localStorage.lastVisited;
        const diffTime = Math.abs(today - previous);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById('lastVisited').innerText = "You last visited " + diffDays +  " days ago.";
    } else {
        localStorage.lastVisited = new Date();
        document.getElementById('lastVisited').innerText = '0';
    }
}