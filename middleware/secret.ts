export default (function(route: { genre: string; params: any }) {
  const path = route.params.genre
  const genres = ['Action', 'Animation', 'Horror']
  const genreExists = genres.find(genre => genre === path)
  if (!genreExists) {
    location.replace('/')
    window.alert('存在しないページです')
  }
})
