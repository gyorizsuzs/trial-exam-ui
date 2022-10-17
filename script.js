window.addEventListener('load', loadEvent);

const headerComponent = function (title) {
  return `
        <header>
            <h1>${title}</h1>
            <span class="material-icons" style="font-size: 36px; color: #145434">
                menu
            </span>
        </header>
        <hr/>
    `;
};

function loadEvent() {
  const rootElement = document.getElementById('root');

  const beerCards = beers.cards;

  rootElement.insertAdjacentHTML('beforebegin', headerComponent('Best Beers'));

  for (beer of beerCards) {
    rootElement.insertAdjacentHTML(
      'beforeend',
      beerCardComponent(beer.id, beer.title, beer.sub, beer.text)
    );
  }
}

const beerCardComponent = function (beerId, beerName, beerCompany, beerType) {
  return `
          <section class="card">
              <span class="number">${beerId}</span>
              <div class="inner-card">
                  <p class="title">${beerName}y</p>
                  <hr />
                  <p class="sub">${beerCompany}</p>
                  <p class="text">${beerType}</p>
              </div>
              <button>
                  <p class="button-text">details</p>
                  <span class="material-icons" style="font-size: 36px; color: #145434">
                  arrow_forward
                  </span>
              </button>
          </section>
      `;
};
