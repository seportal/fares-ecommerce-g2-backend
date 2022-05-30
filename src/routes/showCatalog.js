const {Router} = require ('express');
const showCatalog = Router()

showCatalog.get('/',(req,res) => {
  res.send('show product catalog')
});

module.export = showCatalog;