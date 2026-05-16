console.log("analysis.js dosyası çalıştı");

const ANALYSIS_API_BASE_URL = "http://localhost:8080/api";

const analysisSubmitBtn = document.getElementById("analysisSubmitBtn");

console.log("Buton bulundu mu:", analysisSubmitBtn);

if (analysisSubmitBtn) {
    analysisSubmitBtn.addEventListener("click", async function () {

        console.log("Analiz Et butonuna basıldı");

        const socialMediaElement = document.getElementById("socialMediaHours");
        const workElement = document.getElementById("workHours");
        const sleepElement = document.getElementById("sleepHours");

        console.log("socialMediaElement:", socialMediaElement);
        console.log("workElement:", workElement);
        console.log("sleepElement:", sleepElement);

        if (!socialMediaElement || !workElement || !sleepElement) {
            alert("Bazı input id değerleri eksik. Console'a bak.");
            return;
        }

        const socialMediaHours = Number(socialMediaElement.value);
        const workHours = Number(workElement.value);
        const sleepHours = Number(sleepElement.value);

        const selectedPlatform = document.querySelector('input[name="platform"]:checked');

        let gamingHours = 0;

        if (selectedPlatform && selectedPlatform.value === "oyun") {
            gamingHours = socialMediaHours;
        }

        const user = JSON.parse(localStorage.getItem("habitbalanceUser"));

        if (!user || !user.id) {
            alert("Analiz yapmadan önce giriş yapmalısınız.");
            window.location.href = "../pages/girisYap.html";
            return;
        }

        const requestBody = {
            userId: user.id,
            socialMediaHours: socialMediaHours,
            gamingHours: gamingHours,
            workHours: workHours,
            sleepHours: sleepHours
        };

        console.log("Backend'e gönderilen veri:", requestBody);

        try {
            const response = await fetch(`${ANALYSIS_API_BASE_URL}/analysis`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            console.log("Backend'den gelen cevap:", data);

            localStorage.setItem("lastAnalysisId", data.id);

            alert("Analiz kaydedildi.");
            window.location.href = "../pages/dashboard.html";

        } catch (error) {
            console.error("Analiz gönderme hatası:", error);
            alert("Analiz gönderilirken hata oluştu.");
        }
    });
}