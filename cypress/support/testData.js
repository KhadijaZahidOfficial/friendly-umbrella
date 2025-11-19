const testData = {
    products: {
        backpack: 'Sauce Labs Backpack',
        bikeLight: 'Sauce Labs Bike Light',
        defaultProducts: ['Sauce Labs Backpack', 'Sauce Labs Bike Light']
    },
    checkout: {
        valid: {
            firstName: 'secret',
            lastName: 'sauce',
            postalCode: '54810'
        },
        invalid: {
            firstName: '!@#$%6',
            lastName: '!@#$%^',
            postalCode: 'dwgdjhjh'
        },
        partial: {
            firstNameOnly: 'secret_sauce'
        }
    },
    itemIds: {
        backpack: 4
    }
};

module.exports = testData;

