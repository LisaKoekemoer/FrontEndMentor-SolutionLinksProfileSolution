import './App.css';
import Jessica from './images/avatar-jessica.jpeg'

function App() {
  return (
    <>
      <div className='profile-card'>
        
          <img src={Jessica} alt="Jessica the Front-End Developer"/>

          <h1>Jessica Randall</h1>
          <h4>London, United Kingdom</h4>

          <p>"Front-end developer and avid reader."</p>

        <div className='btn-wrap'>
          <button className='btn-btwn' type="submit">Github</button>
          <button className='btn-btwn' type="submit">Frontend Mentor</button>
          <button className='btn-btwn' type="submit">LinkedIn</button>
          <button className='btn-btwn' type="submit">Twitter</button>
          <button type="submit">Instagram</button>
        </div>

      </div>
    </>
  );
}

export default App;
