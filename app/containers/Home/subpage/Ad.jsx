import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getAdData } from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd'
console.log(HomeAd)
class Ad extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data}/>
                    : <div>{/*加载中……*/}</div>
                }
            </div>
        )
    }
    componentDidMount(){
        //获取广告数据
        const result = getAdData();
        result.then(res => {
            return res.json()  //将数据转换成json格式
        }).then(json => {
            //处理获取的数据
            const data = json;
            if(data.length){
                this.setState({
                    data
                })
            }
            console.log(data,38)
        }).catch(ex => {
            console.log('cuowule')
            //请求错误
            if(__DEV__){
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
    }
}

export default Ad;