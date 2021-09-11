import Form from "../components/Form";
import { FormProvider } from "../components/context/FormState";

function App() {
    return (
        <div className="App">
            <FormProvider>
                <Form />
            </FormProvider>
        </div>
    );
}

export default App;
