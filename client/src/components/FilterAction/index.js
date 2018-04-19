import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'zent';
import './index.css';

class FilterAction extends PureComponent {
  render() {
    const { 
      disabled,
      loading,
      onConfirm,
      onClear,
      onExport,
      confirmText,
      clearText,
      exportText,
      exportLink,
      exportLinkText 
    } = this.props;
    return (
      <div className="filter-actions">
        <Button type="primary" className="filter-actions__btn" disabled={disabled} loading={loading} onClick={onConfirm}>{confirmText}</Button>
        {
           onExport && <Button type="default" onClick={onExport} name={exportText} >{exportText}</Button>
        }
        {
           exportLink && <Button type="default" target="_blank" href={exportLink}>{exportLinkText}</Button>
        }
        <Button className="filter-actions__btn--clear" disabled={disabled} onClick={onClear}>{clearText}</Button>
        
 
      </div>
    );
  }
}


// http://www.yizumi-group.es/
// If you are using a Babel transform like transform-class-properties , you can also declare defaultProps as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the class fields proposal.
FilterAction.propTypes = {
  className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onExport: PropTypes.func,
    confirmText: PropTypes.string,
    clearText: PropTypes.string,
    exportText: PropTypes.string,
    exportLink: PropTypes.string,
    exportLinkText: PropTypes.string
}

FilterAction.defaultProps = {
  confirmText: "筛选",
  clearText: "清空筛选条件",
  exportText: "导出",
  exportLinkText: "查看导出报表"
}

export default FilterAction;