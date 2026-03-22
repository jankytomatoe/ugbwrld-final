const https = require('https');
https.get('https://frivwtf.com/games/buildnow-gg/index.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 1000));
  });
});
