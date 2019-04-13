import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  padding: 200px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const DeleteEventsButton = styled.button`
  color: white;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  background-color: red;
  background-image: none;
  border: 1px solid #ccc;
  padding: 0.375rem 1rem;
  border-radius: 4px;
  line-height: normal;
  white-space: nowrap;
`;

export const AddEventButton = styled.button`
  color: white;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  background-color: blue;
  background-image: none;
  border: 1px solid #ccc;
  padding: 0.375rem 1rem;
  border-radius: 4px;
  line-height: normal;
  white-space: nowrap;
`;
