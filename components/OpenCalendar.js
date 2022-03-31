const OpenCalendar = async () => {
	const url =
		'https://calendly.com/roysheppard-digital/30min?hide_gdpr_banner=1';
	// dynamically load react-calendly
	const { openPopupWidget } = await import('react-calendly');
	openPopupWidget({ url });
	return;
};

export default OpenCalendar;
