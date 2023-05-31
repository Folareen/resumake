import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const Interests = () => {
    const [interests, setInterests] = useState<string[]>([])
    const interestRef = React.useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (interests.length === 0) return
        dispatch(setUserData({
            key: 'interests',
            value: interests
        }))
    }

    return (
        <div>
            Interests
            <form>
                <p>
                    {interests.map((interest, index) => {
                        return (
                            <span key={index}>{interest} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <input type='text' ref={interestRef} placeholder='interest' />
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (interestRef.current) {
                            setInterests([...interests, interestRef.current.value])
                            interestRef.current.value = ''
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave} disabled={interests.length === 0}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Interests