import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import { isIOS } from '../../utils';
import ErrorText from './ErrorText';

interface Props {
    placeholder: string;
    value?: string;
    onChange?: any;
    secureCheck?: any;
    validation?: any;
};

const Input: React.FunctionComponent<Props> = ({
    placeholder,
    value,
    onChange,
    secureCheck,
    validation
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <>
            <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
                <View style={style.textContainer}>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={theme.lightTextColor}
                        style={{ color: theme.textColor }}
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={secureCheck}
                    />   
                </View>    
            </View>  
            <ErrorText
                error={validation}
            /> 
        </>
    );
};

export default Input;

interface Style {
    containerNew: ViewStyle;
    textContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    containerNew: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        paddingTop: isIOS() ? 10 : 0,
        paddingBottom: isIOS() ? 0 : 0,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    textContainer: {
        flex: 9,
        paddingTop: isIOS() ? 10 : 0,
        paddingBottom: isIOS() ? 10 : 0,
    },
})
