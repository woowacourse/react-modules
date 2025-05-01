import styled from "@emotion/styled";

const CardCompany = () => {
	return (
		<Container>
			<Header>
				<Title>카드사 선택</Title>
			</Header>
			<CardContainer>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
				<CardImg src="./images/CardIcon.svg"></CardImg>
			</CardContainer>
		</Container>
	);
};

export default CardCompany;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	margin: 0;
	font-size: 18px;
	font-weight: 700;
`;

const CardImg = styled.img`
	margin: 0 auto;
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
	margin-top: 24px;
`;
