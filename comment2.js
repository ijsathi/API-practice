const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
// loadComment()
const displayComment = data =>{
    // console.log(data);
    const comments = document.getElementById('comments')
    // console.log(comments);
    data.forEach(comment => {
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        h3.innerText = `ID: ${comment.id}, Name: ${comment.name.slice(0,20)}, E-mail: ${comment.email}`
        p.innerText = `${comment.body}`
        div.appendChild(h3)
        div.appendChild(p)

        comments.appendChild(div)
    })
}