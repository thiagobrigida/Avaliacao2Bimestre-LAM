import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={estilos.secao}>
            <Text style={estilos.tituloSecao}>Redação ENEM Carina</Text>
            <View style={estilos.cartao}>
                <Text style={estilos.tituloCartao}>Bem-vindo(a)!</Text>
                <Text style={estilos.textoCartao}>Seu guia completo para uma boa redação.</Text>
                <TouchableOpacity style={estilos.botaoPrimario}>
                    <Text style={estilos.textoBotao}>Começar a Estudar</Text>
                </TouchableOpacity>
            </View>

            <Text style={estilos.tituloSubSecao}>Tema do Dia</Text>
            <TouchableOpacity style={estilos.itemDestaque}>
                <Text style={estilos.tituloItemDestaque}>O impacto da inteligência artificial na sociedade contemporânea</Text>
                <Text style={estilos.subtituloItemDestaque}>#Tecnologia #Futuro #Ética</Text>
                <Text style={estilos.textoItemDestaque}>Explore os desafios e oportunidades que a IA traz para o debate social...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoSecundario}>
                <Text style={estilos.textoBotao}>Ver Mais Temas</Text>
            </TouchableOpacity>

            <Text style={estilos.tituloSubSecao}>Dicas Rápidas</Text>
            <TouchableOpacity style={estilos.itemSimples}>
                <Text style={estilos.textoItemSimples}>1. Organize suas ideias antes de escrever.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.itemSimples}>
                <Text style={estilos.textoItemSimples}>2. Use repertório sociocultural relevante.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoSecundario}>
                <Text style={estilos.textoBotao}>Todas as Dicas</Text>
            </TouchableOpacity>
        </View>
    );
};


const estilos = StyleSheet.create({
    containerPrincipal: { 
      flex: 1, // Ocupa todo o espaço disponível.
      backgroundColor: '#FFFACD', // Define a cor de fundo escura.
      paddingTop: 40, // Adiciona preenchimento superior para evitar sobreposição com a barra de status.
    },
    conteudoScrollView: { // Estilos para o conteúdo dentro do ScrollView.
      paddingVertical: 20, // Adiciona preenchimento vertical.
      paddingHorizontal: 15, // Adiciona preenchimento horizontal.
    },
    secao: { // Estilos para cada seção principal do aplicativo
      marginBottom: 30, // Margem inferior para espaçamento entre seções.
      backgroundColor: '#4682B4', // Cor de fundo mais clara para as seções.
      borderRadius: 12, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
      shadowOpacity: 0.3, // Opacidade da sombra.
      shadowRadius: 5, // Raio da sombra.
      elevation: 8, // Elevação para Android 
    },
    tituloSecao: { // Estilos para os títulos das seções principais.
      fontSize: 28, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto clara.
      marginBottom: 20, // Margem inferior.
      textAlign: 'center', // Alinhamento do texto ao centro.
    },
    tituloSubSecao: { // Estilos para os títulos de subseções.
      fontSize: 20, // Tamanho da fonte.
      fontWeight: '600', // Peso da fonte.
      color: '#CBD5E1', // Cor do texto um pouco mais escura que o título.
      marginTop: 20, // Margem superior.
      marginBottom: 15, // Margem inferior.
      borderBottomWidth: 1, // Largura da borda inferior.
      borderBottomColor: '#4A5568', // Cor da borda inferior.
      paddingBottom: 5, // Preenchimento inferior.
    },
    cartao: { // Estilos para elementos de cartão genéricos.
      backgroundColor: '#4A5568', // Cor de fundo do cartão.
      borderRadius: 10, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      marginBottom: 15, // Margem inferior.
      alignItems: 'center', // Alinha itens ao centro horizontalmente.
    },
    tituloCartao: { // Estilos para o título dentro do cartão.
      fontSize: 20, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto.
      marginBottom: 5, // Margem inferior.
    },
    textoCartao: { // Estilos para o texto descritivo dentro do cartão.
      fontSize: 16, // Tamanho da fonte.
      color: '#CBD5E1', // Cor do texto.
      textAlign: 'center', // Alinhamento do texto ao centro.
      marginBottom: 10, // Margem inferior.
    },
    botaoPrimario: { // Estilos para o botão principal.
      backgroundColor: '#4299E1', // Azul primário.
      paddingVertical: 12, // Preenchimento vertical.
      paddingHorizontal: 25, // Preenchimento horizontal.
      borderRadius: 8, // Borda arredondada.
      marginTop: 10, // Margem superior.
    },
    botaoSecundario: { // Estilos para o botão secundário.
      backgroundColor: '#64748B', // Cinza secundário.
      paddingVertical: 10, // Preenchimento vertical.
      paddingHorizontal: 20, // Preenchimento horizontal.
      borderRadius: 8, // Borda arredondada.
      marginTop: 15, // Margem superior.
      alignSelf: 'center', // Alinha o botão ao centro.
    },
    textoBotao: { // Estilos para o texto dos botões.
      color: '#FFFFFF', // Cor do texto branca.
      fontSize: 16, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
    },
    itemDestaque: { // Estilos para um item de destaque 
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 10, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      marginBottom: 15, // Margem inferior.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
      shadowOpacity: 0.2, // Opacidade da sombra.
      shadowRadius: 3, // Raio da sombra.
      elevation: 5, // Elevação para Android.
    },
    tituloItemDestaque: { // Estilos para o título do item de destaque.
      fontSize: 18, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto.
      marginBottom: 5, // Margem inferior.
    },
    subtituloItemDestaque: { // Estilos para o subtítulo/tags do item de destaque.
      fontSize: 14, // Tamanho da fonte.
      color: '#CBD5E1', // Cor do texto.
      marginBottom: 8, // Margem inferior.
    },
    textoItemDestaque: { // Estilos para o texto descritivo do item de destaque.
      fontSize: 15, // Tamanho da fonte.
      color: '#A0AEC0', // Cor do texto.
    },
    itemSimples: { // Estilos para itens de lista simples
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 8, // Borda arredondada.
      padding: 12, // Preenchimento interno.
      marginBottom: 10, // Margem inferior.
    },
    textoItemSimples: { // Estilos para o texto do item simples.
      fontSize: 16, // Tamanho da fonte.
      color: '#E2E8F0', // Cor do texto.
    },
    campoBusca: { // Estilos para o campo de busca.
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 8, // Borda arredondada.
      padding: 12, // Preenchimento interno.
      fontSize: 16, // Tamanho da fonte.
      color: '#E2E8F0', // Cor do texto.
      marginBottom: 15, // Margem inferior.
    },
    itemTema: { // Estilos para cada item de tema de redação.
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 10, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      marginBottom: 15, // Margem inferior.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
      shadowOpacity: 0.2, // Opacidade da sombra.
      shadowRadius: 3, // Raio da sombra.
      elevation: 5, // Elevação para Android.
    },
    tituloTema: { // Estilos para o título do tema.
      fontSize: 18, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto.
      marginBottom: 5, // Margem inferior.
    },
    descricaoTema: { // Estilos para a descrição do tema.
      fontSize: 15, // Tamanho da fonte.
      color: '#CBD5E1', // Cor do texto.
    },
    cartaoEstrutura: { // Estilos para os cartões de estrutura da redação.
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 10, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      marginBottom: 15, // Margem inferior.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
      shadowOpacity: 0.2, // Opacidade da sombra.
      shadowRadius: 3, // Raio da sombra.
      elevation: 5, // Elevação para Android.
    },
    tituloCartaoEstrutura: { // Estilos para o título da parte da estrutura.
      fontSize: 20, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#63B3ED', // Cor azul clara.
      marginBottom: 8, // Margem inferior.
    },
    textoCartaoEstrutura: { // Estilos para o texto explicativo da estrutura.
      fontSize: 16, // Tamanho da fonte.
      color: '#E2E8F0', // Cor do texto.
      lineHeight: 24, // Altura da linha.
      marginBottom: 10, // Margem inferior.
    },
    textoExemplo: { // Estilos para o texto de exemplo.
      fontSize: 14, // Tamanho da fonte.
      fontStyle: 'italic', // Estilo itálico.
      color: '#A0AEC0', // Cor do texto.
    },
    itemCompetencia: { // Estilos para cada item de competência.
      flexDirection: 'row', // Organiza itens em linha.
      alignItems: 'center', // Alinha itens ao centro verticalmente.
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 10, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      marginBottom: 10, // Margem inferior.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
      shadowOpacity: 0.2, // Opacidade da sombra.
      shadowRadius: 3, // Raio da sombra.
      elevation: 5, // Elevação para Android.
    },
    numeroCompetencia: { // Estilos para o número da competência.
      fontSize: 24, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#9F7AEA', // Cor roxa.
      marginRight: 15, // Margem à direita.
      width: 40, // Largura fixa.
      textAlign: 'center', // Alinhamento do texto ao centro.
    },
    infoCompetencia: { // Estilos para o contêiner de informações da competência.
      flex: 1, // Ocupa o espaço restante.
    },
    tituloCompetencia: { // Estilos para o título da competência.
      fontSize: 16, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto.
      marginBottom: 3, // Margem inferior.
    },
    descricaoCompetencia: { // Estilos para a descrição da competência.
      fontSize: 14, // Tamanho da fonte.
      color: '#CBD5E1', // Cor do texto.
    },
    listaHorizontalLivros: { // Estilos para a lista horizontal de livros.
      paddingVertical: 10, // Preenchimento vertical.
    },
    cartaoLivro: { // Estilos para cada cartão de livro.
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 10, // Borda arredondada.
      padding: 10, // Preenchimento interno.
      marginRight: 15, // Margem à direita.
      alignItems: 'center', // Alinha itens ao centro.
      width: 140, // Largura fixa do cartão.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
      shadowOpacity: 0.2, // Opacidade da sombra.
      shadowRadius: 3, // Raio da sombra.
      elevation: 5, // Elevação para Android.
    },
    imagemLivro: { // Estilos para a imagem da capa do livro.
      width: 120, // Largura da imagem.
      height: 180, // Altura da imagem.
      borderRadius: 8, // Borda arredondada.
      marginBottom: 10, // Margem inferior.
      backgroundColor: '#64748B', // Cor de fundo de placeholder.
    },
    tituloLivro: { // Estilos para o título do livro.
      fontSize: 16, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto.
      textAlign: 'center', // Alinhamento do texto ao centro.
      marginBottom: 5, // Margem inferior.
    },
    autorLivro: { // Estilos para o autor do livro.
      fontSize: 13, // Tamanho da fonte.
      color: '#A0AEC0', // Cor do texto.
      textAlign: 'center', // Alinhamento do texto ao centro.
    },
    itemRedacao: { // Estilos para cada item de redação (Minhas Redações).
      backgroundColor: '#4A5568', // Cor de fundo.
      borderRadius: 10, // Borda arredondada.
      padding: 15, // Preenchimento interno.
      marginBottom: 10, // Margem inferior.
      shadowColor: '#000', // Cor da sombra.
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
      shadowOpacity: 0.2, // Opacidade da sombra.
      shadowRadius: 3, // Raio da sombra.
      elevation: 5, // Elevação para Android.
    },
    infoRedacao: { // Estilos para o contêiner de informações da redação.
      marginBottom: 8, // Margem inferior.
    },
    tituloRedacao: { // Estilos para o título da redação.
      fontSize: 18, // Tamanho da fonte.
      fontWeight: 'bold', // Peso da fonte em negrito.
      color: '#E2E8F0', // Cor do texto.
    },
    statusRedacao: { // Estilos para o status da redação.
      fontSize: 14, // Tamanho da fonte.
      color: '#CBD5E1', // Cor do texto.
      marginTop: 4, // Margem superior.
    },
    statusConcluida: { // Estilos para o status de redação concluída.
      color: '#48BB78', // Cor verde para concluída.
      fontWeight: 'bold', // Peso da fonte em negrito.
    },
    dataRedacao: { // Estilos para a data da redação.
      fontSize: 12, // Tamanho da fonte.
      color: '#A0AEC0', // Cor do texto.
      textAlign: 'right', // Alinhamento do texto à direita.
    },
  });

export default HomeScreen;