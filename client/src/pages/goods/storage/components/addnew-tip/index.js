import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const AddnewTip = (props) => {
    return (
        <div className="list--empty d-flex align-items-center justify-content-center">
            还没有数据，你可以<Link to="/add">新建商品</Link>
        </div>
    )
}

export default AddnewTip