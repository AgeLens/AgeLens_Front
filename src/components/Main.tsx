import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled, { keyframes } from "styled-components";
import useSound from "use-sound";
/*Assets*/
import cameraSfx from "../assets/sound/cameraSfx.mp3";
import { Link } from "react-router-dom";
import axios from "axios";

/* 
http://10.150.151.219:5000/api

보내는 형식
{
  "img": "base64 변환한거"
}

반환 형식
{
  "인덱스": "나이(숫자)",
  ...
}
*/

interface ResponseData {
	data: {
		age: string | number;
		img: string;
	};
}

export default function Main() {
	const [captureEnable, setCaptureEnable] = useState<boolean>(false);
	const [url, setUrl] = useState<string | null>(null);
	const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);
	const [haveCam, setHaveCam] = useState<boolean>(false);
	const [data, setData] = useState<{ age: string | number; img: string }>();

	const webcamRef = useRef<Webcam>(null);
	const capture = () => {
		const imageSrc = webcamRef.current?.getScreenshot();
		if (imageSrc) {
			console.log(imageSrc);
			setUrl(imageSrc);
			postUrl(imageSrc);
		}
	};
	const postUrl = async (src: string) => {
		setIsActiveBtn(false);
		await axios
			.post("http://10.150.150.209:5000/api", {
				img: src,
			})
			.then((response: ResponseData) => {
				console.log(response.data);
				setData(response.data);
				setIsActiveBtn(true);
			})
			.then((response) => {
				// console.log(response);
			});
	};

	const [cameraPlay] = useSound(cameraSfx);
	return (
		<AllSection>
			<Header>
				<Title>RKO</Title>
			</Header>
			{/* {isCaptureEnable || <button onClick={() => setCaptureEnable(true)}>start</button>} */}
			<MainSection>
				<WebCamStyle>
					<Webcam
						audio={false}
						width={800}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						onUserMedia={() => {
							setHaveCam(true);
						}}
					/>
					{haveCam ? (
						<CaptureBtn
							onClick={() => {
								capture();
								setCaptureEnable(true);
								cameraPlay();
							}}
						></CaptureBtn>
					) : (
						<NoCamPopUp>
							<NoCamText>캠이 존재하지 않습니다.</NoCamText>
						</NoCamPopUp>
					)}
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
						{isActiveBtn ? (
							<ResultBtn>
								<Link to="/result" state={{ data: data }} style={{ fontWeight: "bold" }}>
									결과 보기!
								</Link>
							</ResultBtn>
						) : (
							<Loading>
								<div></div>
								<div></div>
								<div></div>
							</Loading>
						)}
					</div>
				</CapturePopUp>
			) : null}
		</AllSection>
	);
}

// loading animation
const loadingAnime = keyframes`
	0%{
		transform: scaleY(0.6);
	}
	30%{
		transform: scaleY(1.2);
	}
	60%{
		transform: scaleY(0.6);
	}
	100%{
		transform: scaleY(0.6);
	}
`;

const Loading = styled.div`
	padding: 10px;
	background-color: rgba(255, 255, 255, 0.7);
	display: flex;
	gap: 5px;
	div {
		width: 8px;
		height: 35px;
		background-color: black;
		animation: ${loadingAnime} 1s ease-in-out infinite;
	}
	div:nth-child(1) {
		animation-delay: 0.2s;
	}
	div:nth-child(2) {
		animation-delay: 0.4s;
	}
	div:nth-child(3) {
		animation-delay: 0.6s;
	}
`;

// 전체 CSS 부분
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
	a {
		color: black;
		text-decoration: none;
	}
`;

const NoCamAnime = keyframes`
	0%{

	}
	30%{
		transform: rotateZ(360deg)
	}
	100%{
		transform: rotateZ(360deg)
	}
`;

const NoCamText = styled.span`
	font-size: 50px;
	background-color: rgba(1, 1, 1, 0.5);
	color: #ff3838;
	animation: ${NoCamAnime} 1s ease-in-out infinite forwards;
`;

const NoCamPopUp = styled(CapturePopUp)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	top: 0px;
	left: 0px;
`;
