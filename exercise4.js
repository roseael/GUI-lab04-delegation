/*// exercise4.js
const editList = document.querySelector('#edit-list');
editList.addEventListener('dblclick', function(event) {
 // 1. Find closest .edit-item from event.target; return if null
 // 2. Return early if item already has .editing class
 // 3. Save original text, clear item, create and append input
 const originalText = item.textContent;
 item.textContent = '';
 const input = document.createElement('input');
 input.value = originalText;
 item.appendChild(input);
 item.classList.add('editing');
 input.focus();
 // -- Helper: commit the edit --
 function commitEdit() {
    const newText = input.value.trim() || originalText;
 // 4. Set item.textContent to newText, remove .editing
 }
 // -- Helper: cancel the edit --
 function cancelEdit() {
 // 5. Restore originalText, remove .editing
 }
 // 6. Listen for 'keydown' on input
 // Enter -> commitEdit()
 // Escape -> cancelEdit()
 // 7. Listen for 'blur' on input -> commitEdit()
});*/

const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', function(event) {
    // 1. Find closest .edit-item from event.target; return if null
    const item = event.target.closest('.edit-item');
    if (!item) return;

    // 2. Return early if item already has .editing class
    if (item.classList.contains('editing')) return;

    // 3. Save original text, clear item, create and append input
    const originalText = item.textContent;
    item.textContent = '';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    item.appendChild(input);
    item.classList.add('editing');
    input.focus();
    //Helper: commit the edit --
    function commitEdit() {
        const newText = input.value.trim();
        // Fall back to originalText if the input is empty
        item.textContent = newText || originalText;
        item.classList.remove('editing');
    }
    // -- Helper: cancel the edit --
    function cancelEdit() {
        item.textContent = originalText;
        item.classList.remove('editing');
    }
    // 4. Listen for 'keydown' on the new input
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            commitEdit();
        } else if (e.key === 'Escape') {
            cancelEdit();
        }
    });
    // 5. Listen for 'blur' on input (clicking away) -> commitEdit()
    input.addEventListener('blur', function() {
        // Only commit if the input is still a child of the item
        // (This prevents errors if Enter was already pressed)
        if (item.contains(input)) {
            commitEdit();
        }
    });
});