# Button Module 사용 가이드

## Modal Component 사용 방법

### 설치

```bash
npm install your-modal-library
# 또는
yarn add your-modal-library
```

### 사용법

Modal 컴포넌트는 다음과 같이 사용할 수 있습니다.

```tsx
    <Modal position: 'center'>
      <Modal.Header>
        <Modal.Title title='예시' />
        <Modal.Button
          style={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          <img src={xButton}></img>
        </Modal.Button>
      </Modal.Header>
      <Modal.Body>
        <div>예시입니다.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button>취소</Modal.Button>
        <Modal.Button>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
```

## 컴포넌트 설명

`Modal` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.

- position: 모달의 위치를 결정합니다 ('bottom', 'center'). 기본값은 'center'입니다.
- size: 모달의 크기를 결정합니다 ('small', 'medium', 'large'). 기본값은 'medium'입니다.
- dimmed: 모달 배경의 색상을 정의합니다. 기본값은 'rgba(0, 0, 0, 0.35)'입니다.
- onDimmedClick: 모달 외부를 클릭할 때 실행되는 함수입니다.
- children: 모달에 포함할 요소들입니다.


`Modal.Header` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.

- children: 자식으로 헤더에 포함할 요소들입니다.

`Modal.Body` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.
- children: 자식으로 바디에 포함할 내용입니다.


`Modal.Footer` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.

- position: 푸터 내 요소의 배열 방향을 정의합니다 ('row', 'column'). 기본값은 'row'입니다.
- children: 자식으로 푸터에 포함할 요소들입니다.

`Modal.Title` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.
- children: 자식으로 문자열을 입력받는다.

`Modal.Button` 컴포넌트는 다음과 같은 props를 받을 수 있습니다.

- width : 'default' | 'stretch'하나를 선택해 버튼의 너비를 선택합니다. 기본값은 'default'입니다.
- onClick: 버튼을 클릭할 때 실행되는 함수입니다.
- style : 버튼의 색을 설정합니다. 기본값은 { backgroundColor: 'black', fontColor: 'white' }입니다.
