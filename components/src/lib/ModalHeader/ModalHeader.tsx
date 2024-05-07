import { CloseButtonImage } from '../CloseButtonImage';
import { CloseButtonProps, SubtitleProps, TitleProps } from '../interfaces';
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
        {title && (
          <>
            <h3
              style={{
                textAlign: `${title.position || 'center'}`,
                fontSize: title.fontSize || '18px',
                color: title.color || 'black',
              }}
              className={styles['title']}
            >
              {title.content}
            </h3>
            {subtitle && (
              <h4
                style={{
                  textAlign: `${title.position || 'center'}`,
                  fontSize: subtitle.fontSize || '12px',
                  color: subtitle.color || 'grey',
                }}
                className={styles['subtitle']}
              >
                {subtitle.content}
              </h4>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ModalHeader;
