import React, {Component} from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
	render(){
		return (
			<div>
				<h1 className="post_heading">All Posts</h1>
				{console.log("All Posts : ",this.props.posts)}
				{this.props.posts.map( (post) => (
					<div key={post.id}>
						{post.editing ? <EditComponent key={post.id} post={post} /> : <Post key={post.id} post={post} />} 
					</div>
				))}
			</div>
		)
	}
}

//Used to access the State; This maps the State from the store object to the props in the component
const mapStateToProps = (state) => {
	return {
		posts: state
	}
}

export default connect(mapStateToProps) (AllPost);