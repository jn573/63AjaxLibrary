const http = new EasyHTTP()
const data = {
    "userId": 11,
    "id": 101,
    "title": "A custom posted message",
    "body": "Some random text"
}

const patch = {
    "userId": 101,
    "id": 1,
    "title": "A custom posted message",
    "body": "Some random text"
}

// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,posts) {
//     if (err) {
//     console.log(err)
//         } else {
//         console.log(posts)
//     }
// })

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, posts) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(posts)
//     }
// })
//
// http.update('https://jsonplaceholder.typicode.com/posts/1', patch, function (err, posts) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(posts)
//     }
// })
//
// post number not used for the dummy api
http.delete('https://jsonplaceholder.typicode.com/posts/1', 1, function (err, posts) {
    if (err) {
        console.log(err)
    } else {
        console.log(posts)
    }
})

