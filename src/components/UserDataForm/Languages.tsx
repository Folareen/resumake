import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

const Languages = () => {
    const [languages, setLanguages] = useState<string[]>([])
    const languageRef = React.useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (languages.length === 0) return
        dispatch(setUserData({
            key: 'languages',
            value: languages
        }))
    }

    return (
        <div>
            Languages
            <form>
                <p>
                    {languages.map((language, index) => {
                        return (
                            <span key={index}>{language} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <input type='text' ref={languageRef} placeholder='language' />
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (languageRef.current) {
                            setLanguages([...languages, languageRef.current.value])
                            languageRef.current.value = ''
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave} disabled={languages.length === 0}>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Languages