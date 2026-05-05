// Check-in page interactivity

// Pain slider
const painSlider = document.getElementById('painSlider');
const painValue = document.getElementById('painValue');
const painLabel = document.getElementById('painLabel');

if (painSlider) {
    painSlider.addEventListener('input', function () {
        const val = parseInt(this.value);
        painValue.textContent = val;

        const labels = ['Sem dor', 'Mínima', 'Muito leve', 'Leve', 'Leve-moderada',
            'Moderada', 'Moderada', 'Moderada-alta', 'Alta', 'Muito alta', 'Máxima'];
        painLabel.textContent = labels[val] || 'Moderada';
    });
}

// Option selection (sleep, energy)
function selectOption(btn, group) {
    const options = document.querySelectorAll('.' + group + '-option');
    options.forEach(function (opt) {
        opt.classList.remove('selected', 'border-2', 'border-primary', 'bg-primary-container/10', 'text-primary');
        opt.classList.add('border', 'border-surface-variant');
        opt.querySelector('.material-symbols-outlined').classList.add('text-outline');
        opt.querySelector('.material-symbols-outlined').classList.remove('text-primary');
        opt.querySelector('.material-symbols-outlined').style.fontVariationSettings = "";
        const label = opt.querySelector('.font-caption');
        if (label) {
            label.classList.remove('font-semibold');
            label.classList.add('text-on-surface-variant');
        }
    });

    btn.classList.remove('border', 'border-surface-variant');
    btn.classList.add('selected', 'border-2', 'border-primary', 'bg-primary-container/10', 'text-primary');
    btn.querySelector('.material-symbols-outlined').classList.remove('text-outline');
    btn.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 1";
    const label = btn.querySelector('.font-caption');
    if (label) {
        label.classList.add('font-semibold');
        label.classList.remove('text-on-surface-variant');
    }
}

// Mood selection
function selectMood(btn) {
    const moods = document.querySelectorAll('.mood-btn');
    moods.forEach(function (m) {
        m.classList.remove('selected', 'scale-110', 'bg-surface-container-high', 'ring-2', 'ring-primary');
        m.classList.add('opacity-50', 'grayscale', 'hover:grayscale-0', 'hover:scale-110');
    });

    btn.classList.add('selected', 'scale-110', 'bg-surface-container-high', 'ring-2', 'ring-primary');
    btn.classList.remove('opacity-50', 'grayscale', 'hover:grayscale-0', 'hover:scale-110');
}
