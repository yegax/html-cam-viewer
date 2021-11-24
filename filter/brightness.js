window.onload = function()
{
    var brightness = document.getElementById('videoElement');
        controls   = document.getElementById('bright-slider');

    controls.onkeyup = controls.onchange = function()
    {
        var brightness = document.getElementById('brightness'),
            val        = parseInt(this.value) - 50;

        if (val > 50 || val < -50)
        return false;

        brightness.style.backgroundColor = val > 0 ? 'white' : 'black';
        brightness.style.opacity = Math.abs(val/100) * 2;
    }
}