import Loader from "../components/layout/Loader";
import loadable from '@loadable/component';

const ReduxContainer = loadable(() => import('./ReduxContainer'), {fallback: <Loader/>});

function App() {
    return (
        <ReduxContainer/>
    );
}

export default App;
