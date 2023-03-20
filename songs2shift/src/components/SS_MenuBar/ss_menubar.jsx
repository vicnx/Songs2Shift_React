import { Menubar } from 'primereact/menubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';
import './ss_menubar.css'
import { CONSTANTS } from 'global/constants';
import logo from "assets/logo.png";

export const SSMenubar = () =>{
  const start = <img className='menu-logo' src={logo} alt={CONSTANTS.title}/>;
  const end = (
    <> 
    <span style={{ marginRight: 10 }}>Aplicaciones conectadas:</span>
      <FontAwesomeIcon icon={faSpotify} size="lg" style={{ marginRight: 10, cursor: 'pointer' }} />
      <FontAwesomeIcon icon={faDeezer} size="lg" style={{ marginRight: 10, cursor: 'pointer' }}/>
    </>
  );

  return <Menubar start={start} end={end} />;
}