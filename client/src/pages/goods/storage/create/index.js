import React, { Component } from 'react';
// import { Design, Button, Notify, BlockHeader } from 'zent';
import { withRouter } from 'react-router-dom';
import configConf from 'zent/lib/design/components/config';
import ConfigEditor from 'zent/lib/design/components/config/ConfigEditor';
import {Design, BlockHeader, Form, Radio, Checkbox, Button, Notify } from 'zent';
import './style.css';
import CreateForm from '../components/create-form';

export class Create extends Component {
  state = {
    value: [
      {
        type: configConf.type,
        ...ConfigEditor.getInitialValue()
      }
    ],

    pendingOnSubmit: false,
    pendingOnDraft: false
  };

  render() {
    return (
      <div className="page">
        <div className="container">
          <BlockHeader className="paper-create__title" title="新建商品" />
          <CreateForm scrollToError onSubmitFail={this.onSubmitFail} onSubmitSuccess={this.onSubmitSuccess} />
        </div>
      </div>
    );
  }

  /**
   * 保存成功
   */
  onSubmitSuccess(result) {
    Notify.success(result);
  }

  /**
   * 保存失败
   */
  onSubmitFail(error) {
    Notify.error(error);
  }
  

 
  onChange = newValue => {
    this.setState({
      value: newValue
    });
  };

  saveDesign = instance => {
    this.design = instance && instance.getDecoratedComponentInstance();
  };

  triggerDesignValidation() {
    return this.design.validate();
  }

  notImplemented() {
    Notify.success('暂未开放');
  }

  saveAsDraft = () => {
    this.setState({
      pendingOnDraft: true
    });

    this.triggerDesignValidation()
      .then(() => {
        // submit this.state.value to server
        this.design.markAsSaved();
        Notify.success('保存成功', 2000, () => {
          const { history } = this.props;
          history.push('/paper');
        });
      })
      .catch(validations => {
        // eslint-disable-next-line
        console.log(validations);
        this.setState({
          pendingOnDraft: false
        });
      });
  };

  submit = () => {
    this.setState({
      pendingOnSubmit: true
    });

    this.triggerDesignValidation()
      .then(() => {
        // submit this.state.value to server
        this.design.markAsSaved();
        Notify.success('上架成功', 2000, () => {
          const { history } = this.props;
          history.push('/goods/storage/list');
        });
      })
      .catch(validations => {
        // eslint-disable-next-line
        console.log(validations);
        this.setState({
          pendingOnSubmit: false
        });
      });
  };
}

export default withRouter(Create);
