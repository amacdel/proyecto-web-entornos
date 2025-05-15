// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar elementos
    inicializarEventos();
    
    // Inicializar animaciones
    inicializarAnimaciones();
    
    // Mostrar frase aleatoria después de 10 segundos
    setTimeout(mostrarFraseAleatoria, 10000);
    
    // Mostrar otra frase aleatoria cada 30 segundos
    setInterval(mostrarFraseAleatoria, 30000);
});

// Inicializar todos los eventos de la página
function inicializarEventos() {
    // Botón CTA en hero section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Formulario de contacto
    const contactoForm = document.getElementById('contacto-form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', manejarEnvioFormulario);
    }
    
    // Formulario de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', suscribirNewsletter);
    }
    
    // Navegación suave para los enlaces del menú
    const enlacesMenu = document.querySelectorAll('nav a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    
    // Estilo para la notificación
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.left = '20px';
    notificacion.style.backgroundColor = 'var(--primary-color)';
    notificacion.style.color = 'white';
    notificacion.style.padding = '10px 20px';
    notificacion.style.borderRadius = '4px';
    notificacion.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    notificacion.style.zIndex = '1000';
    notificacion.style.opacity = '0';
    notificacion.style.transform = 'translateY(20px)';
    notificacion.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    document.body.appendChild(notificacion);
    
    // Mostrar notificación con animación
    setTimeout(() => {
        notificacion.style.opacity = '1';
        notificacion.style.transform = 'translateY(0)';
    }, 10);
    
    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
        notificacion.style.opacity = '0';
        notificacion.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Manejar envío del formulario de contacto
function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const nombre = formData.get('nombre');
    
    // Aquí iría la lógica para enviar los datos al servidor
    // Por ahora, solo mostraremos un mensaje
    
    mostrarNotificacion(`Gracias ${nombre || 'por tu mensaje'}. Nos pondremos en contacto contigo pronto.`);
    event.target.reset();
}

// Manejar suscripción al newsletter
function suscribirNewsletter(event) {
    event.preventDefault();
    
    // Obtener email
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Aquí iría la lógica para guardar el email en la base de datos
    // Por ahora, solo mostraremos un mensaje
    
    mostrarNotificacion(`¡Gracias por suscribirte a nuestro newsletter!`);
    event.target.reset();
}

// Efecto de scroll para mostrar elementos con animación
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.producto-card, .testimonio, .nosotros-content');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Si el elemento está en el viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar efectos de animación para elementos
function inicializarAnimaciones() {
    const elements = document.querySelectorAll('.producto-card, .testimonio, .nosotros-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
}

// Añadir la frase característica de Antonio Recio aleatoriamente
function mostrarFraseAleatoria() {
    const frases = [
        "¡Soy Antonio Recio, mayorista, no limpio pescado!",
        "¡El mar al mejor precio!",
        "¡Mariscos Recio, el mar en su mesa!",
        "¡Pescado fresco, como si lo acabaras de pescar tú mismo!"
    ];
    
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    mostrarNotificacion(fraseAleatoria);
}
