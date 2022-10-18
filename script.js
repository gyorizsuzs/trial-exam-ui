window.addEventListener('load', loadEvent);

const headerComponent = function (title) {
  return `
        <header>
        <div class="header-container">
            <h1>${title}</h1>
            <span class="material-icons" style="font-size: 36px; color: #145434">
                menu
            </span>
        </div>
        </header>
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
              <div class="text-container">
                <p class="title">${beerName}</p>
                <div class="inner-container">
                    <p class="sub">${beerCompany}</p>
                    <p class="text">${beerType}</p>
                </div>
              </div>
              <button>
                  <p class="button-text">details</p>
                  <span class="material-icons">
                  arrow_forward
                  </span>
              </button>
          </section>
      `;
};
