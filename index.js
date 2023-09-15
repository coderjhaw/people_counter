let count = 0
let count_p = document.getElementById('people-count');
let count_list = [0, 0, 0];

function incrementCount(){
    
    count += 1;
    count_p.innerText = count;
}


function saveEntry(){
    // 0 0 0 2
    count_list.push(count);
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');

    first.innerHTML = count_list[count_list.length - 3];
    second.innerHTML = count_list[count_list.length - 2];
    third.innerText = count_list[count_list.length - 1];

    count = 0
    count_p.innerText = count;
}