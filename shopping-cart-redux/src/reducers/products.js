let initState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg',
        description : 'Sản phẩm fake',
        price : 500,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung 7 Plus',
        image : 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg',
        description : 'Sản phẩm fake',
        price : 500,
        rating : 2
    },
    {
        id : 3,
        name : 'Oppo 7 Plus',
        image : 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg',
        description : 'Sản phẩm fake',
        price : 450,
        rating : 5
    }
];

const products = (state = initState, action) => {
    return [...state];
};

export default products;