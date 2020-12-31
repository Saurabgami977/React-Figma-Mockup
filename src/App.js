import { Grid } from '@material-ui/core';
import './App.css';
import Appbar from './Components/Appbar/Appbar';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Appbar />
        <Content />
      </Grid>
    </div>
  );
}

export default App;
