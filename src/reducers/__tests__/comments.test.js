import commentReducer from 'reducers/comment';
import {SAVE_COMMENT} from 'actions/type';

it('handles actions of type save comments' , ()=>{
    const action = {
        type:SAVE_COMMENT , 
        payload:'New Comment'
    }
    const newState = commentReducer([], action)
    expect(newState).toEqual(['New Comment'])
})

it('handles actions with unknown action' , ()=>{
    const newState = commentReducer([], {})
    expect(newState).toEqual([]);
})

