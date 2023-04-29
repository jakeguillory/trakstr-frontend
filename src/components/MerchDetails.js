//date fns
import format from 'date-fns/format'


const MerchDetails = ({ merch }) => {

    return (

        <div className="data-details">
            <h4><a href={merch.link} target="_blank" rel="noopener noreferrer">{merch.merchName}</a></h4>
            <ul>
            {merch.prices.map((price) => (
                <li key={price.date}><span className='date'>Price on {format(new Date(price.date), 'MM/dd/yy h:mm')}: </span><span className='price'>{price.price ? price.price : `No Reward`} </span><span className="unit">{merch.unit}</span></li>
            ))}
            </ul>
        </div>

    )
}

export default MerchDetails