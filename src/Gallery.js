import React from 'react'


const Gallery = () => {
    // const user = {
    //   name: 'Hedy Lamarr',
    //   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    //   imageSize: 150,


    // };
    // const user1 = {
    //   name: 'Black Cat',
    //   imageUrl: 'https://i.imgur.com/OVZzHRV.png',
    //   imageSize: 150,
    // };

    const items = [
        {
            id: 1,
            name: 'Hedy Lamarr',
            imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
            imageSize: 150,
        },
        {
            id: 2,
            name: 'Black Cat',
            imageUrl: 'https://i.imgur.com/OVZzHRV.png',
            imageSize: 150,
        },
        {
            id: 3,
            name: 'Cute Kittens',
            imageUrl: 'https://i.imgur.com/S3TKLPT.jpeg',
            imageSize: 150,
        }]
    const listItems = items.map(items =>
        <li key={items.id}>
            <img
                className="avatar"
                src={items.imageUrl}
                alt={'Photo of ' + items.name}
                title={'Photo of ' + items.name}
                style={{
                    listStyle: 'none',
                    width: items.imageSize,
                    height: items.imageSize
                }}
            />
        </li>
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Photo Gallery</h1>
                {/* <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <h1>{user1.name}</h1>
        <img
          className="avatar"
          src={user1.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user1.imageSize,
            height: user1.imageSize
          }}
        /> */}
                <ul>{listItems}</ul>

            </header>
        </div>
    );
}

export default Gallery