import useGraph from "../hooks/useGraph";

const Graph = ( { prices } ) => {
    
    const N = 15 //Number of bars on graph
    const plotArray = useGraph(prices.slice(-N))
   
    return (
      
        <div className="graph">
            { plotArray.map( (dataPoint) => (
                <div className="data-point"
                style={{ '--x': `${dataPoint.xPercent}%`, '--y': `${dataPoint.yPercent}%` }}
                /*style= {`--x:${ dataPoint.xPercent }%;--y:${ dataPoint.yPercent }%;`}*/
                title={ `${ dataPoint.price }` }
                data-date={ `${ dataPoint.date }` }
                key={ dataPoint.date } ></div>
        )) }
        </div>
        
    );
}
 
export default Graph;