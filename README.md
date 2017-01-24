# chatbot-api

Chatbot Node RESTful API

## API Blueprint

```
{
  "GET /api/images": {
    "desc": "returns all images",
    "response": "200 application/json",
    "data": [{}, {}, {}]
  },

  "GET /api/images/:id": {
    "desc": "returns one image represented by its id",
    "response": "200 application/json",
    "data": {}
  },
  "GET /api/messages": {
    "desc": "returns all messages",
    "response": "200 application/json",
    "data": [{}, {}, {}]
  },

  "GET /api/messages/:id": {
    "desc": "returns one message represented by its id",
    "response": "200 application/json",
    "data": {}
  },

```
