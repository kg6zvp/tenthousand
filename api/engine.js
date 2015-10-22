// The functions the API server sees
module.exports = {
    // return the current time
    getTime: function (){
    var currentTime = new Date()
    return currentTime.getHours() + ":" + currentTime.getMinutes();
    +":" + currentTime.getSeconds();
    }
}