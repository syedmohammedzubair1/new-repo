const http=require('http');
const server =http.createServer(handler);
function handler(req,res){
    switch(req.url) {
        // This is home page if no url/path is given
        case '/':
        case '/home':
            res.write('this is home page');
            res.end();
            break;

        case '/books': // This is redirected when given path localhost:3000/books
            const books = [
                {id:1, name:'Zubair', price:499},
                {id:2, name:'RichDad PoorDad',price:399},
                {id:3, name:'Power of Subconcious Mind',price:299},
            ];

            res.write(JSON.stringify(books));
            res.end();
            break;

        case '/authors': // This is redirected when given path localhost:3000/authors
            const authors = ['James Clear','David Guetta','Joe Rogan'];

            res.write(JSON.stringify(authors));
            // res.write(authors); // won't work
            res.end();
            break;

        default: // If the url requested does not exist 
            res.write('Not Found');
            res.end();
            break;
    }
}

const port=3000;
server.listen(port,()=>{console.log(`the port is running on ${port}`)});
