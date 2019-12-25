const express = require('express'); 

const app = express();

app.get('/', (req, res, next) => {
    res.send("hello graphql")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`GraphQL server running on port ${PORT}`);
});