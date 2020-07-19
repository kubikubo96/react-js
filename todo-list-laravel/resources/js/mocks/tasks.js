//use lib uuidv4
const { v4: uuidv4 } = require('uuid');

let tasks = [
        {
            id : uuidv4(),
            name: "123",
            level: 0 // 0 Small, 1 Medium, 2 High
        },
        {
            id : uuidv4(),
            name: "123",
            level: 1 // 0 Small, 1 Medium, 2 High
        },
        {
            id : uuidv4(),
            name: "333",
            level: 2 // 0 Small, 1 Medium, 2 High
        }
    ];

export default tasks;
