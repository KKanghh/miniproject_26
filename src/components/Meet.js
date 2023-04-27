import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const MeetLi = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 10px;
  width: 60%;
`;

const NameDiv = styled.div`
  width: 20%;
`;

const Meet = ({ meet }) => {
  console.log(meet);
  return (
    <MeetLi>
      <NameDiv>{meet.place.place_name}</NameDiv>
      <span>{new Date(meet.date).toLocaleString()}</span>
      <a href={meet.link} target="_blank">
        <Button>참여하기</Button>
      </a>
    </MeetLi>
  );
};

export default React.memo(Meet);
