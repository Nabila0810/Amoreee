document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang dibutuhkan
    const startButton = document.getElementById('startButton');
    const welcomeScreen = document.getElementById('welcome-screen');
    const messageScreen = document.getElementById('message-screen');
    const finalScreen = document.getElementById('final-screen');
    const messageText = document.getElementById('message-text');
    const backgroundMusic = document.getElementById('background-music');
    // const nextButton = document.getElementById('nextButton'); // <<< BARIS INI DIHAPUS, karena tombol tidak dipakai lagi

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

    let currentMessageIndex = 0;

    // Fungsi untuk memulai misi
    startButton.addEventListener('click', () => {
        welcomeScreen.style.transition = 'opacity 1s ease';
        welcomeScreen.style.opacity = '0';

        backgroundMusic.play().catch(error => {
            console.log("Autoplay musik dicegah oleh browser.");
        });

        setTimeout(() => {
            welcomeScreen.classList.add('hidden');
            messageScreen.classList.remove('hidden');
            messageScreen.style.opacity = '0';
            setTimeout(() => {
                messageScreen.style.transition = 'opacity 1s ease';
                messageScreen.style.opacity = '1';
                displayNextMessage(); // Memulai rangkaian pesan otomatis
            }, 100);
        }, 1000);
    });

    // nextButton.addEventListener('click', displayNextMessage); // <<< BARIS INI DIHAPUS, tidak perlu event click lagi

    function displayNextMessage() {
        if (currentMessageIndex < messages.length) {
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
            }, 50);
        } else {
            messageText.innerHTML = text; // Hapus kursor setelah selesai
            
            // ===================================================================
            // PERUBAHAN UTAMA DI SINI
            // Setelah pesan selesai diketik, tunggu 2 detik lalu panggil pesan berikutnya secara otomatis.
            setTimeout(() => {
                displayNextMessage();
            }, 2000); // Jeda 2000 milidetik = 2 detik
            // ===================================================================
        }
    }
});