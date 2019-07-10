export default function(route: { path: any; params: any; }) {

  const check = route.params
    // log出力
    window.alert(check)
}