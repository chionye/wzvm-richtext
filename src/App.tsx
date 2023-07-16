import Editor from './components/Editor';
import { FormatContextProvider } from './hooks/FormatContext';

function App() {

  return (
    <FormatContextProvider>
      <Editor />
    </FormatContextProvider>
  )
}

export default App