// exercise4.js
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
});

const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', (e) => {
    const item = e.target.closest('.edit-item');
    if (!item || item.classList.contains('editing')) return;

    const originalText = item.textContent;
    item.classList.add('editing');
    item.textContent = '';

    const input = document.createElement('input');
    input.value = originalText;
    item.appendChild(input);
    input.focus();

    const finish = () => {
        item.textContent = input.value.trim() || originalText;
        item.classList.remove('editing');
    };

    input.addEventListener('blur', finish);
    input.addEventListener('keydown', (ke) => {
        if (ke.key === 'Enter') finish();
        if (ke.key === 'Escape') {
            input.value = originalText; // Revert
            finish();
        }
    });
});