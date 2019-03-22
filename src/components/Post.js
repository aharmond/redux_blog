import React from 'react';
import { connect, } from 'react-redux';
import PostForm from './PostForm';
import { List, Button, Segment, Header, Divider, } from 'semantic-ui-react';

class Post extends React.Component {
  state = { toggleEdit: false }

  toggleEdit = () => this.setState({ toggleEdit: !this.state.toggleEdit, })

  render() {
    const { toggleEdit } = this.state
    const { name, date, body, id, dispatch } = this.props

    return (
      <List.Item>
        {
          toggleEdit ?
          <PostForm id={id} toggleEdit={this.toggleEdit} post={{...this.props}}/>
        :
          <Segment>
            <Header>{name}</Header>
              {date}
            <Button 
              floated="right"
              size="tiny"
              content="Delete Post"
              color="red"
              onClick={() => dispatch({ type: 'DELETE_POST', id})}
            />
            <Button
              floated="right"
              size="tiny"
              content="Edit Post"
              color="olive"
              onClick={this.toggleEdit}
            />
            <Divider />
              {body}
          </Segment>
        }
      </List.Item>
    )
  }
}

export default connect()(Post)