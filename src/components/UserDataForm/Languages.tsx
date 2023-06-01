import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

type LanguageType = {
    language: string,
    id: number
}


const Languages = () => {
    const [languages, setLanguages] = useState<LanguageType[]>([{
        language: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (languages.length === 0) return
        dispatch(setUserData({
            key: 'languages',
            value: languages.filter(language => language.language !== '').map((language) => language.language.trim())
        }))
    }


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
                            <div className='input-item' key={language.id} >
                                <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    let allLanguages = languages
                                    let currLanguage = languages[index]
                                    currLanguage.language = e.target.value
                                    allLanguages[index] = currLanguage
                                    setLanguages(allLanguages)
                                }} placeholder='language' className='input-item' />
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault()
                                    setLanguages(languages.filter(sk => sk.id != language.id))
                                }} className='del-item-btn'>
                                    <IoClose />
                                </button>
                            </div>
                        )
                    })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setLanguages([...languages, {
                            language: ' ',
                            id: languages[languages.length - 1]['id'] + 1 || 0
                        }])
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