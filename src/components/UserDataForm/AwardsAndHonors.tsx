import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../redux/features/resumeSlice'

type AwardsAndHonorsType = {
    title: string,
    date: string,
}

const AwardsAndHonours = () => {
    const [awardsAndHonors, setAwardsAndHonors] = useState<AwardsAndHonorsType[]>([])
    const [awardsAndHonorsItem, setAwardsAndHonorsItem] = useState<AwardsAndHonorsType>({
        title: '',
        date: '',
    })

    const dispatch = useDispatch()

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (awardsAndHonors.length === 0) return
        dispatch(setUserData({
            key: 'awardsAndHonors',
            value: awardsAndHonors
        }))
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAwardsAndHonorsItem({
            ...awardsAndHonorsItem,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            Awards and Honors
            <form>
                <p>
                    {awardsAndHonors.map((awardAndHonoursItem, index) => {
                        return (
                            <span key={index}>{JSON.stringify(awardAndHonoursItem)} , </span>
                        )
                    })
                    }
                </p>
                <div>
                    <div>
                        <input type='text' value={awardsAndHonorsItem.title} onChange={onChange} placeholder='title' name='title' />
                        <input type='date' value={awardsAndHonorsItem.date} onChange={onChange} placeholder='date' name='date' />
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        if (awardsAndHonorsItem.title && awardsAndHonorsItem.date) {
                            setAwardsAndHonors([...awardsAndHonors, awardsAndHonorsItem])
                            setAwardsAndHonorsItem({
                                title: '',
                                date: '',
                            })
                        }
                    }}>
                        Add
                    </button>
                </div>

                <button onClick={onSave} disabled={awardsAndHonors.length === 0}>
                    Save
                </button>
            </form >
        </div >
    )

}
export default AwardsAndHonours