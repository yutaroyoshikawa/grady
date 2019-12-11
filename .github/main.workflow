workflow "main" {
  on = "push"
  resolves = ["Deploy to Master"]
}

action "Pushed to master" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Install Dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Pushed to master"]
  args = "install"
}

action "Build Master" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install Dependencies"]
  args = "run build"
  secrets = ["ALGOLIA_API_KEY", "FIREBASE_TOKEN", "ALGOLIA_APP_ID"]
}

action "Deploy to Master" {
  uses = "w9jds/firebase-action@7d6b2b058813e1224cdd4db255b2f163ae4084d3"
  needs = ["Build Master"]
  args = "deploy --only hosting"
  secrets = ["FIREBASE_TOKEN"]
}
