📊 HabitBalance: Dijital Alışkanlık Analiz Sistemi
---
HabitBalance, modern çağın en büyük problemlerinden biri olan ekran bağımlılığına çözüm sunmak ve kullanıcıların dijital farkındalığını artırmak amacıyla geliştirilmiş tam katmanlı (Full-Stack) bir web platformudur. Kullanıcıların günlük dijital cihaz ve sosyal medya kullanım alışkanlıklarını analiz ederek kişiselleştirilmiş veriler ve grafik destekli analiz panelleri sunar.
---
🚀 Öne Çıkan Özellikler
Güvenli Veri Altyapısı: 
  Kullanıcı verileri ve şifreleri, arka planda güvenli şifreleme algoritmalarıyla işlenerek ilişkisel veritabanında düzenli bir şekilde saklanır.

Esnek ve Test Edilebilir API Mimarisi: 
  Backend servisleri, standartlara uygun olarak kurgulanmış ve Swagger UI üzerinden tamamen dökümante edilmiş modüler bir API yapısına sahiptir.

Geliştirilmiş Dashboard:
  Elde edilen kullanım verileri; günlük ekran süresi, sosyal medya dağılımı, çalışma verimliliği ve dijital denge skoru gibi parametrelerle zenginleştirilerek interaktif grafiklerle (Çizgi, Pasta ve Sütun grafikleri) görselleştirilir.

Zaman İçinde Takip:
  Kullanıcıların haftalık ve aylık gelişim trendlerini takip ederek zaman içindeki alışkanlık değişimlerini gözlemlemesine olanak tanır.

Kişiselleştirilmiş Profil Yönetimi: 
  Kullanıcılar profil bilgilerini güncelleyebilir, güvenlik ayarlarını (şifre değiştirme/sıfırlama) yönetebilir ve kendilerine özel hedefler belirleyebilir.

🛠️ Kullanılan Teknolojiler
---
  Backend & Veritabanı
Dil: Java

Framework: Spring Boot

Veritabanı: MySQL

API Dökümantasyonu: Swagger UI

  Frontend
Temel Yapı: HTML5, CSS3, JavaScript (ES6+)

UI Framework: Bootstrap 5

Grafik Kütüphaneleri: Grafik veri görselleştirmeleri için dinamik JS kütüphaneleri

  Geliştirme Araçları
IDE / Editör: Visual Studio Code / IntelliJ IDEA

Sürüm Kontrolü: Git & GitHub
---
💻 Geliştirme Ortamı Kurulum Adımları
---
Tüm takım üyelerinin ve projeye katkıda bulunmak isteyen geliştiricilerin platformu yerel bilgisayarlarında (local environment) sorunsuz çalıştırabilmesi için aşağıdaki adımların sırasıyla izlenmesi gerekmektedir:

1. Projeyi Klonlama
Terminal veya komut satırını açarak projeyi bilgisayarınıza indirin:

Bash
git clone https://github.com/Elldiana/dijital_aliskanlik_analiz_sistemi.git
cd dijital_aliskanlik_analiz_sistemi
2. Veritabanı Yapılandırması
Yerel MySQL sunucunuzda (XAMPP, WampServer veya MySQL Workbench üzerinden) habitbalance adında yeni bir veritabanı (database) oluşturun.

Arka plan projesinin içerisindeki src/main/resources/application.properties (veya .yml) dosyasını açarak veritabanı kullanıcı adı ve şifrenizi güncelleyin:

Properties
spring.datasource.url=jdbc:mysql://localhost:3306/habitbalance?useSSL=false&serverTimezone=UTC
spring.datasource.username=PROJE_VERITABANI_KULLANICI_ADINIZ
spring.datasource.password=PROJE_VERITABANI_SIFRENIZ
spring.jpa.hibernate.ddl-auto=update
3. Backend (Arka Plan) Servisinin Çalıştırılması
Projenin backend klasörünü favori IDE'nizle (VS Code veya IntelliJ IDEA) açın.

Gerekli Maven bağımlılıklarının yüklenmesini bekleyin.

Ana Spring Boot uygulama dosyasını bulun ve çalıştırın (Run).

Servisin varsayılan olarak http://localhost:8080 portunda ayağa kalktığından ve Swagger dökümantasyonuna erişilebildiğinden emin olun.

4. Frontend (Ön Yüz) Çalıştırılması
Ön yüz dosyalarının (HTML, CSS, JS) bulunduğu dizini VS Code ile açın.

Sayfalar arası yönlendirmelerin ve dinamik yapıların sorunsuz çalışması için projeyi bir yerel sunucu ile çalıştırın. (VS Code kullanıyorsanız Live Server eklentisini kurup sağ alt köşedeki "Go Live" butonuna basabilirsiniz).

Tarayıcınızda otomatik olarak http://localhost:3000 (veya Live Server portu olan http://127.0.0.1:5500) adresi açılacaktır.

⚠️ Önemli Not: API isteklerinin doğru adrese iletilmesi için frontend içerisindeki script dosyalarında yer alan base URL tanımının, Spring Boot'un çalıştığı port ile (http://localhost:8080) eşleştiğinden emin olun.
---
👥 Takım Üyeleri:
---
Selin Dinsever
Furkan Arslan 
Eldiana Belekova
Batuhan Mavituna
Selin - Veri Analizi Modülleri & Grafik Görselleştirme Altyapısı

Diana - Kullanıcı Deneyimi (UX), Test Süreçleri & Dökümantasyon
