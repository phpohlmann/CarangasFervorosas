
// Zoom
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX / zoomer.offsetWidth * 100
  y = offsetY / zoomer.offsetHeight * 100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';

}

// Header Global

class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo">
          <img src="images/carangas.png" alt="Carro com fogo nas rodas">
        </div>
        <nav>
        </div>
        <div class="sanduiche">
        <span class="barra"></span>
        <span class="barra"></span>
        <span class="barra"></span>
        </div>
          <ul class="osLinks">
            <li><a href="home.html">Início</a></li>
            <li><a href="catalogo.html">Catálogo</a></li>
            <li><a href="historia.html">História</a></li>
          </ul>
          <div class="social-icons">
            <a href="https://www.instagram.com/accounts/login/"><img src="images/instagram.png" alt="Ícone monocromático do Instagram"></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%2F"><img src="images/twitter.png" alt="Ícone monocromático do Twitter"></a>
            <a href="https://pt-br.facebook.com/login/device-based/regular/login/"><img src="images/facebook.png" alt="Ícone monocromático do Facebook"></a>
        </nav>
      </header>
`
  }
}
customElements.define('site-header', siteHeader)

// Footer global

class siteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="divFooter1">
      <p><img src="images/location.png" alt="location">ㅤRua Spaghetti, MJ, Brasil</p>
      <p><img src="images/phone.jpg" alt="telefone">ㅤ(12) 3456-7890</p>
      <p><img src="images/mail.png" alt="email">ㅤschrodinger@gmail.com</p>
    </div>
    <div class="divFooter2">
      <div class="sobre">
        <h4>Sobre Nós</h4>
        <p>Há mais de 4 dias vendendo <strong>Carangas</strong> com muito amor e carinho. Somos uma empresa supimpa e sagaz!</p>
      </div>
      <div class="socialMedias">
        <a href="https://www.instagram.com/accounts/login/"><img src="images/instagram.png" alt="Ícone monocromático do Instagram"></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%2F"><img src="images/twitter.png" alt="Ícone monocromático do Twitter"></a>
        <a href="https://pt-br.facebook.com/login/device-based/regular/login/"><img src="images/facebook.png" alt="Ícone monocromático do Facebook"></a>
      </div>
    </div>
</footer>
    `
  }
}
customElements.define('site-footer', siteFooter)

// Sanduiche

const sanduiche = document.querySelector(".sanduiche");
const osLinks = document.querySelector(".osLinks");

sanduiche.addEventListener("click", () => {
  sanduiche.classList.toggle("ativo");
  osLinks.classList.toggle("ativo");
})


// Carrossel 

const carrossel = document.querySelector(".carrossel");
const divs = document.querySelectorAll(".divCar");
let slideWidth = divs[0].clientWidth;

let idx = 0;

function moverCarrossel() {
  idx++;

  if (idx >= divs.length) {
    idx = 0;
  }

  carrossel.style.transform = `translateX(-${idx * slideWidth}px)`;
}

function atualizarSlideWidth() {
  slideWidth = divs[0].clientWidth;
  carrossel.style.transform = `translateX(-${idx * slideWidth}px)`;
}

window.addEventListener("resize", atualizarSlideWidth);
setInterval(moverCarrossel, 3000);