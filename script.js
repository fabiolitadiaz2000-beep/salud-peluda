// Variables para almacenar datos de la mascota
let mascota = {
    nombre: '',
    edad: '',
    especie: '',
    raza: '',
    peso: ''
};

// Función para ocultar todos los paneles
function ocultarTodos() {
    try {
        const ids = ['inicio', 'paso1', 'paso2', 'paso3', 'paso4', 'paso5', 'menu', 
                     'recordatorios', 'alimentacion', 'banos', 'enfermedades', 'ejercicio', 'entrenamiento'];
        ids.forEach(id => {
            const elem = document.getElementById(id);
            if (elem) {
                elem.classList.add('oculto');
            }
        });
    } catch (e) {
        console.error('Error en ocultarTodos:', e);
    }
}

// Ir al paso 1: Nombre
function irAPaso1() {
    console.log('Función irAPaso1 llamada');
    try {
        ocultarTodos();
        const paso1 = document.getElementById('paso1');
        if (paso1) {
            paso1.classList.remove('oculto');
            console.log('Paso 1 mostrado');
            const input = document.getElementById('inputNombre');
            if (input) {
                input.focus();
            }
        } else {
            console.error('No se encontró elemento paso1');
        }
    } catch (e) {
        console.error('Error en irAPaso1:', e);
    }
}

// Ir al paso 2: Edad
function irAPaso2() {
    console.log('Función irAPaso2 llamada');
    try {
        const nombre = document.getElementById('inputNombre').value.trim();
        if (!nombre) {
            alert('⚠️ Por favor ingresa el nombre de tu mascota');
            return;
        }
        mascota.nombre = nombre;
        ocultarTodos();
        const paso2 = document.getElementById('paso2');
        if (paso2) {
            paso2.classList.remove('oculto');
            console.log('Paso 2 mostrado');
            document.getElementById('inputEdad').focus();
        }
    } catch (e) {
        console.error('Error en irAPaso2:', e);
    }
}

// Ir al paso 3: Especie
function irAPaso3() {
    console.log('Función irAPaso3 llamada');
    try {
        const edad = document.getElementById('inputEdad').value.trim();
        if (!edad) {
            alert('⚠️ Por favor ingresa la edad');
            return;
        }
        mascota.edad = edad;
        ocultarTodos();
        const paso3 = document.getElementById('paso3');
        if (paso3) {
            paso3.classList.remove('oculto');
            console.log('Paso 3 mostrado');
            document.getElementById('inputEspecie').focus();
        }
    } catch (e) {
        console.error('Error en irAPaso3:', e);
    }
}

// Ir al paso 4: Raza
function irAPaso4() {
    console.log('Función irAPaso4 llamada');
    try {
        const especie = document.getElementById('inputEspecie').value.trim();
        if (!especie) {
            alert('⚠️ Por favor ingresa la especie');
            return;
        }
        mascota.especie = especie;
        ocultarTodos();
        const paso4 = document.getElementById('paso4');
        if (paso4) {
            paso4.classList.remove('oculto');
            console.log('Paso 4 mostrado');
            document.getElementById('inputRaza').focus();
        }
    } catch (e) {
        console.error('Error en irAPaso4:', e);
    }
}

// Ir al paso 5: Peso
function irAPaso5() {
    console.log('Función irAPaso5 llamada');
    try {
        const raza = document.getElementById('inputRaza').value.trim();
        if (!raza) {
            alert('⚠️ Por favor ingresa la raza');
            return;
        }
        mascota.raza = raza;
        ocultarTodos();
        const paso5 = document.getElementById('paso5');
        if (paso5) {
            paso5.classList.remove('oculto');
            console.log('Paso 5 mostrado');
            document.getElementById('inputPeso').focus();
        }
    } catch (e) {
        console.error('Error en irAPaso5:', e);
    }
}

// Finalizar registro
function finalizarRegistro() {
    console.log('Función finalizarRegistro llamada');
    try {
        const peso = document.getElementById('inputPeso').value.trim();
        if (!peso) {
            alert('⚠️ Por favor ingresa el peso');
            return;
        }
        mascota.peso = peso;
        
        // Mostrar confirmación
        alert(`✅ ¡Perfil de ${mascota.nombre} guardado exitosamente!\n\nEspecie: ${mascota.especie}\nRaza: ${mascota.raza}\nEdad: ${mascota.edad} años\nPeso: ${mascota.peso} kg`);
        
        // Mostrar menú principal
        mostrarMenu();
    } catch (e) {
        console.error('Error en finalizarRegistro:', e);
    }
}

// Mostrar menú principal
function mostrarMenu() {
    console.log('Función mostrarMenu llamada');
    try {
        ocultarTodos();
        const menu = document.getElementById('menu');
        if (menu) {
            menu.classList.remove('oculto');
            console.log('Menú mostrado');
            const bienvenida = document.getElementById('bienvenida');
            if (bienvenida) {
                bienvenida.textContent = `👋 ¡Bienvenido, ${mascota.nombre}!`;
            }
            
            // Actualizar pesos en secciones
            const pesoAlimentacion = document.getElementById('pesoAlimentacion');
            if (pesoAlimentacion) {
                pesoAlimentacion.textContent = mascota.peso + ' kg';
            }
            const pesoEjercicio = document.getElementById('pesoEjercicio');
            if (pesoEjercicio) {
                pesoEjercicio.textContent = mascota.peso + ' kg';
            }
        }
    } catch (e) {
        console.error('Error en mostrarMenu:', e);
    }
}

// Función para abrir secciones
function abrirSeccion(seccion) {
    console.log('Abriendo sección:', seccion);
    try {
        ocultarTodos();
        const elemento = document.getElementById(seccion);
        if (elemento) {
            elemento.classList.remove('oculto');
            console.log('Sección ' + seccion + ' abierta correctamente');
        } else {
            console.error('No se encontró elemento con id:', seccion);
        }
    } catch (e) {
        console.error('Error en abrirSeccion:', e);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM completamente cargado, aplicación lista');
    console.log('Funciones disponibles: irAPaso1, irAPaso2, irAPaso3, irAPaso4, irAPaso5, abrirSeccion, mostrarMenu');
});
