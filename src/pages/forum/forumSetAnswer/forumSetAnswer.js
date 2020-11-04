import React, {Component} from 'react';
import './forumSetAnswer.css'
import EditorTiny from "../../editorTiny/editorTiny";
class ForumSetAnswer extends Component {

    constructor(props){
        super(props);
    }


    render() {
        const {match: {url}} = this.props;
        console.log()
        return (
            <div className='pr-3'>
                <h3 className='forumSetAnswer-h3'>Savolingiz mavzusi</h3>
                <input className='form-control mb-3' type="text"/>
                <h3 className='forumSetAnswer-h3'>Savolingiz mazmuni</h3>
                <EditorTiny/>
                <div className='mt-3'>
                    <label className='forumSetAnswer-h3' htmlFor="tag">Qaysi texnalogiya bo'yich savol beryapsiz? Misol: css, javascript, html...</label>
                    <input className='form-control' type="text" id='tag'/>
                </div>
                <div className='text-center mt-2'>
                    <button className='sendButton' >Jo'natish</button>
                </div>

            </div>
        );
    }
}

export default ForumSetAnswer;
