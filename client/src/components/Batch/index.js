import React, { PureComponent } from 'react';
import omit from 'lodash/omit';
import cx from 'classnames';

import './index.css';
export default class Batch extends PureComponent {
  select = () => {
    const props = this.props;
    props.onSelect(props.hasSelectedAll ? [] : props.keys)
  }

  render() {
    const props = this.props;
    return (
      <div className="d-flex  align-items-center">
      {/* <div className={s.default.batch}> className=""_1Ezq2-PQitC2R5goZw76pU"" */}
        {props.showSelect &&
          <span className="batch--pick" onClick={this.select}>当页全选</span>
        }
        <div className="batch__list">
          {
            props.items.map((value, index) => {
               return <div key={index} className="batch__item">{value}</div>
            })
          }
        </div>
      </div>
    )
  }
}

Batch.defaultProps = {
  showSelect: true
}

// function o(e) {
//   var t = function() {
//       e.onSelect(e.hasSelectedAll ? [] : e.keys)
//   };
//   return i.default.createElement("div", {
//       className: s.default.batch
//   }, e.showSelect && i.default.createElement("span", {
//       onClick: t,
//       className: "batch--pick"
//   }, "当页全选"), i.default.createElement("div", {
//       className: "batch__list"
//   }, e.items.map(function(e, t) {
//       return i.default.createElement("div", {
//           key: t,
//           className: "batch__item"
//       }, e)
//   })))
// }
// Object.defineProperty(t, "__esModule", {
//   value: !0
// }),
// t.default = o;
// var a = n(1)
// , i = r(a)
// , u = n(2542)
// , s = r(u);
// o.defaultProps = {
//   showSelect: !0
// },
// e.exports = t.default