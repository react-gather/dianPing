import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style';

class ListItem extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const data = this.props.data
        return(
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">
                    <img src={data.img} alt={data.title} />
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="floatt-left">{data.title}</h3>
                        <span className="float-right">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">{data.subTitle}</p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{data.price}</span>
                        <span className="mumber float-right">已售{data.mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem;