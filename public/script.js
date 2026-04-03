// ARR Official REST API — script.js

document.addEventListener('DOMContentLoaded', function () {

  // ─── Clock ───
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

  // ─── Copy Dana ───
  document.getElementById('copyDanaBtn').addEventListener('click', function () {
    navigator.clipboard.writeText('085262562560').then(() => {
      showToast('✓ Nomor Dana disalin');
      this.textContent = 'Tersalin!';
      setTimeout(() => {
        this.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Salin Nomor`;
      }, 2000);
    });
  });

});

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
