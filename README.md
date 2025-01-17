<p align="center">
  <a href="https://trakteer.id/slynnn">
    <img src="https://i.ibb.co/KwxRnB6/06d91bc4-ac34-47f2-96e5-818bf495cf57-1.jpg" alt="Logo" width="200" height="200">
  </a>
</p>

<h3 align="center">Itsuki Rest API</h3>

<p align="center">
  <b>Restful API untuk Komik & Anime Subtitle Indonesia</b>
</p>

<h1>Daftar Isi</h1>

- [Instalasi](#Install)
- [Sumber Data](#sumber-data)
    - [Animisme](#animisme)
    - [Komikcast](#komikcast)
    - [Gudangfilm](#gudangfilm)

## Sumber Data

- [Komikcast](https://komikcast.cx)
- [Animisme](https://tv.animisme.net)
- [Gudangfilm](GUDANGFILM)

### Install

1. **Clone repository**:
    ```bash
    git clone https://github.com/whyudacok/itsuki-rest-api.git
    cd itsuki-rest-api
    ```

2. **Install dependensi**:
    ```bash
    npm install
    ```

3. **Jalankan aplikasi**:
    - Untuk memulai aplikasi:
      ```bash
      npm start
      ```
    - Untuk menjalankan aplikasi dalam mode pengembangan:
      ```bash
      npm run dev
      ```
### Komikcast
Komikcast menyediakan koleksi komik terlengkap dalam bahasa Indonesia.

- #### Komik Terbaru
  Untuk mendapatkan daftar komik terbaru.
  
  `/api/komik/latest/:page`
  
  Default `page` adalah 1. Contoh: [/api/komik/latest/1](https://cihuyy-api.vercel.app/api/komik/latest/1)

- #### Daftar Komik
  Untuk mendapatkan semua daftar komik.
  
  `/api/komik/daftar/:page`
  
  Default `page` adalah 1. Contoh: [/api/komik/daftar/1](https://cihuyy-api.vercel.app/api/komik/daftar/1)
  
- #### Detail Tipe Komik
  Untuk mendapatkan daftar berdasarkan tipe, seperti (manga, manhua, manhwa).
  
  `/api/komik/type/:endpoint/:page`
  
  Default `page` adalah 1. Contoh: [/api/komik/type/manga/1](https://cihuyy-api.vercel.app/api/komik/type/manga/1)

- #### Pencarian Komik
  Untuk mencari komik berdasarkan kata kunci.
  
  `/api/komik/cari/:endpoint/:page`
  
  Default `page` adalah 1. Contoh: [/api/komik/cari/waka%20chan/1](https://cihuyy-api.vercel.app/api/komik/cari/waka%20chan/1)

- #### Komik Berdasarkan Genre
  Untuk mendapatkan daftar komik berdasarkan genre.
  
  `/api/komik/genre/:endpoint/:page`
  
  Default `page` adalah 1. Contoh: [/api/komik/genre/action/1](https://cihuyy-api.vercel.app/api/komik/genre/action/1)

- #### Pencarian Lebih Detail
  Untuk mencari komik berdasarkan genre, tipe, format, status, dan lainnya. Semua endpoint bisa dicek di [Komikcast](https://komikcast.cx/daftar-komik).
  
  `/api/komik/search/:page?genre%5B%5D=:endpoint&status=:endpoint&type=:endpoint&format=:endpoint&order=:endpoint&project=no&title=:endpoint`
  
  Default `page` adalah 1. Contoh: [/api/komik/search/1?genre%5B%5D=action&status=Ongoing&type=Manga&format=0&order=title&project=no&title=my](https://cihuyy-api.vercel.app/api/komik/search/1?genre%5B%5D=action&status=Ongoing&type=Manga&format=0&order=title&project=no&title=my)

- #### Detail Manga
  Untuk mendapatkan detail dari sebuah komik.
  
  `/api/komik/manga/:endpoint`
  
  Contoh: [/api/komik/manga/waka-chan-wa-kyou-mo-azatoi/](https://cihuyy-api.vercel.app/api/komik/manga/waka-chan-wa-kyou-mo-azatoi/)
  
- #### Detail Chapter
  Untuk mendapatkan chapter dari komik tertentu.
  
  `/api/komik/chapter/:endpoint`
  
  Contoh: [/api/komik/chapter/waka-chan-wa-kyou-mo-azatoi-chapter-1/](https://cihuyy-api.vercel.app/api/komik/chapter/waka-chan-wa-kyou-mo-azatoi-chapter-1/)
  
- #### Proxy Gambar
  Untuk mengambil gambar chapter melalui proxy.
  
  `/img?url=`
  
  Contoh: [/img?url=https://pinjamduluseratus.buzz/data/png](https://cihuyy-api.vercel.app/img?url=https://pinjamduluseratus.buzz/data/305770/5/70e7bcb1a59f3db133dcb86f2e17c3b1/tvgEMpobFW2WoPSuRbKrsEBKZTv60PzdhTcX33Uf.jpg)
  
### Animisme
Animisme adalah tempat kumpulan anime batch & movie dalam bahasa Indonesia.

- #### Anime Terbaru
  Untuk mendapatkan daftar anime terbaru.
  
  `/api/anime/latest`
  
  Contoh: [/api/anime/latest](https://cihuyy-api.vercel.app/api/anime/latest)
  
- #### Daftar Anime
  Untuk mendapatkan semua daftar anime.
  
  `/api/anime/anilist/:page`
  
  Default `page` adalah 1. Contoh: [/api/anime/anilist/1](https://cihuyy-api.vercel.app/api/anime/anilist/1)
  
- #### Detail Anime
  Untuk mendapatkan detail dari sebuah anime.
  
  `/api/anime/anime/:endpoint`
  
  Contoh: [/api/anime/anime/boku-no-pico/](https://cihuyy-api.vercel.app/api/anime/anime/boku-no-pico/)
  
- #### Detail Episode 
  Untuk mendapatkan detail episode dari anime tertentu.
  
  `/api/anime/nonton/:endpoint`
  
  Contoh: [/api/anime/nonton/nonton-boku-no-pico-episode-1/](https://cihuyy-api.vercel.app/api/anime/nonton/nonton-boku-no-pico-episode-1/)
  
- #### Cari Anime
  Untuk mencari anime berdasarkan kata kunci.
  
  `/api/anime/cari/:endpoint/:page`
  
  Default `page` adalah 1. Contoh: [/api/anime/cari/boku%20no%20p/1](https://cihuyy-api.vercel.app/api/anime/cari/boku%20no%20p/1)
  
- #### Pencarian Anime Lebih Detail
  Untuk mencari anime berdasarkan genre, season, studio, dan lainnya. Untuk lebih detailnya, cek [Animisme](https://tv.animisme.net/anime/?status=&type=&order=update).
  
  `/api/anime/search/1/?genre%5B%5D=:endpoint&season%5B%5D=:endpoint&studio%5B%5D=:endpoint&status=:endpoint&type=:endpoint&sub=&order=update`
  
  Default `page` adalah 1. Contoh: [/api/anime/search/1/?genre%5B%5D=aksi&season%5B%5D=summer-2020&studio%5B%5D=mappa&status=completed&type=tv&sub=&order=update](https://cihuyy-api.vercel.app/api/anime/search/1/?genre%5B%5D=aksi&season%5B%5D=summer-2020&studio%5B%5D=mappa&status=completed&type=tv&sub=&order=update)
  
- #### Anime Berdasarkan Studio
  Untuk mendapatkan anime berdasarkan studio produksi.
  
  `/api/anime/studio/:endpoint/:page`
  
  Default `page` adalah 1. Contoh: [/api/anime/studio/8bit/1](https://cihuyy-api.vercel.app/api/anime/studio/8bit/1)

- #### Karakter Anime
  Untuk mendapatkan karakter anime.
  
  `/api/anime/karakter/:endpoint/:page`
  
  Default `page` adalah 1. Contoh: [/api/anime/karakter/anak-anak/1](https://cihuyy-api.vercel.app/api/anime/karakter/anak-anak/1)

- #### Musim Anime
  Untuk mendapatkan anime berdasarkan musim.
  
  `/api/anime/musim/:endpoint/`
  
  Contoh: [/api/anime/musim/summer-2020/](https://cihuyy-api.vercel.app/api/anime/musim/summer-2020/)

### GUDANGFILM
Gudangfilm menyediakan koleksi movie terlengkap dalam bahasa Indonesia.

- #### Latest 
  Untuk mendapatkan film terbaru.
  
  `/api/film/latest/:page`
  
  Default `page` adalah 1. Contoh: [/api/film/latest/1](https://cihuyy-api.vercel.app/api/komik/latest/1)

- #### Watch 
  Untuk mendapatkan detail film dan video 
  
  `/api/film/watch/:endpoint`
  
  Contoh: [/api/film/watch/jackpot-2024](https://cihuyy-api.vercel.app/api/film/watch/jackpot-2024)
  
- #### Search 
  Untuk mendapatkan daftar pencarian berdasarkan tipe, seperti (title, tahun,).
  
  `/api/film/search/:page/?:endpoint&movieyear=:tahun`
  `/api/film/search/:page/?:endpoint`
  
  Default `page` adalah 1. Contoh: [/api/film/search/3/?s=mas&movieyear=2007](https://cihuyy-api.vercel.app/api/film/search/1/?s=avengers)
