import ModalExample from './ModalExample';

function ModalSizeContents() {
  return (
    <div className="button-container">
      <ModalExample
        type="중앙(small)"
        modalPosition="center"
        modalSize="small"
        closeType="top"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>

      <ModalExample
        type="중앙(medium)"
        modalPosition="center"
        modalSize="medium"
        closeType="top"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>

      <ModalExample
        type="중앙(large)"
        modalPosition="center"
        modalSize="large"
        closeType="top"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>

      <ModalExample
        type="중앙(size 미지정)"
        modalPosition="center"
        closeType="top"
        titleText="titleText"
      >
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </ModalExample>
    </div>
  );
}

export default ModalSizeContents;
