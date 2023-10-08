type GreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props;
	return (
		<div>
			{props.isLoggedIn ? (
				<h2>
					Welcome {props.name}! You have {messageCount} unread messages
				</h2>
			) : (
				<h2>Hello Guest!</h2>
			)}
		</div>
	);
};

export default Greet;
