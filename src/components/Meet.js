import React from "react";
import { useCallback } from "react";
import Button from "react-bootstrap/Button";

const Meet = ({ meet, setMeet, setOpenInfoModal }) => {
  const onClickInfoBtn = useCallback(()=> {
    setMeet(meet);
    setOpenInfoModal(true);
  }, [meet, setMeet, setOpenInfoModal]);

  return (
    <li>
      {meet.place.place_name}
      <br />
      {new Date(meet.date).toLocaleString()}
      <br />
      <Button variant="primary" onClick={onClickInfoBtn}>
        정보 확인
      </Button>
    </li>
  );
};

export default Meet;
