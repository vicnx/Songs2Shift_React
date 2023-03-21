import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import './ss_sidebar.css'
import { Divider } from 'primereact/divider';
import useApi from 'hooks/useApi';

const SSSidebarMenu = () => {
  const [visible, setVisible] = useState(false);
	const { spotifyUserData ,getUserInfoSpotify, spotifyToken } = useApi();


  useEffect(() => {
		// Comprobamos que existe el token de spotify para sacar las playlist.
		if (spotifyToken) {
      getUserInfoSpotify(spotifyToken);
		}
	}, [spotifyToken]);

  const toggleMenu = () => {
    setVisible(prevState => !prevState);
  };

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      className: 'sidebar-item p-button-lg p-button-text w-full'
    },
    {
      label: 'Ajustes',
      icon: 'pi pi-fw pi-cog',
      className: 'sidebar-item p-button-lg p-button-text w-full'
    },
  ];

  return (
    <div>
      <Button
        icon="pi pi-bars"
        className="p-button-rounded p-button-secondary"
        onClick={toggleMenu}
        style={{ position: 'absolute', right: 0 }}
      />
      <Sidebar
        visible={visible}
        showCloseIcon={false}
        onHide={() => setVisible(false)}
        className="p-sidebar-menu"
      >
        <div className="p-d-flex p-flex-column p-ai-center">
          <div className="sidebar-header p-mt-4 p-d-flex p-flex-column p-ai-center">
            <Avatar image={spotifyUserData.image} label={spotifyUserData.initials} size="xlarge" shape="circle" style={{ marginBottom: '1rem' }} />
            <h4 className="p-mt-2 p-mb-0">{spotifyUserData.name}</h4>
          </div>
          <Divider />
          <div className="p-mt-6">
            {items.map((item, index) => (
              <Button
                key={index}
                label={item.label}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SSSidebarMenu;