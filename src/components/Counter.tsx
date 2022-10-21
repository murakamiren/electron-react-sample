import { FC } from "react";

type Props = {
	count: number;
};

const Counter: FC<Props> = ({ count }) => {
	return (
		<div>
			<p>count: {count}</p>
		</div>
	);
};

export default Counter;
