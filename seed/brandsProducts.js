const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brand1 = await new Brand({
    name: 'Apple',
    url: 'https://www.apple.com'
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'Sony',
    url: 'https://www.playstation.com/en-us/ps5/'
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Microsoft',
    url: 'https://www.xbox.com/en-US/consoles/xbox-series-x'
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'Google',
    url: 'https://store.google.com/us'
  })
  brand4.save()

  const products = [
    {
      title: '24K Gold Apple Iphone 12 Pro',
      image:
        'https://www.goldgenie.com/wp-content/uploads/2020/10/12promax_straight_G_BLK.jpg',
      description:
        'This is a 512 GB Iphone 12 Pro customised ands electroplated in 5 microns of pure luxurious 24k Gold.',
      price: '2500',
      brand: brand1._id
    },
    {
      title: '24K Platinum Apple Iphone 12 Pro',
      image:
        'https://www.goldgenie.com/wp-content/uploads/2020/08/12promax_straight_P_BLK-1.jpg',
      description:
        'This is a 512 GB Iphone 12 Pro customised ands electroplated in 5 microns of pure luxurious 24k Platinum.',
      price: '2500',
      brand: brand1._id
    },
    {
      title: 'Playstation 5 Custom Black',
      image: 'https://cdn.mos.cms.futurecdn.net/Vh6eSp4siwggK7RUys72nP.jpg',
      description:
        'This is a 1 TB limited editiion Black Playstation 5 equipped with an extra remote.',
      price: '1500',
      brand: brand2._id
    },
    {
      title: 'Playstation 5',
      image: 'https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg',
      description:
        'This is a 1 TB Playstation 5 disc version equipped with an extra remote.',
      price: '1000',
      brand: brand2._id
    },
    {
      title: 'X Box Series X',
      image:
        'https://media.wired.com/photos/5fa5dc3dba670daaf8e97a8d/master/w_2560%2Cc_limit/games_gear_series-x.jpg',
      description:
        'This is a 1TB X Box Series X The most powerful and fastest X-Box ever.',
      price: '800',
      brand: brand3._id
    },
    {
      title: 'X Box Series S',
      image: 'https://m.media-amazon.com/images/I/61Q2hRo4BCL._SX522_.jpg',
      description:
        'This is a 512 GB X box series S. It is next gen and also the smallest X-box ever.',
      price: '350',
      brand: brand3._id
    },
    {
      title: 'Google Glass Enterprise Edition',
      image:
        'https://lh3.googleusercontent.com/FKs5XMvwuBYfUfNSEk_R5VQmXvJSrz1GatoJetoVgpYW4q47UFocEHdVvLpHEHZQLMmmuh32XdYXZ1PLt_AB2rAV284AP6MuFwX8Dw=s1440',
      description:
        "This is the second edition of the google smart glasses collection. Great technology and a collector's item. ",
      price: '1200',
      brand: brand4._id
    }
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()
