let Details = {
    name : "Amrutesh",
    DOB  : "06/02/2003",
    display : function(){
        console.log(`Hello,\nMy name is ${Details.name}.\nMy date of birth is ${Details.DOB}.`);
    }
}

Details.display();