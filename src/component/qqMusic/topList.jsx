import React, { Component } from 'react';
import { $fetch, sendEvent } from '../../common';

class TopList extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      index: 0,
      topList: []
    };
  }  

  componentWillMount () {
    this.getData();
  }

  componentWillReceiveProps () {
    this.getData();
  }

  getData () {
    let url = "/v8/fcg-bin/fcg_myqq_toplist.fcg";
    let body = {
      g_tk: '1928093487',
      notice: 0,
      needNewCode: 1,
    };
    $fetch( url, 'POST', body, ( data ) => {
      this.setState( { topList: data.data.topList }, () => {
        const { topList, index } = this.state;
        sendEvent( 'changeList', topList[ index ] )
      } )
    } )
  }

  handleToggle ( index ) {
    this.setState( { index }, () => {
      sendEvent( 'changeList', this.state.topList[ index ] )
    } )
  }

  render () {
    const { topList, index } = this.state;
    return (
      <div 
        className="top-list"
      >
        <div
          className="top-list-title"
        >
          QQ音乐巅峰榜
        </div>
        {
          topList.map( ( item, i ) => (
            <div
              key={ i }
              className={ "top-list-item" + ( i === index ? ' active' : '' ) }
              onClick={ this.handleToggle.bind( this, i ) }
            >
              { item.topTitle }
            </div>
          ) )
        }
      </div>
    )
  }
}

export default TopList;