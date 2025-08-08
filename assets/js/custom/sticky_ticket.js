// Datos de las opciones de tickets
const ticketData = [

    {
        id: 1,
        name: "Early Bird",
        description: "Acceso general",
        price: 25000,
        available: true
    },
    {
        id: 2,
        name: "General",
        description: "Acceso general",
        price: 35000,
        available: true
    },
    {
        id: 3,
        name: "VIP",
        description: "Acceso preferencial + drink",
        price: 55000,
        available: true
    },
    {
        id: 4,
        name: "Platinum",
        description: "Acceso VIP + zona exclusiva + 2 drinks",
        price: 75000,
        available: true
    }
]

// Estado de la aplicación
let state = {

    selectedTicket: ticketData[0], // Por defecto, seleccionamos el primer ticket
    quantity: 1,
    serviceFeePercent: 0.12, // 12% de cargo por servicio
    minTicketPrice: Math.min(...ticketData.filter(t => t.available).map(t => t.price))

};

// Elementos del DOM
const ticketOptionsContainer = document.getElementById('ticket-options');
const quantityDisplay = document.getElementById('quantity-display');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const totalSection = document.getElementById('total-section');
const buyNowBtn = document.getElementById('buy-now-btn');


// Formatear precio
function formatPrice(price) {
    return '$' + price.toLocaleString('es-CL');
}

// Renderizar opciones de tickets
function renderTicketOptions() {

    // Limpiar contenedor
    while (ticketOptionsContainer.children.length > 1) {
        ticketOptionsContainer.removeChild(ticketOptionsContainer.lastChild);
    }


    // Renderizar cada opción
    ticketData.forEach(ticket => {
        const ticketOption = document.createElement('div');
        ticketOption.className = `ticket-option${ticket.id === state.selectedTicket.id ? ' selected' : ''}${!ticket.available ? ' disabled' : ''}`;

        if (ticket.available) {
            ticketOption.addEventListener('click', () => selectTicket(ticket));
        }

        ticketOption.innerHTML = `
                    <div class="option-info">
                        <div class="option-name">${ticket.name}</div>
                        <div class="option-description">${ticket.description}</div>
                    </div>
                    <div class="option-price">${formatPrice(ticket.price)}</div>
                `;

        ticketOptionsContainer.appendChild(ticketOption);
    });
}

// Actualizar totales
function updateTotals() {
    const subtotal = state.selectedTicket.price * state.quantity;
    const serviceFee = Math.round(subtotal * state.serviceFeePercent);
    const total = subtotal + serviceFee;

    totalSection.innerHTML = `
                <div class="total-row">
                    <span>${state.selectedTicket.name} × ${state.quantity}</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="total-row">
                    <span>Cargos por servicio</span>
                    <span>${formatPrice(serviceFee)}</span>
                </div>
                <div class="total-final">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                </div>
            `;
}

// Seleccionar ticket
function selectTicket(ticket) {
    if (!ticket.available) return;

    state.selectedTicket = ticket;
    renderTicketOptions();
    updateTotals();
}

// Incrementar cantidad
function increaseQuantity() {
    if (state.quantity < 10) { // Máximo 10 tickets
        state.quantity++;
        quantityDisplay.textContent = state.quantity;
        updateTotals();
    }
}

// Decrementar cantidad
function decreaseQuantity() {
    if (state.quantity > 1) {
        state.quantity--;
        quantityDisplay.textContent = state.quantity;
        updateTotals();
    }
}

// Event listeners
decreaseBtn.addEventListener('click', decreaseQuantity);
increaseBtn.addEventListener('click', increaseQuantity);
buyNowBtn.addEventListener('click', () => {
    alert(`Compra realizada: ${state.quantity} tickets ${state.selectedTicket.name} para Warehouse Sessions`);
});

// Inicializar la aplicación
function init() {
    renderTicketOptions();
    updateTotals();
}

// Ejecutar la inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);