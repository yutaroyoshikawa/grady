export type ILoadState = 'loading' | 'success' | 'error' | 'none'

export interface IConnection {
  loadState: ILoadState
  errorMessage: string
  movies: []
}

export default interface IConnectionState {
  connection: IConnection
}
