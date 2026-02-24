// exercise1.js
//const accordion = document.querySelector('.accordion');
//accordion.addEventListener('click', function(event) {
 // 1. Find the closest trigger from event.target
 // If null, the click was not on a trigger - return early.
 // 2. From the trigger, find the closest .accordion-item
 // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
 // 4. Toggle .open on the clicked item only
//});
// exercise1.js

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
    // 1. Find the trigger button (even if they click an icon inside it)
    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) return;

    // 2. Find the parent item
    const currentItem = trigger.closest('.accordion-item');

    // 3. Close ALL other items
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== currentItem) {
            item.classList.remove('open');
        }
    });

    // 4. Toggle the clicked one
    currentItem.classList.toggle('open');
});