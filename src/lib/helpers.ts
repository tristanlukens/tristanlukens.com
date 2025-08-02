export const formatHygraphDate = (date: string) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const [YYYY, MM, DD] = date.split('-'); // Hygraph parses dates in YYYY-MM-DD
	return `${months[parseInt(MM) - 1]} ${DD}, ${YYYY}`;
};
