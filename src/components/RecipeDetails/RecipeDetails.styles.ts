import styled from 'styled-components';

export const Wrapper = styled.div`
    .details-wrapper {
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

    .details-container {
        display: flex;
        width: 80%;
        height:80%;
        background-color: #fff;
        border-radius: 20px;
        align-self: center; 

    }

    p {
        color: black;
        font-size: 1.5rem;
        padding: 1.5rem;
    }

    .btn-close-details-modal {
        display: flex;
        max-height: 1rem;
    flex-direction: row;
    justify-content: flex-end;

        button {
            width: 4rem;
    height: 4rem;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
        }
        
    }

    .details-content {
        display: flex;
        flex-direction: row;
        margin-top: 4rem;
    }

    .left-details {

        display: flex;
        flex-direction: column;



        .delete-recipe-from-details {
        button {
            background-color: #f44336;
            outline: none;
            border: none;
            border-radius: 5px;
            padding: 0.5rem;
            margin-left: 1.2rem;
            margin-top: 2rem;
            width: 9rem;
            color: white;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                transform: scale(1.1)
            }
        
        }
        
            
    }
    }

    
`;