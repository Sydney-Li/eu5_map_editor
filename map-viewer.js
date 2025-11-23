document.addEventListener('DOMContentLoaded', () => {
    const cout = document.getElementById('cout');
    const canvas = document.createElement('canvas');
    const canvasCtx = canvas.getContext('2d', { willReadFrequently: true });

    let map = null;
    let imageWidth = 0;
    let imageHeight = 0;

    infoBox.textContent = 'Loading...'; // default prompt

    const img = new Image();
    img.onload = () => {
        imageWidth = img.width;
        imageHeight = img.height;
		canvas.width = imageWidth;
        canvas.height = imageHeight;
        canvasCtx.drawImage(img, 0, 0);

		map = L.map('map', {
        	crs: L.CRS.Simple,
            minZoom: -5
        });

		const bounds = [[0, 0], [imageHeight, imageWidth]]; 
		L.imageOverlay(img.src, bounds).addTo(map);
        map.fitBounds(bounds); // mapping the image to the map

		map.on('click', (clickEvent) => {
        	const y = imageHeight - 1 - Math.floor(clickEvent.latlng.lat);
			// adjusting y since it is reverted in crs.simple
            const x = Math.floor(clickEvent.latlng.lng);

            if (x >= 0 && x < imageWidth && y >= 0 && y < imageHeight) {
                try { // legal click
                    const pixelData = canvasCtx.getImageData(x, y, 1, 1).data; 
                    const [r, g, b, a] = pixelData;
                    cout.textContent = `Pixel: (${x}, ${y}) | RGB: (${r}, ${g}, ${b})`;
                } catch (err) {
                    console.error("Error getting pixel data:", err);
                    cout.textContent = "Help";
                }
            } else {
                    cout.textContent = 'Clicked outside image bounds.';
            }
        });
		
		infoBox.textContent = 'Map loaded.'; // after loading
	};
	
    img.onerror = () => {
        cout.textContent = 'Error: Could not load the image file.';
    };
	
        img.src = 'locations.png';
});
