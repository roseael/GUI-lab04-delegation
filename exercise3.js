/*// exercise3.js
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
});*/

const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');
filterBar.addEventListener('click', function(event) {
    // 1. Guard: if event.target does not match '.filter-btn', return
    if (!event.target.matches('.filter-btn')) return;
    // 2. Update active class on all buttons
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    // Then, add 'active' to the one that was actually clicked
    event.target.classList.add('active');
    // 3. Read the filter value from event.target.dataset.filter
    const filterValue = event.target.dataset.filter;
    // 4. Loop through cards
    cards.forEach(function(card) {
        const cardCategory = card.dataset.category;
        // Determine if this card should be shown
        const shouldShow = filterValue === 'all' || cardCategory === filterValue;
        // classList.toggle(className, condition) 
        // adds the class if condition is true, removes it if false
        card.classList.toggle('hidden', !shouldShow);
    });
});