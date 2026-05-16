const API_BASE_URL = "http://localhost:8080/api";

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("registerFullName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            alert(data.message);

            if (data.message.includes("başarılı")) {
                window.location.href = "../pages/girisYap.html";
            }

        } catch (error) {
            alert("Kayıt sırasında hata oluştu.");
            console.error(error);
        }
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            alert(data.message);

            if (data.message.includes("başarılı")) {
                localStorage.setItem("habitbalanceUser", JSON.stringify(data));
                window.location.href = "../pages/anasayfa.html";
            }

        } catch (error) {
            alert("Giriş sırasında hata oluştu.");
            console.error(error);
        }
    });
}