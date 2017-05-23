import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';

class Home extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category />
                <div style={{height:'10px'}}></div>
                <Ad />
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state){
    console.log(state)
    return{
        userinfo:state.userinfo
    }
}
function mapDisplayToProps(display){
    return{}
}
export default connect(
    mapStateToProps,
    mapDisplayToProps
)(Home);