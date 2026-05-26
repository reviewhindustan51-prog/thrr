document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // PDF Modal Logic
    window.openPdfModal = function(pdfUrl, title) {
        const modal = document.getElementById('pdf-modal');
        const iframe = document.getElementById('pdf-iframe');
        const titleEl = document.getElementById('pdf-modal-title');
        const dlLink = document.getElementById('pdf-download-link');
        if (modal && iframe && titleEl && dlLink) {
            titleEl.textContent = title || 'PDF Viewer';
            iframe.src = pdfUrl;
            dlLink.href = pdfUrl;
            modal.classList.remove('hidden');
        }
    };

    window.closePdfModal = function() {
        const modal = document.getElementById('pdf-modal');
        const iframe = document.getElementById('pdf-iframe');
        if (modal && iframe) {
            iframe.src = '';
            modal.classList.add('hidden');
        }
    };

    // Close modal on backdrop click or Escape key
    const pdfModal = document.getElementById('pdf-modal');
    if (pdfModal) {
        pdfModal.addEventListener('click', (e) => {
            if (e.target === pdfModal) closePdfModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePdfModal();
    });
});
