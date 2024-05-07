import { CloseButtonImage } from '../CloseButtonImage';
import { CloseButtonProps, SubtitleProps, TitleProps } from '../interfaces';
import styles from './ModalHeader.module.css';

interface ModalHeaderProps {
  title?: TitleProps;
  subtitle?: SubtitleProps;
  closeButton: CloseButtonProps;
}

const ModalHeader = ({ title, subtitle, closeButton }: ModalHeaderProps) => {
  const TitleElement = (title && title.as) || 'h3';
  const SubtitleElement = (subtitle && subtitle.as) || 'h4';

  return (
    <div className={styles['header']}>
      <button aria-label={'모달 닫기 버튼'} className={styles['button-close']} onClick={closeButton.onClose}>
        <CloseButtonImage />
      </button>
      <div className={styles['title-field']}>
        {title && (
          <>
            <TitleElement
              style={{
                textAlign: `${title.position || 'center'}`,
                fontSize: title.fontSize || '18px',
                color: title.color || 'black',
              }}
              className={styles['title']}
            >
              {title.content}
            </TitleElement>
            {subtitle && (
              <SubtitleElement
                style={{
                  textAlign: `${title.position || 'center'}`,
                  fontSize: subtitle.fontSize || '12px',
                  color: subtitle.color || 'grey',
                }}
                className={styles['subtitle']}
              >
                {subtitle.content}
              </SubtitleElement>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ModalHeader;
