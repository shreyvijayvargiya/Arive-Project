import { ThemeProvider } from '@material-ui/core/styles';
import 'tailwindcss/tailwind.css';
import { theme } from '../utils/theme';
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default MyApp