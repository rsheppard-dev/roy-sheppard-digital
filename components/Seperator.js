const Seperator = ({ dark = false, rotate = false }) => {
	return (
		<div className='w-screen'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1962 61'
				width='1962'
				height='61'
				className={`z-30 -top-1 left-0 min-w-screen ${
					dark ? 'text-accent-100' : 'text-white'
				} ${rotate && 'rotate-180'}`}
			>
				<path
					d='M1962,30.93h-.22c-3.6,0-3.6-12.87-7.2-12.87s-3.6-5.44-7.19-5.44-3.6,12.43-7.19,12.43-3.6-6.85-7.19-6.85-3.6-1-7.19-1-3.6,2.75-7.19,2.75-3.6,2.17-7.19,2.17-3.6-6.08-7.19-6.08-3.6,8.62-7.19,8.62-3.6,6.76-7.19,6.76-3.6-14.4-7.19-14.4-3.59,12.44-7.19,12.44-3.6-3.3-7.19-3.3-3.6,2.41-7.19,2.41-3.6-12.21-7.19-12.21-3.59-1.5-7.19-1.5-3.59,7.41-7.19,7.41-3.59-.69-7.19-.69-3.6,5.78-7.19,5.78-3.6-9.66-7.19-9.66-3.6,8.12-7.19,8.12-3.6-.14-7.19-.14-3.6-12-7.2-12-3.6,16.4-7.19,16.4-3.6-2.71-7.19-2.71-3.6-3.43-7.2-3.43-3.6-1.45-7.19-1.45-3.6-4.86-7.19-4.86-3.6-3.07-7.2-3.07-3.6,13.69-7.19,13.69-3.6-5.31-7.19-5.31-3.6,1.12-7.19,1.12-3.6,3.39-7.2,3.39-3.59-8.6-7.19-8.6-3.6,12.1-7.19,12.1-3.6-7.72-7.19-7.72-3.6,8.06-7.19,8.06-3.59-5.37-7.19-5.37-3.6-3.51-7.19-3.51-3.59-6.21-7.19-6.21-3.59,9.64-7.19,9.64-3.59-6.45-7.19-6.45-3.6.77-7.19.77-3.6,4.38-7.19,4.38-3.6-3.55-7.19-3.55-3.6,2.12-7.2,2.12-3.6,4.31-7.19,4.31-3.6-6.57-7.19-6.57-3.6-8.29-7.19-8.29-3.6,11.48-7.2,11.48-3.6-1.8-7.2-1.8-3.6-4.22-7.19-4.22-3.6,7.13-7.2,7.13-3.6-8.45-7.19-8.45-3.6,10.85-7.19,10.85-3.6-11.36-7.19-11.36-3.6-2.48-7.19-2.48-3.6,5.86-7.2,5.86-3.6-4.16-7.19-4.16-3.6,13.45-7.19,13.45-3.6-14.92-7.19-14.92-3.6,9.82-7.19,9.82-3.6-2.65-7.19-2.65-3.6-1-7.19-1-3.6,9.08-7.19,9.08-3.6-14.62-7.2-14.62-3.6,2-7.19,2-3.6,14.69-7.19,14.69-3.6-6.7-7.19-6.7-3.6,1.51-7.2,1.51-3.6-12.08-7.2-12.08-3.6,11.65-7.19,11.65-3.6,4.08-7.2,4.08-3.6-1.81-7.19-1.81-3.6-3.31-7.19-3.31-3.6-11.06-7.2-11.06-3.6,3.58-7.19,3.58-3.6,4.54-7.19,4.54-3.6-.56-7.19-.56-3.6,3.78-7.19,3.78-3.6-11.27-7.19-11.27-3.6-.25-7.2-.25-3.6,9.18-7.19,9.18-3.6-5.55-7.19-5.55-3.6.7-7.19.7-3.6,13.27-7.2,13.27-3.6-18.22-7.19-18.22S1332.48,25,1328.89,25s-3.6,2.29-7.2,2.29-3.6-3.77-7.2-3.77-3.6-2.9-7.19-2.9-3.6-4.76-7.2-4.76-3.6,1.1-7.19,1.1-3.6,3.18-7.19,3.18-3.6-4.27-7.19-4.27-3.6,3.77-7.2,3.77-3.6-2-7.19-2S1260.54,25,1257,25s-3.6.24-7.19.24-3.6-7.41-7.2-7.41S1239,23,1235.37,23s-3.6,3-7.19,3-3.6,1.25-7.2,1.25-3.6,2-7.2,2-3.6-.63-7.2-.63-3.6,1.15-7.19,1.15-3.6.21-7.19.21-3.6-5-7.2-5-3.6-3.28-7.19-3.28-3.6,5.26-7.19,5.26-3.6-2.66-7.2-2.66-3.6-4.67-7.19-4.67-3.6.54-7.19.54-3.6,8.09-7.2,8.09-3.6-1.53-7.19-1.53-3.6-1.83-7.19-1.83-3.6-9.42-7.2-9.42-3.6.65-7.2.65-3.6.36-7.2.36-3.6,7.17-7.19,7.17S1095.07,13,1091.48,13s-3.6,18.19-7.2,18.19-3.6-10-7.19-10-3.6-8-7.19-8-3.6,12.92-7.2,12.92-3.6,2.44-7.19,2.44-3.6-6.16-7.19-6.16-3.6,3.81-7.2,3.81-3.6-.63-7.2-.63-3.6.59-7.19.59-3.6,3.24-7.2,3.24-3.6-1.67-7.2-1.67-3.6-3.33-7.19-3.33-3.6,4.71-7.19,4.71-3.6,1.86-7.2,1.86-3.6-16.65-7.19-16.65-3.6.51-7.2.51-3.6,9-7.19,9-3.6-2.2-7.2-2.2-3.6,2-7.2,2-3.6-9.89-7.2-9.89-3.6,7-7.2,7-3.6.81-7.19.81-3.6-2-7.2-2-3.6,7.81-7.2,7.81S915.18,20,911.59,20s-3.6-.53-7.19-.53-3.6,6.81-7.2,6.81-3.6-4.83-7.2-4.83-3.6-8.54-7.2-8.54-3.6,11.76-7.2,11.76-3.6-4.32-7.2-4.32-3.6,10-7.2,10-3.6-3.65-7.2-3.65-3.6-2.2-7.2-2.2-3.6,5.57-7.19,5.57-3.6-13.91-7.19-13.91-3.6,4.4-7.2,4.4-3.6-6.72-7.2-6.72-3.6,13.56-7.2,13.56-3.6,2.32-7.2,2.32-3.6-8.94-7.2-8.94S792.83,26,789.24,26s-3.6-2.61-7.2-2.61-3.6-5.43-7.2-5.43-3.6.56-7.2.56-3.6,9.77-7.2,9.77-3.6.55-7.2.55S749.64,20,746.05,20s-3.6-2.5-7.2-2.5-3.6,11.56-7.2,11.56-3.6-4.16-7.2-4.16-3.6-4.42-7.2-4.42-3.6.66-7.2.66-3.6,10.28-7.19,10.28-3.6-8.28-7.19-8.28S692.07,31,688.48,31s-3.6-7.41-7.2-7.41-3.6,5.16-7.19,5.16-3.6-10.57-7.19-10.57-3.59,11.48-7.19,11.48-3.59-7.43-7.19-7.43-3.6-3.16-7.19-3.16-3.6,7-7.19,7-3.6-.78-7.2-.78-3.6-4.39-7.2-4.39-3.6,3.45-7.2,3.45S612.94,31,609.35,31s-3.6-2.26-7.2-2.26-3.6-6-7.19-6-3.6-6.69-7.19-6.69-3.6-2.42-7.19-2.42-3.6,12.45-7.19,12.45-3.6-6.86-7.2-6.86-3.6-2-7.2-2-3.6.35-7.2.35-3.6,4.19-7.2,4.19S541,13.2,537.4,13.2s-3.6,4.64-7.19,4.64S526.61,28.3,523,28.3s-3.6-9.38-7.2-9.38-3.6,6.43-7.19,6.43-3.6,4.23-7.2,4.23-3.6-10.94-7.2-10.94-3.6,3.63-7.2,3.63-3.6,3.16-7.19,3.16-3.6,4.81-7.2,4.81S469,13,465.45,13s-3.6,14.63-7.2,14.63-3.6-2.63-7.2-2.63-3.6,6.19-7.2,6.19-3.6-1.84-7.2-1.84-3.6-3.85-7.2-3.85-3.6-1-7.19-1-3.6-8.94-7.19-8.94-3.6,1.66-7.2,1.66-3.6,3.62-7.2,3.62-3.6-7.25-7.2-7.25-3.6,6.47-7.2,6.47-3.6,11.13-7.2,11.13-3.6-10.29-7.2-10.29-3.6,1.18-7.2,1.18-3.6-9.23-7.2-9.23-3.6,3.61-7.2,3.61-3.6,14-7.2,14-3.6-9.75-7.2-9.75-3.6,9.09-7.2,9.09-3.6-13.06-7.2-13.06-3.6,9.46-7.2,9.46-3.6,4.45-7.2,4.45-3.6-17.27-7.2-17.27-3.6,14.93-7.2,14.93-3.6-3.23-7.2-3.23-3.6-12.21-7.2-12.21S274.67,25,271.07,25s-3.6,1.14-7.2,1.14-3.6,2.36-7.2,2.36-3.6.63-7.2.63-3.6-.92-7.2-.92-3.6,3.22-7.2,3.22S231.47,14,227.87,14s-3.6,3.45-7.2,3.45-3.6,9.8-7.2,9.8-3.6-2.69-7.2-2.69-3.6-1.57-7.2-1.57-3.6-6.13-7.19-6.13-3.6,8.5-7.2,8.5-3.6,4.1-7.2,4.1-3.6-8.6-7.2-8.6-3.6,9.84-7.19,9.84-3.6-15-7.2-15-3.6,4.17-7.2,4.17-3.6-3.6-7.2-3.6-3.6,6.22-7.2,6.22-3.6-.85-7.2-.85-3.6-8.55-7.2-8.55-3.6,7.81-7.2,7.81-3.6-8-7.2-8-3.6,6.47-7.2,6.47-3.6,1-7.2,1-3.6,11-7.2,11-3.6-2.25-7.2-2.25S73.09,24,69.49,24s-3.6,4.22-7.2,4.22-3.6-13.85-7.2-13.85S51.49,29,47.89,29s-3.6-6.74-7.2-6.74S37.09,24,33.49,24s-3.6-3.49-7.2-3.49-3.6,5.3-7.2,5.3-3.6,5.37-7.2,5.37-3.6-2.36-7.2-2.36C2.2,28.81,1.43,27.44,0,26.6V61H1962Z'
					fill='none'
				/>
				<path
					d='M0,0V26.6c1.43.84,2.2,2.21,4.69,2.21,3.6,0,3.6,2.36,7.2,2.36s3.6-5.37,7.2-5.37,3.6-5.3,7.2-5.3,3.6,3.5,7.2,3.5,3.6-1.69,7.2-1.69S44.29,29,47.89,29s3.6-14.64,7.2-14.64,3.6,13.85,7.2,13.85S65.89,24,69.49,24s3.6,5.06,7.2,5.06,3.6,2.25,7.2,2.25,3.6-11,7.2-11,3.6-1,7.2-1,3.6-6.47,7.2-6.47,3.6,8,7.2,8,3.6-7.81,7.2-7.81,3.6,8.55,7.2,8.55,3.6.85,7.2.85,3.6-6.22,7.2-6.22,3.6,3.6,7.2,3.6,3.6-4.17,7.2-4.17,3.6,15,7.2,15,3.59-9.84,7.19-9.84,3.6,8.6,7.2,8.6,3.61-4.1,7.2-4.1,3.6-8.5,7.2-8.5,3.59,6.2,7.19,6.2,3.6,1.57,7.2,1.57,3.6,2.69,7.2,2.69,3.6-9.8,7.2-9.8,3.6-3.45,7.2-3.45,3.6,17.34,7.2,17.34,3.6-3.22,7.2-3.22,3.6.92,7.2.92,3.6-.63,7.2-.63,3.6-2.36,7.2-2.36,3.6-1.14,7.2-1.14,3.6-12.13,7.2-12.13S281.87,25,285.47,25s3.6,3.23,7.2,3.23,3.6-14.93,7.2-14.93,3.6,17.27,7.2,17.27,3.6-4.45,7.2-4.45,3.6-9.46,7.2-9.46,3.6,13.06,7.2,13.06,3.6-9.09,7.2-9.09,3.6,9.75,7.2,9.75,3.6-14,7.2-14,3.6-3.61,7.2-3.61,3.6,9.23,7.2,9.23,3.6-1.18,7.2-1.18,3.6,10.29,7.2,10.29S382.68,20,386.27,20s3.6-6.47,7.2-6.47,3.6,7.25,7.2,7.25,3.6-3.62,7.2-3.62,3.6-1.66,7.2-1.66,3.59,8.94,7.19,8.94,3.59,1,7.19,1,3.6,3.85,7.2,3.85,3.6,1.84,7.2,1.84,3.6-6.19,7.2-6.19,3.61,2.63,7.2,2.63S461.86,13,465.45,13s3.6,17.28,7.19,17.28,3.6-4.81,7.2-4.81,3.59-3.16,7.19-3.16,3.6-3.63,7.2-3.63,3.6,10.94,7.2,10.94,3.61-4.23,7.2-4.23,3.6-6.43,7.19-6.43,3.6,9.38,7.2,9.38,3.59-10.42,7.19-10.42,3.6-4.64,7.19-4.64,3.59,8.56,7.19,8.56,3.6-4.19,7.2-4.19,3.6-.35,7.2-.35,3.61,2,7.2,2,3.61,6.86,7.2,6.86,3.6-12.45,7.19-12.45,3.6,2.42,7.19,2.42,3.6,6.69,7.19,6.69,3.6,6,7.19,6,3.6,2.26,7.2,2.26,3.59-6.62,7.19-6.62,3.6-3.45,7.2-3.45,3.6,4.39,7.2,4.39,3.61.78,7.2.78,3.6-7,7.19-7,3.6,3.16,7.19,3.16,3.6,7.43,7.19,7.43,3.6-11.48,7.19-11.48,3.6,10.57,7.19,10.57,3.6-5.16,7.19-5.16,3.6,7.41,7.2,7.41,3.59-7.87,7.19-7.87,3.6,8.28,7.19,8.28,3.59-10.28,7.19-10.28,3.6-.66,7.2-.66,3.6,4.42,7.2,4.42,3.61,4.16,7.2,4.16,3.6-11.56,7.2-11.56,3.6,2.5,7.2,2.5,3.59,8.83,7.19,8.83,3.6-.55,7.2-.55,3.6-9.77,7.2-9.77,3.6-.56,7.2-.56,3.61,5.43,7.2,5.43,3.6,2.61,7.2,2.61,3.59-5.23,7.19-5.23,3.6,8.94,7.2,8.94,3.61-2.32,7.2-2.32,3.6-13.56,7.2-13.56,3.6,6.72,7.2,6.72,3.6-4.4,7.2-4.4,3.6,13.91,7.19,13.91,3.6-5.57,7.19-5.57,3.6,2.2,7.2,2.2,3.59,3.61,7.19,3.61,3.6-10,7.2-10,3.6,4.32,7.2,4.32S879.2,13,882.8,13s3.6,8.54,7.2,8.54,3.61,4.83,7.2,4.83,3.6-6.81,7.2-6.81,3.6.53,7.19.53,3.6,7.38,7.19,7.38,3.6-7.81,7.2-7.81,3.6,2,7.2,2,3.59-.81,7.19-.81,3.6-7,7.2-7,3.6,9.89,7.2,9.89,3.6-2,7.2-2,3.61,2.2,7.2,2.2,3.6-9,7.19-9,3.61-.51,7.2-.51S987.16,31,990.75,31s3.6-1.86,7.2-1.86,3.6-4.71,7.19-4.71,3.6,3.33,7.19,3.33,3.6,1.67,7.2,1.67,3.6-3.24,7.2-3.24,3.59-.59,7.19-.59,3.61.63,7.2.63,3.6-3.81,7.2-3.81,3.59,6.16,7.19,6.16,3.6-2.44,7.19-2.44,3.6-12.92,7.2-12.92,3.6,8,7.19,8,3.6,10,7.19,10,3.6-18.19,7.2-18.19,3.59,10.67,7.19,10.67,3.59-7.17,7.19-7.17,3.6-.36,7.2-.36,3.61-.65,7.2-.65,3.6,9.42,7.2,9.42,3.6,1.83,7.19,1.83,3.6,1.53,7.19,1.53,3.6-8.09,7.2-8.09,3.6-.54,7.19-.54,3.6,4.67,7.19,4.67,3.6,2.66,7.2,2.66,3.6-5.26,7.19-5.26S1181.41,25,1185,25s3.6,4.91,7.2,4.91,3.6-.21,7.19-.21,3.59-1.15,7.19-1.15,3.6.63,7.2.63,3.61-2,7.2-2,3.6-1.25,7.2-1.25,3.6-3,7.19-3,3.6-5.14,7.19-5.14,3.6,7.41,7.2,7.41,3.6-.24,7.19-.24,3.6-7.43,7.19-7.43,3.6,2,7.19,2,3.6-3.77,7.2-3.77,3.59,4.27,7.19,4.27,3.6-3.18,7.19-3.18,3.6-1.1,7.19-1.1,3.6,4.76,7.2,4.76,3.6,2.9,7.19,2.9,3.6,3.77,7.2,3.77,3.6-2.29,7.2-2.29,3.6-12.22,7.19-12.22,3.6,18.22,7.19,18.22,3.6-13.27,7.2-13.27,3.6-.7,7.19-.7,3.6,5.55,7.19,5.55,3.6-9.18,7.19-9.18,3.6.25,7.2.25,3.59,11.27,7.19,11.27S1390,21,1393.62,21s3.6.56,7.19.56,3.6-4.54,7.19-4.54,3.6-3.58,7.19-3.58,3.6,11.06,7.2,11.06,3.6,3.31,7.19,3.31,3.6,1.81,7.19,1.81,3.6-4.08,7.2-4.08S1447.56,14,1451.16,14s3.61,12.08,7.2,12.08,3.6-1.51,7.2-1.51,3.6,6.7,7.19,6.7,3.6-14.69,7.19-14.69,3.6-2,7.19-2,3.61,14.62,7.2,14.62,3.6-9.08,7.19-9.08,3.6,1,7.19,1,3.6,2.65,7.19,2.65,3.6-9.82,7.19-9.82,3.6,14.92,7.19,14.92,3.6-13.45,7.19-13.45,3.6,4.16,7.19,4.16,3.6-5.86,7.2-5.86,3.6,2.48,7.19,2.48,3.6,11.36,7.19,11.36,3.6-10.85,7.19-10.85,3.6,8.45,7.19,8.45,3.6-7.13,7.2-7.13,3.59,4.22,7.19,4.22,3.61,1.8,7.2,1.8,3.6-11.48,7.2-11.48,3.6,8.29,7.19,8.29,3.6,6.57,7.19,6.57,3.6-4.31,7.19-4.31,3.6-2.12,7.2-2.12,3.6,3.55,7.19,3.55,3.6-4.38,7.19-4.38,3.6-.77,7.19-.77,3.59,6.45,7.19,6.45,3.6-9.64,7.19-9.64,3.6,6.21,7.19,6.21,3.6,3.51,7.19,3.51,3.6,5.37,7.19,5.37,3.6-8.06,7.19-8.06,3.6,7.72,7.19,7.72,3.6-12.1,7.19-12.1,3.6,8.6,7.19,8.6,3.61-3.39,7.2-3.39,3.6-1.12,7.19-1.12,3.6,5.31,7.19,5.31,3.6-13.69,7.19-13.69,3.6,3.07,7.2,3.07,3.6,4.86,7.19,4.86,3.6,1.45,7.19,1.45,3.6,3.43,7.2,3.43,3.6,2.71,7.19,2.71,3.6-16.4,7.19-16.4,3.61,12,7.2,12,3.59.14,7.19.14,3.59-8.12,7.19-8.12,3.6,9.66,7.19,9.66,3.6-5.78,7.19-5.78,3.6.69,7.19.69,3.6-7.41,7.19-7.41,3.59,1.5,7.19,1.5,3.59,12.21,7.19,12.21,3.59-2.41,7.19-2.41,3.59,3.3,7.19,3.3S1879.08,17,1882.68,17s3.59,14.4,7.19,14.4,3.6-6.76,7.19-6.76,3.59-8.62,7.19-8.62,3.59,6.08,7.19,6.08,3.56-2.1,7.19-2.1,3.6-2.75,7.19-2.75,3.59,1,7.19,1,3.6,6.85,7.19,6.85,3.6-12.43,7.19-12.43,3.6,5.44,7.19,5.44,3.6,12.87,7.2,12.87h.22V0Z'
					fill='currentColor'
				/>
			</svg>
		</div>
	);
};

export default Seperator;
