const form = document.getElementById('barangForm');
    const table = document.getElementById('barangTable').getElementsByTagName('tbody')[0];
    let no = 1;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value;
      const keterangan = document.getElementById('keterangan').value;
      const qty = parseInt(document.getElementById('qty').value);
      const harga = parseFloat(document.getElementById('harga').value);
      const total = qty * harga;

      const row = table.insertRow();

      row.innerHTML = `
        <td>${no++}</td>
        <td>${nama}</td>
        <td>${keterangan}</td>
        <td>${qty}</td>
        <td>${harga.toFixed(2)}</td>
        <td>${total.toFixed(2)}</td>
      `;

      // Reset form setelah submit
      form.reset();
    });

    