import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
export default class ProductView extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: "Visualizar",
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('ProductForm') }}>
                <Icon
                    style={{ marginRight: 20 }}
                    name="add-circle-outline"
                    size={23}
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        )
    });

    state = {
        item: {
            name: '',
            mark: '',
            category: ''
        }
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');

        return (
            <View style={styles.container}>
                <Text>Nome:{item.name}</Text>
                <Text>Categoria:{item.category}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    labelInput: {
        fontSize: 20,
    },
});