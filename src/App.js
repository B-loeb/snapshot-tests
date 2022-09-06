import GitHubCard from './GitHubCard/GitHubCard'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './App.css';

function App() {
  return (
    <div className="App">
     <Row>
      <Col style={{display: 'flex', justifyContent: 'center'}}>
        <GitHubCard />
      </Col>
     </Row>
    </div>
  );
}

export default App;
