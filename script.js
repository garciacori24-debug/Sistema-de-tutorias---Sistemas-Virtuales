// Manejo de Navegación por Pestañas g
function switchTab(tabName) {
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    
    // Asignar clase activa a la pestaña seleccionada
    event.currentTarget.classList.add('active');
    
    openModal(
        'Navegación', 
        `Has cambiado a la sección de: ${tabName.toUpperCase()}`
    );
}

// Ventanas Modales
function openModal(title, content) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalContent').innerText = content;
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Simulación de Inicio de Sesión
function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('matricula').value;
    
    const loginCard = document.getElementById('loginCard');
    loginCard.innerHTML = `
        <div class="card-header">
            <i class="fa-solid fa-circle-user"></i> Usuario Activo
        </div>
        <div class="card-body" style="text-align: center;">
            <i class="fa-solid fa-user-check" style="font-size: 3rem; color: #003399; margin-bottom: 10px;"></i>
            <h3>¡Bienvenido!</h3>
            <p style="margin-top: 5px; color: #555;">Matrícula: <strong>${user}</strong></p>
            <p style="font-size: 0.85rem; color: #777; margin-top: 5px;">Materia: Sistemas Virtuales</p>
            <button class="btn-orange" style="margin-top: 15px; width: 100%;" onclick="location.reload()">
                Cerrar Sesión
            </button>
        </div>
    `;
    openModal('Acceso Correcto', `Bienvenido al Sistema de Tutorías, estudiante ${user}.`);
}

// Renderizado del Calendario
function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    
    // Días representativos para el mes en curso
    const eventDays = [5, 12, 19, 26];

    for (let i = 1; i <= 30; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerText = i;

        if (eventDays.includes(i)) {
            dayDiv.classList.add('has-event');
            dayDiv.onclick = () => openModal(
                `Tutoría el Día ${i}`, 
                `Sesión programada de Sistemas Virtuales: Asesoría de prácticas a las 11:00 AM.`
            );
        } else {
            dayDiv.onclick = () => openModal(
                `Día ${i}`, 
                `No hay tutorías agendadas para el día ${i}.`
            );
        }

        grid.appendChild(dayDiv);
    }
}

// Cambio de Mes en el Calendario
function changeMonth(direction) {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const monthSpan = document.getElementById('calendarMonth');
    let currentMonth = monthSpan.innerText.split(' ')[0];
    let currentIndex = months.indexOf(currentMonth);

    if (currentIndex !== -1) {
        let newIndex = (currentIndex + direction + 12) % 12;
        monthSpan.innerText = `${months[newIndex]} 2026`;
        renderCalendar();
    }
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
});