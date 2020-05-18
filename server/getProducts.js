const products = require('../products.json');

const getProducts = (req, res) => {

  const {price} = req.query
  if(price){
    const filterByPrice = products.filter(val => val.price >= parseInt(req.query.price))
    res.status(200).send(filterByPrice)
  }else {

    res.status(200).send(products);
  }

}

module.exports = getProducts;