// Fungsi untuk menampilkan halaman tertentu
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
  
    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
    }
  }
  
  // Fungsi untuk memilih produk dan pindah ke halaman transaksi
  function beliProduk(namaProduk, harga) {
    showPage('transaksi');
    document.getElementById('produkTransaksi').value = namaProduk;
    document.getElementById('jumlah').value = 1;
    document.getElementById('namaPembeli').focus();
    // Simpan harga untuk struk nanti
    document.getElementById('produkTransaksi').dataset.harga = harga;
  }
  
  // Fungsi untuk membuat pesanan dan menampilkan invoice
  function buatPesanan() {
    const nama = document.getElementById('namaPembeli').value.trim();
    const produk = document.getElementById('produkTransaksi').value.trim();
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const alamat = document.getElementById('alamat').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Ambil harga dari dataset
    let hargaPerUnit = parseInt(document.getElementById('produkTransaksi').dataset.harga || 0);
  
    if (!nama || !produk || !jumlah || !alamat || !email) {
      alert('Mohon isi semua data dengan lengkap.');
      return false;
    }
  
    const total = hargaPerUnit * jumlah;
  
    document.getElementById('invoiceArea').innerHTML = `
      <h3>Invoice Pesanan</h3>
      <p><strong>Nama Pembeli:</strong> ${nama}</p>
      <p><strong>Produk:</strong> ${produk}</p>
      <p><strong>Jumlah:</strong> ${jumlah}</p>
      <p><strong>Alamat:</strong> ${alamat}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p><strong>Harga Satuan:</strong> Rp ${hargaPerUnit.toLocaleString()}</p>
      <p><strong>Total Harga:</strong> Rp ${total.toLocaleString()}</p>
      <p>Terima kasih sudah berbelanja di toko kami!</p>
    `;
  
    showPage('struk');
    document.getElementById('formTransaksi').reset();
    return false;
  }
  