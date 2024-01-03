class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="nav">
        <a href="index.html">Home</a>
        <a href="cv.html">CV</a>
        <a href="education.html">Education</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
      </nav>
    `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <header>Max Diaz</header> <br>
        <a href="mailto:meetmr.diaz@gmail.com" class="social-icon" target="_blank">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
        <a href="https://github.com/MeetMr-Diaz" target="_blank" class="social-icon">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/max-diaz-5190a338/" target="_blank" class="social-icon">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a><br>
      </footer>
    `;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
