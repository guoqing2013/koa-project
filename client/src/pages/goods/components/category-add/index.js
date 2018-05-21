import React, {
    Component
} from 'react';
import {
    Input,
    Select,
    Button,
    DatePicker,
    DateRangeQuickPicker
} from 'zent';

export default class CategoryAdd extends Component {
    constructor(props) {
        super(this);
        this.state = {
            disabled: false
        }
        this.defaultProps = {
            hide: false
        }
    }



    handleChangeDate = (value, chooseDays) => {
        this.setState({});
    };



    handleChange = e => {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        });
    };


    render() {
        const { disabled } = this.state;
        const { children, name, hide } = this.props;


            if (disabled && hide) {
                return null
            }  else {
                return <Button  />
            }
    }
}