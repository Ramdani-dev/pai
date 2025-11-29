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
    }
];