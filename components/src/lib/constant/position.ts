const POSITION: Record<string, { [key: string]: string }> = {
  center: {
    position: 'fixed',
    top: '50%',
    left: '50%',

    transform: 'translate(-50%, -50%)',
  },
  bottom: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
};

export default POSITION;
