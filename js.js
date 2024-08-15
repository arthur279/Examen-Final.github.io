let selectedFigure = '';

        function showInputs(figure) {
            const container = document.getElementById('inputs-container');
            const figureImage = document.getElementById('figure-image');
            container.innerHTML = ''; // Limpiar contenido previo
            selectedFigure = figure;

            let inputsHtml = '';
            let imageUrl = '';

            if (figure === 'circulo') {
                inputsHtml += `
                    <div class="input-group">
                        <label for="radius">Radio:</label>
                        <input type="number" id="radius" name="radius" placeholder="Ingresa el radio">
                    </div>`;
                imageUrl = 'img/circulo.png'; // Ruta a la imagen del círculo local
            } else if (figure === 'triangulo') {
                inputsHtml += `
                    <div class="input-group">
                        <label for="base">Base:</label>
                        <input type="number" id="base" name="base" placeholder="Ingresa la base">
                    </div>
                    <div class="input-group">
                        <label for="height">Altura:</label>
                        <input type="number" id="height" name="height" placeholder="Ingresa la altura">
                    </div>`;
                imageUrl = 'img/triangulo.png'; // Ruta a la imagen del triángulo local
            } else if (figure === 'cuadrado') {
                inputsHtml += `
                    <div class="input-group">
                        <label for="side">Lado:</label>
                        <input type="number" id="side" name="side" placeholder="Ingresa el lado">
                    </div>`;
                imageUrl = 'img/cuadrado.png'; // Ruta a la imagen del cuadrado local
            }

            container.innerHTML = inputsHtml;
            figureImage.src = imageUrl;
            figureImage.style.display = 'block';

            // Mostrar la sección de inputs
            document.getElementById('figure-inputs').style.display = 'block';
        }

        function calculateArea() {
            let area;
            if (selectedFigure === 'circulo') {
                const radius = document.getElementById('radius').value;
                if (radius) {
                    area = Math.PI * Math.pow(radius, 2);
                }
            } else if (selectedFigure === 'triangulo') {
                const base = document.getElementById('base').value;
                const height = document.getElementById('height').value;
                if (base && height) {
                    area = 0.5 * base * height;
                }
            } else if (selectedFigure === 'cuadrado') {
                const side = document.getElementById('side').value;
                if (side) {
                    area = Math.pow(side, 2);
                }
            }

            if (area !== undefined) {
                Swal.fire({
                    title: 'Área Calculada',
                    text: `El área del ${selectedFigure} es: ${area.toFixed(2)}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor, completa todos los campos correctamente.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }