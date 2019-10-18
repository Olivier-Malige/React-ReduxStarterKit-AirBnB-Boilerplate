import { configureStore } from 'redux-starter-kit'
import model from './reducers/model/model.slice'

// combine slices here
const store = configureStore({
    reducer: { model },
});

export default store;
