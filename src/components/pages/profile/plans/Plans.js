import './Plans.scss';
import { useState } from 'react';
const Plans = () => {
	const [products] = useState([
		{ plan: 'Basic', type: '4K + HR' },
		{ plan: 'Premium', type: '720p' },
		{ plan: 'Standard', type: '1080p' },
	]);
	return (
		<div className="plans">
			{products.map(plan => (
				<div className="plans__box">
					<div className="plans__info">
						<h5>{plan.plan}</h5>
						<h6>{plan.type}</h6>
					</div>
					<button>Subscribe</button>
				</div>
			))}
		</div>
	);
};

export default Plans;
