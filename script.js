function calculateLove() {
    let name1 = document.getElementById('name1').value.trim();
    let name2 = document.getElementById('name2').value.trim();
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }
    
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    
    let arr1 = name1.split('');
    let arr2 = name2.split('');
    
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
            arr1[i] = '';
        }
    }
  
    let remainingCount = arr1.filter(char => char !== '').length + arr2.length;
  
    let flames = "FLAMES";
    let i = 0;
    while (flames.length > 1) {
        i = (i + remainingCount - 1) % flames.length;
        flames = flames.slice(0, i) + flames.slice(i + 1);
    }
  
    let resultText = "";
    switch (flames) {
        case 'F': resultText = "Friends"; break;
        case 'L': resultText = "Lovers"; break;
        case 'A': resultText = "Affection"; break;
        case 'M': resultText = "Marriage"; break;
        case 'E': resultText = "Enemies"; break;
        case 'S': resultText = "Siblings"; break;
    }

    document.getElementById('result').innerHTML = `Your relationship status: ${resultText}`;
}

function refreshPage() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('result').innerHTML = 'Result';
}
