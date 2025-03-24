/* script.js */
function calculateCOCOMO() {
    let loc = parseFloat(document.getElementById('loc').value);
    let type = document.getElementById('type').value;
    
    if (isNaN(loc) || loc <= 0) {
        alert("Please enter a valid LOC value.");
        return;
    }
    
    let coefficients = {
        organic: { a: 2.4, b: 1.05, c: 2.5, d: 0.38 },
        "semi-detached": { a: 3.0, b: 1.12, c: 2.5, d: 0.35 },
        embedded: { a: 3.6, b: 1.20, c: 2.5, d: 0.32 }
    };
    
    let { a, b, c, d } = coefficients[type];
    let effort = a * Math.pow(loc / 1000, b);
    let time = c * Math.pow(effort, d);
    let teamSize = effort / time;
    
    document.getElementById('effort').innerText = effort.toFixed(2);
    document.getElementById('time').innerText = time.toFixed(2);
    document.getElementById('team').innerText = teamSize.toFixed(2);
}
