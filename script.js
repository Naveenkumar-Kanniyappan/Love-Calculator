function calculateLove() {
    let name1 = document.getElementById('name1').value.trim();
    let name2 = document.getElementById('name2').value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please Enter Both Names!");
        return;
    }

    let nameAdd = name1 + name2;
    let loveScore = 0;

    for (let i = 0; i < nameAdd.length; i++) {
        loveScore += nameAdd.charCodeAt(i);
    }

    loveScore = (loveScore % 100) + 1;

    let result = document.getElementById('result');
    result.innerHTML = `Your Love Score is ${loveScore}%`;
}

function refreshPage() {

    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('result').innerHTML = 'Result';
}
