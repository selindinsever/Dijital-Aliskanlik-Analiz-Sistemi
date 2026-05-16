// ==========================================
// 1. MOBİL MENÜ KONTROLÜ (HER SAYFADA ÇALIŞIR)
// ==========================================
const menuToggleBtn = document.getElementById('menuToggleBtn');
const sidebar = document.getElementById('sidebar');

if (menuToggleBtn && sidebar) {
    menuToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1000) {
            if (!sidebar.contains(e.target) && !menuToggleBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
}

// ==========================================
// 2. PROFİL FOTOĞRAFI İŞLEMLERİ (SADECE PROFİL SAYFASINDA ÇALIŞIR)
// ==========================================
const editPhotoBtn = document.getElementById('editPhotoBtn');

if (editPhotoBtn) {
    const profileImage = document.getElementById('profileImage');
    const photoMenu = document.getElementById('photoMenu');
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const removePhotoBtn = document.getElementById('removePhotoBtn');
    const fileInput = document.getElementById('fileInput');
    const defaultAvatar = 'ava.jpg';

    editPhotoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        photoMenu.style.display = photoMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        photoMenu.style.display = 'none';
    });

    removePhotoBtn.addEventListener('click', () => {
        profileImage.src = defaultAvatar;
        fileInput.value = '';
    });

    changePhotoBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                profileImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}


// ==========================================
// 3. PROFİL FORMU VE DOĞRULAMA (SADECE PROFİL SAYFASINDA ÇALIŞIR)
// ==========================================
const saveBtn = document.getElementById('saveBtn');

if (saveBtn) {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passInput = document.getElementById('passInput');
    const passConfirmInput = document.getElementById('passConfirmInput');
    const statusMessage = document.getElementById('formStatusMessage');
    const notificationToggle = document.getElementById('notificationToggle');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const passConfirmError = document.getElementById('passConfirmError');

    function sanitizeInput(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML.trim();
    }

    function showError(inputEl, errorEl, message) {
        if (inputEl) inputEl.classList.add('error-border');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('active');
        }
    }

    function clearError(inputEl, errorEl) {
        if (inputEl) inputEl.classList.remove('error-border');
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.classList.remove('active');
        }
    }

    nameInput.addEventListener('input', () => {
        if (!nameInput.value.trim()) {
            showError(nameInput, nameError, 'Ad Soyad alanı boş bırakılamaz.');
        } else {
            clearError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, emailError, 'Geçerli bir e-posta adresi giriniz.');
        } else {
            clearError(emailInput, emailError);
        }
    });

    passInput.addEventListener('input', () => {
        if (passInput.value.length > 0 && passInput.value.length < 8) {
            showError(passInput, passError, 'Şifre en az 8 karakter olmalıdır.');
        } else {
            clearError(passInput, passError);
        }
        if (passConfirmInput.value.length > 0) checkPasswordsMatch();
    });

    passConfirmInput.addEventListener('input', checkPasswordsMatch);

    function checkPasswordsMatch() {
        if (passConfirmInput.value.length > 0 && passInput.value !== passConfirmInput.value) {
            showError(passConfirmInput, passConfirmError, 'Şifreler birbiriyle eşleşmiyor.');
        } else {
            clearError(passConfirmInput, passConfirmError);
        }
    }

    saveBtn.addEventListener('click', () => {
        statusMessage.innerHTML = '';
        statusMessage.className = 'hb-settings-status-message';

        nameInput.dispatchEvent(new Event('input'));

        if (!emailInput.value.trim()) {
            showError(emailInput, emailError, 'E-posta boş bırakılamaz.');
        } else {
            emailInput.dispatchEvent(new Event('input'));
        }

        const hasErrors = document.querySelectorAll('.hb-settings-input-error.active').length > 0;

        if (hasErrors) {
            statusMessage.innerHTML = 'Lütfen formdaki hataları düzeltin.';
            statusMessage.classList.add('error-text');
            return;
        }

        const formData = {
            adSoyad: sanitizeInput(nameInput.value),
            email: sanitizeInput(emailInput.value),
            yeniSifre: passInput.value || null,
            bildirimAcik: notificationToggle ? notificationToggle.checked : false,
            fotoGuncellendiMi: fileInput && fileInput.files.length > 0 ? true : false,
            fotoKaldirildiMi: profileImage.src.includes('ava.jpg')
        };

        statusMessage.innerHTML = 'Değişiklikler başarıyla kaydedildi!';
        statusMessage.classList.add('success-text');

        console.log('Backend Sistemine Gönderilecek JSON Paketi:', JSON.stringify(formData, null, 2));
    });
}

// ==========================================
// 4. BAĞLI CİHAZLAR YÖNETİMİ (SADECE PROFİL SAYFASINDA ÇALIŞIR)
// ==========================================
const addDeviceBtn = document.querySelector('.hb-settings-btn-add-device');
const deleteButtons = document.querySelectorAll('.hb-settings-btn-delete');

if (addDeviceBtn || deleteButtons.length > 0) {
    const msgBox = document.getElementById('formStatusMessage');

    // 1. Cihaz Silme İşlemi
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Tıklanan butonun kapsayıcısı olan cihaz satırını bul
            const deviceItem = this.closest('.hb-settings-device-item');
            if (deviceItem) {
                // Şık bir animasyonla silinmesi için opacity düşür
                deviceItem.style.transition = "opacity 0.3s ease";
                deviceItem.style.opacity = "0";

                // Animasyon bitince elementi HTML'den tamamen kaldır
                setTimeout(() => {
                    deviceItem.remove();
                }, 300);
            }
        });
    });

    // 2. Yeni Cihaz Ekle Butonu İşlemi
    if (addDeviceBtn && msgBox) {
        addDeviceBtn.addEventListener('click', () => {
            msgBox.innerHTML = 'Yeni bir cihaz eklemek için lütfen o cihazdan hesabınıza giriş yapın.';
            msgBox.className = 'hb-settings-status-message'; // Eski uyarıları temizle
            msgBox.classList.add('success-text'); // Yeşil başarı rengini ekle
        });
    }
}

// ==========================================
// 5. ÜST BAR PROFİL MENÜSÜ VE ÇIKIŞ İŞLEMİ
// ==========================================
const topbarAvatar = document.getElementById("topbarAvatar");
const userDropdown = document.getElementById("userDropdown");
const logoutBtn = document.getElementById("logoutBtn");

if (topbarAvatar && userDropdown) {
    topbarAvatar.addEventListener("click", function (event) {
        event.stopPropagation();
        userDropdown.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
        if (!userDropdown.contains(event.target) && !topbarAvatar.contains(event.target)) {
            userDropdown.classList.remove("open");
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("habitbalanceUser");
        localStorage.removeItem("lastAnalysisId");

        alert("Çıkış yapıldı.");
        window.location.href = "../pages/girisYap.html";
    });
}





