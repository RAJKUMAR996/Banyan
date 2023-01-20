import { Button, theme, withGalio, GalioProvider } from 'galio-framework';
import { Input, Block } from 'galio-framework';
const style = { flex: 1, alignItems: 'center',padding:15, justifyContent: 'center' };
export function RegisterScreen({ navigation }) {
    return (
      <View style={style}>
        <Text>Register</Text>
  
        <Input rounded placeholder='Email' />
        <Input rounded password viewPass placeholder='Password' />
        <Input rounded password viewPass placeholder='Confirm Password' />
        <Button
          onPress={() => navigation.navigate('Home')}
        >Register</Button>
      </View>
    );
  }

