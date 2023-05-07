

const MerchDetails = ({ merch }) => {



    return (

        <div className="merch-card">
            <h4 className='merch-title'><a href={merch.link} target="_blank" rel="noopener noreferrer">{merch.merchName}</a></h4>
            <h2 className='price'>{ merch.prices[merch.prices.length - 1] }</h2>
            <p className='unit'>{ merch.unit }</p>
        </div>

    )
}

export default MerchDetails