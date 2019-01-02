import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { bindActionCreators } from 'redux'
class CommentBox extends React.Component {
    state = {
        comment: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.comments.saveComment(this.state.comment);
        this.setState({ comment: '' })
    }
    render() {
        const { comment } = this.state
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                <h4>Add A Comment</h4>
                <textarea
                    value={comment}
                    onChange={(e) => this.setState({ comment: e.target.value })}
                    ></textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comments" onClick={()=>this.props.comments.fetchComments()} >
                Fetch Comments
            </button>
                    </div>
        )
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        comments: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapPropsToDispatch)(CommentBox);