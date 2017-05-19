import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';

class App extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone : false
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.initDone ?
                    this.props.children :
                    <div>加载中</div>
                }
            </div>
        )
    }
    componentDidMount(){
        //从localStoreage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = 'chagnchun'
        }

        this.setState({
            initDone : true
        })
    }
}

export default App;
