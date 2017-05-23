import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class HomeAd extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div id="home-ad">
                <h2>超值特惠</h2>
                <ul className="ad-container clear-fix">
                    {
                        this.props.data.map((item,index) => {
                            return <li key={index} className="ad-item float-left">
                                <a href={item.link}>
                                    <img src={item.img} alt={item.alt}/>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HomeAd;