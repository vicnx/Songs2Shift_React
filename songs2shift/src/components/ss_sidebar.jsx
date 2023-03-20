import { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';

const SSSidebarMenu = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(prevState => !prevState);
  };

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      className: 'p-button-lg p-button-text'
    },
    {
      label: 'Ajustes',
      icon: 'pi pi-fw pi-cog',
      className: 'p-button-lg p-button-text'
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
          <div className="p-mt-4 p-d-flex p-flex-column p-ai-center">
          <Avatar label="JS" size="xlarge" shape="circle" style={{ marginBottom: '1rem' }} />

            <h4 className="p-mt-2 p-mb-0">Nombre de usuario</h4>
          </div>
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