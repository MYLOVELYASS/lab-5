// Глобальная переменная для хранения результата
var resultText = "";

function insertText(position) {
    var textArea = document.getElementById('text-area');
    var textField = document.getElementById('text-input').value;

    // В зависимости от выбранной позиции (before или after) изменяем содержимое textArea
    if (position === 'before') {
        textArea.value = textField + textArea.value;
    } else if (position === 'after') {
        textArea.value = textArea.value + textField;
    }

    // Обновляем результат в глобальной переменной
    resultText = textArea.value;
}

function openResultWindow() {
    // Открываем новое окно и отображаем в нем результат
    var resultWindow = window.open('', 'Result Window', 'width=400,height=200');
    resultWindow.document.write('<html><head><title>Результат</title></head><body>');
    resultWindow.document.write('<h1>Результат:</h1>');
    resultWindow.document.write('<p>' + resultText + '</p>');
    resultWindow.document.write('</body></html>');
    resultWindow.document.close();
}
