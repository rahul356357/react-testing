import {saveComment} from 'actions';
import {SAVE_COMMENT } from 'actions/type'

describe('save Comment' , ()=>{
    it('has the correct type' , ()=>{
        const actions = saveComment();
        expect(actions.type).toEqual(SAVE_COMMENT)
    })
    it('has the correct payload' , ()=>{
        const actions = saveComment('New Comment')
        expect(actions.payload).toEqual('New Comment')
        
    })
})