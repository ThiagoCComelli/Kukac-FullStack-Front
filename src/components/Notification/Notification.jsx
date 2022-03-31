import React, {useState,forwardRef,useImperativeHandle} from 'react';
import {randomstring} from 'randomstring-js'
import './Notification.css'

const NotificationsItem = ({content,removeNotification}) => {
    return (
        <div onClick={() => removeNotification(content.key)} onAnimationEnd={() => {removeNotification(content.key)}} className="mainNotification">
            <strong>{content.content.title}</strong>
            <small>{content.content.description}</small>
        </div>
    )
}

const Notification = forwardRef((props, ref) => {
    const [notifications, setNotifications] = useState([])

    const getNoti = () => {
        return notifications
    }

    const removeNotification = (id) => {
        setNotifications(notifications.filter(item => item.key !== id))
    }

    useImperativeHandle(ref, () => ({
        getAllNotifications() {
            return getNoti()
        },
        newNotification(content) {
            setNotifications([...notifications,{key: randomstring(), content: content}])
        },
    }))

    return (
        <div id="NotificationHelper" className="mainNotifications">
            {notifications.map((item) => {
                return (
                    <NotificationsItem removeNotification={removeNotification} key={item.key} content={item}/>
                )
            })}
        </div>
    )
})

export default Notification;