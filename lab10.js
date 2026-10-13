let u_tip = "";
let i = 0;

do{
    u_tip = prompt('Please enter the total restaurant bill amount');
    if (isNaN(Number(u_tip))){
        u_tip = prompt('Please enter enter a valid number');
    } else if (Number(u_tip) <= 0){
        u_tip = prompt('Please provide a valid bill amount greater than zero');
    } else if (Number(u_tip) == null){
        u_tip = prompt('Please enter the total restaurant bill amount');
    } else{
        u_tip == (Number(u_tip));
        tip_10 = (u_tip * 0.1)
        i += 1;
    }
} while (i < 1);

console.log(`For a bill of $${u_tip}, the tip should be $${tip_10}.`);
document.write(`For a bill of $${u_tip}, the tip should be $${tip_10}.`);
