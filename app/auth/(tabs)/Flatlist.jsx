import { FlatList, SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Data = [  
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "omnis laborum odio"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "non esse culpa molestiae omnis sed optio"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "eaque aut omnis a"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "natus impedit quibusdam illo est"
      },
      {
        "userId": 1,
        "id": 7,
        "title": "quibusdam autem aliquid et et quia"
      },
      {
        "userId": 1,
        "id": 8,
        "title": "qui fuga est a eum"
      },
      {
        "userId": 1,
        "id": 9,
        "title": "saepe unde necessitatibus rem"
      },
      {
        "userId": 1,
        "id": 10,
        "title": "distinctio laborum qui"
      },
      {
        "userId": 2,
        "id": 11,
        "title": "quam nostrum impedit mollitia quod et dolor"
      },
      {
        "userId": 2,
        "id": 12,
        "title": "consequatur autem doloribus natus consectetur"
      },
      {
        "userId": 2,
        "id": 13,
        "title": "ab rerum non rerum consequatur ut ea unde"
      },
      {
        "userId": 2,
        "id": 14,
        "title": "ducimus molestias eos animi atque nihil"
      },
      {
        "userId": 2,
        "id": 15,
        "title": "ut pariatur rerum ipsum natus repellendus praesentium"
      },
      {
        "userId": 2,
        "id": 16,
        "title": "voluptatem aut maxime inventore autem magnam atque repellat"
      },
      {
        "userId": 2,
        "id": 17,
        "title": "aut minima voluptatem ut velit"
      },
      {
        "userId": 2,
        "id": 18,
        "title": "nesciunt quia et doloremque"
      },
      {
        "userId": 2,
        "id": 19,
        "title": "velit pariatur quaerat similique libero omnis quia"
      },
      {
        "userId": 2,
        "id": 20,
        "title": "voluptas rerum iure ut enim"
      },
];



const images = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://i.dailymail.co.uk/i/pix/2015/02/14/25A2397400000578-0-image-m-26_1423906560720.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://i.kym-cdn.com/entries/icons/original/000/044/738/monkeyrizz.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://i.kym-cdn.com/editorials/icons/original/000/005/689/cover5.jpeg",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    albumId: "1",
    id: "4",
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://media.tenor.com/BCI8zrcTA8YAAAAC/it's-joever-frog.gif",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
  },
  {
    albumId: "1",
    id: "5",
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://media1.tenor.com/m/AapKRNOpG6cAAAAC/ohno-meme-monkey-ohno.gif",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  },
];
const Item = ({image}) => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const likePressed = () => {
    if (liked) {
      setCount(count - 1);
      setLiked(false);
    } else {
      setCount(count + 1);
      setLiked(true);
    }
  };

  return(
    <View style={styles.item}>
      <Image source={{uri: image}} style={styles.image}/>
      <Button style={styles.button} title={liked ? "Unlike" : "Like"} onPress={likePressed} />
      <Text style={styles.text}>Likes: {count}</Text>
    </View>
  )
}

const Flatlist = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={images}
        renderItem={({item}) => <Item image={item.url}/>}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
      
    </SafeAreaView>
  )
}

export default Flatlist;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    
  },
  button: {
    width: 100,
    height: 50,
  },
})