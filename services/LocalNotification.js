import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification from "react-native-push-notification";

// import notifee, { EventType } from '@notifee/react-native';

class LocalNotifications {
    constructor(props) {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log('TOKEN:', token);
            },

            onNotification: function (notification) {
                const type = notification?.data?.type

                    
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            onRemoteFetch: function (notification) {

            },
            popInitialNotification: true,
            requestPermissions: true,

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: false,
                sound: false,
            },
        });

        PushNotification.createChannel(
            {
                channelId: 'dummy_project', // (required)
                channelName: 'DummyProject', // (required)
                channelDescription: '',
            },
            (created) => {
            },
        );

        PushNotification.getScheduledLocalNotifications(rn => {
        });
    }

    schduleNotification(title, message, date, data) {
        PushNotification.localNotificationSchedule({
            channelId: 'dummy_project',
            channelName: "DummyProject",
            title,
            message,
            data: data,
            date,
            priority: 'high',
            vibrate: true,
            vibration: 300,
            playSound: true,
            soundName: 'default',
            // data: data,
            userInfo: data
        })
    }



    deleteChanel() {
        PushNotification.getChannels(function (channel_ids) {
            PushNotification.deleteChannel('dummy_project')
        });
    }
}


export default LocalNotifications