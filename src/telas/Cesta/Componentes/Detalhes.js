import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/texto';
import Botao from '../../../componentes/botao';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
  return <>
    <Texto style={estilos.subtitulo} >{ nome }</Texto>

    <View style={estilos.fazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda} />
      <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
    </View>
    <Texto style={estilos.descricao}>{ descricao }</Texto>
    <Texto style={estilos.preco}>{ preco }</Texto>
    <Botao>{ botao }</Botao>
  </>
}

const estilos = StyleSheet.create({
  subtitulo: {
    width: '100%',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    marginTop: 16,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  preco: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 8,
  },
})