const notesContainer = document.querySelector(".notes-container");
const smallContainer = document.querySelector(".small-container");
const createNew = document.querySelector("#create-new")
createNew.addEventListener("click", newNote);
notesContainer.addEventListener("keyup", (e) => {
    if (e.target.tagName === "P") {
    updateNotes(notesContainer.innerHTML)
    }
})
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateNotes(notesContainer.innerHTML)
    }
})


function newNote() {
    const noteDiv = document.createElement("div")
    const note = document.createElement("p");
    const deleteImg = document.createElement("img");
    note.classList.add("input-box");
    noteDiv.classList.add("small-container");
    deleteImg.src = "images/delete.png";
    note.contentEditable = "true";
    noteDiv.appendChild(note);
    noteDiv.appendChild(deleteImg);
    notesContainer.appendChild(noteDiv);   
}

function updateNotes(x){
    localStorage.setItem("note", x);
}

/*TEST*/
notesContainer.innerHTML = localStorage.getItem("note");
if (notesContainer.innerHTML)

/*TEST*/

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.tagName === "P")  {
        e.preventDefault();
        // let lb = document.createElement("br");
        // e.target.appendChild(lb);
        // e.target.focus();
        document.execCommand("insertLineBreak");
    }
}) 

