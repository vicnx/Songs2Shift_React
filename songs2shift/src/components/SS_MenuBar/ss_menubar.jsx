import { Menubar } from 'primereact/menubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';
import './ss_menubar.css'
import { CONSTANTS } from 'global/constants';
import logo from "assets/logo.png";
import useApi from 'hooks/useApi';

export const SSMenubar = () =>{
	const { spotifyUserData ,getUserInfoSpotify, spotifyToken } = useApi();

  const start = <img className='menu-logo' src={logo} alt={CONSTANTS.title}/>;
  const end = (
    <> 
    <span style={{ marginRight: 10 }}>Aplicaciones conectadas:</span>
      <FontAwesomeIcon icon={faSpotify} size="lg" style={{ marginRight: 10, cursor: 'pointer', color: (spotifyToken ? 'green': null) }} />
      <FontAwesomeIcon icon={faDeezer} size="lg" style={{ marginRight: 10, cursor: 'pointer' }}/>
    </>
  );

  return <Menubar start={start} end={end} />;
}