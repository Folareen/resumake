import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'


const Languages = () => {
    const [languages, setLanguages] = useState<string[]>([' '])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (languages.length === 0) return
        dispatch(setUserData({
            key: 'languages',
            value: languages.filter(language => language !== '')
        }))
    }

    useEffect(() => {
        if (languages.includes('')) {
            setLanguages(languages.filter(language => language !== ''))
        }
    }, [languages])

    useEffect(() => {
        inputContainerRef.current.scrollTop += 100

    }, [languages])



    return (
        <div>
            <form>
                <h2>
                    Languages
                </h2>

                <div className='multiple-input-container' ref={inputContainerRef}>
                    {languages.map((language, index) => {
                        return (
                            <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                let allLanguages = languages
                                let currLanguage = languages[index]
                                currLanguage = e.target.value
                                allLanguages[index] = currLanguage
                                setLanguages(allLanguages)
                            }} placeholder='language' className='input-item' />
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setLanguages([...languages, ' '])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={languages.length === 0} className="save">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Languages