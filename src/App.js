import firebase from 'firebase';
import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TextInput, Alert } from "react-native-web";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { estoque: 0, pizza:0, bebida: 0, trio: 0, sobremesa: 0,adicional: 0, nome: '', ingrediente: '', preco:''}
    }

    componentWillMount(){
      var firebaseConfig = {
        apiKey: "AIzaSyD0PIuuQ7eRvjcRabgwpqySi2wgg5vdv1k",
        authDomain: "maceio-pizza.firebaseapp.com",
        databaseURL: "https://maceio-pizza.firebaseio.com",
        projectId: "maceio-pizza",
        storageBucket: "maceio-pizza.appspot.com",
        messagingSenderId: "448906181018",
        appId: "1:448906181018:web:b6f6d63a0de1d7ddae6223",
        measurementId: "G-GCFWBRWD6L"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
    //FUNÇÕES DE AMOSTRAGEM DE BOTÕES
    mostraEstoque(){
        this.setState({
            estoque:   this.state.estoque = 1,
            pizza:     this.state.pizza = 0,
            bebida:    this.state.bebida = 0,
            trio:      this.state.trio = 0,
            sobremesa: this.state.sobremesa = 0,
            adicional: this.state.adicional = 0
        })
    }
    mostraPizza(){
        this.setState({
            estoque:   this.state.estoque = 0,
            pizza:     this.state.pizza = 1,
            bebida:    this.state.bebida = 0,
            trio:      this.state.trio = 0,
            sobremesa: this.state.sobremesa = 0,
            adicional: this.state.adicional = 0
        })
    }
    mostraBebida(){
        this.setState({
            estoque:   this.state.estoque = 0,
            pizza:     this.state.pizza = 0,
            bebida:    this.state.bebida = 1,
            trio:      this.state.trio = 0,
            sobremesa: this.state.sobremesa = 0,
            adicional: this.state.adicional = 0
        })
    }
    mostraTrio(){
        this.setState({
            estoque:   this.state.estoque = 0,
            pizza:     this.state.pizza = 0,
            bebida:    this.state.bebida = 0,
            trio:      this.state.trio = 1,
            sobremesa: this.state.sobremesa = 0,
            adicional: this.state.adicional = 0
        })
    }
    mostraSobremesa(){
        this.setState({
            estoque:   this.state.estoque = 0,
            pizza:     this.state.pizza = 0,
            bebida:    this.state.bebida = 0,
            trio:      this.state.trio = 0,
            sobremesa: this.state.sobremesa = 1,
            adicional: this.state.adicional = 0
        })
    }
    mostraAdicional(){
        this.setState({
            estoque:   this.state.estoque = 0,
            pizza:     this.state.pizza = 0,
            bebida:    this.state.bebida = 0,
            trio:      this.state.trio = 0,
            sobremesa: this.state.sobremesa = 0,
            adiconal:  this.state.adicional = 1
        })
    }
    //=============================================
    //FUNÇÕES DE ALTERAÇÃO DE VALORES DOS CAMPOS 
    alteraNome(nome){
        this.setState({
            nome: this.state.nome = nome
        });
    }
    alteraIngrediente(ingrediente){
        this.setState({
            ingrediente: this.state.ingrediente = ingrediente
        });
    }
    alteraPreco(preco){
        this.setState({
            preco: this.state.preco = preco
        });
    }
    //=========================================
    //FUNÇÕES DE SALVAR DADOS NO FIREBASE
    salvaDadosPizza(nome){
        var nome = firebase.database().ref('pizza');
        // var ingrediente = firebase.database().ref('pizza');
        // var preco = firebase.database().ref('pizza');
        if(this.state.nome == '' || this.state.ingrediente == '' || this.state.preco == ''){
            alert("POR FAVOR, INSIRA TODOS OS DADOS CORRETAMENTE");
        } 
        else 
            if(this.state.nome != '' || this.state.ingrediente != '' || this.state.preco != ''){
                nome.push().set({
                    'Sabor':this.state.nome,
                    'Ingrediente': this.state.ingrediente,
                    'Preço' : this.state.preco
                });
                alert("SALVO COM SUCESSO");
            }
        this.setState({
            nome: this.state.nome ='',
            ingrediente: this.state.ingrediente = '',
            preco: this.state.preco = ''
        });
    }
    salvaDadosAdicional(nome){


        var nome = firebase.database().ref('adicional');
        // var ingrediente = firebase.database().ref('pizza');
        // var preco = firebase.database().ref('pizza');
        if(this.state.nome == '' || this.state.ingrediente == '' || this.state.preco == ''){
            alert("POR FAVOR, INSIRA TODOS OS DADOS CORRETAMENTE");
        } 
        else 
            if(this.state.nome != '' || this.state.ingrediente != '' || this.state.preco != ''){
                nome.push().set({
                    'Sabor':this.state.nome,
                    'Quantidade': this.state.ingrediente,
                    'Preço' : this.state.preco
                });
                alert("SALVO COM SUCESSO");
            }
        this.setState({
            nome: this.state.nome ='',
            ingrediente: this.state.ingrediente = '',
            preco: this.state.preco = ''
        })
    }

  render() {
    //   RETORNA A VIEW DO ESTOQUE
    if(this.state.estoque == 1 ){
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.titulo}>Painel administrativo</Text>
                </View>
                <View style={styles.continer_btns}>
                    <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
                </View>
                <View style={{alignItems: 'center', justifyContent:'center', marginTop: 350}}><Text>ESTOQUE</Text></View>
            </View>
            );    
    }
    // RETORNA A VIEW DAS PIZZAS
    else if(this.state.pizza == 1) {
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.titulo}>Painel administrativo</Text>
                </View>
                <View style={styles.continer_btns}>
                    <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
                </View>
                <View style={styles.cont_views}>
                  <View style={styles.card_pz}>
                    <Text style={{marginBottom: 25, color:'black'}}>ADICIONAR AO CARDÁPIO:</Text>
                    <TextInput style={{ height: 30, borderColor: 'black', borderWidth: 1, width: 550 }} placeholder="NOME" onChangeText={nome => this.alteraNome(nome)}/>
                    <TextInput style={{ height: 30, borderColor: 'black', borderWidth: 1, width: 550 }} placeholder="INGREDIENTES (,)"  onChangeText={ingrediente => this.alteraIngrediente(ingrediente)}/>
                    <TextInput style={{ height: 30, borderColor: 'black', borderWidth: 1, width: 550 }} placeholder="PREÇO"  onChangeText={preco => this.alteraPreco(preco)}/>
                    <Button style={{marginTop: 150}}title="SALVAR" color="#66CDAA" onPress={() => {this.salvaDadosPizza()}}/>
                  </View>
                  <View style={styles.card}><Text>REMOVER DO CARDÁPIO</Text></View>
                  <View style={styles.card}><Text>EDITAR ITEM EXISTENTE</Text></View>
                </View>
            </View>
            );   
    }
    // RETORNA A VIEW DAS BEBIDAS 
    else if(this.state.bebida == 1){
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.titulo}>Painel administrativo</Text>
                </View>
                <View style={styles.continer_btns}>
                    <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
                </View>
                <View style={styles.cont_views}>
                  <View style={styles.card}><Text>ADICIONAR AO CARDÁPIO:</Text></View>
                  <View style={styles.card}><Text>REMOVER DO CARDÁPIO</Text></View>
                  <View style={styles.card}><Text>EDITAR ITEM EXISTENTE</Text></View>
                </View>
            </View>
            );   
    }
    // RETORNA A VIEW DOS TRIOS 
    else if(this.state.trio == 1 ){
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.titulo}>Painel administrativo</Text>
                </View>
                <View style={styles.continer_btns}>
                    <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
                </View>
                <View style={styles.cont_views}>
                  <View style={styles.card}><Text>ADICIONAR AO CARDÁPIO:</Text></View>
                  <View style={styles.card}><Text>REMOVER DO CARDÁPIO</Text></View>
                  <View style={styles.card}><Text>EDITAR ITEM EXISTENTE</Text></View>
                </View>
            </View>
            );   
    }
    // RETORNA A VIEW DAS SOBREMESAS
    else if(this.state.sobremesa == 1){
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.titulo}>Painel administrativo</Text>
                </View>
                <View style={styles.continer_btns}>
                    <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
                </View>
                <View style={styles.cont_views}>
                  <View style={styles.card}><Text>ADICIONAR AO CARDÁPIO</Text></View>
                  <View style={styles.card}><Text>REMOVER DO CARDÁPIO</Text></View>
                  <View style={styles.card}><Text>EDITAR ITEM EXISTENTE</Text></View>
                </View>
            </View>
            );   
    }
    // RETORNA A VIEW DOS ADICIONAIS
    else if(this.state.adicional == 1){
        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.titulo}>Painel administrativo</Text>
                </View>
                <View style={styles.continer_btns}>
                    <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
                </View>
                <View style={styles.continer_btns}>
                    <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
                </View>
                <View style={styles.cont_views}>
                    <View style={styles.card_pz}>
                        <Text style={{marginBottom: 25, color:'black'}}>ADICIONAR AO CARDÁPIO:</Text>
                        <TextInput style={{ height: 30, borderColor: 'black', borderWidth: 1, width: 550 }} placeholder="NOME" onChangeText={nome => this.alteraNome(nome)}/>
                        <TextInput style={{ height: 30, borderColor: 'black', borderWidth: 1, width: 550 }} placeholder="QUANTIDADE"  onChangeText={ingrediente => this.alteraIngrediente(ingrediente)}/>
                        <TextInput style={{ height: 30, borderColor: 'black', borderWidth: 1, width: 550 }} placeholder="PREÇO"  onChangeText={preco => this.alteraPreco(preco)}/>
                        <Button style={{marginTop: 150}}title="SALVAR" color="#66CDAA" onPress={() => {this.salvaDadosAdicional()}}/>
                    </View>
                    <View style={styles.card}><Text>REMOVER DO CARDÁPIO</Text></View>
                    <View style={styles.card}><Text>EDITAR ITEM EXISTENTE</Text></View>
                </View>
            </View>
            );   
    }
    // RETORNA O ESTADO INICIAL DA APLICAÇÃO
    return (
    <View style={styles.container}>
        <View>
        <Text style={styles.titulo}>Painel administrativo</Text>
        </View>
        <View style={styles.continer_btns}>
            <Button style={styles.btns} title="ESTOQUE" color="#DAA520" onPress={() => {this.mostraEstoque();}}/>
        </View>
        <View style={styles.continer_btns}>
            <Button title="PIZZAS" color="#DAA520" onPress={() => {this.mostraPizza();}}/>
        </View>
        <View style={styles.continer_btns}>
            <Button title="BEBIDAS" color="#DAA520" onPress={() => {this.mostraBebida();}}/>
        </View>
        <View style={styles.continer_btns}>
            <Button title="TRIOS" color="#DAA520" onPress={() => {this.mostraTrio();}}/>
        </View>
        <View style={styles.continer_btns}>
            <Button title="SOBREMESAS" color="#DAA520" onPress={() => {this.mostraSobremesa();}}/>
        </View>
        <View style={styles.continer_btns}>
            <Button title="ADICIONAIS" color="#DAA520" onPress={() => {this.mostraAdicional();}}/>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 35
    },
    container:{
        flex:1,
    },
    continer_btns:{
        margin: 3
    },
    btns:{
        marginBottom: 3
    },
    cont_views:{
      flex:1,
      backgroundColor:'#fff',
      flexDirection:'row'  ,
    },
    card:{
      flexDirection:'row',
      width:'33%',
      height: 500,
      margin:3,
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'center'
    },
    card_pz:{
      width:'33%',
      height: 500,
      margin:3,
      backgroundColor: '#D3D3D3',
      borderRadius: 10,
      alignItems: 'flex-start',
    }
});

