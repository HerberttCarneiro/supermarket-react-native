import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeRowKey: null
        }
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (sec, rowId, direction) => {
                console.log('on close')
                if (this.props.activeRowKey != null) {
                    this.setState({ activeRowKey: null })
                }
            },
            onOpen: (sec, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item._id }, () => {
                    console.log(sec, rowId, direction, 'open');
                });
            },
            right: [
                {
                    text: 'Excluir',
                    type: 'delete',
                    onPress: () => {
                        Alert.alert(
                            'Alerta',
                            'Você tem certeza que deseja excluir?',
                            [
                                {
                                    text: 'Não', onPress: () => {
                                        alert('não excluir')
                                    }
                                },
                                {
                                    text: 'Sim', onPress: () => {
                                        this.props.parentFlatList.delete(this.state.activeRowKey)
                                    }
                                }
                            ],
                            { cancelable: true }
                        )
                    }
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        let { item, navigation } = this.props
        return (
            <Swipeout {...swipeSettings}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductView', { item })}>
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        margin: 10
    }
});