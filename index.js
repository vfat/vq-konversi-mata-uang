
function konversiMataUang(angka, simbolMataUang, lokal = 'id-ID') {
    if (typeof angka !== 'number' || isNaN(angka)) {
      throw new Error('Parameter pertama harus berupa angka yang valid.');
    }
  
    if (typeof simbolMataUang !== 'string' || simbolMataUang.trim() === '') {
      throw new Error('Parameter kedua harus berupa string yang valid.');
    }
  
    // Format angka sesuai dengan lokal yang diberikan
    const formattedNumber = angka.toLocaleString(lokal, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    // Buat simbol mata uang sesuai dengan konvensi penulisan
    let symbolFormatted = simbolMataUang.trim().toUpperCase();
  
    // Jika simbol adalah 'rp', formatnya 'Rp.' (dengan titik)
    if (symbolFormatted === 'RP') {
      symbolFormatted = 'Rp.';
    } else {
      symbolFormatted += '.';
    }
  
    // Gabungkan simbol mata uang dengan angka yang telah diformat
    const result = `${symbolFormatted} ${formattedNumber}`;
  
    return result;
  }
  
  module.exports = konversiMataUang;
  