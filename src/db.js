export const stockData = [
  {
    company: "Potato",
    id:1,
    vendor: "Himachal Pvt Ltd",
    stockPrice: "30 USD",
    category: "Vegtables",
    available:1, 
    image:"https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
    
  },
  {
    company: "Banana",
    id:2,
    vendor: "Organic farms",
    stockPrice: "50 USD",
    category: "Organic farms",
    available:1, 
    image:"https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
  },
  {
    company: "Drumsticks",
    id:3,
    vendor: "Mallikarjuna farms",
    stockPrice: "20 USD",
    category: "Vegetables",
    available:0, 
    image:"https://www.bharatiya.co/wp-content/uploads/2020/05/Drumstick-e1593711477544.jpg",
  },
  {
    company: "Orange",
    id:4,
    vendor: "Nagpur farms",
    stockPrice: "25 USD",
    category: "Fruits",
    available:1, 
    image:"data:image/jpeg;base64,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",
  },

];