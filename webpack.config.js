const path = require('path');

module.exports = {
  entry: {
	'homePage' : './javascript/homePage.js',
	'CreateArticle' : './javascript/CreateArticle.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};