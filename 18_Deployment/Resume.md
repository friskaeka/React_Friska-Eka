
A. Kenapa perlu build
   react mengandung banyak pesan peringatan. peringatan yang sangat berguna dalam pengembangan aplikasi. namun, pesan ini membuat read menjadi lambat makanya itu kita menggunakan versi produksi ketika mendeploy aplikasi

B. Tujuan 
   agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat

C. cara membuild react app 
   "npm run build" untuk menjalankan normal menggunakan "npm start"

D. menjalankan aplikasi react secara optimal
   menggunakan serve
   - install serve : "npm install -g serve"
   - menjalankan serve di lokal : "serve -s build"

E. Deployment
   adalah kegiatan yang bertujuan untuk menyebaqrkan aplikasi yang sudah kita buat agar dapat diakses banyak orang tidak hanya kita. 
   - surge adalah layanan penerbit website statik gratis untuk front-End developers. 
   - website statik yang digunakan surge memiliki subdomain .surge.sh
  a. install surge
     "npm install --global surge"
  b. deploy dengan surge
     "surge"
  c. teardown surge
     tidak ingin mempublikasi sebagian domain atau subdomain. dengan surge CLI. 
     "surge teardown vancouver.surge.sh"
   
F. Deployment Netlify
   netlify adalah salah satu platfrom penyedia layanan build tools sekaligun continous deployment. netlify digunakan untuk mempublish website secara gratis. 
   a. buat akun di netlify
   b. intall netlify CLI
      "npm install netlify-cli"
   c. menjalankan perintah netlify
   d. melakukan verifikasi akun 
   e. create & cinfigure a new site
   f. memilih lokasi file yang akan di deploy. pilih ./build
   g. 
   
   

   