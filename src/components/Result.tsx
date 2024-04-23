import React from "react";
import { keyframes, styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Result() {
	const location = useLocation();
	const { age, img } = location.state.data;
	const formattedAge = Object.entries(age)
		.map(([key, value]) => `${key} : ${value}살`)
		.join(", ");
	console.log(age[Object.keys(age)[0]]);
	return (
		<AllSection>
			<Header>
				<Title>{"<--=AgeLens=-->"}</Title>
			</Header>
			{age[Object.keys(age)[0]] !== -1 ? (
				<MainSection>
					<WebCamStyle>
						<img src={`data:image/jpg;base64,${img}`} alt="Screenshot" />
					</WebCamStyle>
					<TextSection>
						<span>Result</span>
						<ResultText>{formattedAge}</ResultText>
						<Link to="/">돌아가기</Link>
					</TextSection>
				</MainSection>
			) : (
				<FailSection>
					<FailDiv>
						<ResultText>😭사진을 다시 찍어주세요😭</ResultText>
						<Link to="/">돌아가기</Link>
					</FailDiv>
				</FailSection>
			)}
		</AllSection>
	);
}

export default Result;

const AllSection = styled.div`
	/* background-color: #363b3b; */
	background-color: rgba(1, 1, 1, 0.9);
	width: 100vw;
	height: 100vh;
`;

const Title = styled.h1`
	color: #e9f1f7;
	font-size: 66px;
	font-weight: bold;
	text-align: center;
	-webkit-text-stroke-width: 2.5px;
	-webkit-text-stroke-color: black;
`;

const hBorderAnime = keyframes`
	0%{
		border-color: rgba(255, 255, 255, 0.8);
	}
	50%{
		border-color: rgba(255, 255, 255, 0.2);
	}
	100%{
		border-color: rgba(255, 255, 255, 0.8);
	}
`;

const Header = styled.header`
	width: 100%;
	height: 15%;
	background-color: rgba(255, 255, 255, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 2px solid white;
	border-bottom: 2px solid white;
	box-sizing: border-box;
	animation: ${hBorderAnime} 5s linear infinite forwards;
`;

const MainSection = styled.div`
	width: 100%;
	height: 85%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: 0.3s ease;
`;

const TextSection = styled.div`
	max-width: 500px;
	display: flex;
	flex-direction: column;
	padding: 30px 30px;
	text-align: center;
	gap: 30px;
	background-color: rgba(255, 255, 255, 0.6);
	border: 2px solid white;
	span:nth-child(1) {
		color: white;
		font-size: 48px;
		-webkit-text-stroke-width: 2.3px;
		-webkit-text-stroke-color: black;
		border-bottom: 3px solid black;
	}
	a {
		text-decoration: none;
		color: white;
		font-size: 30px;
		transition: transform 1s;
		a:hover {
			transform: rotateZ(360deg);
		}
	}
`;

const FailSection = styled(MainSection)`
	flex-direction: column;
`;

const ResultText = styled.span`
	color: white;
	background-color: rgba(1, 1, 1, 0.5);
	font-size: 48px;
`;

const WebCamStyle = styled.div`
	display: flex;
	position: relative;
	border: 5px solid rgba(255, 255, 255, 0.6);
	animation: ${hBorderAnime} 5s linear infinite forwards;
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
