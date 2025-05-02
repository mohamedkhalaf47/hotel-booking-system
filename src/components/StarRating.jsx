import { Fragment } from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
	return (
		<Fragment>
			{Array(5)
				.fill("")
				.map((_, index) => (
					<img
						src={
							rating > index ? assets.starIconFilled : assets.starIconOutlined
						}
						alt={"star-icon"}
						className="w-4.5 h-4.5"
					/>
				))}
		</Fragment>
	);
};

export default StarRating;
