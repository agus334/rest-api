// ARR Official REST API — script.js

document.addEventListener('DOMContentLoaded', function () {

  // ─── Popup Welcome ───
  const popup = document.getElementById('popup');
  const backdrop = document.getElementById('popup-backdrop');

  setTimeout(() => {
    popup.classList.add('active');
    backdrop.classList.add('active');
  }, 200);

  document.getElementById('close-popup').addEventListener('click', function () {
    closeModal('popup', 'popup-backdrop');
  });

  // ─── Copy Code ───
  document.getElementById('copyButton').addEventListener('click', function () {
    const text = document.getElementById('codeBlock').innerText;
    navigator.clipboard.writeText(text).then(() => {
      showToast('✓ Kode berhasil disalin');
      this.textContent = 'Copied!';
      setTimeout(() => {
        this.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy`;
      }, 2000);
    });
  });

  // ─── Clock & Date ───
  function updateTime() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('jam').textContent = `${h}:${m}:${s}`;
  }

  function updateDate() {
    const now = new Date();
    const d = now.getDate().toString().padStart(2, '0');
    const mo = (now.getMonth() + 1).toString().padStart(2, '0');
    const y = now.getFullYear();
    document.getElementById('tanggal').textContent = `${d}/${mo}/${y}`;
  }

  updateTime();
  updateDate();
  setInterval(updateTime, 1000);

});

// ─── Donasi Modal ───
function openDonasi() {
  document.getElementById('donasi-modal').classList.add('active');
  document.getElementById('donasi-backdrop').classList.add('active');
}

function closeDonasi() {
  closeModal('donasi-modal', 'donasi-backdrop');
}

function closeModal(modalId, backdropId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(backdropId);
  modal.classList.remove('active');
  setTimeout(() => backdrop.classList.remove('active'), 150);
}

// ─── Copy Dana ───
function copyDana() {
  navigator.clipboard.writeText('085262562560').then(() => {
    showToast('✓ Nomor Dana disalin');
  });
}

// ─── Accordion Toggle ───
function toggleAcc(accId) {
  const acc = document.getElementById(accId);
  const body = acc.querySelector('.acc-body');
  const isOpen = acc.classList.contains('open');

  if (isOpen) {
    body.classList.remove('open');
    acc.classList.remove('open');
  } else {
    body.classList.add('open');
    acc.classList.add('open');
  }
}

// ─── Toast ───
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}
