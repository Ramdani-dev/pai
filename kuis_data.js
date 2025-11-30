const allQuestions = [
    // --- TOPIK 1: Larangan Perbuatan Zina (Soal 1-17) ---
    {
        id: 1,
        text: "Q.S. al-Isra’/17: 32 melarang umat Islam untuk mendekati perbuatan zina. Alasan utama pelarangan mendekati zina dalam ayat tersebut adalah...",
        options: [
            "Karena zina menghabiskan harta",
            "Karena zina adalah perbuatan keji dan jalan yang buruk",
            "Karena zina membuat pelakunya diasingkan",
            "Karena zina merusak nasab keturunan"
        ],
        correctAnswer: 1,
        rationale: "Dalam Q.S. al-Isra’/17: 32 tertulis \"innahu kaana faahisyatan wa saa'a sabiila\" yang artinya sungguh zina itu suatu perbuatan keji dan suatu jalan yang buruk.",
        hint: "Fokus pada terjemahan bagian ayat \"faahisyatan wa saa'a sabiila\"."
    },
    {
        id: 2,
        text: "Hukuman bagi pelaku zina *ghairu muhsan* (belum menikah) berdasarkan Q.S. an-Nur/24: 2 adalah...",
        options: [
            "Dirajam hingga mati",
            "Diasingkan selama satu tahun",
            "Didera (dicambuk) 100 kali",
            "Denda emas seberat 100 gram"
        ],
        correctAnswer: 2,
        rationale: "Q.S. an-Nur/24: 2 menegaskan: 'Pezina perempuan dan pezina laki-laki, deralah masing-masing dari keduanya seratus kali'.",
        hint: "Ingat hukuman *had* untuk pezina yang belum menikah (An-Nur: 2)."
    },
    {
        id: 3,
        text: "Perbuatan zina yang dilakukan oleh orang yang sudah menikah atau pernah menikah disebut...",
        options: [
            "Zina Ghairu Muhsan",
            "Zina Muhsan",
            "Zina Kabir",
            "Zina Saghir"
        ],
        correctAnswer: 1,
        rationale: "Zina *muhsan* adalah perbuatan zina yang dilakukan oleh laki-laki dan perempuan yang sama-sama sudah menikah.",
        hint: "Istilah untuk pezina yang statusnya sudah *muhsan* (pernah menikah)."
    },
    {
        id: 4,
        text: "Hukuman (*had*) bagi pelaku zina *muhsan* menurut ketentuan syariat Islam adalah...",
        options: [
            "Dicambuk 100 kali",
            "Dicambuk 80 kali",
            "Diasingkan ke luar negeri",
            "Rajam (dilempari batu) sampai mati"
        ],
        correctAnswer: 3,
        rationale: "Jika pelaku perzinaan itu sudah *muhsan* (pernah menikah), sebagaimana ketentuan hadis Rasulullah Saw., maka diterapkan hukuman rajam.",
        hint: "Ingat hukuman *had* untuk pezina yang sudah menikah."
    },
    {
        id: 5,
        text: "Salah satu dampak negatif zina secara nasab (keturunan) adalah...",
        options: [
            "Anak hasil zina menjadi sangat cerdas",
            "Anak hasil zina nasabnya dinisbatkan kepada ibunya, bukan ayah biologisnya",
            "Anak hasil zina berhak mendapat warisan penuh dari ayahnya",
            "Anak hasil zina otomatis menjadi wali nikah ibunya"
        ],
        correctAnswer: 1,
        rationale: "Akibat zina antara lain anak hasil perbuatan zina tidak dapat dinasabkan kepada garis keturunan ayah biologisnya.",
        hint: "Konsekuensi hukum syariat terhadap status anak hasil zina."
    },
    {
        id: 6,
        text: "Dalam pembuktian perbuatan zina, jika tidak ada pengakuan pelaku, maka dibutuhkan saksi sebanyak...",
        options: [
            "2 orang laki-laki adil",
            "3 orang laki-laki adil",
            "4 orang laki-laki adil",
            "2 orang perempuan dan 1 laki-laki"
        ],
        correctAnswer: 2,
        rationale: "Para ulama bersepakat bahwa zina tidak dapat dibuktikan kecuali adanya 4 (empat) orang saksi laki-laki yang adil.",
        hint: "Angka saksi yang sangat spesifik dan ketat untuk kasus zina."
    },
    {
        id: 7,
        text: "Menuduh orang baik-baik berbuat zina tanpa mendatangkan 4 orang saksi disebut dengan istilah...",
        options: [
            "Gibah",
            "Bughat",
            "Qadf",
            "Li'an"
        ],
        correctAnswer: 2,
        rationale: "Menuduh orang lain berbuat zina disebut *qadf*, yang pelakunya diancam hukuman cambuk 80 kali jika tidak bisa membuktikan.",
        hint: "Istilah hukum Islam untuk tuduhan zina (*defamation*)."
    },
    {
        id: 8,
        text: "Salah satu cara menghindari pergaulan bebas dan zina yang dianjurkan Rasulullah bagi pemuda yang belum mampu menikah adalah...",
        options: [
            "Berpuasa",
            "Berwisata",
            "Bermain musik",
            "Bekerja lembur"
        ],
        correctAnswer: 0,
        rationale: "Rasulullah bersabda: 'Barangsiapa yang belum mampu (menikah), maka berpuasalah, karena puasa itu obat pengekang nafsunya'.",
        hint: "Amalan ibadah yang berfungsi sebagai perisai hawa nafsu."
    },
    {
        id: 9,
        text: "Potongan ayat \"Walaa taqrabuz zina\" dalam Q.S. Al-Isra ayat 32 memiliki arti...",
        options: [
            "Janganlah kalian melakukan zina",
            "Janganlah kalian mendekati zina",
            "Zina adalah perbuatan keji",
            "Zina adalah jalan yang buruk"
        ],
        correctAnswer: 1,
        rationale: "Terjemahan *Walaa taqrabuz zina* adalah 'Dan janganlah kamu mendekati zina'.",
        hint: "Terjemahan langsung dari kata **'Taqrabu'**."
    },
    {
        id: 10,
        text: "Menurut Imam Sayuti, dampak negatif zina di dunia meliputi hal berikut, *kecuali*...",
        options: [
            "Menghilangkan kewibawaan",
            "Menyebabkan kefakiran",
            "Memperpendek umur",
            "Mendapat hisab yang buruk"
        ],
        correctAnswer: 3,
        rationale: "Mendapat hisab yang buruk adalah dampak yang ditanggung di *akhirat*, bukan di dunia. Dampak di dunia adalah menghilangkan kewibawaan, kefakiran, dan memperpendek umur.",
        hint: "Bedakan antara dampak **duniawi** dan **ukhrawi**."
    },
    {
        id: 11,
        text: "*Li'an* adalah sumpah suami-istri. Konsep ini muncul jika suami menuduh istri zina dan tidak ada 4 saksi, yang menyebabkan...",
        options: [
            "Perceraian permanen (firaq)",
            "Suami wajib membayar denda",
            "Istri wajib masuk penjara",
            "Anak tetap dinasabkan ke suami"
        ],
        correctAnswer: 0,
        rationale: "*Li’an* adalah jalan keluar dari *qadf* (tuduhan zina) yang menyebabkan perceraian dan terputusnya nasab.",
        hint: "Konsekuensi hukum dari sumpah *li'an* antara suami istri."
    },
    {
        id: 12,
        text: "Menutup aurat dan menjaga interaksi adalah salah satu upaya pencegahan zina (*saddudz-dzari'ah*), yang termasuk dalam kategori...",
        options: [
            "Pencegahan primer",
            "Pencegahan sekunder",
            "Hukuman *had*",
            "Li'an"
        ],
        correctAnswer: 0,
        rationale: "Pencegahan primer dilakukan sebelum terjadi perbuatan agar tidak mendekati zina.",
        hint: "Kategori pencegahan yang dilakukan sebelum perbuatan terjadi."
    },
    {
        id: 13,
        text: "Selain rajam, hukuman bagi pezina *muhsan* menurut beberapa riwayat hadis Nabi adalah...",
        options: [
            "Dipotong tangannya",
            "Diasingkan seumur hidup",
            "Didera 100 kali",
            "Dipenjara 100 kali"
        ],
        correctAnswer: 2,
        rationale: "Beberapa riwayat menyebutkan selain rajam, pezina *muhsan* juga didera 100 kali, meskipun rajam adalah hukuman utamanya.",
        hint: "Cermati perbedaan hukuman *had* yang disebutkan dalam hadis, tidak hanya rajam."
    },
    {
        id: 14,
        text: "Yang dimaksud *zina al-’ain* (zina mata) adalah...",
        options: [
            "Berciuman dengan syahwat",
            "Melihat lawan jenis dengan syahwat",
            "Mendengar suara yang membangkitkan syahwat",
            "Berjalan menuju tempat maksiat"
        ],
        correctAnswer: 1,
        rationale: "Zina mata adalah memandang yang tidak halal dengan syahwat.",
        hint: "Zina mata adalah bagian dari zina *majazi* (kecil)."
    },
    {
        id: 15,
        text: "Perintah menjauhi perbuatan yang menjerumus ke zina (Q.S. Al-Isra: 32) disebut juga prinsip...",
        options: [
            "Saddudz-Dzari'ah",
            "Istihsan",
            "Maslahah Mursalah",
            "Qiyas"
        ],
        correctAnswer: 0,
        rationale: "*Saddudz-dzari'ah* adalah menutup segala jalan menuju keburukan (seperti *khalwat*).",
        hint: "Istilah fiqih untuk menutup pintu keburukan agar tidak terjadi maksiat."
    },
    {
        id: 16,
        text: "Dalam rangka menghindari zina, berdua-duaan antara laki-laki dan perempuan yang bukan mahram (*khalwat*) hukumnya...",
        options: [
            "Sunah",
            "Mubah",
            "Haram",
            "Makruh"
        ],
        correctAnswer: 2,
        rationale: "*Khalwat* dilarang karena berpotensi menjurus pada perbuatan zina.",
        hint: "Ingat larangan berdua-duaan dengan non-mahram karena pihak ketiga adalah setan."
    },
    {
        id: 17,
        text: "Jika seseorang mengakui telah berzina (*iqrar*) di depan hakim atau pengadilan, maka ia...",
        options: [
            "Bebas dari tuntutan",
            "Harus mencari 4 saksi tambahan",
            "Wajib diasingkan saja",
            "Wajib dikenai hukuman *had*"
        ],
        correctAnswer: 3,
        rationale: "Pengakuan (*iqrar*) adalah salah satu cara pembuktian zina, dan pelakunya wajib dikenai hukuman *had*.",
        hint: "Pengakuan adalah bukti kuat (selain 4 saksi) dalam hukum Islam."
    },

    // --- TOPIK 2: Fastabikul Khairat & Etos Kerja (Soal 18-34) ---
    {
        id: 18,
        text: "Q.S. Al-Maidah/5: 48 memerintahkan umat Islam untuk...",
        options: [
            "Berperang melawan kebatilan",
            "Berlomba-lomba dalam kebaikan (Fastabikul Khairat)",
            "Mencari rezeki yang halal",
            "Menuntut ilmu sampai ke negeri Cina"
        ],
        correctAnswer: 1,
        rationale: "Q.S. al-Maidah/5: 48 berisi perintah untuk berlomba dalam kebaikan (*fastabiqul khairat*).",
        hint: "Ayat ini secara eksplisit menyebutkan kata **'fastabiqul khairat'**."
    },
    {
        id: 19,
        text: "Arti dari potongan ayat \"Fastabiqul Khairat\" adalah...",
        options: [
            "Maka berlomba-lombalah kamu dalam kebaikan",
            "Maka bekerjalah kamu dengan giat",
            "Maka dirikanlah salat",
            "Maka bayarlah zakat"
        ],
        correctAnswer: 0,
        rationale: "Terjemahan *fastabiqul khairat* adalah 'maka berlomba-lombalah berbuat kebajikan'.",
        hint: "Arti dari kata kerja **'Fastabiqul'**."
    },
    {
        id: 20,
        text: "Q.S. At-Taubah/9: 105 mengandung perintah tentang...",
        options: [
            "Zakat Mal",
            "Haji dan Umrah",
            "Etos Kerja",
            "Puasa Ramadhan"
        ],
        correctAnswer: 2,
        rationale: "Q.S. at-Taubah/9: 105 berisi perintah untuk bekerja keras dan beramal (*i'malu*).",
        hint: "Ayat ini memerintahkan untuk beramal/bekerja."
    },
    {
        id: 21,
        text: "Salah satu kedudukan Al-Qur'an terhadap kitab-kitab sebelumnya menurut Q.S. Al-Maidah: 48 adalah sebagai *Muhaimin*, yang artinya...",
        options: [
            "Penghapus",
            "Pengganti",
            "Penjaga/Pemelihara/Saksi",
            "Penyempurna"
        ],
        correctAnswer: 2,
        rationale: "Al-Qur’an adalah *muhaimin* terhadap kitab-kitab terdahulu karena ia menjadi saksi, pengawas, pemelihara, dan penjaga kitab-kitab terdahulu.",
        hint: "Arti dari kata **'Muhaimin'**."
    },
    {
        id: 22,
        text: "Dalam Q.S. At-Taubah: 105, disebutkan bahwa amal pekerjaan manusia nantinya akan dilihat oleh...",
        options: [
            "Malaikat Raqib dan Atid",
            "Allah Swt, Rasul-Nya, dan orang-orang mukmin",
            "Keluarga dan kerabat",
            "Hakim di pengadilan"
        ],
        correctAnswer: 1,
        rationale: "\"Maka Allah akan melihat pekerjaanmu, begitu juga Rasul-Nya dan orang-orang mukmin\".",
        hint: "Subjek (siapa) yang akan menyaksikan amal perbuatan kita."
    },
    {
        id: 23,
        text: "Hukum bacaan pada lafaz \"Anzalnaa\" ( أَنزَلْنَا ) dalam Q.S. Al-Maidah: 48 adalah...",
        options: [
            "Ikhfa Haqiqi",
            "Idzhar Halqi",
            "Idgham Bighunnah",
            "Iqlab"
        ],
        correctAnswer: 0,
        rationale: "Nun sukun bertemu huruf Za (ز) dibaca samar (Ikhfa).",
        hint: "Nun mati bertemu huruf **Za (ز)**."
    },
    {
        id: 24,
        text: "Sikap etos kerja seorang muslim harus berorientasi pada...",
        options: [
            "Kekayaan materi semata",
            "Pujian dari atasan",
            "Keuntungan duniawi dan ukhrawi (Rida Allah)",
            "Pangkat dan jabatan"
        ],
        correctAnswer: 2,
        rationale: "Bekerja dalam Islam bukan hanya untuk kebutuhan jasmani, tetapi untuk menghambakan diri kepada Allah Swt. dan meraih rida-Nya.",
        hint: "Tujuan bekerja dalam pandangan Islam."
    },
    {
        id: 25,
        text: "Manfaat dari berkompetisi dalam kebaikan (*fastabikul khairat*) adalah...",
        options: [
            "Menimbulkan permusuhan",
            "Menjadikan manusia sombong",
            "Memperoleh rida dan pahala dari Allah Swt.",
            "Membuat pekerjaan menjadi lambat"
        ],
        correctAnswer: 2,
        rationale: "Manfaat kompetisi dalam kebaikan antara lain memperoleh rida dan pahala dari Allah Swt..",
        hint: "Hasil utama dari berlomba dalam ketaatan."
    },
    {
        id: 26,
        text: "Hadis Nabi Saw. menyebutkan bahwa tangan di atas lebih baik daripada tangan di bawah. Hal ini memotivasi umat Islam untuk...",
        options: [
            "Meminta-minta",
            "Bekerja keras dan mandiri",
            "Menjadi pejabat",
            "Menabung uang"
        ],
        correctAnswer: 1,
        rationale: "Islam sangat menghargai seseorang yang bekerja keras daripada meminta-minta.",
        hint: "Makna figuratif dari 'tangan di atas'."
    },
    {
        id: 27,
        text: "\"Seandainya Allah menghendaki, niscaya kamu dijadikan-Nya satu umat (saja)...” (Q.S. Al-Maidah: 48). Maksud potongan ayat ini adalah...",
        options: [
            "Allah tidak mampu menyatukan manusia",
            "Perbedaan adalah ujian untuk berlomba dalam kebaikan",
            "Manusia harus membuat satu agama baru",
            "Umat terdahulu lebih baik dari umat sekarang"
        ],
        correctAnswer: 1,
        rationale: "Ayat berlanjut \"...tetapi Allah hendak menguji kamu terhadap karunia yang telah diberikan-Nya kepadamu, maka berlomba-lombalah berbuat kebajikan\".",
        hint: "Tujuan Allah menciptakan keragaman umat di dunia."
    },
    {
        id: 28,
        text: "Etos kerja muslim harus seimbang antara orientasi dunia dan akhirat, yang dalam istilah Islam disebut...",
        options: [
            "Tadrij",
            "Syaja'ah",
            "I'tidal",
            "Ukhuwah"
        ],
        correctAnswer: 2,
        rationale: "Keseimbangan antara dunia dan akhirat disebut *i'tidal*.",
        hint: "Konsep keseimbangan dalam Islam (tidak terlalu ekstrem)."
    },
    {
        id: 29,
        text: "Sikap bekerja yang didasari *qana'ah* (merasa cukup) akan mencegah dari sifat...",
        options: [
            "Ikhlas",
            "Sabar",
            "Tamak (Serakah)",
            "Dermawan"
        ],
        correctAnswer: 2,
        rationale: "*Qana'ah* (merasa cukup) adalah lawan dari ketamakan (*tamak*).",
        hint: "Pasangan sifat *qana'ah*."
    },
    {
        id: 30,
        text: "Prinsip *Tadrij* dalam bekerja atau berdakwah berarti...",
        options: [
            "Dilakukan tanpa henti",
            "Bekerja secara bertahap dan terencana",
            "Mengutamakan hasil akhir",
            "Menggunakan seluruh kekuatan"
        ],
        correctAnswer: 1,
        rationale: "*Tadrij* artinya bertahap atau berproses perlahan.",
        hint: "Ingat arti bahasa dari *tadrij*."
    },
    {
        id: 31,
        text: "Hadis Nabi yang menyebutkan bahwa pekerjaan yang paling baik adalah usaha tangan sendiri (kerja keras) berkaitan dengan prinsip...",
        options: [
            "Fastabikul Khairat",
            "Hifzhu al-Nasl",
            "Etos Kerja",
            "Li'an"
        ],
        correctAnswer: 2,
        rationale: "Mendorong bekerja keras dan mandiri adalah inti dari Etos Kerja.",
        hint: "Hadis yang menekankan kemuliaan memberi/bekerja."
    },
    {
        id: 32,
        text: "Yang dimaksud *'Amalun bil arkan* dalam konteks etos kerja adalah...",
        options: [
            "Bekerja dengan niat yang ikhlas",
            "Perbuatan yang dilakukan dengan anggota badan",
            "Keyakinan dalam hati",
            "Ucapan yang benar"
        ],
        correctAnswer: 1,
        rationale: "*Arkan* artinya anggota badan. *'Amalun bil arkan* adalah perbuatan yang dilakukan oleh anggota badan (fisik).",
        hint: "Arti dari *arkan* dalam istilah fiqih."
    },
    {
        id: 33,
        text: "Konsekuensi dari berpegang teguh pada Q.S. Al-Maidah: 48 dalam menghadapi perbedaan adalah...",
        options: [
            "Menganggap semua agama sama",
            "Mencari kelemahan agama lain",
            "Tidak menjadikan perbedaan sebagai alasan permusuhan",
            "Memaksa orang lain mengikuti kebaikan kita"
        ],
        correctAnswer: 2,
        rationale: "Ayat ini memerintahkan berlomba kebaikan di tengah perbedaan (*ujian*).",
        hint: "Tujuan Allah menciptakan keragaman umat."
    },
    {
        id: 34,
        text: "Salah satu hikmah terbesar dari penerapan etos kerja muslim adalah...",
        options: [
            "Mendapat banyak pujian",
            "Terhindar dari ketergantungan (meminta-minta)",
            "Meraih pangkat tinggi",
            "Hidup mewah"
        ],
        correctAnswer: 1,
        rationale: "Etos kerja melahirkan kemandirian (tangan di atas lebih baik).",
        hint: "Hasil dari tangan yang di atas (bekerja)."
    },

    // --- TOPIK 3: Syu'abul Iman (Soal 35-51) ---
    {
        id: 35,
        text: "Secara bahasa, *Syu’abul Iman* berarti...",
        options: [
            "Pokok-pokok Iman",
            "Cabang-cabang Iman",
            "Rukun Iman",
            "Batalnya Iman"
        ],
        correctAnswer: 1,
        rationale: "*Syu’abul Iman* artinya cabang-cabang iman.",
        hint: "Arti kata **'Syu'abul'**."
    },
    {
        id: 36,
        text: "Berapakah jumlah cabang iman menurut hadis riwayat Muslim dari Abu Hurairah?",
        options: [
            "6 cabang",
            "17 cabang",
            "77 cabang (atau 70 lebih)",
            "99 cabang"
        ],
        correctAnswer: 2,
        rationale: "Rasulullah bersabda: \"Iman itu 77 (tujuh puluh tujuh) lebih cabangnya...\".",
        hint: "Angka yang spesifik (puluhan) yang disebutkan Nabi."
    },
    {
        id: 37,
        text: "Cabang iman yang paling utama (tertinggi) menurut hadis adalah...",
        options: [
            "Menyingkirkan duri dari jalan",
            "Berbuat baik kepada orang tua",
            "Mengucapkan Laa ilaha illallah",
            "Rasa malu"
        ],
        correctAnswer: 2,
        rationale: "\"...yang paling utama adalah mengucapkan *laa ilaha illallah*...\".",
        hint: "Kalimat tauhid yang menjadi kunci keimanan."
    },
    {
        id: 38,
        text: "Cabang iman yang paling rendah adalah...",
        options: [
            "Salat lima waktu",
            "Menyingkirkan gangguan dari jalan",
            "Senyum kepada saudara",
            "Menjenguk orang sakit"
        ],
        correctAnswer: 1,
        rationale: "\"...dan yang paling kurang adalah menyingkirkan apa yang akan menghalangi orang di jalan...\".",
        hint: "Tindakan fisik terkecil yang memiliki nilai keimanan."
    },
    {
        id: 39,
        text: "Syu’abul iman dibagi menjadi tiga ranah/dimensi, yaitu...",
        options: [
            "Niat, Akidah, dan Hati",
            "Hati, Lisan, dan Perbuatan",
            "Dunia, Akhirat, dan Barzah",
            "Islam, Iman, dan Ihsan"
        ],
        correctAnswer: 1,
        rationale: "Dimensi keimanan menyangkut tiga ranah: *Ma’rifatun bil qalbi* (hati), *Iqrarun bil lisan* (lisan), dan *‘Amalun bil arkan* (perbuatan).",
        hint: "Ingat tiga cara manusia mengekspresikan iman."
    },
    {
        id: 40,
        text: "Berikut ini yang termasuk cabang iman yang berkaitan dengan lisan (*iqrarun bil lisan*) adalah...",
        options: [
            "Iman kepada Allah",
            "Membaca kalimat thayyibah dan Al-Qur'an",
            "Menunaikan amanah",
            "Menyingkirkan duri di jalan"
        ],
        correctAnswer: 1,
        rationale: "Cabang iman berkaitan dengan lisan meliputi membaca kalimat thayyibah, membaca Al-Qur'an, dll.",
        hint: "Amal yang menggunakan anggota tubuh lisan."
    },
    {
        id: 41,
        text: "Sifat \"Malu\" (*Haya'*) menurut hadis Nabi adalah...",
        options: [
            "Tanda kelemahan",
            "Salah satu dari cabang iman",
            "Penghalang kesuksesan",
            "Sifat tercela"
        ],
        correctAnswer: 1,
        rationale: "\"...dan malu itu salah satu dari cabang iman\".",
        hint: "Status *Haya'* dalam derajat keimanan."
    },
    {
        id: 42,
        text: "Contoh penerapan cabang iman yang berhubungan dengan perbuatan (*amalun bil arkan*) adalah...",
        options: [
            "Mencintai Allah",
            "Takut kepada Allah",
            "Menegakkan salat dan menunaikan zakat",
            "Berharap rahmat Allah"
        ],
        correctAnswer: 2,
        rationale: "Menegakkan salat dan membayar zakat termasuk cabang iman yang berhubungan dengan perbuatan anggota badan.",
        hint: "Amal yang melibatkan fisik (rukun Islam)."
    },
    {
        id: 43,
        text: "Tanda-tanda orang beriman menurut Q.S. Al-Anfal ayat 2 adalah...",
        options: [
            "Selalu kaya raya",
            "Tidak pernah sakit",
            "Bila disebut nama Allah, gemetar hatinya",
            "Selalu menang dalam perdebatan"
        ],
        correctAnswer: 2,
        rationale: "\"Jika mendengar nama Allah Swt. disebut, maka bergetar hatinya...\".",
        hint: "Reaksi hati saat mendengar asma Allah."
    },
    {
        id: 44,
        text: "Menurut Imam Syafi'i, iman tidak sempurna jika tidak menggabungkan tiga unsur, yaitu...",
        options: [
            "Harta, Tahta, Wanita",
            "Ucapan, Perbuatan, dan Niat",
            "Ilmu, Amal, dan Ikhlas",
            "Sabar, Syukur, dan Tawakal"
        ],
        correctAnswer: 1,
        rationale: "Imam Syafi’i mengatakan iman adalah suatu ucapan, suatu perbuatan dan suatu niat.",
        hint: "Tiga unsur yang harus menyatu dalam iman menurut Imam Syafi'i."
    },
    {
        id: 45,
        text: "*Ma’rifatun bil qalbi* dalam Syu’abul Iman artinya...",
        options: [
            "Mengamalkan dengan perbuatan",
            "Meyakini dengan hati",
            "Mengucapkan dengan lisan",
            "Mencintai dengan jiwa"
        ],
        correctAnswer: 1,
        rationale: "*Ma'rifah* adalah keyakinan (*makrifat*). *Qalbi* adalah hati.",
        hint: "Terjemahan langsung dari kata *ma'rifah* dan *qalbi*."
    },
    {
        id: 46,
        text: "Salah satu sifat yang termasuk cabang iman yang berhubungan dengan hati (*Ma’rifatun bil qalbi*) adalah...",
        options: [
            "Menjaga lisan",
            "Berjihad di jalan Allah",
            "Merasa takut kepada Allah (Khauf)",
            "Bersedekah"
        ],
        correctAnswer: 2,
        rationale: "*Khauf* (takut) adalah amal hati. Cabang iman dalam dimensi hati.",
        hint: "Sifat batin (perasaan) yang wajib dimiliki oleh seorang mukmin."
    },
    {
        id: 47,
        text: "*Iqrarun bil lisan* adalah dimensi keimanan yang berarti...",
        options: [
            "Mengucapkan dengan lisan",
            "Meyakini dalam hati",
            "Mengamalkan dengan perbuatan",
            "Berpikir jernih"
        ],
        correctAnswer: 0,
        rationale: "*Iqrar* artinya ucapan. *Lisan* artinya lidah.",
        hint: "Terjemahan dari *iqrar* dan *lisan*."
    },
    {
        id: 48,
        text: "Salah satu tanda orang beriman menurut sub-bab Tanda-Tanda Orang yang Beriman di file *Syuabul Iman.docx* adalah...",
        options: [
            "Tidak pernah salah",
            "Tidak pernah sakit",
            "Selalu mendapat kekayaan",
            "Senantiasa bertawakal setelah bekerja keras"
        ],
        correctAnswer: 3,
        rationale: "Terdapat dalam sub-bab Tanda-Tanda Orang yang Beriman di file *Syuabul Iman.docx*.",
        hint: "Lihat ciri-ciri orang beriman (setelah usaha) pada file yang Anda berikan."
    },
    {
        id: 49,
        text: "Masalah yang *bukan* termasuk *Problematika Ujian Orang Beriman* dalam file *Syuabul Iman.docx* adalah...",
        options: [
            "Kaum munafik yang membenci kaum mukmin",
            "Mukmin yang saling mendengki",
            "Orang kafir yang memerangi kaum mukmin",
            "Ujian kemiskinan dan kelaparan"
        ],
        correctAnswer: 3,
        rationale: "Yang disebutkan adalah mukmin saling mendengki, kaum munafik, orang kafir memerangi, dan tipu muslihat setan.",
        hint: "Cari di bagian akhir file *Syuabul Iman.docx*."
    },
    {
        id: 50,
        text: "Salah satu cabang iman yang termasuk dalam kategori menjaga amanah adalah...",
        options: [
            "Berlebihan dalam berbelanja",
            "Menepati janji",
            "Menunda salat",
            "Berbohong"
        ],
        correctAnswer: 1,
        rationale: "Memelihara amanah dan menepati janji adalah salah satu tanda orang beriman yang menjaga amanah (Syuabul Iman Doc).",
        hint: "Lawan dari sifat khianat."
    },
    {
        id: 51,
        text: "Seorang mukmin senantiasa memprioritaskan ibadah dan salat meskipun sibuk dengan aktivitas duniawi. Hal ini dilakukan karena bertujuan...",
        options: [
            "Agar dilihat oleh orang lain",
            "Untuk menjaga kualitas imannya",
            "Agar cepat kaya",
            "Agar mendapat pujian"
        ],
        correctAnswer: 1,
        rationale: "Terdapat dalam sub-bab Tanda-Tanda Orang yang Beriman: \"ia akan senantiasa memprioritaskan ibadah dan salat untuk menjaga kualitas imannya\".",
        hint: "Tujuan utama salat bagi seorang mukmin di tengah kesibukan."
    },

    // --- TOPIK 4: Masuknya Islam ke Nusantara (Soal 52-68) ---
    {
        id: 52,
        text: "Teori yang menyatakan bahwa Islam masuk ke Indonesia berasal dari Gujarat (India) dikemukakan oleh...",
        options: [
            "Buya Hamka",
            "Snouck Hurgronje",
            "Hoesein Djajadiningrat",
            "Slamet Muljana"
        ],
        correctAnswer: 1,
        rationale: "Teori Gujarat dikemukakan oleh Prof. Dr. C. Snouck Hurgronje.",
        hint: "Tokoh sejarawan Belanda yang terkenal dengan teori ini."
    },
    {
        id: 53,
        text: "Buya Hamka menolak teori Gujarat dan meyakini bahwa Islam masuk ke Nusantara langsung dari...",
        options: [
            "Persia",
            "Cina",
            "Makkah (Arab)",
            "Mesir"
        ],
        correctAnswer: 2,
        rationale: "Teori Makkah oleh Prof. Dr. Buya Hamka menyatakan Islam masuk dari Arab/Makkah pada abad ke-7 M.",
        hint: "Teori yang menyatakan Islam datang langsung dari sumber aslinya."
    },
    {
        id: 54,
        text: "Bukti sejarah tertua tentang keberadaan komunitas muslim di Jawa adalah ditemukannya makam...",
        options: [
            "Maulana Malik Ibrahim",
            "Fatimah binti Maimun di Leran, Gresik",
            "Sunan Ampel",
            "Sultan Demak"
        ],
        correctAnswer: 1,
        rationale: "Bukti sejarah tertua adalah makam Fatimah binti Maimun bin Hibatallah di Leran, Gresik berangka tahun 1082 M.",
        hint: "Makam tertua yang ditemukan di Pulau Jawa."
    },
    {
        id: 55,
        text: "Teori Persia didasarkan pada kesamaan budaya lokal, yaitu...",
        options: [
            "Penggunaan mata uang Dinar",
            "Seni ukir patung",
            "Sistem kasta yang hilang",
            "Upacara Tabot/Tabuik (Asyura) di beberapa daerah"
        ],
        correctAnswer: 3,
        rationale: "Teori Persia didasarkan pada tradisi seperti Tabot (peringatan Asyura) yang mirip tradisi Syiah di Persia.",
        hint: "Peringatan 10 Muharram yang populer di Sumatera Barat dan Bengkulu."
    },
    {
        id: 56,
        text: "Raja pertama Samudra Pasai yang memeluk Islam adalah...",
        options: [
            "Sultan Iskandar Muda",
            "Raden Patah",
            "Meurah Silu (Sultan Malik al-Saleh)",
            "Sultan Ageng Tirtayasa"
        ],
        correctAnswer: 2,
        rationale: "Meurah Silu atau Sultan Malik al-Saleh merupakan pendiri dan raja pertama Samudra Pasai.",
        hint: "Nama raja pendiri Kerajaan Islam pertama di Nusantara."
    },
    {
        id: 57,
        text: "Kerajaan Islam pertama di Pulau Jawa adalah...",
        options: [
            "Mataram Islam",
            "Pajang",
            "Cirebon",
            "Demak"
        ],
        correctAnswer: 3,
        rationale: "Kerajaan Islam pertama di Jawa adalah Demak Bintoro.",
        hint: "Kerajaan yang didirikan oleh Raden Patah."
    },
    {
        id: 58,
        text: "Strategi dakwah Islam di Nusantara yang dilakukan dengan cara damai, bertahap, dan tidak menyakiti budaya lokal disebut...",
        options: [
            "Invasi Militer",
            "Revolusi Budaya",
            "Tadrij dan 'Adamul Haraj",
            "Konfrontasi"
        ],
        correctAnswer: 2,
        rationale: "Langkah strategis para wali adalah *Tadrij* (bertahap) dan *‘Adamul Haraj* (tidak menyakiti).",
        hint: "Dua prinsip utama dakwah Wali Songo."
    },
    {
        id: 59,
        text: "Tokoh ulama yang menyebarkan Islam di wilayah Kutai Kartanegara (Kalimantan Timur) adalah...",
        options: [
            "Datuk Ri Bandang",
            "Datuk Tunggang Parangan",
            "Tuan Tunggang",
            "Syekh Yusuf"
        ],
        correctAnswer: 1,
        rationale: "Datuk Tunggang Parangan berdakwah di Kutai Kartanegara.",
        hint: "Nama ulama yang terkenal di Kalimantan Timur."
    },
    {
        id: 60,
        text: "Sultan Ternate yang menjadikan Islam sebagai landasan resmi bernegara dan mendirikan pesantren adalah...",
        options: [
            "Sultan Baabullah",
            "Sultan Hairun",
            "Sultan Zainal Abidin",
            "Sultan Nuku"
        ],
        correctAnswer: 2,
        rationale: "Sultan Zainal Abidin menjadikan Islam sebagai landasan resmi bernegara dan mendirikan pesantren di Ternate.",
        hint: "Sultan di Indonesia Timur yang fokus pada pendidikan Islam."
    },
    {
        id: 61,
        text: "Salah satu alasan Islam mudah diterima oleh masyarakat Nusantara adalah...",
        options: [
            "Syarat masuk Islam sulit",
            "Islam didukung oleh tentara yang kuat",
            "Syarat masuk Islam mudah dan tidak mengenal kasta",
            "Islam membolehkan perjudian"
        ],
        correctAnswer: 2,
        rationale: "Agama Islam mudah diterima karena syaratnya mudah (syahadat) dan tidak mengenal sistem kasta.",
        hint: "Faktor kunci dalam akidah Islam (kesetaraan)."
    },
    {
        id: 62,
        text: "Selain Samudra Pasai, kerajaan Islam yang menjadi pusat penyebaran di Sumatera Utara pada masa awal adalah...",
        options: [
            "Kerajaan Indragiri",
            "Kerajaan Aceh (Kesultanan Aceh)",
            "Kerajaan Sriwijaya",
            "Kerajaan Malaka"
        ],
        correctAnswer: 1,
        rationale: "Aceh menjadi pusat kegiatan dakwah setelah Samudra Pasai.",
        hint: "Kerajaan Islam besar di ujung Sumatera."
    },
    {
        id: 63,
        text: "Jalur utama penyebaran Islam di Nusantara yang paling banyak memberi pengaruh adalah melalui...",
        options: [
            "Seni dan Budaya",
            "Politik",
            "Perdagangan",
            "Peperangan"
        ],
        correctAnswer: 2,
        rationale: "Para pedaganglah yang membawa Islam masuk, terutama dari Arab, Persia, dan Gujarat.",
        hint: "Jalur yang paling cepat dan luas jangkauannya."
    },
    {
        id: 64,
        text: "Peranan ulama Nusantara yang kembali dari Timur Tengah (seperti Wali Songo) dalam dakwah disebut jalur...",
        options: [
            "Pendidikan",
            "Politik",
            "Kesenian",
            "Perdagangan"
        ],
        correctAnswer: 0,
        rationale: "Mereka mendirikan pesantren untuk mendidik santri.",
        hint: "Cara mereka mencetak kader-kader ulama (*pesantren*)."
    },
    {
        id: 65,
        text: "Pernikahan Raja Hindu dengan putri Muslim (seperti Raja Majapahit dengan putri Champa) menunjukkan jalur dakwah melalui...",
        options: [
            "Politik",
            "Kesenian",
            "Pendidikan",
            "Perkawinan"
        ],
        correctAnswer: 3,
        rationale: "Pernikahan antara muslimah dengan bangsawan lokal.",
        hint: "Hubungan antar keluarga dan nasab."
    },
    {
        id: 66,
        text: "Dalam dakwah Wali Songo, konsep *Tadrij* berarti...",
        options: [
            "Dilakukan secara bertahap",
            "Dilakukan dengan paksaan",
            "Mengutamakan peperangan",
            "Menghilangkan budaya lokal"
        ],
        correctAnswer: 0,
        rationale: "*Tadrij* artinya bertahap.",
        hint: "Ingat arti bahasa dari *tadrij*."
    },
    {
        id: 67,
        text: "Tujuan utama Wali Songo menggunakan pendekatan *Adamul Haraj* adalah...",
        options: [
            "Agar cepat kaya",
            "Tidak menyakiti budaya dan perasaan lokal",
            "Menjadi penguasa wilayah",
            "Menerapkan hukuman keras"
        ],
        correctAnswer: 1,
        rationale: "*Adamul Haraj* artinya tidak menyakiti atau memberatkan.",
        hint: "Prinsip dakwah yang mengedepankan kemudahan dan tanpa pemaksaan."
    },
    {
        id: 68,
        text: "Bukti arkeologis yang menunjukkan pengaruh Islam di daerah Nusa Tenggara ditemukan di...",
        options: [
            "Kerajaan Sriwijaya",
            "Makam Maulana Malik Ibrahim",
            "Kompleks makam Tuan di Selaparang",
            "Masjid Demak"
        ],
        correctAnswer: 2,
        rationale: "Makam ulama di Selaparang, Lombok, menjadi bukti masuknya Islam di sana.",
        hint: "Wilayah Lombok dan Sumbawa."
    },

    // --- TOPIK 5: Sumber Hukum Islam/Prinsip Hukum (Soal 69-85) ---
    {
        id: 69,
        text: "*Al-Kulliyatu Al-Khamsah* artinya adalah...",
        options: [
            "Lima rukun Islam",
            "Lima dasar negara",
            "Lima prinsip dasar hukum Islam",
            "Lima waktu salat"
        ],
        correctAnswer: 2,
        rationale: "*Al-kulliyatu al-khamsah* berarti lima prinsip dasar hukum Islam (*Maqashid Syariah*).",
        hint: "Arti dari kata **'Khamsah'** (lima)."
    },
    {
        id: 70,
        text: "Berikut ini yang *bukan* termasuk dalam lima prinsip dasar (*Al-Kulliyatu Al-Khamsah*) adalah...",
        options: [
            "Hifzhu al-Din (Menjaga Agama)",
            "Hifzhu al-Nafs (Menjaga Jiwa)",
            "Hifzhu al-Aql (Menjaga Akal)",
            "Hifzhu al-Jasad (Menjaga Tubuh Fisik)"
        ],
        correctAnswer: 3,
        rationale: "Lima prinsip adalah menjaga agama, jiwa, akal, keturunan (*nasl*), dan harta. Menjaga tubuh fisik (jasad) secara spesifik bukan istilah bakunya.",
        hint: "Lima prinsip tersebut adalah *Din, Nafs, Aql, Nasl, Mal*."
    },
    {
        id: 71,
        text: "Hukuman *qisas* (balasan setimpal) dalam Islam diterapkan dalam rangka menjaga prinsip...",
        options: [
            "Hifzhu al-Din",
            "Hifzhu al-Nafs (Jiwa)",
            "Hifzhu al-Aql",
            "Hifzhu al-Nasl"
        ],
        correctAnswer: 1,
        rationale: "Menjaga jiwa (*hifzhu al-nafs*) dijadikan alasan diberlakukannya hukum qisas terhadap perbuatan pidana yang mencederai tubuh.",
        hint: "Konsekuensi hukum terhadap perbuatan yang mengancam nyawa."
    },
    {
        id: 72,
        text: "Larangan meminum *khamr* (minuman keras) dan narkoba adalah bentuk perlindungan Islam terhadap...",
        options: [
            "Hifzhu al-Aql (Akal)",
            "Hifzhu al-Mal",
            "Hifzhu al-Nasl",
            "Hifzhu al-Din"
        ],
        correctAnswer: 0,
        rationale: "Allah melarang keras segala sesuatu yang dapat melemahkan dan merusak akal pikiran seperti khamr, untuk menjaga akal (*hifzhu al-’aql*).",
        hint: "Hal yang dapat merusak fungsi otak."
    },
    {
        id: 73,
        text: "Perintah menikah dan larangan zina dimaksudkan untuk menjaga...",
        options: [
            "Hifzhu al-Mal",
            "Hifzhu al-Nasl (Keturunan)",
            "Hifzhu al-Aql",
            "Hifzhu al-Nafs"
        ],
        correctAnswer: 1,
        rationale: "Islam menganjurkan umatnya untuk menikah dan melarang zina dalam rangka menjaga keturunan (*hifzhu al-nasl*).",
        hint: "Upaya menjaga kemurnian nasab."
    },
    {
        id: 74,
        text: "Larangan mencuri, korupsi, dan riba merupakan bentuk perlindungan terhadap...",
        options: [
            "Hifzhu al-Din",
            "Hifzhu al-Nafs",
            "Hifzhu al-Mal (Harta)",
            "Hifzhu al-Nasl"
        ],
        correctAnswer: 2,
        rationale: "Islam melarang mencuri, menipu, riba, korupsi sebagai upaya menjaga harta (*hifzhu al-mal*).",
        hint: "Pelarangan yang terkait dengan ekonomi."
    },
    {
        id: 75,
        text: "Urutan prioritas *Al-Kulliyatu Al-Khamsah* yang disepakati mayoritas ulama adalah...",
        options: [
            "Jiwa - Agama - Akal - Keturunan - Harta",
            "Akal - Jiwa - Agama - Harta - Keturunan",
            "Agama - Jiwa - Akal - Keturunan - Harta",
            "Harta - Jiwa - Agama - Keturunan - Akal"
        ],
        correctAnswer: 2,
        rationale: "Urutan menurut Imam Ghazali dan jumhur ulama: *al-din* (agama), *al-nafs* (jiwa), *al-‘aql* (akal), *al-nasl* (keturunan), dan *al-mal* (harta).",
        hint: "Dimulai dari *Din* (Agama)."
    },
    {
        id: 76,
        text: "Transaksi perbankan yang menetapkan bunga (tambahan) secara sepihak di awal disebut...",
        options: [
            "Mudharabah",
            "Riba",
            "Wadiah",
            "Murabahah"
        ],
        correctAnswer: 1,
        rationale: "Riba adalah mengambil keuntungan atau kelebihan pada pengembalian yang berbeda dari jumlah aslinya (bunga).",
        hint: "Tambahan pembayaran dari pinjaman (*interest*)."
    },
    {
        id: 77,
        text: "Akad kerjasama usaha antara pemilik modal (*shahibul maal*) dan pengelola (*mudharib*) dengan pembagian keuntungan disebut...",
        options: [
            "Wadiah",
            "Qardh",
            "Mudharabah",
            "Murabahah"
        ],
        correctAnswer: 2,
        rationale: "*Mudharabah* adalah akad kerjasama antara peserta (*shahibul maal*) dengan pengelola (*mudharib*) dengan prinsip bagi hasil.",
        hint: "Prinsip bagi hasil antara dua pihak (modal dan usaha)."
    },
    {
        id: 78,
        text: "Prinsip asuransi syariah adalah *takaful*, yang artinya...",
        options: [
            "Mencari keuntungan sebesar-besarnya",
            "Saling menanggung atau tolong-menolong",
            "Jual beli risiko",
            "Investasi bebas"
        ],
        correctAnswer: 1,
        rationale: "*Takaful* artinya saling menanggung atau menanggung bersama (tolong menolong).",
        hint: "Arti kata **'Takaful'**."
    },
    {
        id: 79,
        text: "Dalam *Al-Kulliyatu Al-Khamsah*, perintah menunaikan salat wajib dan zakat adalah cara untuk menjaga...",
        options: [
            "Hifzhu al-Nafs",
            "Hifzhu al-Din (Agama)",
            "Hifzhu al-Aql",
            "Hifzhu al-Mal"
        ],
        correctAnswer: 1,
        rationale: "Salat dan zakat adalah tiang agama dan rukun Islam yang wajib dijaga.",
        hint: "Ibadah wajib yang menjadi pilar utama Islam."
    },
    {
        id: 80,
        text: "*Rahn* dalam fikih muamalah artinya...",
        options: [
            "Sewa-menyewa",
            "Gadai emas",
            "Gadai",
            "Titipan"
        ],
        correctAnswer: 2,
        rationale: "*Rahn* adalah jaminan hutang (gadai).",
        hint: "Istilah fiqih untuk jaminan utang (pegadaian)."
    },
    {
        id: 81,
        text: "*Ijarah* dalam fikih muamalah artinya...",
        options: [
            "Sewa-menyewa",
            "Titipan",
            "Pinjaman",
            "Kerja sama"
        ],
        correctAnswer: 0,
        rationale: "*Ijarah* adalah akad pemindahan hak guna dengan pembayaran sewa.",
        hint: "Transaksi yang melibatkan pemanfaatan jasa/barang sementara."
    },
    {
        id: 82,
        text: "*Wadi'ah* (titipan) dalam perbankan syariah paling erat kaitannya dengan layanan... ",
        options: [
            "Pembiayaan (Kredit)",
            "Asuransi",
            "Investasi Jangka Panjang",
            "Tabungan"
        ],
        correctAnswer: 3,
        rationale: "Tabungan pada dasarnya adalah titipan yang bisa diambil kapan saja.",
        hint: "Produk bank yang sifatnya hanya menyimpan uang."
    },
    {
        id: 83,
        text: "Perlindungan terhadap *Hifzhu al-Nafs* (jiwa) juga mencakup kewajiban untuk...",
        options: [
            "Menjaga batas aurat",
            "Menikahi mahram",
            "Makan dan minum yang halal dan baik",
            "Berdagang dengan jujur"
        ],
        correctAnswer: 2,
        rationale: "Menjaga diri dari bahaya fisik (termasuk asupan).",
        hint: "Kewajiban yang berkaitan dengan asupan tubuh."
    },
    {
        id: 84,
        text: "Jual beli dengan penyerahan barang di kemudian hari sementara pembayaran dilakukan di muka (tunai) disebut...",
        options: [
            "Murabahah",
            "Salam",
            "Istishna",
            "Ijarah"
        ],
        correctAnswer: 1,
        rationale: "Jual beli skema *salam* adalah pelunasan pembayaran di muka sebelum barang diterima (pesanan).",
        hint: "Istilah untuk jual beli pesanan (indent)."
    },
    {
        id: 85,
        text: "Keharusan adanya ijab qabul dalam setiap transaksi jual beli (*Muamalah*) berfungsi untuk menjaga prinsip...",
        options: [
            "Keuntungan yang besar",
            "Kecepatan transaksi",
            "Keadilan dan keterbukaan",
            "Pengurangan pajak"
        ],
        correctAnswer: 2,
        rationale: "Ijab qabul memastikan kedua belah pihak setuju dan transparan (tidak ada *gharar*).",
        hint: "Peran utama ijab qabul."
    },

    // --- TOPIK 6: Wali Songo (Soal 86-102) ---
    {
        id: 86,
        text: "Wali Songo menyebarkan Islam di Pulau Jawa pada abad ke...",
        options: [
            "7-8 M",
            "10-11 M",
            "15-16 M",
            "18-19 M"
        ],
        correctAnswer: 2,
        rationale: "Wali Songo berperan penting pada perempat akhir abad ke-15 hingga paruh abad ke-16.",
        hint: "Periode puncak penyebaran Islam di Jawa."
    },
    {
        id: 87,
        text: "Nama asli Sunan Gresik adalah...",
        options: [
            "Raden Rahmat",
            "Maulana Malik Ibrahim",
            "Raden Paku",
            "Syarif Hidayatullah"
        ],
        correctAnswer: 1,
        rationale: "Maulana Malik Ibrahim dikenal dengan sebutan Sunan Gresik.",
        hint: "Nama lengkap Wali pertama (tertua)."
    },
    {
        id: 88,
        text: "Sunan Ampel (Raden Rahmat) mendirikan pesantren di daerah...",
        options: [
            "Tuban",
            "Demak",
            "Ampel Denta, Surabaya",
            "Cirebon"
        ],
        correctAnswer: 2,
        rationale: "Sunan Ampel dimakamkan di Ampel, Surabaya dan membangun pesantren di sana.",
        hint: "Nama daerah di Surabaya."
    },
    {
        id: 89,
        text: "Falsafah \"Moh Limo\" (menolak 5 perkara tercela) diajarkan oleh...",
        options: [
            "Sunan Kalijaga",
            "Sunan Giri",
            "Sunan Ampel",
            "Sunan Bonang"
        ],
        correctAnswer: 2,
        rationale: "Sunan Ampel mengenalkan ajaran Moh Limo.",
        hint: "Wali yang fokus pada pemurnian akhlak."
    },
    {
        id: 90,
        text: "Sunan Bonang berdakwah menggunakan media kesenian alat musik...",
        options: [
            "Gitar",
            "Seruling",
            "Gamelan (Bonang)",
            "Terbana"
        ],
        correctAnswer: 2,
        rationale: "Sunan Bonang menggunakan alat musik tradisional gamelan (*bonang*) sebagai media dakwah.",
        hint: "Nama alat musik yang sama dengan nama julukannya."
    },
    {
        id: 91,
        text: "Tembang \"Tombo Ati\" yang berisi ajaran akhlak dan spiritual adalah karya dari...",
        options: [
            "Sunan Kalijaga",
            "Sunan Bonang",
            "Sunan Giri",
            "Sunan Kudus"
        ],
        correctAnswer: 1,
        rationale: "Di antara suluk Sunan Bonang yang terkenal adalah Suluk Tombo Ati.",
        hint: "Wali yang menciptakan tembang yang masih populer."
    },
    {
        id: 92,
        text: "Sunan Drajat mengajarkan \"Catur Piwulang\". Salah satunya adalah *Paring teken marang wong kang kalunyon lan wuto*, yang artinya...",
        options: [
            "Memberi makan orang lapar",
            "Memberi tongkat kepada orang buta",
            "Memberi pakaian orang telanjang",
            "Memberi payung orang kehujanan"
        ],
        correctAnswer: 1,
        rationale: "*Paring teken marang wong kang kalunyon lan wuto* artinya memberikan tongkat kepada orang yang buta.",
        hint: "Terjemahan dari kata **'teken'** (tongkat) dan **'wuto'** (buta)."
    },
    {
        id: 93,
        text: "Sunan Kalijaga (Raden Said) terkenal dengan metode dakwahnya melalui seni...",
        options: [
            "Ukir",
            "Lukis",
            "Wayang Kulit",
            "Tari"
        ],
        correctAnswer: 2,
        rationale: "Sunan Kalijaga dikenal sebagai dalang yang mahir memainkan wayang kulit untuk dakwah.",
        hint: "Wali yang paling terkenal dengan asimilasi budaya Jawa."
    },
    {
        id: 94,
        text: "Sunan Kudus melarang menyembelih sapi di wilayah Kudus sebagai bentuk...",
        options: [
            "Penghematan",
            "Toleransi menghormati umat Hindu",
            "Ketakutan akan kualat",
            "Perintah raja"
        ],
        correctAnswer: 1,
        rationale: "Sebagai penghormatan kepada umat Hindu (yang menganggap sapi suci), Sunan Kudus melarang menyembelih sapi.",
        hint: "Sikap toleransi terhadap kepercayaan lokal."
    },
    {
        id: 95,
        text: "Sunan Gunung Jati (Syarif Hidayatullah) berdakwah dan menjadi sultan di...",
        options: [
            "Banten dan Demak",
            "Mataram dan Cirebon",
            "Gresik dan Ampel",
            "Cirebon dan Banten"
        ],
        correctAnswer: 3,
        rationale: "Sunan Gunung Jati menjadi penguasa Kesultanan Cirebon dan menyebarkan Islam di Jawa Barat (termasuk Banten).",
        hint: "Wilayah dakwah di Jawa Barat."
    },
    {
        id: 96,
        text: "Nama asli Sunan Muria adalah...",
        options: [
            "Raden Patah",
            "Raden Paku",
            "Raden Umar Said",
            "Raden Rahmat"
        ],
        correctAnswer: 2,
        rationale: "Nama asli Sunan Muria adalah Raden Umar Said.",
        hint: "Nama kecil dari Sunan Muria."
    },
    {
        id: 97,
        text: "Sunan yang dikenal dengan sebutan *Jatidiri* karena berdakwah di daerah pegunungan Muria adalah...",
        options: [
            "Sunan Kudus",
            "Sunan Bonang",
            "Sunan Kalijaga",
            "Sunan Muria"
        ],
        correctAnswer: 3,
        rationale: "Sunan Muria dimakamkan di Gunung Muria dan berdakwah di sekitarnya (pedalaman).",
        hint: "Wali yang berdakwah di daerah terpencil (gunung)."
    },
    {
        id: 98,
        text: "Sunan Ampel memiliki peran penting dalam pendirian kerajaan Islam pertama di Jawa, yaitu...",
        options: [
            "Majapahit",
            "Demak",
            "Mataram",
            "Pajang"
        ],
        correctAnswer: 1,
        rationale: "Sunan Ampel adalah perencana pendirian Masjid Agung Demak, pusat kerajaan Islam pertama.",
        hint: "Kerajaan yang menjadi pusat Wali Songo."
    },
    {
        id: 99,
        text: "Tiang utama (*saka guru*) Masjid Demak yang terbuat dari serpihan kayu (*saka tatal*) dibuat oleh...",
        options: [
            "Sunan Ampel",
            "Sunan Giri",
            "Sunan Bonang",
            "Sunan Kalijaga"
        ],
        correctAnswer: 3,
        rationale: "*Saka Tatal* dibuat oleh Sunan Kalijaga.",
        hint: "Ingat nama tiang yang terbuat dari serpihan kayu."
    },
    {
        id: 100,
        text: "Peran utama Sunan Giri (*Raden Paku*) dalam dakwah adalah melalui...",
        options: [
            "Hukum Fiqih",
            "Militer",
            "Diplomasi dengan VOC",
            "Pendidikan dan Seni (Permainan Anak)"
        ],
        correctAnswer: 3,
        rationale: "Sunan Giri menciptakan lagu dolanan anak seperti *Cublak-cublak Suweng*.",
        hint: "Wali yang menggunakan media permainan anak."
    },
    {
        id: 101,
        text: "Sunan yang menolak menggunakan gelar kebangsawanan dan memilih menyamakan diri dengan rakyat biasa untuk mempermudah dakwah adalah...",
        options: [
            "Sunan Gresik",
            "Sunan Ampel",
            "Sunan Kalijaga",
            "Sunan Gunung Jati"
        ],
        correctAnswer: 2,
        rationale: "Sunan Kalijaga dikenal dengan pendekatan kultural yang sangat merakyat.",
        hint: "Wali yang paling membaur dengan masyarakat."
    },
    {
        id: 102,
        text: "Sikap *Tasamuh* (Toleransi) Sunan Kudus terlihat dalam arsitektur Masjid Menara Kudus yang bercorak...",
        options: [
            "Timur Tengah",
            "Eropa",
            "Hindu-Jawa (Candi)",
            "Tionghoa"
        ],
        correctAnswer: 2,
        rationale: "Bentuk Menara Kudus menyerupai bangunan candi Hindu sebagai bentuk akulturasi budaya.",
        hint: "Gaya arsitektur khas Jawa kuno."
    },

    // --- TOPIK 7: Akhlak Mazmumah (Soal 103-120) ---
    {
        id: 103,
        text: "Sifat *Israf* dalam membelanjakan harta berarti...",
        options: [
            "Kikir",
            "Hemat",
            "Berlebih-lebihan/melampaui batas",
            "Sederhana"
        ],
        correctAnswer: 2,
        rationale: "Islam melarang perilaku berlebih-lebihan atau melampaui batas (*israf*).",
        hint: "Arti kata **'Israf'**."
    },
    {
        id: 104,
        text: "*Tabzir* (boros) menurut Q.S. Al-Isra: 27 disebut sebagai saudara...",
        options: [
            "Malaikat",
            "Setan",
            "Manusia",
            "Jin"
        ],
        correctAnswer: 1,
        rationale: "\"Sesungguhnya orang-orang yang pemboros itu adalah saudara setan\".",
        hint: "Hubungan pemboros dengan entitas negatif."
    },
    {
        id: 105,
        text: "Melakukan ibadah dengan niat ingin dipuji atau dilihat orang lain disebut...",
        options: [
            "Ikhlas",
            "Riya'",
            "Sum'ah",
            "Takabur"
        ],
        correctAnswer: 1,
        rationale: "*Riya’* yaitu melakukan ibadah dengan niat supaya mendapat pujian atau penghargaan dari orang lain (dilihat).",
        hint: "Ingin **dilihat** orang lain saat beramal."
    },
    {
        id: 106,
        text: "Menceritakan atau memperdengarkan amal ibadah yang sudah dilakukan kepada orang lain agar mendapat pujian disebut...",
        options: [
            "Riya'",
            "Sum'ah",
            "Ujub",
            "Takabur"
        ],
        correctAnswer: 1,
        rationale: "*Sum’ah* berarti memperdengarkan amal ibadah kepada orang lain agar mendapat pujian.",
        hint: "Ingin **didengar** orang lain setelah beramal."
    },
    {
        id: 107,
        text: "*Takabur* adalah sifat tercela yang artinya...",
        options: [
            "Rendah diri",
            "Sombong/Merasa lebih hebat",
            "Iri hati",
            "Pamer"
        ],
        correctAnswer: 1,
        rationale: "Takabur adalah sikap seseorang yang menunjukkan sifat sombong atau merasa lebih kuat/hebat dari orang lain.",
        hint: "Sikap yang menolak kebenaran dan meremehkan orang lain."
    },
    {
        id: 108,
        text: "Bahaya sifat *Hasad* (dengki) menurut hadis Nabi adalah...",
        options: [
            "Menambah teman",
            "Memakan (menghapus) kebaikan seperti api memakan kayu bakar",
            "Membuat badan sehat",
            "Menambah harta"
        ],
        correctAnswer: 1,
        rationale: "\"...hasad dapat memakan kebaikan seperti api memakan kayu bakar\".",
        hint: "Efek *Hasad* pada pahala amal."
    },
    {
        id: 109,
        text: "Cara menghindari sifat berfoya-foya (*hedonisme*) adalah...",
        options: [
            "Membelanjakan harta sesuka hati",
            "Mengikuti tren mode terbaru",
            "Hidup sederhana dan bersedekah",
            "Berhutang untuk gaya hidup"
        ],
        correctAnswer: 2,
        rationale: "Cara menghindari berfoya-foya: membiasakan bersedekah dan bergaya hidup sederhana.",
        hint: "Lawan dari hidup mewah dan boros."
    },
    {
        id: 110,
        text: "Sifat merasa tidak senang melihat orang lain mendapat nikmat dan berharap nikmat itu hilang disebut...",
        options: [
            "Ghadhab",
            "Hasad",
            "Namimah",
            "Fitnah"
        ],
        correctAnswer: 1,
        rationale: "*Hasad* adalah sifat merasa tidak senang terhadap kebahagiaan orang lain dan berusaha menghilangkan nikmat tersebut.",
        hint: "Iri hati yang disertai harapan buruk."
    },
    {
        id: 111,
        text: "*Riya’* termasuk dalam kategori syirik...",
        options: [
            "Akbar (Besar)",
            "Khafi (Samar/Kecil)",
            "Jali (Jelas)",
            "Mutlaq"
        ],
        correctAnswer: 1,
        rationale: "Rasulullah menegaskan bahwa *riya’* termasuk *syirik khafi* (samar) atau syirik kecil.",
        hint: "Jenis syirik yang tersembunyi."
    },
    {
        id: 112,
        text: "Sikap rendah hati yang merupakan lawan dari *takabur* disebut...",
        options: [
            "Tawadhu'",
            "Tawakal",
            "Qanaah",
            "Zuhud"
        ],
        correctAnswer: 0,
        rationale: "Rendah hati (*tawadhu’*) merupakan lawan dari sifat takabur.",
        hint: "Lawan kata dari kesombongan."
    },
    {
        id: 113,
        text: "Perbuatan *ghadhab* (marah) yang tidak terkontrol dapat merusak prinsip *Al-Kulliyatu Al-Khamsah*, yaitu...",
        options: [
            "Hifzhu al-Din",
            "Hifzhu al-Mal",
            "Hifzhu al-Nafs (Jiwa)",
            "Hifzhu al-Aql"
        ],
        correctAnswer: 2,
        rationale: "Marah tak terkontrol dapat berujung pada kekerasan/pembunuhan (ancaman jiwa).",
        hint: "Dampak ekstrem dari kemarahan yang tidak terkontrol."
    },
    {
        id: 114,
        text: "Sifat *Ujub* adalah akhlak mazmumah yang artinya...",
        options: [
            "Sombong kepada orang lain",
            "Mencari popularitas",
            "Melakukan kebaikan diam-diam",
            "Bangga diri atas amal perbuatan sendiri"
        ],
        correctAnswer: 3,
        rationale: "*Ujub* adalah merasa hebat dengan amal sendiri tanpa menyandarkan pada Allah.",
        hint: "Sifat **'merasa diri'** yang sering menyertai riya."
    },
    {
        id: 115,
        text: "Sikap mudah marah atau temperamental dalam bahasa Arab disebut...",
        options: [
            "Syaja'ah",
            "Hilm",
            "Sabar",
            "Ghadhab"
        ],
        correctAnswer: 3,
        rationale: "Temperamental berasal dari kata *ghadhab* (marah).",
        hint: "Istilah untuk sifat mudah marah."
    },
    {
        id: 116,
        text: "Lawan dari sifat *Israf* (berlebihan) dan *Tabzir* (boros) adalah...",
        options: [
            "Iqtishad (Hemat/Sederhana)",
            "Bakhil (Kikir)",
            "Tamak (Serakah)",
            "Hedonisme"
        ],
        correctAnswer: 0,
        rationale: "*Iqtishad* adalah perilaku pertengahan yang hemat dan sederhana (tidak boros dan tidak kikir).",
        hint: "Konsep ekonomi Islam yang berada di tengah antara kikir dan boros."
    },
    {
        id: 117,
        text: "Seseorang yang melakukan *Sum'ah* berpotensi kehilangan pahala karena...",
        options: [
            "Amalnya tidak tercatat malaikat",
            "Niatnya telah tercampur dengan pujian manusia",
            "Amalnya terlalu sedikit",
            "Ia tidak mempublikasikannya"
        ],
        correctAnswer: 1,
        rationale: "*Sum'ah* merusak keikhlasan (*syirik khafi*) karena mengharap pujian manusia.",
        hint: "Elemen krusial yang hilang akibat *riya* dan *sum'ah*."
    },
    {
        id: 118,
        text: "Salah satu dampak negatif dari *Takabur* adalah...",
        options: [
            "Terisolasi dari pergaulan",
            "Menolak kebenaran dan meremehkan orang lain",
            "Menjadi miskin",
            "Mendapat banyak musuh"
        ],
        correctAnswer: 1,
        rationale: "Nabi mendefinisikan *takabur* sebagai *batarul haq* (menolak kebenaran) dan *ghamthun nas* (meremehkan orang).",
        hint: "Dampak utama kesombongan dalam pandangan Islam."
    },
    {
        id: 119,
        text: "Jika seseorang beramal secara sembunyi-sembunyi, kemudian secara tidak sengaja amal tersebut diketahui orang lain, maka hukumnya...",
        options: [
            "Tidak termasuk riya' jika hati tetap ikhlas",
            "Otomatis menjadi riya'",
            "Amalnya gugur",
            "Wajib mengulang amalnya"
        ],
        correctAnswer: 0,
        rationale: "*Riya'* hanya terjadi jika niatnya adalah untuk dilihat. Jika hati tetap ikhlas, amal tetap sah.",
        hint: "Fokus pada **niat** saat beramal."
    },
    {
        id: 120,
        text: "Cara yang paling efektif untuk mengobati penyakit *Hasad* (dengki) adalah dengan membiasakan diri bersikap...",
        options: [
            "Sabar (menahan diri)",
            "*Ghadhab* (marah)",
            "*Tawadhu* (rendah hati)",
            "Bersyukur (Syukur) dan senang atas nikmat orang lain"
        ],
        correctAnswer: 3,
        rationale: "Bersyukur akan menghilangkan rasa kurang, dan senang atas nikmat orang lain akan menghilangkan iri hati.",
        hint: "Lawan dari rasa tidak puas dan iri hati."
    },
    {
        id: 121,
        text: "Potongan ayat Q.S. Al-Isra’ ayat 32, *\"wa lā taqrabuz-zinā\"* memiliki arti yang melarang perbuatan... ",
        options: [
            "melakukan zina",
            "mendekati zina",
            "menjauhi pergaulan bebas",
            "melakukan pacaran",
        ],
        correctAnswer: 1,
        rationale: "Kata *'Lā taqrabu'* berarti 'Janganlah kamu mendekati'. Larangan ini lebih tegas, mencakup segala perbuatan yang dapat mengarah pada zina (mukadimah zina).",
        hint: "Perhatikan makna kata kerja 'Taqrabu'.",
    },
    {
        id: 122,
        text: "Dalam Q.S. An-Nur ayat 2, hukuman bagi pezina yang belum menikah (*Ghairu Muhsan*) adalah...",
        options: [
            "dirajam sampai mati",
            "didera 50 kali dan diasingkan",
            "didera 100 kali",
            "didera 100 kali dan diasingkan 1 tahun",
        ],
        correctAnswer: 3,
        rationale: "Bagi pezina *Ghairu Muhsan*, hukumannya adalah didera 100 kali dan ditambah dengan pengasingan selama satu tahun, berdasarkan tafsir dan hadis terkait Q.S. An-Nur: 2.",
        hint: "Bagi yang belum menikah, hukumannya lebih dari sekadar dera.",
    },
    {
        id: 123,
        text: "Definisi pezina *Muhsan* dalam hukum Islam adalah...",
        options: [
            "pelaku zina yang sudah baligh dan berakal",
            "pelaku zina yang belum pernah menikah secara sah",
            "pelaku zina yang sudah pernah menikah secara sah",
            "pelaku zina yang bertobat setelah melakukan perbuatan tersebut",
        ],
        correctAnswer: 2,
        rationale: "Pezina *Muhsan* adalah orang yang sudah baligh, berakal, merdeka, dan sudah pernah melakukan hubungan suami istri dalam pernikahan yang sah.",
        hint: "Berkaitan dengan status pernikahan sah.",
    },
    {
        id: 124,
        text: "Salah satu hikmah larangan zina dan pergaulan bebas yang berkaitan erat dengan hak anak di masa depan adalah...",
        options: [
            "mencegah kriminalitas",
            "menjaga kemuliaan wanita",
            "mencegah percampuran nasab",
            "menciptakan ketenangan jiwa",
        ],
        correctAnswer: 2,
        rationale: "Percampuran nasab akan mengacaukan garis keturunan, hak waris, dan perwalian anak, yang merupakan dampak sosial-agama terbesar dari zina.",
        hint: "Fokus pada garis keturunan/identitas anak.",
    },
    {
        id: 125,
        text: "Menutup aurat dan menghindari *khalwat* (berduaan dengan bukan mahram) merupakan implementasi dari larangan mendekati zina yang disebut sebagai tindakan...",
        options: [
            "degradasi moral",
            "hukuman ta'zir",
            "preventif (pencegahan)",
            "kuratif (pengobatan)",
        ],
        correctAnswer: 2,
        rationale: "Islam mengajarkan untuk menutup jalan menuju kemaksiatan (*sadd az-zara'i*), yang merupakan tindakan pencegahan (preventif).",
        hint: "Kata kunci: sebelum perbuatan terjadi.",
    },
    {
        id: 126,
        text: "Hukuman bagi pezina *Muhsan* (sudah menikah) yang ditetapkan berdasarkan Hadis Nabi SAW adalah...",
        options: [
            "didera 100 kali dan diasingkan",
            "didera 80 kali",
            "dirajam (dilempari batu) sampai mati",
            "dipenjara seumur hidup",
        ],
        correctAnswer: 2,
        rationale: "Hukuman *hudud* untuk pezina *Muhsan* adalah rajam, yang dianggap hukuman terberat karena pelanggaran terhadap ikatan suci pernikahan.",
        hint: "Hukuman terberat bagi yang mengkhianati pernikahan.",
    },
    {
        id: 127,
        text: "Menurut Hadis Rasulullah SAW yang diriwayatkan oleh Abdullah bin Umar ra, ketika zina dan perbuatan keji dilegalkan, maka Allah akan menimpakan...",
        options: [
            "kemiskinan yang merajalela",
            "perpecahan antar umat",
            "wabah (*Tha’un*) dan penyakit yang belum pernah ada",
            "bencana alam (banjir dan gempa)",
        ],
        correctAnswer: 2,
        rationale: "Materi menyebutkan: 'kecuali tersebar di kaum itu **Thaun (wabah)** dan penyakit yang belum pernah ada pada pendahulu mereka.'",
        hint: "Penyakit baru yang tidak terduga.",
    },
    {
        id: 128,
        text: "Batasan aurat laki-laki yang wajib ditutup minimal di hadapan laki-laki lain dan saat shalat adalah...",
        options: [
            "seluruh tubuh kecuali wajah",
            "antara pusar sampai lutut",
            "dari dada sampai lutut",
            "seluruh tubuh",
        ],
        correctAnswer: 1,
        rationale: "Mayoritas ulama menetapkan aurat laki-laki adalah antara pusar hingga lutut.",
        hint: "Aurat minimal pria.",
    },
    {
        id: 129,
        text: "Perilaku yang paling mendekati zina dan dilarang secara spesifik oleh Al-Qur'an dan Hadis adalah...",
        options: [
            "saling menyapa dengan sopan",
            "saling menolong dalam kesulitan",
            "bercumbu rayu dan berkhalwat",
            "bekerja dalam satu kantor",
        ],
        correctAnswer: 2,
        rationale: "Bercumbu rayu dan berkhalwat (berdua-duaan di tempat sepi) adalah 'pintu' yang paling cepat menuju zina.",
        hint: "Contoh nyata *mukadimah* zina.",
    },
    {
        id: 130,
        text: "Hukuman bagi pezina disebut *'Had'*. Had merupakan hukuman yang ketentuannya...",
        options: [
            "ditetapkan oleh hakim",
            "ditetapkan oleh masyarakat",
            "ditetapkan oleh Allah (syariat)",
            "ditetapkan oleh wali nikah",
        ],
        correctAnswer: 2,
        rationale: "*Had* adalah hukuman pidana yang batas-batasnya (jumlah dera/rajam) telah ditetapkan secara pasti oleh Allah SWT dan Rasul-Nya.",
        hint: "Hukuman yang telah 'terbatas' dan pasti dalam syariat.",
    },
    {
        id: 131,
        text: "Mengapa Islam melarang pergaulan bebas di luar nikah?",
        options: [
            "untuk membatasi interaksi sosial",
            "untuk menjaga kehormatan (*hifz al-ird*) dan keturunan (*hifz an-nasl*)",
            "karena itu adalah tradisi Arab",
            "agar laki-laki tidak bekerja",
        ],
        correctAnswer: 1,
        rationale: "Dua tujuan utama syariat (*maqashid syari'ah*) dalam hal ini adalah menjaga kehormatan individu dan menjaga kejelasan keturunan.",
        hint: "Fokus pada tujuan perlindungan syariat.",
    },
    {
        id: 132,
        text: "Berdasarkan materi, apakah konsekuensi agama bagi anak yang lahir dari perbuatan zina?",
        options: [
            "Anak tersebut tidak boleh hidup",
            "Anak tersebut hanya dinasabkan kepada ibunya",
            "Anak tersebut otomatis menjadi yatim",
            "Anak tersebut memiliki hak waris penuh dari ayah biologisnya",
        ],
        correctAnswer: 1,
        rationale: "Anak zina (waladul zina) secara syariat hanya dinasabkan kepada ibunya, sehingga tidak memiliki hubungan nasab, waris, dan perwalian dari ayah biologisnya.",
        hint: "Anak dinasabkan kepada siapa?",
    },
    {
        id: 133,
        text: "Sikap yang paling benar dalam menyikapi pergaulan antara laki-laki dan perempuan adalah...",
        options: [
            "membolehkan interaksi tanpa batas asalkan saling suka",
            "menghindari interaksi sama sekali",
            "berinteraksi seperlunya dengan menjaga adab, hijab, dan menahan pandangan",
            "berteman dekat dengan harapan bisa saling menikah",
        ],
        correctAnswer: 2,
        rationale: "Islam tidak melarang interaksi, tetapi membatasi interaksi tersebut hanya seperlunya (profesional/sosial) dengan batasan syariat (hijab, adab, menahan pandangan).",
        hint: "Keseimbangan antara sosial dan syariat.",
    },
    {
        id: 134,
        text: "Salah satu penyakit yang secara spesifik disebutkan dalam materi sebagai konsekuensi zina adalah...",
        options: [
            "Flu Burung",
            "Thaun (Wabah)",
            "Diabetes",
            "Kanker",
        ],
        correctAnswer: 1,
        rationale: "Hadis yang dikutip di materi secara spesifik menyebut 'wabah (Thaun)' dan penyakit yang belum pernah ada.",
        hint: "Penyakit yang muncul akibat zina.",
    },
    {
        id: 135,
        text: "Perhatikan lafaz: وَلَا تَقْرَبُواْ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةً وَسَآءَ سَبِيلًۭا. Kata *'Fāḥišah'* dalam ayat tersebut artinya...",
        options: [
            "jalan yang buruk",
            "perbuatan keji",
            "berhati-hati",
            "tujuan hidup",
        ],
        correctAnswer: 1,
        rationale: "Kata *'Fāḥišah'* berarti perbuatan yang sangat keji, jahat, atau melampaui batas.",
        hint: "Deskripsi moral dari zina.",
    },
    {
        id: 136,
        text: "Dalam kasus perzinaan, salah satu hukuman bagi pezina Ghairu Muhsan adalah *'Taghrib'*, yang berarti...",
        options: [
            "didera",
            "dirajam",
            "diasingkan",
            "dipenjara",
        ],
        correctAnswer: 2,
        rationale: "*Taghrib* adalah hukuman tambahan berupa pengasingan dari daerah tempat tinggal selama satu tahun.",
        hint: "Hukuman sosial yang memisahkan dari lingkungan.",
    },
    {
        id: 137,
        text: "Syarat penjatuhan hukuman had zina yang paling berat (berdasarkan Q.S. An-Nur) adalah adanya...",
        options: [
            "pengakuan pelaku",
            "bukti foto dan video",
            "empat orang saksi laki-laki yang adil",
            "laporan dari keluarga korban",
        ],
        correctAnswer: 2,
        rationale: "Syariat menetapkan syarat yang sangat ketat, yaitu empat orang saksi laki-laki yang adil dan melihat langsung perbuatan tersebut.",
        hint: "Jumlah saksi yang diperlukan.",
    },
    {
        id: 138,
        text: "Manakah yang *bukan* merupakan upaya preventif untuk menghindari zina?",
        options: [
            "menjaga pandangan (*ghaddul bashar*)",
            "menjauhi *khalwat*",
            "berpuasa sunah",
            "melakukan pacaran Islami",
        ],
        correctAnswer: 3,
        rationale: "Tidak ada istilah 'pacaran Islami' karena semua bentuk pacaran cenderung mendekati zina (*mukadimah* zina) dan berpotensi melanggar syariat.",
        hint: "Cari yang tidak sesuai dengan ajaran Islam.",
    },

    // === TOPIK 2: FASTABIQUL KHAIRAT (17 SOAL) ===
    {
        id: 139,
        text: "Makna dari *Fastabiqul Khairat* yang terkandung dalam Q.S. Al-Baqarah ayat 148 adalah...",
        options: [
            "bersabar dalam ujian",
            "berlomba-lomba dalam kebaikan",
            "menuntut ilmu setinggi-tingginya",
            "berhijrah ke tempat yang lebih baik",
        ],
        correctAnswer: 1,
        rationale: "*Fastabiqul Khairat* secara harfiah berarti 'berlomba-lomba dalam kebaikan' atau bersegera dalam melakukan amal saleh.",
        hint: "Fokus pada kata 'Sabiqu' (berlomba).",
    },
    {
        id: 140,
        text: "Dalam Q.S. Fatir ayat 32, golongan yang kebaikannya jauh lebih banyak dan selalu bersegera dalam kebajikan disebut...",
        options: [
            "*Zalimun Linafsihi*",
            "*Muqtasid*",
            "*Sabiqun bil Khairat*",
            "*Muttaqin*",
        ],
        correctAnswer: 2,
        rationale: "*Sabiqun bil Khairat* berarti orang-orang yang terdepan/terdahulu dalam kebaikan, yang amalnya selalu bermuara pada ibadah yang berpahala.",
        hint: "Mereka yang paling unggul/terdepan.",
    },
    {
        id: 141,
        text: "Perhatikan Q.S. Fatir ayat 32. Golongan *'Muqtasid'* memiliki karakteristik...",
        options: [
            "lebih banyak dosa daripada amal",
            "imbang antara kebaikan dan keburukan",
            "hanya melakukan ibadah wajib",
            "selalu meninggalkan perintah Allah",
        ],
        correctAnswer: 1,
        rationale: "*Muqtasid* adalah golongan pertengahan, yang amal baiknya sebanding (seimbang) dengan kesalahan yang diperbuatnya.",
        hint: "Artinya 'pertengahan' atau 'hemat'.",
    },
    {
        id: 142,
        text: "Golongan *'Zalimun Linafsihi'* dalam Q.S. Fatir ayat 32 adalah mereka yang...",
        options: [
            "menzalimi orang lain",
            "berbuat dosa lebih banyak daripada berbuat baik",
            "selalu menyakiti hati sendiri",
            "hanya peduli pada diri sendiri",
        ],
        correctAnswer: 1,
        rationale: "*Zalimun linafsihi* adalah orang yang menganiaya diri sendiri karena porsi perbuatan dosanya lebih banyak daripada amal salehnya.",
        hint: "Zalim terhadap diri sendiri.",
    },
    {
        id: 143,
        text: "Sikap seorang Muslim dalam menghadapi kompetisi dengan orang lain dalam hal kebaikan haruslah...",
        options: [
            "merasa paling hebat dan meremehkan lawan",
            "menjadi iri hati dan berusaha menjatuhkan lawan",
            "ikhlas, bersemangat, dan menjadikan lawan sebagai pendorong",
            "menganggap persaingan tidak penting",
        ],
        correctAnswer: 2,
        rationale: "Kompetisi dalam kebaikan harus didasari niat ikhlas dan semangat positif, menjadikan orang lain sebagai motivasi, bukan rasa dengki.",
        hint: "Sikap hati yang benar dalam bersaing.",
    },
    {
        id: 144,
        text: "Dalam Q.S. Al-Maidah ayat 48, Al-Qur'an memiliki fungsi sebagai *'Muhaimin'* terhadap kitab-kitab sebelumnya. Arti *Muhaimin* adalah...",
        options: [
            "pembawa kabar gembira",
            "penjelas hukum",
            "batu ujian atau pengawas kebenaran",
            "pengganti kitab lama",
        ],
        correctAnswer: 2,
        rationale: "*Muhaimin* berarti pengawas, korektor, atau batu ujian yang membenarkan dan mengoreksi penyimpangan yang mungkin terjadi pada kitab suci sebelumnya.",
        hint: "Fungsi Al-Qur'an terhadap Taurat, Injil, dan Zabur.",
    },
    {
        id: 145,
        text: "Makna terpenting dari *Fastabiqul Khairat* yang harus direalisasikan dalam kehidupan sehari-hari adalah...",
        options: [
            "menunda amal saleh hingga waktu luang",
            "bersegera dan tidak menunda-nunda amal saleh",
            "membuat perlombaan resmi di masjid",
            "hanya berlomba dalam hal kekayaan",
        ],
        correctAnswer: 1,
        rationale: "Inti dari *Fastabiqul Khairat* adalah *istibaq* (bersegera), yang berarti menghindari menunda-nunda kebaikan.",
        hint: "Prinsip menghindari Taswif.",
    },
    {
        id: 146,
        text: "Salah satu contoh implementasi *Fastabiqul Khairat* di lingkungan sekolah adalah...",
        options: [
            "menyontek agar nilai tertinggi",
            "mengikuti semua kegiatan ekstrakurikuler tanpa izin",
            "bersegera membayar infak dan mengikuti shalat dhuha berjamaah",
            "memamerkan hasil kerja kepada teman",
        ],
        correctAnswer: 2,
        rationale: "Infak dan shalat dhuha adalah amal saleh, dan bersegera melakukannya menunjukkan semangat *fastabiqul khairat*.",
        hint: "Perilaku ibadah atau sosial yang bernilai kebaikan.",
    },
    {
        id: 147,
        text: "Sikap yang sesuai dengan ajaran Islam ketika seseorang mendapatkan nikmat atau kemenangan dalam suatu perlombaan adalah...",
        options: [
            "bersikap sombong (*takabur*)",
            "bersyukur (*syukur*) dan tawadhu (*rendah hati*)",
            "meremehkan peserta lain",
            "menyimpan nikmat itu sendiri",
        ],
        correctAnswer: 1,
        rationale: "Syukur adalah mengakui nikmat berasal dari Allah, dan tawadhu adalah menyadari bahwa nikmat itu hanyalah titipan.",
        hint: "Lawan dari takabur.",
    },
    {
        id: 148,
        text: "Sistem kepribadian yang dimiliki oleh golongan *Sabiqun bil Khairat* adalah...",
        options: [
            "*Ammarah bi as-suu'*",
            "*Lawwamah*",
            "*Muthmainnah*",
            "*Musawwifah*",
        ],
        correctAnswer: 2,
        rationale: "Materi menyebutkan *Sabiqun bil Khairat* memiliki kepribadian *Muthmainnah* (jiwa yang tenang dan patuh pada kebenaran).",
        hint: "Kepribadian yang paling mulia.",
    },
    {
        id: 149,
        text: "Hadis Nabi SAW menyatakan bahwa sebaik-baik manusia adalah yang...",
        options: [
            "paling banyak hartanya",
            "paling panjang umurnya dan baik amalnya",
            "paling tinggi jabatannya",
            "paling tampan rupanya",
        ],
        correctAnswer: 1,
        rationale: "Konsep *Fastabiqul Khairat* menekankan kualitas amal (*khairat*), bukan kuantitas materi atau fisik.",
        hint: "Kualitas hidup dilihat dari umur dan amal.",
    },
    {
        id: 150,
        text: "Ketika seorang Muslim menghadapi perbedaan pendapat, semangat *Fastabiqul Khairat* mengarahkan agar...",
        options: [
            "berdebat sampai menang",
            "kembali kepada Al-Qur'an dan Hadis dan bersabar dalam perbedaan",
            "mengikuti pendapat terbanyak",
            "mengabaikan perbedaan",
        ],
        correctAnswer: 1,
        rationale: "Q.S. Al-Maidah 48 menyiratkan bahwa perbedaan adalah ujian, dan perintahnya adalah kembali kepada Allah dan berlomba dalam kebajikan.",
        hint: "Rujukan tertinggi umat Islam.",
    },
    {
        id: 151,
        text: "Prinsip *Fastabiqul Khairat* mengajarkan bahwa ujian terhadap pemberian-Nya kepadamu (seperti perbedaan) harus disikapi dengan...",
        options: [
            "mengeluh dan putus asa",
            "berkompetisi dalam kebajikan",
            "mencari kesalahan orang lain",
            "mengisolasi diri dari masyarakat",
        ],
        correctAnswer: 1,
        rationale: "Q.S. Al-Maidah 48: 'tetapi Allah hendak menguji kamu terhadap pemberian-Nya kepadamu, maka berlomba-lombalah berbuat kebajikan.'",
        hint: "Perintah setelah disebutkan Allah menguji perbedaan.",
    },
    {
        id: 152,
        text: "Seseorang yang berperilaku baik menurut ukuran manusia (moralitas, rasionalitas) tetapi belum tentu bernilai baik menurut Allah disebut sebagai contoh dari golongan...",
        options: [
            "*Zalimun Linafsihi*",
            "*Muqtasid*",
            "*Sabiqun bil Khairat*",
            "*Munafiqun*",
        ],
        correctAnswer: 1,
        rationale: "Materi menyebutkan *Muqtasid* bisa berarti bernilai baik menurut ukuran manusia, tetapi belum tentu baik menurut ukuran Allah karena berpusat pada antroposentris.",
        hint: "Golongan yang 'pertengahan' secara spiritual.",
    },
    {
        id: 153,
        text: "Etos kerja yang sesuai dengan *Fastabiqul Khairat* adalah...",
        options: [
            "kerja keras, disiplin, dan menghargai waktu",
            "kerja santai, mengutamakan istirahat",
            "bekerja hanya untuk uang",
            "bekerja tanpa target yang jelas",
        ],
        correctAnswer: 0,
        rationale: "Berlomba dalam kebaikan menuntut kesungguhan, disiplin, dan penghargaan terhadap waktu, menjadikannya ibadah yang berkualitas.",
        hint: "Etos kerja yang profesional dan ikhlas.",
    },
    {
        id: 154,
        text: "Dalam Q.S. Al-Baqarah: 148, disebutkan bahwa *'li-kullin wijhatun huwa muwallīhā'* yang artinya...",
        options: [
            "setiap umat memiliki syariat yang berbeda",
            "setiap umat memiliki kiblat masing-masing",
            "setiap umat harus saling membantu",
            "setiap umat wajib berpuasa",
        ],
        correctAnswer: 1,
        rationale: "Ayat tersebut menyatakan bahwa bagi tiap-tiap umat ada kiblatnya sendiri-sendiri, menunjukkan perbedaan arah shalat sebelum ditetapkan Ka'bah.",
        hint: "Fokus pada konteks kiblat shalat.",
    },
    {
        id: 155,
        text: "Kesadaran bahwa semua amal dan perbuatan akan dipertanggungjawabkan di hadapan Allah SWT disebut...",
        options: [
            "Yaumul Hisab",
            "Yaumul Qiyamah",
            "Yaumul Mahsyar",
            "Yaumul Barzakh",
        ],
        correctAnswer: 0,
        rationale: "*Yaumul Hisab* adalah hari perhitungan amal, yang menjadi motivasi utama untuk *Fastabiqul Khairat*.",
        hint: "Hari perhitungan amal.",
    },

    // === TOPIK 3: SYU'ABUL IMAN (17 SOAL) ===
    {
        id: 156,
        text: "Istilah *'Syu’abul Iman'* secara bahasa berarti...",
        options: [
            "Rukun Iman",
            "Cabang-cabang Iman",
            "Hukum Islam",
            "Tingkatan Iman",
        ],
        correctAnswer: 1,
        rationale: "*Syu'ab* adalah bentuk jamak dari *Syu'bah* yang berarti cabang atau bagian.",
        hint: "Makna kata 'Syu'ab'.",
    },
    {
        id: 157,
        text: "Menurut Hadis Nabi SAW, jumlah cabang iman (*Syu’abul Iman*) adalah sebanyak...",
        options: [
            "6",
            "10",
            "77",
            "99",
        ],
        correctAnswer: 2,
        rationale: "Dalam hadis riwayat Muslim, Nabi SAW bersabda: 'Iman itu 77 cabang...', yang kemudian dijabarkan oleh ulama seperti Syeikh Nawawi al-Jawi.",
        hint: "Angka yang sering disebut.",
    },
    {
        id: 158,
        text: "Cabang iman yang paling tinggi dan utama adalah...",
        options: [
            "malu (*Al-Haya'*)",
            "mengucapkan *Laa ilaaha illallah*",
            "menyingkirkan gangguan dari jalan",
            "menjaga lisan",
        ],
        correctAnswer: 1,
        rationale: "Puncak keimanan adalah pengakuan tauhid, yaitu kalimat *Laa ilaaha illallah*.",
        hint: "Kalimat tauhid.",
    },
    {
        id: 159,
        text: "Cabang iman yang paling rendah adalah...",
        options: [
            "malu (*Al-Haya'*)",
            "berkata yang baik",
            "menyingkirkan gangguan dari jalan",
            "menghormati orang tua",
        ],
        correctAnswer: 2,
        rationale: "Cabang terendah adalah perbuatan fisik yang melibatkan orang lain dan lingkungan, yaitu *Imāthah al-Ażā 'an ath-Tharīq* (menyingkirkan gangguan dari jalan).",
        hint: "Perbuatan fisik yang tampaknya sederhana.",
    },
    {
        id: 160,
        text: "Iman memiliki tiga dimensi utama, yaitu...",
        options: [
            "Dunia, Barzah, Akhirat",
            "Niat, Usaha, Hasil",
            "Hati, Lisan, Perbuatan",
            "Akidah, Syariat, Akhlak",
        ],
        correctAnswer: 2,
        rationale: "Definisi iman yang disepakati adalah keyakinan hati (*Tasdīqun bil Qalbi*), pengucapan lisan (*Iqrārun bil Lisān*), dan pengamalan anggota badan (*'Amalun bil Arkān*).",
        hint: "Tiga komponen iman yang wajib ada.",
    },
    {
        id: 161,
        text: "Contoh cabang iman yang termasuk dalam ranah hati (*Tasdīqun bil Qalbi*) adalah...",
        options: [
            "membaca Al-Qur'an",
            "menunaikan zakat",
            "meyakini adanya Malaikat Allah",
            "mengucapkan salam",
        ],
        correctAnswer: 2,
        rationale: "Meyakini keberadaan Malaikat adalah bagian dari Rukun Iman, yang merupakan keyakinan murni dalam hati.",
        hint: "Amalan yang bersifat internal/batiniah.",
    },
    {
        id: 162,
        text: "Sifat *Al-Haya’* (malu) termasuk cabang iman yang berkaitan dengan...",
        options: [
            "lisan",
            "hati",
            "perbuatan",
            "akal",
        ],
        correctAnswer: 1,
        rationale: "Rasa malu untuk melakukan maksiat adalah refleksi dari keimanan yang terletak di hati (niat/akidah).",
        hint: "Nabi bersabda: Malu itu dari iman.",
    },
    {
        id: 163,
        text: "Menurut Syeikh Muhammad Nawawi bin Umar al-Jawi, cabang iman yang berkaitan dengan niat, akidah, dan hati berjumlah...",
        options: [
            "7",
            "30",
            "40",
            "77",
        ],
        correctAnswer: 0,
        rationale: "Materi menyebutkan pembagian tema: 7 cabang dalam niat/hati, 30 cabang dalam lisan, dan 40 cabang dalam perbuatan (7+30+40=77).",
        hint: "Cabang yang paling sedikit jumlahnya.",
    },
    {
        id: 164,
        text: "Salah satu tanda-tanda orang yang beriman menurut *Syuabul Iman.docx* adalah...",
        options: [
            "selalu menghindari ibadah",
            "menafkahkan rezeki di jalan Allah",
            "berbicara tanpa pertimbangan",
            "selalu mengutamakan duniawi",
        ],
        correctAnswer: 1,
        rationale: "Dokumen menyebutkan: 'Menafkahkan sebagian rezeki dan hartanya di jalan Allah Swt. merupakan wujud implementasi keimanan'.",
        hint: "Berkaitan dengan harta di jalan Allah.",
    },
    {
        id: 165,
        text: "Amalan cabang iman yang termasuk dalam ranah lisan (*Iqrārun bil Lisān*) adalah...",
        options: [
            "berjihad di jalan Allah",
            "menjaga perkataan yang tidak berguna",
            "menjaga amanah",
            "khauf dan raja'",
        ],
        correctAnswer: 1,
        rationale: "Menjaga perkataan (menghindari *laghw*) adalah amalan yang menggunakan lisan.",
        hint: "Aktivitas yang menggunakan mulut.",
    },
    {
        id: 166,
        text: "Amalan *'Amalun bil Arkān'* (perbuatan anggota badan) yang disebutkan dalam *Syuabul Iman.docx* adalah...",
        options: [
            "meyakini hari akhir",
            "memelihara amanah dan menepati janji",
            "khauf kepada Allah",
            "bersyukur kepada Allah",
        ],
        correctAnswer: 1,
        rationale: "Memelihara amanah dan menepati janji adalah tindakan nyata yang melibatkan anggota badan dan perilaku sosial.",
        hint: "Perilaku yang diimplementasikan dalam kehidupan sosial.",
    },
    {
        id: 167,
        text: "Ketika seorang mukmin mendengar nama Allah disebut, maka hatinya akan *bergetar*. Hal ini merupakan implementasi iman pada ranah...",
        options: [
            "lisan",
            "hati",
            "perbuatan",
            "niat",
        ],
        correctAnswer: 1,
        rationale: "Reaksi batin (getaran hati) adalah amalan hati (*Tasdīqun bil Qalbi*), sebagaimana disebutkan dalam Q.S. Al-Anfal: 2.",
        hint: "Reaksi batiniah.",
    },
    {
        id: 168,
        text: "Berikut ini yang termasuk dalam ujian keimanan yang dihadapi mukmin saat ini (menurut Abu Bakr bin Laal) adalah, *kecuali*...",
        options: [
            "godaan hawa nafsu",
            "mukmin yang saling mendengki",
            "kaum munafik yang membenci mukmin",
            "orang kafir yang memerangi kaum mukmin",
        ],
        correctAnswer: 3,
        rationale: "Dokumen menyebutkan 5 ujian: mendengki, munafik, tipu muslihat setan, godaan hawa nafsu. Pilihan D lebih merujuk ke problematika klasik/jihad perang.",
        hint: "Cari yang tidak termasuk dalam daftar 5 ujian.",
    },
    {
        id: 169,
        text: "Hikmah *Syu’abul Iman* yang berkaitan dengan ketenangan batin adalah...",
        options: [
            "menumbuhkan sikap ikhlas",
            "menghilangkan sifat kepercayaan terhadap makhluk",
            "membuat seorang mukmin memiliki jiwa yang tenang",
            "mencegah penyakit jasmani",
        ],
        correctAnswer: 2,
        rationale: "Jiwa yang tenang (*Muthmainnah*) adalah hasil dari keyakinan yang kokoh terhadap cabang-cabang iman.",
        hint: "Berkaitan dengan kondisi psikologis (*jiwa*).",
    },
    {
        id: 170,
        text: "Cabang iman yang berkaitan dengan perilaku sosial dan menjaga hubungan baik antar sesama manusia adalah...",
        options: [
            "Iman kepada Allah",
            "Iman kepada Qada dan Qadar",
            "Menepati janji dan amanah",
            "Meyakini Malaikat",
        ],
        correctAnswer: 2,
        rationale: "Menepati janji adalah amalan anggota badan yang mengikat hubungan sosial.",
        hint: "Fokus pada interaksi dengan sesama.",
    },
    {
        id: 171,
        text: "Jika dibacakan ayat-ayat Al-Qur`an, seorang mukmin sejati akan...",
        options: [
            "segera menolak",
            "bergejolak hatinya untuk segera mengamalkannya",
            "hanya mendengarkan tanpa reaksi",
            "menganggap itu hanya sebagai dongeng",
        ],
        correctAnswer: 1,
        rationale: "Dokumen *Syuabul Iman.docx* menyebut: 'dan jika dibacakan ayat-ayat Al-Qur`an maka **bergejolak hatinya untuk segera mengamalkannya**.'",
        hint: "Reaksi yang memicu tindakan positif.",
    },
    {
        id: 172,
        text: "Sikap senantiasa bertawakal setelah bekerja keras dan berdoa kepada Allah SWT termasuk dalam implementasi iman pada ranah...",
        options: [
            "lisan",
            "hati (akidah)",
            "perbuatan",
            "semua benar",
        ],
        correctAnswer: 3,
        rationale: "Tawakal adalah keyakinan hati (akidah); Bekerja keras adalah perbuatan; Berdoa adalah lisan. Jadi mencakup ketiga dimensi iman.",
        hint: "Sikap tawakal melibatkan batin dan fisik.",
    },

    // === TOPIK 4: MASUKNYA ISLAM KE NUSANTARA (17 SOAL) ===
    {
        id: 173,
        text: "Teori yang menyatakan Islam masuk ke Nusantara dari Gujarat, India, pada abad ke-13 Masehi dikemukakan oleh...",
        options: [
            "Buya Hamka",
            "Snouck Hurgronje",
            "Syarif Hidayatullah",
            "J.P. Moquette",
        ],
        correctAnswer: 3,
        rationale: "Tokoh utama pendukung Teori Gujarat adalah J.P. Moquette (dan kemudian Snouck Hurgronje) dengan bukti nisan Malik al-Saleh.",
        hint: "Berasal dari Eropa, fokus pada bukti nisan.",
    },
    {
        id: 174,
        text: "Bukti utama yang digunakan untuk mendukung Teori Gujarat adalah...",
        options: [
            "adanya perkampungan Arab di pesisir",
            "batu nisan Sultan Malik al-Saleh di Pasai yang mirip nisan di Cambay, Gujarat",
            "adanya tradisi Tabot di Bengkulu",
            "catatan perjalanan Marco Polo",
        ],
        correctAnswer: 1,
        rationale: "Kesamaan bentuk dan gaya batu nisan di Samudra Pasai dengan batu nisan di Gujarat menjadi bukti kuat teori ini.",
        hint: "Batu nisan yang unik.",
    },
    {
        id: 175,
        text: "Teori yang menyatakan Islam masuk langsung dari Mekah/Arab dan sudah ada sejak abad ke-7 Masehi didukung oleh...",
        options: [
            "J.P. Moquette",
            "Snouck Hurgronje",
            "Buya Hamka",
            "Van Leur",
        ],
        correctAnswer: 2,
        rationale: "Buya Hamka (Abdul Malik Karim Amrullah) adalah ulama Indonesia yang gigih membela Teori Makkah.",
        hint: "Ulama besar Indonesia.",
    },
    {
        id: 176,
        text: "Saluran penyebaran Islam di Nusantara yang paling utama dan efektif pada awal kedatangan adalah...",
        options: [
            "politik dan militer",
            "pendidikan dan kesenian",
            "perdagangan",
            "tasawuf",
        ],
        correctAnswer: 2,
        rationale: "Pedagang Muslim adalah pihak pertama yang berinteraksi dengan masyarakat lokal di bandar-bandar besar, menjadikannya saluran utama.",
        hint: "Profesi orang asing pertama yang datang ke Nusantara.",
    },
    {
        id: 177,
        text: "Saluran penyebaran Islam melalui pernikahan (*Munakahat*) adalah cara yang efektif karena...",
        options: [
            "dapat dilakukan dengan paksaan",
            "memungkinkan asimilasi budaya yang cepat",
            "memungkinkan islamisasi masuk ke lingkungan istana/bangsawan",
            "tidak membutuhkan biaya",
        ],
        correctAnswer: 2,
        rationale: "Pernikahan antara pedagang Muslim kaya dengan putri bangsawan/raja mempercepat masuknya Islam ke struktur kekuasaan.",
        hint: "Dampaknya terhadap elit kerajaan.",
    },
    {
        id: 178,
        text: "Penyebaran Islam melalui pendidikan dilakukan dengan mendirikan...",
        options: [
            "sekolah dasar",
            "universitas",
            "pesantren dan surau",
            "masjid raya",
        ],
        correctAnswer: 2,
        rationale: "Pesantren dan surau adalah lembaga pendidikan tradisional yang didirikan oleh ulama untuk mengajarkan Islam kepada masyarakat secara berkelanjutan.",
        hint: "Lembaga pendidikan tradisional Islam.",
    },
    {
        id: 179,
        text: "Kerajaan Islam pertama di Nusantara yang menjadi tonggak awal penyebaran Islam secara resmi adalah...",
        options: [
            "Kerajaan Demak",
            "Kerajaan Samudra Pasai",
            "Kesultanan Banten",
            "Kesultanan Ternate",
        ],
        correctAnswer: 1,
        rationale: "Samudra Pasai (Aceh) diyakini sebagai kerajaan Islam pertama, berdiri sekitar abad ke-13.",
        hint: "Terletak di ujung Sumatera.",
    },
    {
        id: 180,
        text: "Penggunaan media kesenian seperti pertunjukan Wayang Kulit oleh Wali Songo menunjukkan adanya strategi dakwah berupa...",
        options: [
            "penolakan budaya lokal",
            "akulturasi budaya",
            "invasi militer",
            "monopoli ekonomi",
        ],
        correctAnswer: 1,
        rationale: "Akulturasi (perpaduan harmonis) budaya lama dengan nilai-nilai Islam menjadi ciri khas dakwah di Jawa.",
        hint: "Harmonisasi dua budaya.",
    },
    {
        id: 181,
        text: "Teori yang menyatakan Islam masuk dari Persia (Iran) didukung oleh adanya kesamaan tradisi antara lain...",
        options: [
            "upacara Grebeg Maulud",
            "tradisi Tabot/Tabuik di Sumatera",
            "pemakaian Peci",
            "sistem kasta",
        ],
        correctAnswer: 1,
        rationale: "Tradisi Tabot (mengenang Husain bin Ali) di Bengkulu/Pariaman sangat mirip dengan ritual Syiah di Persia.",
        hint: "Tradisi 10 Muharram di Syiah.",
    },
    {
        id: 182,
        text: "Penyebaran Islam di Nusantara dilakukan secara damai (*Tadrij*), yang artinya...",
        options: [
            "melalui peperangan",
            "secara tiba-tiba",
            "secara bertahap dan penuh toleransi",
            "hanya melalui jalur perdagangan",
        ],
        correctAnswer: 2,
        rationale: "*Tadrij* berarti perlahan, bertahap, dan tidak memaksa, sehingga Islam diterima dengan mudah.",
        hint: "Lawan kata tiba-tiba.",
    },
    {
        id: 183,
        text: "Ulama yang berdakwah di pesisir-pesisir Nusantara pada masa awal disebut...",
        options: [
            "Misionaris",
            "Imam",
            "Wali",
            "Ahlul Bait",
        ],
        correctAnswer: 2,
        rationale: "Ulama penyebar Islam di Jawa, khususnya, dikenal sebagai Wali Songo (sembilan wali).",
        hint: "Gelar ulama terkemuka di Jawa.",
    },
    {
        id: 184,
        text: "Teori yang mendapat pengakuan terkuat belakangan ini, yang didukung bukti abad ke-7 dari Barus, adalah Teori...",
        options: [
            "Gujarat",
            "Persia",
            "Mekah/Arab",
            "China",
        ],
        correctAnswer: 2,
        rationale: "Teori Mekah/Arab diperkuat dengan adanya bukti arkeologi dan catatan China tentang perkampungan Arab sejak abad ke-7.",
        hint: "Teori yang didukung oleh Buya Hamka.",
    },
    {
        id: 185,
        text: "Faktor utama yang menyebabkan agama Islam mudah diterima oleh masyarakat Nusantara adalah...",
        options: [
            "Islam datang dengan paksaan",
            "syarat masuk Islam (syahadat) sangat mudah",
            "Islam hanya mengajarkan ibadah ritual",
            "Islam memiliki sistem kasta yang ketat",
        ],
        correctAnswer: 1,
        rationale: "Kemudahan syahadat dan tidak adanya sistem kasta membuat Islam diterima oleh semua lapisan masyarakat.",
        hint: "Syarat menjadi Muslim.",
    },
    {
        id: 186,
        text: "Karya sastra sufi yang digunakan sebagai media dakwah oleh para Wali Songo disebut...",
        options: [
            "Serat Pararaton",
            "Suluk",
            "Babad",
            "Kakawin",
        ],
        correctAnswer: 1,
        rationale: "*Suluk* adalah puisi atau tembang yang berisi ajaran tasawuf/mistik Islam (misalnya *Suluk Wijil* oleh Sunan Bonang).",
        hint: "Sastra yang digunakan oleh Sunan Bonang.",
    },
    {
        id: 187,
        text: "Pendapat yang menyatakan bahwa Islam disebarkan oleh para *ulama sufi* melalui ajaran Tasawuf menyoroti saluran...",
        options: [
            "politik",
            "perdagangan",
            "pendidikan",
            "kesenian",
        ],
        correctAnswer: 2,
        rationale: "Tasawuf adalah ajaran mistik Islam yang menekankan kedamaian, akhlak, dan kesederhanaan, yang disampaikan oleh ulama sufi.",
        hint: "Berkaitan dengan ajaran kerohanian.",
    },
    {
        id: 188,
        text: "Peran ulama dalam penyebaran Islam, selain mengajar, juga seringkali merangkap sebagai...",
        options: [
            "perwira militer",
            "guru tari",
            "pedagang atau saudagar",
            "peramal",
        ],
        correctAnswer: 2,
        rationale: "Banyak ulama awal di Nusantara yang juga berprofesi sebagai pedagang, sehingga penyebaran Islam berjalan sinergis.",
        hint: "Profesi yang memungkinkan mobilitas tinggi.",
    },
    {
        id: 189,
        text: "Masjid Agung Demak adalah contoh arsitektur Islam Nusantara yang menunjukkan...",
        options: [
            "pengaruh Eropa",
            "arsitektur murni Arab",
            "akulturasi dengan budaya Hindu-Jawa (atap tumpang)",
            "gaya bangunan Tiongkok",
        ],
        correctAnswer: 2,
        rationale: "Atap tumpang (bertingkat) pada Masjid Demak adalah adopsi dari arsitektur pura/candi Hindu-Buddha yang dilambangkan dengan unsur Islam.",
        hint: "Atapnya berbentuk limas bertingkat.",
    },

    // === TOPIK 5: SUMBER HUKUM ISLAM (17 SOAL) ===
    {
        id: 190,
        text: "Sumber hukum Islam yang pertama dan utama, yang berisi firman-firman Allah SWT adalah...",
        options: [
            "Hadis",
            "Ijtihad",
            "Al-Qur'an",
            "Qiyas",
        ],
        correctAnswer: 2,
        rationale: "Al-Qur'an adalah kalamullah yang menjadi rujukan tertinggi dalam penetapan hukum Islam.",
        hint: "Sumber hukum nomor satu.",
    },
    {
        id: 191,
        text: "Kedudukan Hadis (*Sunnah*) dalam syariat Islam adalah sebagai sumber hukum ke...",
        options: [
            "kesatu",
            "kedua",
            "ketiga",
            "keempat",
        ],
        correctAnswer: 1,
        rationale: "Setelah Al-Qur'an, Hadis menempati posisi kedua karena berfungsi menjelaskan, memerinci, dan menguatkan hukum Al-Qur'an.",
        hint: "Sumber hukum setelah Al-Qur'an.",
    },
    {
        id: 192,
        text: "Fungsi Hadis sebagai *Bayan At-Tafsir* berarti Hadis...",
        options: [
            "menjelaskan ayat-ayat Al-Qur'an yang bersifat umum",
            "menetapkan hukum baru yang tidak ada di Al-Qur'an",
            "menghapus hukum Al-Qur'an",
            "menguatkan hukum Al-Qur'an",
        ],
        correctAnswer: 0,
        rationale: "*Bayan At-Tafsir* (penjelas) adalah merinci ayat Al-Qur'an yang global, misalnya perintah shalat yang dirinci tata caranya oleh Hadis.",
        hint: "Contoh: Hadis menjelaskan tata cara shalat.",
    },
    {
        id: 193,
        text: "Kesepakatan para ulama mujtahid pada suatu masa setelah wafatnya Nabi SAW mengenai suatu hukum syara' disebut...",
        options: [
            "Qiyas",
            "Ijma'",
            "Istihsan",
            "Maslahah Mursalah",
        ],
        correctAnswer: 1,
        rationale: "*Ijma'* adalah konsensus (kesepakatan) ulama mujtahid, yang merupakan sumber hukum ketiga.",
        hint: "Kata kuncinya 'kesepakatan'.",
    },
    {
        id: 194,
        text: "Menyamakan hukum suatu kasus baru dengan kasus lama yang sudah ada ketetapannya karena adanya persamaan *'Illat* (sebab) disebut...",
        options: [
            "Ijma'",
            "Qiyas",
            "Ijtihad",
            "Urf",
        ],
        correctAnswer: 1,
        rationale: "*Qiyas* adalah metode analogi, yaitu menyamakan hukum (misal: narkoba haram) dengan hukum asal (misal: khamr haram) karena *'illat* yang sama (memabukkan).",
        hint: "Metode analogi.",
    },
    {
        id: 195,
        text: "Upaya mencurahkan seluruh kemampuan untuk menetapkan hukum syar’i yang belum ada ketetapannya dalam Al-Qur'an dan Hadis disebut...",
        options: [
            "Fatwa",
            "Ijtihad",
            "Tafsir",
            "Tabligh",
        ],
        correctAnswer: 1,
        rationale: "*Ijtihad* adalah proses penetapan hukum yang dilakukan oleh para ulama (*mujtahid*) sebagai sumber hukum pelengkap.",
        hint: "Usaha sungguh-sungguh para ulama.",
    },
    {
        id: 196,
        text: "Fungsi Hadis sebagai *Bayan At-Tasyri'* berarti Hadis...",
        options: [
            "menetapkan hukum baru yang belum ada di Al-Qur'an",
            "menghapus ayat Al-Qur'an",
            "menjelaskan maksud Al-Qur'an",
            "menguatkan hukum Al-Qur'an",
        ],
        correctAnswer: 0,
        rationale: "*Bayan At-Tasyri'* adalah menetapkan hukum baru, contohnya larangan menikahi wanita dengan bibi dari pihak ibu sekaligus.",
        hint: "Fungsi untuk *membuat* syariat baru.",
    },
    {
        id: 197,
        text: "Sumber hukum *Ijtihad* yang didasarkan pada kebiasaan yang tidak bertentangan dengan syariat Islam disebut...",
        options: [
            "Ijma'",
            "Qiyas",
            "Istihsan",
            "Urf",
        ],
        correctAnswer: 3,
        rationale: "*Urf* adalah adat istiadat atau kebiasaan yang berlaku di masyarakat, asalkan tidak melanggar Al-Qur'an dan Hadis.",
        hint: "Hukum berdasarkan kebiasaan setempat.",
    },
    {
        id: 198,
        text: "Salah satu syarat mutlak bagi seorang *Mujtahid* (pelaku Ijtihad) adalah...",
        options: [
            "kaya raya",
            "menguasai bahasa Arab dan ilmu-ilmu Al-Qur'an",
            "menjadi pemimpin negara",
            "hafiz 30 juz",
        ],
        correctAnswer: 1,
        rationale: "Penguasaan bahasa Arab dan ilmu-ilmu terkait Al-Qur'an dan Hadis adalah alat utama untuk memahami sumber hukum.",
        hint: "Alat untuk menafsirkan teks suci.",
    },
    {
        id: 199,
        text: "Bentuk Ijtihad yang tidak disepakati oleh semua ulama adalah...",
        options: [
            "Qiyas",
            "Ijma'",
            "Al-Qur'an",
            "Hadis",
        ],
        correctAnswer: 0,
        rationale: "Ijma' adalah kesepakatan, sehingga disepakati. Qiyas, Istihsan, dan Maslahah Mursalah seringkali menjadi sumber perselisihan karena merupakan hasil penalaran manusia.",
        hint: "Metode yang mengandalkan penalaran analogi.",
    },
    {
        id: 200,
        text: "Kedudukan Al-Qur'an dalam Islam adalah sebagai *'Kalamullah'*, yang berarti...",
        options: [
            "perkataan Nabi",
            "perkataan ulama",
            "firman Allah SWT",
            "kitab sejarah",
        ],
        correctAnswer: 2,
        rationale: "*Kalamullah* adalah firman/ucapan Allah, yang menunjukkan kemurnian dan keotentikannya.",
        hint: "Asal usul Al-Qur'an.",
    },
    {
        id: 201,
        text: "Fungsi Hadis sebagai *Bayan At-Taqrir* berarti Hadis...",
        options: [
            "menjelaskan hukum baru",
            "menguatkan dan membenarkan hukum Al-Qur'an",
            "menggantikan hukum Al-Qur'an",
            "membatalkan hukum yang sudah ada",
        ],
        correctAnswer: 1,
        rationale: "*Bayan At-Taqrir* adalah menguatkan atau mempertegas hukum yang sudah ada di dalam Al-Qur'an.",
        hint: "Fungsi konfirmasi/penguatan.",
    },
    {
        id: 202,
        text: "Apabila terjadi pertentangan antara Al-Qur'an dan Hadis, yang harus diutamakan adalah...",
        options: [
            "pendapat ulama",
            "Hadis",
            "Al-Qur'an",
            "pendapat mayoritas",
        ],
        correctAnswer: 2,
        rationale: "Al-Qur'an adalah sumber hukum pertama dan tertinggi. Namun, para ulama berpendapat tidak ada pertentangan hakiki antara keduanya; Hadis hanya berfungsi menjelaskan Al-Qur'an.",
        hint: "Sumber hukum nomor satu.",
    },
    {
        id: 203,
        text: "Perkara yang diharamkan secara pasti dalam Al-Qur'an tidak boleh diubah melalui Ijtihad. Hal ini menunjukkan bahwa Ijtihad hanya berlaku untuk hukum yang bersifat...",
        options: [
            "Qath'i (pasti)",
            "Dzhanni (tidak pasti)",
            "Muhkam (tegas)",
            "Mutawatir (berulang)",
        ],
        correctAnswer: 1,
        rationale: "Ijtihad hanya boleh dilakukan pada hukum-hukum yang bersifat *Dzhanni* (tidak pasti/tidak tegas), di mana terdapat ruang interpretasi.",
        hint: "Tidak tegas/memiliki ruang tafsir.",
    },
    {
        id: 204,
        text: "Kitab yang berisi kumpulan perkataan, perbuatan, dan ketetapan Nabi Muhammad SAW disebut...",
        options: [
            "Kitab Tafsir",
            "Kitab Fikih",
            "Al-Qur'an",
            "Hadis/Sunnah",
        ],
        correctAnswer: 3,
        rationale: "Hadis atau Sunnah adalah catatan komprehensif tentang segala sesuatu yang bersumber dari Nabi SAW.",
        hint: "Sunnah Nabi.",
    },
    {
        id: 205,
        text: "Dalam penggunaan *Qiyas*, yang menjadi pembeda antara hukum baru dan hukum lama disebut...",
        options: [
            "Asal",
            "Furu'",
            "'Illat",
            "Hukmu",
        ],
        correctAnswer: 2,
        rationale: "*'Illat* adalah sebab atau alasan hukum. Kesamaan *'illat* (misal: memabukkan) memungkinkan *Qiyas* dilakukan.",
        hint: "Sebab/alasan hukum.",
    },
    {
        id: 206,
        text: "Berikut ini yang *bukan* merupakan contoh sumber hukum Ijtihad adalah...",
        options: [
            "Ijma'",
            "Qiyas",
            "Hadis",
            "Maslahah Mursalah",
        ],
        correctAnswer: 2,
        rationale: "Hadis adalah sumber hukum kedua (pokok), bukan metode penalaran (Ijtihad) yang dikembangkan ulama.",
        hint: "Bukan hasil penalaran ulama.",
    },

    // === TOPIK 6: WALI SONGO (18 SOAL) ===
    {
        id: 207,
        text: "Wali Songo yang dikenal sebagai pelopor penyebaran Islam di tanah Jawa dan dimakamkan di Gresik adalah...",
        options: [
            "Sunan Ampel",
            "Sunan Kalijaga",
            "Maulana Malik Ibrahim",
            "Sunan Giri",
        ],
        correctAnswer: 2,
        rationale: "Maulana Malik Ibrahim (Sunan Gresik) dianggap sebagai Wali tertua yang datang pertama kali ke Jawa.",
        hint: "Sunan Gresik.",
    },
    {
        id: 208,
        text: "Sunan Kalijaga menggunakan media dakwah berupa...",
        options: [
            "seni pahat dan ukir",
            "musik keroncong",
            "Wayang Kulit dan Gamelan",
            "tari-tarian sufi",
        ],
        correctAnswer: 2,
        rationale: "Sunan Kalijaga (*Raden Said*) adalah Wali yang paling dominan dalam akulturasi budaya, menggunakan wayang untuk menyebarkan Islam.",
        hint: "Media pertunjukan khas Jawa.",
    },
    {
        id: 209,
        text: "Nama asli dari Sunan Ampel, salah satu Wali Songo yang berdakwah di Surabaya, adalah...",
        options: [
            "Raden Paku",
            "Raden Rahmat",
            "Syarif Hidayatullah",
            "Raden Said",
        ],
        correctAnswer: 1,
        rationale: "Raden Rahmat adalah nama kecil dari Sunan Ampel, yang mendirikan pesantren di Ampel Denta, Surabaya.",
        hint: "Wali yang berdakwah di Ampel Denta.",
    },
    {
        id: 210,
        text: "Sunan Gunung Jati, yang berdakwah di Jawa Barat dan mendirikan Kesultanan Cirebon, memiliki nama asli...",
        options: [
            "Raden Rahmat",
            "Raden Said",
            "Jafar Shadiq",
            "Syarif Hidayatullah",
        ],
        correctAnswer: 3,
        rationale: "Syarif Hidayatullah adalah nama asli Sunan Gunung Jati, yang menghubungkan jalur dakwah dari Jawa Timur ke Jawa Barat.",
        hint: "Wali yang juga seorang Sultan.",
    },
    {
        id: 211,
        text: "Wali Songo yang merupakan putra dari Sunan Ampel adalah...",
        options: [
            "Sunan Kalijaga dan Sunan Kudus",
            "Sunan Bonang dan Sunan Drajat",
            "Sunan Muria dan Sunan Giri",
            "Maulana Malik Ibrahim dan Sunan Gunung Jati",
        ],
        correctAnswer: 1,
        rationale: "Sunan Ampel memiliki dua putra yang juga menjadi Wali Songo, yaitu Sunan Bonang (Raden Makhdum Ibrahim) dan Sunan Drajat (Raden Qasim).",
        hint: "Hubungan ayah dan anak antar Wali.",
    },
    {
        id: 212,
        text: "Sunan Giri memiliki peran penting dalam bidang...",
        options: [
            "politik dan kesenian (wayang)",
            "pendidikan, pemerintahan (Raja Pandhita), dan permainan anak-anak",
            "militer dan perdagangan",
            "penyembuhan penyakit",
        ],
        correctAnswer: 1,
        rationale: "Sunan Giri (*Raden Paku*) mendirikan Kerajaan Giri Kedaton dan menciptakan banyak permainan anak bernuansa Islami (Jelungan, Cublak-Cublak Suweng).",
        hint: "Wali yang menciptakan lagu anak-anak.",
    },
    {
        id: 213,
        text: "Strategi dakwah Wali Songo yang mengutamakan penyesuaian ajaran Islam dengan budaya lokal yang sudah ada disebut...",
        options: [
            "Tasyri'",
            "Tawassul",
            "Akulturasi",
            "Assimilasi",
        ],
        correctAnswer: 2,
        rationale: "Akulturasi adalah perpaduan dua budaya tanpa menghilangkan unsur asli, yang sangat dominan dalam dakwah Wali Songo.",
        hint: "Perpaduan budaya.",
    },
    {
        id: 214,
        text: "Wali Songo yang menggunakan pendekatan dakwah lewat tembang-tembang sufistik, seperti *Suluk Wijil*, adalah...",
        options: [
            "Sunan Kalijaga",
            "Sunan Bonang",
            "Sunan Muria",
            "Sunan Drajat",
        ],
        correctAnswer: 1,
        rationale: "Sunan Bonang (Raden Makhdum Ibrahim) dikenal mahir memainkan alat musik dan menciptakan tembang, salah satunya *Suluk Wijil*.",
        hint: "Menggunakan suluk/tembang.",
    },
    {
        id: 215,
        text: "Sunan Drajat berdakwah dengan ajaran yang fokus pada...",
        options: [
            "kekuatan militer",
            "pendidikan politik",
            "kesejahteraan sosial dan santunan anak yatim/fakir miskin",
            "seni ukir",
        ],
        correctAnswer: 2,
        rationale: "Sunan Drajat (Raden Qasim) sangat terkenal dengan ajaran sosialnya, *'Cipta Rasa Karsa Mulya'* (menciptakan rasa kemuliaan melalui kedermawanan).",
        hint: "Fokus pada akhlak sosial dan tolong menolong.",
    },
    {
        id: 216,
        text: "Yang bukan termasuk wilayah sentral dakwah Wali Songo di Jawa adalah...",
        options: [
            "Gresik, Ampel, Demak",
            "Cirebon, Kudus, Tuban",
            "Madura, Bali, Lombok",
            "Drajat, Muria, Giri",
        ],
        correctAnswer: 2,
        rationale: "Wali Songo berfokus di Jawa. Madura, Bali, dan Lombok memiliki penyebar Islam sendiri di luar sembilan tokoh utama ini.",
        hint: "Wali Songo berpusat di Pulau...",
    },
    {
        id: 217,
        text: "Sunan Kudus, yang dikenal sebagai *Waliyyul 'Ilmi* (Wali Ilmu), membangun Masjid Kudus dengan menara yang menyerupai...",
        options: [
            "Menara Eiffel",
            "Menara Kincir Angin Belanda",
            "Bangunan Candi Hindu",
            "Menara Masjid Turki",
        ],
        correctAnswer: 2,
        rationale: "Menara Kudus adalah contoh nyata akulturasi, yang bentuknya mirip Candi Hindu/Buddha, menunjukkan toleransi Sunan Kudus.",
        hint: "Bangunan yang sangat kuno di Jawa.",
    },
    {
        id: 218,
        text: "Penyebutan *'Wali Songo'* berarti...",
        options: [
            "pemimpin agama",
            "sembilan tokoh suci",
            "sembilan kerajaan Islam",
            "tokoh yang diasingkan",
        ],
        correctAnswer: 1,
        rationale: "*Wali* (kekasih Allah) dan *Songo* (sembilan) dalam bahasa Jawa.",
        hint: "Jumlah Wali.",
    },
    {
        id: 219,
        text: "Strategi dakwah yang dilakukan oleh Sunan Muria (Raden Umar Said) adalah...",
        options: [
            "melalui jalur formal istana",
            "melalui masyarakat pedalaman dan pegunungan",
            "melalui jalur perdagangan internasional",
            "melalui jalur militer",
        ],
        correctAnswer: 1,
        rationale: "Sunan Muria berdakwah ke daerah terpencil, jauh dari keramaian, dengan pendekatan yang lebih inklusif dan sederhana.",
        hint: "Lokasi makamnya berada di pegunungan.",
    },
    {
        id: 220,
        text: "Tokoh yang memimpin ekspedisi dakwah ke berbagai wilayah, termasuk Ternate dan Tidore, serta mendirikan Kesultanan Banten adalah...",
        options: [
            "Sunan Ampel",
            "Sunan Kudus",
            "Sunan Gunung Jati",
            "Sunan Bonang",
        ],
        correctAnswer: 2,
        rationale: "Pengaruh Syarif Hidayatullah (Sunan Gunung Jati) sangat luas, mencapai Banten dan bahkan memiliki kaitan dengan Maluku.",
        hint: "Wali dari Jawa Barat.",
    },
    {
        id: 221,
        text: "Dakwah Wali Songo dikenal dengan semboyan *'Moh Limo'* (tidak mau lima), yang diajarkan oleh Sunan Ampel. Apa arti *Moh Limo*?",
        options: [
            "menjauhi lima kerajaan",
            "tidak boleh lima kali shalat",
            "menjauhi lima perbuatan tercela",
            "mengikuti lima rukun Islam",
        ],
        correctAnswer: 2,
        rationale: "*Moh Limo* adalah ajakan menjauhi lima keburukan: mabuk, main, madat (candu), maling (mencuri), madon (zina/perempuan).",
        hint: "Lima larangan moral.",
    },
    {
        id: 222,
        text: "Peninggalan Wali Songo yang menjadi pusat pertemuan dan musyawarah para Wali Songo dan juga digunakan untuk shalat Jumat adalah...",
        options: [
            "Menara Kudus",
            "Masjid Agung Demak",
            "Kompleks Makam Sunan Giri",
            "Pesantren Ampel Denta",
        ],
        correctAnswer: 1,
        rationale: "Masjid Agung Demak adalah pusat spiritual dan politik Kerajaan Demak yang didirikan oleh Wali Songo.",
        hint: "Masjid utama di Jawa Tengah.",
    },
    {
        id: 223,
        text: "Wali Songo yang berdakwah di daerah Blora dan Rembang, serta merupakan putra dari Sunan Kalijaga adalah...",
        options: [
            "Sunan Kudus",
            "Sunan Drajat",
            "Sunan Muria",
            "Sunan Bonang",
        ],
        correctAnswer: 2,
        rationale: "Sunan Muria (Raden Umar Said) adalah putra Sunan Kalijaga, yang memilih berdakwah di daerah pegunungan (Muria).",
        hint: "Putra dari Sunan Kalijaga.",
    },

    // === TOPIK 7: AKHLAK TERCELA (FOYA-FOYA, RIYA, SUM'AH, TAKABUR, HASAD) (17 SOAL) ===
    {
        id: 224,
        text: "Menghambur-hamburkan harta untuk kesenangan dan kemaksiatan, serta melampaui batas kebutuhan disebut...",
        options: [
            "Qana'ah",
            "Zuhud",
            "Tabzir (Foya-foya)",
            "Ikhlas",
        ],
        correctAnswer: 2,
        rationale: "*Tabzir* atau *Israf* adalah sikap berlebih-lebihan dalam penggunaan harta, yang dilarang dalam Q.S. Al-Isra': 27.",
        hint: "Teman setan.",
    },
    {
        id: 225,
        text: "Sifat ingin amal atau ibadahnya *dilihat* oleh orang lain agar mendapat pujian disebut...",
        options: [
            "Sum'ah",
            "Takabur",
            "Riya'",
            "Hasad",
        ],
        correctAnswer: 2,
        rationale: "*Riya'* berasal dari kata *ra'ā* (melihat), yaitu beramal agar dilihat dan dipuji manusia.",
        hint: "Ingin dipuji karena 'dilihat'.",
    },
    {
        id: 226,
        text: "Sifat ingin amal atau kebaikannya *didengar* dan dibicarakan oleh orang lain agar terkenal disebut...",
        options: [
            "Riya'",
            "Sum'ah",
            "Ujub",
            "Tabzir",
        ],
        correctAnswer: 1,
        rationale: "*Sum'ah* berasal dari kata *sami'a* (mendengar), yaitu beramal agar didengar dan masyhur.",
        hint: "Ingin dipuji karena 'didengar'.",
    },
    {
        id: 227,
        text: "Menurut Hadis Nabi SAW, *Al-Kibru* (sombong) adalah...",
        options: [
            "memakai pakaian mewah",
            "menolak kebenaran dan meremehkan orang lain",
            "merasa paling tampan/cantik",
            "berbicara dengan suara lantang",
        ],
        correctAnswer: 1,
        rationale: "Hadis Nabi: 'Al-Kibru *batharul haq wa ghamtun nas*' (menolak kebenaran dan meremehkan manusia).",
        hint: "Sikap hati yang menentang kebenaran.",
    },
    {
        id: 228,
        text: "Sifat *Hasad* (Dengki) yang dilarang adalah...",
        options: [
            "ingin meniru kebaikan orang lain",
            "tidak suka orang lain mendapat nikmat dan berharap nikmat itu hilang",
            "senang melihat orang sukses",
            "berkompetisi dalam kebaikan",
        ],
        correctAnswer: 1,
        rationale: "Hasad adalah menginginkan hilangnya nikmat yang ada pada orang lain. Ini dilarang karena menentang takdir Allah.",
        hint: "Rasa tidak suka melihat nikmat orang lain.",
    },
    {
        id: 229,
        text: "Riya' dan Sum'ah termasuk dalam kategori syirik...",
        options: [
            "Akbar (Besar)",
            "Asghar (Kecil)",
            "Jali (Jelas)",
            "Khafi (Samar)",
        ],
        correctAnswer: 1,
        rationale: "Riya' dan Sum'ah adalah syirik kecil (*Asghar*) karena menyekutukan Allah dalam niat, meskipun tidak mengeluarkan dari Islam.",
        hint: "Dosa kesyirikan yang paling samar.",
    },
    {
        id: 230,
        text: "Menurut Imam Ghazali, salah satu jenis hasad berbahaya adalah...",
        options: [
            "berharap nikmat orang lain hilang, dan kita yang mendapatkannya",
            "berharap mendapat pahala seperti orang lain",
            "bersyukur atas nikmat yang didapat",
            "berbuat baik di tempat tersembunyi",
        ],
        correctAnswer: 0,
        rationale: "Imam Ghazali membagi hasad berbahaya, dan yang paling jelas adalah berharap nikmat orang lain hilang.",
        hint: "Yang paling jelas merugikan orang lain.",
    },
    {
        id: 231,
        text: "Hikmah dari menghindari sifat *Tabzir* (foya-foya) adalah...",
        options: [
            "menumbuhkan sikap sombong",
            "menumbuhkan sikap qana'ah dan syukur",
            "mendorong sifat kikir",
            "memicu gaya hidup hedonis",
        ],
        correctAnswer: 1,
        rationale: "Menghindari pemborosan akan menumbuhkan rasa cukup (*qana'ah*) dan bersyukur atas apa yang dimiliki.",
        hint: "Lawannya pemborosan.",
    },
    {
        id: 232,
        text: "Sifat *Ujub* (membanggakan diri) berbeda dengan *Takabur* karena *Ujub* sifatnya...",
        options: [
            "terkait dengan orang lain (meremehkan)",
            "terkait dengan diri sendiri (terpesona dengan amal sendiri)",
            "terkait dengan harta",
            "terkait dengan niat dilihat orang",
        ],
        correctAnswer: 1,
        rationale: "*Ujub* adalah 'syirik internal' (kagum pada diri sendiri), sedangkan *Takabur* adalah aplikasinya terhadap orang lain (meremehkan).",
        hint: "Kebanggaan yang masih di dalam hati.",
    },
    {
        id: 233,
        text: "Hasad dapat menghapus pahala amal kebaikan seperti api melahap kayu bakar. Cara mengobati hasad yang paling efektif adalah...",
        options: [
            "menjauhi orang yang diberi nikmat",
            "menghiasi diri dengan sifat *ridha* (menerima) takdir Allah",
            "memohon agar nikmat orang itu hilang",
            "berlomba dalam hal keduniaan",
        ],
        correctAnswer: 1,
        rationale: "Hasad muncul karena tidak ridha terhadap takdir Allah. Obatnya adalah menguatkan keyakinan *ridha* kepada ketentuan-Nya.",
        hint: "Berhubungan dengan takdir Allah.",
    },
    {
        id: 234,
        text: "Sifat *Tabzir* (pemborosan) disebut sebagai saudara setan dalam Al-Qur'an. Implikasinya dalam kehidupan adalah...",
        options: [
            "mendapat banyak pahala",
            "berpotensi menimbulkan hutang dan kemiskinan",
            "dijauhi teman-teman",
            "mudah mendapat rezeki",
        ],
        correctAnswer: 1,
        rationale: "Pemborosan dan foya-foya, jika terus-menerus, akan menghabiskan harta dan menimbulkan masalah finansial.",
        hint: "Dampak pada ekonomi dan keuangan.",
    },
    {
        id: 235,
        text: "Lawan dari sifat Takabur adalah...",
        options: [
            "Ujub",
            "Riya'",
            "Tawadhu' (Rendah Hati)",
            "Hasad",
        ],
        correctAnswer: 2,
        rationale: "*Tawadhu'* adalah kerendahan hati dan tidak sombong, yang merupakan lawan dari Takabur.",
        hint: "Rendah hati.",
    },
    {
        id: 236,
        text: "Berikut ini yang termasuk sifat *Ghibthah* (iri yang diperbolehkan) menurut Hadis adalah iri kepada...",
        options: [
            "orang kaya yang suka pamer",
            "orang yang diberi harta lalu dermawan, dan orang berilmu yang mengamalkannya",
            "orang yang memiliki jabatan tinggi",
            "orang yang paling tampan",
        ],
        correctAnswer: 1,
        rationale: "Hadis Nabi SAW menyebutkan dua hal yang boleh diirikan (Ghibthah): harta yang digunakan di jalan kebenaran, dan ilmu yang diamalkan.",
        hint: "Iri yang memotivasi kebaikan.",
    },
    {
        id: 237,
        text: "Sikap *Takabur* dapat merusak hubungan sosial karena... ",
        options: [
            "membuat orang lain kagum",
            "menyebabkan meremehkan dan menghina orang lain",
            "menciptakan suasana humoris",
            "membuat diri terlihat sukses",
        ],
        correctAnswer: 1,
        rationale: "Inti dari Takabur adalah 'meremehkan manusia', yang pasti merusak hubungan dan martabat orang lain.",
        hint: "Inti dari Takabur adalah menolak kebenaran dan...",
    },
    {
        id: 238,
        text: "Cara menghindari *Riya'* dan *Sum'ah* adalah dengan menjaga...",
        options: [
            "kebersihan diri",
            "keikhlasan niat hanya karena Allah",
            "hubungan dengan pejabat",
            "penampilan fisik",
        ],
        correctAnswer: 1,
        rationale: "Riya' dan Sum'ah merusak niat, maka obatnya adalah memurnikan kembali niat (*Ikhlas*) semata-mata mengharap ridha Allah.",
        hint: "Kunci diterimanya amal.",
    },
    {
        id: 239,
        text: "Salah satu dampak negatif dari perilaku *Hasad* terhadap diri sendiri adalah...",
        options: [
            "Hati menjadi senang dan tenang",
            "Hati menjadi susah, gelisah, dan menentang takdir Allah",
            "Mudah mendapatkan rezeki",
            "Disukai oleh sesama",
        ],
        correctAnswer: 1,
        rationale: "Dokumen menyebutkan: 'Hati menjadi susah' dan 'Menentang takdir Allah Swt.' sebagai dampak negatif Hasad.",
        hint: "Dampak psikologis dan spiritual negatif.",
    },
    {
        id: 240,
        text: "Contoh perilaku *Israf* (berlebih-lebihan) yang dilarang dalam hal ibadah adalah...",
        options: [
            "shalat sunnah",
            "berpuasa sunnah tanpa henti hingga mengabaikan kesehatan/kewajiban",
            "menuntut ilmu agama",
            "membaca Al-Qur'an setiap hari",
        ],
        correctAnswer: 1,
        rationale: "Berlebih-lebihan (*ghuluw*) dalam ibadah hingga merusak keseimbangan hidup, seperti puasa terus-menerus hingga sakit, dilarang oleh Nabi SAW.",
        hint: "Melampaui batas kewajaran hingga merugikan diri sendiri.",
    },
];
