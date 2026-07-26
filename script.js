// Fungsi utama navigasi SPA
function navigate(sectionId) {
    // 1. Sembunyikan semua section yang memiliki kelas 'page-section'
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // 2. Tampilkan section yang dipilih berdasarkan ID-nya
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // 3. (Opsional) Simpan ke history browser agar tombol back/forward browser bekerja
    window.location.hash = sectionId;
}

// Menangani ketika halaman baru dibuka atau tombol Back/Forward browser diklik
window.addEventListener('DOMContentLoaded', () => {
    // Ambil hash dari URL (contoh: #about)
    const currentHash = window.location.hash.replace('#', '');
    
    if (currentHash) {
        navigate(currentHash);
    } else {
        navigate('home'); // Default ke halaman home
    }
});