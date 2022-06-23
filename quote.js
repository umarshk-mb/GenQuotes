  
  function getQuote(){
    var randomNumber = Math.floor(Math.random() * quote.length)
    document.getElementById('text').innerHTML = quote[randomNumber];
  }
  
 function setTweetButton(quote) {
  tweetquote.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

  let quote = [
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." -- Winston S. Churchill',
    '"Success usually comes to those who are too busy to be looking for it." -- Henry David Thoreau',
    '"Opportunities don\'t happen. You create them." -- Chris Grosser',
    ' "I find that the harder I work, the more luck I seem to have." -- Thomas Jefferson',
    '"Stop chasing the money and start chasing the passion." -- Tony Hsieh',
    '"Do one thing every day that scares you."-- Anonymous',
    '"All progress takes place outside the comfort zone." -- Michael John Bobak',
    '"Don\'t let the fear of losing be greater than the excitement of winning." -- Robert Kiyosaki',
    ' "The way to get started is to quit talking and begin doing." -- Walt Disney',
    '"If you really want to do something, you\'ll find a way. If you don\t, you\'ll find an excuse." -- Jim Rohn',
    '"If you can dream it, you can do it." -- Walt Disney',
    '"I never dreamed about success, I worked for it." -- Estee Lauder',
    '“Never let the fear of striking out keep you from playing the game.”-- Babe Ruth',
    ' “Not how long, but how well you have lived is the main thing.”-- Seneca',
    '“You have to dream before your dreams can come true.”--Abdul Kalam',
    '“Failure will never overtake me if my definition to succeed is strong enough.”--Abdul Kalam'
  ];
