import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPositionSelected } from '../reducers';
import PlayerSelection from './player-selection';
import Share from './share';

class Content extends Component {
    renderTitle() {
        return (
            <div className="title">
                {this.props.positionSelected}
                <div className="subtitle">
                    {`ELIGE A TU ${this.props.positionSelected}`}
                </div>
            </div>
        );
    }

    render() {
        const { positionSelected } = this.props;

        return (
            <div className="content">
                {positionSelected && positionSelected !== '11 IDEAL' && this.renderTitle() && <PlayerSelection />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        positionSelected: getPositionSelected(state)
    }
}

export default connect(mapStateToProps)(Content);

