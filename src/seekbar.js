function seekbar () {
    var pointer_down = false;

    var seekbar = document.getElementsByClassName('seekbar');
    for (var i = 0; i < seekbar.length; i++) {

       
        seekbar[i].innerHTML = '<div href="#" class="seekbar_btn"><span id="hoverNow" class="tooltip">data</span></div><div class="seekbar_bg"></div>';
        var seekbar_btn = seekbar[i].getElementsByClassName('seekbar_btn')[0];
        var seekbar_bg = seekbar[i].getElementsByClassName('seekbar_bg')[0];

        if (seekbar[i].hasAttribute('data-seekbar-value')) {
            var posi = seekbar[i].getAttribute('data-seekbar-value');
            seekbarSetPo(seekbar_btn, seekbar_bg, posi);
        } else {
            seekbar[i].setAttribute('data-seekbar-value', '0');
        }
    }
}

function ch_elm(parent, child) {
    return parent.getElementsByClassName(child)[0];
}

/*
 * Get Position 
 */
function seekbar_getposi(elem, e) {
    if (elem !== undefined && e !== undefined) {
        var prefix = parseFloat(elem.offsetLeft);
        var point_e = (((parseFloat(e.pageX) - prefix) / parseFloat(elem.clientWidth)) * 100);
        if (point_e < 0) {
            point_e = 0;

        } else if (point_e > 100) {
            point_e = 100;
        }
        console.log('get: ' + point_e);
        return Math.round(point_e);
    }
}

/*
 * Set Position 
 */
function seekbarSetPo(btn, bg, posi) {
    if (btn !== undefined) {
        btn.style.left = posi + "%";
        bg.style.width = posi + "%";
        btn.parentElement.setAttribute('data-seekbar-value', posi);
        console.log('set: ' + posi);
    }
}

/*
 * Remove Events
 */
function remv_evt() {
    window.removeEventListener('mousedown', seekbar_getposi, true);
    window.removeEventListener('mousemove', seekbar_getposi, true);
    window.removeEventListener('mousedown', seekbarSetPo, true);
    window.removeEventListener('mousemove', seekbarSetPo, true);
}