import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Button,
    FlatList,
} from 'react-native';
import api from '../../src/services/api';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FlatListItem from '../../components/FlatListItem';

export default class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: false,
            products: [],
        }

    }

    static navigationOptions = ({ navigation }) => ({
        title: "Lista de Produtos",
        headerBackTitle: "Voltar",
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('ProductForm') }}>
                <Icon
                    style={styles.addCircleOutline}
                    name="add-circle-outline"
                    size={23}
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        )
    });

    async componentDidMount() {
        this.list();
    }
    async onRefresh() {
        await this.setState({ isFetching: true }, function () { this.list() });
        await this.setState({ isFetching: false })
    }
    async list() {
        const response = await api.get('products');

        this.setState({
            products: response.data
        })
    }
    async list() {
        const response = await api.get('products');

        this.setState({
            products: response.data
        })
    }
    async delete(id) {
        await api.delete(`products/${id}`);
        await this.list();
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                }}
            />
        );
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={this.renderSeparator}
                    data={this.state.products}
                    keyExtractor={item => item._id}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this} navigation={navigation}></FlatListItem>
                        )
                    }}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    
    item: {
        padding: 10,
    },
    addCircleOutline: {
        marginRight: 20
    }
});