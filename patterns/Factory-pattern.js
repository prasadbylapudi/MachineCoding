// Use a factory function in order to create objects

//With the Factory Pattern, we can use a special function - the factory function - to create many of the same objects.

// factory function can be anything that can return an object.


const createUser=(firstName,lastName)=>(
    {
        id:Math.random(),
        firstName:firstName,
        lastName:lastName,
        createdAt:Date.now(),
        fullName:`${firstName} ${lastName}`
    }
)

createUser("prasad","bylapudi");
createUser("John","Doe");
createUser("gary","peterson")