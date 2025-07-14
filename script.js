// URLs de las APIs que vamos a consumir
const API_URLS = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    quotes: 'https://api.quotable.io/random'
};

// Elementos del DOM
const loadUsersBtn = document.getElementById('loadUsers');
const loadRandomDataBtn = document.getElementById('loadRandomData');
const usersList = document.getElementById('usersList');
const randomData = document.getElementById('randomData');
const loading = document.getElementById('loading');

// Función para mostrar/ocultar loading
function toggleLoading(show) {
    if (show) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

// Función para manejar errores de API
function handleError(error, container) {
    console.error('Error:', error);
    container.innerHTML = `
        <div style="color: #dc3545; padding: 20px; border: 1px solid #dc3545; border-radius: 8px; background: #f8d7da;">
            <h3>❌ Error al cargar los datos</h3>
            <p>No se pudieron obtener los datos de la API. Por favor, inténtalo de nuevo.</p>
            <small>Error: ${error.message}</small>
        </div>
    `;
}

// Función para cargar usuarios
async function loadUsers() {
    toggleLoading(true);
    usersList.innerHTML = '';
    
    try {
        const response = await fetch(API_URLS.users);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        // Crear cards para cada usuario
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Username:</strong> @${user.username}</p>
                <p class="email"><strong>Email:</strong> ${user.email}</p>
                <p><strong>Ciudad:</strong> ${user.address.city}</p>
                <p><strong>Teléfono:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Empresa:</strong> ${user.company.name}</p>
            `;
            usersList.appendChild(userCard);
        });
        
        // Agregar animación de entrada
        setTimeout(() => {
            const cards = usersList.querySelectorAll('.user-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.transition = 'all 0.3s ease';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });
        }, 100);
        
    } catch (error) {
        handleError(error, usersList);
    } finally {
        toggleLoading(false);
    }
}

// Función para cargar datos aleatorios (cita)
async function loadRandomData() {
    randomData.innerHTML = '<div style="text-align: center; padding: 20px;">Cargando...</div>';
    
    try {
        const response = await fetch(API_URLS.quotes);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const quote = await response.json();
        
        randomData.innerHTML = `
            <h3>💭 Cita del día</h3>
            <p style="font-style: italic; font-size: 1.1rem; margin: 15px 0; color: #495057;">
                "${quote.content}"
            </p>
            <p style="text-align: right; font-weight: 600; color: #667eea;">
                — ${quote.author}
            </p>
            <p style="margin-top: 10px; font-size: 0.9rem; color: #6c757d;">
                <strong>Longitud:</strong> ${quote.length} caracteres
            </p>
        `;
        
        // Agregar animación
        randomData.style.opacity = '0';
        randomData.style.transform = 'translateY(10px)';
        setTimeout(() => {
            randomData.style.transition = 'all 0.3s ease';
            randomData.style.opacity = '1';
            randomData.style.transform = 'translateY(0)';
        }, 50);
        
    } catch (error) {
        handleError(error, randomData);
    }
}

// Función adicional para cargar un post aleatorio
async function loadRandomPost() {
    try {
        const response = await fetch(API_URLS.posts);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        
        randomData.innerHTML = `
            <h3>📝 Post Aleatorio</h3>
            <h4 style="color: #495057; margin: 15px 0 10px 0; text-transform: capitalize;">
                ${randomPost.title}
            </h4>
            <p style="color: #6c757d; line-height: 1.6;">
                ${randomPost.body}
            </p>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #667eea;">
                <strong>ID del Post:</strong> ${randomPost.id} | <strong>Usuario:</strong> ${randomPost.userId}
            </p>
        `;
        
        // Agregar animación
        randomData.style.opacity = '0';
        randomData.style.transform = 'translateY(10px)';
        setTimeout(() => {
            randomData.style.transition = 'all 0.3s ease';
            randomData.style.opacity = '1';
            randomData.style.transform = 'translateY(0)';
        }, 50);
        
    } catch (error) {
        handleError(error, randomData);
    }
}

// Variable para alternar entre diferentes tipos de datos aleatorios
let randomDataType = 'quote';

// Event listeners
loadUsersBtn.addEventListener('click', loadUsers);

loadRandomDataBtn.addEventListener('click', () => {
    if (randomDataType === 'quote') {
        loadRandomData();
        randomDataType = 'post';
        loadRandomDataBtn.textContent = 'Obtener Post Aleatorio';
    } else {
        loadRandomPost();
        randomDataType = 'quote';
        loadRandomDataBtn.textContent = 'Obtener Cita Aleatoria';
    }
});

// Cargar datos iniciales cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Mensaje de bienvenida
    usersList.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #6c757d;">
            <h3>👋 ¡Bienvenido!</h3>
            <p>Haz clic en "Cargar Usuarios" para ver los datos de la API</p>
        </div>
    `;
    
    randomData.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #6c757d;">
            <h3>🎲 Datos Aleatorios</h3>
            <p>Haz clic en el botón para obtener contenido aleatorio</p>
        </div>
    `;
    
    // Cargar una cita inicial
    setTimeout(() => {
        loadRandomData();
    }, 1000);
});

// Función para refrescar los datos cada 30 segundos (opcional)
function autoRefresh() {
    setInterval(() => {
        if (usersList.children.length > 0 && !usersList.innerHTML.includes('Bienvenido')) {
            console.log('Auto-refrescando datos...');
            // Opcional: descomentar para auto-refresh
            // loadUsers();
        }
    }, 30000);
}

// Iniciar auto-refresh (comentado por defecto)
// autoRefresh();