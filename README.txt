NINJA-GLITCH-FINAL
==================
Website mobile-first bertema cyber-futuristic. Statis (HTML5 + CSS3 + Vanilla JS),
tanpa backend, tanpa Node.js, semua path relatif.

ALUR
  index.html (Intro) -> login.html (Login -> Fingerprint -> Ninja Loading) -> dashboard.html

MENJALANKAN
  Jalankan lewat server statis, karena halaman dashboard dimuat dengan fetch():
    - Vercel : deploy folder ini sebagai Static Project (tanpa build command)
    - Lokal  : python -m http.server 8000   lalu buka http://localhost:8000
  (Membuka langsung dengan file:// akan membuat modul dashboard gagal dimuat.)

STRUKTUR
  index.html, login.html, dashboard.html
  style.css, responsive.css
  app.js, animation.js, fingerprint.js, navigation.js, storage.js
  pages/    home, glitch, ninja, tools, lab, rat, history, settings
  assets/   images (webp), icons (svg), effects (particles.js, scanlines.css)

KEAMANAN
  Semua fitur "cyber" adalah SIMULASI VISUAL LOKAL.
  Tidak ada serangan jaringan, malware, RAT sungguhan, pencurian kredensial,
  kontrol perangkat jarak jauh, atau akses ke perangkat/akun lain.
  RAT SIM hanya menampilkan perangkat, koneksi, dan log FIKTIF.
  Login hanya lokal di browser; Access Key tidak disimpan.
  Data lokal (codename, riwayat, pengaturan) memakai localStorage dan dapat
  dihapus lewat Settings > Reset Local Data.

DEVELOPER CREDITS
  DEVELOPER Zakss
  DEVELOPER DAKA
  DEVELOPER NATHAN
