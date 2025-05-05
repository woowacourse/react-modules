import { useEffect } from 'react';
function useEscapeModal(closeModal) {
    function handleClickOverlay(e, id) {
        if (e.target instanceof HTMLElement && e.target.id === id) {
            closeModal();
        }
    }
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeModal]);
    return { handleClickOverlay };
}
export default useEscapeModal;
//# sourceMappingURL=useEscapeModal.js.map