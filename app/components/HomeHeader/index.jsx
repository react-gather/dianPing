import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    render(){
        return(
            <div id="home-header" className="clear-fix">
                <div className="float-left home-header-left">
                    {this.props.cityName}
                    <i className="icon-angle-down"></i>
                </div>
                <div className="float-left home-header-middle">
                    <div className="search-container">
                        <input type="text"/>
                        <i className="icon-search"></i>
                    </div>
                </div>
                <div className="float-right home-header-right">
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader;