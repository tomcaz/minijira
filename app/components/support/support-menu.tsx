import React from 'react'
import SupportItem from './support-item'

interface ISupport {
    list: SupportType[],
    selected: string,
    setSelected: Function
}

const SupportMenu = ({ list, selected, setSelected }: ISupport) => {
    return (
        <div>
            {list.map(support => (<SupportItem key={support.id} item={support} selected={selected} onSelect={setSelected} />))}
        </div>
    )
}

export default SupportMenu