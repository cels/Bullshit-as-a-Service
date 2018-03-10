# Bullshit as a Service

This is a lean MVP micro-service implemented with the synergy of [Sans Bullshit Sans'](https://github.com/RoelN/SansBullshitSans) ligature [list](https://gist.github.com/RoelN/6f26118847e2f0cc95c7) and [bullshit.js](https://gist.github.com/raydog/9959637).

### Version
1.0.1

### Setup

1. Run `npm install`
2. Set `BULLSHIT_PORT` in your environment
3. Run `node index.js`.
4. Create pitch deck
5. Hockey stick profit

### Environment Variables

Environment variables that have to be set in order to run this application.

* `BULLSHIT_PORT` The port the app will listen on and respond with pure bullshit

### API

`GET` on `/bullshits` returns JSON, example:

```
{
  "bullshits": ["disruptive"]
}
```

Optional parameters:
* `amount` get multiple bullshits per request. Handy for increasing your bullshits/second throughput.

For example, `/bullshits?amount=3` returns:

```
{
  "bullshits": ["disruptive", "DRM", "web services"]
}
```


### TODOs

* Blockchain Integration
* Make ICO
* Dockerize
* Gamification
* Server-less Setup Instructions on AWS Lambda
* Crowdfunding Campaign
* Add NoSQL Database
* Streamline APIs
* Add Emoji
