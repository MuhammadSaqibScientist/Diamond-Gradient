function makeGradient() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;
    const color4 = document.getElementById('color4').value;
    diamondGradient(color1, color2, color3, color4);
}
function diamondGradient(color1, color2, color3, color4) {
    const numSteps = 10;
    const colorList = generateColorList(color1, color2, numSteps);
    const colorList1 = generateColorList(color3, color4, numSteps);
    
    var gradientPreview = document.getElementsByClassName('diamond-gradient');
    for (var i = 0; i < gradientPreview.length; i++) {
        gradientPreview[i].style.backgroundImage = 'linear-gradient(60deg, ' +
            colorList[0] + ' 0%, ' +
            colorList[0] + ' 10%, ' +
            colorList[1] + ' 10%, ' +
            colorList[1] + ' 20%, ' +
            colorList[2] + ' 20%, ' +
            colorList[2] + ' 30%, ' +
            colorList[3] + ' 30%, ' +
            colorList[3] + ' 40%, ' +
            colorList[4] + ' 40%, ' +
            colorList[4] + ' 50%, ' +
            colorList[5] + ' 50%, ' +
            colorList[5] + ' 60%, ' +
            colorList[6] + ' 60%, ' +
            colorList[6] + ' 70%, ' +
            colorList[7] + ' 70%, ' +
            colorList[7] + ' 80%, ' +
            colorList[8] + ' 80%, ' +
            colorList[8] + ' 90%, ' +
            colorList[9] + ' 90%)';
    }
            
    var mainDivs = document.querySelectorAll('.diamond-gradient');
    mainDivs.forEach(function(mainDiv) {
        var existingInnerDiv = mainDiv.querySelector('.diamond-gradient-inner');
        if (existingInnerDiv) {
            // Update existing inner div's background gradient
            existingInnerDiv.style.backgroundImage = 'linear-gradient(120deg, ' +
                colorList1[0] + ' 0%, ' +
                colorList1[0] + ' 10%, ' +
                colorList1[1] + ' 10%, ' +
                colorList1[1] + ' 20%, ' +
                colorList1[2] + ' 20%, ' +
                colorList1[2] + ' 30%, ' +
                colorList1[3] + ' 30%, ' +
                colorList1[3] + ' 40%, ' +
                colorList1[4] + ' 40%, ' +
                colorList1[4] + ' 50%, ' +
                colorList1[5] + ' 50%, ' +
                colorList1[5] + ' 60%, ' +
                colorList1[6] + ' 60%, ' +
                colorList1[6] + ' 70%, ' +
                colorList1[7] + ' 70%, ' +
                colorList1[7] + ' 80%, ' +
                colorList1[8] + ' 80%, ' +
                colorList1[8] + ' 90%, ' +
                colorList1[9] + ' 90%)';
        } else {
            // Create new inner div
            var innerDiv = document.createElement('div');
            innerDiv.style.width = mainDiv.offsetWidth + 'px'; // Set width to match mainDiv's width
            innerDiv.style.height = mainDiv.offsetHeight + 'px'; // Set height to match mainDiv's height
            innerDiv.classList.add('diamond-gradient-inner');
            innerDiv.style.backgroundImage = 'linear-gradient(120deg, ' +
                colorList1[0] + ' 0%, ' +
                colorList1[0] + ' 10%, ' +
                colorList1[1] + ' 10%, ' +
                colorList1[1] + ' 20%, ' +
                colorList1[2] + ' 20%, ' +
                colorList1[2] + ' 30%, ' +
                colorList1[3] + ' 30%, ' +
                colorList1[3] + ' 40%, ' +
                colorList1[4] + ' 40%, ' +
                colorList1[4] + ' 50%, ' +
                colorList1[5] + ' 50%, ' +
                colorList1[5] + ' 60%, ' +
                colorList1[6] + ' 60%, ' +
                colorList1[6] + ' 70%, ' +
                colorList1[7] + ' 70%, ' +
                colorList1[7] + ' 80%, ' +
                colorList1[8] + ' 80%, ' +
                colorList1[8] + ' 90%, ' +
                colorList1[9] + ' 90%)';

            // Move the existing content of mainDiv to innerDiv
            while (mainDiv.firstChild) {
                innerDiv.appendChild(mainDiv.firstChild);
            }
            // Append the innerDiv back to mainDiv
            mainDiv.appendChild(innerDiv);
        }
    });
}

function generateColorList(color1, color2, numSteps) {
    // Convert hex strings to RGB arrays
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    // Calculate step size for each color component
    const stepSize = [
        (rgb2[0] - rgb1[0]) / (numSteps - 1),
        (rgb2[1] - rgb1[1]) / (numSteps - 1),
        (rgb2[2] - rgb1[2]) / (numSteps - 1),
    ];

    // Generate intermediate colors
    const colors = [];
    for (let i = 0; i < numSteps; i++) {
        const intermediateRgb = [
            Math.round(rgb1[0] + i * stepSize[0]),
            Math.round(rgb1[1] + i * stepSize[1]),
            Math.round(rgb1[2] + i * stepSize[2]),
        ];
        const colorRGBA = `rgba(${intermediateRgb.join(',')}, 0.5)`;
        colors.push(colorRGBA);
    }

    return colors;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
    ] : null;
}

function rgbToHex(rgb) {
    return rgb.map(val => val.toString(16).padStart(2, '0')).join('');
}

function displayColors(colors) {
    const colorDisplay = document.getElementById('color-display');
    colorDisplay.innerHTML = ''; // Clear previous content

    colors.forEach((color, index) => {
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        div.innerText = `Step ${index + 1}`;
        colorDisplay.appendChild(div);
    });
}
