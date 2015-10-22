// The functions the API server sees
module.exports = {
    // return the current time
    var getTime = function (){
	    var currentTime = new Date()
	    return currentTime.getHours().toString() + ":" + currentTime.getMinutes().toString()
	    + ":" + currentTime.getSeconds().toString();
    }
}