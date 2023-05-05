import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Templates = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>
                Choose a template
            </h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                {
                    [
                        'Classic Elegance',
                        'Modern Minimalism',
                        'Bold Impact',
                        'Professional Edge',
                        'Creative Spark',
                        'Sophisticated Simplicity',
                        'Sleek Lines',
                        'Distinctive Style',
                        'Clean and Simple',
                        'Refined Grace',
                        'Sharp Focus',
                        'Dynamic Vision',
                        'Bold Ambition',
                        'Timeless Tradition',
                        'Innovative Flair'
                    ].map((item, index) => (
                        <Link style={{ padding: '50px', borderRadius: '10px', marginRight: '10px', display: 'block', textDecoration: 'none', background: 'lightgray', marginTop: 10 }} to={`/create/${item.toLowerCase().split(' ').join('-')}`} >
                            {item}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Templates