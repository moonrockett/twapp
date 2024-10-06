const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, '..', 'build');
const mainJsPath = path.join(buildPath, 'static', 'js', 'main.js');
const indexHtmlPath = path.join(buildPath, 'index.html');
const liveServerHtmlPath = path.join(buildPath, 'live-server.html');

// Read the contents of the main.js file
const mainJs = fs.readFileSync(mainJsPath, 'utf8');

// Read the contents of the index.html file
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Create the live-server.html file
const liveServerHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Telegram Web App (Live Server)</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
      ${indexHtml.match(/<style>([\s\S]*?)<\/style>/)[1]}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>${mainJs}</script>
  </body>
</html>
`;

// Write the live-server.html file
fs.writeFileSync(liveServerHtmlPath, liveServerHtml);

console.log('Live Server HTML file created successfully.');