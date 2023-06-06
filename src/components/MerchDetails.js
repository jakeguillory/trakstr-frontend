import Graph from "./Graph"


const MerchDetails = ({ merch }) => {



    return (

        <div className="merch-card">
            <h4 className='merch-title'><a href={merch.link} target="_blank" rel="noopener noreferrer">{merch.merchName}</a></h4>
            <div className="mid-wrapper">
                <h2 className='price'>{ merch.prices[merch.prices.length - 1].price }</h2>
                <svg class="svg-box" viewBox="0 0 120 100" >
                    <path class="svg-arrow" d="M55.4152 14.3874C56.5756 12.4178 59.4244 12.4178 60.5848 14.3874L98.6368 78.9772C99.815 80.9771 98.3731 83.5 96.052 83.5H19.948C17.6269 83.5 16.1851 80.9771 17.3633 78.9772L55.4152 14.3874Z" />
                </svg>
                <p className='unit'>{ merch.unit }</p>
            </div>
            <Graph prices={merch.prices} />
        </div>

    )
}

export default MerchDetails
