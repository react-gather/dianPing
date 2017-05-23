import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getAdData } from '../../../fetch/home/home';

class Ad extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div>
                {this.state.data.length}
            </div>
        )
    }
    componentDidMount(){
        const result = getAdData();
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json;
            if(data.length){
                this.setState({
                    data
                })
            }
        })
    }
}

export default Ad;