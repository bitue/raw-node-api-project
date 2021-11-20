

// create a rest full api based system where user can notice down or up api link


//all is done by app cup holding
const app = {};
//require http module
const http = require('http');
const url = require('url');
const  { StringDecoder} = require('string_decoder')

app.config = {
    port: 5000
}
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log('app is running at ', app.config.port)
    })

}

app.handleReqRes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl.pathname);
   
    const treamedPath = parseUrl.pathname.replace(/^\/+|\/\+$/g,'')
    
    console.log(treamedPath)

    const method = req.method.toLowerCase();
    console.log(method);
    //get the query string 
    const query = parseUrl.query;
    console.log(query)
    // ned to get the body data 


    //body data parser here 

    const decoder = new StringDecoder('utf-8')

    let postData =""

    req.on('data', (buffer)=> {
        postData = postData + decoder.write(buffer)
    })

    req.on('end', ()=> {
        postData = postData + decoder.end()
        res.end(postData)
    })






    // res.end('i am running ...........')

}


app.createServer()

