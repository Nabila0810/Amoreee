document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang dibutuhkan
    const startButton = document.getElementById('startButton');
    const welcomeScreen = document.getElementById('welcome-screen');
    const messageScreen = document.getElementById('message-screen');
    const finalScreen = document.getElementById('final-screen');
    const messageText = document.getElementById('message-text');
    const nextButton = document.getElementById('nextButton');
    const backgroundMusic = document.getElementById('background-music');

    // === KUSTOMISASI PESAN DI SINI ===
    const messages = [
        "Transmisi dimulai...",
        "3...",
        "2...",
        "1...",
        "Mendeteksi sinyal ulang tahun dari planet Bumi.",
        "Seseorang yang spesial sedang merayakan hari jadinya hari ini.",
        "Orang itu adalah kamu, Nabila!",
        "Aku ingin mengirimkan sebuah pesan lintas galaksi untukmu...",
        "Semoga hari ini menjadi awal dari petualangan baru yang luar biasa.",
        "Teruslah bersinar lebih terang dari bintang paling terang di angkasa.",
        "Dan yang terpenting...",
        "Jangan pernah berhenti menjadi dirimu yang hebat!",
        "Siap menerima hadiahmu?"
    ];
    // ============================

    let currentMessageIndex = 0;

    // Fungsi untuk memulai misi
    startButton.addEventListener('click', () => {
        // Efek fade out untuk layar pembuka
        welcomeScreen.style.transition = 'opacity 1s ease';
        welcomeScreen.style.opacity = '0';

        // Putar musik
        backgroundMusic.play().catch(error => {
            console.log("Autoplay musik dicegah oleh browser. Diperlukan interaksi pengguna.");
        });

        setTimeout(() => {
            welcomeScreen.classList.add('hidden');
            messageScreen.classList.remove('hidden');
            messageScreen.style.opacity = '0';
            setTimeout(() => {
                messageScreen.style.transition = 'opacity 1s ease';
                messageScreen.style.opacity = '1';
                displayNextMessage();
            }, 100);
        }, 1000); // Tunggu animasi fade out selesai
    });

    // Fungsi untuk menampilkan pesan selanjutnya
    nextButton.addEventListener('click', displayNextMessage);

    function displayNextMessage() {
        if (currentMessageIndex < messages.length) {
            nextButton.classList.add('hidden'); // Sembunyikan tombol saat mengetik
            typeWriter(messages[currentMessageIndex], 0);
            currentMessageIndex++;
        } else {
            // Semua pesan sudah ditampilkan, tunjukkan layar akhir
            messageScreen.style.transition = 'opacity 1s ease';
            messageScreen.style.opacity = '0';
            setTimeout(() => {
                messageScreen.classList.add('hidden');
                finalScreen.classList.remove('hidden');
                finalScreen.style.opacity = '0';
                setTimeout(() => {
                    finalScreen.style.transition = 'opacity 1s ease';
                    finalScreen.style.opacity = '1';
                }, 100);
            }, 1000);
        }
    }

    // Fungsi untuk efek ketikan
    function typeWriter(text, i) {
        if (i < text.length) {
            messageText.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            setTimeout(() => {
                typeWriter(text, i + 1)
            }, 50); // Kecepatan ketikan (ms)
        } else {
            messageText.innerHTML = text; // Hapus kursor setelah selesai
            // Tombol "Lanjut" hanya muncul jika bukan pesan terakhir
            if (currentMessageIndex < messages.length) {
                nextButton.classList.remove('hidden');
            } else {
                // Ini pesan terakhir, otomatis lanjut ke layar hadiah setelah jeda
                setTimeout(displayNextMessage, 2000);
            }
        }
    }
});