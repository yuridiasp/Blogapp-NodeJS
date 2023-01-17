if (process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "mongodb+srv://<user>:<pass>@blogapp.0mxqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}
}
else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}
