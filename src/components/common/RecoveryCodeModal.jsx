/* eslint-disable react/no-unescaped-entities */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setIsRecoveryModalOpen } from '../../store/userSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const RecoveryCodeModal = () => {
  const isModalOpen = useSelector((state) => state.user.isRecoveryModalOpen);
  const recoveryCode = useSelector((state) => state.user.recoveryCode);
  const dispatch = useDispatch();

  
  const handleClose = () => dispatch(setIsRecoveryModalOpen(false));

  const closeModal = () => {
    dispatch(setIsRecoveryModalOpen(false))
  }

  return (
    <div className='z-1000'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style} className="bg-black text-white rounded-md">
            <Typography  id="transition-modal-title" variant="h6" component="h2">
              <p  className='font-bold'>
                Successfully Enabled MFA
              </p>
            </Typography>
            <Typography  id="transition-modal-description" sx={{ mt: 2 }}>
              <div>
                <p>This is your one-time recovery code. Please write it down as you won't be able to retrieve it later, so make sure you keep it safe!</p>
                <p className='text-sm font-bold'>{ recoveryCode }</p>
                <button onClick={closeModal} className='bg-[#E40914] px-4 py-2 rounded-lg mt-4'>Close</button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default RecoveryCodeModal;