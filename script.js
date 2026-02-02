document.addEventListener('DOMContentLoaded', function() {
    var sayYesBtn = document.getElementById('sayYesBtn');
    if (sayYesBtn) {
        sayYesBtn.onclick = function() {
            window.location.href = 'yes.html';
        };
    }
});
