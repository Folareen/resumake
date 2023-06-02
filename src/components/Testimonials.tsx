
const testimonies = [
    {
        title: 'Amazing Experience',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor felis sed dapibus volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
        title: 'Highly Recommend',
        testimony: 'Vestibulum vitae aliquet justo. Phasellus non lacinia tortor. Quisque tempor elit ac ex finibus, in ullamcorper metus porta. Suspendisse potenti. Suspendisse potenti. Ut venenatis lectus eu dolor eleifend, id efficitur quam fringilla.',
    },
    {
        title: 'Great Service',
        testimony: 'Nullam fermentum justo et nisl condimentum, in tristique augue fermentum. Nullam vitae rutrum ante, at euismod nulla. Curabitur vulputate semper purus, vel congue ipsum dignissim at.',
    },
    {
        title: 'Exceptional Quality',
        testimony: 'Integer interdum mauris a elit dapibus lobortis. Aenean sit amet nunc mauris. Proin a metus vel tortor eleifend tristique. Quisque pulvinar odio id lectus varius dignissim. Sed a lorem dolor.',
    },
    {
        title: 'Outstanding Service',
        testimony: 'Fusce non risus efficitur, convallis nunc a, lobortis velit. Aliquam erat volutpat. Mauris mattis odio nunc, nec condimentum nulla tincidunt sed. Nam aliquet ipsum nec mi elementum, sed lacinia felis placerat.',
    },
    {
        title: 'Very Impressed',
        testimony: 'Sed dapibus urna non enim finibus aliquet. Sed ut metus a sem scelerisque facilisis. Nullam eleifend tellus non velit tincidunt, at tempor lacus hendrerit.',
    },
    {
        title: 'Exceptional Service',
        testimony: 'Suspendisse lacinia, justo eget dapibus suscipit, dolor odio aliquam turpis, in hendrerit sem felis sed felis. Curabitur ac consectetur nulla, vitae cursus lectus. Phasellus efficitur nibh vitae arcu fermentum, ut ultricies nunc venenatis.',
    },
    {
        title: 'Highly Satisfied',
        testimony: 'Pellentesque vitae placerat sapien, eu mattis eros. Donec convallis felis non neque dignissim tristique. Nullam sagittis, velit nec facilisis lobortis, odio ipsum elementum lectus, a tincidunt nulla sem non tellus.',
    },
    {
        title: 'Excellent Work',
        testimony: 'Cras iaculis neque sit amet efficitur volutpat. Praesent non neque et felis aliquam consectetur. Curabitur nec eros mauris. In semper pretium neque, vel congue tellus placerat ac.',
    },
    {
        title: 'Very Professional',
        testimony: 'Aenean convallis elit ac sapien consequat, sit amet gravida sem pulvinar. Suspendisse potenti. Proin eget mi non urna pellentesque condimentum. Quisque rutrum nibh sed elementum rutrum.',
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