import React, { useState, useEffect } from 'react'
import { RotatingSquare } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import BoldAmbition from './templates/BoldAmbition'
import ClassicElegance from './templates/ClassicElegance'
import CleanAndSimple from './templates/CleanAndSimple'
import CreativeSpark from './templates/CreativeSpark'
import DistinctiveStyle from './templates/DistinctiveStyle'
import ModernMinimalism from './templates/ModernMinimalism'
import ProfessionalEdge from './templates/ProfessionalEdge'
import RefinedGrace from './templates/RefinedGrace'
import SharpFocus from './templates/SharpFocus'
import SleekLines from './templates/SleekLines'

const Templates = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    if (loading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 62px)' }}>
                <div>
                    <RotatingSquare
                        height="150"
                        width="150"
                        color="#4338ca"
                        ariaLabel="generating templates..."
                        strokeWidth="2"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    <p style={{ textAlign: 'center', color: '#4338ca' }}>Generating templates...</p>
                </div>
            </div>
        )
    }



    return (
        <div className='templates'>
            <h2 className='templates__heading'>
                Choose a template
            </h2>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className='templates__container'>
                {
                    [
                        {
                            title: 'Classic Elegance',
                            template: <ClassicElegance />
                        },
                        {
                            title: 'Modern Minimalism',
                            template: <ModernMinimalism />
                        },
                        {
                            title: 'Professional Edge',
                            template: <ProfessionalEdge />
                        },
                        {
                            title: 'Creative Spark',
                            template: <CreativeSpark />
                        },
                        {
                            title: 'Sleek Lines',
                            template: <SleekLines />
                        },
                        // {
                        //     title: 'Distinctive Style',
                        //     template: <DistinctiveStyle />
                        // },
                        {
                            title: 'Clean and Simple',
                            template: <CleanAndSimple />
                        },
                        // {
                        //     title: 'Refined Grace',
                        //     template: <RefinedGrace />
                        // },
                        {
                            title: 'Sharp Focus',
                            template: <SharpFocus />
                        },
                        // {
                        //     title: 'Bold Ambition',
                        //     template: <BoldAmbition />
                        // }
                    ].map(({ title, template }, index) => (
                        <Link className='template-card' to={`/create/${title.toLowerCase().split(' ').join('-')}`} >
                            {template}
                            <span className='title'>
                                {title}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Templates