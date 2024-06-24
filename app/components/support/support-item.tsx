import React from 'react'
import './support.css'

const SupportItem = ({ item, onSelect, selected }: { item: SupportType, onSelect: Function, selected: string }) => {
    return (
        <div className={`link ${selected === item.id ? 'active' : ''}`} onClick={() => onSelect(item.id)}>{item.fullName}</div>
    )
}


export default SupportItem