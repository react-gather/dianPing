import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import ReactSwipe from 'react-swipe';
import './style.less'
/*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
*/

class Category extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            index:0
        }
    }
    render(){
        const opt = {
            auto: 3000,
            callback:function(index,el){
                this.setState({
                    index:index
                })
            }.bind(this)
        }
        return(
              <div id="home-category">
                <ReactSwipe swipeOptions={opt} className="carousel">
                    <ul className="clear-fix">
                        <li className="float-left jingdian">景点</li>
                        <li className="float-left ktv">KTV</li>
                        <li className="float-left gouwu">购物</li>
                        <li className="float-left shenghuofuwu">生活服务</li>
                        <li className="float-left jianshenyundong">健身运动</li>
                        <li className="float-left meifa">美发</li>
                        <li className="float-left qinzi">亲子</li>
                        <li className="float-left xiaochikuaican">小吃快餐</li>
                        <li className="float-left zizhucan">自助餐</li>
                        <li className="float-left jiuba">酒吧</li>
                    </ul>
                    <ul className="clear-fix">
                        <li className="float-left jingdian">景点</li>
                        <li className="float-left ktv">KTV</li>
                        <li className="float-left gouwu">购物</li>
                        <li className="float-left shenghuofuwu">生活服务</li>
                        <li className="float-left jianshenyundong">健身运动</li>
                        <li className="float-left meifa">美发</li>
                        <li className="float-left qinzi">亲子</li>
                        <li className="float-left xiaochikuaican">小吃快餐</li>
                        <li className="float-left zizhucan">自助餐</li>
                        <li className="float-left jiuba">酒吧</li>
                    </ul>
                    <ul className="clear-fix">
                        <li className="float-left jingdian">景点</li>
                        <li className="float-left ktv">KTV</li>
                        <li className="float-left gouwu">购物</li>
                        <li className="float-left shenghuofuwu">生活服务</li>
                        <li className="float-left jianshenyundong">健身运动</li>
                        <li className="float-left meifa">美发</li>
                        <li className="float-left qinzi">亲子</li>
                        <li className="float-left xiaochikuaican">小吃快餐</li>
                        <li className="float-left zizhucan">自助餐</li>
                        <li className="float-left jiuba">酒吧</li>
                    </ul>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Category;