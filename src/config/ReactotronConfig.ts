import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
    interface Console {
        tron: any;
    }
}

if (__DEV__) {
    const tron = Reactotron.configure({ host: '192.168.100.11' })
        .useReactNative()
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect();

    tron.clear!();

    console.tron = tron;
}
