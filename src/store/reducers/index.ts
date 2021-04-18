import { combineReducers } from 'redux';
import { goodsReducer } from './goodsReducers';
import { navigationReducer } from './navigationReducer';

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	goods: goodsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
