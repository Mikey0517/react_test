import React, { Component } from 'react';
import DefaultLayout from "../layout/defaultLayout";
import { TankBattle } from  '../component/index';

class TankBattlePage extends Component {
  render () {
    return (
      <DefaultLayout { ...this.props }>
        <TankBattle />
      </DefaultLayout>
    )
  }
}

export default TankBattlePage;