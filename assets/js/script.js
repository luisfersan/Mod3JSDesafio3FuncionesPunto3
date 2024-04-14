document.addEventListener('DOMContentLoaded', function() {
    // Obtengo los elementos por su ID
    const azul = document.getElementById('azul');
    const rojo = document.getElementById('rojo');
    const verde = document.getElementById('verde');
    const amarillo = document.getElementById('amarillo');
    const keyDiv = document.getElementById('key');

    // Agrego evento de clic a cada div de color
    azul.addEventListener('click', function() {
        cambiarColor(azul, 'black');
    });

    rojo.addEventListener('click', function() {
        cambiarColor(rojo, 'black');
    });

    verde.addEventListener('click', function() {
        cambiarColor(verde, 'black');
    });

    amarillo.addEventListener('click', function() {
        cambiarColor(amarillo, 'black');
    });

    // Función para cambiar el color de un elemento
    function cambiarColor(elemento, color) {
        elemento.style.backgroundColor = color;
    }

    // Agrego evento de teclado para cambiar color del div "key"
    document.addEventListener('keydown', function(event) {
        let color;

        switch (event.key) {
            case 'a':
                color = 'pink';
                break;
            case 's':
                color = 'orange';
                break;
            case 'd':
                color = 'lightblue';
                break;
            case 'q':
                crearNuevoDiv('purple');
                break;
            case 'w':
                crearNuevoDiv('gray');
                break;
            case 'e':
                crearNuevoDiv('brown');
                break;
            default:
                return; // Salir de la función si no es una tecla válida
        }

        keyDiv.style.backgroundColor = color;
    });

    // Función para crear un nuevo div con el color especificado
    function crearNuevoDiv(color) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'color-box';
        nuevoDiv.style.backgroundColor = color;
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.margin = '10px';
        nuevoDiv.style.cursor = 'pointer';

        document.body.appendChild(nuevoDiv); // Agtrego el nuevo div al body
    }
});
