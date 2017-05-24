import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ListItem from './item'
import './style';

class List extends React.Component{
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div>
                <div className="list-container">
                    {
                        this.props.data.map((item,index) => {
                            return <ListItem key={index} data={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default List;