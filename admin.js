document.addEventListener("DOMContentLoaded", () => {
    const actionSelect = document.getElementById("actionSelect");
    const addFormContainer = document.getElementById("addFormContainer");
    const addForm = document.getElementById("addProductForm");
    const imageInput = document.getElementById("productImage");
    const imagePreview = document.getElementById("imagePreview");

    actionSelect.addEventListener("change", () => {
        addFormContainer.style.display = actionSelect.value === "add" ? "block" : "none";
    });

    imageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("productTitle").value.trim();
        const description = document.getElementById("productDescription").value.trim();
        const stock = document.getElementById("productStock").value.trim();
        const image = document.getElementById("productImage").files[0];

        if (!title || !description || !stock || !image) {
            alert("Please fill all fields.");
            return;
        }

        if (isNaN(stock) || Number(stock) < 0) {
            alert("Stock must be a valid number.");
            return;
        }

        alert("Product added successfully! (Frontend only)");
        addForm.reset();
        imagePreview.style.display = "none";
    });
});

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    addForm.reset();
    imagePreview.style.display = "none";
    addFormContainer.style.display = "none";
    actionSelect.value = "";
});
