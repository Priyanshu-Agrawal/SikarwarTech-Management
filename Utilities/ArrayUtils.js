// arrayUtils.js

// Sort the array of objects based on the specified property and order
const sortByProperty = (arr, property, order) => {
    return arr.sort((a, b) => {
        if (order === 'asc') {
            return a[property] > b[property] ? 1 : -1;
        } else {
            return a[property] < b[property] ? 1 : -1;
        }
    });
}

// Group the array of objects based on the specified property
const groupByProperty = (arr, property) => {
    const grouped = {};
    arr.forEach(obj => {
        const key = obj[property];
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(obj);
    });
    return grouped;
}

// Filter the array of objects based on the specified property and value
const filterByProperty = (arr, property, value) => {
    return arr.filter(obj => obj[property] === value);
}

module.exports = {
    sortByProperty,
    groupByProperty,
    filterByProperty
};