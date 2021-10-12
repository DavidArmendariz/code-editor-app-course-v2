import { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { UserFile } from 'types/Files';
import ExtensionIcon from '../extension-icon/ExtensionIcon';
import { useAppDispatch } from 'store/hooks';
import { closeFile } from 'store/thunks/close-file/closeFile';

type CustomTabLabelProps = {
  activeFile: UserFile;
};

const CustomTabLabel = (props: CustomTabLabelProps) => {
  const dispatch = useAppDispatch();
  const {
    activeFile: { id, name, extension },
  } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(id));
  };

  return (
    <CustomTabLabelContainer>
      <ExtensionIcon extension={extension} />
      <FileName>{name}</FileName>
      <CloseIcon onClick={onClose} sx={{ position: 'absolute', right: 0, color: (theme) => theme.font }} />
    </CustomTabLabelContainer>
  );
};

const CustomTabLabelContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
});

const FileName = styled('div')(({ theme }) => ({
  padding: '0px 5px',
  color: theme.font,
}));

export default CustomTabLabel;
