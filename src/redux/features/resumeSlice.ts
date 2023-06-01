import { createSlice } from '@reduxjs/toolkit'

type ResumeState = {
    showToolbar: boolean,
    currentEl: HTMLElement | null,
    editMode: boolean,
    userData: {
        currentFormIndex: number,
        filledForms: string[],
        profile: {
            name: string,
            profession: string,
        },
        contact: {
            address: string,
            phone: string,
            email: string,
            website: string,
        }
        careerObjective: string | null,
        skills: string[],
        education: {
            courseOfStudy: string,
            school: string,
            degree: string,
            startDate: string,
            endDate: string,
        }[] | null,
        workExperience: {
            jobTitle: string,
            company: string,
            startDate: string,
            endDate: string,
            jobDescription: string[]
        }[] | null,
        projects: {
            title: string,
            description: string[],
            links: string[]
        }[] | null,
        certifications: {
            title: string,
            school: string,
            date: string,
        }[] | null,
        awardsAndHonors?: {
            title: string,
            date: string,
        }[] | null,
        interests: string[] | null,
        languages: string[] | null,
        hobbies: string[] | null,
    },
    zoomLevel: string,
    resumeToSave: {
        name: string,
        res: any,
    } | null,
}

const initialState: ResumeState = {
    showToolbar: false,
    currentEl: null,
    editMode: false,
    zoomLevel: 'zoom 100',
    userData: {
        currentFormIndex: 0,
        filledForms: [],
        profile: {
            name: 'John Doe',
            profession: 'Project Manager',
        },
        contact: {
            address: '1234 Main St, City, State 12345',
            phone: '123-456-7890',
            email: 'johndoe@mail.com',
            website: 'johndoe.com',
        },
        careerObjective: 'Resourceful Project Manager skilled in leading cross-functional teams and delivering projects on time and within budget. Proficient in project planning and execution, risk management, and stakeholder communication. Strong communication and problem-solving skills.',
        skills: [
            'Notion',
            'Clickup',
            'Microsoft Office',
            'Project Management',
            'Risk Management',
            'Stakeholder Communication',
            'Problem Solving',
            'Team Leadership',
            'Time Management',
            'Critical Thinking',
        ],
        education: [
            {
                courseOfStudy: 'Project Management',
                school: 'University of California, Berkeley',
                degree: 'Master of Business Administration',
                startDate: '2018',
                endDate: '2020',
            },
            {
                courseOfStudy: 'Business Administration',
                school: 'University of California, Berkeley',
                degree: 'Bachelor of Business Administration',
                startDate: '2014',
                endDate: '2018',
            },
        ],
        workExperience: [
            {
                jobTitle: 'Project Manager',
                company: 'ABC Company',
                startDate: '2020',
                endDate: 'Present',
                jobDescription: [
                    'Managed a team of 10 employees and contractors in the development of a new software product.',
                    'Developed and implemented a project plan that resulted in the completion of the project 2 months ahead of schedule.',
                    'Communicated with stakeholders on a weekly basis to provide project updates and ensure that the project was on track.'
                ]
            },
            {
                jobTitle: 'Project Manager',
                company: 'XYZ Company',
                startDate: '2018',
                endDate: '2020',
                jobDescription: [
                    'Managed a team of 10 employees and contractors in the development of a new software product.',
                    'Developed and implemented a project plan that resulted in the completion of the project 2 months ahead of schedule.',
                    'Communicated with stakeholders on a weekly basis to provide project updates and ensure that the project was on track.',
                ]
            },
            {
                jobTitle: 'Project Manager',
                company: '123 Company',
                startDate: '2016',
                endDate: '2018',
                jobDescription: [
                    'Managed a team of 10 employees and contractors in the development of a new software product.',
                    'Developed and implemented a project plan that resulted in the completion of the project 2 months ahead of schedule.',
                    'Communicated with stakeholders on a weekly basis to provide project updates and ensure that the project was on track.',
                ]
            }
        ],
        projects: [
            {
                title: 'Project 1',
                description: [
                    'Managed a team of 10 employees and contractors in the development of a new software product.',
                    'Developed and implemented a project plan that resulted in the completion of the project 2 months ahead of schedule.',
                ],
                links: [
                    'https://www.google.com',
                ]
            },
            {
                title: 'Project 2',
                description: [
                    'Managed a team of 10 employees and contractors in the development of a new software product.',
                    'Developed and implemented a project plan that resulted in the completion of the project 2 months ahead of schedule.',
                ],
                links: [
                    'https://www.google.com',
                ]
            },
        ],
        certifications: null,
        awardsAndHonors: null,
        languages: null,
        hobbies: null,
        interests: null,
    },
    resumeToSave: null,
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        showToolbar: (state, action) => {
            state.showToolbar = true
            state.currentEl = action.payload
        },
        hideToolbar: (state) => {
            state.showToolbar = false
            state.currentEl = null
        },
        editResume: (state) => {
            state.editMode = true
            state.showToolbar = true

            const allResElements = document.querySelectorAll('.resume-element')
            const allResElementsArr = [...allResElements]
            allResElementsArr.forEach(
                (el) => {
                    el.classList.add('editable')
                    el.contentEditable = true
                }
            )
        },
        previewResume: (state) => {
            state.editMode = false
            state.showToolbar = false
            state.currentEl = null

            const allResElements = document.querySelectorAll('.resume-element')
            const allResElementsArr = [...allResElements]
            allResElementsArr.forEach(
                (el) => {
                    el.classList.remove('editable')
                    el.contentEditable = false
                }
            )
        },
        setUserData: (state, action) => {
            const { key, value } = action.payload
            switch (key) {
                case 'profile':
                    state.userData.profile = value
                    break;
                case 'contact':
                    state.userData.contact = value
                    break;
                case 'careerObjective':
                    state.userData.careerObjective = value
                    break;
                case 'skills':
                    state.userData.skills = value
                    break;
                case 'education':
                    state.userData.education = value
                    break;
                case 'workExperience':
                    state.userData.workExperience = value
                    break;
                case 'projects':
                    state.userData.projects = value
                    break;
                case 'certifications':
                    state.userData.certifications = value
                    break;
                case 'awardsAndHonors':
                    state.userData.awardsAndHonors = value
                    break;
                case 'languages':
                    state.userData.languages = value
                    break;
                case 'hobbies':
                    state.userData.hobbies = value
                    break;
                case 'interests':
                    state.userData.interests = value
                    break;
                default:
                    break;
            }
            if (key != "hobbies") {
                state.userData.currentFormIndex += 1
            }
            const formExists = state.userData.filledForms.includes(key)
            if (formExists) return
            if (value !== null) {
                state.userData.filledForms = [...state.userData.filledForms, key]
            }
        },
        nextForm: (state) => {
            state.userData.currentFormIndex += 1
        },
        previousForm: (state) => {
            state.userData.currentFormIndex -= 1
        },
        clearUserData: (state) => {
            // state.userData = null
        },
        changeZoomLevel: (state, action) => {
            state.zoomLevel = action.payload
        },
        saveResume: (state, action) => {
            state.resumeToSave = action.payload
        }
    }
})

export const { showToolbar, hideToolbar, editResume, previewResume, setUserData, clearUserData, nextForm, previousForm, changeZoomLevel, saveResume } = resumeSlice.actions
export default resumeSlice.reducer