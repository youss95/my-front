import React, { useCallback, useState } from 'react';

const useModal = initialValue => {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  const modalOpenHandler = useCallback(
    e => {
      e.preventDefault();
      setIsModalOpen(!isModalOpen);
    },
    [isModalOpen],
  );

  return [isModalOpen, setIsModalOpen, modalOpenHandler];
};

export default useModal;
