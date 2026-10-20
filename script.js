// PERBAIKAN: Mengubah tanda '-' menjadi '=' dan memperbaiki typo 'documenr' menjadi 'document'
// Langkah ini berfungsi untuk memilih tombol di HTML berdasarkan ID 'sapabutton'
const tombolsapa = document.getElementById('sapabutton');

// Menambahkan 'event listener' agar tombol merespons ketika dilakukan aksi klik
tombolsapa.addEventListener('click', function() {
    
    // Menampilkan pesan pop-up saat tombol diklik
    alert('Halo! Terima kasih sudah datang');
    
});
