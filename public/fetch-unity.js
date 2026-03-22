import https from 'https';
import fs from 'fs';

https.get('https://mathplayzone.com/wp-content/uploads/assets/ragdoll-hit/unity-2020.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Replace the hardcoded "Build/" with the dynamic unityWebglBuildUrl
    data = data.replace(/""\.concat\("Build","\/"\)/g, 'w.a.unityWebglBuildUrl');
    fs.writeFileSync('public/ragdoll-hit-unity-2020.js', data);
    console.log('Successfully created ragdoll-hit-unity-2020.js');
  });
}).on('error', (err) => {
  console.error('Error fetching unity-2020.js:', err);
});
