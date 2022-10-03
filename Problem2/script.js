let index = 0;

document.getElementById("addNote").addEventListener("click", function(){
	let newNote = document.getElementById("note").value
	document.getElementById("notes").innerHTML+=`<div id=`+index+`> <p id="text`+index+`"> `+newNote+` <input type="button" value="delete" onclick="removeNote(`+index+`)"/> <input type="button" value="edit" onclick="editNote(`+index+`)"/> </div>`
	index++
});

function removeNote(elementToRemove) {
	document.getElementById(elementToRemove).remove();
}

function editNote(elementToEdit) {
	document.getElementById(elementToEdit).innerHTML+=`<div id="editingPopup`+elementToEdit+`"> <input id="popup`+elementToEdit+`" type="text" value="`+document.getElementById(elementToEdit).innerText+`"/><input type="button" value="save" onclick="saveEdit(`+elementToEdit+`)" /> </div>`
}

function saveEdit(newElement) {
	document.getElementById("text"+newElement).innerText=document.getElementById("popup"+newElement).value
	document.getElementById("editingPopup"+newElement).remove
}