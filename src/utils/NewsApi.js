export const BASE_URL = `https://newsapi.org/v2/everything?language=ru&apiKey=5f673d75d86e422db98049b9e4fed8cc&`;

export const getNews = (keyWord, fromDate, toDate) => {
    return fetch(`${BASE_URL}q=${keyWord}&from=${fromDate}&to=${toDate}&pageSize=${100}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .catch((err) => console.log(err))
};