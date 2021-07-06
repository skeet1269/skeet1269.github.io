const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const towns = jsonObject["towns"];
    for (town of towns) {
      if (town.name === "Soda Springs") {
        const townEvents = document.querySelector(".events");
        const eventList = document.createElement("ul");
        eventList.classList.add("eventsinfo");

        const events = town.events;

        for (let event of events) {
          const eventName = document.createElement("li");
          eventName.textContent = event;
          eventList.appendChild(eventName);
        }
        townEvents.appendChild(eventList);
      }
    }
  });