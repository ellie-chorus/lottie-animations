function setRing() {
    $selection = document.getElementById('selection');
    $clicks = parseInt($selection.getAttribute('value')) + 1;
    $selection.setAttribute('value', $clicks);
    $rabbit = document.getElementById('rabbit_form');
    $rabbit.setAttribute('value', $clicks);
    $test = document.getElementById('test');
    $test.setAttribute('value', $clicks);
    $test.value = $clicks.toString();
    $field = document.querySelectorAll('field')[0];
    $field.setAttribute('id', 'test_field');
    $field.setAttribute('value', $clicks);
    $field.setAttribute('current-value', $clicks);
    $field.setAttribute('current_value', $clicks);
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

function getClicks() {
    return "240";
}