
// define how much of parent element the graph should occupy
const yMinPercent = .2
const yMaxPercent = .95
const yPercentRange = yMaxPercent - yMinPercent
const xMinPercent = .05
const xMaxPercent = .95
const xPercentRange = xMaxPercent - xMinPercent

function getPriceArray(arr) {
    const newArray = [  ]
    arr.forEach(dataPoint => newArray.push(dataPoint.price))
    return newArray
}

function getDateArray(arr) {
    const newArray = [  ]
    arr.forEach(dataPoint => newArray.push(getDateFromEpoch(dataPoint.date)))
    return newArray
}

function getDateFromEpoch(epochDate) {
    return new Date(epochDate * 1000).toLocaleString().split(',')[0]
}

function priceRange(priceArray) {
    return Math.max(...priceArray) - Math.min(...priceArray)
} 

function getYPercentArray(priceArray) {
    const range = priceRange(priceArray)
    const min = Math.min(...priceArray)
    if (range === 0) return priceArray.map( price => 50)
    return priceArray.map(price => {
        return ((((price - min) / range) * yPercentRange) + yMinPercent) * 100
    })
}

function arrayRange(start, stop, step) {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    )
}

function getXPercentArray(priceArray) {
    const length = priceArray.length - 1
    const inc = xPercentRange / length
    return arrayRange(xMinPercent, xMaxPercent, inc).map(percent => percent * 100)
}

function isHotDeal(arr) {

    const priceArray = getPriceArray(arr)
    const current = priceArray[priceArray.length - 1]
    const previous = priceArray[priceArray.length - 4]

    return current > previous
}
        
function makePlotArray(rawData) {
    const plotArray = []
    const priceArray = getPriceArray(rawData)
    const dateArray = getDateArray(rawData)
    const xPercentArray = getXPercentArray(priceArray)
    const yPercentArray = getYPercentArray(priceArray)
    let id = 0
    priceArray.forEach(price => {
        plotArray.push({
            price: price,
            date: dateArray.shift(),
            xPercent: xPercentArray.shift(),
            yPercent: yPercentArray.shift(),
            id: id++
        })
    })
    return plotArray
}

const useGraph = (prices) => {

    const plotArray = makePlotArray(prices)
    const hotDealsActive = isHotDeal(prices)

    return { plotArray, hotDealsActive }
}

export default useGraph;