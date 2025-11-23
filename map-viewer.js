document.addEventListener('DOMContentLoaded', () => {
    const cout = document.getElementById('cout');
    const canvas = document.createElement('canvas');
    const offscreenCtx = canvas.getContext('2d', { willReadFrequently: true });

    let map = null;
    let imageWidth = 0;
    let imageHeight = 0;

    function loadFile(file) {
        if (!file || !file.type.startsWith('image/png')) {
            cout.textContent = 'File is not a png';
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                imageWidth = img.width;
                imageHeight = img.height;
                canvas.width = imageWidth;
                canvas.height = imageHeight;
                offscreenCtx.drawImage(img, 0, 0);

                if (map) {
                    map.remove();
                }

                map = L.map('map', {
                    crs: L.CRS.Simple,
                    minZoom: -5
                });

                const bounds = [[0, 0], [imageHeight, imageWidth]];

                L.imageOverlay(img.src, bounds).addTo(map);
                map.fitBounds(bounds);

                map.on('click', (clickEvent) => {
                    const y = imageHeight - 1 - Math.floor(clickEvent.latlng.lat);
                    const x = Math.floor(clickEvent.latlng.lng);

                    if (x >= 0 && x < imageWidth && y >= 0 && y < imageHeight) {
                        try {
                            const pixelData = offscreenCtx.getImageData(x, y, 1, 1).data;
                            const [r, g, b, a] = pixelData;
                            cout.textContent = `Pixel: (${x}, ${y}) | RGB: (${r}, ${g}, ${b})`;
                        } catch (err) {
                            console.error("Error getting pixel data:", err);
                            cout.textContent = "Could not read pixel data.";
                        }
                    } else {
                        cout.textContent = 'Clicked outside image bounds.';
                    }
                });

                cout.textContent = 'Map loaded.';
            };

            img.onerror = () => {
                cout.textContent = 'Error: Could not load the image file.';
            };

            img.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }

    // --- Drag and Drop Event Listeners ---

    const dropZone = window;

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();

    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            loadFile(files[0]);
        }
    });


    cout.textContent = 'Drop the png file here';
});