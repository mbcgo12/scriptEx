let draong = {
    name: `tanya`,
    fire : true,
    fight(){
        return console.log(5);
    },
    sing(){
        if (this.fire){
            return console.log(`i am ${this.name}, the breather of fire`)
        }        
    }
}

let lizerd = {
    name : `kiki`,    
    fight(){
        return console.log(1);
    }
}

lizerd.__proto__=draong;

for (let prop in lizerd){
    if(lizerd.hasOwnProperty(prop)){
        console.log(prop)
    }    
}