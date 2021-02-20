const ghpages = require('gh-pages');

// github page URL context = repository name
const subdir = 'stencil-app';
const outputWwwDir = 'www';
const publishedDir = outputWwwDir + '/' + subdir;

ghpages.publish(publishedDir, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('GREAT SUCCESS! Open https://brenoes.github.io/stencil-app/');
  }
});