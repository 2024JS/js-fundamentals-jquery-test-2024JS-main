// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4
let selectedCount = 0;

$('input[type="checkbox"]').on('change', function() {
    if ($(this).is(':checked')) {        
        selectedCount++;
    } else {        
        selectedCount--;
    }
    if (selectedCount >= 3) {
        $('input[type="checkbox"]').prop('disabled', true);
    }
});
 