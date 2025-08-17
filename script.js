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
        "Haiii Gantengkuuu...",
        "Terimakasih karena kamu selalu membuat hari-hariku menjadi sangat ceria🥰",
        "Terimakasih karena kamu selalu membuat hidupku bahagia😘",
        "Aku ingin mengirimkan sebuah pesan untukmu...",
        "Maaf apabila pada pesan ini terdapat kesalahan kata, ketikan, dan ucapan",
        "Teruslah bersinar lebih terang dari bintang paling terang di angkasa, kamu sangatlah berharga dihidupku sayangku, teruslah menjadi sosok pemberani, penyabar, penyayang dan sosok baik hati dan murah senyum {tapi ke aku aja yaa ganteng☺} yang aku kenal, jangan pernah berubah. Satu hal yang harus kamu tau sayangku, aku sangat dan selalu menyayangimu sayangku, aku selalu dan sangat mencintaimu cintakuuu🩵. Teruslah berbahagia bersamaku didunia dan alam setelahnya, teruslah bersamaku selama-lamanya baik didunia maupun alam setelahnya",
        "Dan yang terpenting...",
        "Jangan pernah berhenti menjadi dirimu yang hebat! SAKTIYA YUDA PRADHIKA adalah sosok yang hebat🩵",
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