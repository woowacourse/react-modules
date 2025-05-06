import styled from "@emotion/styled";

const CardCompany = () => {
	return (
		<Container>
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

const CardImg = styled.img`
	margin: 0 auto;
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
	margin-top: 24px;
`;
