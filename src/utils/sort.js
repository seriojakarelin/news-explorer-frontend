import {declinableWords, declinableendings} from './constants';

export function sortKeyWords(articles) {
        const repeatCount = articles.map((article) => article.keyword).reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});
        const keysSorted = Object.keys(repeatCount).sort(function (a, b) { return repeatCount[b] - repeatCount[a] })
        return keysSorted;
};

export function getExpression(item) {
        const arr = sortKeyWords(item);
        const arrLength = arr.length;
        let expression = '';

        if (arrLength === 0) {
            return expression;
        }
        if (arrLength === 1) {
            return expression = arr[0];
        }
        if (arrLength === 2) {
            return expression = `${arr[0]} и ${arr[1]}`;
        }
        if (arrLength === 3) {
            return expression = `${arr[0]}, ${arr[1]} и ${arr[2]}`;
        }
        if (arrLength > 3) {
            return expression = `${arr[0]}, ${arr[1]} и ${arrLength - 2}${enumerate(arrLength - 2, declinableendings)} другим`;
        }
}

export function enumerate(num, arr) {
        if (num > 100) num = num % 100;
        if (num <= 20 && num >= 10) return arr[2];
        if (num > 20) num = num % 10;
        return num === 1 ? arr[0] : num > 1 && num < 5 ? arr[1] : arr[2];
}

export function getString(arr) {
    const arrLength = arr.length;
    let expression = 'у вас нет сохранённых статей';

    if(arrLength === 0) {
        return expression;
    }
    if(arrLength > 0) {
        return expression = `у вас ${arrLength} ${enumerate(arrLength, declinableWords)}`;
    }
}