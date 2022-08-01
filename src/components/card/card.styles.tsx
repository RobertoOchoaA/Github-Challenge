import styled from "styled-components";

export const CardContainer = styled.div`
  height: 23rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 15rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

export const Body = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: #eef1ff;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin: 0px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin: 0px;
`;

export const Button = styled.a`
  border-radius: 4px;
  margin: 0px 80px;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  color: #ffffff;
  padding: 6px 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;
