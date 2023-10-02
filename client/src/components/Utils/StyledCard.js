import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 1em;
`;

export const CardImg = styled.img`
  background-color: #ffcaa6;
  height: 120px;
  width: 140px;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-25%);
    box-shadow: rgba(173, 216, 230, 1) 0px 13px 47px -5px, rgba(173, 216, 230, 1) 0px 8px 16px -8px;
  }
`;

export const TextTitle = styled.h1`
  font-weight: 600;
  font: 2em sans-serif;
  color: #224;
`;

export const TextBody = styled.h3`
  font-size: 1.2em;
  font-family: sans-serif;
  color: #595959;
  margin-left: 1em;
`;

export const TextTemp = styled.h4`
font-size: 0.9em;
  font-family: sans-serif;
  color: #595959;
  margin-left: 1em;
`;