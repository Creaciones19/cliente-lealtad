 
  const scanBtn = document.getElementById("scanBtn");
  const scanModal = document.getElementById("scanModal");
  const statusDiv = document.getElementById("status");

  let qrScanner = null;

  scanBtn.addEventListener("click", async () => {
    scanModal.style.display = "flex";

    if (qrScanner) {
      await qrScanner.stop();
      qrScanner.clear();
      qrScanner = null;
    }

    qrScanner = new Html5Qrcode("reader");

    qrScanner.start(
      { facingMode: "environment" }, // ✅ funciona en móvil y PC
      {
        fps: 10,
        qrbox: 220
      },
      (qrText) => {
        cerrarEscaner();
       registrarVisita(qrText);

      },
      () => {
        // errores normales mientras busca QR (no hacer nada)
      }
    );
  });

  async function cerrarEscaner() {
    if (qrScanner) {
      await qrScanner.stop();
      qrScanner.clear();
      qrScanner = null;
    }
    scanModal.style.display = "none";
  }
