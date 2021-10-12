import React from "react";
import moment from "moment"

import Avatar from "../Avatar/Avatar";
import {
    MessageSC,
    MessageWrapperSC
} from "../styled";

export default function Message(props) {
    const direction = props.isIncomming ? 'left' : 'right'

    return (
        <MessageWrapperSC>
            {props.isLast && (<Avatar imageURL={props.avatar} direction={direction}/>)}
            <MessageSC direction={direction} isLast={props.isLast} isIncomming={props.isIncomming}>
                <p className="messageContent">{props.messageContent}</p>
                <span className="date">{moment(props.date).format('HH:mm:ss')}</span>
            </MessageSC>
        </MessageWrapperSC>
    )
}

