import React, {
    PureComponent
} from 'react';
import {
    Input,
    Select
} from 'zent';
import PropsTypes from 'prop-types';

import './index.css';

const options = [{
    text: "商品名称",
    value: "skuName"
  }, {
    text: "商品条码",
    value: "skuNo"
  }]
  

export default class SelectWithInput extends PureComponent {
    state = {
        selected: "",
        value: ""
    };

    componentWillReceiveProps = (nextProps) => {
        var obj = {};
        if (nextProps.selected !== this.state.selected) {
            obj.selected = nextProps.selected;
        }
        if (nextProps.value !== this.state.value) {
            obj.value = nextProps.value;
        }
        this.setState(obj);
        // (0, c.default)(t) || this.setState(t)
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
                  onPressEnter={props.onPressEnter}
                />
            </div>
        )
    }
}


SelectWithInput.propsTypes = {
    options: PropsTypes.array,
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired,
    onPressEnter: PropsTypes.func,
    placeholder: PropsTypes.string,
    className: PropsTypes.string
}

SelectWithInput.defaultProps = {
    options: options,
    value: ""
}