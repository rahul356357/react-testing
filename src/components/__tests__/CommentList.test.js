import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root'
import CommentList from 'components/CommentList';
let wrapped;
const initialState = {
    comments:['test1' , 'test2']
}
beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})


it('create one LI per comment', () => {
        expect(wrapped.find('li').length).toEqual(2);
})

it('should show comment', () => {
expect(wrapped.render().text()).toContain('test1');
expect(wrapped.render().text()).toContain('test2');

})