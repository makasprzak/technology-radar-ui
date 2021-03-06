import React, { Component } from 'react';
import MagicChart from "./MagicChart";

import { dataService } from './DataService';

class RadarChart extends Component {
    constructor(props) {
        super(props);

        this.state ={
            loading: true,
            data: {}
        };

        this.getData(this.props);

    }

    getData(props) {
        this.spreadsheetId = props.spreadsheetId;
        this.snapshotId = props.snapshotId;

        dataService.getBlips(this.spreadsheetId, this.snapshotId)
            .then(
                data => this.setState({
                    data,
                    loading: false
                })
            );
    }

    componentWillReceiveProps(nexrProps) {
        this.setState({
            loading: true
        });

        this.getData(nexrProps);
    }

    render() {
        return (
            <div>
                {this.state.loading ? '' :
                    <MagicChart data={this.state.data} onItemClick={this.props.onItemClick}/>}
            </div>
        );
    }
}

export default RadarChart;
