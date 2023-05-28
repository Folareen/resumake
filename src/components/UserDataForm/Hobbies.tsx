import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const Hobbies = () => {
    const [hobbies, setHobbies] = useState<string[]>([])
    const hobbiesRef = React.useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(setUserData({
            key: 'hobbies',
            value: hobbies
        }))
    }

    return (
        <div>
            Hobbies
            <form>
                <p>
                    {hobbies.map((hobby, index) => {
                        return (
                            <span key={index}>{hobby} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <input type='text' ref={hobbiesRef} placeholder='hobby' />
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (hobbiesRef.current) {
                            setHobbies([...hobbies, hobbiesRef.current.value])
                            hobbiesRef.current.value = ''
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Hobbies