
// 1.Find all the information about each products

// admin> db.products.find()
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e8"),
//     id: '1',
//     product_name: 'Intelligent Fresh Chips',
//     product_price: 655,
//     product_material: 'Concrete',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e9"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ea"),
//     id: '3',
//     product_name: 'Refined Steel Car',
//     product_price: 690,
//     product_material: 'Rubber',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64eb"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ec"),
//     id: '5',
//     product_name: 'Sleek Cotton Chair',
//     product_price: 33,
//     product_material: 'Fresh',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ed"),
//     id: '6',
//     product_name: 'Awesome Wooden Towels',
//     product_price: 474,
//     product_material: 'Plastic',
//     product_color: 'orange'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ee"),
//     id: '7',
//     product_name: 'Practical Soft Shoes',
//     product_price: 500,
//     product_material: 'Rubber',
//     product_color: 'pink'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ef"),
//     id: '8',
//     product_name: 'Incredible Steel Hat',
//     product_price: 78,
//     product_material: 'Rubber',
//     product_color: 'violet'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f0"),
//     id: '9',
//     product_name: 'Awesome Wooden Ball',
//     product_price: 28,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f1"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f2"),
//     id: '11',
//     product_name: 'Unbranded Wooden Cheese',
//     product_price: 26,
//     product_material: 'Soft',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f3"),
//     id: '12',
//     product_name: 'Unbranded Plastic Salad',
//     product_price: 89,
//     product_material: 'Wooden',
//     product_color: 'pink'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f4"),
//     id: '13',
//     product_name: 'Gorgeous Cotton Keyboard',
//     product_price: 37,
//     product_material: 'Concrete',
//     product_color: 'sky blue'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f5"),
//     id: '14',
//     product_name: 'Incredible Steel Shirt',
//     product_price: 54,
//     product_material: 'Metal',
//     product_color: 'white'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f6"),
//     id: '15',
//     product_name: 'Ergonomic Cotton Hat',
//     product_price: 43,
//     product_material: 'Rubber',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f7"),
//     id: '16',
//     product_name: 'Small Soft Chair',
//     product_price: 47,
//     product_material: 'Cotton',
//     product_color: 'teal'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f8"),
//     id: '17',
//     product_name: 'Incredible Metal Car',
//     product_price: 36,
//     product_material: 'Fresh',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f9"),
//     id: '18',
//     product_name: 'Licensed Plastic Bacon',
//     product_price: 88,
//     product_material: 'Steel',
//     product_color: 'yellow'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fa"),
//     id: '19',
//     product_name: 'Intelligent Cotton Chips',
//     product_price: 46,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fb"),
//     id: '20',
//     product_name: 'Handcrafted Wooden Bacon',
//     product_price: 36,
//     product_material: 'Concrete',
//     product_color: 'lime'
//   }
// ]
// Type "it" for more
// admin> it
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fc"),
//     id: '21',
//     product_name: 'Unbranded Granite Chicken',
//     product_price: 90,
//     product_material: 'Metal',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fd"),
//     id: '22',
//     product_name: 'Ergonomic Soft Hat',
//     product_price: 99,
//     product_material: 'Rubber',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fe"),
//     id: '23',
//     product_name: 'Intelligent Steel Pizza',
//     product_price: 95,
//     product_material: 'Cotton',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ff"),
//     id: '24',
//     product_name: 'Tasty Rubber Cheese',
//     product_price: 47,
//     product_material: 'Frozen',
//     product_color: 'orchid'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a6500"),
//     id: '25',
//     product_name: 'Licensed Steel Car',
//     product_price: 20,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   }
// ]

// 2.Find the product price which are between 400 to 800

// admin> db.products.find({product_price:{"$gte":400,"$lte":800}})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e8"),
//     id: '1',
//     product_name: 'Intelligent Fresh Chips',
//     product_price: 655,
//     product_material: 'Concrete',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ea"),
//     id: '3',
//     product_name: 'Refined Steel Car',
//     product_price: 690,
//     product_material: 'Rubber',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64eb"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ed"),
//     id: '6',
//     product_name: 'Awesome Wooden Towels',
//     product_price: 474,
//     product_material: 'Plastic',
//     product_color: 'orange'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ee"),
//     id: '7',
//     product_name: 'Practical Soft Shoes',
//     product_price: 500,
//     product_material: 'Rubber',
//     product_color: 'pink'
//   }
// ]

// 3.Find the product price which are not between 400 to 600

// admin> db.products.find({product_price:{"$not":{"$gte":400,"$lte":800}}})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e9"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ec"),
//     id: '5',
//     product_name: 'Sleek Cotton Chair',
//     product_price: 33,
//     product_material: 'Fresh',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ef"),
//     id: '8',
//     product_name: 'Incredible Steel Hat',
//     product_price: 78,
//     product_material: 'Rubber',
//     product_color: 'violet'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f0"),
//     id: '9',
//     product_name: 'Awesome Wooden Ball',
//     product_price: 28,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f1"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f2"),
//     id: '11',
//     product_name: 'Unbranded Wooden Cheese',
//     product_price: 26,
//     product_material: 'Soft',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f3"),
//     id: '12',
//     product_name: 'Unbranded Plastic Salad',
//     product_price: 89,
//     product_material: 'Wooden',
//     product_color: 'pink'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f4"),
//     id: '13',
//     product_name: 'Gorgeous Cotton Keyboard',
//     product_price: 37,
//     product_material: 'Concrete',
//     product_color: 'sky blue'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f5"),
//     id: '14',
//     product_name: 'Incredible Steel Shirt',
//     product_price: 54,
//     product_material: 'Metal',
//     product_color: 'white'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f6"),
//     id: '15',
//     product_name: 'Ergonomic Cotton Hat',
//     product_price: 43,
//     product_material: 'Rubber',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f7"),
//     id: '16',
//     product_name: 'Small Soft Chair',
//     product_price: 47,
//     product_material: 'Cotton',
//     product_color: 'teal'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f8"),
//     id: '17',
//     product_name: 'Incredible Metal Car',
//     product_price: 36,
//     product_material: 'Fresh',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f9"),
//     id: '18',
//     product_name: 'Licensed Plastic Bacon',
//     product_price: 88,
//     product_material: 'Steel',
//     product_color: 'yellow'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fa"),
//     id: '19',
//     product_name: 'Intelligent Cotton Chips',
//     product_price: 46,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fb"),
//     id: '20',
//     product_name: 'Handcrafted Wooden Bacon',
//     product_price: 36,
//     product_material: 'Concrete',
//     product_color: 'lime'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fc"),
//     id: '21',
//     product_name: 'Unbranded Granite Chicken',
//     product_price: 90,
//     product_material: 'Metal',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fd"),
//     id: '22',
//     product_name: 'Ergonomic Soft Hat',
//     product_price: 99,
//     product_material: 'Rubber',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fe"),
//     id: '23',
//     product_name: 'Intelligent Steel Pizza',
//     product_price: 95,
//     product_material: 'Cotton',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ff"),
//     id: '24',
//     product_name: 'Tasty Rubber Cheese',
//     product_price: 47,
//     product_material: 'Frozen',
//     product_color: 'orchid'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a6500"),
//     id: '25',
//     product_name: 'Licensed Steel Car',
//     product_price: 20,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   }
// ]

// 4.List the four product which are grater than 500 in price

// admin> db.products.find({product_price:{"$gte":500}})
// [o cursor
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e8"),
//     id: '1',
//     product_name: 'Intelligent Fresh Chips',
//     product_price: 655,
//     product_material: 'Concrete',
//     product_color: 'mint green'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e9"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ea"),
//     id: '3',
//     product_name: 'Refined Steel Car',
//     product_price: 690,
//     product_material: 'Rubber',
//     product_color: 'gold'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ee"),
//     id: '7',
//     product_name: 'Practical Soft Shoes',
//     product_price: 500,
//     product_material: 'Rubber',
//     product_color: 'pink'
//   }
// ]

// 5.Find the product name and product material of each products

// admin> db.products.find({},{product_name:1,product_material:1})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e8"),
//     product_name: 'Intelligent Fresh Chips',
//     product_material: 'Concrete'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e9"),
//     product_name: 'Practical Fresh Sausages',
//     product_material: 'Cotton'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ea"),
//     product_name: 'Refined Steel Car',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64eb"),
//     product_name: 'Gorgeous Plastic Pants',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ec"),
//     product_name: 'Sleek Cotton Chair',
//     product_material: 'Fresh'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ed"),
//     product_name: 'Awesome Wooden Towels',
//     product_material: 'Plastic'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ee"),
//     product_name: 'Practical Soft Shoes',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ef"),
//     product_name: 'Incredible Steel Hat',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f0"),
//     product_name: 'Awesome Wooden Ball',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f1"),
//     product_name: 'Generic Wooden Pizza',
//     product_material: 'Frozen'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f2"),
//     product_name: 'Unbranded Wooden Cheese',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f3"),
//     product_name: 'Unbranded Plastic Salad',
//     product_material: 'Wooden'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f4"),
//     product_name: 'Gorgeous Cotton Keyboard',
//     product_material: 'Concrete'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f5"),
//     product_name: 'Incredible Steel Shirt',
//     product_material: 'Metal'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f6"),
//     product_name: 'Ergonomic Cotton Hat',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f7"),
//     product_name: 'Small Soft Chair',
//     product_material: 'Cotton'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f8"),
//     product_name: 'Incredible Metal Car',
//     product_material: 'Fresh'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f9"),
//     product_name: 'Licensed Plastic Bacon',
//     product_material: 'Steel'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fa"),
//     product_name: 'Intelligent Cotton Chips',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fb"),
//     product_name: 'Handcrafted Wooden Bacon',
//     product_material: 'Concrete'
//   }
// ]
// Type "it" for more
// admin> it
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fc"),
//     product_name: 'Unbranded Granite Chicken',
//     product_material: 'Metal'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fd"),
//     product_name: 'Ergonomic Soft Hat',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fe"),
//     product_name: 'Intelligent Steel Pizza',
//     product_material: 'Cotton'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ff"),
//     product_name: 'Tasty Rubber Cheese',
//     product_material: 'Frozen'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a6500"),
//     product_name: 'Licensed Steel Car',
//     product_material: 'Cotton'
//   }
// ]

// 6.Find the product with a row id of 10

// admin> db.products.find({id:{$eq:'10'}})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f1"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   }
// ]

// 7.Find only the product name and product material

// admin> db.products.find({},{product_name:1,product_material:1})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e8"),
//     product_name: 'Intelligent Fresh Chips',
//     product_material: 'Concrete'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e9"),
//     product_name: 'Practical Fresh Sausages',
//     product_material: 'Cotton'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ea"),
//     product_name: 'Refined Steel Car',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64eb"),
//     product_name: 'Gorgeous Plastic Pants',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ec"),
//     product_name: 'Sleek Cotton Chair',
//     product_material: 'Fresh'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ed"),
//     product_name: 'Awesome Wooden Towels',
//     product_material: 'Plastic'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ee"),
//     product_name: 'Practical Soft Shoes',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ef"),
//     product_name: 'Incredible Steel Hat',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f0"),
//     product_name: 'Awesome Wooden Ball',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f1"),
//     product_name: 'Generic Wooden Pizza',
//     product_material: 'Frozen'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f2"),
//     product_name: 'Unbranded Wooden Cheese',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f3"),
//     product_name: 'Unbranded Plastic Salad',
//     product_material: 'Wooden'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f4"),
//     product_name: 'Gorgeous Cotton Keyboard',
//     product_material: 'Concrete'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f5"),
//     product_name: 'Incredible Steel Shirt',
//     product_material: 'Metal'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f6"),
//     product_name: 'Ergonomic Cotton Hat',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f7"),
//     product_name: 'Small Soft Chair',
//     product_material: 'Cotton'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f8"),
//     product_name: 'Incredible Metal Car',
//     product_material: 'Fresh'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f9"),
//     product_name: 'Licensed Plastic Bacon',
//     product_material: 'Steel'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fa"),
//     product_name: 'Intelligent Cotton Chips',
//     product_material: 'Soft'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fb"),
//     product_name: 'Handcrafted Wooden Bacon',
//     product_material: 'Concrete'
//   }
// ]
// Type "it" for more
// admin> it
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fc"),
//     product_name: 'Unbranded Granite Chicken',
//     product_material: 'Metal'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fd"),
//     product_name: 'Ergonomic Soft Hat',
//     product_material: 'Rubber'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fe"),
//     product_name: 'Intelligent Steel Pizza',
//     product_material: 'Cotton'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64ff"),
//     product_name: 'Tasty Rubber Cheese',
//     product_material: 'Frozen'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a6500"),
//     product_name: 'Licensed Steel Car',
//     product_material: 'Cotton'
//   }
// ]

// 8.Find all products which contain the value of soft in product material 

// admin> db.products.find({product_material:{$eq:'Soft'}})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64eb"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f0"),
//     id: '9',
//     product_name: 'Awesome Wooden Ball',
//     product_price: 28,
//     product_material: 'Soft',
//     product_color: 'azure'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f2"),
//     id: '11',
//     product_name: 'Unbranded Wooden Cheese',
//     product_price: 26,
//     product_material: 'Soft',
//     product_color: 'black'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64fa"),
//     id: '19',
//     product_name: 'Intelligent Cotton Chips',
//     product_price: 46,
//     product_material: 'Soft',
//     product_color: 'azure'
//   }
// ]

// 9.Find products which contain product color indigo  and product price 492.00

// admin> db.products.find({$or:[{product_color:'indigo'},{product_price:492}]})
// [
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64e9"),
//     id: '2',
//     product_name: 'Practical Fresh Sausages',
//     product_price: 911,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64eb"),
//     id: '4',
//     product_name: 'Gorgeous Plastic Pants',
//     product_price: 492,
//     product_material: 'Soft',
//     product_color: 'plum'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f1"),
//     id: '10',
//     product_name: 'Generic Wooden Pizza',
//     product_price: 84,
//     product_material: 'Frozen',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a64f8"),
//     id: '17',
//     product_name: 'Incredible Metal Car',
//     product_price: 36,
//     product_material: 'Fresh',
//     product_color: 'indigo'
//   },
//   {
//     _id: ObjectId("64795d083c40a9b5e73a6500"),
//     id: '25',
//     product_name: 'Licensed Steel Car',
//     product_price: 20,
//     product_material: 'Cotton',
//     product_color: 'indigo'
//   }
// ]

// 10.Delete the products which product price value are same

// admin> db.products.deleteMany({product_price:47})
// { acknowledged: true, deletedCount: 2 }