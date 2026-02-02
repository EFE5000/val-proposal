document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('sayYesBtn');
    var heart = document.getElementById('jumping-heart');
    button.onclick = function() {
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

        // Redirect after fade-out
        setTimeout(function() {
            heart.style.display = 'none';
            window.location.href = 'yay.html';
        }, 1600);
    };
});
