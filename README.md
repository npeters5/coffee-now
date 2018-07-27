# Coffee NOW

## What is Coffee NOW!?

Coffee NOW! is a react native app designed for iPhone for the coffee snob who wants a high quality cup of bean juice yesterday, without the hassle of sifting through unrelated search results on Yelp or Google. Search for only the best coffee shops near you, and save them to your Favorites!

## Chow Functionality

### Create an account or sign in to existing account

![gif of signing in](https://media.giphy.com/media/9DpPcrv3bCJapKyVPf/giphy.gif)

### Initial Coffee Search & Map View

![gif of landing page and initial coffee shop search](https://media.giphy.com/media/3tLwtukZ69RLyR5chv/giphy.gif)

<iframe src="https://giphy.com/embed/3tLwtukZ69RLyR5chv" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/3tLwtukZ69RLyR5chv">via GIPHY</a></p>

### Shop Detail page & Yelp redirect

![gif of shop detail view](https://gph.is/2OnB7MW)

### Add a Coffee Shop to your Favorites

![gif of adding a coffee shop to Favorites](https://gph.is/2NOIbBq)

### Remove Favorite from Favorites Screen

![gif of deleting a favorite](https://media.giphy.com/media/3oa91YOYI7vsR8KJfC/giphy.gif)

### Remove Favorite from Shop Detail Screen

![gif of deleting a favorite](https://media.giphy.com/media/2wXtk30mzW3HelgE4N/giphy.gif)

## Get Coffee NOW! up and running on your local environment

1.  Fork and clone this repository
2.  `cd` into the directory
3.  Run `npm install` to install dependencies
4.  Get a Yelp API Key [here](https://www.yelp.com/developers/v3/manage_app)
5.  Set up the [Coffee Now API](https://github.com/npeters5/coffeenow-api)
6.  Add a .env file to the root directory. The .env file should look like the following:

```
YELP_API_KEY=yourYelpAPIKey
```

7.  Run `npm start` to launch the packager
8.  Use [Expo](https://expo.io/learn) to view the running code on a device. Use the Expo phone app by scanning the QR code that results from `npm start`, or use the Expo XDE to launch the app to a simulator.
