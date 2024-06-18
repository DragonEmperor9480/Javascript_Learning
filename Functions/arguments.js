function calculateTotal(a, b) {
        console.log(arguments);
    }
    const total = calculateTotal(1,2,3,4,5,6,7,8,9);
    
    function calculateTotal2(a, b) {
        arguments[0]= 100;
        console.log(arguments);
    }

    const total2 = calculateTotal2(1,2,3,4,5,6,7,8,9);

    //copying arguments to array
    function calculateTotal3(a, b) {
        arguments[0]= 100;
        const arr = [...arguments]
        console.log
        console.log(arguments);
    }

    const total3 = calculateTotal3(1,2,3,4,5,6,7,8,9);