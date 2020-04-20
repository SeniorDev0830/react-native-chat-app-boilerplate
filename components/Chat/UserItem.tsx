import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import ChatUserImage from './ChatUserImage';
import LastMessage from './LastMessage';
import ThemedText from '../UI/ThemedText';
import { useDarkMode } from 'react-native-dark-mode';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

interface Props {
    userImageSource: ImageSourcePropType;
    userName: string;
    status: string;
    selectItem: (event: GestureResponderEvent) => void
};

const UserItem: React.FunctionComponent<Props> = ({
    status,
    userImageSource,
    userName,
    selectItem
}: Props) => {

    const theme: AppTheme = useTheme();
    const mode = useDarkMode();

    return (
        <View style={style.container}>
            <ChatUserImage
                source={userImageSource}
                containerStyle={style.userImageContainer}
                imageStyle={{width: 50, height: 50, borderRadius: 50}}
            />
            <View style={style.contentContainer}>
                <TouchableOpacity onPress={selectItem}>
                    <View style={style.topContentContainer}>
                        <ThemedText styleKey="textColor" style={[style.userNameStyle, {color: mode ? theme.lightTextColor : theme.textColor}]}>{userName}</ThemedText>
                    </View>
                    <View style={[style.topContentContainer, { alignItems: 'flex-end' }]}>
                        <View style={style.lastMessageContainer}>
                            <LastMessage
                                lastMessage={status}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserItem;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    lastMessageContainer: ViewStyle;
    topContentContainer: ViewStyle;
    userImageContainer: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    contentContainer: {
        flex: 17,
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    lastMessageContainer: {
        flex: 9,
        paddingTop: 5,
    },
    topContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userImageContainer: {
        flex: 3
    },
    userNameStyle: {
        fontWeight: "bold",
        width: 100,
    }
})
