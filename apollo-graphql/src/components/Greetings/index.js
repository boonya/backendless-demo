import {useMe} from '../../providers/Me/ContextProvider';
import Progressbar from '../Progressbar';

export default function Greetings() {
	const {data, loading} = useMe();

	if (loading) {
		return <Progressbar />;
	}

	return <p>Hello, {data?.name ? data.name : 'Mr(s)'}!</p>;
}
