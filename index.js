const openMenu = document.querySelector('#menu-button');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu-items-mobile');
const bak = document.querySelector('.button-container-mobile');
const cards = document.querySelector('.spk-card-container');

function openM() {
  menu.style.display = 'flex';
  closeButton.style.display = 'block';
  openMenu.style.display = 'none';
  bak.style.display = 'block';
}

function closeM() {
  menu.style.display = 'none';
  closeButton.style.display = 'none';
  openMenu.style.display = 'block';
  bak.style.display = 'none';
}

openMenu.addEventListener('click', openM);
closeButton.addEventListener('click', closeM);


const cardlist = [
    {
      imgUrl: 'static/card-pictures/guest1.jpg',
      name: 'Nourat',
      title: 'Afrcan Singer Artist',
      description: 'Garo, better known by his stage name Singuila, is a French singer of Congolese and Central African origins',
    },
    {
      imgUrl: 'static/card-pictures/guest2.jpg',
      name: 'DIDI B',
      title: 'Afrcan Singer',
      description: 'Garo, better known by his stage name Singuila, is a French singer of Congolese and Central African origins',
    },
    {
      imgUrl: 'static/card-pictures/guest3.jpg',
      name: 'Baba',
      title: 'Afrcan Singer ',
      description: 'Garo, better known by his stage name Singuila, is a French singer of Congolese and Central African origins',
    },
    {
      imgUrl: 'static/card-pictures/guest4.jpg',
      name: 'DIDI B',
      title: 'Afrcan Singer ',
      description: 'Garo, better known by his stage name Singuila, is a French singer of Congolese and Central African origins',
    },
    {
      imgUrl: 'static/card-pictures/guest5.jpg',
      name: 'Singuila',
      title: 'Afrcan Singer ',
      description: 'Garo, better known by his stage name Singuila, is a French singer of Congolese and Central African origins',
    },
    {
      imgUrl: 'static/card-pictures/guest6.jpg',
      name: 'Safarel ',
      title: 'Afrcan Singer ',
      description: 'will take place on Tuesday March 12 in Abidjan',
    },
  ];
  
  let cardgenerator = '';
  
  cardlist.forEach((card) => {
    cardgenerator += `
      <!-- recent work card ${card.id + 1} -->
      <div class="spk-card">
                  <img class=photo-sticker src="static/card-pictures/photo-sticker.png">
                  <img class="spk-card-img" src="${card.imgUrl}">
                  <div class="spk-card-content">
                      <h4 class="spk-card-name">${card.name}</h4>
                      <h5 class="spk-card-title">${card.title}</h5>
                      <p class="spk-card-text">${card.description}</p>
                  </div>
              </div>
      `;
  });
  
  cards.innerHTML += cardgenerator;