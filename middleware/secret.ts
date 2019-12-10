export default (function(route: { genre: string; params: any }) {
  // log出力
  const check = route.params.genre
  if (
    check === 'Action' ||
    check === 'Animation' ||
    check === 'Horror'
  ) {
  } else {
    const url = '/'
    location.replace(url)
    window.alert('存在しないページです')
  }
})
