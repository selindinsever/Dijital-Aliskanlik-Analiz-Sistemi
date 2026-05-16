document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("habitbalanceUser"));

    if (!user) {
        alert("Profil sayfasını görüntülemek için giriş yapmalısınız.");
        window.location.href = "../pages/girisYap.html";
        return;
    }

    const profileFullName = document.getElementById("profileFullName");
    const profileEmail = document.getElementById("profileEmail");

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");

    if (profileFullName) {
        profileFullName.textContent = user.fullName || "Kullanıcı";
    }

    if (profileEmail) {
        profileEmail.textContent = user.email || "email bulunamadı";
    }

    if (nameInput) {
        nameInput.value = user.fullName || "";
    }

    if (emailInput) {
        emailInput.value = user.email || "";
    }
});