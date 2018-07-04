function displayLinks(classError) {
    var currentError = document.getElementsByClassName(classError)[0];
    if (!currentError) {
        return;
    }

    var content = currentError.innerHTML;
    currentError.innerHTML += "<h3>Solve your problem</h3>";
    currentError.innerHTML += "<a target='_blank' href='https://google.com/search?q="+content+"'>Google</a>";
    currentError.innerHTML += "<br>";
    currentError.innerHTML += "<a target='_blank' href='https://stackoverflow.com/search?q="+content+"'>Stackoverflow</a>";
}

document.addEventListener('DOMContentLoaded', function() {
    displayLinks('break-long-words trace-message');
    displayLinks('break-long-words exception-message');
}, false);
