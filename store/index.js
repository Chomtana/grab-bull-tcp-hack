export const state = () => ({
  counter: 0,
  menus: {
    "เครื่องดื่มชูกำลัง": [
      {
        img:
          'https://backend.tops.co.th/media//catalog/product/8/8/8850228000106_e11-09-2019.jpg',
        name: 'กระทิงแดง',
        price: 15,
        perpack: 10
      },
      {
        img:
          'https://www.drinks.ng/wp-content/uploads/2019/07/262ed0d2a77c2d85aa843d902973ae0a70cbe479.png',
        name: 'Red Bull',
        price: 15,
        perpack: 10
      }
    ],
    "ชาพร้อมดื่ม": [
      {
        img:
          'https://backend.tops.co.th/media//catalog/product/8/8/8850228001318_1.jpg',
        name: 'เพียวริคุ Mix Berry',
        price: 15,
        perpack: 10
      },
      {
        img:
          'https://backend.tops.co.th/media//catalog/product/8/8/8850228001028_1.jpg',
        name: 'เพียวริคุ เก๊กฮวยขาว',
        price: 15,
        perpack: 10
      },
    ],
    "กาแฟ": [

    ],
    "Sport Drink": [

    ],
    "เครื่องดื่มเพื่อสุขภาพ": [

    ],
    "น้ำผลไม้": [

    ],
    "SME Product": [

    ],
  },
  party_themes: [
    {
      img:
        'http://img-cdn.tid.al/o/03a5358e55e274f97bd79cba40fa066340aa564a.jpg',
      name: 'วันเกิด'
    },
    {
      img:
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwie0tbov_3lAhWWfH0KHYP9DFoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.easyweddings.com.au%2Farticles%2Fwhos-bridal-party%2F&psig=AOvVaw0D6PGLlH9fZ_shLkPy1KAi&ust=1574501099548914',
      name: 'งานแต่ง'
    },
    {
      img:
        'https://typeset-beta.imgix.net/uploads/image/2017/10/19/91fc5354-1fc5-4f5b-9fae-3436a826486b-party-confetti-gold-women-friends.jpg',
      name: 'ปาร์ตี้กับผองเพื่อน'
    }
  ],
  picked_menus: [],
  payments: [
    {
      img:
        'https://yt3.ggpht.com/a/AGF-l79L8pELVyUj3L-FM54fEE3nyRXBepgmB7HRsQ=s900-c-k-c0xffffffff-no-rj-mo',
      name: 'Grab Pay'
    },
    {
      img:
        'https://lh3.googleusercontent.com/AyX675vwNz8X2sYUTSrjUTRVzzXMZUW_nMQ8Vk__Nabj6zQ7s7We-bpZbFmoYf7e2YM',
      title: 'KPlus'
    },
    {
      img:
        'http://goodkindofgeek.files.wordpress.com/2013/02/line-app-logo.png',
      title: 'Line Pay'
    },
    {
      img:
        'https://cdn.truemoney.com/wp-content/uploads/2018/09/logo-truemoneywallet-300x300.jpg',
      title: 'True money wallet'
    },
    {
      img:
        'https://lh3.googleusercontent.com/j-9a3HbVZoX337-MLdkmYt75yUfN5ahis8rOnE09972cFLdVn7Z5Dzu3Guo8ldUv2H4x',
      title: 'SCB Easy'
    },
    {
      img:
        'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0013/4323/brand.gif?itok=fSmoZrGH',
      title: 'Credit card'
    },
    {
      img:
        'https://www.philipharris.co.uk/media/1362/delivery-options-header-blue2.png?anchor=center&mode=crop&width=350&height=350&rnd=131414785180000000&quality=75',
      title: 'เก็บเงินปลายทาง'
    }
  ],
  packages: [
    {
      img: "https://www.tcp.com/th/img/product/product-header.jpg",
      title: "สำหรับคนชอบลองของ"
    },
    {
      img: "https://employmentrightsireland.com/wp-content/uploads/2017/06/employers-unfair-dismissal-story.jpg",
      title: "สำหรับร้านค้า"
    }
  ]
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  add_picked_menu(state, {menu, amount, unit}) {
    let price = menu.price;
    if (unit == 'แพ็ค') {
      price *= menu.perpack;
    }
    price*=amount;

    state.picked_menus.push({...menu, price, amount, unit});
  },
  delete_picked_menu(state, menui) {
    console.log("dsasasd")
    state.picked_menus.splice(menui, 1)
  }
}
