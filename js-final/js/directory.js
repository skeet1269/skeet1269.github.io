const requestURL = 'https://skeet1269.github.io/js-final/business.json';

fetch(requestURL)
.then((response) => response.json())
.then((jsonObject) => {
  
    console.table(jsonObject);
    const business = jsonObject["business"];

    console.log(business);

    const cards = [];

    for (let i = 0; i < business.length; i++ ) {
         {
            let card = document.createElement('section');
            let data = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let Phone = document.createElement('p');
            let Address = document.createElement('p');
            let townImage = document.createElement('img');

            data.className = 'data';
            
            h2.textContent = business[i].name;
            motto.textContent = business[i].motto;
            Phone.textContent = 'Phone #: ' + business[i].Phone;
            Address.textContent = 'Address: ' + business[i].Address;
            

            if (i == 0) {
                townImage.setAttribute('src', '../js-final/images/goldenruleweb.png')
                townImage.setAttribute('alt', 'Image of ' + business[i].name)
                card.setAttribute('id', 'golden')
              }

              if (i == 1) {
                townImage.setAttribute('src', '../js-final/images/cahabaweb.png')
                townImage.setAttribute('alt', 'Image of ' + business[i].name)
                card.setAttribute('id', 'cahaba')
              }

            if (i == 2) {
              townImage.setAttribute('src', '../js-final/images/minutemanweb.png')
              townImage.setAttribute('alt', 'Image of ' + business[i].name)
              card.setAttribute('id', 'minuteman')
            } 
           
            
            data.append(h2);
            data.append(motto);
            data.append(Phone);
            data.append(Address);
            card.append(townImage);  
            card.append(data);  
        
            cards.push(card);
  }}
  const result = [cards[2], cards[0], cards[1]];
  result.forEach(card => document.querySelector('div.cards').append(card))
});