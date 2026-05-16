const DASHBOARD_API_BASE_URL = "http://localhost:8080/api";

document.addEventListener("DOMContentLoaded", async function () {
    const user = JSON.parse(localStorage.getItem("habitbalanceUser"));

    if (!user || !user.id) {
        alert("Dashboard sayfasını görüntülemek için giriş yapmalısınız.");
        window.location.href = "../pages/girisYap.html";
        return;
    }

    await loadDashboardData(user.id);
});

async function loadDashboardData(userId) {
    try {
        const response = await fetch(`${DASHBOARD_API_BASE_URL}/dashboard/charts/${userId}`);

        if (!response.ok) {
            throw new Error("Dashboard verileri alınamadı.");
        }

        const analyses = await response.json();

        console.log("Bu kullanıcıya ait dashboard verileri:", analyses);

        if (!analyses || analyses.length === 0) {
            console.log("Bu kullanıcı için henüz analiz verisi yok.");
            return;
        }

        const latest = analyses[analyses.length - 1];

        updateDashboardCards(latest);
        createDashboardCharts(analyses, latest);

    } catch (error) {
        console.error("Dashboard veri hatası:", error);
    }
}

function updateDashboardCards(latest) {
    const screenTimeEl = document.getElementById("dashboardScreenTime");
    const socialMediaEl = document.getElementById("dashboardSocialMedia");
    const productivityEl = document.getElementById("dashboardProductivity");
    const digitalScoreEl = document.getElementById("dashboardDigitalScore");

    const socialMediaHours = Number(latest.socialMediaHours || 0);
    const gamingHours = Number(latest.gamingHours || 0);
    const workHours = Number(latest.workHours || 0);
    const productivityScore = Number(latest.productivityScore || 0);
    const digitalBalanceScore = Number(latest.digitalBalanceScore || 0);

    const totalScreenTime = socialMediaHours + gamingHours + workHours;

    if (screenTimeEl) {
        screenTimeEl.textContent = `${totalScreenTime}sa`;
    }

    if (socialMediaEl) {
        socialMediaEl.textContent = `${socialMediaHours}sa`;
    }

    if (productivityEl) {
        productivityEl.textContent = `%${productivityScore}`;
    }

    if (digitalScoreEl) {
        digitalScoreEl.textContent = `${digitalBalanceScore}/100`;
    }
}

function createDashboardCharts(analyses, latest) {
    const labels = analyses.map((item, index) => `Analiz ${index + 1}`);

    const totalUsageData = analyses.map(item =>
        Number(item.socialMediaHours || 0) +
        Number(item.gamingHours || 0) +
        Number(item.workHours || 0)
    );

    const productivityData = analyses.map(item =>
        Number(item.productivityScore || 0)
    );

    const digitalBalanceData = analyses.map(item =>
        Number(item.digitalBalanceScore || 0)
    );

    createWeeklyUsageChart(labels, totalUsageData);
    createTodayDistributionChart(latest);
    createMonthlyTrendChart(labels, productivityData, digitalBalanceData);
}

function createWeeklyUsageChart(labels, totalUsageData) {
    const canvas = document.getElementById("weeklyUsageChart");

    if (!canvas) return;

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Toplam Kullanım Saati",
                    data: totalUsageData,
                    backgroundColor: "rgba(108, 99, 255, 0.45)",
                    borderColor: "rgba(108, 99, 255, 1)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function createTodayDistributionChart(latest) {
    const canvas = document.getElementById("todayDistributionChart");

    if (!canvas) return;

    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: ["Sosyal Medya", "Oyun", "Çalışma"],
            datasets: [
                {
                    label: "Bugünkü Dağılım",
                    data: [
                        Number(latest.socialMediaHours || 0),
                        Number(latest.gamingHours || 0),
                        Number(latest.workHours || 0)
                    ],
                    backgroundColor: [
                        "rgba(108, 99, 255, 0.55)",
                        "rgba(255, 82, 82, 0.55)",
                        "rgba(56, 178, 172, 0.55)"
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function createMonthlyTrendChart(labels, productivityData, digitalBalanceData) {
    const canvas = document.getElementById("monthlyTrendChart");

    if (!canvas) return;

    new Chart(canvas, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Çalışma Verimliliği",
                    data: productivityData,
                    borderColor: "rgba(108, 99, 255, 1)",
                    backgroundColor: "rgba(108, 99, 255, 0.15)",
                    tension: 0.3
                },
                {
                    label: "Dijital Denge Skoru",
                    data: digitalBalanceData,
                    borderColor: "rgba(56, 178, 172, 1)",
                    backgroundColor: "rgba(56, 178, 172, 0.15)",
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}