Materi yang dipelajari : 
1. Versioning
2. VCS
3. GIT

 A. Versioning
 Versioning adalah mengatur versi dari source code program

 B. Version Control System (VCS)
 Dulu masih berbasis local (singke user) yaitu belum nyambung satu sama lain tapi, sudah bisa di tracking tapi hanya dilokal saja lalu muncul centralize yang sistemnya terpusat. Kita sangat tergantung sekali dengan server. Jika, server mati maka kita tidak bisa ngapa2in karna sumber diambil langsung dari pusat. Kemudian, yang paling efektif yaitu GIT. Git adalah sistem yang terdistribusi yang dimana dia ada di local dan pusat. Agar dapat terhubung kita akan banyak menggunakan perintah command. 

 C. GIT
 Git adalah VCS yang paling populer yang digunakan oleh para developer untuk mengembangkan software secara bersama. Dengan GIT kita bisa mengetahui developer mengedit kapan dan memasukkan kapan.

 D. Remote Computer
 Secara diagram terdapat 3 developer memiliki remote server yang dijadikan pusat untuk sinkron dan terdapat GIT. Remote server adalah server yang biasa. 

 E. GIT Repository
 Dilokal ini dibedakan oleh dua file yaitu project yang sedang kita kerjakan dan history yang berisi trackingan yang terjadi dan commitnya apa. Git akan mentrack segala perubahan file. Di GiT kita bisa melakukan undo dengan reset. Setap, perubahan akan dikirimkan kedalam satu commit dan didalam paket tersebut terdapat banyak file.
Commit adalah track perubahan

 F. Github
Di github terdapat dua yaitu private dan public. 
Ketika kita akan membuat repository terdapat : 
 - Readme : dokumentasi penting yang terletak dibawah project.
 - Gitignore : jika, ada file besar
 - License : ketika kita open project dan bersikap hanya bisa diliat.
Untuk melakukan sinkronais ke project repository :
 - HTTPS : hanya menggunggunakan username dan nama
 - SSH :  lebih aman, karna ada semacam kunci yang akan kita buat.
Cara kerja didalam git :
 - Working directory 
 - Staging area
 - repository

TASK : 
membuat seuat project dan memasukkan project tersebut kedalam github
