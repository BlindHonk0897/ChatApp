import React from 'react'
import './SidebarOption.css';

function SidebarOption({Icon,title,id}:any) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"></Icon>}
            {
                Icon ? (
                    <h3 className="sidebarOption__channel">{title}</h3>
                ):(
                    <h3>
                        <span className="sidebarOption__hash"># {title}</span>
                    </h3>
                )
            }
        </div>
    )
}

export default SidebarOption