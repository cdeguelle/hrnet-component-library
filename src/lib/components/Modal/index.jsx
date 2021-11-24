import styled from 'styled-components'

const Confirmation = styled.div`
    text-align: left;
    vertical-align: middle;
    position: relative;
    z-index: 2;
    max-width: 500px;
    box-sizing: border-box;
    width: 90%;
    background: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px #000;
`

const Blocker = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    padding: 20px;
    box-sizing: border-box;
    background-color: #000;
    background-color: rgba(0,0,0,0.75);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    & ::before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        margin-right: -0.05em;
    }
`

const ConfirmationClose = styled.img`
    position: absolute;
    top: -12.5px;
    right: -12.5px;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export default function Modal({onClickFunction, contentMessage, closeIcon}) {
    return (
        <Blocker>
            <Confirmation>
                {contentMessage}
                <ConfirmationClose src={closeIcon} onClick={() => onClickFunction()}></ConfirmationClose>
            </Confirmation>
        </Blocker>
    )
}