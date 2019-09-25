import { configureStore } from 'redux-starter-kit'
import template from './template.slice'

const store = configureStore({
    reducer: { template },
});

export default store;
