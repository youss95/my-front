export const calculateTextLenth = (desc, limit) => {
  let newDesc = desc.length > limit ? desc.substr(0, limit).concat('...') : desc;
  return newDesc;
};
