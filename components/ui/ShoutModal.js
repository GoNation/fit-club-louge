import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  Button,
  Image,
} from '@chakra-ui/react';
import { useModal } from 'hooks/useModal';

const ShoutModal = () => {
  const { isOpen, modalContent, closeModal } = useModal();

  return (
    <Box position={'fixed'} zIndex={99}>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          {modalContent && (
            <>
              <ModalHeader>{modalContent.title}</ModalHeader>
              <ModalBody>
                {modalContent.text}
                {modalContent.imageUrl && (
                  <Image src={modalContent.imageUrl} alt={modalContent.title} />
                )}
              </ModalBody>
              <ModalFooter>
                <Button onClick={closeModal} variant="outline" color={'white'}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ShoutModal;
