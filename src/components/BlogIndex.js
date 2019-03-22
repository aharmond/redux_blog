import React from 'react';
import { connect, } from 'react-redux';
import PostForm from './PostForm';
import Post from './Post';
import { List, Container, Button, } from 'semantic-ui-react';

class BlogIndex extends React.Component {
  state = { toggleNew: false }

  toggleNew = () => this.setState({ toggleNew: !this.state.toggleNew });

  render() {
    const { toggleNew } = this.state
    const { posts } = this.props

    return(
      <Container>
        <Button
          onClick={this.toggleNew}
          content="New Post"
        />
        {
          toggleNew ? 
          <PostForm />
        :
          null
        }
        <List>
          { posts.map( p => {
            return (
              <Post key={p.id} {...p} />
            )}
          )}
        </List>
      </Container>
    )
  }
}
    
const mapStateToProps = (state) => {
  return { posts: state.posts, };
}

export default connect(mapStateToProps)(BlogIndex);