// exercise3.js
const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');
filterBar.addEventListener('click', function(event) {
 // 1. Guard: if event.target does not match '.filter-btn', return
 // 2. Update active class on all buttons
 // 3. Read the filter value from event.target.dataset.filter
 // 4. Loop through cards
 // - If filter === 'all': remove .hidden from every card
 // - Otherwise: compare card.dataset.category to filter
 // add .hidden if no match, remove .hidden if match
});

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');

filterBar.addEventListener('click', (e) => {
    if (!e.target.matches('.filter-btn')) return;

    // Update active button UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.dataset.filter;

    cards.forEach(card => {
        const category = card.dataset.category;
        // Show if 'all' or if category matches
        const isVisible = filter === 'all' || category === filter;
        card.classList.toggle('hidden', !isVisible);
    });
});