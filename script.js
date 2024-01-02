// Selecting the note container and create button
const noteContainer = document.querySelector(".note-container");
const createNoteButton = document.querySelector(".create");

 // Update the selection of notes to include the new note
 let notes = document.querySelectorAll(".note-box");


 function UpdateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
 }

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


// Adding a click event listener to the "create" button
createNoteButton.addEventListener("click", () => {
    // Creating a new note box, delete note, and edit note
    let noteBox = document.createElement("p");
    let deleteImg = document.createElement("img");
    let editImg = document.createElement("img");

    // Setting the class name and contenteditable attribute for the note box
    noteBox.className = "note-box";
    noteBox.setAttribute("contenteditable", "true");

    // Setting the src attribute for the delete and edit notes
    deleteImg.src = "images/delete.png";
    editImg.src = "images/edit.png";

    // Appending the delete and edit notes to the note box
    noteBox.appendChild(deleteImg);
    noteBox.appendChild(editImg);

    // Appending the new note box to the note container
    noteContainer.appendChild(noteBox);
})

noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        UpdateStorage();
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".note-box");

        notes.forEach(Note => {
            Note.onkeyup = function(){
                UpdateStorage();
            }
        })

    }
})


document.addEventListener("keydown", event =>{

    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})