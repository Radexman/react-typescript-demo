import { Name } from './Person.types';

type PersonListProps = {
	persons: Name[];
};

const PersonList = (props: PersonListProps) => {
	return (
		<div>
			{props.persons.map((person, index) => (
				<h2 key={index}>
					{person.firstName}
					{person.lastName}
				</h2>
			))}
		</div>
	);
};

export default PersonList;
