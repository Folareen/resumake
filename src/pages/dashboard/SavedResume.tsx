import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase.config'
import ResumeContainer from '../../components/ResumeContainer'
import { showToolbar } from '../../redux/features/resumeSlice'
import { RootState } from '../../redux/store'

const SavedResume = () => {
    const [savedResume, setSavedResume] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [error, setError] = useState('')

    const { user } = useSelector((state: RootState) => state.auth)
    const { resumeID } = useParams()

    const { editMode } = useSelector((state: RootState) => state.resume)


    const resumeRef = useRef<React.MutableRefObject<HTMLDivElement> | null>(null)

    const dispatch = useDispatch()

    const showToolbarHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (editMode) {
            dispatch(showToolbar(e.currentTarget))
        }
    }

    useEffect(
        () => {
            (
                async () => {
                    console.log('resume id!!', resumeID)
                    try {
                        const resDocSnap = await getDoc(doc(db, user.uid, resumeID))
                        console.log(resDocSnap.data())
                        console.log(resDocSnap.exists())
                        if (resDocSnap.exists()) {
                            setSavedResume(resDocSnap.data().resume)
                        } else {
                            setSavedResume(null)
                        }
                    } catch (error) {
                        setError(error?.message)
                    } finally {
                        setFetching(false)
                    }
                }
            )()
        }, [resumeID, user]
    )

    useEffect(() => {
        if (savedResume) {
            console.log(savedResume)
            const __ = document.createElement('div')
            __.innerHTML = savedResume

            const __classList = __.firstChild.classList

            const undefinedResumeEl = document.querySelector('.undefined')

            undefinedResumeEl.innerHTML = __.firstChild.innerHTML
            undefinedResumeEl.classList.remove('undefined')
            undefinedResumeEl.classList.add(__classList[0])

            document.querySelector('.resume-container > div')?.insertBefore(undefinedResumeEl, document.querySelector('.resume')?.nextSibling)

            const allResElements = document.querySelectorAll('.resume-element')
            const allResElementsArr = [...allResElements]
            allResElementsArr.forEach(
                (el) => {
                    el.addEventListener('click', showToolbarHandler)
                }
            )
        }

        return () => {
            const allResElements = document.querySelectorAll('.resume-element')
            const allResElementsArr = [...allResElements]
            allResElementsArr.forEach(
                (el) => {
                    el.removeEventListener('click', showToolbarHandler)
                }
            )
        }
    }, [savedResume])

    if (fetching) {
        return (
            <div>
                fetching resume...
            </div>
        )
    }
    if (!fetching && !savedResume) {
        return (
            <div>
                resume not found...
            </div>
        )
    }

    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    return (
        <ResumeContainer
            resumeRef={resumeRef}
            isSectioned={true}
        >
        </ResumeContainer>
    )
}

export default SavedResume