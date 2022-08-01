import styled from "styled-components";

export const InputForm = styled.input`
  font-size: 1.5em;
  color: #0969da;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #212529;
  font-weight: 700;
`;

export const Text = styled.h1`
  font-size: 2em;
  color: #212529;
  display: flex;
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  column-gap: 1em;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  column-gap: 1em;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.form`
  padding: 20px 80px;
  background-color: #eefcff;
  display: flex;
  justify-content: center;
  margin: 20px 400px;
  border-radius: 20px;
  flex-direction: column;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  color: #ffffff;
  padding: 6px 12px;
  cursor: pointer;
  text-align: center;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  &:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #eef1ff;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #084298;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: #084298;
`;
