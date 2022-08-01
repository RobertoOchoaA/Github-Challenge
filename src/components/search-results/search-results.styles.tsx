import styled from "styled-components";

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 40px;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #eef1ff;
  margin: 0px 400px;
  border-radius: 20px;
`;

export const TitleLoading = styled.h1`
  text-align: center;
  color: #0969da;
`;

export const TitleEmpty = styled.h1`
  text-align: center;
  color: #842029;
`;

export const TitleError = styled.h1`
  text-align: center;
  color: #ff0000;
`;
