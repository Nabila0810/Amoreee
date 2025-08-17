document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang dibutuhkan
    const startButton = document.getElementById('startButton');
    const welcomeScreen = document.getElementById('welcome-screen');
    const messageScreen = document.getElementById('message-screen');
    const finalScreen = document.getElementById('final-screen');
    const rocket = document.getElementById('rocket');
    const messageText = document.getElementById('message-text');
    const nextButton = document.getElementById('nextButton');
    const backgroundMusic = document.getElementById('background-music');

    // === KUSTOMISASI DI SINI ===
    // Ganti pesan-pesan di bawah ini sesuai keinginanmu
    const messages = [
        "Transmisi dimulai...",
        "3...",
        "2...",
        "1...",
        "Mendeteksi sinyal ulang tahun dari planet Bumi.",
        "Seseorang yang spesial sedang merayakan hari jadinya hari ini.",
        "Orang itu adalah kamu!",
        "Aku ingin mengirimkan sebuah pesan lintas galaksi untukmu...",
        "Semoga hari ini menjadi awal dari petualangan baru yang luar biasa.",
        "Teruslah bersinar lebih terang dari bintang paling terang di angkasa.",
        "Siap menerima hadiahmu?"
    ];
    // ============================

    let currentMessageIndex = 0;

    // Fungsi untuk memulai misi
    startButton.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        messageScreen.classList.remove('hidden');
        
        // Putar musik (seringkali butuh interaksi user dulu)
        backgroundMusic.play();

        // Tampilkan roket dan luncurkan
        rocket.classList.remove('hidden');
        setTimeout(() => {
            rocket.classList.add('fly-in');
        }, 100); // Tunggu sebentar sebelum meluncur

        // Mulai tampilkan pesan setelah animasi roket
        setTimeout(displayNextMessage, 1500);
    });

    // Fungsi untuk menampilkan pesan selanjutnya
    nextButton.addEventListener('click', displayNextMessage);

    function displayNextMessage() {
        if (currentMessageIndex < messages.length) {
            typeWriter(messages[currentMessageIndex], 0);
            currentMessageIndex++;
            nextButton.classList.add('hidden'); // Sembunyikan tombol saat mengetik
        } else {
            // Semua pesan sudah ditampilkan, tunjukkan layar akhir
            messageScreen.classList.add('hidden');
            finalScreen.classList.remove('hidden');
        }
    }

    // Fungsi untuk efek ketikan
    function typeWriter(text, i) {
        if (i < text.length) {
            messageText.innerHTML = text.substring(0, i + 1) + '<span class="cursor">_</span>';
            setTimeout(() => {
                typeWriter(text, i + 1)
            }, 60); // Kecepatan ketikan (ms)
        } else {
            messageText.innerHTML = text; // Hapus kursor setelah selesai
            nextButton.classList.remove('hidden'); // Tampilkan tombol "Lanjut"
        }
    }
});