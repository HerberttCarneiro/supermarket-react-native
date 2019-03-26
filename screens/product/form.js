import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
  Button,
  TouchableOpacity,
} from 'react-native';

import api from '../../src/services/api';
import { NavigationActions } from 'react-navigation';
// import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductForm extends React.Component {
  state = {
    teste: `herbertt`,
    name: '',
    mark: '',
    category: ''
  }
  saveDetails() {
    alert('Save Details');
  }
  handleCreate = async () => {
    await api.post('products', this.state);
    await this.navigateToIndex();
  }

  navigateToIndex = () => {
    this.props.navigation.reset([NavigationActions.navigate({
      routeName: 'ProductIndex'
    })], 0)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />
          <Text style={styles.labelInput}>Marca</Text>
          <Picker
            selectedValue={this.state.mark}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ mark: itemValue })
            }>
            <Picker.Item label="São Jorge" value="1" />
            <Picker.Item label="Parmalat" value="2" />
            <Picker.Item label="Garoto" value="3" />
            <Picker.Item label="Nestle" value="4" />
            <Picker.Item label="Coca-cola" value="5" />
            <Picker.Item label="Antartica" value="6" />
          </Picker>
          <Text style={styles.labelInput}>Categoria</Text>
          <Picker
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ category: itemValue })
            }>
            <Picker.Item label="Bebida" value="1" />
            <Picker.Item label="Drogas" value="2" />
            <Picker.Item label="Aparatos sexuais" value="3" />
          </Picker>
          <Button
            onPress={this.handleCreate}
            title="Loading button"
            loading
          />
        </ScrollView>
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