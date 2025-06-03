
lineaActual.save('miDibujo');
const saveButton = document.createElement('button');
saveButton.textContent = 'Guardar Dibujo';
saveButton.onclick = () => {
    const nombre = prompt('Nombre del dibujo:', 'miDibujo');
    if (nombre) {
        lineaActual.save(nombre);
        alert('Dibujo guardado como: ' + nombre);
    }
};
document.body.appendChild(saveButton);