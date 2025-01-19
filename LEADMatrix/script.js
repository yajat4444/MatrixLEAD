function selectCard(selectedCardId) {
    const cards = document.querySelectorAll('.card');
    const selectedCard = document.getElementById(selectedCardId);

    // Check if the clicked card is already selected
    if (selectedCard.classList.contains('selected')) {
        // If it's already selected, reset all cards to their original state
        cards.forEach(card => {
            card.classList.remove('selected', 'left', 'right');
            card.style.transform = ''; // Reset transform property
        });
        return; // Exit the function to prevent further actions
    }

    // If the clicked card is not selected, proceed with selecting it
    cards.forEach(card => {
        card.classList.remove('selected', 'left', 'right');
        card.style.transform = ''; // Reset transform property
    });

    // Add 'selected' class to the clicked card and move it to the center
    selectedCard.classList.add('selected');
    selectedCard.style.transform = 'scale(1.5) translateX(0)'; // Center the selected card

    // Position the other cards based on their relative position
    cards.forEach(card => {
        if (card !== selectedCard) {
            if (card.compareDocumentPosition(selectedCard) & Node.DOCUMENT_POSITION_FOLLOWING) {
                card.classList.add('right');
                card.classList.remove('selected', 'left');
                card.style.transform = 'translateX(600px) scale(0.8)';
            } else {
                card.classList.add('left');
                card.classList.remove('selected', 'right');
                card.style.transform = 'translateX(-600px) scale(0.8)';
            }
        }
    });
}
