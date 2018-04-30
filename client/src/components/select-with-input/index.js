import React, {
    PureComponent
} from 'react';
import {
    Input,
    Select
} from 'zent';

import './index.css';

export default class SelectWithInput extends PureComponent {
    state = {
        selected: "",
        value: ""
    };

    componentWillReceiveProps = (nextProps) => {

    }

    handleInputChange = (e) =>{
        const value = e.target.value.trim();
        this.setState({
            value
        }, this.triggerChange )
    }

    handleSelectChange = (e) => {
        var value = e.target.value;
        this.setState({
            selected: value
        }, this.triggerChange )
    }

    triggerChange = () => {
        this.props.onChange(this.state)
    }

    render() {
        const state = this.state;
        const props = this.props;
        return (
            <div className="d-flex">
                 <Select
                  className="select-input__select"
                  value={state.selected || props.selected}
                  data={props.options}
                  onChange={this.handleSelectChange}
                  autoWidth={true}
                />
                <Input
                  className="select-input__input"
                  value={state.value || props.value}
                  placeholder={props.placeholder}
                  onChange={this.handleInputChange}
                />
                   {/* onPressEnter={props.onPressEnter} */}
            </div>
        )
    }
}