
  
        // API for get requests
        let fetchRes = fetch(
"http://127.0.0.1:3015/");
  
        // fetchRes is the promise to resolve
        // it by using.then() method
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d);
                let body = document.getElementById("yossi");
                body.innerHTML = `<p>${d[0].name}</p>`;
            })
