import React from 'react';
import {connect} from 'react-redux'
class CommentList extends React.Component{
    state = {

    }
    renderComments = ()=>{
        return this.props.comments.map((com)=>{
            return <li key={com}>{com}</li>
        })
    }
    render(){
        return(
            <div>
                <ul>
                {this.renderComments()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
return {
    comments:state.comments
}
}

export default connect(mapStateToProps , null)(CommentList);