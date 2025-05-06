import styled from "@emotion/styled";

const AgreeTermModal = () => {
	return (
		<AgreementContainer>
			<AgreementWrap>
				<AgreementItem>
					<img src="./images/check.png" alt="" width={20} height={20} />
					<Text>[필수] 개인정보 수집이용 동의</Text>
				</AgreementItem>
				<AgreementItem>
					<img src="./images/check.png" alt="" width={20} height={20} />
					<Text>[필수] 고객정보 제 3자 제공동의</Text>
				</AgreementItem>
			</AgreementWrap>
		</AgreementContainer>
	);
};

export default AgreeTermModal;

const AgreementContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;

const AgreementWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const AgreementItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Text = styled.p`
	margin: 0;
	font-size: 12px;
	font-weight: 500;
	color: #8b95a1;
`;
