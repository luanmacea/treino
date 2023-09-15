import { Image, View, StyleSheet, FlatList } from 'react-native';

import Texto from '../../../componentes/texto';

export default function Item({ item: { nome, imagem } }) {
  return <View style={estilos.itens}>
    <Image source={imagem} style={estilos.imagensFazenda} />
    <Texto style={estilos.nomeFrutas}>{nome}</Texto>
  </View>
}

const estilos = StyleSheet.create({
  itens: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  nomeFrutas: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  imagensFazenda: {
    width: 46,
    height: 46,
  }
})