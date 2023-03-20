import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Loading({ loading }) {
	return (
		<>
			{loading ? (
				<div className="card flex justify-content-center">
					<ProgressSpinner />
				</div>
			) : (
				<></>
			)}
		</>
	);
}
