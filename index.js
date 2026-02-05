function contactfooter(){
    const footer= document.getElementById("contact");
    footer.classList.add("flash")
    setTimeout(()=>{
    footer.classList.remove("flash");},2000)
}

function contactabout(){
    const footer= document.getElementById("about");
    footer.classList.add("flash")
    setTimeout(()=>{
    footer.classList.remove("flash");},2000)
}

//Password
document.addEventListener("DOMContentLoaded", function () {
    const PASSWORD_SOAL = "ujian2026";
    function tampilkanInfo() {
        const pilihan = document.getElementById("pilihSoal").value;
        const nama = document.getElementById("name").value; 
        const email = document.getElementById("email").value;   
        const password = document.getElementById("password").value;
        const keterangan = document.getElementById("keterangan");
        const teksInfo = document.getElementById("teksInfo");

        if (password.length===0) {
            alert("Masukkan password terlebih dahulu!");
            return;
        }

        if(nama.length===0){
            alert("Masukkan nama terlebih dahulu")
            return;
        }

        if(email.length===0){
            alert("Masukkan email terlebih dahulu")
            return;
        }

        if (password !== PASSWORD_SOAL) {
            alert("Passwordnya Salah!");
            return;
        }

        //Soal-Soal
        if (pilihan === "Javascript"){
            keterangan.style.display = "block";
            teksInfo.innerHTML = `
                <h3>Soal Pilihan Ganda JavaScript</h3>
                <p>1. Keyword untuk variabel konstan?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal1script" value="const">A. const</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1script" value="let">B. let</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1script" value="var">C. var</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1script" value="konstanta">D. konstanta</label><br><br>

                <p>2. Apa hasil dari ekspresi typeof "Halo"?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal2script" value="string">A. string</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2script" value="object">B. object</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2script" value="undefined">C. undefined</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2script" value="text">D. text</label><br><br>

                <p>3. Cara mengambil nilai 20 dari array [10, 20, 30]?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal3script" value="angka.get(1)">A. angka.get(1)</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3script" value="angka[0]">B. angka[0]</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3script" value="angka[2]">C. angka[2]</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3script" value="angka[1]">D. angka[1]</label><br><br>

                <p>4. Simbol mana yang digunakan untuk memberikan komentar satu baris di Javascript ?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal4script" value="//komentar">A. //komentar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4script" value="#komentar">B. #komentar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4script" value="/*komentar/*">C. /*komentar/*</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4script" value="komentar">D. komentar</label><br><br>

                <p>5. Apa hasil dari Boolean(0) di Javascript?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal5script" value="true">A. true</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5script" value="undefined">B. undefined</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5script" value="false">C. false</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5script" value="null">D. null</label><br><br>

                <p>6. Manakah sintaksis yang benar untuk membuat fungsi sederhana?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal6script" value="A">function myFunc(){}</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6script" value="B">create myFunc(){}</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6script" value="C">function:myFunc(){}</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6script" value="D">func myFunc(){}</label><br><br>      

                <p>7. Bagaimana hasil dari "5" + 2 di Javascript ?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal7script" value="NaN">A. NaN</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7script" value="7">B. 7</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7script" value="52">C. "52"</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7script" value="Error">D. Error</label><br><br>
                
                <p>8. Manakah cara yang benar untuk menulis pernyataan kondisional?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal8script" value="A">if x==5{}</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8script" value="B">if(x===5){}</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8script" value="C">if x = 5 then{}</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8script" value="D">select(x==5){}</label><br><br>
                
                <p>9. Apa fungsi dari operator &&?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal9script" value="A">A. Menghasilkan true jika salah satu kondisi benar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9script" value="B">B. Menghasilkan true hanya jika kedua kondisi benar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9script" value="C">C. Membalikkan nilai boolean</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9script" value="D">D. Menjumlahkan dua buah variabel</label><br><br>
                
                <p>10. Tipe data apakah yang hanya memiliki dua kemungkinan nilai: true atau false?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal10script" value="boolean">A. Boolean</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10script" value="number">B. Number</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10cript" value="object">C. Object</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10script" value="string">D. String</label><br><br>`;
        }

        else if (pilihan === "HTML") {
            keterangan.style.display = "block";
            teksInfo.innerHTML = `
                <h3>Soal Pilihan Ganda HTML</h3>
                <p>1. Tag manakah yang digunakan untuk mendefinsikan judul(heading) yang paling besar?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal1HTML" value="h1">A. h1</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1HTML" value="h2">B. h2</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1HTML" value="p">C. p</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1HTML" value="konstanta">D. konstanta</label><br><br>

                <p>2. Atribut mana yang digunakan pada tag untuk menemmukan alamat tujuan dari sebuah tautan (link)?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal2HTML" value="href">A. href</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2HTML" value="src">B. src</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2HTML" value="link">C. link</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2HTML" value="alt">D. alt</label><br><br>

                <p>3. Apa fungsi utama dari atribut 'alt' pada tag?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal3HTML" value="A">A. Membuat gambar menjadi tautan</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3HTML" value="B">B. Mengatur posisi gambar di halaman</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3HTML" value="C">C. Memberi teks pengganti jika gambar gagal dimuat</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3HTML" value="D">D. Menentukan ukuran gambar</label><br><br> 
                
                <p>4. Karakter mana yang digunakan untuk menandakan tag penutup dalam HTML?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal4HTML" value="A">A. /</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4HTML" value="B">B. > </label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4HTML" value="C">C. ;</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4HTML" value="D">D. !DOCTYPE HTML</label><br><br>
                
                <p>5. Bagaimana cara membuat daftar berpoin (unordered list) di HTML?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal5HTML" value="A">A. ol</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5HTML" value="B">B. ul </label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5HTML" value="C">C. li </label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5HTML" value="D">D. dl </label><br><br>
                
                <p>6. Tag manakah yang digunakan untuk menyisipkan baris baru (line break) tanpa memulai paragraf baru?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal6HTML" value="A">A. br</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6HTML" value="B">B. p</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6HTML" value="C">C. a</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6HTML" value="D">D. div</label><br><br>
                
                <p>7. Di dalam tabel HTML, tag mana yang digunakan untuk baris di dalam tabel ?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal7HTML" value="A">A. td</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7HTML" value="B">B. tr </label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7HTML" value="C">C. th</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7HTML" value="D">D. table</label><br><br>
                
                <p>8. Apa fungsi dari tag dalam HTML?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal8HTML" value="A">A. Mendefinisikan hyperlink</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8HTML" value="B">B. Menampilkan gambar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8HTML" value="C">C. Membuat teks menjadi tebal</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8HTML" value="D">D. Membuat daftar</label><br><br>
                
                <p>9. Tag mana yang digunakan untuk membuat input teks di dalam sebuah formulir?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal9HTML" value="A">A. text</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9HTML" value="B">B. password</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9HTML" value="C">C. radio</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9HTML" value="D">D. checkbox</label><br><br>
                
                <p>10. Tag mana yang digunakan untuk membuat input password di dalam sebuah formulir?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal10HTML" value="A">A. text</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10HTML" value="B">B. label</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10HTML" value="C">C. password</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10HTML" value="D">D. checkbox</label><br><br>`;              
        }

        else if(pilihan=="Python"){
            keterangan.style.display="block"
            teksInfo.innerHTML=`
                <p>1. Simbol mana yang digunakan untuk memberikan komentar satu baris di Python?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal1py" value="//komentar">A. //komentar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1py" value="#komentar">B. #komentar</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1py" value="/*komentar/*">C. /*komentar/*</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1py" value="komentar">D. komentar</label><br><br>
                
                <p>2. Manakah dari berikut ini yang merupakan cara yang benar untuk menampilkan teks 'Halo Dunia' di Python? </p>
                <label for="pilihan-ganda"><input type="radio" name="soal2py" value="echo">A. echo "Halo Dunia"</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2py" value="printf">B. printf("Halo Dunia")</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2py" value="print">C. print("Halo Dunia")</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2py" value="display">D. display("Halo Dunia")</label><br><br>
                
                <p>3. Apa tipe data dari variabel x jika x =5.0?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal3py" value="str">A. str</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3py" value="bool">B. bool</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3py" value="float">C. float</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3py" value="int">D. int</label><br><br>
                
                <p>4. Bagaimana cara membuat fungsi di Python?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal4py" value="def">A. def namaFungsi()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4py" value="function">B. function namaFungsi()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4py" value="void">C. void namaFungsi()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4py" value="create">D. create NamaFungsi()</label><br><br>
                
                <p>5. Apa output dari kode berikut?<br>
                buah = ["apel", "jeruk", "mangga"]<br>print(buah[1])</p>
                <label for="pilihan-ganda"><input type="radio" name="soal5py" value="apel">A. apel</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5py" value="mangga">B. mangga</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5py" value="jeruk">C. jeruk</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5py" value="Error">D. Error</label><br><br>
                
                <p>6. Manakah operator yang digunakan untuk membandingkan apakah dua nilai sama di Python?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal6py" value="=">A. =</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6py" value="is">B. is</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6py" value="==">C. ==</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6py" value="===">D. ===</label><br><br>
                
                <p>7. Apa fungsi dari perintah 'elif' dalam struktur percabangan Python?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal7py" value="A">A. Untuk mendefinisikan variabel baru</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7py" value="B">B. Untuk mengulang kode berkali-kali</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7py" value="C">C. Untuk mengakhiri program</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7py" value="D">D. Sebagai singkatan dari 'else if' untuk mengecek kondisi tambahan</label><br><br>
                
                <p>8. Metode mana yang digunakan untuk menambahkan elemen baru ke akhir sebuah list?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal8py" value="insert()">A. insert()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8py" value="append()">B. append()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8py" value="extend()">C. extend()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8py" value="add()">D. add() </label><br><br>
                
                <p>9. Apa hasil dari ekspresi logika : True and False</p>
                <label for="pilihan-ganda"><input type="radio" name="soal9py" value="True">A. True</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9py" value="None">B. None</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9py" value="False">C. False</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9py" value="Error">D. Error </label><br><br>
                
                <p>10. Bagaimana cara mengambil input dari pengguna di Python</p>
                <label for="pilihan-ganda"><input type="radio" name="soal10py" value="input">A. input()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10py" value="scanf">B. scanf()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10py" value="read">C. read()</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10py" value="get_input">D. get_input()</label><br>`
        }

        else if(pilihan=="CSS"){
            keterangan.style.display="block";
            teksInfo.innerHTML=`
            <p>1. Apa kepanjangan dari CSS?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal1css" value="A">Creative Style System</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1css" value="B">Cascading Style Sheets</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1css" value="C">Colorful Style Sheets</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal1css" value="D">Computer Style Sheets</label><br><br>
               
            <p>2. Manakah selector yang digunakan untuk menargetkan elemen dengan id bernama 'header'</p>
                <label for="pilihan-ganda"><input type="radio" name="soal2css" value="A">header</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2css" value="B">.header</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2css" value="C">#header</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal2css" value="D">*header</label><br><br>
                
            <p>3. Dalam Model Kotak (Box Model) CSS, urutan yang benar dari lapisan paling dalam ke luar adalah...</p>
                <label for="pilihan-ganda"><input type="radio" name="soal3css" value="A">Content, Margin, Border, Padding</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3css" value="B">Content, Padding, Border, Margin</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3css" value="C">Padding, Content, Border, Margin</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal3css" value="D">Content, Border, Padding, Margin</label><br><br>
                
            <p>4. Properti mana yang digunakan untuk mengubah warna latar belakang sebuah elemen?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal4css" value="A">background-color</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4css" value="B">bgcolor</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4css" value="C">bg-color</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal4css" value="D">color</label><br><br>
                
            <p>5. Nilai 'position' mana yang membuat elemen tetap pada posisi yang sama relatif terhadap jendela browser, bahkan saat halaman di-scroll?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal5css" value="A">static</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5css" value="B">fixed</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5css" value="C">relative</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal5css" value="D">absolute</label><br><br>
                
            <p>6. Bagaimana cara membuat setiap kata dalam sebuah kalimat dimulai dengan huruf kapital menggunakan CSS?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal6css" value="A">font-transform:capitalize</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6css" value="B">text-style:uppercase</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6css" value="C">text-transform:capitalize</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal6css" value="D">text-decoration:capitalize</label><br><br>
            
            <p>7. Manakah unit CSS yang bersifat relatif terhadap ukuran font dari elemen akar (root element)?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal7css" value="A">%</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7css" value="B">em</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7css" value="C">px</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal7css" value="D">rem</label><br><br>
                
            <p>8. Properti Flexbox manakah yang digunakan untuk mengatur perataan item di sepanjang sumbu utama (main axis)?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal8css" value="A">display:flex</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8css" value="B">align-items</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8css" value="C">justify-content</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal8css" value="D">flex-direction</label><br><br>
                
            <p>9. Apa fungsi dari properti z-index</p>
                <label for="pilihan-ganda"><input type="radio" name="soal9css" value="A">Menentukan urutan tumpukan elemen (stack order)</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9css" value="B">Mengatur jarak antar elemen secara vertikal</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9css" value="C">Mengubah ukuran elemen pada sumbu Z (kedalaman)</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal9css" value="D">Mengatur transparansi elemen</label><br><br>
                
            <p>10. Selector mana yang paling spesifik dan akan menang dalam konflik gaya?</p>
                <label for="pilihan-ganda"><input type="radio" name="soal10css" value="A">.my-class</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10css" value="B">#my-id</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10css" value="C">div p</label><br>
                <label for="pilihan-ganda"><input type="radio" name="soal10css" value="D">p</label><br><br>`
        }
    }

//Kunci Jawaban dan Cek jawaban yang sudah diisi
    window.tampilkanInfo = tampilkanInfo;
    document.addEventListener("submit", function () {
        const pilihan = document.getElementById("pilihSoal").value;
        const nama = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        //JavaScript
        if (pilihan === "Javascript") {
            const jawabanJavascript = {
                soal1script: "const",
                soal2script: "string",
                soal3script: "angka[1]",
                soal4script: "//komentar",
                soal5script: "C",
                soal6script: "A",
                soal7script: "52",
                soal8script: "B",
                soal9script: "B",
                soal10script: "boolean",
            };

            let nilai = 0;
            for (let soal in jawabanJavascript) {
                const jawabanUser = document.querySelector(
                    `input[name="${soal}"]:checked`);

                if (!jawabanUser) {
                    alert("Silakan jawab semua soal!");
                    return;
                }

                if (jawabanUser.value === jawabanJavascript[soal]) {
                    nilai += 10;
                }
        }

            localStorage.setItem("hasilQuiz", JSON.stringify({
                nama,email,materi: "JavaScript",nilai,
                jawaban: {
                    Soal_1: document.querySelector('input[name="soal1script"]:checked').value,
                    Soal_2: document.querySelector('input[name="soal2script"]:checked').value,
                    Soal_3: document.querySelector('input[name="soal3script"]:checked').value,
                    Soal_4: document.querySelector('input[name="soal4script"]:checked').value,
                    Soal_5: document.querySelector('input[name="soal5script"]:checked').value,
                    Soal_6: document.querySelector('input[name="soal6script"]:checked').value,
                    Soal_7: document.querySelector('input[name="soal7script"]:checked').value,
                    Soal_8: document.querySelector('input[name="soal8script"]:checked').value,
                    Soal_9: document.querySelector('input[name="soal9script"]:checked').value,
                    Soal_10: document.querySelector('input[name="soal10script"]:checked').value,
                }
            }));

            alert("Nama: " + nama + "\n" +
                  "Email: " + email + "\n" +
                  "Jawaban Anda sudah terkirim");
        }

        //HTML
        else if (pilihan === "HTML") {
            const jawabanHTML = {
                Soal1HTML: "h1",
                soal2HTML: "href",
                soal3HTML: "C",
                soal4HTML: "A",
                soal5HTML: "B",
                soal6HTML: "A",
                soal7HTML: "B",
                soal8HTML: "A",
                soal9HTML: "A",
                soal10HTML:"C"};

            let nilai = 0;
            for (let soal in jawabanHTML) {
                const jawabanUser = document.querySelector(
                    `input[name="${soal}"]:checked`
                );

                if (!jawabanUser) {
                    alert("Silakan jawab semua soal!");
                    return;
                }

                if (jawabanUser.value === jawabanHTML[soal]) {
                    nilai += 10;
                }
            }

            localStorage.setItem("hasilQuiz", JSON.stringify({
                nama,email,materi: "HTML",nilai,
                jawaban: {
                    Soal_1: document.querySelector('input[name="soal1HTML"]:checked').value,
                    Soal_2: document.querySelector('input[name="soal2HTML"]:checked').value,
                    Soal_3: document.querySelector('input[name="soal3HTML"]:checked').value,
                    Soal_4: document.querySelector('input[name="soal4HTML"]:checked').value,
                    Soal_5: document.querySelector('input[name="soal5HTML"]:checked').value,
                    Soal_6: document.querySelector('input[name="soal6HTML"]:checked').value,
                    Soal_7: document.querySelector('input[name="soal7HTML"]:checked').value,
                    Soal_8: document.querySelector('input[name="soal8HTML"]:checked').value,
                    Soal_9: document.querySelector('input[name="soal9HTML"]:checked').value,
                    Soal_10: document.querySelector('input[name="soal10HTML"]:checked').value,
                }
                }));

            alert("Nama: " + nama + "\n" +
                  "Email: " + email + "\n"+
                  "Anda sudah mengumpulkan jawaban");
        }

        //Python
        else if (pilihan==="Python"){
            const jawabanPython ={
                soal1py:"#komentar",
                soal2py:"print",
                soal3py:"float",
                soal4py:"def",
                soal5py:"jeruk",
                soal6py:"==",
                soal7py:"D",
                soal8py:"append()",
                soal9py:"False",
                soal10py:"input",}  
   
            let nilai = 0;
            for (let soal in jawabanPython) {
                const jawabanUser = document.querySelector(
                    `input[name="${soal}"]:checked`
                );

                if (!jawabanUser) {
                    alert("Silakan jawab semua soal!");
                    return;
                }

                if (jawabanUser.value === jawabanPython[soal]) {
                    nilai += 10;
                }
            }

            alert("Nama: " + nama + "\n" +
                  "Email: " + email + "\n"+
                  "Anda sudah mengumpulkan jawaban");

            localStorage.setItem("hasilQuiz", JSON.stringify({
                nama,email,materi: "Python",   nilai,
                jawaban: {
                    Soal_1: document.querySelector('input[name="soal1py"]:checked').value,
                    Soal_2: document.querySelector('input[name="soal2py"]:checked').value,
                    Soal_3: document.querySelector('input[name="soal3py"]:checked').value,
                    Soal_4: document.querySelector('input[name="soal4py"]:checked').value,
                    Soal_5: document.querySelector('input[name="soal5py"]:checked').value,
                    Soal_6: document.querySelector('input[name="soal6py"]:checked').value,
                    Soal_7: document.querySelector('input[name="soal7py"]:checked').value,
                    Soal_8: document.querySelector('input[name="soal8py"]:checked').value,
                    Soal_9: document.querySelector('input[name="soal9py"]:checked').value,
                    Soal_10: document.querySelector('input[name="soal10py"]:checked').value,
                }
            }));
        }

        //CSS
        else if (pilihan==="CSS"){
            const jawabanCSS ={
                soal1css:"A",
                soal2css:"B",
                soal3css:"B",
                soal4css:"A",
                soal5css:"B",
                soal6css:"C",
                soal7css:"D",
                soal8css:"D",
                soal9css:"A",
                soal10css:"B",}
               
            let nilai = 0;
            for (let soal in jawabanCSS) {
                const jawabanUser = document.querySelector(
                    `input[name="${soal}"]:checked`
                );

                if (!jawabanUser) {
                    alert("Silakan jawab semua soal!");
                    return;
                }

                if (jawabanUser.value === jawabanCSS[soal]) {
                    nilai += 10;
                }
            }

            alert("Nama: " + nama + "\n" +
                  "Email: " + email + "\n"+
                  "Anda sudah mengumpulkan jawaban");

            localStorage.setItem("hasilQuiz", JSON.stringify({
                nama,email,materi: "CSS",nilai,
                jawaban: {
                    Soal_1: document.querySelector('input[name="soal1css"]:checked').value,
                    Soal_2: document.querySelector('input[name="soal2css"]:checked').value,
                    Soal_3: document.querySelector('input[name="soal3css"]:checked').value,
                    Soal_4: document.querySelector('input[name="soal4css"]:checked').value,
                    Soal_5: document.querySelector('input[name="soal5css"]:checked').value,
                    Soal_6: document.querySelector('input[name="soal6css"]:checked').value,
                    Soal_7: document.querySelector('input[name="soal7css"]:checked').value,
                    Soal_8: document.querySelector('input[name="soal8css"]:checked').value,
                    Soal_9: document.querySelector('input[name="soal9css"]:checked').value,
                    Soal_10: document.querySelector('input[name="soal10css"]:checked').value,
                }
            }));
        }});
    })