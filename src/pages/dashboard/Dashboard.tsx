import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth, db } from '../../../firebase.config'
import { RootState } from '../../redux/store'
import { Puff } from 'react-loader-spinner'


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
                    const docs = await getDocs(collection(db, `${user.uid}-${user.email}`))
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 62px)' }}>
                <div>
                    <Puff
                        height="120"
                        width="120"
                        radius={2}
                        color="#4338ca"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    <p style={{ textAlign: 'center', color: '#4338ca', marginTop: '20px' }}>Fetching saved resumes...</p>
                </div>
            </div>
        )
    }
    if (!fetching && !savedResumes) {
        return (
            <div>
                <h1>
                    No resume found...
                </h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <p style={{ color: '#be123c' }}>
                    {error}
                </p>
            </div>
        )
    }

    return (
        <div className='dashboard'>
            <h1 className='dashboard__heading'>
                Saved resumes
            </h1>

            <div className='saved-resumes-container'>
                {
                    savedResumes.map(resume => (
                        <div>
                            <Link className='card-wrapper' key={resume.id} to={`/saved-resumes/${resume.id}`} dangerouslySetInnerHTML={{ __html: resume.resume }}>
                            </Link>
                            <p className='card-wrapper__title'>
                                {resume.title}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Dashboard