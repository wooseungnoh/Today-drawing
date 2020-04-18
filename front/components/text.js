import styled, { css } from 'styled-components';

const SIZES = {
  mini: '10px',
  tiny: '13px',
  small: '14px',
  medium: '15px',
  large: '16px',
  big: '19px',
  huge: '25px',
  massive: '50px',
  mainTitle: '35px',
};

const COLOR = {
  normal: '#707070',
};

const Text = styled.span`
  color: ${COLOR.normal};
  font-size: ${({ fontSize }) => SIZES[fontSize] || `${SIZES.medium}`};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
export default Text;
