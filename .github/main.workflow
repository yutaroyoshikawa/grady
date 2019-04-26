action "Pushed to master" {
  uses = "actions/bin/filter@95c1a3b"
  args = "branch master"
}
action "Install Dependencies" {
  uses = "actions/npm@6309cd9"
  needs = ["Pushed to master"]
  args = "install"
}
action "Build Development" {
  uses = "actions/npm@6309cd9"
  needs = ["Install Dependencies"]
  secrets = ["FIREBASE_API_KEY"]
  args = "run build"
}
action "Deploy to Development" {
  uses = "w9jds/firebase-action@master"
  needs = ["Build Development"]
  args = "deploy --only hosting"
  env = {
    PROJECT_ID = "grady-43e4a"
  }
  secrets = ["FIREBASE_TOKEN"]
}
