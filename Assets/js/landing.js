/* ===================================================
   Casa Chevrolet & Mazda - Tienda Virtual JS
   Carrito, filtros, busqueda, modales, toasts
   =================================================== */

/* -- Catalogo de productos -- */
var PRODUCTOS = [
  // FRENOS
  { id: 1,  marca: "chevrolet", categoria: "frenos", tipo: "original",    ref: "CHV-FR-001", nombre: "Pastillas de freno delanteras Aveo",          compat: "Chevrolet Aveo 2007�2020",            precio: 85000,  precioOld: 98000,  icon: "??", modelos: ["aveo"] },
  { id: 2,  marca: "chevrolet", categoria: "frenos", tipo: "alternativo", ref: "CHV-FR-002", nombre: "Discos de freno Spark GT",                     compat: "Chevrolet Spark GT 2010�2023",         precio: 120000, precioOld: null,   icon: "??", modelos: ["spark"] },
  { id: 3,  marca: "chevrolet", categoria: "frenos", tipo: "original",    ref: "CHV-FR-003", nombre: "Kit de frenos traseros Sail",                  compat: "Chevrolet Sail 2012�2022",            precio: 145000, precioOld: 165000, icon: "??", modelos: ["sail"] },
  { id: 4,  marca: "mazda",     categoria: "frenos", tipo: "original",    ref: "MZD-FR-001", nombre: "Pastillas de freno delanteras Mazda 3",        compat: "Mazda 3 2014�2023",                   precio: 98000,  precioOld: null,   icon: "??", modelos: ["mazda3"] },
  { id: 5,  marca: "mazda",     categoria: "frenos", tipo: "alternativo", ref: "MZD-FR-002", nombre: "Discos de freno CX-5",                         compat: "Mazda CX-5 2013�2023",               precio: 185000, precioOld: 210000, icon: "??", modelos: ["cx5"] },
  // FILTROS
  { id: 6,  marca: "chevrolet", categoria: "filtros", tipo: "original",    ref: "CHV-FI-001", nombre: "Filtro de aceite Aveo / Sail",                compat: "Chevrolet Aveo, Sail 1.4 / 1.6",     precio: 28000,  precioOld: null,   icon: "???", modelos: ["aveo","sail"] },
  { id: 7,  marca: "chevrolet", categoria: "filtros", tipo: "alternativo", ref: "CHV-FI-002", nombre: "Filtro de aire Spark GT",                    compat: "Chevrolet Spark GT 2010�2023",        precio: 32000,  precioOld: 38000,  icon: "???", modelos: ["spark"] },
  { id: 8,  marca: "chevrolet", categoria: "filtros", tipo: "original",    ref: "CHV-FI-003", nombre: "Filtro de cabina Cruze",                     compat: "Chevrolet Cruze 2009�2020",           precio: 45000,  precioOld: null,   icon: "???", modelos: ["cruze"] },
  { id: 9,  marca: "mazda",     categoria: "filtros", tipo: "original",    ref: "MZD-FI-001", nombre: "Filtro de aceite Mazda 3 / CX-30",           compat: "Mazda 3, CX-30 2.0 Skyactiv",        precio: 35000,  precioOld: null,   icon: "???", modelos: ["mazda3","cx30"] },
  { id: 10, marca: "mazda",     categoria: "filtros", tipo: "alternativo", ref: "MZD-FI-002", nombre: "Filtro de aire CX-5",                        compat: "Mazda CX-5 2013�2023",               precio: 42000,  precioOld: 50000,  icon: "???", modelos: ["cx5"] },
  // SUSPENSION
  { id: 11, marca: "chevrolet", categoria: "suspension", tipo: "alternativo", ref: "CHV-SU-001", nombre: "Amortiguador delantero Aveo",              compat: "Chevrolet Aveo 2007�2020",           precio: 185000, precioOld: 210000, icon: "??", modelos: ["aveo"] },
  { id: 12, marca: "chevrolet", categoria: "suspension", tipo: "original",    ref: "CHV-SU-002", nombre: "Kit de bujes delantera Tracker",           compat: "Chevrolet Tracker 2013�2023",        precio: 95000,  precioOld: null,   icon: "??", modelos: ["tracker"] },
  { id: 13, marca: "mazda",     categoria: "suspension", tipo: "original",    ref: "MZD-SU-001", nombre: "Terminal de direcci�n Mazda 3",            compat: "Mazda 3 2009�2023",                  precio: 75000,  precioOld: 88000,  icon: "??", modelos: ["mazda3"] },
  { id: 14, marca: "mazda",     categoria: "suspension", tipo: "alternativo", ref: "MZD-SU-002", nombre: "R�tulas delanteras CX-5",                 compat: "Mazda CX-5 2013�2023",              precio: 110000, precioOld: null,   icon: "??", modelos: ["cx5"] },
  // MOTOR
  { id: 15, marca: "chevrolet", categoria: "motor", tipo: "original",    ref: "CHV-MO-001", nombre: "Correa de distribuci�n Aveo 1.6",               compat: "Chevrolet Aveo 1.6 DOHC",            precio: 68000,  precioOld: 80000,  icon: "??", modelos: ["aveo"] },
  { id: 16, marca: "chevrolet", categoria: "motor", tipo: "alternativo", ref: "CHV-MO-002", nombre: "Bomba de agua Sail 1.4",                        compat: "Chevrolet Sail 1.4 / 1.6",           precio: 125000, precioOld: null,   icon: "??", modelos: ["sail"] },
  { id: 17, marca: "mazda",     categoria: "motor", tipo: "original",    ref: "MZD-MO-001", nombre: "Tensor de correa Mazda 3 Skyactiv",             compat: "Mazda 3 2.0 Skyactiv 2013�2023",     precio: 145000, precioOld: 165000, icon: "??", modelos: ["mazda3"] },
  { id: 18, marca: "mazda",     categoria: "motor", tipo: "original",    ref: "MZD-MO-002", nombre: "Bomba de agua CX-30",                           compat: "Mazda CX-30 2020�2023",              precio: 195000, precioOld: null,   icon: "??", modelos: ["cx30"] },
  // ELECTRICO
  { id: 19, marca: "chevrolet", categoria: "electrico", tipo: "original",    ref: "CHV-EL-001", nombre: "Buj�as Iridium Cruze 1.4T",                compat: "Chevrolet Cruze 1.4 Turbo",          precio: 48000,  precioOld: 55000,  icon: "?", modelos: ["cruze"] },
  { id: 20, marca: "chevrolet", categoria: "electrico", tipo: "alternativo", ref: "CHV-EL-002", nombre: "Sensor MAP Aveo 1.6",                      compat: "Chevrolet Aveo 1.6 DOHC",            precio: 75000,  precioOld: null,   icon: "?", modelos: ["aveo"] },
  { id: 21, marca: "mazda",     categoria: "electrico", tipo: "original",    ref: "MZD-EL-001", nombre: "Sensor O2 Mazda 3 2.0",                    compat: "Mazda 3 2.0 2013�2023",              precio: 185000, precioOld: 210000, icon: "?", modelos: ["mazda3"] },
  { id: 22, marca: "mazda",     categoria: "electrico", tipo: "alternativo", ref: "MZD-EL-002", nombre: "Bobina de encendido CX-5",                 compat: "Mazda CX-5 2013�2023",              precio: 95000,  precioOld: null,   icon: "?", modelos: ["cx5"] },
  // ACCESORIOS
  { id: 23, marca: "chevrolet", categoria: "accesorios", tipo: "alternativo", ref: "CHV-AC-001", nombre: "Tapetes de caucho Spark GT",               compat: "Chevrolet Spark GT 2010�2023",       precio: 65000,  precioOld: 78000,  icon: "?", modelos: ["spark"] },
  { id: 24, marca: "chevrolet", categoria: "accesorios", tipo: "alternativo", ref: "CHV-AC-002", nombre: "Escobillas limpiaparabrisas Tracker",      compat: "Chevrolet Tracker 2013�2023",        precio: 38000,  precioOld: null,   icon: "?", modelos: ["tracker"] },
  { id: 25, marca: "mazda",     categoria: "accesorios", tipo: "alternativo", ref: "MZD-AC-001", nombre: "Tapetes premium Mazda 3",                  compat: "Mazda 3 2014�2023",                  precio: 85000,  precioOld: 98000,  icon: "?", modelos: ["mazda3"] },
  { id: 26, marca: "mazda",     categoria: "accesorios", tipo: "alternativo", ref: "MZD-AC-002", nombre: "Cubrevolante de cuero CX-5",               compat: "Mazda CX-5 Universal",               precio: 55000,  precioOld: null,   icon: "?", modelos: ["cx5","cx30","bt50"] }
];

/* -- Estado de la aplicacion -- */
var carrito = [];
var categoriaActiva = "todos";
var productosFiltrados = PRODUCTOS.slice();
var toastTimer = null;

/* -- INICIAR -- */
document.addEventListener("DOMContentLoaded", function () {
  initReveal();
  renderProductos(productosFiltrados);
  initCategorias();
});

/* -- REVEAL ANIMATION -- */
function initReveal() {
  var elementos = document.querySelectorAll(".reveal");
  if (!elementos.length || !("IntersectionObserver" in window)) {
    elementos.forEach(function(el) { el.classList.add("visible"); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elementos.forEach(function(el) { obs.observe(el); });
}

/* -- RENDERIZAR PRODUCTOS -- */
function renderProductos(lista) {
  var grid = document.getElementById("productsGrid");
  var noResults = document.getElementById("noResults");
  var count = document.getElementById("productsCount");

  if (!grid) return;

  count.textContent = lista.length === PRODUCTOS.length
    ? "Mostrando todos los productos (" + lista.length + ")"
    : "Mostrando " + lista.length + " de " + PRODUCTOS.length + " productos";

  if (lista.length === 0) {
    grid.innerHTML = "";
    noResults.removeAttribute("hidden");
    return;
  }
  noResults.setAttribute("hidden", "");

  grid.innerHTML = lista.map(function(p) {
    var badgeClass = p.marca === "chevrolet" ? "chev" : "mazda";
    var badgeLabel = p.marca === "chevrolet" ? "Chevrolet" : "Mazda";
    var tipoTag = p.tipo === "original"
      ? '<span class="pc-tag-orig">Original</span>'
      : '<span class="pc-tag-alt">Alternativo</span>';
    var precioOldHtml = p.precioOld
      ? '<span class="pc-price-old">' + formatPrecio(p.precioOld) + '</span>'
      : '';
    var addClass = p.marca === "mazda" ? "mazda-add" : "";
    var cardClass = p.marca === "mazda" ? "mazda-card" : "";
    return [
      '<article class="product-card ' + cardClass + '">',
        '<div class="pc-image">',
          p.icon,
          '<span class="pc-badge ' + badgeClass + '">' + badgeLabel + '</span>',
          tipoTag,
        '</div>',
        '<div class="pc-body">',
          '<div class="pc-ref">' + p.ref + '</div>',
          '<div class="pc-name">' + p.nombre + '</div>',
          '<div class="pc-compat">' + p.compat + '</div>',
          '<div class="pc-footer">',
            '<div>',
              precioOldHtml,
              '<span class="pc-price">' + formatPrecio(p.precio) + '</span>',
            '</div>',
            '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">',
              '<button class="pc-add ' + addClass + '" onclick="agregarAlCarrito(' + p.id + ')">+ Carrito</button>',
              '<button class="pc-detail" onclick="verDetalle(' + p.id + ')">Ver detalle</button>',
            '</div>',
          '</div>',
        '</div>',
      '</article>'
    ].join('');
  }).join('');
}

/* -- CATEGORIAS -- */
function initCategorias() {
  var btns = document.querySelectorAll(".cat-card");
  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      btns.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      categoriaActiva = btn.dataset.cat;
      aplicarFiltros();
    });
  });
}

/* -- FILTROS -- */
function aplicarFiltros() {
  var marcasChecked = Array.from(document.querySelectorAll("input[name='marca']:checked")).map(function(i) { return i.value; });
  var tiposChecked  = Array.from(document.querySelectorAll("input[name='tipo']:checked")).map(function(i) { return i.value; });
  var modelosChecked = Array.from(document.querySelectorAll("input[name='modelo']:checked")).map(function(i) { return i.value; });
  var precioVal = document.querySelector("input[name='precio']:checked");
  var precioFiltro = precioVal ? precioVal.value : "todos";
  var termino = document.getElementById("searchInput") ? document.getElementById("searchInput").value.trim().toLowerCase() : "";

  productosFiltrados = PRODUCTOS.filter(function(p) {
    if (categoriaActiva !== "todos" && p.categoria !== categoriaActiva) return false;
    if (marcasChecked.length && marcasChecked.indexOf(p.marca) === -1) return false;
    if (tiposChecked.length && tiposChecked.indexOf(p.tipo) === -1) return false;
    if (modelosChecked.length) {
      var coincide = p.modelos.some(function(m) { return modelosChecked.indexOf(m) !== -1; });
      if (!coincide) return false;
    }
    if (precioFiltro === "bajo"  && p.precio >= 50000) return false;
    if (precioFiltro === "medio" && (p.precio < 50000 || p.precio > 150000)) return false;
    if (precioFiltro === "alto"  && p.precio <= 150000) return false;
    if (termino) {
      var haystack = (p.nombre + " " + p.ref + " " + p.compat + " " + p.marca).toLowerCase();
      if (haystack.indexOf(termino) === -1) return false;
    }
    return true;
  });

  ordenarProductos();
}

function resetFiltros() {
  document.querySelectorAll("input[name='marca']").forEach(function(i) { i.checked = true; });
  document.querySelectorAll("input[name='tipo']").forEach(function(i) { i.checked = true; });
  document.querySelectorAll("input[name='modelo']").forEach(function(i) { i.checked = true; });
  var primero = document.querySelector("input[name='precio']");
  if (primero) primero.checked = true;
  if (document.getElementById("searchInput")) document.getElementById("searchInput").value = "";
  document.querySelectorAll(".cat-card").forEach(function(b) { b.classList.remove("active"); });
  var todoBtn = document.querySelector(".cat-card[data-cat='todos']");
  if (todoBtn) todoBtn.classList.add("active");
  categoriaActiva = "todos";
  productosFiltrados = PRODUCTOS.slice();
  renderProductos(productosFiltrados);
}

/* -- ORDEN -- */
function ordenarProductos() {
  var sel = document.getElementById("sortSelect");
  var val = sel ? sel.value : "default";
  var lista = productosFiltrados.slice();
  if (val === "precio-asc")  lista.sort(function(a,b){ return a.precio - b.precio; });
  if (val === "precio-desc") lista.sort(function(a,b){ return b.precio - a.precio; });
  if (val === "nombre")      lista.sort(function(a,b){ return a.nombre.localeCompare(b.nombre); });
  renderProductos(lista);
}

/* -- BUSCAR -- */
function buscar() {
  aplicarFiltros();
  var tienda = document.getElementById("tienda");
  if (tienda) tienda.scrollIntoView({ behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function() {
  var inp = document.getElementById("searchInput");
  if (inp) {
    inp.addEventListener("keydown", function(e) {
      if (e.key === "Enter") buscar();
    });
  }
});

/* -- CARRITO -- */
function toggleCarrito() {
  var panel   = document.getElementById("cartPanel");
  var overlay = document.getElementById("cartOverlay");
  panel.classList.toggle("open");
  overlay.classList.toggle("open");
}

function agregarAlCarrito(id) {
  var prod = PRODUCTOS.find(function(p) { return p.id === id; });
  if (!prod) return;
  var item = carrito.find(function(c) { return c.id === id; });
  if (item) {
    item.qty++;
  } else {
    carrito.push({ id: prod.id, nombre: prod.nombre, ref: prod.ref, precio: prod.precio, icon: prod.icon, qty: 1 });
  }
  actualizarCarritoUI();
  mostrarToast("? " + prod.nombre + " agregado al carrito");
  animarBadge();
}

function cambiarCantidad(id, delta) {
  var item = carrito.find(function(c) { return c.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    carrito = carrito.filter(function(c) { return c.id !== id; });
  }
  actualizarCarritoUI();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(function(c) { return c.id !== id; });
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  var badge  = document.getElementById("cartBadge");
  var items  = document.getElementById("cartItems");
  var footer = document.getElementById("cartFooter");
  var total  = document.getElementById("cartTotal");

  var totalQty = carrito.reduce(function(s, c) { return s + c.qty; }, 0);
  var totalVal = carrito.reduce(function(s, c) { return s + c.precio * c.qty; }, 0);

  badge.textContent = totalQty;

  if (carrito.length === 0) {
    items.innerHTML = '<div class="cart-empty">Tu carrito est� vac�o</div>';
    footer.hidden = true;
    return;
  }

  footer.hidden = false;
  total.textContent = formatPrecio(totalVal);

  items.innerHTML = carrito.map(function(c) {
    return [
      '<div class="cart-item">',
        '<div class="ci-icon">' + c.icon + '</div>',
        '<div class="ci-info">',
          '<div class="ci-name">' + c.nombre + '</div>',
          '<div class="ci-ref">' + c.ref + '</div>',
          '<div class="ci-bottom">',
            '<span class="ci-price">' + formatPrecio(c.precio * c.qty) + '</span>',
            '<div class="ci-qty">',
              '<button onclick="cambiarCantidad(' + c.id + ', -1)">-</button>',
              '<span>' + c.qty + '</span>',
              '<button onclick="cambiarCantidad(' + c.id + ', 1)">+</button>',
              '<button class="ci-remove" onclick="eliminarDelCarrito(' + c.id + ')">??</button>',
            '</div>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
  }).join('');
}

function animarBadge() {
  var badge = document.getElementById("cartBadge");
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
  setTimeout(function() { badge.classList.remove("bump"); }, 300);
}

function pedirPorWhatsapp() {
  if (carrito.length === 0) return;
  var lineas = carrito.map(function(c) {
    return c.qty + "x " + c.nombre + " (" + c.ref + ") � " + formatPrecio(c.precio * c.qty);
  });
  var total = carrito.reduce(function(s, c) { return s + c.precio * c.qty; }, 0);
  lineas.push("TOTAL: " + formatPrecio(total));
  var texto = "Hola, quiero pedir los siguientes repuestos:\n" + lineas.join("\n");
  var url = "https://wa.me/573001234567?text=" + encodeURIComponent(texto);
  window.open(url, "_blank", "noopener,noreferrer");
}

/* -- MODAL DETALLE -- */
function verDetalle(id) {
  var prod = PRODUCTOS.find(function(p) { return p.id === id; });
  if (!prod) return;
  var modal   = document.getElementById("productModal");
  var overlay = document.getElementById("modalOverlay");
  var body    = document.getElementById("modalBody");
  var badgeColor = prod.marca === "chevrolet" ? "#8a6200" : "#C40B20";
  var tipoLabel = prod.tipo === "original" ? "? Pieza original" : "?? Pieza alternativa";
  body.innerHTML = [
    '<div class="modal-product-icon">' + prod.icon + '</div>',
    '<div class="modal-product-ref" style="color:' + badgeColor + '">' + prod.ref + ' &nbsp;|&nbsp; ' + tipoLabel + '</div>',
    '<div class="modal-product-name">' + prod.nombre + '</div>',
    '<div class="modal-product-desc">Repuesto de alta calidad para ' + (prod.marca === "chevrolet" ? "Chevrolet" : "Mazda") + '. Disponible en stock. Consulta disponibilidad y tiempos de entrega.</div>',
    '<div class="modal-product-compat"><strong>Compatibilidad:</strong> ' + prod.compat + '</div>',
    (prod.precioOld ? '<div style="font-size:0.9rem;color:var(--muted);text-decoration:line-through;margin-bottom:4px">' + formatPrecio(prod.precioOld) + '</div>' : ''),
    '<div class="modal-product-price">' + formatPrecio(prod.precio) + '</div>',
    '<div class="btn-row" style="gap:10px">',
      '<button class="btn primary" onclick="agregarAlCarrito(' + prod.id + ');cerrarModal()">?? Agregar al carrito</button>',
      '<a class="btn ghost" href="https://wa.me/573001234567?text=' + encodeURIComponent("Hola, necesito cotizar: " + prod.nombre + " (" + prod.ref + ")") + '" target="_blank" rel="noopener noreferrer">?? Cotizar por WhatsApp</a>',
    '</div>'
  ].join('');
  modal.classList.add("open");
  overlay.classList.add("open");
}

function cerrarModal() {
  document.getElementById("productModal").classList.remove("open");
  document.getElementById("modalOverlay").classList.remove("open");
}

/* -- TOAST -- */
function mostrarToast(msg) {
  var toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function() {
    toast.classList.remove("show");
  }, 2800);
}

/* -- UTILS -- */
function formatPrecio(n) {
  return "$" + n.toLocaleString("es-CO");
}
