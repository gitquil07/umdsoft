import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import {ForumPage} from '../../pages/forum/forumPage/forumPage'
import $ from 'jquery';
import './paginate.css';

export class ForumPaginate extends Component {
  static propTypes = {
    url: PropTypes.string,
    author: PropTypes.string,
    perPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
    };
  }

  loadCommentsFromServer() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {_start : this.state.offset, _limit: 5},
      dataType: 'json',
      type: 'GET',

      success: (data) => {
        this.setState({
          data: data,
          pageCount: Math.ceil(100 / 5),
        });
      },

      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line
      },
    });
  }

  componentDidMount() {
      this.loadCommentsFromServer();
    }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 5);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  };

  render() {
    return (
      <div className="commentBox">
        <ForumPage data={this.state.data} />
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={(window.innerWidth <= 560)? 1 : 5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination containerClassName'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageClassName={'pageClassName'}
          activeLinkClassName ={'activeLink'}
          pageLinkClassName={'pageLinkClassName'}
          nextLinkClassName ={'nextLinkClassName'}
          previousLinkClassName ={'previousLinkClassName'}
          breakLinkClassName={'breakLinkClassName'}
          initialPage={0}
        />
      </div>
    );
  }
}