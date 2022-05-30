const express = require('express') ;
const app = express();

const showCatalog = require('./routes/showCatalog')

app.get('/products', (req,res) =>   {
  res.send('Component Catalog')
})

// app.use(showCatalog)
 
app.listen(3000, () => console.log('Server on port: 3000'));
