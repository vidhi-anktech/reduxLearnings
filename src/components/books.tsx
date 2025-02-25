import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { FC } from 'react';

interface Props {
  author: string;
  title: string;
  // price: string;
  coverURL: string;
  // categoryColor: string;
}

const Book: FC<Props> = ({
  author,
  title,
  // price,
  coverURL,
  // categoryColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.coloredSquare, { backgroundColor: 'grey' }]}>
        <Image source={{ uri: coverURL }} style={styles.image} />
      </View>

      <Text>{author}</Text>
      <Text>{title}</Text>
      {/* <Text>{price}$</Text> */}
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 50 },
  coloredSquare: {
    borderRadius: 8,
    height: 130,
    width: 130,
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 130,
    width: 80,
    resizeMode: 'stretch',
    marginTop: -20,
    borderRadius: 8,
  },
});