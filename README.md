# Konversi Mata Uang

Package untuk mengonversi angka menjadi format mata uang sesuai simbol yang diberikan.

## Instalasi

```bash
npm install vq-konversi-mata-uang
```

## Penggunaan

Berikut adalah cara menggunakan package ini di dalam kode JavaScript atau Node.js Anda:

### 1. Import atau Require Package

Untuk menggunakan package ini, Anda harus mengimpornya terlebih dahulu ke dalam proyek Anda. Jika menggunakan Node.js, Anda bisa menggunakan `require()` seperti contoh di bawah ini.

### 2. Mengonversi Angka ke Format Mata Uang

```javascript
const konversiMataUang = require('vq-konversi-mata-uang');

// Contoh 1: Mengonversi angka ke mata uang Rupiah
let hasil = konversiMataUang(200.22, 'rp');
console.log(hasil); // Output: 'Rp. 200,22'

// Contoh 2: Mengonversi angka ke mata uang Dolar AS dengan lokal 'en-US'
hasil = konversiMataUang(1500000, '$', 'en-US');
console.log(hasil); // Output: '$. 1,500,000.00'

// Contoh 3: Mengonversi angka ke mata uang Euro dengan lokal 'de-DE' (Jerman)
hasil = konversiMataUang(1234567.89, '€', 'de-DE');
console.log(hasil); // Output: '€. 1.234.567,89'
```

### 3. Dokumentasi Fungsi

#### `konversiMataUang(angka, simbolMataUang, lokal)`

- **angka** (Number): Angka yang akan dikonversi menjadi format mata uang.
- **simbolMataUang** (String): Simbol mata uang yang akan ditambahkan (contoh: 'rp', '$', '€').
- **lokal** (String, opsional): Kode lokal untuk menentukan format penulisan angka (misalnya: 'id-ID' untuk Indonesia, 'en-US' untuk Amerika Serikat, atau 'de-DE' untuk Jerman). Jika tidak disertakan, nilai default adalah 'id-ID'.

### Contoh Penggunaan di Berbagai Lokal

- **Lokal Indonesia ('id-ID')**:

```javascript
let hasil = konversiMataUang(25000.75, 'rp');
console.log(hasil); // Output: 'Rp. 25.000,75'
```

- **Lokal Amerika Serikat ('en-US')**:

```javascript
let hasil = konversiMataUang(50000.50, '$', 'en-US');
console.log(hasil); // Output: '$. 50,000.50'
```

- **Lokal Jerman ('de-DE')**:

```javascript
let hasil = konversiMataUang(1200.99, '€', 'de-DE');
console.log(hasil); // Output: '€. 1.200,99'
```

## Kesalahan yang Mungkin Terjadi

Package ini dilengkapi dengan validasi input. Berikut adalah beberapa kesalahan umum yang mungkin muncul:

1. **Input bukan angka yang valid:**

   Jika parameter pertama bukan angka atau bukan angka yang valid (misalnya, string atau objek), akan muncul pesan error:
   
   ```javascript
   const hasil = konversiMataUang("invalid", 'rp'); // Error: Parameter pertama harus berupa angka yang valid.
   ```

2. **Simbol mata uang tidak valid:**

   Jika parameter kedua (simbol mata uang) tidak valid atau kosong, akan muncul pesan error:
   
   ```javascript
   const hasil = konversiMataUang(200.22, ''); // Error: Parameter kedua harus berupa string yang valid.
   ```

## Lisensi

Package ini dilisensikan di bawah **MIT License**. Silakan gunakan dan modifikasi sesuai kebutuhan Anda.


