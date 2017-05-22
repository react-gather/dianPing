import 'whatwg-fetch'; 
import 'es6-promise';

var result = fetch('http://localhost:8080/management/unit?appid=12047485&brandid=1',{
    headers:{
        'Accept':'application/json, text/plain, */*'
    }
})
console.log(result)

export default result