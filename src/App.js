import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Auth from "./components/Auth";
import MeetList from "./components/MeetList";
import Bar from "./components/Bar";
import CreateModal from "./components/CreateModal";
import InfoModal from "./components/InfoModal";

function App() {
  const ctx = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [meets, setMeets] = useState([]);
  const [meet, setMeet] = useState([]);
  if (!ctx.user) {
    return <Auth />;
  }

  return (
    <>
      <Bar setOpenModal={setOpenModal} />
      {openModal && (
        <CreateModal
          meets={meets}
          setMeets={setMeets}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {openInfoModal && (
        <InfoModal
          meet={meet}
          openInfoModal={openInfoModal}
          setOpenInfoModal={setOpenInfoModal}
        />
      )}
      <MeetList meets={meets} setMeet={setMeet} setOpenInfoModal={setOpenInfoModal} />
    </>
  );
}

export default App;
