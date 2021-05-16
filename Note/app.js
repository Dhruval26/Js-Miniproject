 
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if(addTxt.value==0){
      document.getElementById('warnBox').innerHTML=`
    <div class="alert alert-warning" role="alert">Add a note first !</div>`
    setTimeout(function() {document.getElementById('warnBox').innerHTML='';},3000);
}
  else{
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
   
      currentNote={
        title:addTitle.value,
        Txt:addTxt.value,
      }
      notesObj.push(currentNote);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      addTxt.value = "";
      addTitle.value="";
      console.log(notesObj);
      showNotes();
    }   
});


// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  let html = "";

  notesObj.forEach((element, index) =>{
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${element.title}</h5>
                        <h5 class="card-title">Note:</h5>
                        <p class="card-text"> ${element.Txt}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", searchFun);

function searchFun(){
    let inputVal = search.value;
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
}
