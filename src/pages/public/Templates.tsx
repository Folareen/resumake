import React from 'react'
import { useNavigate } from 'react-router-dom'

const Templates = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <button style={{ padding: '50px', borderRadius: '10px', marginRight: '10px' }} onClick={() => navigate(`/templates/${item}`)}>
                        Template {item}
                    </button>
                ))
            }
        </div>
    )
}

export default Templates