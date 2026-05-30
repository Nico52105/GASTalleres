
// Nota: los atributos deben estar en minúsculas para que sean detectados por el navegador.
let EtiquetaBuscadorComponent = 'buscador-component';
class BuscadorComponent extends HTMLElement {
    Placeholder;
    SetBusqueda;

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ["placeholder", "setbusqueda"]
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case "placeholder":
                this.Placeholder = newVal;
                break;
            case "setbusqueda":
                this.SetBusqueda = newVal;
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
                <style class="estilos-buscador">                    
                </style>
                <div class="buscador">                    
                </div>
            `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.shadowRoot.querySelector('.estilos-buscador').textContent = this.generarEstilos();
        this.shadowRoot.querySelector('.buscador').innerHTML = this.generarMenu();
    }

    connectedCallback() {
        this.render();
    }

    generarMenu() {
        let paginasArray = [];
        try { paginasArray = this.Paginas ? JSON.parse(this.Paginas) : []; } catch (e) { }
        return `
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="${this.Placeholder || 'Buscar...'}"
                autocomplete="off">
            <button class="search-btn" onclick="${this.SetBusqueda || ''}">&#128269;</button>
        </div>`;
    }

    generarEstilos() {
        return `
            .search-bar {
                display: flex;
                align-items: center;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                background: #fff;
                transition: border-color 0.2s;
            }

            .search-bar:focus-within {
                border-color: #999;
            }

            .search-bar input {
                flex: 1;
                border: none;
                background: transparent;
                padding: 8px 12px;
                font-size: 0.9rem;
                font-family: inherit;
                color: #333;
                outline: none;
            }

            .search-bar input::placeholder {
                color: #aaa;
            }

            .search-btn {
                background: none;
                border: none;
                border-left: 1px solid #ddd;
                padding: 8px 12px;
                color: #555;
                font-size: 1rem;
                cursor: pointer;
                transition: color 0.2s, background 0.2s;
            }

            .search-btn:hover {
                color: #111;
                background: #f5f5f5;
            }
        `;
    }
}
customElements.define(EtiquetaBuscadorComponent, BuscadorComponent);
