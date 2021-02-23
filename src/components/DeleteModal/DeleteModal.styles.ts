import styled from 'styled-components';

export const Wrapper = styled.div`
    .delete-wrapper {
        display: flex;
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100vh;
        z-index: 100;
        color: white;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content:center;
    }

    .delete-container {
        display: flex;
        width: 30%;
        height:30%;
        background-color: #fff;
        border-radius: 20px;
        align-self: center; 
        flex-direction: column;
        justify-content: space-around;

        h1 {
            color: black;
            display: inline-block;
            width: 100%;
            font-size: 1.7rem;
            text-align: center;
        }

        .delete-modal-group-btn{
            display: flex;
        }

        .delete-btns {
            display: flex;
            flex: 1;
            flex-direction:row;
            background-color: #f44336;
            outline: none;
            border: none;
            border-radius: 5px;
            padding: 0.3rem;
            color: white;
            cursor: pointer;
            transition: 0.3s;
            width: 4rem;
            font-size: 1.5rem;
            justify-content: center;
            align-items: center;
            margin: 1rem;

            :nth-child(2){
                background-color: green;
            }

            &:hover {
                transform: scale(1.1)
            }
        }
    }
`;