import React from "react";
import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Result() {
	const location = useLocation();
	const { age, img } = location.state.data;
	const formattedAge = Object.entries(age)
		.map(([key, value]) => `${key} : ${value}살`)
		.join(", ");
	return (
		<AllSection>
			<Header>
				<Title>RKO</Title>
			</Header>
			{age.key1 === -1 ? (
				<MainSection>
					<WebCamStyle>
						<img src={`data:image/jpg;base64,${img}`} alt="Screenshot" />
					</WebCamStyle>
					<ResultText>{formattedAge}</ResultText>
				</MainSection>
			) : (
				<MainSection>
					<FailDiv>
						<ResultText>😭사진을 다시 찍어주세요😭</ResultText>
						<Link to="/">돌아가기</Link>
					</FailDiv>
				</MainSection>
			)}
		</AllSection>
	);
}

export default Result;

const AllSection = styled.div`
	background-color: #475b63;
	width: 100vw;
	height: 100vh;
`;

const Title = styled.h1`
	color: white;
	font-size: 60px;
	font-weight: bold;
	text-align: center;
`;

const Header = styled.header`
	width: 100%;
	height: 15%;
	background-color: rgba(255, 255, 255, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 2px solid white;
	border-bottom: 2px solid white;
	box-sizing: border-box;
`;

const MainSection = styled.div`
	width: 100%;
	height: 85%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	transition: 0.3s ease;
`;

const ResultText = styled.span`
	color: white;
	background-color: rgba(1, 1, 1, 0.5);
	font-size: 48px;
`;

const WebCamStyle = styled.div`
	display: flex;
	position: relative;
	border: 5px solid #2e2c2f;
`;

const FailDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	a {
		font-size: 30px;
		color: #ff9090;
		text-decoration: none;
	}
`;
