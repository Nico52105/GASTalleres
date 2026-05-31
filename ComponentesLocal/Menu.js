// Nota: los atributos deben estar en minúsculas para que sean detectados por el navegador.
let EtiquetaMenuComponent = 'menu-component';
class MenuComponent extends HTMLElement {

    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        let datos = JSON.parse(this.textContent || '{}');
        let titulo = datos.titulo ?
            `<a class="navbar-brand" href="#">${datos.titulo}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>`: '';
        let opciones = datos.opciones && datos.opciones.length > 0 ?
            datos.opciones.map(
                (opcion) => {
                    return `<li class="nav-item"><a class="nav-link" href="#" onclick="ObtenerPagina('${opcion.pagina}')">${opcion.titulo}</a></li>`;
                }).join('') : '';
        template.innerHTML = `                
                <div class="menu">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            ${titulo}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    ${opciones}
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            `;
        return template;
    }

    render() {
        const template = this.getTemplate(); // lee textContent antes de limpiar
        this.innerHTML = '';
        this.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

}
customElements.define(EtiquetaMenuComponent, MenuComponent);