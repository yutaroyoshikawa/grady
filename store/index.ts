import Vuex, { StoreOptions } from 'vuex';
import connection from './connection';

const store: StoreOptions<{}> = {
  modules: {
    connection
  }
};

export default () => new Vuex.Store<{}>(store)
