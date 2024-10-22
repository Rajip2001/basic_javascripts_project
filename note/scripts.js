document.addEventListener("DOMContentLoaded", function() {
    showNotes();

    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", function(e) {
        let addTxt = document.getElementById("addTxt");
        let notes = localStorage.getItem("notes");
        let notesObj;
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        showNotes();
    });

    function showNotes() {
        let notes = localStorage.getItem("notes");
        let notesObj;
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        let html = "";
        notesObj.forEach(function(element, index) {
            html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(${index})" class="btn btn-danger">Delete Note</button>
                </div>
            </div>`;
        });
        let notesElm = document.getElementById("notes");
        if (notesObj.length != 0) {
            notesElm.innerHTML = html;
        } else {
            notesElm.innerHTML = `Nothing to show! Create your first Note!`;
        }
    }

    function deleteNote(index) {
        let notes = localStorage.getItem("notes");
        let notesObj;
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
});
