function cleanName(name, keyword) {
    let clean = name.trim().toLowerCase();

    let key = keyword.toLowerCase();
    
    return clean.includes(key);
}

console.log(cleanName('   NGUYEN Van An   ', 'an')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // Mong đợi: false