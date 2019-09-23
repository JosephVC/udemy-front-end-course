// Promises

const promise =  new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    }  else {
          reject('error, it broke');
    } 
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'hey there')
  })

  
 const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'lol')
  })

// The below takes an array of promises
Promise.all([promise, promise2, promise3])
  .then(values => {
    console.log(values);
  })

  // Promise example using an array of urls, and async/await
  const urls = [
    'https://jsonplaceholder.typicode.com/uusers',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]

  Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
    )).then(array => {
        console.log('users', array[0])
        console.log('posts', array[1])
        console.log('albums', array[2])
    }).catch('oh shit');

    const getData = async function() {
        try {
            const [ users, posts, albums ] = await Promise.all(urls.map(url => 
                fetch(url).then(resp => resp.json())
            ))
        console.log('users', array[0])
        console.log('posts', array[1])
        console.log('albums', array[2])
    } catch(err) {
        console.log('oh shit', err)
    }
}