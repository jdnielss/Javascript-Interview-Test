const anagram = (arrs) => {
    const results = []

    arrs.forEach(list => {
        let isPushToGroup = false

        //push to group
        results.forEach((result, i) => {
            //get first member of group for identifier
            let firstStrSort = sortString(result[0])

            if(firstStrSort === sortString(list)){
                results[i].push(list)
                isPushToGroup = true
                return
            }
        })

        //create new group
        if(!isPushToGroup){
            results.push([list])
        }
    })
    
    return results
}

function sortString(string) {
    return string.split('').sort().join('');
}

console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))
