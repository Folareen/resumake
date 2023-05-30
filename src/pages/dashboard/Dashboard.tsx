import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth, db } from '../../../firebase.config'
import { RootState } from '../../redux/store'

const Dashboard = () => {
    const [savedResumes, setSavedResumes] = useState<any[]>([])
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState('')

    const { user } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        (
            async () => {
                try {
                    setFetching(true)
                    const docs = await getDocs(collection(db, user.uid))
                    const data = docs.docs.map(doc => doc.data())
                    setSavedResumes(data)
                } catch (error: any) {
                    setError(error?.message || error)
                } finally {
                    setFetching(false)
                }
            }
        )()
    }, [])

    useEffect(() => {
        if (savedResumes) {
            const links = document.querySelectorAll('.card-wrapper')
            const linksArr = Array.from(links)
            linksArr.forEach(link => {
                link.firstChild.classList.add('card')
            })
        }
    }, [savedResumes])


    if (fetching) {
        return (
            <div>
                fetching resume...
            </div>
        )
    }
    if (!fetching && !savedResumes) {
        return (
            <div>
                no resume found
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
        <div className='dashboard'>Dashboard
            <button onClick={() => {
                signOut(auth)
            }}>
                logout
            </button>

            <div>
                saved resumes

                <div className='saved-resumes-container'>
                    {
                        savedResumes.map(resume => (
                            <Link className='card-wrapper' key={resume.id} to={`/saved-resumes/${resume.id}`} dangerouslySetInnerHTML={{ __html: resume.resume }}>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Dashboard