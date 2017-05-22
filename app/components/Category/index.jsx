import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
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
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <div>{this.state.index}</div>
            </div>
        )
    }
}
export default Category;