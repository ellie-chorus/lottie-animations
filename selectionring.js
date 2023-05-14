function setRing() {
    $selection = document.getElementById('selection');
    $clicks = parseInt($selection.getAttribute('value')) + 1;
    $selection.setAttribute('value', $clicks);
    if ($clicks % 3 == 0) {
        $selection.className = 'very-important';
        console.log('first if statement ran');
    } else if ($clicks % 3 == 1) {
        $selection.className = 'less-important';
        console.log('second if statement ran');
    } else if ($clicks % 3 == 2) {
        $selection.className = 'important';
        console.log('third if statement ran');
    }
}
