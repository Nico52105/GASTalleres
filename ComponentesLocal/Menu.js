// Nota: los atributos deben estar en minúsculas para que sean detectados por el navegador.
let EtiquetaMenuComponent = 'menu-component';
class MenuComponent extends HTMLElement {
    Paginas;

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ["paginas"]
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case "paginas":
                this.Paginas = newVal;
                break;
        }
        // Re-renderizar si el componente ya está en el DOM
        if (this.shadowRoot && this.shadowRoot.hasChildNodes()) {
            this.shadowRoot.innerHTML = '';
            this.render();
        }
    }

    getTemplate() {
        const template = document.createElement('template');
        // Los estilos deben estar dentro del template para afectar al Shadow DOM
        template.innerHTML = `
                <style class="estilos-menu">                    
                </style>
                <div class="menu">                    
                </div>
            `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.shadowRoot.querySelector('.estilos-menu').textContent = this.generarEstilos();
        this.shadowRoot.querySelector('.menu').innerHTML = this.generarMenu();
    }

    connectedCallback() {
        this.render();
    }

    generarMenu() {
        let paginasArray = [];
        try { paginasArray = this.Paginas ? JSON.parse(this.Paginas) : []; } catch (e) { }
        return `<ul class="nav-links">
                    ${paginasArray.map(({ titulo, pagina }) => `<li><button onclick="ObtenerPagina('${pagina}')">${titulo}</button></li>`).join('')}
                </ul>`;
    }

    generarEstilos() {
        return `
            .nav-links {
                display: flex;
                gap: 4px;
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .nav-links button {
                background: none;
                border: none;
                cursor: pointer;
                color: #555;
                font-size: 0.9rem;
                font-weight: 500;
                padding: 6px 14px;
                border-radius: 6px;
                letter-spacing: 0.02em;
                transition: color 0.2s, background 0.2s;
            }

            .nav-links button:hover {
                color: #111;
                background: #f0f0f0;
            }

            .nav-links button:focus-visible {
                outline: 2px solid #aaa;
                outline-offset: 2px;
            }
        `;
    }
}
customElements.define(EtiquetaMenuComponent, MenuComponent);