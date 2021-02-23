import styled from 'styled-components';

export const Wrapper = styled.div`


    .form-wrapper {
        display: flex;
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100vh;
        z-index: 10;
        color: white;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content:center;


    }

    form {
        display: flex;
        width: 90%;
        height:90%;
        align-self: center; 
        justify-self: center;
        margin-left: 5%;
        flex-wrap: wrap;

    }

    .form-container {
        display: flex;
        width: 80%;
        height:80%;
        background-color: #fff;
        border-radius: 20px;
        align-self: center; 

    }

    .form-content {
        display: flex;
    justify-content: space-between;
    }

    h1 {
        color: black;
        margin-bottom: 2rem;
    }

    label {
        color: black;
    }

    

    .form-left {
        flex-basis: 45%;

        input {
            padding: 0.3rem;
            border-radius: 5px;
            border: 1px solid black;
        }

        label {
            font-size:1.2rem;
        }

        .recipe-name {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 0.7rem;
        }

        .recipe-source {
            display: flex;
            flex-direction: row;
            padding-bottom: 0.7rem;
            align-items: center;

        }

        .prepTime {
            display:flex;
            flex-direction: row;
            padding-bottom: 0.7rem;
            align-items: center;


            input {
                width: 8rem;
                margin-left:0.7rem;
            }

        }

        .prep-instruction {
            flex-direction: row;
            textarea {
                margin-top:1rem;
            }
        }
    }
    

    

    .form-right {
        flex-basis: 45%;
        input {
            padding: 0.3rem;
            border-radius: 5px;
            border: 1px solid black;
        }

        select {
            padding: 0.3rem;
            border-radius: 5px;
            border: 1px solid black;
        }

        label {
            padding-left: 0.5rem;
            padding-right: 0;
            font-size: 1.2rem;
        }

        .ingredients-entry {
        display: flex;
        flex-direction: row;
        max-height: 2rem;
        min-height: fit-content;
        align-items: center;
        margin-bottom: 1rem;

        .btn-remove-ingredient {
            background-color: #f44336;
            outline: none;
            border: none;
            border-radius: 5px;
            padding: 0.3rem;
            margin-left: 0.2rem;
            color: white;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                transform: scale(1.1)
            }
        }
         
    }
    .btn-add-ingredient{
            background-color: #4CAF50;
            width: 10rem;
            cursor: pointer;
            margin: 0 auto;
            display: flex;
            outline: none;
            border: none;
            border-radius: 5px;
            padding: 0.3rem;
            color: white;
            justify-content: center;
            margin-top: 1rem;
            font-size: 1.05rem;
            transition: 0.3s;

            &:hover {
                transform: scale(1.1)
            }
        }
    }

    .btn-add-recipe {
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

    .btn-close-recipeEntry {
        display: flex;
        max-height: 1rem;
    flex-direction: row;
    justify-content: flex-end;

        button {
            width: 3rem;
    height: 3rem;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
        }
        
    }

`;