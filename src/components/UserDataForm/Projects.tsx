import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type ProjectType = {
    title: string,
    description: string[],
    links: string[]
}

const Projects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([])
    const inputContainerRef = useRef()


    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (projects.length === 0) return
        dispatch(setUserData({
            key: 'projects',
            value: projects
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            Projects
            <form>
                <p>
                    {projects.map((project, index) => {
                        return (
                            <span key={index}>{JSON.stringify(project)} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <div>
                        <input type='text' value={project.title} onChange={onChange} placeholder='Project Title' name='title' />
                        <textarea value={project.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setProject({
                                ...project,
                                [e.target.name]: e.target.value
                            })
                        }} placeholder='project description' name='description' />
                        <textarea value={project.links} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setProject({
                                ...project,
                                [e.target.name]: e.target.value
                            })
                        }} placeholder='project links' name='links' />
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (project.title && project.description && project.links) {
                            setProjects([...projects, {
                                title: project.title,
                                description: project.description.split('\n'),
                                links: project.links.split('\n')
                            }])
                            setProject({
                                title: '',
                                description: '',
                                links: ''
                            })
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave} disabled={projects.length === 0}>
                    Save
                </button>
            </form >
        </div >
    )

}
export default Projects