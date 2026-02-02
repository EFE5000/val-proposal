document.addEventListener('DOMContentLoaded', function() {
    // Index page: navigate to valentine.html
    var toValentineBtn = document.getElementById('toValentineBtn');
    if (toValentineBtn) {
        toValentineBtn.onclick = function() {
            window.location.href = './valentine.html';
        };
    }

    // Valentine page: handle Valentine button
    var sayYesBtn = document.getElementById('sayYesBtn');
    var heart = document.getElementById('jumping-heart');
    if (sayYesBtn && heart) {
        sayYesBtn.onclick = function() {
            alert('Yay! I can’t wait to spend Valentine’s Day with you, Folulope! 💖');
            heart.style.display = 'block';
            heart.style.opacity = '1'; // ensure visible

            // Jumping animation
            heart.animate([
                { transform: 'translateY(0)', opacity: 1 },
                { transform: 'translateY(-120px) scale(1.2)', opacity: 1, offset: 0.4 },
                { transform: 'translateY(0) scale(1)', opacity: 1, offset: 0.7 },
                { transform: 'translateY(0) scale(1)', opacity: 0 } // fade out
            ], {
                duration: 1500,
                easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
            });

            // Hide heart after fade-out
            setTimeout(function() {
                heart.style.display = 'none';
            }, 1600);
        };
    }
});
