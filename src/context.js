import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/*custom hook => başka dosyalarda AppContext ve useContext'i 
tek seferde import etmek için yazdık bu kısmı*/
/*önemli not : bu "useGlobalContext" fonksiyonunun başında "use" olmak zorunda
örneğin globalContext yaparsak hata verir (custom hooks olduğu için)*/

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
