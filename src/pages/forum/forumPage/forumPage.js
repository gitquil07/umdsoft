import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForumGroup from '../forumGroup/forumGroup'


export class ForumPage extends Component {
    static propTypes = {
      data: PropTypes.array.isRequired,
    };
  
    render() {
      let forumGroup = this.props.data.map(function (post, index) {
        return <ForumGroup key={index} id={post.id} title={post.title}></ForumGroup>;
      });
  
      return (
        <div id="project-comments" className="commentList">
          <ul className="p-0">{forumGroup}</ul>
        </div>
      );
    }
  }