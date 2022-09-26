let index = 0;

document.getElementById("addNote").addEventListener("click", function(){
	let newNote = document.getElementById("note").value
	document.getElementById("notes").innerHTML+=`<div id=`+index+`> `+newNote+` <input type="button" value="delete" onclick(removeNote(`+index+`))/> </div>`
	index++
});

function removeNote(elementToRemove) {
	document.getElementById(elementToRemove).remove();
}