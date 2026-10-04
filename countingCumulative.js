const arr = [5, 3, 5, 4, 3]

const countingSort = () => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)

    // 1. Считаем частоты
    const countArr = new Array(max - min + 1).fill(0)

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i] - min]++
    }

    // 2. Делаем countArr кумулятивным
    for (let i = 1; i < countArr.length; i++) {
        countArr[i] += countArr[i - 1]
    }

    // 3. Создаём результат
    const res = new Array(arr.length)

    // 4. Расставляем элементы по позициям
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = arr[i] - min

        countArr[index]--

        res[countArr[index]] = arr[i]
    }

    return res
}

console.log(countingSort())