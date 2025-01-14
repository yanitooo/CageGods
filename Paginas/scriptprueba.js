
    // Función para rastrear el movimiento del cursor y ajustar el subrayado dinámico
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mousemove', e => {
            const rect = link.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            link.style.setProperty('--mouse-x', `${mouseX}px`);
        });

        link.addEventListener('mouseleave', () => {
            link.style.setProperty('--mouse-x', '50%');
        });
    });

