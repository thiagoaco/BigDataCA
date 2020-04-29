   
    function getPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach(function(post){
          output += `
            <div class="card card-body mb-3">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }

    function addPost(e){
      e.preventDefault();

      let title = document.getElementById('title').value;
      let body = document.getElementById('body').value;

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
    };
