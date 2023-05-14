function setRing() {
    $selection = document.getElementById('selection');
    $clicks = parseInt($selection.getAttribute('value')) + 1;
    $selection.setAttribute('value', $clicks);
    if ($clicks % 3 == 0) {
        $selection.className = 'very-important';
    } else if ($clicks % 3 == 1) {
        $selection.className = 'less-important';
    } else if ($clicks % 3 == 2) {
        $selection.className = 'important';
    }
}
