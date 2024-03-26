import React, {useState} from 'react';
import { View, Text, Button, Alert, Switch, StyleSheet, TextInput } from 'react-native';

const Today = (props) => {
    return(
        <View>
            <Button title={props.title} />
        </View>
    );
};

const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Text>Hello ken</Text>
            <Today 
            title="ok"
            color="black" />
            <Today 
            title="no" />
            <Today 
            title="yes" />
            <Today 
            title="none" />
            <Today 
            title="yet" />
            <Text>Hello ken</Text>
            <TextInput
                style={{
                    height:40,
                    borderColor:'gray',
                    borderWidth:1,
                }}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default App;
