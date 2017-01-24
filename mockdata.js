var messages = [
  {
    "id": 1,
    "messages": [
      {"text": "Welcome to our store!"},
      {"text": "How can I help you?"}
    ]
  },
  {
    "id": 2,
    "messages": [
      {"text": "Welcome to our store 2!"},
      {"text": "How can I help you 2?"}
    ]
  }
];

var images = [
  {
    "id": 1,
    "messages": [
      {
        "attachment": {
          "type": "image",
          "payload": {
            "url": "https://petersapparel.parseapp.com/img/item101-thumb.png"
          }
        }
      }
    ]
  },
  {
    "id": 2,
    "messages": [
      {
        "attachment": {
          "type": "image",
          "payload": {
            "url": "https://placeholdit.imgix.net/~text?txtsize=33&txt=500%C3%97500&w=500&h=500"
          }
        }
      }
    ]
  }
];

module.exports = {
  messages: messages,
  images: images
}
