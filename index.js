// Code your solution here

// name = 'luc'
function findMatching(nameArray, name){
    let results = nameArray.filter( (n)=>{
        // n = 'Mohammed'
        return n.substr(0, name.length).toLowerCase() == name.toLowerCase();
        // return n.toLowerCase().includes(name);
    } );

    return results;
}


// const drivers = findMatching( ['Adam', 'Mohammed', 'Lucy', 'Jacob', 'Joseph lucky'], 'luc' );
// console.table(drivers);


function fuzzyMatch(nameArray, name){
    let results = nameArray.filter( (n)=>{
        // n = 'Mohammed'
        return n.substr(0, name.length) == name;
    } );

    return results;
}

// nameArray = [ {name:'', hometown:''}, {name:'', hometown:''}, {name:'', hometown:''} ]
function matchName(nameArray, name){
    let results = nameArray.filter( (n)=>{
        // n = '{name:'', hometown:''}'
        return n.name.substr(0, name.length) == name;
    } );

    return results;
}