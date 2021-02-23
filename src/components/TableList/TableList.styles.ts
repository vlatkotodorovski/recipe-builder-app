import styled from 'styled-components';

export const Wrapper = styled.div`

    table {
        width: 90%;
        margin-top:3rem;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid black;
        border-collapse: collapse;

        #table-btns {
          display: flex;
          flex-direction:row;
          width:100%;
          border: none;
          padding-right: 0;
          border-top: 1px solid;

          button {
            background-color:red;
            outline: none;
            border: none;
            cursor: pointer;
            border:none;
            border-radius: 3px;
            color: white;
            padding: 2px;
            margin: 0 3px;
            transition: 0.3s;

            :nth-child(2){
                background-color: #008CBA;
            }

            &:hover {
                transform: scale(1.1)
            }
          }
        }
    }

    tbody tr:nth-child(odd) {
    
      background-color: #d9d9d9;
    }
    
    tbody tr:hover {
      background: #8c8c8c;
    }

    tbody td:nth-last-child(2) {

      word-break: break-all;
      
    }
  

  caption {
    border: 1px solid black;
    padding: 0.3rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

    th {
        border: 1px solid black;
        border-collapse: collapse;
    }

    

    td {
        border: 1px solid black;
        border-collapse: collapse;

    }

        thead tr th,
tbody tr td {
  width: 8em;
  min-width: 8em;
  max-width: 8em;
  text-align: center;
}

thead th,
tbody td {
    padding: 0.3rem;
}
`;