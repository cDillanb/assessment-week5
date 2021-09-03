let comments = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "You have an ambitious nature and may make a name for yourself.",
      "Now is the time to go ahead and pursue that love interest!",
      "It is better to deal with problems before they arise.",
      "Each day, compel yourself to do something you would rather not do.",
      "First think of what you want to do; then do what you have to do.",
      "Good news will come to you by mail.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  createComment: (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(200).send(comment);
  },

  getPoster: (req, res) => {
      const images = [
          "https://i5.walmartimages.com/asr/73b75fcd-4208-4a91-ae3c-acb61f00b1cb.6d2ed6a85108ac6acb149e435a729af4.jpeg",
          "https://m.media-amazon.com/images/I/81Gs4qmn+JL._AC_SL1500_.jpg",
          "https://cdn.shopify.com/s/files/1/0065/7670/1509/products/think_less_do_more_poster_file_pic.jpg?v=1545401162",
          "https://i5.walmartimages.com/asr/6c723a6d-16dd-4ffa-b175-ef2f2da0ec2e.4848e59ef987849eeb8dbf559baebc3a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
          "https://ih1.redbubble.net/image.525325898.5486/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
      ]

      let randomIndex = Math.floor(Math.random() * images.length);
      let randomImage = images[randomIndex];

      res.status(200).send(randomImage);
  },

  getQuote: (req, res) => {
      const quotes = [
          "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
          "The way to get started is to quit talking and begin doing. -Walt Disney",
          "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
          "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
          "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
          "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
          "Life is what happens when you're busy making other plans. -John Lennon"
      ];

      let randomIndex = Math.floor(Math.random() * quotes.length);
      let randomQuote = quotes[randomIndex];

      res.status(200).send(randomQuote)
  }
};
