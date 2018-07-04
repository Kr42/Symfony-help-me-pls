document.addEventListener('DOMContentLoaded', function() {
    var currentError = document.getElementsByClassName("break-long-words trace-message")[0];
    if (currentError) {
        var content = currentError.innerHTML;
        currentError.innerHTML += "<h3>Solve your problem</h3>";
        currentError.innerHTML += "<a target='_blank' href='https://google.com/search?q="+content+"'>Google</a>";
        currentError.innerHTML += "<br>";
        currentError.innerHTML += "<a target='_blank' href='https://stackoverflow.com/search?q="+content+"'>Stackoverflow</a>";
    }
}, false);
