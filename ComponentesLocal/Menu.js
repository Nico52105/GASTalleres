
// Nota: los atributos deben estar en minúsculas para que sean detectados por el navegador.
let Etiqueta = 'my-webcomponent-attributes-callback';
class MyWebcomponentAttributesCallBack extends HTMLElement {
    NombreNodo;
    MensajesValidos;
    Respuestas;

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ["nombre-nodo", "mensajes-validos", "respuestas"]
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case "nombre-nodo":
                this.NombreNodo = newVal;
                break;
            case "mensajes-validos":
                this.MensajesValidos = newVal;
                break;
            case "respuestas":
                this.Respuestas = newVal;
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
                <style>
                    .tarjeta {
                        color: black;
                        border: 10px solid yellowgreen;
                        padding: 10px;
                    }
                    .tarjeta > div:first-of-type {
                        color: SeaGreen;
                        font-weight: bold;
                        font-size: 25px;
                        text-align: center;
                    }
                    .tarjeta > div:nth-of-type(3) {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .tarjeta > div > img {
                        background-color: black;
                        padding: 10px;
                        width: 50%;
                    }
                </style>
                <div class="tarjeta">
                    <div class="titulo"></div>
                    <div class="mensajes"></div>
                    <div class="respuestas"></div>
                </div>
            `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        // Usar textContent en lugar de innerHTML para evitar XSS
        this.shadowRoot.querySelector('.titulo').textContent = this.NombreNodo ?? '';
        this.shadowRoot.querySelector('.mensajes').textContent = this.MensajesValidos ?? '';
        this.shadowRoot.querySelector('.respuestas').textContent = this.Respuestas ?? '';
    }

    connectedCallback() {
        this.render();
    }
}
customElements.define(Etiqueta, MyWebcomponentAttributesCallBack);
