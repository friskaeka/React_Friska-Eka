

 A. Testing
 testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. test assertion adalah ekpresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. 
 a. manfaat dari testing : 
  - ketika memiliki coverage yang baik kita akan merasa percaya ketika akan mengubah aplikasi kita. 
  - mengurasi bug dalam aplikasi kita
 b. kategori testing : 
  - rendering component trees
  - menjalankan aplikasi lengkap
 c. Pertimbangan memilih perkakas
  - kecepatan iterasi vs environment yang realistis
  - sebenerapa banyak mock
 d. rekomendasi tools
  - jest
  - react testing library
  - install (create-react-app)

 B. Testing Custom Hook
  a. Library yang digunakan
     - React Hooks Testing Library = untuk mengetes custom hook dia akan memberikan alat-alat untuk mengetes hooks tanpa merender satu komponen
       "npm install -D @testing-library/react-hooks"

  