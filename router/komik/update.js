const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

// Konfigurasi API ScrapingBee
const API_KEY = 'OQ3DTRI7YLDY3Z9Z6XD1S1V53T0F33T55XNAH0RV73J6ENM8F7G1ZPE60BPL7OZGZKOY11OF9ATYWOUQ';
const BASE_URL = 'https://app.scrapingbee.com/api/v1/';
const { baseUrl } = require('../base-url');

router.get('/:page', async (req, res) => {
  const { page } = req.params;
  const targetUrl = `${baseUrl}/komik-terbaru/page/${page}`;
  const url = `${BASE_URL}?api_key=${API_KEY}&url=${targetUrl}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html',
      }
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // Mengubah href berdasarkan baseUrl
    $(`a[href^="${baseUrl}"]`).each((_, el) => {
      const href = $(el).attr('href');
      $(el).attr('href', href.replace(baseUrl, ''));
    });

    // Mengambil data terbaru komik
    const latestkomik = [];
    $('.post-item-box').each((_, el) => {
      latestkomik.push({
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

    // Mengambil data komik populer
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
      Totalpages,
      latestkomik,
      komikPopuler
    };

    // Kirim respons JSON ke client
    res.status(200).json({
      status: true,
      data
    });
  } catch (error) {
    // Kirim respons JSON dengan kesalahan
    res.status(500).json({
      status: false,
      data: {
        message: 'Terjadi kesalahan saat mengambil data.',
        error: error.message
      }
    });
  }
});

module.exports = router;
