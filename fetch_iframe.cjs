const https = require('https');
https.get('https://html5.gamedistribution.com/rvvASMiMOC1KoJmz9FlYAKVNDPOBiepY/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 1000));
  });
});
