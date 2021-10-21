import Form from "./pages/Form";
import { FormProvider } from "./context/FormState";

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
