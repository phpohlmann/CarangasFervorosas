class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo">
          <img src="images/carangas.png" alt="Logo">
        </div>
        <nav>
          <ul>
            <li><a href="home.html">Início</a></li>
            <li><a href="catalogo.html">Catálogo</a></li>
            <li><a href="historia.html">História</a></li>
          </ul>
          <div class="social-icons">
            <a href="https://www.instagram.com/accounts/login/"><img src="images/instagram.png" alt="Rede Social 1"></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%2F"><img src="images/twitter.png" alt="Rede Social 2"></a>
            <a href="https://pt-br.facebook.com/login/device-based/regular/login/"><img src="images/facebook.png" alt="Rede Social 3"></a>
          </div>
        </nav>
      </header>
`
  }
}
customElements.define('site-header', siteHeader)

class siteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="divFooter1">
      <p><img src="images/location.png" alt="location">Rua Spaghetti, MJ, Brasil</p>
      <p><img src="images/phone.jpg" alt="telefone">(12) 3456-7890</p>
      <p><img src="images/mail.png" alt="email">schrodinger@gmail.com</p>
    </div>
    <div class="divFooter2">
      <div class="sobre">
        <h4>Sobre Nós</h4>
        <p>Há 4 dias vendendo <strong>Carangas</strong> com muito amor e carinho. Somos uma empresa supimpa e sagaz!</p>
      </div>
      <div class="socialMedias">
        <a href="https://www.instagram.com/accounts/login/"><img src="images/instagram.png" alt="instagram"></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%2F"><img src="images/twitter.png" alt="twitter"></a>
        <a href="https://pt-br.facebook.com/login/device-based/regular/login/"><img src="images/facebook.png" alt="facebook"></a>
      </div>
    </div>
</footer>
    `
  }
}
customElements.define('site-footer', siteFooter)

function createScrollSnapEffect(sectionsSelector) {
  const sections = document.querySelectorAll(sectionsSelector);
  let currentSectionIndex = 0;

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) {
      return;
    }

    const targetSection = sections[index];
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
    currentSectionIndex = index;
  }

  window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      scrollToSection(currentSectionIndex + 1);
    } else {
      scrollToSection(currentSectionIndex - 1);
    }
  });
}

createScrollSnapEffect('.imageContainer1, .imageContainer2, .imageContainer3');
createScrollSnapEffect('.scaniaAzul')

