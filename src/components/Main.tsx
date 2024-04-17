import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled, { keyframes } from "styled-components";

export default function Main() {
	const [captureEnable, setCaptureEnable] = useState<boolean>(false);
	const webcamRef = useRef<Webcam>(null);
	const [url, setUrl] = useState<string | null>(null);
	const capture = useCallback(() => {
		const imageSrc = webcamRef.current?.getScreenshot();
		if (imageSrc) {
			setUrl(imageSrc);
		}
	}, [webcamRef]);
	console.log(captureEnable);
	return (
		<AllSection>
			<Header>
				<Title>RKO</Title>
			</Header>
			{/* {isCaptureEnable || <button onClick={() => setCaptureEnable(true)}>start</button>} */}
			<MainSection>
				<WebCamStyle>
					<Webcam audio={false} width={800} ref={webcamRef} screenshotFormat="image/jpeg" />
					<CaptureBtn
						onClick={() => {
							capture();
							setCaptureEnable(true);
						}}
					></CaptureBtn>
				</WebCamStyle>
				{/* {url && (
					<WebCamStyle>
						<img src={url} alt="Screenshot" />
					</WebCamStyle>
				)} */}
			</MainSection>
			{captureEnable ? (
				<CapturePopUp>
					<PopUpHeader>
						<PopUpTitle>캡쳐 화면</PopUpTitle>
						<BackCamBtn onClick={() => setCaptureEnable(false)}>뒤로가기</BackCamBtn>
					</PopUpHeader>
					<div>{url && <PopUpImg src={url} alt="Screenshot" />}</div>
					<div>
						<ResultBtn>결과 보기!</ResultBtn>
					</div>
				</CapturePopUp>
			) : null}
		</AllSection>
	);
}

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
	justify-content: space-around;
	align-items: center;
	transition: 0.3s ease;
`;

const CaptureBtn = styled.div`
	position: absolute;
	bottom: 20px;
	left: 50%;
	margin-left: -35px; /* width의 50% */
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: white;
	box-shadow: 0px 0px 3px 1px black;
	transition: all 0.2s ease-in-out;
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

const WebCamStyle = styled.div`
	display: flex;
	position: relative;
	border: 5px solid #2e2c2f;
`;

const PopUpStartAnim = keyframes`
	0% {
		opacity: 0;
	}
	1% {
		opacity: 0.5;
	}
	100%{
		opacity: 1;
	}
`;

const CapturePopUp = styled.div`
	display: flex;
	gap: 30px;
	flex-direction: column;
	align-items: center;
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100%;
	background-color: rgba(1, 1, 1, 0.5);
	animation: ${PopUpStartAnim} 1s;
`;

const PopUpHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20%;
`;

const PopUpImg = styled.img`
	width: 650px;
	border: 3px solid white;
`;

const PopUpTitle = styled.h1`
	background-color: rgba(1, 1, 1, 0.8);
	font-size: 50px;
	color: white;
	margin-right: 20px;
`;

const BackCamBtn = styled.button`
	padding: 10px;
	font-size: 24px;
`;

const ResultBtn = styled.button`
	font-size: 24px;
	padding: 5px 10px;
	&:hover {
		cursor: pointer;
	}
`;
