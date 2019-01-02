import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root'
let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox></CommentBox></Root>);
})
it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})
describe('checking components in commentbox', () => {
    afterEach(() => {
        wrapped.unmount()
    })
   
    it('has a textarea that user can type in', () => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
}
)

