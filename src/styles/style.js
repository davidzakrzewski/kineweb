import styled from 'styled-components';
import colors from "./constants";

export const KineBox = styled.div`
    border-radius: 5px;
    box-shadow: 0 0px 8px rgba(0,0,0,0.16);
    padding: 20px;
    
    color: #626262;
    
    a {
        color: ${colors.blue};
    }
    
    h1 {
        color: ${colors.green};
        font-size: 1.4em;
        font-weight: bold;
    }
    
    .row {
        margin-top: 10px;
    }`;
