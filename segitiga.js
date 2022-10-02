segitiga1 = num => {
    let hasil = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return console.log(hasil);
}
segitiga1(6);

segitiga2 = num => {
    let hasil = '';
    for (let i = 0; i < num; i++) {
        for (let j = num; j > i; j--) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return console.log(hasil);
}
segitiga2(6);

function segitiga3(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '*';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga3(6));

function segitiga4(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += '*'
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga4(6));
