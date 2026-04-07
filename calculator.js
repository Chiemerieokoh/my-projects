const display = document.getElementById('display');
const premiumButtons = document.querySelectorAll('.premium');
let premiumUnlocked = false; // initially locked

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let input = display.value;

        if (premiumUnlocked) {
            // Replace premium symbols with JS equivalents
            input = input.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
            input = input.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, 'Math.pow($1,$3)');
            input = input.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
        } else {
            // Disallow premium symbols if not unlocked
            if (/[\^√%]/.test(input)) throw "Premium locked!";
        }

        // Evaluate the expression
        let result = Function('"use strict";return (' + input + ')')();
        display.value = result;
    } catch (err) {
        display.value = 'Error';
    }
}

// Unlock premium features
function unlockPremium() {
    premiumButtons.forEach(btn => {
        btn.style.backgroundColor = '#fff';
        btn.style.cursor = 'pointer';
        btn.classList.remove('premium');
    });
    premiumUnlocked = true;
    alert("Premium features unlocked! 🎉");
}

// Handle premium buttons click
function premiumAppend(val) {
    if (premiumUnlocked) {
        display.value += val;
    } else {
        alert("This is a premium feature! Unlock to use.");
    }
}