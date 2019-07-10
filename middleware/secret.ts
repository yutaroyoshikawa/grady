export default (
function (route: { genre: string; params: any; }) {
    // log出力
    const hoge = route.params.genre
    if (hoge == 'Action' || hoge == 'Sucpense' || hoge == 'Science Fiction' ||hoge == 'Horror' || hoge == 'Comedy' || hoge == 'Romance') {
      return
    } else if (hoge == null) {
      return
    } else {
      window.alert('不正アクセスです')
    }
})