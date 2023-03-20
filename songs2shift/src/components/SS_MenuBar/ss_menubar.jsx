import { Menubar } from 'primereact/menubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';
import './ss_menubar.css'
export const SSmenubar = () =>{
  const start = <h3>Song2Shift</h3>;
  const end = (
    <> 
    <span style={{ marginRight: 10 }}>Aplicaciones conectadas:</span>
      <FontAwesomeIcon icon={faSpotify} size="lg" style={{ marginRight: 10, cursor: 'pointer' }} />
      <FontAwesomeIcon icon={faDeezer} size="lg" style={{ marginRight: 10, cursor: 'pointer' }}/>
    </>
  );

  return <Menubar start={start} end={end} />;
}