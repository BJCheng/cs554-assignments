// The second will keep track of many times a particular URL has been requested, 
// updating and logging with each request.
var trackTable = {};

module.exports = (req, res, next)=>{
    let url = req.originalUrl;
    let times = trackTable[url]?trackTable[url]:0;
    trackTable[url] = times+1;
    console.log(`Track Table:`);
    for(let property in trackTable){
        if(trackTable.hasOwnProperty(property)){
            console.log(`${property}: ${trackTable[property]}`);
        }
    }
    next();
}