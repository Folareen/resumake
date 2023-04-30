import React, { useEffect, useRef, useState } from 'react'

type EditableProps = {
    children: React.ReactNode | string
    onSelect: () => void
}

const Editable = ({ children, onSelect }: EditableProps) => {
    const [refresh, setRefresh] = useState<boolean>(false)

    const elRef = useRef<HTMLParagraphElement>(null)

    const addNewElement = (e: React.MouseEvent<HTMLButtonElement>) => {
        // console.log(e.target)
        console.log(elRef.current, 'curr')
        // console.log(document.getElementById('editable-container'))
        const newEl = elRef?.current?.cloneNode(true) as HTMLElement
        newEl?.setAttribute('id', `editable-container-${(new Date()).getTime()}`)
        console.log(newEl)
        // newEl.addEventListener('select', onSelect)
        // elRef?.current?.parentNode?.insertBefore(elRef?.current.cloneNode(true), elRef?.current);
        elRef?.current?.insertAdjacentHTML("afterend", newEl?.outerHTML);


        setRefresh(!refresh)
        console.log('add new element')
    }
    const delElement = () => {
        console.log(elRef?.current)
        elRef?.current?.remove()
        setRefresh(!refresh)
    }

    // useEffect(() => {
    //     console.log('resetttt')
    //     const addBtn = document.querySelector('.add-btn')
    //     const delBtn = document.querySelector('.del-btn')

    //     console.log(addBtn?.parentNode, delBtn?.parentNode)

    //     addBtn?.addEventListener('click', addNewElement)
    //     delBtn?.addEventListener('click', delElement)

    //     return () => {
    //         addBtn?.removeEventListener('click', addNewElement)
    //         delBtn?.removeEventListener('click', delElement)
    //     }

    // }, [refresh])


    return (
        // <div
        //     className='editable-container'
        //     ref={elRef}
        //     id='editable-container'
        // >
        //     <div className='editable-btns'>
        //         <button className='add-btn'>
        //             +
        //         </button>
        //         <button className='del-btn'>
        //             x
        //         </button>
        //     </div>
        <p
            contentEditable
            className='editable inline' onSelect={onSelect}
        >
            {children}
        </p>
        // </div>
    )
}

export default Editable