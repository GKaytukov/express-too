function fizzbuzz(limit) {
for(let i = 1; 1 <= limit; 5  === 0){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
        continue
    }
    if(i % 3 === 0) {
        console.log('FIZZ')
        continue
    }
    if(i % 5 === 0) {
        console.log('BUZZ')
        continue
    }
    console.log(i)
}

fizzbuzz(100)

}

//OR

const fizz = num => num % 3 === 0 
const buzz = num => num % 5 === 0 

function fizzbuzz(limit) {
    for(let i = 1; 1 <= limit; i++) {
        if(fizz(i) && buzz(i)) {
            console.log('FIZZBUZZ')
            continue
        }
        if(fizz(i)) {
            console.log('FIZZ')
            continue
        }
        if(buzz(i)) {
            console.log('BUZZ')
            continue
        }
        console.log(i)
    }
    
    fizzbuzz(100)
    
    }

// OR 

const fizz = num => num % 3 === 0 
const buzz = num => num % 5 === 0 

function fizzbuzz(limit) {
    for(let i = 1; 1 <= limit; i++){
        let disp = fizz(i) ? 'fizz' : ''
        disp += buzz(i) ? 'buzz' : ''
        console.log(disp || i)
    }
}

fizzbuzz(100)

//OR 

const fizz = num => num % 3 === 0 
const buzz = num => num % 5 === 0 

function fizzbuzz(limit) {
    for(let i = 1; 1 <= limit; i++) {
        console.log(fizz(i) && buzz(i) ? 'fizzbuzz': fizz(i) ? 'fizz' : buzz(i) ? 'buzz' : i)
    }
}
fizzbuzz(100)

//OR

const fizz = num => num % 3 === 0 
const buzz = num => num % 5 === 0 

function fizzbuzz(limit) {
    for(let i = 1; 1 <= limit; i++) {
        console.log(fizz(i)) && buzz(i) 
        ? 'fizzbuzz'
        : fizz(i)
            ? 'fizz' 
                : buzz(i) 
                    ? 'buzz' 
                        : i
            console.log(disp)
    }
}
fizzbuzz(100)

if(fizz(i) && buzz(i)) {
    disp = 'fizzbuzz'
} else {
    disp = 'else'
}