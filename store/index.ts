import Vuex, { StoreOptions } from 'vuex';
import { drawer } from './drawer';

const store: StoreOptions<{}> = {
  modules: {
    drawer
  }
};

export default () => new Vuex.Store<{}>(store);
