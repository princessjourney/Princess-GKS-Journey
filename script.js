// =========================
// Princess GKS Journey
// Version 1.0
// =========================

const checkboxes = document.querySelectorAll("input[type='checkbox']");

// Load data saat website dibuka
window.onload = function () {

    checkboxes.forEach((box, index) => {

        const saved = localStorage.getItem("task" + index);

        if (saved === "true") {
            box.checked = true;
        }

    });

    updateProgress();

}

// Simpan checklist
checkboxes.forEach((box, index) => {

    box.addEventListener("change", () => {

        localStorage.setItem("task" + index, box.checked);

        updateProgress();

    });

});

// Update Progress
function updateProgress(){

    let selesai = 0;

    checkboxes.forEach(box => {

        if(box.checked){
            selesai++;
        }

    });

    const persen = (selesai / checkboxes.length) * 100;

    document.querySelector("progress").
