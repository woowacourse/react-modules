import { CloseButtonImage } from './CloseButtonImage';
import { CloseButtonProps, SubtitleProps, TitleProps } from './interfaces';
import styles from './ModalHeader.module.css';

interface ModalHeaderProps {
  title?: TitleProps;
  subtitle?: SubtitleProps;
  closeButton: CloseButtonProps;
}

const ModalHeader = ({ title, subtitle, closeButton }: ModalHeaderProps) => {
  return (
    <div className={styles['header']}>
      <span aria-label={'모달 닫기 버튼'} className={styles['button-close']} onClick={closeButton.onClose}>
        <CloseButtonImage />
      </span>
      <div className={styles['title-field']}>
        {title && title.position === 'left' && (
          <>
            <h1
              style={{ fontSize: title.fontSize || '18px', color: title.color || 'black' }}
              className={styles['title']}
            >
              {title.content}
            </h1>
            {subtitle && (
              <h2
                style={{ fontSize: subtitle.fontSize || '12px', color: subtitle.color || 'grey' }}
                className={styles['subtitle']}
              >
                {subtitle.content}
              </h2>
            )}
          </>
        )}
        {title && title.position === 'center' && (
          <>
            <h1
              style={{ textAlign: 'center', color: title.color || 'black', fontSize: title.fontSize || '18px' }}
              className={styles['title']}
            >
              {title.content}
            </h1>
            {subtitle && (
              <h2
                style={{ textAlign: 'center', color: subtitle.color || 'grey', fontSize: subtitle.fontSize || '12px' }}
                className={styles['subtitle']}
              >
                {subtitle.content}
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ModalHeader;
