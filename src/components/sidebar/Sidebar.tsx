import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from '../sidebarOption/SidebarOption';
import GroupIcon from '@material-ui/icons/Group';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Sidebar.css';

interface ISidebar{
    username:any
}

function Sidebar(props:ISidebar) {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>DNA Micro</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {props.username}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Broadcasts Message"></SidebarOption>
            <hr/>
            <SidebarOption Icon={ExpandLessIcon} title="Online users"></SidebarOption>
            <SidebarOption  title="Dan"></SidebarOption>
            <SidebarOption  title="Tips"></SidebarOption>
            <SidebarOption  title="Paul"></SidebarOption>
        </div>
    )
}

export default Sidebar