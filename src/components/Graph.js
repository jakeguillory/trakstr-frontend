

const Graph = ( { plotArray } ) => {
    
    
    return (
      
        <div className="graph">
            { plotArray.map( (dataPoint) => (
                <div className="data-point"
                style={{ '--x': `${dataPoint.xPercent}%`, '--y': `${dataPoint.yPercent}%` }}
                title={ `${ dataPoint.price }` }
                data-date={ `${ dataPoint.date }` }
                key={ dataPoint.id } ></div>
        )) }
        </div>
        
    );
}
 
export default Graph;