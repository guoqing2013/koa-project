import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/index';
import './index.css'

class Main extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        register: PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    inputChange(e) {
        e.preventDefault();
        this.props.actions.inputChange(e.target.name, e.target.value)
    }
    onSubmit() {
        this.props.actions.submitRegister({
            mobile: this.props.register.mobile,
            password: this.props.register.password,
        })
    }
    render() {
        const { register } = this.props;
        return (
            <div className="content">
                <form>
                    {/* 禁止chrome自动填写 */}
                    {/* <input type="text" name="fakeusernameremembered"/> */}
                    {/* <input type="password" name="fakepasswordremembered"/> */}
                    <div className="control-group-container">
                        <div className="control-group">
                            <label className="control-label">手机号码</label>
                            <div className="controls user-id multi">
                                    <input
                                        type="text"
                                        className="js-mobile css-mobile"
                                        name="mobile"
                                        placeholder="今后使用手机号登录"
                                        maxLength="11"
                                        autoComplete="off"
                                        onChange={this.inputChange}
                                        value={register.mobile}
                                         />
                                <div className="err-msg"></div>
                            </div>
                        </div>
                    </div>

                   {/*  <div className="control-group-container">
                        <div className="control-group">
                            <label className="control-label">短信验证码</label>
                            <div className="controls">
                                <div className="input-append">
                                    <input className="input-half" type="text" maxLength="6" name="sms_captcha" placeholder="填写6位短信验证码" />
                                    <button type="button" className="btn js-fetch-sms btn-operation">获取验证码</button>
                                </div>
                            </div>
                        </div>
                        <div className="err-msg"></div>
                    </div> */}


                    <div className="control-group-container">
                        <div className="control-group">
                            <label className="control-label">设置密码</label>
                            <div className="controls" >
                                <input className="js-password-focus" type="password" name="password" placeholder="8~20个字，包含字母和数字" maxLength="20" autoComplete="off" onChange={this.inputChange} vlaue={register.password} />
                                <span className="icon-switch-password icon-password-hide js-switch-password-display"></span>
                                {/* <!--<div className="security-level" style="display:none;">安全程度：<span className="">弱</span><span className="">中</span><span className="">强</span></div>--> */}
                                {/* <!--<div className="controls-tip js-show-tip" style="display:none;">8-20位字符，包含字母和数字，建议字母包含大小写组合。</div>--> */}
                            </div>
                        </div>
                        <div className="err-msg"></div>
                    </div>

                    <div className="control-group">
                            <button type="button" className="btn btn-block btn-large btn-primary btn-signup js-btn-signup" data-loading-text="确认注册..." onClick={this.onSubmit}>确认注册</button>
                    </div>

                    <div className="control-group">
                        <div className="controls">
                            <a className="login-link" href="//login.youzan.com/sso/index?service=kdt" >已有帐号, 立即登录</a>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}




// export default Main;

function mapStateToProps(state) {
    return {
        register: state.register
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);