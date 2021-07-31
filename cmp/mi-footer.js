class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Saúl Gómez Reyes. IC-41M
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
