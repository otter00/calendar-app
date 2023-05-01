import { useEffect, useState } from "react";
import styled from "styled-components";
  
const CustomPopUp = () => {
 //state variables for the Modal State
 const [btnState, setBtnState] = useState(false);
  
 //toggle the Modal Display State
 const handleBtnClick = (e) => {
   setBtnState((prev) => !prev);
 };

 const StyledCustomPopUp = styled.div``
 const StyledLabel = styled.label``
 const StyledButton = styled.button``
const StyledPopUpBackdrop = styled.div``
const StyledCloseIcon = styled.div``
const StyledPopUp = styled.div``
  
 return (
   <StyledCustomPopUp id="grand-parent">
     <StyledLabel>Click the button to open the Custom PopUp</StyledLabel>
     <StyledButton>
       <button className="btn" onClick={(e) => handleBtnClick(e)}>
         Click
       </button>
     </StyledButton>
     <StyledPopUpBackdrop id="backdrop-parent" className={btnState ? "show-modal" : ""}>
       <StyledPopUp id="popup">
         <StyledCloseIcon onClick={(e) => handleBtnClick(e)}></StyledCloseIcon>
         I am a Modal !!
       </StyledPopUp>
     </StyledPopUpBackdrop>
   </StyledCustomPopUp>
 );
};
  
export default CustomPopUp;