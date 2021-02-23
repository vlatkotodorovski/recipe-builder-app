import styled from 'styled-components';

export const Wrapper = styled.div`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width:100%;
}

.btn-add-new-recipe {
        display: flex;
        background-color: #008CBA;
        color: white;
        width: 10rem;
        height: fit-content;
        padding: 0.5rem;
        align-self: flex-end;
        border-radius: 15px;
        font-size: 1.5rem;
        justify-content: center;
        margin: 0 auto;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
                transform: scale(1.1)
            }
    }

`;