import * as bookActions from './bookActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('#bookActions', () => {
    describe('#newBookAction', () => {
        it('should dispatch new state', () => {
            const expectedActions = [
                {
                    type: 'NEW_BOOK',
                },
            ];
            const store = mockStore({});
            store.dispatch(bookActions.newBookAction());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
