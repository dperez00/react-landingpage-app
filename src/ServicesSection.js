const SERVICE_BLOCK_DATA = [
    {
        imgURL: "https://assets.codepen.io/6060109/agency-service-1.png",
        text: "web design"
    },
    {
        imgURL: "https://assets.codepen.io/6060109/agency-service-2.png",
        text: "ecommerce"
    },
    {
        imgURL: "https://assets.codepen.io/6060109/agency-service-3.png",
        text: "automation"
    }
]

export default function ServicesSection() {
    return (
        <div className="services-section">
            <h2>Our services</h2>
            <div className="services-container">
                {SERVICE_BLOCK_DATA.map(block => {
                    return (
                        <div className="service-block">
                            <img src={block.imgURL} />
                            <p>{block.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}