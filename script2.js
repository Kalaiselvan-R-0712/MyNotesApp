    const index = localStorage.getItem("selectedNoteIndex");
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (index !== null && notes[index]) {
      const note = notes[index];
      document.getElementById("noteTitle").textContent = note.title;
      document.getElementById("noteBody").textContent = note.body;
    } else {
      document.querySelector(".card").innerHTML = "<h2>Note not found.</h2>";
    }