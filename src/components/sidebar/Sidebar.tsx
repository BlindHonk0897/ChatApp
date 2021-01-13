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
    username:any,
    state:any
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
            <div className="sidebar__users">
            {/* <SidebarOption  title="Dan"></SidebarOption>
            <SidebarOption  title="Tips"></SidebarOption>
            <SidebarOption  title="qwer"></SidebarOption>
            <SidebarOption  title="ddfd"></SidebarOption>
            <SidebarOption  title="dvdf"></SidebarOption>
            <SidebarOption  title="fbf"></SidebarOption>
            <SidebarOption  title="xccx"></SidebarOption>
            <SidebarOption  title="uiu"></SidebarOption>
            <SidebarOption  title="ttjj"></SidebarOption>
            <SidebarOption  title="wwe"></SidebarOption>
            <SidebarOption  title="khj"></SidebarOption>
            <SidebarOption  title="sfsd"></SidebarOption>
            <SidebarOption  title="ouuj"></SidebarOption>
            <SidebarOption  title="dsw"></SidebarOption>
            <SidebarOption  title="r"></SidebarOption>
            <SidebarOption  title="wqe"></SidebarOption>
            <SidebarOption  title="pol"></SidebarOption>
            <SidebarOption  title="hg"></SidebarOption>
            <SidebarOption  title="xxs"></SidebarOption>
            <SidebarOption  title="io"></SidebarOption>
            <SidebarOption  title="tr"></SidebarOption>
            <SidebarOption  title="uy"></SidebarOption>
            <SidebarOption  title="f"></SidebarOption>
            <SidebarOption  title="c"></SidebarOption> */}
            {
                props.state.context.users?.map((user:any)=>{
                     return <SidebarOption key={user} title={user}></SidebarOption>
                })
            }
            </div>
            <div>

            </div>
        </div>
    )
}

export default Sidebar