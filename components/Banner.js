import { StyleSheet, Text, View, Image } from 'react-native';
import {styles,viewsChild} from '../assets/styles/myStyles';

const Banner = (props) => {
    return(
        <View style={[viewsChild.views,styles.alignViews,{flex:1, backgroundColor:'white'}]}>
            <Text>{props.title}</Text>
            <Text>{props.subtitle}</Text>
            <Image
                source={require(`../assets/images/${props.img}`)}
                style={{width:'20%', height:'80%', resizeMode:'stretch'}}
            />
        </View>
    );
}

export default Banner;