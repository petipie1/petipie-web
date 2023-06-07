export const businessData = {
  "name": "FAFA",
  "city": "Golem",
  "orderCode": "dori1992",
  "umbrellas": 100,
  "location": null,
  "logoUrl": null,
  "bannerUrl": null,
  "quote": null,
  "available": true,
  "openingTime": null,
  "closingTime": null,
  "menu": [
    {
      "available": true,
      "name": "Promotions",
      "url": "promotions",
      "products": [
        {
          "id": "410019d8-bf33-4b38-a74e-6d1f96215ba9",
          "name": "Corona 0.33",
          "price": 550,
          "isPromotion": true,
          "imageUrl": "/corona.png",
          "available": true,
          "description": ""
        },
        {
          "id": "309e7cbc-e82a-4074-adbe-6a3aa32ee8d5",
          "name": "Coca Cola 0.33L",
          "price": 200,
          "imageUrl": "/coke.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "e4fc709c-52c1-48e5-acf2-fe958a0ccb86",
          "name": "Peja 0.33",
          "price": 300,
          "imageUrl": "/peja.png",
          "isPromotion": true,
          "available": true,
          "description": ""
        },
        {
          "id": "eabe5371-8176-4971-8191-e1f24e2ad228",
          "name": "Paulaner",
          "price": 500,
          "imageUrl": "/paulaner.png",
          "available": true,
          "description": ""
        },
      ]
    },
    {
      "available": true,
      "isPromotion": false,
      "name": "Drinks",
      "icon": "/drinks.png",
      "products": [
        {
          "id": "ec5e0f98-50c3-4c62-8044-8e99a1e6e526",
          "name": "Coca Cola 0.33L",
          "price": 200,
          "imageUrl": "/coke.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "5896e71c-f8eb-4215-9c37-78792af757b2",
          "name": "Pepsi 0.33L",
          "price": 200,
          "imageUrl": "/pepsi.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "790b8c2a-5a91-4e01-a903-95501fcfb08b",
          "name": "Uje Lajthiza 0.5L",
          "price": 200,
          "imageUrl": "/lajthiza.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "790b8c2a-5a91-4e01-a903-95501fcfb085",
          "name": "Uje Tepelena 0.33L",
          "price": 150,
          "imageUrl": "https://res.cloudinary.com/dq8wk32xl/image/upload/v1686062137/shijevere/categories/localDrinks/tepelena-1_v35rel.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },

      ]
    },
    {
      "available": true,
      "isPromotion": false,
      "name": "Cocktails",
      "products": [
        {
          "id": "34138aab-d599-4b94-8ea5-a6e9c18281f9",
          "name": "Pinacolada",
          "price": 200,
          "imageUrl": "/pinacolada.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
      ]
    },
    {
      "available": true,
      "isPromotion": false,
      "name": "Coffee",
      "products": [
        {
          "id": "f4810391-002a-4baa-b3a7-c2a9a97fd823",
          "name": "Espresso",
          "price": 120,
          "imageUrl": "/coffee-3.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "ffa510d0-6497-40e5-a4c1-faeae5eede13",
          "name": "Machiatto",
          "price": 130,
          "imageUrl": "/coffee-6.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "c9f83db3-960d-4b51-9703-5d925fa2251e",
          "name": "Capuchino",
          "price": 130,
          "imageUrl": "/coffee-5.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
      ]
    },
    {
      "available": true,
      "isPromotion": false,
      "name": "Ice Cream",
      "url": "icecream",
      "products": [
        {
          "id": "f8a5a7c9-8a02-4556-845d-8a1938b3837b",
          "name": "Magnum",
          "price": 320,
          "imageUrl": "/magnum.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
      ]
    },
    {
      "available": true,
      "isPromotion": false,
      "name": "Pizza",
      "products": [
        {
          "id": "3343033c-506e-48f2-bb4b-74f62c5521ff",
          "name": "Margarita",
          "price": 620,
          "imageUrl": "/pizza-1.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
        {
          "id": "8c09b611-71a1-414f-b4dd-aa59297c8a36",
          "name": "Capricciosa",
          "price": 700,
          "imageUrl": "/pizza-2.png",
          "available": true,
          "description": "Coca Cola 0 Sugar"
        },
      ]
    },
  ],
  "id": "a12d4614-962e-4310-8b89-3262f0847436",
  "createdAt": "2022-05-31T16:09:15.652098Z",
  "updatedAt": "2022-05-31T16:09:15.655003Z"
};

export const categories = [
  {
    text: "Promotions",
    url: "promotions",
    icon: "/promotions.png"
  },
  {
    text: "Drinks",
    url: "drinks",
    icon: "/drinks.png"
  },
  {
    text: "Cocktails",
    url: "cocktails",
    icon: "/cocktails.png"
  }
  , {
    text: "Coffee",
    url: "coffee",
    icon: "/coffee.png"

  }, {
    text: "Ice Cream",
    url: "icecream",
    icon: "/ice-cream.png"
  }, {
    text: "Pizza",
    url: "pizza",
    icon: "/pizza.png"
  }
];