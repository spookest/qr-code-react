import code from "./assets/image-qr-code.png";

function App() {
	return (
		<div className="bg-slate-200">
			<div className="m-auto flex min-h-screen max-w-xs items-center justify-center">
				<div className="flex flex-col rounded-3xl bg-white">
					<div className="m-4">
						<img
							className="rounded-xl"
							width={576}
							height={576}
							src={code}
							alt="QR Code"
						/>
						<div className="my-6">
							<span className="text-center">
								<span className="font-outfit text-xl font-bold tracking-wider">
									<h1>Improve your front-end</h1>
									<h1>skills by building projects</h1>
								</span>
								<p className="mx-2 mt-4 text-base font-normal leading-tight tracking-tight text-gray-400">
									Scan the QR code to visit Frontend Mentor and take your coding
									skills to the next level
								</p>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
