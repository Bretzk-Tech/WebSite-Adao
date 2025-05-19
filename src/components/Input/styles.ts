import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    padding: 10px;
    font-size: 16px;
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-top: 4px;
  }
`;