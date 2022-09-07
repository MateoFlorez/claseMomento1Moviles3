import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles, viewsChild } from './assets/styles/myStyles.js'
import Banner from './components/Banner'
 
const App = () => {
  // Definicion de estados con sus respectivos metodos de actualizacion
  const [valor1,setValor1] = useState('');
  const [valor2,setValor2] = useState('');
  const [resultado,setResultado] = useState('');
  // Metodos
  let calcular = (oper) => {
    //Actualice el estado resultado a traves de su metodo respectivo
    let miresultado = 0;
    switch (oper){
      case "+":
        miresultado = parseFloat(valor1) + parseFloat(valor2)
        break;
      case "-":
        miresultado = parseFloat(valor1) - parseFloat(valor2)
        break;
      case "*":
        miresultado = parseFloat(valor1) * parseFloat(valor2)
        break;
      case "/":
        miresultado = parseFloat(valor1) / parseFloat(valor2)
        break;
    }
    setResultado(miresultado);
  }

  function limpiar(){
    setValor1('');
    setValor2('');
    setResultado(0);
  }
  return (
    <View style={[styles.container,styles.alignViews,{borderRadius:10,flexDirection:'column'}]}>
      <Banner img='calc.png'></Banner>
      {/* <View style={[viewsChild.views,styles.alignViews,{flex:1, backgroundColor:'yellowgreen'}]}>
        <Text>Barra de Navegacion</Text>
      </View> */}
      <View style={[viewsChild.views,styles.alignViews,{flex:5, backgroundColor:'#FFC0B3', marginBottom:10}]}>
        <Text>Valor 1</Text>
        <TextInput 
          placeholder='Ingrese el valor'
          style={{fontSize:20, fontWeight:'bold', borderWidth:2, borderRadius: 10, borderColor:'green', padding:5, textAlign: 'center', marginBottom:20}}
          keyboardType={Number}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
        />
        <Text>Valor 2</Text>
        <TextInput 
          placeholder='Ingrese el valor'
          style={{fontSize:20, fontWeight:'bold', borderWidth:2, borderRadius: 10, borderColor:'green', padding:5, textAlign: 'center', marginBottom:20}}
          keyboardType={Number}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <Text>{parseFloat(resultado).toFixed(2)}</Text>
        <Text>{`\n`}</Text>
        <View>
          <Button
            title='Sumar'
            onPress={() => calcular("+")}
          />
          <Text>{`\n`}</Text>
          <Button
            title='Restar'
            onPress={() => calcular("-")}
          />
        <Text>{`\n`}</Text>
          <Button
            title='Multiplicar'
            onPress={() => calcular("*")}
          />
          <Text>{`\n`}</Text>
          <Button
            title='Dividir'
            onPress={() => calcular("/")}
          />
          <Text>{`\n`}</Text>
          <Button
            title='Limpiar'
            onPress={limpiar}
          />
        </View>
      </View>
      {/* <View style={[viewsChild.views,styles.alignViews,{flex:1, backgroundColor:'pink',marginBottom:10}]}>
        <Text>Footer</Text>
      </View> */}
    </View>
  );
}

export default App;