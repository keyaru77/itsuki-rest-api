const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();
const { baseUrl } = require('../base-url');

router.get('/:page', async (req, res) => {
  const { page } = req.params;
  const url = `${baseUrl}/komik-terbaru/page/${page}/`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Origin': baseUrl,
        'Referer': baseUrl,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:101.0) Gecko/20100101 Firefox/101.0',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });

    const html = response.data;
    const $ = cheerio.load(html);

    const updateKomik = [];
    $('.post-item-box').each((_, el) => {
      updateKomik.push({
        link: $(el).find('a').attr('href'),
        type: $(el).find('.flag-country-type').attr('class').split(' ').pop(),
        gambar: $(el).find('.post-item-thumb img').attr('src'),
        Title: $(el).find('.post-item-title h4').text().trim(),
        warna: $(el).find('.color-label-manga').text().trim(),
        chapter: {
          link: $(el).find('.lsch a').attr('href'),
          Title: $(el).find('.lsch a').text().trim(),
          Date: $(el).find('.datech').text().trim()
        }
      });
    });

    const komikPopuler = [];
    $('.list-series-manga.pop li').each((_, el) => {
      komikPopuler.push({
        link: $(el).find('.thumbnail-series a.series').attr('href'),
        gambar: $(el).find('.thumbnail-series img').attr('src'),
        peringkat: $(el).find('.ctr').text().trim(),
        Title: $(el).find('h4 a.series').text().trim(),
        rating: $(el).find('.loveviews').text().trim()
      });
    });

    const Totalpages = parseInt($('.pagination a.page-numbers').eq(-2).text().trim());

    const data = {
      status: true,
      updateKomik,
      Totalpages,
      komikPopuler
    };

    // Kirim respons JSON ke client
    res.json(data);
  } catch (error) {
    res.status(500).send('Terjadi kesalahan saat mengambil data.');
  }
});

module.exports = router;
