import styled from 'styled-components';
export const ListButton = styled.ul`
  display: flex;
  margin-bottom: 26px;
`;
export const ListItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  background-color: white;
  border: 1px solid ${p => p.theme.colors.buttonBorder};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  /* padding: 6px; */
  ::first-letter {
    text-transform: uppercase;
  }
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.buttonAccent};
  }
`;
