    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    function saveNotes() {
      localStorage.setItem("notes", JSON.stringify(notes));
    }

    function addNote() {
      const title = document.getElementById("noteTitle").value.trim();
      const body = document.getElementById("noteBody").value.trim();
      if (!title || !body) return alert("Both title and body are required.");

      notes.push({ title, body, completed: false });
      saveNotes();
      renderNotes();
      document.getElementById("noteTitle").value = "";
      document.getElementById("noteBody").value = "";
    }

    function deleteNote(index) {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    }

    function toggleComplete(index) {
      notes[index].completed = !notes[index].completed;
      saveNotes();
      renderNotes();
    }

    function viewNote(index) {
      localStorage.setItem("selectedNoteIndex", index);
      window.location.href = "note.html";
    }

    function renderNotes() {
      const container = document.getElementById("notesContainer");
      container.innerHTML = notes.map((note, index) => `
        <div class="note">
          <input type="checkbox" ${note.completed ? "checked" : ""} onclick="toggleComplete(${index})" />
          <h3 class="note-title ${note.completed ? 'completed' : ''}" onclick="viewNote(${index})">${note.title}</h3>
          <button onclick="deleteNote(${index})">🗑</button>
        </div>
      `).join("");
    }

    renderNotes();