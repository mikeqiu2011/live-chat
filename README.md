# live-chat

## CSS

### align content to left and right separately
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

## init firebase deploy
    export http_proxy="http://127.0.0.1:1087"
    firebase init

## build vue app
    npm run build

## deploy to firebase
    firebase deploy

## rebuild and deploy
    npm run build && firebase deploy

## deploy firestore rule
    firebase deploy --only firestore:rules

## secure your API key
    https://console.cloud.google.com/apis/dashboard?project=udemy-vue-firebase-sites-a263f

    left hand bar -> credential -> API keys -> http referrers (web sites)
    -> website restrictions -> new Item -> *.firebaseapp.com
