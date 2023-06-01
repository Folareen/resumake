import React, { useState, useRef, useEffect } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type ProjectType = {
    title: string,
    description: string,
    links: string,
    id: number
}

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([{
        title: ' ',
        description: ' ',
        links: ' ',
        id: 0
    }])
    const inputContainerRef = useRef()

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (projects.length === 0) return
        const filteredProjects = projects.filter(
            (project) => {
                return project.title !== '' && project.description.length !== 0 && project.links.length !== 0
            }
        ).map((project, index) => {
            return {
                title: project.title,
                description: project.description,
                links: project.links,
            }
        })
        dispatch(setUserData({
            key: 'projects',
            value: filteredProjects.map(project => {
                return {
                    ...project,
                    description: project.description.split('\n'),
                    links: project.links.split('\n')
                }
            })
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        let allProjects = projects
        let currProject = projects[index]
        currProject[e.target.name] = e.target.value
        allProjects[index] = currProject
        setProjects(allProjects)
    }

    useEffect(() => {
        if (projects.length === 1) return
        inputContainerRef.current.scrollTop += 100
    }, [projects])

    return (
        <div>
            <form>
                <h2>Projects</h2>
                <div className='multiple-input-container multiple' ref={inputContainerRef}>
                    {
                        projects.map((project, index) => {
                            return (
                                <div className='input-item' key={project.id}>
                                    <button
                                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            e.preventDefault()
                                            setProjects(projects.filter((prj, i) => prj.id !== project.id))
                                        }}
                                        className='del-item-btn'>
                                        <IoClose />
                                    </button>
                                    <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)} placeholder='Job title' name='jobTitle' className='' />

                                    <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e, index)} placeholder='Linkss' name='company' />

                                    <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e, index)} placeholder='Project description' name='description' />
                                </div>
                            )
                        })
                    }
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        setProjects([...projects, {
                            title: ' ',
                            description: ' ',
                            links: ' ',
                            id: projects[projects.length - 1]['id'] + 1 || 0
                        }])
                    }} className='add'>
                        <IoIosAdd />
                    </button>
                </div>

                <button onClick={onSave} disabled={projects.length === 0} className='save'>
                    Save
                </button>
            </form >
        </div >
    )

}
export default Projects