const testimonies = [
    {
        title: 'Amazing Experience',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Highly Recommend',
        testimony: 'Vestibulum vitae aliquet justo. Phasellus non lacinia tortor.',
    },
    {
        title: 'Great Service',
        testimony: 'Nullam fermentum justo et nisl condimentum, in tristique augue fermentum.',
    },
    {
        title: 'Exceptional Quality',
        testimony: 'Integer interdum mauris a elit dapibus lobortis.',
    },
    {
        title: 'Outstanding Service',
        testimony: 'Fusce non risus efficitur, convallis nunc a, lobortis velit.',
    },
    {
        title: 'Very Impressed',
        testimony: 'Sed dapibus urna non enim finibus aliquet.',
    },
    {
        title: 'Exceptional Service',
        testimony: 'Suspendisse lacinia, justo eget dapibus suscipit, dolor odio aliquam turpis.',
    },
    {
        title: 'Highly Satisfied',
        testimony: 'Pellentesque vitae placerat sapien, eu mattis eros.',
    },
    {
        title: 'Excellent Work',
        testimony: 'Cras iaculis neque sit amet efficitur volutpat.',
    },
    {
        title: 'Very Professional',
        testimony: 'Aenean convallis elit ac sapien consequat, sit amet gravida sem pulvinar.',
    },
];


const TestimonyCard = ({ title, testimony }: { title: string, testimony: string }) => (
    <div className='testimony-card'>
        <p>
            "{testimony}"
        </p>
        <h4>
            {title}
        </h4>
    </div>
)

const Testimonials = () => {
    return (
        <div className='testimonials' >
            <div className={`testimonials__inner `}
            >
                <div className="testimonies-container ">
                    {
                        testimonies.map(
                            ({ title, testimony }) => (
                                <TestimonyCard title={title} testimony={testimony} />
                            )
                        )
                    }
                </div>
                <div className="testimonies-container">
                    {
                        testimonies.map(
                            ({ title, testimony }) => (
                                <TestimonyCard title={title} testimony={testimony} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials