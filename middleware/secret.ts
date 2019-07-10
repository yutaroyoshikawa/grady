export default (
function (route: { genre: string; params: any; }) {
    // log出力
    const check = route.params.genre
    if (check == 'Action' || check == 'Suspense' || check == 'Science Fiction' ||check == 'Horror' || check == 'Comedy' || check == 'Romance') {
      return
    } else if (check == null) {
      return
    } else {
      window.alert('不正アクセスです')
    }
}) 